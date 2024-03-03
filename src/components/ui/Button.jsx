import React from 'react';
import styles from './Button.module.css';

function Button({ ...rest }) {
  return (
    <div className={styles['button-container']} {...rest}>
      <button className={styles['button-styles']}>Login</button>
    </div>
  );
}

export default Button;
