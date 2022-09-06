import assert from 'assert';
import greet from '../greet.js';

describe ('the greet function', function() {
    it ('should be able to greet David', function () {

        assert.equal('Hello, David', greet('David'));

    });
});