import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Burger from './Burger/Burger';
import NavMainItems from './NavMainItems/NavMainItems';
import NavLangItems from './NavLangItems/NavLangItems';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
    if (this.state.isOpen === false) {
      console.log('true');
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }

  render() {
    return (
      <nav className={this.state.isOpen ? 'mobileNav' : 'navDesktop'}>
        <NavMainItems isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
        <NavLangItems isOpen={this.state.isOpen} />
        <Burger
          className="burger"
          isOpen={this.state.isOpen}
          toggleMenu={this.toggleMenu}
        />
      </nav>
    );
  }
}

export default withTranslation('common')(Nav);
