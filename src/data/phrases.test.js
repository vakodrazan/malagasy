import {
  findPhraseById,
  getAllCategoriesNames,
  getPhraseIdsForCategory,
  findCategoryById,
  getAllCategoriesIds,
  LANGUAGE_NAMES,
} from './dataUtils';

describe('getAllCategoriesNames', () => {
  it('get all names for category for given language ', () => {
    const received = getAllCategoriesNames(LANGUAGE_NAMES.MG);
    const expected = [
      'Fiarahabana',
      'Fanaovam-beloma',
      'Firarian-tsoa',
      'Iza aho?',
      'Resa-pitiavana',
      'Mamaha olana noho ny resaka tsy mifandray',
      'Fangatahana fanampiana sy fanoroana toerana',
      'Inona no tenenina rehefa misy loza na zavatra ratsy mitranga?',
      'Hotely, trano fisakafoanana sy ireo dia',
      'Fiteny samihafa',
      '??Cuss Words (polite)??',
      '??Writing a Letter??',
      'Fomba fiteny sy teny fohy',
      'Mpisolo-tena',
      '???Mpisolo-tena???',
      'fanontaniana',
      'Fandavana',
      'Mpisolo tena tapisaka',
      'Mpisolo tena tapisaka ?? two words',
      'Mpisolo tena tapisaka ?? three words',
      'Mpanondro',
      'Matoateny lasa',
      'Matoateny ho avy',
      'Matoateny ??present??',
      '??Various verbs??',
      'Vehivavy',
      '??Mg Plural??',
      'Mpanoritra',
      'Sakafo',
      'Anarana',
      'Mpanoritra',
      'Mpisolo',
      'Mpisolo fotoana',
      'Mpisolo toerana',
      'Mpisolo toetra',
      'Fiverimberenana',
      'Mpamaritra',
      'Mpamaritra loko',
      'Mpamaritra hangeza',
      'Mpamaritra endrika',
      'Mpamaritra tsiro',
      'Mpamaritra kalitao',
    ];
    expect(received).toEqual(expected);
  });
});

describe('getAllCategoriesIds', () => {
  it('get all categories ids ', () => {
    const received = getAllCategoriesIds();
    const expected = [
      '###greet###',
      '###farewell###',
      '###holiday-wishes###',
      '###introductions###',
      '###romance###',
      '###misunderstanding###',
      '###directions###',
      '###emergency###',
      '###hotel###',
      '###daily-exp###',
      '###cuss-words###',
      '###writing-letter###',
      '###short-random###',
      '###pronouns-only###',
      '###pronouns-in-use###',
      '###questions###',
      '###negation###',
      '###prepositions-single###',
      '###prepositions-two-words###',
      '###prepositions-three-words###',
      '###demonstrative-pronouns###',
      '###verbs-past###',
      '###verbs-future###',
      '###verbs-present###',
      '###verbs-various###',
      '###feminine###',
      '###plurals###',
      '###articles###',
      '###food###',
      '###nouns-only###',
      '###body-parts###',
      '###adverbs###',
      '###adverbs-of-time###',
      '###adverbs-of-place###',
      '###adverbs-of-manner###',
      '###adverbs-of-frequency###',
      '###adj-only###',
      '###adj-colors###',
      '###adj-sizes###',
      '###adj-shapes###',
      '###adj-tastes###',
      '###adj-qualities###',
    ];

    expect(received).toEqual(expected);
  });
});
describe('getPhraseIdsForCategory', () => {
  it('get Phrases for given category returns all phrase ids in category', () => {
    const received = getPhraseIdsForCategory('###writing-letter###');
    const expected = [
      'writing-letter#0',
      'writing-letter#1',
      'writing-letter#2',
      'writing-letter#3',
      'writing-letter#4',
      'writing-letter#5',
    ];

    expect(received).toEqual(expected);
  });
  it('get Phrases for given category returns null when no category found', () => {
    const received = getPhraseIdsForCategory('###writing-a-will###');
    const expected = null;

    expect(received).toEqual(null);
  });
});

describe('findCategoryById', () => {
  it('finds category by id', () => {
    const received = findCategoryById('###writing-letter###');
    const expected = [
      'writing-letter#0',
      'writing-letter#1',
      'writing-letter#2',
      'writing-letter#3',
      'writing-letter#4',
      'writing-letter#5',
    ];

    expect(received).toEqual(expected);
  });
  it('returns null if no category found', () => {
    const received = findCategoryById('###writing-a-will###');
    const expected = null;

    console.log(received);
    expect(received).toEqual(null);
  });
});

describe('findPhraseById', () => {
  it('finds phrase by id', () => {
    const received = findPhraseById('###writing-letter###');
    const expected = {};
    console.log(received);
    expect(received).toEqual(expected);
  });
  it('returns null if no phrase found', () => {
    const received = findPhraseById('###non existing phrase###');
    const expected = null;

    expect(received).toEqual(null);
  });
});
