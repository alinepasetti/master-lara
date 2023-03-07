import { capitalizeFirstLetter, generateId, secondsToMinutes } from './utils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the 1s letter of a string', () => {
    expect(capitalizeFirstLetter('banana')).toEqual('Banana');
  });
});

describe('secondsToMinutes', () => {
  it('should format > 60 minutes into single hour and minutes', () => {
    expect(secondsToMinutes(62)).toEqual('1 hour and 2 minutes');
  });

  it('should format 60 minutes into single hour and no minutes', () => {
    expect(secondsToMinutes(60)).toEqual('1 hour');
  });

  it('should format = 120 minutes into multiple hours and no minutes', () => {
    expect(secondsToMinutes(120)).toEqual('2 hours');
  });

  it('should format > 120 minutes into multiple hours and minutes', () => {
    expect(secondsToMinutes(122)).toEqual('2 hours and 2 minutes');
  });

  it('should format < 60 minutes into minutes', () => {
    expect(secondsToMinutes(59)).toEqual('59 minutes');
  });
});

describe('generateId', () => {
  it('should extract the id from the uri', () => {
    const URI_MOCK =
      'http://www.edamam.com/ontologies/edamam.owl#recipe_5cb28f4bea3d415932a69057d94d2bfc';

    expect(generateId(URI_MOCK)).toEqual('5cb28f4bea3d415932a69057d94d2bfc');
  });
});
