import React, { Component } from 'react';
import styled from 'styled-components';
import Comment from './components/Comment';
import Output from './components/Output';
import { colors } from './utils';
import request from "request";
import ReactMarkdown from "react-markdown";

export default class App extends Component {

  state = {issues: {}, error: null };

  componentDidMount() {
      var getOuts = () => {
          request(
              { uri: "http://replicate.machines.radicle.xyz/v0/machines/12D3KooWP7mz4WKrAwN9LXymnwntxMxj7sUYMCaWodX3EUDWmuVD/query",
                method: 'POST',
                json: {expression: "(list-issues)"},
                headers: {"Content-Type": "application/json",
                          "Accept": "application/radicle-json"}
              }
              , (error, response, body) => {
                  if (error) {
                      this.setState({error: error}); 
                  } else if (body.error) {
                      this.setState({error: body.error});
                  } else {
                      this.setState({issues: body.result});
                  }
              }
          )
      };
      setInterval(getOuts, 5000);
  }

  render() {
      const {issues} = this.state;
      return (
          Object.entries(issues).map(([n, i]) =>
              <Container key={n}>
                  <Title>{i.title}</Title>
                  <ReactMarkdown source={i.body}/>
                  {i.comments.map((c) => <Comment {...c}/>)}
              </Container>)
      // <Container>
      //   <Title>Issue Foo</Title>
      //       {issues.entries().map(issue => comment.comment ? <Comment {...comment} /> : (comment.pre.length === 0 ? <Output string={"[]"}/>: <Output string={comment.pre}/>))}
      // </Container>
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
