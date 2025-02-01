import { useEffect, useState } from 'preact/hooks';
import "tailwindcss";

import { refreshAccessToken } from '../../helpers/auth';

export function Home() {
	const [token, setToken] = useState(null);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  async function checkLogin() {
		const newToken = await refreshAccessToken();
		if (newToken) {
		  setToken(newToken);
		}
		setLoading(false);
	  }
  
	  checkLogin();
	}, []);

	return (
		loading ? (<Loading title="Loading"/>) : (token ? (<Dashboard title="Dashboard"/>) : (<Login title="Login"/>))
	);
}

function Loading(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
} 

function Login(props) {
	return (
		<div class="text-4xl font-bold underline">
			test
		</div>
	);
}

function Register(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

function Dashboard(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
