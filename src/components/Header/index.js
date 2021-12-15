import React, {Component} from 'react';
import cx from 'classnames';
//import { WbSunny,  DarkMode} from '@mui/icons-material';
import {WbSunny} from '@material-ui/icons';
import {NightsStayRounded} from '@material-ui/icons';
import {UserContext, ThemeContext, LanguageContext} from '../../context';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import "../../App.css";

const {THEMES, LANGUAGE} = CONSTANTS;


class Header extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ([theme, setTheme]) => {
                        const classNames = cx(styles.container, {
                            [styles.light]: theme === THEMES.LIGHT,
                            [styles.dark]: theme === THEMES.DARK,
                        });
                        return (<UserContext.Consumer>
                            {
                                (user) => {

                                    return (
                                        <LanguageContext.Consumer>
                                            {
                                                ([lang, setLang, __]) => {
                                                    const switchLanguage = () => {
                                                        setLang(lang === LANGUAGE.RU ? LANGUAGE.EN : LANGUAGE.RU)
                                                    }
                                                    return (
                                                        <header className={classNames}>
                                                            <p>{__(lang, user.fname)} {__(lang, user.sname)}</p>
                                                            <div className={'divStyle'} onClick={() => {
                                                                const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                                                                setTheme(nextTheme);
                                                            }}>
                                                                {theme === THEMES.LIGHT ? <WbSunny/> :
                                                                    <NightsStayRounded/>}
                                                            </div>
                                                            <button onClick={switchLanguage}>{lang}</button>
                                                        </header>
                                                    )
                                                }
                                            }
                                        </LanguageContext.Consumer>
                                    )
                                }
                            }
                        </UserContext.Consumer>)
                    }
                }
            </ThemeContext.Consumer>
        );
    }
}

//Header.contextType = UserContext;

export default Header;
