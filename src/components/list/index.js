import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class List extends Component {
	render() {
		return (
			<ul class={style.list}>
				<li class={style.item}>
					<Link href="/">
						<span>Mit liv med leddegigt</span>
						<span>Roche APs, React SPA</span>
					</Link>
				</li>
				<li class={style.item}>
					<Link href="/">
						<span>Nykredit invest</span>
						<span>NyKredit A/S, Material Web Componentss</span>
					</Link>
				</li>

				<li class={style.item}>
					<Link href="/">
						<span>Nykredit invest</span>
						<span>NyKredit A/S</span>
					</Link>
				</li>
			</ul>
		);
	}
}
