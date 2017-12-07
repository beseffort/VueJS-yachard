'use strict'

const Config = {
  wpDomain: (process.env.NODE_ENV === 'staging') ? 'https://staging2.yachad.org/wp/' : 'https://local.yachad.oustatic.org/wp/',
  regionSites: {
    'newyork': 'New York',
    'new-jersey': 'New Jersey',
    'newengland': 'New England',
    'baltimore': 'Baltimore',
    'chicago': 'Chicago',
    'cleveland': 'Cleveland',
    'dallas': 'Dallas',
    'detroit': 'Detroit',
    'houston': 'Houston',
    'losangeles': 'Los Angeles',
    'omaha': 'Omaha',
    'southflorida': 'South Florida',
    'stlouis': 'stlouis',
    'toronto': 'Toronto',
    'philadelphia': 'Philadelphia',
    'israel': 'Israel'
  },
  summerSites: {
    'shadow-moshava': 'Shadow Moshava'
  },
  client: (process.env.NODE_ENV === 'staging') ? 'https://staging2.yachad.org/' : 'https://local.yachad.oustatic.org/',
  loadDbName: 'vwpLocal',
  analyticsPath: '//www.google-analytics.com/analytics.js'
}

module.exports = Config
