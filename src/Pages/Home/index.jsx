import { useState } from 'react';
import { Card  } from '../../components/Card';
import styles from './Home.module.css';
import axios from 'axios';

export function Home() {
	const [ user, setUser] = useState('');
	const [listUser, setListUser] = useState();
	const handleSearch = async () => {
		await axios.get(`https://api.github.com/users/${user}`).then((response) => {
		console.log(response);
		setListUser(response.data);
		})
		.catch((e) => console.log(e));
	};
	return (
		<>
		<div className={styles.title}>
		<h1> Perfils do GitHub</h1>
		</div>
		<div className={styles.search}>
		<input type="text" placeholder="Buscar ..." onChange={(e) => setUser(e.target.value)} />
		<button onClick={() => handleSearch()}> Pesquisar </button>
		</div>
		<div>{ listUser && ( <Card image={listUser.avatar_url} 
		username={listUser.login}
		description={listUser.bio}
		route={`/profile/${listUser.login}`}
		/> 
		)}
		</div>
		</>
		);
}