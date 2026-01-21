const theme = require('./theme');

// Pre-defined monochrome themes.
const themes = [
  theme({
    name: 'monochrome-dark',
    background: '#101010',
    foreground: '#EBEBEB',
  }),
  theme({
    name: 'monochrome-dark-subtle',
    background: '#0A1219',
    foreground: '#F1F5F9',
  }),
  theme({
    name: 'monochrome-dark-amplified',
    background: '#000000',
    foreground: '#FFFFFF',
  }),
  theme({
    name: 'monochrome-dark-cool-gray',
    background: '#111827',
    foreground: '#F9FAFB',
  }),
];

module.exports = themes;
