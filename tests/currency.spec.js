const { assert } = require('chai');
const CurrencyInfo = require('../src/currency');

describe("CurrencyInfo",() => {
   describe("getCurrencyPattern()", () => {
       it("should returns an object with correct values for valid location", () => {
           assert.typeOf(CurrencyInfo.getCurrencyPattern('de_de'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('de_ch'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('en_au'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('en_ca'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('en_uk'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('en_us'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('es_es'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('it_it'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('ja'), 'object');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('fr_fr'), 'object');
       });

       it('should return null for invalid location',() => {
           assert.typeOf(CurrencyInfo.getCurrencyPattern(''), 'null');
           assert.typeOf(CurrencyInfo.getCurrencyPattern('test_invalid'), 'null');
           assert.typeOf(CurrencyInfo.getCurrencyPattern(null), 'null');
           assert.equal(CurrencyInfo.getCurrencyPattern('invalid'), null);
       });

       it('should return default location for non implemented location',() => {
           let ci = CurrencyInfo.getCurrencyPattern('eu_pt');
           assert.typeOf(ci, 'object');
           assert.property(ci, 'country');
           assert.equal(ci.country, 'Deutschland')
           assert.property(ci, 'symbol');
           assert.equal(ci.symbol, '€')
           assert.property(ci, 'decimalSeparator');
           assert.equal(ci.decimalSeparator, '.')
       });

       it("should return correct values for location Germany (de_de)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('de_de');
           assert.isNotNull(ci);
           assert.equal(ci.country,"Deutschland");
           assert.equal(ci.symbol,"€" );
           assert.equal(ci.decimalSeparator,".");
       });


       it("should return correct values for location Switzerland (de_ch) ", () => {
           let ci = CurrencyInfo.getCurrencyPattern('de_ch');
           assert.isNotNull(ci);
           assert.equal(ci.country,"Schweiz");
           assert.equal(ci.symbol,"Fr" );
           assert.equal(ci.decimalSeparator,"," );
       });

       it("should return correct values for location Australia / New Zealand (en_au) ", () => {
           let ci = CurrencyInfo.getCurrencyPattern('en_au');
           assert.isNotNull(ci);
           assert.equal(ci.country,"Australia / New Zealand");
           assert.equal(ci.symbol,"AU$" );
           assert.equal(ci.decimalSeparator,"." );
       });

       it("should return correct values for location Canada (en_ca)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('en_ca');
           assert.equal(ci.country,"Canada");
           assert.equal(ci.symbol,"CA$" );
           assert.equal(ci.decimalSeparator,"." );
       });

       it("should return correct values for location United Kingdom (en_uk)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('en_uk');
           assert.equal(ci.country,"United Kingdom");
           assert.equal(ci.symbol,"£" );
           assert.equal(ci.decimalSeparator,"." );
       });

       it("should return correct values for location USA (en_us)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('en_us');
           assert.equal(ci.country,"USA");
           assert.equal(ci.symbol,"$" );
           assert.equal(ci.decimalSeparator,"." );
       });

       it("should return correct values for location Italy (it_it)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('it_it');
           assert.equal(ci.country,"Italia");
           assert.equal(ci.symbol,"€" );
           assert.equal(ci.decimalSeparator,"." );
       });

       it("should return correct values for location Spain (es_es)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('es_es');
           assert.equal(ci.country,"España");
           assert.equal(ci.symbol,"€" );
           assert.equal(ci.decimalSeparator,"." );
       });

       it("should return correct values for location Japan (ja) ", () => {
           let ci = CurrencyInfo.getCurrencyPattern('ja');
           assert.equal(ci.country,"Japan");
           assert.equal(ci.symbol,"¥" );
           assert.equal(ci.decimalSeparator,".");
       });

       it("should return correct values for location France (fr_fr)", () => {
           let ci = CurrencyInfo.getCurrencyPattern('fr_fr');
           assert.equal(ci.country,"France");
           assert.equal(ci.symbol,"€" );
           assert.equal(ci.decimalSeparator,"." );
       });
   });

   describe('getAvailableCurrencies()', () => {
       it('should return an array with available currencies', () => {
           let available = CurrencyInfo.getAvailableCurrencies();
           assert.isArray(available);
           assert.deepEqual(available, [
               'de_de',
               'de_ch',
               'en_au',
               'en_ca',
               'en_uk',
               'en_us',
               'es_es',
               'fr_fr',
               'it_it',
               'ja',
           ])
       });
   });
});
