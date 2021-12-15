import React from 'react';
import UserCard from '../UserCard';
import {LanguageContext} from '../../../context';
import styles from "../UserCard/UserCard.module.scss";

const Child = (props) => {
  return (
      <LanguageContext.Consumer>{
          ([lang, setLang, __]) => {
              return (
                  <div>
                      <h2>{__(lang, 'Child')}</h2>
                      <UserCard />
                  </div>
              )
          }
      }
      </LanguageContext.Consumer>
  );
}

export default Child;
