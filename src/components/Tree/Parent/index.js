import React from 'react';
import Child from '../Child';
import {LanguageContext} from "../../../context";
import UserCard from "../UserCard";

const Parent = (props) => {

    return (
        <LanguageContext.Consumer>{
            ([lang, setLang, __]) => {
                return (
                    <div>
                        <h2>{__(lang, 'Parent')}</h2>
                        <Child/>
                    </div>
                )
            }
        }
        </LanguageContext.Consumer>
    );
}

export default Parent;
