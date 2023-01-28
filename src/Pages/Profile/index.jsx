import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Profile.module.css';
import { Card } from '../../components/Card';

export function Profile() {
	const { user } = useParams();
	const [listUser, setListUser] = useState({});
	const [repos, setRepos] = useState([]);
	useEffect(() => {
		const data = async() => {
			await axios.get(`https://api.github.com/users/${user}`).then( async (response) => {
				console.log(response);
				setListUser(response.data);
			
			await axios.get(`https://api.github.com/users/${user}/repos`).then( (res) => {
				console.log(res.data);
				setRepos(res.data);
			})
			.catch((e) => console.log(e));
			})
			.catch((e) => console.log(e));
		};
		data();
	}, []);
	return (
		<>
			<div className={styles.details}>
				<img src={listUser.avatar_url} alt="perfil" />
			<div className={styles.user}>
				<div className={styles.details_user}>
				
				<div className={styles.follors_details}>
					<p>{listUser.followers}</p>
					<p>seguidores</p>
		</div>
					<div className={styles.follors_details}>
						<p>{listUser.following}</p>
						<p>Seguindo</p>
		</div>
					<div className={styles.follors_details}>
						<p>{listUser.public_repos}</p>
						<p>Repositorios</p>
			</div>
		</div>
						<div className={styles.username_details}>
							<h3>{listUser.name}</h3>
							<p>{listUser.bio}</p>
				</div>
			</div>
		</div> 
		<div>
			{ repos && repos.map((repo) => {
			console.log('index.js ~ repo.map ~ repo');
			return (
				<>
					<Card
			username={repo.full_name}
			description={repo.description}
			image={listUser.avatar_url}
			route={repo.html_url}
			/>
				</>
				);
			})}
	  </div>
	  </>
	);
}