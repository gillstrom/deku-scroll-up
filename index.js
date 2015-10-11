/** @jsx dom */
import dom from 'magic-virtual-element';
import scrollTo from 'scroll-to';

const defaultProps = {
	duration: 500,
	ease: 'out-circ',
	top: 0
};

const propTypes = {
	class: {
		type: 'string'
	},
	duration: {
		type: 'number'
	},
	ease: {
		type: 'string'
	},
	show: {
		type: 'number'
	},
	top: {
		type: 'number'
	}
};

function shouldUpdate({state}, nextProps, {active}) {
	return !state.active === active;
}

function afterMount({props}, el, setState) {
	const {show} = props;

	window.addEventListener('scroll', () => {
		if (window.scrollY >= show) {
			setState({active: true});
			return;
		}

		setState({active: false});
	});
}

function render({props, state}) {
	const {children, duration, ease, top} = props;
	const {active} = state;

	return (
		<div class={['ScrollUp', props.class, {'ScrollUp--active': active}]} onClick={() => scrollTo(0, top, {ease, duration})}>
			{children}
		</div>
	);
}

export default {afterMount, defaultProps, propTypes, render, shouldUpdate};
