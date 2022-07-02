import { Dimensions, PixelRatio } from 'react-native';
import {
  getModel,
  getUniqueId,
  getSystemVersion,
  getBuildNumber,
} from 'react-native-device-info';
const { width, height } = Dimensions.get('window');
import { Platform } from 'react-native';
import pkg from '../../package.json';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const DEVICE_ID = getUniqueId();
export const DEVICE_MODEl = getModel();
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const OS_SYSTEM_VERSION = getSystemVersion();
export const BUILD_NO = Number(getBuildNumber());
export const PLATFORM = Platform.OS;
export const APP_VERSION = pkg.version;

export const horizontalScale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const normalizeFontSize = size => {
  //812 is the height for iphoneX as this is the stable and our design
  return PixelRatio.roundToNearestPixel(
    (size - 1) * (height / guidelineBaseHeight),
  );
};

export const arabicToEnglishNumber = number =>
  number.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/٫/g, '.');
