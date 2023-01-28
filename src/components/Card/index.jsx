import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export function Card({username, description, image, route}) {
	return (
	<a href={route}>	
		<div className={styles.card}>
		<div className={styles.details}>
		<img src={ image } alt="fotopefil" />
		<div>
		<p>{username}</p>
		<p>{description}</p>
		</div>
		</div>
		<span className="material-symbols-outlined">
arrow_circle_right
</span>
		</div>
		</a>
		);
}