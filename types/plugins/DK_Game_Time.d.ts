declare var $gameTime: Game_Time;

declare interface Game_Interpreter {
    waitGameTime(gameTime: Game_Time): void;
    _waitGameTime?: Game_Time;
}

declare interface Game_System {
    isGameTimeWindowVisible(): boolean;
    setGameTimeWindowVisible(visible: boolean): void;
    isGameTimeMapButtonEnabled(): boolean;
    setGameTimeMapButtonEnabled(enabled: boolean): void;
    _gameTimeWindowVisible?: boolean;
    _gameTimeMapButtonEnabled?: boolean;
}

declare class Game_Time {
    constructor(object?: Game_Time | Date | any);

    sec: number;
    min: number;
    hour: number;
    day: number;
    month: number;
    year: number;
    speed: number;
    speedRatio: number;
    ms: number;

    readonly dayPeriod: number;
    readonly dayWeek: number;
    readonly dayYear: number;
    readonly week: number;
    readonly season: number;
    readonly date: { day: number, month: number, year: number };
    readonly time: { ms: number, sec: number, min: number, hour: number };

    initialize(object?: Game_Time | Date | any): void;

    add(type: string, value: number): Game_Time;
    addMs(value?: number): Game_Time;
    addSec(value?: number): Game_Time;
    addMin(value?: number): Game_Time;
    addHour(value?: number): Game_Time;
    addDay(value?: number): Game_Time;
    addMonth(value?: number): Game_Time;
    addYear(value?: number): Game_Time;

    clone(): Game_Time;

    compareTo(gameTime: Game_Time, blockSeconds?: boolean): number;
    compareToDate(gameTime: Game_Time): number;
    compareToTime(gameTime: Game_Time, blockSeconds?: boolean): number;

    copyFrom(object: Game_Time | Date | number | any): Game_Time;

    equals(time: Game_Time, blockSeconds?: boolean): boolean;
    equalsDate(gameTime: Game_Time): boolean;
    equalsTime(gameTime: Game_Time, blockSeconds?: boolean): boolean;

    diff(gameTime: Game_Time): { ms: number, sec: number, min: number, hour: number, day: number, month: number, year: number };

    format(string: string): string;

    getDayPeriod(): { name: string, startHour: number, endHour: number };
    getDaysInMonth(): number;
    getDaysInYear(): number;
    getDayStart(): Game_Time;
    getDayEnd(): Game_Time;
    getFirstDay(): Game_Time;
    getLastDay(): Game_Time;

    isDayOff(): boolean;
    inRange(gameTime1: Game_Time, gameTime2: Game_Time, blockSeconds?: boolean): boolean;
    inRangeDate(gameTime1: Game_Time, gameTime2: Game_Time): boolean;
    inRangeTime(gameTime1: Game_Time, gameTime2: Game_Time, blockSeconds?: boolean): boolean;
    isLeapYear(): boolean;
    isUpdated(): boolean;
    isPaused(): boolean;
    isRealTimeUsed(): boolean;

    less(gameTime: Game_Time, blockSeconds?: boolean): boolean;
    lessDate(gameTime: Game_Time): boolean;
    lessTime(gameTime: Game_Time, blockSeconds?: boolean): boolean;
    lessEquals(gameTime: Game_Time, blockSeconds?: boolean): boolean;
    lessEqualsDate(gameTime: Game_Time): boolean;
    lessEqualsTime(gameTime: Game_Time, blockSeconds?: boolean): boolean;

    more(gameTime: Game_Time, blockSeconds?: boolean): boolean;
    moreDate(gameTime: Game_Time): boolean;
    moreTime(gameTime: Game_Time, blockSeconds?: boolean): boolean;
    moreEquals(gameTime: Game_Time, blockSeconds?: boolean): boolean;
    moreEqualsDate(gameTime: Game_Time): boolean;
    moreEqualsTime(gameTime: Game_Time, blockSeconds?: boolean): boolean;

    pause(duration?: number): void;
    print(): void;

    rem(type: string, value: number): Game_Time;
    remSec(value?: number): Game_Time;
    remMin(value?: number): Game_Time;
    remHour(value?: number): Game_Time;
    remDay(value?: number): Game_Time;
    remMonth(value?: number): Game_Time;
    remYear(value?: number): Game_Time;

    resume(): void;

