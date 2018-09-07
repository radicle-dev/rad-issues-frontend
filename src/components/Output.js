import React, { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../utils';


export default ({string}) => (
  <Fragment>
    <Output>
    <Icon width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="4" fill="#6E41E0"/>
      <circle cx="18" cy="18" r="12.5" stroke="white" stroke-width="2"/>
    </Icon>
      <PrintOut>{JSON.stringify(string)}</PrintOut>
    </Output>
  </Fragment>
);

const Icon = styled.svg`
  height: 36px;
  width: 36px;
  margin-right: 12px;
  `

const Output = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  align-items: center;
  color: ${colors.darkGrey};
  margin-bottom: 16px;
  margin-top: 24px;
`

const PrintOut = styled.p`
  color: ${colors.black};
  font-family: monospace;
`