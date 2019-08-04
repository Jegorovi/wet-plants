import React from 'react';
import styles from './Plant.module.scss';

interface PlantProps {
  name: string;
  moisture: number;
}

export const Plant = ({ name, moisture = 0 }: PlantProps) => {
  return (
    <div className={styles.plant}>
			<h2 className={styles.title}>{name}</h2>
      <span>
        Moisture: <span className={moisture < 40 ? styles.red : styles.green }>{moisture}%</span>
      </span>
    </div>
  );
}
