import React, { Component } from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import Comment from './components/Comment';
import Picker from './components/Picker';
import Filter from './components/Filter';
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
      <Container>
        <Header>
          <h1>Radicle issues</h1>
          <MetaContainer>
            {/* <Filter value="Filter" />
            <Picker marginLeft items={['open', 'closed']} /> */}
          </MetaContainer>
        </Header>
        {
          Object.entries(issues)
            // .filter(([number, issue]) => issue.state === "open")
            // .sort((a, b) => a["created-at"] < b["created-at"])
            .map(([number, issue]) =>
            <IssueContainer>
              <div key={number}>
                <Title>#{number} - {issue.title}<Label pass={issue.state === "open"} >{issue.state}</Label></Title>
                <Meta>opened <Timestamp time={issue["created-at"]} /> by {issue["git-username"]}</Meta>
                <Body>
                  <ReactMarkdown source={issue.body}/>
                </Body>
                {issue.comments && issue.comments.map((comment) => <Comment {...comment}/>)}
              </div>
            </IssueContainer>
          )
        }
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${colors.almostWhite};
  font-family: Helvetica, sans-serif;
  color: ${colors.black};
  font-size: 16px;
  padding-top: 24px;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 24px;
  margin: 0 auto 24px;
  max-width: 960px;
  border-radius: 4px;
  h1 {
    font-size: 24px;
    font-weight: bold;
    padding-top: 8px;
  }
`
const IssueContainer = styled.div`
  background-color: ${colors.white};
  padding: 24px;
  margin: 0 auto 24px;
  max-width: 960px;
  border-radius: 4px;
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Body = styled.div`
  line-height: 1.5;
  code {
    font-family: monospace;
    background-color: ${colors.almostWhite};
    color: ${colors.darkGrey};
    padding: 2px 4px;
  }
  li {
    list-style-type:disc;
  }
`


const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  font-weight: bold;
`
const Label = styled.span`
  ${({ pass }) =>
    pass
      ? `
      color: ${colors.black};
      background-color: ${colors.green};
    `
      : `
      color: ${colors.white};
      background-color: ${colors.red};
    `};
  font-weight: normal;
  border-radius: 4px;
  padding: 6px 8px 4px 8px;
  height: 36px;
  margin-left: 8px;
`
const Meta = styled.div`
  margin-top: .5em;
  margin-bottom: 1.5em;
  color: ${colors.darkGrey};
`
