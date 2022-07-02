/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from "./src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

const app = ()=>{
    return(
        <Provider store={store}>
                <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => app);
