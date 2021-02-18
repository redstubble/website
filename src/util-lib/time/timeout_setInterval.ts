import { predicateNumber } from '../isType';
import { throttle } from 'lodash';
import { log } from '../logger';

/*
 * Set timeout to close socket
 * if no data received within {@link{RIOT_RECONNECT_TIMEOUT_MS}}
 */
function runOnTimeOutInterval(
    name: string,
    onTimeoutFn: (initTime: number, lastUpdateTime: number) => void,
    reconnectTimeout: number,
    getNow: () => number,
) {
    const initTime = getNow();
    let lastUpdateTime = getNow();
    let timeIntervalId: number | undefined = undefined;
    let _updated = true;

    const initSetInterval = () => {
        timeIntervalId = (setInterval(() => {
            if (!_updated) {
                clearInterval(timeIntervalId ?? 0);
                onTimeoutFn(initTime, lastUpdateTime);
            } else {
                _updated = false;
            }
        }, reconnectTimeout) as unknown) as number;
    };

    const throttledResetTimeOut = throttle(
        function updateSetInterval() {
            lastUpdateTime = getNow();
            if (!_updated) {
                _updated = true;
            }
        },
        5000,
        { trailing: false, leading: true },
    );

    const update = () => {
        if (predicateNumber(timeIntervalId)) {
            throttledResetTimeOut();
        } else {
            log.error('No timeoutId set');
        }
    };

    const stop = () => {
        clearInterval(timeIntervalId ?? 0);
    };

    const start = () => {
        stop();
        initSetInterval();
    };

    return { update, stop, start };
}

export { runOnTimeOutInterval };
