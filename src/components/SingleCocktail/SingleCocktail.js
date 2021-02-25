import React from 'react';

import style from './SingleCocktail.module.css'

const singleCocktail = (props) => (
    <div className={style.singleCocktail}>
        <img className={style.image} alt={props.name} src={props.image} />
        <div className={style.desc}>{props.name}</div>
    </div>
)

export default singleCocktail