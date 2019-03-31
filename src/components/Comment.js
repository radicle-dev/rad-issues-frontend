import React, { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../utils';
import Timestamp from 'react-timestamp';
import ReactMarkdown from "react-markdown";

export default ({'git-username': username, body, 'created-at': createdAt}) => (
  <Fragment>
    <Header>
      <Icon width="32" height="32" viewBox="0 0 32 32" fill="none" >
        <circle cx="16" cy="16" r="16" fill="#5555FF"/>
        <mask id="path-2-inside-1" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95142 9.29492C8.38062 9.64844 8 10.2793 8 11V19C8 20.1055 8.89551 21 10 21H15L17.5774 23.75C18.1011 24.3086 19.033 24.0938 19.2615 23.3633L20 21H22C23.1045 21 24 20.1055 24 19V11C24 9.89453 23.1045 9 22 9H10C9.61548 9 9.25635 9.10742 8.95142 9.29492Z"/>
        </mask>
        <path d="M8.95142 9.29492L7.90382 7.59122L7.89836 7.59461L8.95142 9.29492ZM15 21L16.4593 19.6323L15.8666 19H15V21ZM17.5774 23.75L16.1181 25.1177L16.1183 25.1179L17.5774 23.75ZM19.2615 23.3633L21.1703 23.9604L21.1704 23.9598L19.2615 23.3633ZM20 21V19H18.5296L18.091 20.4035L20 21ZM10 11C10 10.9966 10.0004 10.9964 9.9999 10.9982C9.99973 10.9988 9.99953 10.9994 9.99934 10.9998C9.99915 11.0003 9.99903 11.0005 9.99904 11.0005C9.99909 11.0004 9.99965 10.9995 10.0009 10.9982C10.0022 10.9969 10.0035 10.9959 10.0045 10.9952L7.89836 7.59461C6.76529 8.29635 6 9.55625 6 11H10ZM10 19V11H6V19H10ZM10 19H6C6 21.2107 7.79157 23 10 23V19ZM15 19H10V23H15V19ZM19.0367 22.3823L16.4593 19.6323L13.5407 22.3677L16.1181 25.1177L19.0367 22.3823ZM17.3527 22.7662C17.5798 22.0403 18.5089 21.8194 19.0365 22.3821L16.1183 25.1179C17.6932 26.7978 20.4861 26.1472 21.1703 23.9604L17.3527 22.7662ZM18.091 20.4035L17.3525 22.7667L21.1704 23.9598L21.909 21.5965L18.091 20.4035ZM22 19H20V23H22V19ZM22 19V23C24.2084 23 26 21.2107 26 19H22ZM22 11V19H26V11H22ZM22 11H26C26 8.78933 24.2084 7 22 7V11ZM10 11H22V7H10V11ZM9.999 10.9986C9.99809 10.9992 9.9968 10.9998 9.99548 11.0001C9.99381 11.0006 9.99478 11 10 11V7C9.23804 7 8.51733 7.21399 7.90383 7.59123L9.999 10.9986Z" fill="white" mask="url(#path-2-inside-1)"/>
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
  height: 36px;
  align-items: center;
  color: ${colors.black};
  margin-bottom: 16px;
  margin-top: 24px;
`
const Icon = styled.svg`
  height: 36px;
  width: 36px;
  margin-right: 12px;
  min-width: 36px;
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
  margin-left: 48px;
  margin-top: 8px;
  code {
    font-family: monospace;
    background-color: ${colors.white};
    color: ${colors.darkGrey};
    padding: 2px 4px;
  }
`
