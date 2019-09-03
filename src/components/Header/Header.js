import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="header__section">
          <h1>
            {this.props.t('header.h1')}
            <span>{this.props.t('header.h1Span')}</span>
            {this.props.t('header.h1End')}
          </h1>
          <p>{this.props.t('header.p')}</p>
          <a href="#contact" className="button">
            {this.props.t('header.button')}
          </a>
        </section>
        <figure className="header__figure">
          <img
            className="profile_circle"
            src="./img/profile_circle.svg"
            alt="ssomethig"
          />
          <img
            className="profile__img"
            src="./img/Wioletta_Gluza.png"
            alt="somethig"
          />
        </figure>
      </header>
    );
  }
}

export default withTranslation('common')(Header);
