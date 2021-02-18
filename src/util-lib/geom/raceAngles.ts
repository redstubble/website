import { rad2deg } from "../number";

interface RaceAngles {
  angle: number;
  convertTo360: (n: number) => number;
  /** Opposite direction */
  // flip: (degs: number) => number;
  addDegsToAngle: (degs: number, ...value: (number | undefined)[]) => number;
  removeDegsFromAngle: (degs: number, value: number | undefined) => number;
  /** Simply adds penDir to windAngle and converts to angle within 360 range */
  getAngleFromPenDir: (windAngle: number, penDir: 0 | 180) => number;
}

/**
 * returns bearing of degrees on map.
 * keeps same direction irrelevant of map orientation
 *
 * @param bearing
 * @param mapRotation
 * @returns {number} static bearing
 */

class RaceAngles {
  rad2deg: typeof rad2deg;
  constructor() {
    this.angle = 0;
    this.rad2deg = rad2deg;
  }
}

/**
 * returns value angle on map.
 * irrelevant of map orientation
 *
 * @param {number} degs
 * @param {number | undefined} value
 * @returns {number} static map angle
 */
RaceAngles.prototype.removeDegsFromAngle = function (
  _degs: number,
  angle: number | undefined
) {
  const degs = Math.round(_degs);
  const dataAngleVal = angle ?? 0;
  const totalBearing = dataAngleVal - degs;
  return this.convertTo360(totalBearing);
};

function add(acc: number, a: number | undefined) {
  return acc + (a ?? 0);
}

/**
 * adds map axis to angle
 */
RaceAngles.prototype.addDegsToAngle = function (
  _degs: number,
  ...valueArr: (number | undefined)[]
) {
  const degs = Math.round(_degs);
  const dataAngleVal = valueArr.reduce(add, 0);
  return this.convertTo360(dataAngleVal + degs);
};

RaceAngles.prototype.convertTo360 = function (angle: number) {
  while (angle < 0) {
    angle = angle + 360;
  }
  return angle % 360;
};

export { RaceAngles };
