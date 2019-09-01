import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* {this.props.isOpen && <div className="overlay"></div>} */}
        <button className="burger" onClick={this.props.toggleMenu}>
          <span
            className={
              this.props.isOpen
                ? 'burger__line--wrapper burger__top__rotated'
                : 'burger__line--wrapper'
            }
          >
            <span
              className={
                this.props.isOpen
                  ? 'burger__line burger__line__top--mod'
                  : 'burger__line burger__line__top'
              }
            ></span>
          </span>
          <span
            className={
              this.props.isOpen
                ? 'burger__line--wrapper burger__bottom__rotated'
                : 'burger__line--wrapper'
            }
          >
            <span
              className={
                this.props.isOpen
                  ? 'burger__line burger__line__bottom--mod'
                  : 'burger__line burger__line__bottom'
              }
            ></span>
          </span>
        </button>
      </div>
    );
  }
}

export default withTranslation('common')(Nav);
