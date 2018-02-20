#CurrencyJS - A lightweight currency module

## 1. Instructions

   Clonse the repository, install its dependencies with `npm install` and then just add to the file where you want to use **CurrencyJS**:

    const CurrencyInfo = require('../src/currency');


## 2. Tests
To run the tests type `mocha tests`. The output should looks like:

    CurrencyInfo
        getCurrencyPattern()
          ✓ should returns an object with correct values for valid location
          ✓ should return null for invalid location
          ✓ should return default location for non implemented location
          ✓ should return correct values for location Germany (de_de)
          ✓ should return correct values for location Switzerland (de_ch)
          ✓ should return correct values for location Australia / New Zealand (en_au)
          ✓ should return correct values for location Canada (en_ca)
          ✓ should return correct values for location United Kingdom (en_uk)
          ✓ should return correct values for location USA (en_us)
          ✓ should return correct values for location Italy (it_it)
          ✓ should return correct values for location Spain (es_es)
          ✓ should return correct values for location Japan (ja)
          ✓ should return correct values for location France (fr_fr)
