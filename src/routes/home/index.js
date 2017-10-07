import { h, Component } from 'preact';
import Helmet from "preact-helmet";
import style from './style';


import List from '../../components/list';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Helmet title="Home" />
				<List />
			</div>
		);
	}
}
