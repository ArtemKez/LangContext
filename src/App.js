import './App.css';
import React, {Component} from 'react';
import {UserContext, ThemeContext, LanguageContext} from './context';
import Header from './components/Header';
import Tree from './components/Tree';
import CONSTANTS from './constants';
import en from './data/enTranslate.json'
import ru from './data/ruTranslate.json'

const {THEMES, LANGUAGE} = CONSTANTS;

class App extends Component {
    user = {
        id: 1,
        fname: 'Elon',
        sname: 'Musk',
        imgSrc: 'https://i.insider.com/6171279833f4b300189ad407?width=700'
    };

    __(lang, key) {
        if (lang === LANGUAGE.EN) {
            return en[key]
        }
        if (lang === LANGUAGE.RU) {
            return ru[key]
        }
        return key;
    }

    constructor(props) {
        super(props);
        this.state = {
            theme: THEMES.LIGHT,
            lang: LANGUAGE.RU,
            user: this.user
        }
    }

    setTheme = (theme) => {
        this.setState({theme})
    }

    setLanguage = (lang) => {
        this.setState({lang})
    }

    render() {
        const {user, theme, lang} = this.state;
        return <ThemeContext.Provider value={[theme, this.setTheme]}>
            <UserContext.Provider value={user}>
                <LanguageContext.Provider value={[lang, this.setLanguage, this.__]}>
                    <Header/>
                    <Tree/>
                </LanguageContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>;
    }

}

export default App;

