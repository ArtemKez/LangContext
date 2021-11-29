import React, { Component } from 'react';
import cx from 'classnames';
import {UserContext, ThemeContext} from '../../context';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
      {
      (theme) => {
        const classNames = cx(styles.container,{
          [styles.light] : theme===THEMES.LIGHT,
          [styles.dark] : theme===THEMES.DARK,
        });
        return (<UserContext.Consumer>
        {
          (user) => (<header className={classNames}>
            <p>{user.fname} {user.sname} </p>
          </header>)
        }
        </UserContext.Consumer>)}
      }
      </ThemeContext.Consumer>
    );
  }
}

//Header.contextType = UserContext;

export default Header;
