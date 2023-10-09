import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Pages from '../Pages/Index';

const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;