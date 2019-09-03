import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <figure className="contact__figure">
          <img
            className="profile_circle"
            src="./img/contact__circles.svg"
            alt=""
            role="presentation"
          />
          <img
            className="profile__img"
            src="./img/Wioletta_Gluza.png"
            alt="somethig"
          />
        </figure>
        <article>
          <h4>
            {this.props.t('contact.h4')}
            <span>{this.props.t('contact.h4Span')}</span>
          </h4>
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
        </article>
      </section>
    );
  }
}

export default withTranslation('common')(Contact);
