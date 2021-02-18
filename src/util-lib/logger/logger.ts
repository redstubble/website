import { removeUndefined } from '../array/_array';

/** Logger Instance For Logging to Browser (Chrome) */
enum LoggerAction {
    trace = 'Trace',
    debug = 'Debug',
    info = 'Info',
    warning = 'Warning',
    error = 'Error',
    errorMsg = 'Error Msg',
    success = 'Success',
    infoWorker = 'Worker Info',
    infoEvents = 'Events Info',
    infoRiot = 'Riot Info',
    infoSession = 'Session Info',
    infoPlayback = 'Playback Info',
    warningWorker = 'Worker Warning',
    warningEvents = 'Events Warning',
    warningRiot = 'Riot Warning',
    warningSession = 'Session Warning',
    errorSession = 'Session Package Error',
}

const emojiErrorTypes = {
    info: 0x1f4e2, // 📢
    warning: 0x1f4e2, // 🦖
    success: 0x26f5, // ⛵️
    errorMsg: 0x1f4cb, // 📋
    error: 0x2757, // ❗️
};

const emojiDomainTypes = {
    riot: 0x1f685, // 🚅
    session: 0x1f4e6, // 📦
    worker: 0x1f4f0, // 📰
    playback: 0x1f39e, // 🎞
    events: 0x1f39f, // 🎟
};
/**
 * @see https://www.designwizard.com/blog/design-trends/colour-combination
 */
const colorSchemes: Record<string, [string, string][]> = {
    info: [
        ['#FFD662FF', '#00539CFF'],
        ['#FCF6F5FF', '#89ABE3FF'],
        ['#0063B2FF', '#9CC3D5FF'],
        ['#EEA47FFF', '#00539CFF'],
        ['#00B1D2FF', '#FDDB27FF'],
        ['#063852', '#F0810F'],
    ],
    success: [
        ['#00203FFF', '#ADEFD1FF'],
        ['#97BC62FF', '#2C5F2D'],
        ['#FCF6F5FF', '#2BAE66FF'],
    ],
    warning: [
        ['#101820FF', '#F2AA4CFF'],
        ['#F93822FF', '#FDD20EFF'],
        ['#FFFFFFFF', '#F95700FF'],
        ['#00239CFF', '#E10600FF'],
        ['#F95700FF', '#00A4CCFF'],
    ],
    errorMsg: [['#E94B3CFF', '#2D2926FF']],
    error: [
        ['#F93822FF', '#FDD20EFF'],
        ['#00239CFF', '#E10600FF'],
    ],
};

/**
 * @see https://unicode.org/emoji/charts/full-emoji-list.html
 * [text, background, emojiNumber]
 * On mac to insert emojis in vscode > cmd + ctrl + space
 */
const loggerObj: Record<LoggerAction, [string, string, ...number[]]> = {
    [LoggerAction.trace]: ['white', 'black'],
    [LoggerAction.debug]: ['black', 'blue'],
    [LoggerAction.info]: [...colorSchemes.info[0], emojiErrorTypes.info], // 📢
    [LoggerAction.success]: [...colorSchemes.success[0], emojiErrorTypes.success], // ⛵️
    [LoggerAction.warning]: [...colorSchemes.warning[0], emojiErrorTypes.warning], // 🦖
    [LoggerAction.errorMsg]: [...colorSchemes.errorMsg[0], emojiErrorTypes.errorMsg], // 📋
    [LoggerAction.error]: [...colorSchemes.error[0], emojiErrorTypes.error], // ❗️
    [LoggerAction.infoWorker]: [...colorSchemes.info[1], emojiErrorTypes.info, emojiDomainTypes.worker], // 📰
    [LoggerAction.infoRiot]: [...colorSchemes.info[2], emojiErrorTypes.info, emojiDomainTypes.riot], // 📢🚅
    [LoggerAction.infoEvents]: [...colorSchemes.info[3], emojiErrorTypes.info, emojiDomainTypes.events], // 📢🎟
    [LoggerAction.infoSession]: [...colorSchemes.info[4], emojiErrorTypes.info, emojiDomainTypes.session], // 📢🚅
    [LoggerAction.infoPlayback]: [...colorSchemes.info[5], emojiErrorTypes.info, emojiDomainTypes.playback], // 📢🚅
    [LoggerAction.warningWorker]: [...colorSchemes.warning[1], emojiErrorTypes.warning, emojiDomainTypes.worker], // 📰
    [LoggerAction.warningRiot]: [...colorSchemes.warning[2], emojiErrorTypes.warning, emojiDomainTypes.riot], // 🦖🚅
    [LoggerAction.warningEvents]: [...colorSchemes.warning[3], emojiErrorTypes.warning, emojiDomainTypes.events], // 📢🎟
    [LoggerAction.warningSession]: [...colorSchemes.warning[4], emojiErrorTypes.warning, emojiDomainTypes.session], // 📦
    [LoggerAction.errorSession]: [...colorSchemes.error[1], emojiErrorTypes.warning, emojiDomainTypes.session], // 📦
};

