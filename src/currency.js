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

    fr_fr: {
          country: 'France',
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
    if (!location ||
        location.length > 5 ||
        location.length === 0)
         return false;
     return true;
};

const getAvailableCurrencies = () => {
    let available = [];

    available = Object.keys(currencies);
    return available;
};

module.exports = {
    getCurrencyPattern: getCurrencyPattern,
    getAvailableCurrencies: getAvailableCurrencies
};
