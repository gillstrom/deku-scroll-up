# deku-scroll-up

> "Scroll to top of page" component for deku


## Install

```
$ npm install --save deku-scroll-up
```


## Usage

```js
import ScrollUp from 'deku-scroll-up';

export function render() {
	return (
		<ScrollUp show={150} duration={1000}>
			UP!
		</ScrollUp>
	);
}
```


## Attributes

### show

*Required*  
Type: `number`

At what distance from top the element will be displayed.

### top

Type: `number`  
Default: `0`

Position to which you will be moved on click.

### duration

Type: `number`  
Default: `500`

Time in milliseconds it will take to reach the `top` position.

### ease

Type: `string`  
Default: `out-circ`

Type of scrolling easing. Complete list can be found [here](https://github.com/component/ease#aliases).

### class

Type: `string`

Add classes to the element


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
