import { com } from 'igtimi-js-proto';
import { SessionLogStructureAndEntities } from '../../modTypes/igtimi-session/sessionLogEntryTypes';
import { igtimiModelDevices } from '../../modTypes/igtimi-worker-store/model.dataPoints';

type SessionType = SessionLogStructureAndEntities;

/** Builds object to allow insertion of data */
export const scaffold = {
    serial: {
        /** makes sure serial and datapoint type is on objec  */
        dataPointObj: (
            obj: igtimiModelDevices,
            serial: string,
            dataPoint: NonNullable<com.igtimi.DataPoint['Data']>,
        ) => {
            addObjectKeys(obj, serial);
            const dp = obj[serial][dataPoint];
            if (dataPoint && !dp) {
                obj[serial][dataPoint] = [];
            }
            return obj[serial][dataPoint] as NonNullable<typeof dp>;
        },
    },
    session: {
        /**
         * SessionType omits import and custom entty
         * but datapoint can include these types
         */
        dataPointObj: (obj: SessionType, dataPoint: com.igtimi.SessionLogEntry['Entry']) => {
            //@ts-ignore
            if (dataPoint && !obj[dataPoint]) {
                // @ts-ignore
                obj[dataPoint] = [];
            }
        },
    },
};

/** Checks if keys (nested) exist in object if not creates them with empty object
 *  * @example
 * addObjectKeys({}, ['first', 'second']);
 * returns { 'first':
 *            {'second': {} }
 *         }
 */
export const addObjectKeys = (obj: Record<string, any>, ...stringArgs: string[]) => {
    stringArgs.forEach((name: string, index: number) => {
        const previousStringArr = stringArgs.slice(0, index);
        const currentObj = buildObj(obj, previousStringArr);
        if (!currentObj[name]) {
            currentObj[name] = {} as any;
        }
    });
    return obj;
};

export const addObjectArray = (obj: Record<string, any>, arrayName: string, ...stringArgs: string[]) => {
    if (stringArgs.length) {
        addObjectKeys(obj, ...stringArgs);
    }
    const currentObj = buildObj(obj, stringArgs);
    if (arrayName && !currentObj[arrayName]) {
        currentObj[arrayName] = [];
    }
};

const buildObj = <T extends Record<string, any>>(obj: T, stringArr: string[]) => {
    let currentObj = obj;
    for (const name of stringArr) {
        currentObj = currentObj[name];
    }
    return currentObj;
};
