import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<div class={style.brand}>
					<Link href="/">Nerijus Gudas</Link>
					<div class={style.shapes}></div>
				</div>

				<nav class={style.nav}>
					<Link activeClassName={style.active} href="/hire">Hire</Link>
					<Link activeClassName={style.active} href="/project/john">About</Link>
				</nav>
			</header>
		);
	}
}
