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
              <img src="./img/squaresVertical.svg" alt="ssomethig" />
            </div>
          </figure>

          <section className="project__description">
            <h3>
              {this.props.t('projects.project1_h3')}
              <span>{this.props.t('projects.project1_h3Span')}</span>
            </h3>
            <p>{this.props.t('projects.project1_p')}</p>
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
              <img src="./img/circlesVertical.svg" alt="ssomethig" />
            </div>
          </figure>
          <section className="project__description">
            <h3>
              {this.props.t('projects.project2_h3')}
              <span>{this.props.t('projects.project2_h3Span')}</span>
            </h3>
            <p>{this.props.t('projects.project2_p')}</p>

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
              <img src="./img/squaresVertical.svg" alt="ssomethig" />
            </div>
          </figure>

          <section className="project__description">
            <h3>
              {this.props.t('projects.project3_h3')}
              <span>{this.props.t('projects.project3_h3Span')}</span>
            </h3>
            <p>{this.props.t('projects.project3_p')}</p>

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
              <img src="./img/circlesVertical.svg" alt="ssomethig" />
            </div>
          </figure>
          <section className="project__description">
            <h3>
              {this.props.t('projects.project4_h3')}
              <span>{this.props.t('projects.project4_h3Span')}</span>
            </h3>
            <p>{this.props.t('projects.project4_p')}</p>

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
