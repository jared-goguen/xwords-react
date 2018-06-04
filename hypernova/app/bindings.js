import hypernova from 'hypernova/server';

import Puzzle from './components/Puzzle';

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'Puzzle') {
      return Puzzle;
    }
    return null;
  },

  port: 3030,
});