import defaults from './defaults';
import getDefaultKnobs from '../modules/knobs';

import { text } from '@storybook/addon-knobs';

export default (props = {}) => ({
    ...getDefaultKnobs({
		...defaults,
		
		'max-width': '960px'
	}),

	src: text(
		'src',
		props.src || '',
		'Props'
	),
	alt: text(
		'alt',
		props.alt || '',
		'Props'
	),
	title: text(
		'title',
		props.title || '',
		'Props'
	),
});
