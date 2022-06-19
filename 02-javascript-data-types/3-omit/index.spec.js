import { omit, omitAlternative } from './index';

describe('javascript-data-types/omit', () => {
  it('should return a new object without passed field', () => {
    const obj = {foo: 'foo'};

    expect(omit(obj, 'foo')).toEqual({});
  });

  it('should return a new object without few passed fields', () => {
    const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};

    expect(omit(obj, 'foo', 'bar')).toEqual({baz: 'baz'});
  });

  it('should return initial object if passed fields doesn\'t found', () => {
    const obj = {foo: 'foo'};

    expect(omit(obj, 'riba')).toEqual({foo: 'foo'});
  });
});

describe('javascript-data-types/omitAlternative', () => {
  it('should return a new object without passed field', () => {
    const obj = {foo: 'foo'};

    expect(omitAlternative(obj, 'foo')).toEqual({});
  });

  it('should return a new object without few passed fields', () => {
    const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};

    expect(omitAlternative(obj, 'foo', 'bar')).toEqual({baz: 'baz'});
  });

  it('should return initial object if passed fields doesn\'t found', () => {
    const obj = {foo: 'foo'};

    expect(omitAlternative(obj, 'riba')).toEqual({foo: 'foo'});
  });
});
