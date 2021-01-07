import React from 'react';
import styles from './Photo.module.css';
import classNames from 'classnames';

const Photo = ({ className, ...props }) => (
	<img className={classNames(styles.photo, className)} alt="alt" {...props} />
);

export default Photo;