const getStyling = (text: string, background = 'black') => {
    const styleArr = [
        `color: ${text}; background-color: ${background}; padding: 2px 5px; border-radius: 2px`,
        'color: auto; background-color: none; padding: none; border-radius: none' as string,
        `color: ${text}; background-color: ${background}; padding: 2px 5px; border-radius: 2px`,
        'color: auto; background-color: none; padding: none; border-radius: none' as string,
        `color: ${text}; background-color: ${background}; padding: 2px 5px; border-radius: 2px`,
        'color: auto; background-color: none; padding: none; border-radius: none' as string,
    ];
    return styleArr;
};

const logger = (action: LoggerAction) => (highlight: string, ...other: Array<[string, any]>) => {
    if (action === LoggerAction.trace && process.env.REACT_APP_SHOW_TRACE !== 'true') {
        return;
    }
    if (action === LoggerAction.debug && process.env.REACT_APP_SHOW_DEBUG !== 'true') {
        return;
    }
    const [textColor, backgroundColor, ...emojiCodeArr] = loggerObj[action];
    const styling = getStyling(textColor, backgroundColor);
    const emoj = emojiCodeArr
        .map((e) => (isNaN(e ?? NaN) ? undefined : String.fromCodePoint(e!)))
        .filter(removeUndefined);
    /**
     * E.g.  ["%cWK: Device Request Process Time%c", "color: white; padding: 2px 5px; border-radius: 2px", "color: auto; background-color: none; padding: none; border-radius: none"]
     * Each line within getStyling is called %c
     */
    const label = emoj.length
        ? [`%c${emoj.join(' ')}%c %c${action}%c %c${highlight}%c`, ...styling]
        : [`%c${highlight}%c`, ...styling];
    console.groupCollapsed(...label);
    other.forEach((a) => console.log(a[0], a[1]));
    const time = new Date().toLocaleTimeString('en-US');
    console.log('Time', time);
    console.trace();
    console.groupEnd();
};

export default {
    trace: logger(LoggerAction.trace),
    debug: logger(LoggerAction.debug),
    info: logger(LoggerAction.info),
    warning: logger(LoggerAction.warning),
    error: logger(LoggerAction.error),
    errorMsg: logger(LoggerAction.errorMsg),
    success: logger(LoggerAction.success),
    infoWorker: logger(LoggerAction.infoWorker),
    infoRiot: logger(LoggerAction.infoRiot),
    infoSession: logger(LoggerAction.infoSession),
    infoEvents: logger(LoggerAction.infoEvents),
    infoPlayback: logger(LoggerAction.infoPlayback),
    warningWorker: logger(LoggerAction.warningWorker),
    warningRiot: logger(LoggerAction.warningRiot),
    warningEvents: logger(LoggerAction.warningEvents),
    warningSession: logger(LoggerAction.warningSession),
    errorSession: logger(LoggerAction.errorSession),
};
