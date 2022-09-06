import assert from 'assert';
import firstPaarl from '../paarl.js';

describe('Paarl test' , function(){
    it('should show you how to use total phone bill function' , function(){
        
        assert.equal('CJ 65456', firstPaarl('CY 345435, CJ 65456, CJ 43563456'));
        assert.equal('CJ 43563456', firstPaarl('CY 345435, CL 65456, CJ 43563456'));
        assert.equal('', firstPaarl('CY 345435, CK 65456, CW 43563456'))
    });

});