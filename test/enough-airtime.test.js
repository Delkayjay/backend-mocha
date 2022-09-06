import assert from 'assert';
import enoughAirtime from '../enough-airtime.js';

describe('Enough-airtime test' , function(){
    it('should show you how to use enough airtime function' , function(){
        
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
        assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20))
        assert.equal('R0.00', enoughAirtime('data,data,data', 36));
    });

});