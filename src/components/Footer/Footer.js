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
            title={this.props.t('footer.GitHubAlt')}
            aria-label={this.props.t('footer.GitHubAlt')}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <Icon name="GitHub" alt="" />
          </a>
          <a
            href="./WiolettaGluza_CV.pdf"
            title={this.props.t('footer.CVAlt')}
            aria-label={this.props.t('footer.CVAlt')}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <Icon name="CV" className="footer__icon" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/w-gluza/"
            title={this.props.t('footer.LinkedInAlt')}
            aria-label={this.props.t('footer.LinkedInAlt')}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <Icon name="LinkedIn" className="footer__icon" alt="" />
          </a>
        </div>
      </footer>
    );
  }
}

export default withTranslation('common')(Footer);
