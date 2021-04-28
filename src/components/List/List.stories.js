import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import List from './List';
import {action} from '@storybook/addon-actions';

const data = [
  {
    id: '###all###',
    name: {
      en: 'All',
      mg: 'Izy rehetra',
    },
  },
  {
    id: '###food###',
    name: {
      en: 'Food',
      mg: 'Sakafo',
    },
  },
  {
    id: '###holiday-wishes###',
    name: {
      en: 'Holidays and Wishes',
      mg: 'Firarian-tsoa',
    },
  },
  {
    id: '###introductions###',
    name: {
      en: 'How to Introduce Yourself',
      mg: 'Iza aho?',
    },
  },
  {
    id: '###romance###',
    name: {
      en: 'Romance and Love Phrases',
      mg: 'Resa-pitiavana',
    },
  },
  {
    id: '###misunderstanding###',
    name: {
      en: 'Solving a Misunderstanding',
      mg: 'Mamaha olana noho ny resaka tsy mifandray',
    },
  },
  {
    id: '###directions###',
    name: {
      en: 'Asking for Directions',
      mg: 'Fangatahana fanampiana sy fanoroana toerana',
    },
  },
  {
    id: '###hotel###',
    name: {
      en: 'At the restaurant',
      mg: "Ao amin'ny hotely",
    },
  },
  {
    id: '###nouns-only###',
    name: {
      en: 'Nouns',
      mg: 'Anarana',
    },
  },
];

storiesOf('List', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('List in English', () => (
    <List
      data={data}
      label={'Select a category: '}
      text={'Learn'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('learn-button')}
      size={16}
      language={'en'}
    />
  ))
  .add('List in Malagasy', () => (
    <List
      data={data}
      label={'Misafidy sokajy: '}
      text={'Learn'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('learn-button')}
      size={16}
      language={'mg'}
    />
  ));
