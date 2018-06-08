import hypernova from 'hypernova/server';

import Puzzle from './components/Puzzle';
import Test from './test/Test';

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'Puzzle') {
      return Puzzle;
    }
    if (name === 'Test') {
      return Test;
    }
    return null;
  },

  port: 3030,
});