import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import LanguageSwitcherButton from './LanguageSwitcherButton';

storiesOf('LanguageSwitcherButton', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('Language switcher', () => (
    <LanguageSwitcherButton
      primaryText={'EN'}
      secondaryText={'MG'}
      name="swap-horizontal"
      type="material-community"
    />
  ));
