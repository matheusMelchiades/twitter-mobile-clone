import React from 'react';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(["Warning", "Unrecognized"])

import Routes from './routes';

const App = () => <Routes />;

export default App;