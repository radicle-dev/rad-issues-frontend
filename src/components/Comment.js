import React, { Fragment } from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import { colors } from '../utils';

const Comment = props => (
  <Fragment>
    <Header>
      <ProfileImg src={props.profile_pic_url} alt="profile" />
      <p><User>{props.username}</User> commented <Timestamp time={props.time}/></p>
    </Header>
    <Content>
      <p>{props.comment}</p>
      <ReplyBox>
        <img src={props.profile_pic_url} alt="profile"/>
        Reply
      </ReplyBox>
    </Content>
  </Fragment>
);

export default Comment;

const ProfileImg = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  margin-right: 24px;
  `

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  align-items: center;
  color: ${colors.darkGrey};
  margin-bottom: 16px;
`
const User = styled.span`
  color: ${colors.black};
  font-weight: bold;
`

const Content = styled.div`
  border: 1px ${colors.lightGrey} solid;
  border-radius: 4px;
  padding: 24px;
  margin-left: 60px;
  margin-bottom: 24px;
`

const ReplyBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  margin-top: 24px;
  border: 1px ${colors.lightGrey} solid;
  border-radius: 4px;
  align-items: center;
  color: ${colors.darkGrey};
  img {
    height: 36px;
    width: 36px;
    border-radius: 4px 0 0 4px;
    margin-right: 12px;
  }
`