# CurrencyInfo [![Build Status](https://travis-ci.org/dudu84/currency-info.svg?branch=master)](https://travis-ci.org/dudu84/currency-info) [![Known Vulnerabilities](https://snyk.io/test/github/dechristo/js-currency/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dechristo/js-currency?targetFile=package.json) [![npm version](https://badge.fury.io/js/currency-info.svg)](https://badge.fury.io/js/currency-info)


A lightweight currency formats information module


## 1. Instructions

Install it with `npm install currency-info --save`

## 2. Tests
To run the tests type `mocha tests`. The output should looks like:

    CurrencyInfo
      getCurrencyPattern()
        √ should returns an object with correct values for valid location
        √ should return null for invalid location
        √ should return default location for non implemented location
        √ should return correct values for location Germany (de_de)
        √ should return correct values for location Switzerland (de_ch)
        √ should return correct values for location Australia / New Zealand (en_au)
        √ should return correct values for location Canada (en_ca)
        √ should return correct values for location United Kingdom (en_uk)
        √ should return correct values for location USA (en_us)
        √ should return correct values for location Italy (it_it)
        √ should return correct values for location Spain (es_es)
        √ should return correct values for location Japan (ja)
        √ should return correct values for location France (fr_fr)
      getAvailableCurrencies()
        √ should return an array with available currencies

## 3. Linting
The app uses eslint. Type `npm  run lint`
