import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class NavLangItems extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <ul
        className={
          this.props.isOpen
            ? 'NavLangItems__container--mob'
            : 'NavLangItems__container'
        }
        role="menubar"
        aria-label="Languages Menu"
      >
        <li>
          <button
            className={`i18n__button ${
              i18n.language === 'en' ? 'i18n__button__active' : ''
            }`}
            onClick={() => i18n.changeLanguage('en')}
          >
            en
          </button>
        </li>
        <span>|</span>
        <li>
          <button
            className={`i18n__button ${
              i18n.language === 'dk' ? 'i18n__button__active' : ''
            }`}
            onClick={() => i18n.changeLanguage('dk')}
          >
            dk
          </button>
        </li>
        <span>|</span>
        <li>
          <button
            className={`i18n__button ${
              i18n.language === 'pl' ? 'i18n__button__active' : ''
            }`}
            onClick={() => i18n.changeLanguage('pl')}
          >
            pl
          </button>
        </li>
      </ul>
    );
  }
}

export default withTranslation('common')(NavLangItems);
