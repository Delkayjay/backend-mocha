import assert from 'assert';
import longestWord from '../word-game.js';

describe('Word-game test' , function(){
    it('should show you how to use word game function' , function(){
        
        assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
        assert.equal('barked', longestWord('The yellow dog barked loud'), "longestWord failing...");
    });

});