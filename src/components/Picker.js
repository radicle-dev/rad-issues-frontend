import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'styles';

const Picker = ({ active, items, marginLeft, marginRight, pickItem }) => (
  <PickerContainer marginLeft={marginLeft} marginRight={marginRight}>
    {items.map((item, index) => (
      <Item active={item === active} key={item} onClick={() => pickItem(item)}>
        {item}
      </Item>
    ))}
  </PickerContainer>
);

Picker.defaultProps = {
  active: 'item 1',
  items: ['item 1', 'item 2'],
  marginLeft: false,
  marginRight: false,
  pickItem: () => {},
};
Picker.propTypes = {
  active: PropTypes.string,
  items: PropTypes.array,
  marginLeft: PropTypes.bool,
  marginRight: PropTypes.bool,
  pickItem: PropTypes.func,
};

const PickerContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid ${colors.lightGrey};
  background-color: ${colors.almostWhite};
  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: 16px;
  `};
  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: 16px;
  `};
`;
const Item = styled.button`
  height: 36px;
  color: ${colors.darkGrey};
  cursor: pointer;
  padding: 10px 16px;
  ${({ active }) =>
    active &&
    `
    background-color: ${colors.blue};
    color: ${colors.white};
  `};
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
  &:last-child {
    border-left: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
export default Picker;
