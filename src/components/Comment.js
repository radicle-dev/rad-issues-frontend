import React, { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

export default ({profile_pic_url, username, comment}) => (
  <Fragment>
    <Header>
      <ProfileImg src={profile_pic_url} alt="profile" />
      <p><User>{username}</User></p>
    </Header>
    <Content>
      <p>{comment}</p>
    </Content>
  </Fragment>
);

const ProfileImg = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  margin-right: 12px;
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
  margin-left: 48px;
  margin-bottom: 12px;
  margin-top: 12px;
`
