  const currencies = {
    de_de: {
        country: 'Deutschland',
        symbol: '€',
        decimalSeparator: '.'
    },

    de_ch: {
        country: 'Schweiz',
        symbol: 'Fr',
        decimalSeparator: ','
    },

    en_au: {
        country: 'Australia / New Zealand',
        symbol: 'AU$',
        decimalSeparator: '.'
    },

    en_ca: {
        country: 'Canada',
        symbol: 'CA$',
        decimalSeparator: '.'
    },

    en_uk:  {
        country: 'United Kingdom',
        symbol: '£',
        decimalSeparator: '.'
    },

    en_us : {
        country: 'USA',
        symbol: '$',
        decimalSeparator: '.'
    },

    es_es: {
        country: 'España',
        symbol: '€',
        decimalSeparator: '.'
    },

    it_it: {
        country: 'Italia',
        symbol: '€',
        decimalSeparator: '.'
    },

    ja: {
        country: 'Japan',
        symbol: '¥',
        decimalSeparator: '.'
    },

    fr_fr: {
        country: 'France',
        symbol: '€',
        decimalSeparator: '.'
    }
};

const defaultCurrency = currencies.de_de;

const getCurrencyPattern = (location) => {
    if (!isLocationValid(location)) return null;

    //no location found: return the default
    if (typeof currencies[location] === 'undefined')
        return defaultCurrency;

    return currencies[location];
};

const isLocationValid = (location) => {
    if (location == null ||
        location.length > 5 ||
        location.length === 0)
         return false;
     return true;
};

module.exports = {
    getCurrencyPattern: getCurrencyPattern
};
