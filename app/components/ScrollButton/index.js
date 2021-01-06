import React, { Component } from 'react';
import styled from 'styled-components';

// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FaChevronUp } from 'react-icons/fa';

export default class ScrollButton extends Component {
  state = {
    intervalId: 0,
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs,
    );
    this.setState({ intervalId });
  }

  render() {
    return (
      <StyledButton
        title="Back to top"
        className="scroll flex justify-center items-center outline-none focus:outline-none"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        {/* <span className="arrow-up glyphicon glyphicon-chevron-up" /> */}
        <FaChevronUp className="flex items-center" color="#fff" size="2em" />
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  opacity: 0.3;
  background-color: #cccccc;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;

  &:hover {
    opacity: 1;
    background-color: #06336d;
  }

  .arrow-up {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -5px;
  }
`;
