import React, { Fragment } from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import { colors } from '../utils';

const Comment = props => {
    if (props.hasOwnProperty("comment")) {
            return <Fragment>
              <Header>
                <ProfileImg src={props.profile_pic_url} alt="profile" />
                <p><User>{props.username}</User></p>
              </Header>
              <Content>
                <p>{props.comment}</p>
              </Content>
            </Fragment>
    } else { return <Out>{JSON.stringify(props.pre)}</Out>; }
};

export default Comment;

const Out = styled.pre`
  font-family: monospace;
  border: 1px ${colors.lightGrey} solid;
  border-radius: 0px;
  padding: 24px;
  margin-top: 8px;
  opacity: 0.70;
`

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
  margin-top: 24px;
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
  margin-bottom: 12px;
  margin-top: 12px;
`
