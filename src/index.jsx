import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Dashboard } from './pages/Dashboard/index.jsx';
import { Transaksi } from './pages/Transaksi/index.jsx'
import { Transfer } from './pages/Transfer/index.jsx'
import { Potongan } from './pages/Potongan/index.jsx'
import { Profil } from './pages/Profil/index.jsx'
import { ManajemenUser } from './pages/ManajemenUser/index.jsx'
import { TentangAplikasi } from './pages/TentangAplikasi/index.jsx'
import { BackupDatabase } from './pages/BackupDatabase/index.jsx'
import { LogStatus } from './pages/LogStatus/index.jsx'
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/admin/dashboard" component={Dashboard} />
					<Route path="/admin/transaksi" component={Transaksi} />
					<Route path="/admin/transfer" component={Transfer} />
					<Route path="/admin/potongan" component={Potongan} />
					<Route path="/admin/profil" component={Profil} />
					<Route path="/admin/manajemen_user" component={ManajemenUser} />
					<Route path="/tentang_aplikasi" component={TentangAplikasi} />
					<Route path="/admin/backup_database" component={BackupDatabase} />
					<Route path="/admin/log_status" component={LogStatus} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
