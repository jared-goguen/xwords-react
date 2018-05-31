import hypernova from 'hypernova/server';

import TestComponent from './components/TestComponent';

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'TestComponent') {
      return TestComponent;
    }
    return null;
  },

  port: 3030,
});