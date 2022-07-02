// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
const reset = name => {
  if (navigationRef.isReady()) {
    navigationRef.reset({ index: 0, routes: [{ name }] });
  }
};
const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
export { navigate, reset, goBack, navigationRef };

// add other navigation functions that you need and export them
