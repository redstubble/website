/** safari does not support this so need to handle it  */
export const getBroadcastChannel = (channel: string) => {
    // debugger;
    if (typeof BroadcastChannel === 'undefined') {
        return undefined;
    } else {
        return new BroadcastChannel(channel);
    }
};
