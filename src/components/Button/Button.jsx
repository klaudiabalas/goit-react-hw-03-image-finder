import PropTypes from 'prop-types';
import { Component } from 'react';

import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={css.button}
        onClick={this.props.nextPage}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
