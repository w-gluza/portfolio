import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Contact extends Component {
  render() {
    return (
      <section className="section">
        <div className="headerImg__wrapper">
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
        </div>
        <div>
          <h4> {this.props.t('contact.h4')}</h4>
          <address>
            <p>
              <span>{this.props.t('contact.mail')}</span>
              <a href="mailto:wiolagluza@gmail.com.com">wiolagluza@gmail.com</a>
            </p>
            <p>
              <span>{this.props.t('contact.cvr')}</span>
              40171193
            </p>
            <p>
              <span>{this.props.t('contact.address')}</span>
              {this.props.t('contact.location')}
            </p>
          </address>
        </div>
      </section>
    );
  }
}

export default withTranslation('common')(Contact);
