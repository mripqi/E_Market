import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const DEVICE_HEIGHT = Dimensions.get('window').height;
const vh = height / 100;
const vw = width / 100;

export const sizeWidth = size => size * vw;

export const sizeHeight = size => size * vh;

export const sizeFont = size => (size / 375) * 100 * vw;
