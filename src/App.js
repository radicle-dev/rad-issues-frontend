import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Timestamp from 'react-timestamp';
import request from 'request';
import ReactMarkdown from 'react-markdown';
import { colors, RadLogo } from './styles';
import Comment from './components/Comment';
import Picker from './components/Picker';
import Filter from './components/Filter';
import { Machine } from 'jsradicle';

var hackedMachine = (mid, machine) => {
  var v = new Machine("dummy", mid);
  const regex = /(.*\/v0\/machines)\/(\w+)\/.*/
  if (typeof machine === "undefined") {
    v.url = window.location.pathname.replace(regex, '$1/$2')
  } else {
    v.url = window.location.pathname.replace(regex, '$1/' + machine)
  }
  console.log(v.url)
  return v
}

export default class App extends Component {

  state = {
    error: null,
    filter: {
      search: '',
      state: 'open',
    },
    issues: {},
    machine: null,
  }

  componentDidMount() {
    this.getIssues();
  }

  getIssues() {
    this.state.machine.query("(list-issues)")
      .then((result) => {
        this.setState({ issues: result })
      })
      .catch((error) => {
        this.setState({ error: error })
      });
  }


  componentWillMount() {
    this.setState({ machine: hackedMachine("monadic/radicle/issue")});

  }

  render() {
    const { filter, issues } = this.state;

    return (
      <Fragment>
        <Header>
          <h1>Radicle issues</h1>
          <Controls>
            <RefreshButton
              onClick={e => {
                this.getIssues();
              }}
            >
              Refresh
            </RefreshButton>
            <Filter
              onChange={e => {
                filter.search = e.target.value;

                this.setState({ filter });
              }}
              placeholder="Filter"
              value={filter.search}
            />
            <Picker
              marginLeft
              active={filter.state}
              items={['open', 'closed']}
              pickItem={state => {
                filter.state = state;

                this.setState({ filter });
              }}
            />
          </Controls>
        </Header>
        {Object.entries(issues)
          .filter(([number, issue]) => issue[":state"] === ":" + filter.state)
          .filter(([_, issue]) => {
            const search = filter.search.toLowerCase();

            return issue[":body"].toLowerCase().includes(search) ||
              issue[":git-username"].toLowerCase().includes(search) ||
              issue[":number"].toString().includes(search) ||
              issue[":title"].toLowerCase().includes(search);
          })
          // .sort((a, b) => a["created-at"] < b["created-at"])
          .map(([number, issue]) => (
            <IssueContainer key={number}>
              <TitleContainer>
                <Title>
                  #{number} - {issue[":title"]}
                </Title>
                <State open={issue[":state"] === ':open'}>{issue[":state"]}</State>
              </TitleContainer>
              <Meta>
                opened <Timestamp time={issue[':created-at']} /> by {issue[':git-username']}
              </Meta>
              <Divider />
              <ContentContainer>
                <Body>
                  <ReactMarkdown source={issue[":body"]} />
                </Body>
                {issue[":comments"] && issue[":comments"].map(comment => <Comment {...comment} />)}
              </ContentContainer>
            </IssueContainer>
          ))}
        <LogoContainer>
          <p>Built with</p>
          <Logo href="http://radicle.xyz" target="_blank">
            <RadLogo />
          </Logo>
        </LogoContainer>
        <GlobalStyle />
      </Fragment>
    );
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  h1 {
    font-size: 24px;
    font-weight: bold;
    padding-top: 8px;
  }
`;
const IssueContainer = styled.div`
  background-color: ${colors.white};
  margin-bottom: 24px;
  border-radius: 4px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContentContainer = styled.div`
  padding: 24px;
`;

const Body = styled.div`
  line-height: 1.5;
  code {
    font-family: monospace;
    background-color: ${colors.almostWhite};
    color: ${colors.darkGrey};
    padding: 2px 4px;
  }
  li {
    list-style-type: disc;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 8px 24px;
`;
const Title = styled.h3`
  font-weight: bold;
`;

const State = styled.span`
  ${({ open }) =>
    open
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
  margin-left: 8px;
`;
const Meta = styled.div`
  padding: 0 24px 24px 24px;
  color: ${colors.darkGrey};
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.lightGrey};
`;

const LogoContainer = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: ${colors.grey};
    padding-bottom: 8px;
  }
  padding-bottom: 24px;
`;

const Logo = styled.a`
  width: 106px;
  height: 24px;
  cursor: pointer;
`;

const RefreshButton = styled.button`
  margin: 0 16px;
  cursor: pointer;
  color: ${colors.blue};
  &:hover {
    text-decoration: underline;
  }
  &:active {
    opacity: 0.8;
  }
`;

const GlobalStyle = createGlobalStyle`
/* reset.css */
*,
*:before,
*:after {
  box-sizing: border-box;
}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, input, textarea {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  font-kerning: normal;
  text-decoration: none;
  vertical-align: baseline;
  background-color: transparent;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
/* global styles */

html {
  min-height: 100%;
  position: relative;
}
body {
  max-width: 960px;
  height: 100%;
  padding-top: 24px;
  margin: 0 auto;
  background-color: ${colors.almostWhite};
  font-family: Helvetica, sans-serif;
  color: ${colors.black};
  font-size: 16px;
}
`;
