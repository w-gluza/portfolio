import React from 'react';

import GitHub from './src/GitHub';
import Live from './src/Live';
import CV from './src/CV';
import LinkedIn from './src/LinkedIn';

const Icon = props => {
  switch (props.name) {
    case 'GitHub':
      return <GitHub {...props} />;
    case 'Live':
      return <Live {...props} />;
    case 'CV':
      return <CV {...props} />;
    case 'LinkedIn':
      return <LinkedIn {...props} />;
    default:
      return;
  }
};

export default Icon;
