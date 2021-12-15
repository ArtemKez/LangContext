import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import {ThemeContext, LanguageContext} from '../../context';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';

const {THEMES} = CONSTANTS;

const Tree = (props) => {
    return (
        <ThemeContext.Consumer>{
            ([theme]) => {
                const classNames = cx(styles.container, {
                    [styles.light]: theme === THEMES.LIGHT,
                    [styles.dark]: theme === THEMES.DARK,
                });
                return (
                    <LanguageContext.Consumer>
                        {
                            ([lang, setLang, __]) => {

                                return (
                                    <div className={classNames}>
                                        <h2>{__(lang, 'Tree')}</h2>
                                        <Parent/>
                                    </div>
                                )
                            }
                        }
                    </LanguageContext.Consumer>
                )
            }
        }
        </ThemeContext.Consumer>
    )
}

export default Tree;
