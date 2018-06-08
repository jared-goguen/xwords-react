import hypernova from 'hypernova/server';
import { renderReact } from 'hypernova-react';

import Puzzle from './components/Puzzle';
import Test from './test/Test';

const components = {
  Puzzle,
  Test
};


hypernova({
  devMode: true,

  getComponent(name) {
    return renderReact(components[name], name);
  },
  
  port: 3030,
});