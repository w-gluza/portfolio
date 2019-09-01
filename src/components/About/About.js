import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div>
          <img
            className="aboutShapes"
            src="./img/aboutShapes.svg"
            alt="decorative shapes"
          />
        </div>
        <div>
          <h2>
            {this.props.t('about.h2')}
            <span>{this.props.t('about.h2Span')}</span>
          </h2>
          <p>{this.props.t('about.p1')}</p>
          <p>{this.props.t('about.p2')}</p>
          <p>{this.props.t('about.p3')}</p>
        </div>
      </section>
    );
  }
}

export default withTranslation('common')(About);
