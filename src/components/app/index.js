import { h, Component } from 'preact';
import style from './style';

export default class App extends Component {
  render({
    children,
    ...props
  }){
		return (
			<div class={style.app}>
				<div class={style.grid}>
				</div>

				<div class={style.container}>
					{children}
				</div>
			</div>
		);
	}
}
