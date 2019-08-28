import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { i18n } = this.props;
    return (
      <nav className="nav">
        <ul className="mainNav--container">
          <li>
            <a href="#about">{this.props.t('nav.about')}</a>{' '}
          </li>
          <li>
            <a href="#projects">{this.props.t('nav.projects')}</a>{' '}
          </li>
          <li>
            <a href="#contact">{this.props.t('nav.contact')}</a>{' '}
          </li>
        </ul>
        <ul className="lang__items--container">
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
        <div className="wrapper">
          {this.state.isOpen && <div className="overlay">sidebar</div>}
          <div className="label">
            <button onClick={() => this.toggleMenu()}>
              <span className="burger__line--test">
                <span className="burger__line burger__line--top"></span>
              </span>
              <span className="burger__line--test">
                <span className="burger__line burger__line--bottom"></span>
              </span>
            </button>
          </div>
          {/* <div class="main-content">content</div> */}
        </div>
      </nav>
    );
  }
}

export default withTranslation('common')(Nav);
