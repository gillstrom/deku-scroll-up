/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import ScrollUp from '../';

const app = tree(
	<div>
		<div class='Box1'>
			<a href='https://github.com/gillstrom/deku-scroll-up'>
				deku-scroll-up
			</a>
		</div>
		<div class='Box2'/>
		<ScrollUp class='TestClass' show={300} duration={1000} top={100}>
			UP!
		</ScrollUp>
	</div>
);

render(app, document.body);
