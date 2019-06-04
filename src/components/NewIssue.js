import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import Timestamp from 'react-timestamp';
import ReactMarkdown from "react-markdown";
import Modal from 'react-modal';

export default class NewIssue extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: "",
      description: "",
      error: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.submitIssue = this.submitIssue.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false,
      title: "",
      description: "",
      error: false
    });
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  submitIssue() {
    this.props.machine.send({
      title: this.state.title,
      description: this.state.description
    }).then((result) => {
      this.closeModal()
    }).catch((error) => {
      console.log(error)
      this.setState({error: error})
    })
  }

  render() {
    let submitDiv

    if (this.state.error === false) {
      submitDiv =
          <div>
            <div>
              <Label> Title</Label>
              <input type="text"
                     value={this.state.title}
                     onChange={this.handleTitleChange}/>
            </div>
            <div>
              <Label> Description </Label>
              <Description
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}/>
            </div>
            <div>
            <Submit onClick={this.submitIssue}>Submit</Submit>
            <Close onClick={this.closeModal}>Close</Close>
            </div>
          </div>
    } else {
      submitDiv =
          <div>
          <div> Error! {this.state.error.message} </div>
            <Close onClick={this.closeModal}>Close</Close>
            </div>
    }
    return (
      <Fragment>
        <NewIssueButton onClick={this.openModal}>New Issue</NewIssueButton>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="New Issue"
        >
        {submitDiv}
        </Modal>
      </Fragment>
    )
  }
  };

const NewIssueButton = styled.button`
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

const Submit = styled.button`
  margin: 0 16px;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.blue};
  &:hover {
    text-decoration: underline;
  }
  &:active {
    opacity: 0.8;
  }
`;

const Close = styled.button`
  margin: 0 16px;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.grey};
  &:hover {
    text-decoration: underline;
  }
  &:active {
    opacity: 0.8;
  }
`;

const Description = styled.textarea`
  margin: 0;
  padding: 0;
  border: 1;
  height: 200px;
`;

const Label = styled.label`
  margin: 0 5px;
  padding: 0;
  border: 1;
`;
