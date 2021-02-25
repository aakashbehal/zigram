import React from 'react';

import style from './SingleCocktail.module.css'

const singleCocktail = (props) => (
    <div className={style.singleCocktail}>
        <img className={style.image} loading="lazy" src={props.image} />
        <p className={style.desc}>{props.name}</p>
    </div>
)

export default singleCocktail