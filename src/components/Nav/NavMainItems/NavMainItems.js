import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class NavMainItems extends Component {
  render() {
    return (
      <ul
        className={
          this.props.isOpen
            ? 'NavMainItems__container--mob'
            : 'NavMainItems__container'
        }
        role="menubar"
        aria-label="Sections Menu"
      >
        <li role="none" onClick={this.props.toggleMenu}>
          <a role="menuitem" href="#about">
            {this.props.t('nav.about')}
          </a>
        </li>
        <li role="none" onClick={this.props.toggleMenu}>
          <a role="menuitem" href="#projects">
            {this.props.t('nav.projects')}
          </a>
        </li>
        <li role="none" onClick={this.props.toggleMenu}>
          <a role="menuitem" href="#contact">
            {this.props.t('nav.contact')}
          </a>
        </li>
      </ul>
    );
  }
}

export default withTranslation('common')(NavMainItems);
