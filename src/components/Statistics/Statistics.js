import React from 'react';
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(elem => (
        <li key={elem.id} className={styles.item} style={{backgroundColor : getRandColor()}}>
          <span className={styles.label}>{elem.label}</span>
          <span className={styles.percentage}>{elem.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}

function getRandColor() {
  const getRandNumber = () => Math.floor(Math.random() * Math.floor(255));
  return `rgb(${getRandNumber()}, ${getRandNumber()}, ${getRandNumber()})`;
}

export default Statistics;
