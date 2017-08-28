import React from 'react';
import ReactDOM from 'react-dom';

import { Route , Router, Switch} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

const app = document.getElementById('root')

ReactDOM.render(
	<div>
		<div>YouTube</div>
		<div>
			< App />
		</div>
	</div>
,  
app);