    setDate(date: { year?: number, month?: number, day?: number }): Game_Time;
    setTime(time: { hour?: number, min?: number, sec?: number, ms?: number }): Game_Time;

    toDate(): Date;

    update(): void;
    updateRealTime(): void;
    useRealTime(use?: boolean): void;
    updatePause(): void;

    static checkVersion(version: string): boolean;
    static getMillisecondsInSecond(): number;
    static getSecondsInMinute(): number;
    static getMinutesInHour(): number;
    static getHoursInDay(): number;
    static getDayPeriod(hour: number): { name: string, startHour: number, endHour: number };
    static getDaysInWeek(): number;
    static getDaysInMonth(month: number, year: number): number;
    static getDaysInYear(year: number): number;
    static getMonthsInYear(): number;
    static getDaysDifference(gameTime1: Game_Time, gameTime2?: Game_Time): number;
    static isDayOff(dayWeek: number): boolean;
    static isLeapYear(year: number): boolean;
    static makeSaveContents(): any;
    static extractSaveContents(data: any): void;
    static save(slot: number, gameTime?: Game_Time): void;
    static load(slot: number): Game_Time | null;
    static addTimer(gameTime: Game_Time, action: { type: string, params: any[] }): number;
    static remTimer(id: number): void;
    static addActorState(actorId: number, stateId: number, gameTime: Game_Time): void;
    static update(): void;
    static updateMain(): void;
    static updateVariables(): void;
    static updateSwitches(): void;
    static updateTimers(): void;
    static updateActorStates(): void;

    static readonly months: number[];
    static readonly window: Window_GameTime | null;
    static readonly frameDuration: number;
    static readonly DAY_PERIODS: { name: string, startHour: number, endHour: number }[];

    static readonly MORNING: number;
    static readonly DAY: number;
    static readonly EVENING: number;
    static readonly NIGHT: number;
    static readonly MONDAY: number;
    static readonly TUESDAY: number;
    static readonly WEDNESDAY: number;
    static readonly THURSDAY: number;
    static readonly FRIDAY: number;
    static readonly SATURDAY: number;
    static readonly SUNDAY: number;
    static readonly JANUARY: number;
    static readonly FEBRUARY: number;
    static readonly MARCH: number;
    static readonly APRIL: number;
    static readonly MAY: number;
    static readonly JUNE: number;
    static readonly JULY: number;
    static readonly AUGUST: number;
    static readonly SEPTEMBER: number;
    static readonly OCTOBER: number;
    static readonly NOVEMBER: number;
    static readonly DECEMBER: number;
    static readonly WINTER: number;
    static readonly SPRING: number;
    static readonly SUMMER: number;
    static readonly AUTUMN: number;

    static Format: typeof Game_Time_Format;
}

declare class Game_Time_Format {
    constructor(gameTime?: Game_Time);
    initialize(gameTime?: Game_Time): void;
    get(string: string): string;
    getSeconds(short?: boolean): string | number;
    getMinutes(short?: boolean): string | number;
    getHours(short?: boolean, ampm?: boolean): string | number;
    getDay(short?: boolean): string | number;
    getDayWeekName(): string;
    getDayWeekShortName(): string;
    getDayPeriodName(): string;
    getMonth(short?: boolean): string | number;
    getMonthName(): string;
    getYear(short?: boolean): number;
    getBlink(): string;
    getAmPm(lowerCase?: boolean): string;
    getSeasonName(): string;
}

declare class Window_GameTime extends Window_Base {
    constructor(rect: Rectangle, options: any, gameTime?: Game_Time);
    initialize(rect: Rectangle, options: any, gameTime?: Game_Time): void;
    onChangeLocale(prevLocale: string, locale: string): void;
    getBlink(): string;
    getContentText(content: { text: string, x: string | number, y: string | number, align?: string }): string;
    drawAll(): void;
    drawContent(content: any, y: number, lineHeight: number): void;
    refresh(): void;
    needsUpdateBlink(): boolean;
}

declare interface Scene_Map {
    createGameTimeWindow(options?: any): void;
    gameTimeWindowRect(options?: any): Rectangle;
    isGameTimeUpdated(): boolean;
    updateGameTime(): void;
    updateGameTimeWindowVisibility(): void;
    updateGameTimeHotkeys(): void;
    _gameTimeWindow: Window_GameTime;
}

declare interface DataManager {
    createGameObjects(): void;
    makeSaveContents(): any;
    extractSaveContents(contents: any): void;
}