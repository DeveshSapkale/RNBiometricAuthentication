/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FingerPrint from './Components/FingerPrint';
import Lock from './Components/Lock';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Lock);
