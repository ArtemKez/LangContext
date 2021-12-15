import React from 'react';
import styles from './UserCard.module.scss';
import {UserContext, LanguageContext} from '../../../context';

const UserCard = () => {

    const renderProps = (user) => {
        return (
            <LanguageContext.Consumer>{
                ([lang, setLang, __]) => {
                    return (
                        <div className={styles.container}>
                            <h2>{__(lang, 'UserCard')}</h2>
                            <p>{__(lang, user.fname)} {__(lang, user.sname)}</p>
                            <img src={user.imgSrc} alt="img" className={styles.img}/>
                        </div>
                    )
                }
            }
            </LanguageContext.Consumer>

        );
    }

    return <UserContext.Consumer>{renderProps}</UserContext.Consumer>;

}

export default UserCard;