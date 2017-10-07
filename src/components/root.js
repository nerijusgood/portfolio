import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Comps
import App from './app';
import Header from './header';
import Footer from './footer';

//Routes
import Home from '../routes/home';
import Project from '../routes/project';

// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class Root extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<App>
				<Header />
				<main role="main">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Project path="/project/" user="me" />
						<Project path="/project/:user" />
					</Router>
				</main>
				<Footer />
			</App>
		);
	}
}
