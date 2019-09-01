import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Icon from '../../assets/icons/';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <article className="project">
          <figure className="project__figure">
            <img
              className="project__mockup"
              src="./img/Project1.jpg"
              alt="ssomethig"
            />
            <div className="svg__horiz__container">
              <img
                className="svg__horiz"
                src="./img/squaresHorisontal.svg"
                alt="ssomethig"
              />
            </div>
            <div className="svg__vert__container">
              <img
                className="svg__vert"
                src="./img/squaresVertical.svg"
                alt="ssomethig"
              />
            </div>
          </figure>

          <section className="project__description">
            <h3>React Business Dashboard</h3>
            <p>Let’s create something cool together!</p>
            <div className="project-icons--container">
              <a
                href="https://w-gluza.github.io/dash/"
                title="Business Dashboard Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="Live" alt={this.props.t('footer.GitHubAlt')} />
              </a>
              <a
                href="https://github.com/w-gluza/dash"
                title="Business Dashboard GitHub Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="GitHub" alt={this.props.t('footer.GitHubAlt')} />
              </a>
            </div>
          </section>
        </article>

        <article className="project">
          <figure className="project__figure--mod">
            <img
              className="project__mockup project__mockup-mod"
              src="./img/Project2.jpg"
              alt="ssomethig"
            />
            <div className="svg__horiz__container">
              <img
                className="svg__horiz-mod"
                src="./img/circlesHorisontal.svg"
                alt="ssomethig"
              />
            </div>
            <div className="svg__vert__container-mod">
              <img
                className="svg__vert"
                src="./img/circlesVertical.svg"
                alt="ssomethig"
              />
            </div>
          </figure>
          <section className="project__description">
            <h3>Angular App</h3>
            <p>
              Designed using Figma and developed with Angular 2+, Firebase and
              Material Design.
            </p>
            <div className="project-icons--container">
              <a
                href="https://unibrew.firebaseapp.com/"
                title="Multilanguage Communication Platform Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="Live" alt={this.props.t('footer.GitHubAlt')} />
              </a>
              <a
                href="https://github.com/ituraj/unibrew"
                title="Multilanguage Communication Platform Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="GitHub" alt={this.props.t('footer.GitHubAlt')} />
              </a>
            </div>
          </section>
        </article>

        <article className="project">
          <figure className="project__figure">
            <img
              className="project__mockup"
              src="./img/Project3.jpg"
              alt="ssomethig"
            />
            <div className="svg__horiz__container">
              <img
                className="svg__horiz"
                src="./img/squaresHorisontal.svg"
                alt="ssomethig"
              />
            </div>
            <div className="svg__vert__container">
              <img
                className="svg__vert"
                src="./img/squaresVertical.svg"
                alt="ssomethig"
              />
            </div>
          </figure>

          <section className="project__description">
            <h3>Hacker News Reader</h3>
            <p>
              Because of browser security policies, not all websites will show
              in the iframe!
            </p>
            <div className="project-icons--container">
              <a
                href="https://w-gluza.github.io/hackernews/"
                title="Hacker News Reader Live"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="Live" alt={this.props.t('footer.GitHubAlt')} />
              </a>
              <a
                href="https://github.com/w-gluza/hackernews"
                title="Hacker News Reader Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="GitHub" alt={this.props.t('footer.GitHubAlt')} />
              </a>
            </div>
          </section>
        </article>

        <article className="project">
          <figure className="project__figure--mod">
            <img
              className="project__mockup project__mockup-mod"
              src="./img/Project4.jpg"
              alt="ssomethig"
            />
            <div className="svg__horiz__container">
              <img
                className="svg__horiz-mod"
                src="./img/circlesHorisontal.svg"
                alt="ssomethig"
              />
            </div>
            <div className="svg__vert__container-mod">
              <img
                className="svg__vert"
                src="./img/circlesVertical.svg"
                alt="ssomethig"
              />
            </div>
          </figure>
          <section className="project__description">
            <h3>TV Dashboard</h3>
            <p>
              The idea of a project was to recreate PSD file in the most
              accurate way. Dashboard is intended to work only on one specific
              type of device.
            </p>
            <div className="project-icons--container">
              <a
                href="https://w-gluza.github.io/TVdashFlex/"
                title="TV Dashboard Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="Live" alt={this.props.t('footer.GitHubAlt')} />
              </a>
              <a
                href="https://github.com/w-gluza/TVdashFlex"
                title="TV Dashboard GitHub Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="project__icon"
              >
                <Icon name="GitHub" alt={this.props.t('footer.GitHubAlt')} />
              </a>
            </div>
          </section>
        </article>
      </section>
    );
  }
}

export default withTranslation('common')(Projects);
