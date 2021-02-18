import { com } from 'igtimi-js-proto';
import log from './logger/logger';
import { speedUnits } from '../utilTypes/units';
import { isValidHexRegEx } from './regex';

const isValidHex = (inputString: string) => {
    const regEx = isValidHexRegEx;
    if (inputString.match(regEx)?.length) {
        return true;
    } else {
        console.log('Invalid Hex', inputString);
        return false;
    }
};

// export const isNum = (t: number | null | undefined): t is number =>
//   typeof t === "number";

export const convertInt = (_colorStr: string | undefined): number | undefined => {
    if (_colorStr) {
        const colorStr = _colorStr.charAt(0) === '#' ? _colorStr.slice(1) : _colorStr;
        if (isValidHex(colorStr)) {
            return parseInt('0x' + colorStr, 16);
        }
    }
    return undefined;
};

export const convertIntToHexString = (h: number) => {
    if (h === 0) {
        return '#000000';
    }
    if (!h) {
        log.error(`Unable to parse hex string: ${h}`);
        return '#000000';
    }
    const hexStringNumber = h.toString(16).padStart(6, '0');
    /** hex needs to be 6 digits long */
    return '#' + hexStringNumber;
};

export function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

export function rad2deg(rad: number) {
    return rad * (180 / Math.PI);
}

export const formatSpeed = (speedUnitType: speedUnits, sog: com.igtimi.ISpeedOverGround) => {
    const sogVal = sog.value || 0;
    if (speedUnitType === speedUnits.KTS) {
        // sog in km/h
        const kts = sogVal * 0.54;
        const val = roundtoDecimalPlaces(kts, 1) ?? '0.0';
        return val + 'kts';
    } else {
        log.warning('speed units are not supported');
    }
};

export function roundtoDecimalPlaces(number: number, decimalPlaces: number) {
    const _dec = decimalPlaces * 10 ?? 1;
    const roundedVal = Math.round(number * _dec) / _dec;
    return roundedVal.toFixed(decimalPlaces);
}
