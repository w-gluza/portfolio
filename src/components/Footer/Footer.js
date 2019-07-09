import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Icon from '../../assets/icons/';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-icons--container">
          <a
            href="https://github.com/w-gluza/"
            title="My GitHub portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <Icon name="GitHub" alt={this.props.t('footer.GitHubAlt')} />
          </a>
          <a
            href="https://github.com/w-gluza/"
            title="My CV in pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <Icon
              name="CV"
              className="footer__icon"
              alt={this.props.t('footer.CVAlt')}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/w-gluza/"
            title="My LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <Icon
              name="LinkedIn"
              className="footer__icon"
              alt={this.props.t('footer.LinkedInAlt')}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default withTranslation('common')(Footer);
