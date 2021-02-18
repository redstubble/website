import { formatSpeed } from '../number';
import { deviceSpeedUnits } from '../../utilTypes/units';
import { LabelTextProps, OldLabelTextPropsRedux } from '../../utilTypes/model';
import { removeUndefined } from '../array/_array';

export function titleCase(strs: string) {
    const str = strs.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

/** get first path with leading / e.g. /ump or /races */
export const firstPathRegex = () => new RegExp(/\/[\w-]+/);

export const formatIgtimiDataPoints = (
    props: LabelTextProps,
    settings: deviceSpeedUnits,
    viewerSettings: OldLabelTextPropsRedux | undefined,
) => {
    const labelProps = (Object.keys(props) as [keyof LabelTextProps])
        .map((key): { val: string; index: number } | undefined => {
            if (!props[key]) {
                return undefined;
            }
            switch (key) {
                case 'sog': {
                    const val = props[key];
                    if (val && viewerSettings?.sog) {
                        return {
                            val: `spd: ${formatSpeed(settings.BoatSpeed, val)}`,
                            index: 0,
                        };
                    }
                    return undefined;
                }
                case 'hdg': {
                    const val = props[key];
                    if (val?.value && viewerSettings?.hdg) {
                        return {
                            val: `hdg: ${Math.round(val.value)}°`,
                            index: 1,
                        };
                    }
                    return undefined;
                }
                case 'tws': {
                    const val = props[key];
                    if (val && viewerSettings?.tws) {
                        return {
                            val: `tws: ${formatSpeed(settings.WindSpeed, val)}`,
                            index: 5,
                        };
                    }
                    return undefined;
                }
                case 'twd': {
                    const val = props[key];
                    if (val && viewerSettings?.twd) {
                        const value = val.value ?? 0;

                        return {
                            val: `twd: ${Math.round(value)}°`,
                            index: 6,
                        };
                    }
                    return undefined;
                }
                case 'dist2Target': {
                    const val = props[key] ?? 0;
                    if (val > 0) {
                        return { val: `${val.toFixed(1)}m to target`, index: 9 };
                    }
                    return undefined;
                }
                case 'string1': {
                    const val = props[key] ?? '';
                    return { val, index: 10 };
                }
                case 'string2': {
                    const val = props[key] ?? '';
                    return { val, index: 11 };
                }
                case 'string3': {
                    const val = props[key] ?? '';
                    return { val, index: 12 };
                }
                default:
                    return undefined;
            }
        })
        .filter(removeUndefined)
        .sort((a, b) => a.index - b.index)
        .map((i) => i.val);
    if (props.hdg?.value && props.twd?.value) {
        // const twa = props.hdg.value + props.twd.value;
        // const t = { val: `twa: ${Math.round(value)}°`, index: 6 };
        // labelProps.push(t);
    }
    return labelProps;
};
