import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Section from './index';

const stories = storiesOf('Components/Section', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Section {...getKnobs()} />
		</Wrapper>
	</Theme>
));
