import React from 'react';
import styles from '../styles/Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities.length >= 1){
    return (
      <div className={styles.cards}>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div></div>
    )
  }
}
