import { log } from '..';
import { predicateNumber } from '../isType';

export enum Quadrant {
    NE,
    NW,
    SE,
    SW,
}

export interface QuadrantBearing {
    quadrant: Quadrant;
    angle: number;
}
/**
 * Returns quadrant of angle and angle within quadrant e.g.  0-90
 * @param {number} _bearing angle
 */
export function getQuadrantBearing(_bearing: number): QuadrantBearing | undefined {
    let quadrant: Quadrant | undefined;
    /**
     * As need to calc x and y coords need standard angle
     * On x coord
     */
    let standardAngle: number | undefined;
    if (typeof _bearing !== 'number' || _bearing < 0) {
        return undefined;
    } else {
        const bearing = _bearing % 360;

        if (bearing >= 0 && bearing < 90) {
            /**
             * ◷ ⦨
             */
            quadrant = Quadrant.NE;
            standardAngle = 90 - bearing;
        }
        if (bearing >= 90 && bearing < 180) {
            /**
             * ◶ ⦪
             */
            quadrant = Quadrant.SE;
            standardAngle = bearing - 90;
        }
        if (bearing >= 180 && bearing < 270) {
            /**
             * ◵ ⦫
             */
            quadrant = Quadrant.SW;
            standardAngle = 270 - bearing;
        }
        if (bearing >= 270 && bearing <= 360) {
            /**
             * ◴ ⦩
             */
            quadrant = Quadrant.NW;
            standardAngle = bearing - 270;
        }
        if (predicateNumber(quadrant) && typeof standardAngle === 'number') {
            return {
                quadrant,
                angle: standardAngle,
            };
        } else {
            console.log(quadrant);
            console.log(standardAngle);
            debugger;
        }
        log.error('Unable to get quadrant and standard angle');
    }
}
