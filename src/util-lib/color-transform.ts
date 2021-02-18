import { convertIntToHexString } from './number';

function desaturateColor(hexColor: string) {
    const col = hexToRgb(hexColor);
    const gray = col ? col.r * 0.3086 + col.g * 0.6094 + col.b * 0.082 : 0;
    const sat = 0;
    if (col) {
        col.r = Math.round(col.r * sat + gray * (1 - sat));
        col.g = Math.round(col.g * sat + gray * (1 - sat));
        col.b = Math.round(col.b * sat + gray * (1 - sat));
        return rgbToHex(col.r, col.g, col.b);
    }
    return hexColor;
}

function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

// function hexToHSL(H: string) {
//     // Convert hex to RGB first
//     let r = 0,
//         g = 0,
//         b = 0;
//     if (H.length == 4) {
//         r = parseInt('0x' + H[1] + H[1]);
//         g = parseInt('0x' + H[2] + H[2]);
//         b = parseInt('0x' + H[3] + H[3]);
//     } else if (H.length == 7) {
//         r = parseInt('0x' + H[1] + H[2]);
//         g = parseInt('0x' + H[3] + H[4]);
//         b = parseInt('0x' + H[5] + H[6]);
//     }
//     // Then to HSL
//     r /= 255;
//     g /= 255;
//     b /= 255;
//     const cmin = Math.min(r, g, b),
//         cmax = Math.max(r, g, b),
//         delta = cmax - cmin;
//     let h = 0,
//         s = 0,
//         l = 0;

//     if (delta == 0) h = 0;
//     else if (cmax == r) h = ((g - b) / delta) % 6;
//     else if (cmax == g) h = (b - r) / delta + 2;
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60);

//     if (h < 0) h += 360;

//     l = (cmax + cmin) / 2;
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);

//     return { h, s, l };
// }

function getContrastYIQ(hexcolor: string) {
    hexcolor = hexcolor.replace('#', '');
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
}

// function getTextColorFromBackgroundColor(n: string) {
//     const newString = n.replace('#', '');

//     const { l } = hexToHSL(newString);
//     if (l >= 0.175) {
//         return '#000000';
//     } else {
//         return '#ffffff';
//     }
// }

// console.log(desaturateColor('#ff0000'))

export { desaturateColor, getContrastYIQ };
