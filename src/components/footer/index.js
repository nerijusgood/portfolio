import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<Link href="/">&copy; 2017 Nerijusgood</Link>
			</footer>
		);
	}
}
