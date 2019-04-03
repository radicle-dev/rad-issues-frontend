import React, { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from 'styles';
import Timestamp from 'react-timestamp';
import ReactMarkdown from "react-markdown";

export default ({'git-username': username, body, 'created-at': createdAt}) => (
  <Fragment>
    <Header>
      <Icon idth="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="path-1-inside-1" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 5C4.89543 5 4 5.89543 4 7V15C4 16.1046 4.89543 17 6 17H11L13.5774 19.7492C14.1012 20.3079 15.033 20.0946 15.2614 19.3635L16 17H18C19.1046 17 20 16.1046 20 15V7C20 5.89543 19.1046 5 18 5H6Z"/>
        </mask>
        <path d="M11 17L12.4591 15.6321L11.8665 15H11V17ZM13.5774 19.7492L12.1183 21.1171L13.5774 19.7492ZM15.2614 19.3635L13.3524 18.767V18.767L15.2614 19.3635ZM16 17V15H14.5296L14.091 16.4035L16 17ZM6 7V7V3C3.79086 3 2 4.79086 2 7H6ZM6 15V7H2V15H6ZM6 15H2C2 17.2091 3.79086 19 6 19V15ZM11 15H6V19H11V15ZM15.0365 18.3813L12.4591 15.6321L9.54093 18.3679L12.1183 21.1171L15.0365 18.3813ZM13.3524 18.767C13.5809 18.036 14.5126 17.8226 15.0365 18.3813L12.1183 21.1171C13.6897 22.7933 16.485 22.1531 17.1704 19.9601L13.3524 18.767ZM14.091 16.4035L13.3524 18.767L17.1704 19.9601L17.909 17.5965L14.091 16.4035ZM18 15H16V19H18V15ZM18 15V19C20.2091 19 22 17.2091 22 15H18ZM18 7V15H22V7H18ZM18 7H22C22 4.79086 20.2091 3 18 3V7ZM6 7H18V3H6V7Z" fill="#90A0AF" mask="url(#path-1-inside-1)"/>
      </Icon>
      <User>{username} <span>commented</span>  <Timestamp time={createdAt} /></User>
    </Header>
    <CommentBox>
      <ReactMarkdown source={body}/>
    </CommentBox>
  </Fragment>
);

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.black};
  margin-bottom: 8px;
  margin-top: 24px;
`
const Icon = styled.svg`
  height: 24px;
  width: 24px;
  margin-right: 12px;
  min-width: 24px;
`
const User = styled.p`
  color: ${colors.black};
  font-weight: normal;
  span {
    font-weight: normal;
    color: ${colors.darkGrey}
  }
`

const CommentBox = styled.div`
  background-color: ${colors.almostWhite};
  color: ${colors.darkGrey};
  border-radius: 4px;
  padding: 24px;
  margin-left: 36px;
  code {
    font-family: monospace;
    background-color: ${colors.white};
    color: ${colors.darkGrey};
    padding: 2px 4px;
  }
`
