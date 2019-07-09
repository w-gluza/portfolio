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
              {this.props.t('contact.mail')}
              <a href="mailto:wiolagluza@gmail.com.com">wiolagluza@gmail.com</a>
            </p>
            <p>
              {this.props.t('contact.cvr')}
              40171193
            </p>
            <p>
              {this.props.t('contact.address')}
              {this.props.t('contact.location')}
            </p>
          </address>
        </div>
      </section>
    );
  }
}

export default withTranslation('common')(Contact);
