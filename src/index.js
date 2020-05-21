import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import WhoAmI from './components/app/app';
import App from './components/app/app';

ReactDOM.render(
	<React.StrictMode>
		{/* <WhoAmI name='vova' surname='nilson' link='vk.com' />
		<WhoAmI name='vova' surname='nilson' link='vk.com' />
		<WhoAmI name='vova' surname='nilson' link='vk.com' /> */}
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
