import React, { Component } from 'react';
import styled from 'styled-components';
import Comment from './components/Comment';
import Output from './components/Output';
import { colors } from './utils';

// Get outputs of a chain.
const getOutputsByChain = (root, chain, onSuccess, onError) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', root + '/outputs/' + encodeURIComponent(chain) + '', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        var res = null;
        if (xhr.readyState === 4) {
            if (xhr.status === 204 || xhr.status === 205) {
                onSuccess();
            } else if (xhr.status >= 200 && xhr.status < 300) {
                try {res = JSON.parse(xhr.responseText); } catch (e) { onError(e); }
                if (res) onSuccess(res);
            } else {
                try { res = JSON.parse(xhr.responseText); } catch (e) { onError(e); }
                if (res) onError(res);
            }
        }
    };
    xhr.send(null);
};

const transformInput = (inp) => {
    if (inp != null && inp.hasOwnProperty("comment")) {
        return inp;
    } else {
        return {pre: inp};
    }
};

export default class App extends Component {

  state = { outputs: [], error: null };

  componentDidMount() {
      var getOuts = () => {
          getOutputsByChain(
              "http://radicle.xyz",
              "issue54",
              d => { this.setState({outputs: d.map(transformInput)}); },
              err => { this.setState({error: err}); }
          );
      };
      setInterval(getOuts, 1000);
  }

  render() {
    const {outputs} = this.state;
    return (
      <Container>
        <Title>Issue Foo</Title>
          {outputs.map(comment => comment.comment ? <Comment {...comment} /> : (comment.pre.length == 0 ? <Output string={"[]"}/>: <Output string={comment.pre}/>))}
      </Container>
    );
  }
}

const Container = styled.div`
  color: ${colors.black};
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  padding: 48px;
  margin: 0 auto;
  max-width: 1080px;
`
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 48px;
  font-size: 24px;
`