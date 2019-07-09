import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <article className="article">
          <div className="project__wrapper">
            <img className="img" src="./img/Project1.jpg" alt="ssomethig" />
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
          </div>

          <div>
            <h3>React Dashboard</h3>
            <p>Let’s create something cool together!</p>
          </div>
        </article>

        <article className="article">
          <div>
            <h3>React Dashboard</h3>
            <p>Let’s create something cool together!</p>
          </div>
          <div className="project__wrapper-mod">
            <img
              className="img img-mod"
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
          </div>
        </article>

        <article className="article">
          <div className="project__wrapper">
            <img className="img" src="./img/Project3.jpg" alt="ssomethig" />
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
          </div>

          <div>
            <h3>React Dashboard</h3>
            <p>Let’s create something cool together!</p>
          </div>
        </article>

        <article className="article">
          <div>
            <h3>React Dashboard</h3>
            <p>Let’s create something cool together!</p>
          </div>
          <div className="project__wrapper-mod">
            <img
              className="img img-mod"
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
          </div>
        </article>
      </section>
    );
  }
}

export default withTranslation('common')(Projects);
