declare const scriptUrls: string[];
declare const effekseerWasmUrl: string;

declare class Main {
    xhrSucceeded: boolean;
    loadCount: number;
    error: Error | null;
    numScripts: number;

    constructor();

    run(): void;

    showLoadingSpinner(): void;

    eraseLoadingSpinner(): void;

    testXhr(): void;

    hookNwjsClose(): void;

    loadMainScripts(): void;

    onScriptLoad(): void;

    onScriptError(e: Event): void;

    printError(name: string, message: string): void;

    makeErrorHtml(name: string, message: string): string;

    onWindowLoad(): void;

    onWindowError(event: ErrorEvent): void;

    isPathRandomized(): boolean;

    initEffekseerRuntime(): void;

    onEffekseerLoad(): void;

    onEffekseerError(): void;
}

declare const main: Main;

interface Data_Base {
    id: number;
    name: string;
    note: string;
    meta: any;
}

interface Data_ItemBase extends Data_Base {
    description: string;
    iconIndex: number;
    price: number;
}

interface Data_EquipItem extends Data_ItemBase {
    etypeId: number;
    params: number[];
    traits: any[];
}

interface Data_Item extends Data_ItemBase {
    itypeId: number;
    consumable: boolean;
    scope: number;
    occasion: number;
    speed: number;
    successRate: number;
    repeats: number;
    tpGain: number;
    hitType: number;
    animationId: number;
    damage: any;
    effects: any[];
}

interface Data_Skill extends Data_ItemBase {
    stypeId: number;
    mpCost: number;
    tpCost: number;
    scope: number;
    occasion: number;
    speed: number;
    successRate: number;
    repeats: number;
    tpGain: number;
    hitType: number;
    animationId: number;
    damage: any;
    effects: any[];
    message1: string;
    message2: string;
    requiredWtypeId1: number;
    requiredWtypeId2: number;
}

interface Data_Weapon extends Data_EquipItem {
    wtypeId: number;
    animationId: number;
}

interface Data_Armor extends Data_EquipItem {
    atypeId: number;
}

interface Data_Actor extends Data_Base {
    nickname: string;
    classId: number;
    initialLevel: number;
    maxLevel: number;
    characterName: string;
    characterIndex: number;
    faceName: string;
    faceIndex: number;
    battlerName: string;
    equips: number[];
    traits: any[];
    profile: string;
}

interface Data_Class extends Data_Base {
    expParams: number[];
    traits: any[];
    learnings: any[];
    params: number[][];
}

interface Data_Enemy extends Data_Base {
    battlerName: string;
    battlerHue: number;
    params: number[];
    exp: number;
    gold: number;
    dropItems: any[];
    actions: Data_Enemy_Action[];
    traits: any[];
}

interface Data_State extends Data_Base {
    restriction: number;
    priority: number;
    motion: number;
    overlay: number;
    removeAtBattleEnd: boolean;
    removeByRestriction: boolean;
    autoRemovalTiming: number;
    minTurns: number;
    maxTurns: number;
    removeByDamage: boolean;
    chanceByDamage: number;
    removeByWalking: boolean;
    stepsToRemove: number;
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    traits: any[];
    iconIndex: number;
}

interface Data_Troop extends Data_Base {
    members: any[];
    pages: Data_Troop_Page[];
}

interface Data_Troop_Page {
    conditions: any;
    span: number;
    list: EventCommand[];
}

interface Data_Enemy_Action {
    skillId: number;
    conditionType: number;
    conditionParam1: number;
    conditionParam2: number;
    rating: number;
}

interface Data_Tileset extends Data_Base {
    mode: number;
    tilesetNames: string[];
    flags: number[];
    note: string;
}

interface Data_CommonEvent extends Data_Base {
    trigger: number;
    switchId: number;
    list: EventCommand[];
}

interface Data_Map_Encounter {
    troopId: number;
    weight: number;
    regionSet: number[];
}

interface Data_System_Vehicle {
    bgm: any;
    characterName: string;
    characterIndex: number;
    startMapId: number;
    startX: number;
    startY: number;
}

interface Data_Event extends Data_Base {
    x: number;
    y: number;
    pages: Data_Event_Page[];
}

interface Data_Event_Page {
    conditions: any;
    image: any;
    moveType: number;
    moveSpeed: number;
    moveFrequency: number;
    moveRoute: MoveRoute;
    walkAnime: boolean;
    stepAnime: boolean;
    directionFix: boolean;
    through: boolean;
    priorityType: number;
    trigger: number;
    list: EventCommand[];
}

interface EventCommand {
    code: number;
    indent: number;
    parameters: any[];
}

interface MoveRoute {
    repeat: boolean;
    skippable: boolean;
    wait: boolean;
    list: MoveCommand[];
}

interface MoveCommand {
    code: number;
    parameters?: any[];
}

interface Array<T> {
    clone(): T[];
    contains(element: T): boolean;
    equals(array: T[]): boolean;
    remove(element: T): T[];
}

interface Math {
    randomInt(max: number): number;
}

interface Number {
    clamp(min: number, max: number): number;
    mod(n: number): number;
    padZero(length: number): string;
}

interface String {
    format(...args: any[]): string;
    padZero(length: number): string;
    contains(string: string): boolean;
}

declare class Utils {
    static readonly RPGMAKER_NAME: string;
    static readonly RPGMAKER_VERSION: string;
    static checkRMVersion(version: string): boolean;
    static isOptionValid(name: string): boolean;
    static isNwjs(): boolean;
    static isMobileDevice(): boolean;
    static isMobileSafari(): boolean;
    static isAndroidChrome(): boolean;
    static isLocal(): boolean;
    static canUseWebGL(): boolean;
    static canUseWebAudioAPI(): boolean;
    static canUseCssFontLoading(): boolean;
    static canUseIndexedDB(): boolean;
    static canPlayOgg(): boolean;
    static canPlayWebm(): boolean;
    static encodeURI(str: string): string;
    static extractFileName(filename: string): string;
    static escapeHtml(str: string): string;
    static containsArabic(str: string): boolean;
    static setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void;
    static hasEncryptedImages(): boolean;
    static hasEncryptedAudio(): boolean;
    static decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer;
}

declare class Graphics {
    static frameCount: number;
    static boxWidth: number;
    static boxHeight: number;
    static width: number;
    static height: number;
    static defaultScale: number;
    static readonly app: any;
    static readonly effekseer: any;

    static initialize(): boolean;
    static setTickHandler(handler: (deltaTime: number) => void): void;
    static startGameLoop(): void;
    static stopGameLoop(): void;
    static setStage(stage: Stage): void;
    static startLoading(): void;
    static endLoading(): boolean;
    static printError(name: string, message: string, error?: Error): void;
    static showRetryButton(retry: () => void): void;
    static eraseError(): void;
    static pageToCanvasX(x: number): number;
    static pageToCanvasY(y: number): number;
    static isInsideCanvas(x: number, y: number): boolean;
    static showScreen(): void;
    static hideScreen(): void;
    static resize(width: number, height: number): void;
}

declare namespace Graphics {
    class FPSCounter {
        initialize(): void;
        startTick(): void;
        endTick(): void;
        switchMode(): void;
        fps: number;
        duration: number;
    }
}

declare class Point extends PIXI.Point {
    constructor(x?: number, y?: number);
    initialize(x?: number, y?: number): void;
}

declare class Rectangle extends PIXI.Rectangle {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(x?: number, y?: number, width?: number, height?: number): void;
}

declare class Bitmap {
    url: string;
    readonly baseTexture: PIXI.BaseTexture;
    readonly image: HTMLImageElement;
    readonly canvas: HTMLCanvasElement;
    readonly context: CanvasRenderingContext2D;
    readonly width: number;
    readonly height: number;
    readonly rect: Rectangle;
    smooth: boolean;
    paintOpacity: number;
    fontFace: string;
    fontSize: number;
    fontBold: boolean;
    fontItalic: boolean;
    textColor: string;
    outlineColor: string;
    outlineWidth: number;

    constructor(width: number, height: number);
    initialize(width: number, height: number): void;
    static load(url: string): Bitmap;
    static snap(stage: Stage): Bitmap;

    isReady(): boolean;
    isError(): boolean;
    destroy(): void;
    resize(width: number, height: number): void;
    blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;
    getPixel(x: number, y: number): string;
    getAlphaPixel(x: number, y: number): number;
    clearRect(x: number, y: number, width: number, height: number): void;
    clear(): void;
    fillRect(x: number, y: number, width: number, height: number, color: string): void;
    fillAll(color: string): void;
    strokeRect(x: number, y: number, width: number, height: number, color: string): void;
    gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;
    drawCircle(x: number, y: number, radius: number, color: string): void;
    drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void;
    measureTextWidth(text: string): number;
    addLoadListener(listener: (bitmap: Bitmap) => void): void;
    retry(): void;
}

declare class Sprite extends PIXI.Sprite {
    bitmap: Bitmap;
    width: number;
    height: number;
    opacity: number;
    blendMode: PIXI.BLEND_MODES;

    constructor(bitmap?: Bitmap);
    initialize(...args: any[]): void;
    destroy(options?: any): void;
    update(): void;
    hide(): void;
    show(): void;
    updateVisibility(): void;
    move(x: number, y: number): void;
    setFrame(x: number, y: number, width: number, height: number): void;
    setHue(hue: number): void;
    getBlendColor(): number[];
    setBlendColor(color: number[]): void;
    getColorTone(): number[];
    setColorTone(tone: number[]): void;
}

declare class Sprite_Base extends Sprite {
    constructor();
    update(): void;
    hide(): void;
    show(): void;
    updateVisibility(): void;
    isAnimationPlaying(): boolean;
}

declare class Tilemap extends PIXI.Container {
    width: number;
    height: number;
    tileWidth: number;
    tileHeight: number;
    origin: Point;
    flags: number[];
    animationCount: number;
    horizontalWrap: boolean;
    verticalWrap: boolean;

    constructor();
    initialize(): void;
    destroy(options?: any): void;
    setData(width: number, height: number, data: number[]): void;
    isReady(): boolean;
    update(): void;
    setBitmaps(bitmaps: Bitmap[]): void;
    refresh(): void;
    updateTransform(): void;

    static TILE_ID_B: number;
    static TILE_ID_C: number;
    static TILE_ID_D: number;
    static TILE_ID_E: number;
    static TILE_ID_A5: number;
    static TILE_ID_A1: number;
    static TILE_ID_A2: number;
    static TILE_ID_A3: number;
    static TILE_ID_A4: number;
    static TILE_ID_MAX: number;
    static FLOOR_AUTOTILE_TABLE: number[][][];
    static WALL_AUTOTILE_TABLE: number[][][];
    static WATERFALL_AUTOTILE_TABLE: number[][][];

    static isVisibleTile(tileId: number): boolean;
    static isAutotile(tileId: number): boolean;
    static getAutotileKind(tileId: number): number;
    static getAutotileShape(tileId: number): number;
    static makeAutotileId(kind: number, shape: number): number;
    static isSameKindTile(tileID1: number, tileID2: number): boolean;
    static isTileA1(tileId: number): boolean;
    static isTileA2(tileId: number): boolean;
    static isTileA3(tileId: number): boolean;
    static isTileA4(tileId: number): boolean;
    static isTileA5(tileId: number): boolean;
    static isWaterTile(tileId: number): boolean;
    static isWaterfallTile(tileId: number): boolean;
    static isGroundTile(tileId: number): boolean;
    static isShadowingTile(tileId: number): boolean;
    static isRoofTile(tileId: number): boolean;
    static isWallTopTile(tileId: number): boolean;
    static isWallSideTile(tileId: number): boolean;
    static isWallTile(tileId: number): boolean;
    static isFloorTypeAutotile(tileId: number): boolean;
    static isWallTypeAutotile(tileId: number): boolean;
    static isWaterfallTypeAutotile(tileId: number): boolean;
}

declare namespace Tilemap {
    class Layer extends PIXI.Container {
        static MAX_GL_TEXTURES: number;
        static VERTEX_STRIDE: number;
        static MAX_SIZE: number;

        constructor();
        initialize(): void;
        destroy(): void;
        setBitmaps(bitmaps: Bitmap[]): void;
        clear(): void;
        size(): number;
        addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void;
        render(renderer: PIXI.Renderer): void;
        isReady(): boolean;
    }

    class CombinedLayer extends PIXI.Container {
        constructor();
        initialize(): void;
        destroy(options?: any): void;
        setBitmaps(bitmaps: Bitmap[]): void;
        clear(): void;
        size(): number;
        addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void;
        isReady(): boolean;
    }

    class Renderer extends PIXI.ObjectRenderer {
        constructor(renderer: PIXI.Renderer);
        initialize(renderer: PIXI.Renderer): void;
        destroy(): void;
        getShader(): PIXI.Shader;
        contextChange(): void;
        updateTextures(renderer: PIXI.Renderer, images: any[]): void;
        bindTextures(renderer: PIXI.Renderer): void;
    }
}

declare class TilingSprite extends PIXI.TilingSprite {
    bitmap: Bitmap;
    opacity: number;
    origin: Point;

    constructor(bitmap?: Bitmap);
    initialize(...args: any[]): void;
    destroy(options?: any): void;
    update(): void;
    move(x: number, y: number, width: number, height: number): void;
    setFrame(x: number, y: number, width: number, height: number): void;
    updateTransform(): void;
}

declare class ScreenSprite extends PIXI.Container {
    opacity: number;

    constructor();
    initialize(): void;
    destroy(options?: any): void;
    setBlack(): void;
    setWhite(): void;
    setColor(r: number, g: number, b: number): void;
}

declare class RMMZWindow extends PIXI.Container {
    windowskin: Bitmap;
    contents: Bitmap;
    contentsBack: Bitmap;
    width: number;
    height: number;
    padding: number;
    margin: number;
    opacity: number;
    backOpacity: number;
    contentsOpacity: number;
    openness: number;
    readonly innerWidth: number;
    readonly innerHeight: number;
    readonly innerRect: Rectangle;
    origin: Point;
    active: boolean;
    frameVisible: boolean;
    cursorVisible: boolean;
    downArrowVisible: boolean;
    upArrowVisible: boolean;
    pause: boolean;

    constructor();
    initialize(...args: any[]): void;
    destroy(options?: any): void;
    update(): void;
    move(x: number, y: number, width: number, height: number): void;
    isOpen(): boolean;
    isClosed(): boolean;
    setCursorRect(x: number, y: number, width: number, height: number): void;
    moveCursorBy(x: number, y: number): void;
    moveInnerChildrenBy(x: number, y: number): void;
    setTone(r: number, g: number, b: number): void;
    addChildToBack(child: any): any;
    addInnerChild(child: any): any;
    updateTransform(): void;
    drawShape(graphics: PIXI.Graphics): void;
}

declare class WindowLayer extends PIXI.Container {
    constructor();
    initialize(): void;
    update(): void;
    render(renderer: PIXI.Renderer): void;
}

declare class Weather extends PIXI.Container {
    type: string;
    power: number;
    origin: Point;

    constructor();
    initialize(): void;
    destroy(options?: any): void;
    update(): void;
}

declare class ColorFilter extends PIXI.Filter {
    constructor();
    initialize(): void;
    setHue(hue: number): void;
    setColorTone(tone: number[]): void;
    setBlendColor(color: number[]): void;
    setBrightness(brightness: number): void;
}

declare class Stage extends PIXI.Container {
    constructor();
    initialize(): void;
    destroy(options?: any): void;
}

declare class WebAudio {
    url: string;
    volume: number;
    pitch: number;
    pan: number;

    constructor(url: string);
    initialize(url: string): void;
    static initialize(): boolean;
    static setMasterVolume(value: number): void;

    clear(): void;
    isReady(): boolean;
    isError(): boolean;
    isPlaying(): boolean;
    play(loop: boolean, offset: number): void;
    stop(): void;
    destroy(): void;
    fadeIn(duration: number): void;
    fadeOut(duration: number): void;
    seek(): number;
    addLoadListener(listener: () => void): void;
    addStopListener(listener: () => void): void;
    retry(): void;
}

declare class Video {
    static initialize(width: number, height: number): void;
    static resize(width: number, height: number): void;
    static play(src: string): void;
    static isPlaying(): boolean;
    static setVolume(volume: number): void;
}

declare class Input {
    static keyRepeatWait: number;
    static keyRepeatInterval: number;
    static keyMapper: { [key: number]: string };
    static gamepadMapper: { [key: number]: string };
    static readonly dir4: number;
    static readonly dir8: number;
    static readonly date: number;

    static initialize(): void;
    static clear(): void;
    static update(): void;
    static isPressed(keyName: string): boolean;
    static isTriggered(keyName: string): boolean;
    static isRepeated(keyName: string): boolean;
    static isLongPressed(keyName: string): boolean;
    static virtualClick(buttonName: string): void;
}

declare class TouchInput {
    static keyRepeatWait: number;
    static keyRepeatInterval: number;
    static moveThreshold: number;
    static readonly wheelX: number;
    static readonly wheelY: number;
    static readonly x: number;
    static readonly y: number;
    static readonly date: number;

    static initialize(): void;
    static clear(): void;
    static update(): void;
    static isClicked(): boolean;
    static isPressed(): boolean;
    static isTriggered(): boolean;
    static isRepeated(): boolean;
    static isLongPressed(): boolean;
    static isCancelled(): boolean;
    static isMoved(): boolean;
    static isHovered(): boolean;
    static isReleased(): boolean;
}

declare class JsonEx {
    static maxDepth: number;
    static stringify(object: any): string;
    static parse(json: string): any;
    static makeDeepCopy(object: any): any;
}

declare var $dataActors: any[];
declare var $dataClasses: any[];
declare var $dataSkills: any[];
declare var $dataItems: any[];
declare var $dataWeapons: any[];
declare var $dataArmors: any[];
declare var $dataEnemies: any[];
declare var $dataTroops: any[];
declare var $dataStates: any[];
declare var $dataAnimations: any[];
declare var $dataTilesets: any[];
declare var $dataCommonEvents: any[];
declare var $dataSystem: any;
declare var $dataMapInfos: any[];
declare var $dataMap: any;
declare var $gameTemp: Game_Temp;
declare var $gameSystem: Game_System;
declare var $gameScreen: Game_Screen;
declare var $gameTimer: Game_Timer;
declare var $gameMessage: Game_Message;
declare var $gameSwitches: Game_Switches;
declare var $gameVariables: Game_Variables;
declare var $gameSelfSwitches: Game_SelfSwitches;
declare var $gameActors: Game_Actors;
declare var $gameParty: Game_Party;
declare var $gameTroop: Game_Troop;
declare var $gameMap: Game_Map;
declare var $gamePlayer: Game_Player;
declare var $testEvent: any;

interface AudioFile {
    name: string;
    volume?: number;
    pitch?: number;
    pan?: number;
    pos?: number;
}

interface SavefileInfo {
    title: string;
    characters: any[][];
    faces: any[][];
    playtime: string;
    timestamp: number;
}

interface DatabaseFile {
    name: string;
    src: string;
}

declare class DataManager {
    static _globalInfo: SavefileInfo[];
    static _errors: any[];
    static _databaseFiles: DatabaseFile[];

    static loadGlobalInfo(): void;
    static removeInvalidGlobalInfo(): void;
    static saveGlobalInfo(): void;
    static isGlobalInfoLoaded(): boolean;
    static loadDatabase(): void;
    static loadDataFile(name: string, src: string): void;
    static onXhrLoad(xhr: XMLHttpRequest, name: string, src: string, url: string): void;
    static onXhrError(name: string, src: string, url: string): void;
    static isDatabaseLoaded(): boolean;
    static loadMapData(mapId: number): void;
    static makeEmptyMap(): void;
    static isMapLoaded(): boolean;
    static onLoad(object: any): void;
    static isMapObject(object: any): boolean;
    static extractArrayMetadata(array: any[]): void;
    static extractMetadata(data: any): void;
    static checkError(): void;
    static isBattleTest(): boolean;
    static isEventTest(): boolean;
    static isTitleSkip(): boolean;
    static isSkill(item: any): boolean;
    static isItem(item: any): boolean;
    static isWeapon(item: any): boolean;
    static isArmor(item: any): boolean;
    static createGameObjects(): void;
    static setupNewGame(): void;
    static setupBattleTest(): void;
    static setupEventTest(): void;
    static isAnySavefileExists(): boolean;
    static latestSavefileId(): number;
    static earliestSavefileId(): number;
    static emptySavefileId(): number;
    static loadAllSavefileImages(): void;
    static loadSavefileImages(info: SavefileInfo): void;
    static maxSavefiles(): number;
    static savefileInfo(savefileId: number): SavefileInfo | null;
    static savefileExists(savefileId: number): boolean;
    static saveGame(savefileId: number): Promise<number>;
    static loadGame(savefileId: number): Promise<number>;
    static makeSavename(savefileId: number): string;
    static selectSavefileForNewGame(): void;
    static makeSavefileInfo(): SavefileInfo;
    static makeSaveContents(): any;
    static extractSaveContents(contents: any): void;
    static correctDataErrors(): void;
}

declare class ConfigManager {
    static alwaysDash: boolean;
    static commandRemember: boolean;
    static touchUI: boolean;
    static _isLoaded: boolean;

    static bgmVolume: number;
    static bgsVolume: number;
    static meVolume: number;
    static seVolume: number;

    static load(): void;
    static save(): void;
    static isLoaded(): boolean;
    static makeData(): any;
    static applyData(config: any): void;
    static readFlag(config: any, name: string, defaultValue: boolean): boolean;
    static readVolume(config: any, name: string): number;
}

// @ts-ignore
declare var StorageManager: {
    _forageKeys: string[];
    _forageKeysUpdated: boolean;

    isLocalMode(): boolean;
    saveObject(saveName: string, object: any): Promise<void>;
    loadObject(saveName: string): Promise<any>;
    objectToJson(object: any): Promise<string>;
    jsonToObject(json: string): Promise<any>;
    jsonToZip(json: string): Promise<string>;
    zipToJson(zip: string): Promise<string>;
    saveZip(saveName: string, zip: string): Promise<void>;
    loadZip(saveName: string): Promise<string>;
    exists(saveName: string): boolean;
    remove(saveName: string): void;
    saveToLocalFile(saveName: string, zip: string): Promise<void>;
    loadFromLocalFile(saveName: string): Promise<string>;
    localFileExists(saveName: string): boolean;
    removeLocalFile(saveName: string): void;
    saveToForage(saveName: string, zip: string): Promise<void>;
    loadFromForage(saveName: string): Promise<string>;
    forageExists(saveName: string): boolean;
    removeForage(saveName: string): Promise<void>;
    updateForageKeys(): Promise<number>;
    forageKeysUpdated(): boolean;
    fsMkdir(path: string): void;
    fsRename(oldPath: string, newPath: string): void;
    fsUnlink(path: string): void;
    fsReadFile(path: string): string | null;
    fsWriteFile(path: string, data: string): void;
    fileDirectoryPath(): string;
    filePath(saveName: string): string;
    forageKey(saveName: string): string;
    forageTestKey(): string;
};

declare class FontManager {
    static _urls: { [key: string]: string };
    static _states: { [key: string]: string };

    static load(family: string, filename: string): void;
    static isReady(): boolean;
    static startLoading(family: string, url: string): void;
    static throwLoadError(family: string): void;
    static makeUrl(filename: string): string;
}

declare class ImageManager {
    static standardIconWidth: number;
    static standardIconHeight: number;
    static standardFaceWidth: number;
    static standardFaceHeight: number;
    static _cache: { [url: string]: Bitmap };
    static _system: { [url: string]: Bitmap };
    static _emptyBitmap: Bitmap;

    static readonly iconWidth: number;
    static readonly iconHeight: number;
    static readonly faceWidth: number;
    static readonly faceHeight: number;

    static getIconSize(): number;
    static getFaceSize(): number;
    static loadAnimation(filename: string): Bitmap;
    static loadBattleback1(filename: string): Bitmap;
    static loadBattleback2(filename: string): Bitmap;
    static loadEnemy(filename: string): Bitmap;
    static loadCharacter(filename: string): Bitmap;
    static loadFace(filename: string): Bitmap;
    static loadParallax(filename: string): Bitmap;
    static loadPicture(filename: string): Bitmap;
    static loadSvActor(filename: string): Bitmap;
    static loadSvEnemy(filename: string): Bitmap;
    static loadSystem(filename: string): Bitmap;
    static loadTileset(filename: string): Bitmap;
    static loadTitle1(filename: string): Bitmap;
    static loadTitle2(filename: string): Bitmap;
    static loadBitmap(folder: string, filename: string): Bitmap;
    static loadBitmapFromUrl(url: string): Bitmap;
    static clear(): void;
    static isReady(): boolean;
    static throwLoadError(bitmap: Bitmap): void;
    static isObjectCharacter(filename: string): boolean;
    static isBigCharacter(filename: string): boolean;
    static isZeroParallax(filename: string): boolean;
}

declare class EffectManager {
    static _cache: { [url: string]: any };
    static _errorUrls: string[];

    static load(filename: string): any;
    static startLoading(url: string): any;
    static clear(): void;
    static onLoad(url: string): void;
    static onError(url: string): void;
    static makeUrl(filename: string): string;
    static checkErrors(): void;
    static throwLoadError(url: string): void;
    static isReady(): boolean;
}

declare class AudioManager {
    static _bgmVolume: number;
    static _bgsVolume: number;
    static _meVolume: number;
    static _seVolume: number;
    static _currentBgm: AudioFile | null;
    static _currentBgs: AudioFile | null;
    static _bgmBuffer: WebAudio | null;
    static _bgsBuffer: WebAudio | null;
    static _meBuffer: WebAudio | null;
    static _seBuffers: WebAudio[];
    static _staticBuffers: WebAudio[];
    static _replayFadeTime: number;
    static _path: string;

    static bgmVolume: number;
    static bgsVolume: number;
    static meVolume: number;
    static seVolume: number;

    static playBgm(bgm: AudioFile, pos?: number): void;
    static replayBgm(bgm: AudioFile): void;
    static isCurrentBgm(bgm: AudioFile): boolean;
    static updateBgmParameters(bgm: AudioFile): void;
    static updateCurrentBgm(bgm: AudioFile, pos?: number): void;
    static stopBgm(): void;
    static fadeOutBgm(duration: number): void;
    static fadeInBgm(duration: number): void;
    static playBgs(bgs: AudioFile, pos?: number): void;
    static replayBgs(bgs: AudioFile): void;
    static isCurrentBgs(bgs: AudioFile): boolean;
    static updateBgsParameters(bgs: AudioFile): void;
    static updateCurrentBgs(bgs: AudioFile, pos?: number): void;
    static stopBgs(): void;
    static fadeOutBgs(duration: number): void;
    static fadeInBgs(duration: number): void;
    static playMe(me: AudioFile): void;
    static updateMeParameters(me: AudioFile): void;
    static fadeOutMe(duration: number): void;
    static stopMe(): void;
    static playSe(se: AudioFile): void;
    static updateSeParameters(buffer: WebAudio, se: AudioFile): void;
    static cleanupSe(): void;
    static stopSe(): void;
    static playStaticSe(se: AudioFile): void;
    static loadStaticSe(se: AudioFile): void;
    static isStaticSe(se: AudioFile): boolean;
    static stopAll(): void;
    static saveBgm(): AudioFile;
    static saveBgs(): AudioFile;
    static makeEmptyAudioObject(): AudioFile;
    static createBuffer(folder: string, name: string): WebAudio;
    static updateBufferParameters(buffer: WebAudio, configVolume: number, audio: AudioFile): void;
    static audioFileExt(): string;
    static checkErrors(): void;
    static throwLoadError(webAudio: WebAudio): void;
}

declare class SoundManager {
    static preloadImportantSounds(): void;
    static loadSystemSound(n: number): void;
    static playSystemSound(n: number): void;
    static playCursor(): void;
    static playOk(): void;
    static playCancel(): void;
    static playBuzzer(): void;
    static playEquip(): void;
    static playSave(): void;
    static playLoad(): void;
    static playBattleStart(): void;
    static playEscape(): void;
    static playEnemyAttack(): void;
    static playEnemyDamage(): void;
    static playEnemyCollapse(): void;
    static playBossCollapse1(): void;
    static playBossCollapse2(): void;
    static playActorDamage(): void;
    static playActorCollapse(): void;
    static playRecovery(): void;
    static playMiss(): void;
    static playEvasion(): void;
    static playMagicEvasion(): void;
    static playReflection(): void;
    static playShop(): void;
    static playUseItem(): void;
    static playUseSkill(): void;
}

declare class TextManager {
    static basic(basicId: number): string;
    static param(paramId: number): string;
    static command(commandId: number): string;
    static message(messageId: string): string;
    static getter(method: string, param: any): { get: () => string; configurable: boolean };

    static readonly currencyUnit: string;
    static readonly level: string;
    static readonly levelA: string;
    static readonly hp: string;
    static readonly hpA: string;
    static readonly mp: string;
    static readonly mpA: string;
    static readonly tp: string;
    static readonly tpA: string;
    static readonly exp: string;
    static readonly expA: string;
    static readonly fight: string;
    static readonly escape: string;
    static readonly attack: string;
    static readonly guard: string;
    static readonly item: string;
    static readonly skill: string;
    static readonly equip: string;
    static readonly status: string;
    static readonly formation: string;
    static readonly save: string;
    static readonly gameEnd: string;
    static readonly options: string;
    static readonly weapon: string;
    static readonly armor: string;
    static readonly keyItem: string;
    static readonly equip2: string;
    static readonly optimize: string;
    static readonly clear: string;
    static readonly newGame: string;
    static readonly continue_: string;
    static readonly toTitle: string;
    static readonly cancel: string;
    static readonly buy: string;
    static readonly sell: string;
    static readonly alwaysDash: string;
    static readonly commandRemember: string;
    static readonly touchUI: string;
    static readonly bgmVolume: string;
    static readonly bgsVolume: string;
    static readonly meVolume: string;
    static readonly seVolume: string;
    static readonly possession: string;
    static readonly expTotal: string;
    static readonly expNext: string;
    static readonly saveMessage: string;
    static readonly loadMessage: string;
    static readonly file: string;
    static readonly autosave: string;
    static readonly partyName: string;
    static readonly emerge: string;
    static readonly preemptive: string;
    static readonly surprise: string;
    static readonly escapeStart: string;
    static readonly escapeFailure: string;
    static readonly victory: string;
    static readonly defeat: string;
    static readonly obtainExp: string;
    static readonly obtainGold: string;
    static readonly obtainItem: string;
    static readonly levelUp: string;
    static readonly obtainSkill: string;
    static readonly useItem: string;
    static readonly criticalToEnemy: string;
    static readonly criticalToActor: string;
    static readonly actorDamage: string;
    static readonly actorRecovery: string;
    static readonly actorGain: string;
    static readonly actorLoss: string;
    static readonly actorDrain: string;
    static readonly actorNoDamage: string;
    static readonly actorNoHit: string;
    static readonly enemyDamage: string;
    static readonly enemyRecovery: string;
    static readonly enemyGain: string;
    static readonly enemyLoss: string;
    static readonly enemyDrain: string;
    static readonly enemyNoDamage: string;
    static readonly enemyNoHit: string;
    static readonly evasion: string;
    static readonly magicEvasion: string;
    static readonly magicReflection: string;
    static readonly counterAttack: string;
    static readonly substitute: string;
    static readonly buffAdd: string;
    static readonly debuffAdd: string;
    static readonly buffRemove: string;
    static readonly actionFailure: string;
}

declare class ColorManager {
    static _windowskin: Bitmap;

    static loadWindowskin(): void;
    static textColor(n: number): string;
    static normalColor(): string;
    static systemColor(): string;
    static crisisColor(): string;
    static deathColor(): string;
    static gaugeBackColor(): string;
    static hpGaugeColor1(): string;
    static hpGaugeColor2(): string;
    static mpGaugeColor1(): string;
    static mpGaugeColor2(): string;
    static mpCostColor(): string;
    static powerUpColor(): string;
    static powerDownColor(): string;
    static ctGaugeColor1(): string;
    static ctGaugeColor2(): string;
    static tpGaugeColor1(): string;
    static tpGaugeColor2(): string;
    static tpCostColor(): string;
    static pendingColor(): string;
    static hpColor(actor: Game_Battler): string;
    static mpColor(actor: Game_Battler): string;
    static tpColor(actor: Game_Battler): string;
    static paramchangeTextColor(change: number): string;
    static damageColor(colorType: number): string;
    static outlineColor(): string;
    static dimColor1(): string;
    static dimColor2(): string;
    static itemBackColor1(): string;
    static itemBackColor2(): string;
}

declare class SceneManager {
    static _scene: Scene_Base | null;
    static _nextScene: Scene_Base | null;
    static _stack: (new () => Scene_Base)[];
    static _exiting: boolean;
    static _previousScene: Scene_Base | null;
    static _previousClass: new () => Scene_Base;
    static _backgroundBitmap: Bitmap | null;
    static _smoothDeltaTime: number;
    static _elapsedTime: number;

    static run(sceneClass: new () => Scene_Base): void;
    static initialize(): void;
    static checkBrowser(): void;
    static checkPluginErrors(): void;
    static initGraphics(): void;
    static initAudio(): void;
    static initVideo(): void;
    static initInput(): void;
    static setupEventHandlers(): void;
    static update(deltaTime: number): void;
    static determineRepeatNumber(deltaTime: number): number;
    static terminate(): void;
    static onError(event: ErrorEvent | any): void;
    static onReject(event: PromiseRejectionEvent): void;
    static onUnload(): void;
    static onKeyDown(event: KeyboardEvent): void;
    static reloadGame(): void;
    static showDevTools(): void;
    static catchException(e: any): void;
    static catchNormalError(e: Error): void;
    static catchLoadError(e: any[]): void;
    static catchUnknownError(e: any): void;
    static updateMain(): void;
    static updateFrameCount(): void;
    static updateInputData(): void;
    static updateEffekseer(): void;
    static changeScene(): void;
    static updateScene(): void;
    static isGameActive(): boolean;
    static onSceneTerminate(): void;
    static onSceneCreate(): void;
    static onBeforeSceneStart(): void;
    static onSceneStart(): void;
    static isSceneChanging(): boolean;
    static isCurrentSceneBusy(): boolean;
    static isNextScene(sceneClass: new () => Scene_Base): boolean;
    static isPreviousScene(sceneClass: new () => Scene_Base): boolean;
    static goto(sceneClass: (new () => Scene_Base) | null): void;
    static push(sceneClass: new () => Scene_Base): void;
    static pop(): void;
    static exit(): void;
    static clearStack(): void;
    static stop(): void;
    static prepareNextScene(...args: any[]): void;
    static snap(): Bitmap;
    static snapForBackground(): void;
    static backgroundBitmap(): Bitmap | null;
    static resume(): void;
}

declare class BattleManager {
    static _phase: string;
    static _inputting: boolean;
    static _canEscape: boolean;
    static _canLose: boolean;
    static _battleTest: boolean;
    static _eventCallback: ((result: number) => void) | null;
    static _preemptive: boolean;
    static _surprise: boolean;
    static _currentActor: Game_Actor | null;
    static _actionForcedBattler: Game_Battler | null;
    static _mapBgm: AudioFile | null;
    static _mapBgs: AudioFile | null;
    static _actionBattlers: Game_Battler[];
    static _subject: Game_Battler | null;
    static _action: Game_Action | null;
    static _targets: Game_Battler[];
    static _logWindow: Window_BattleLog | null;
    static _spriteset: Spriteset_Battle | null;
    static _escapeRatio: number;
    static _escaped: boolean;
    static _rewards: { gold: number; exp: number; items: any[] };
    static _tpbNeedsPartyCommand: boolean;

    static setup(troopId: number, canEscape: boolean, canLose: boolean): void;
    static initMembers(): void;
    static isTpb(): boolean;
    static isActiveTpb(): boolean;
    static isBattleTest(): boolean;
    static setBattleTest(battleTest: boolean): void;
    static setEventCallback(callback: (result: number) => void): void;
    static setLogWindow(logWindow: Window_BattleLog): void;
    static setSpriteset(spriteset: Spriteset_Battle): void;
    static onEncounter(): void;
    static ratePreemptive(): number;
    static rateSurprise(): number;
    static saveBgmAndBgs(): void;
    static playBattleBgm(): void;
    static playVictoryMe(): void;
    static playDefeatMe(): void;
    static replayBgmAndBgs(): void;
    static makeEscapeRatio(): void;
    static update(timeActive: boolean): void;
    static updatePhase(timeActive: boolean): void;
    static updateEvent(): boolean;
    static updateEventMain(): boolean;
    static isBusy(): boolean;
    static updateTpbInput(): void;
    static checkTpbInputClose(): void;
    static checkTpbInputOpen(): void;
    static isPartyTpbInputtable(): boolean;
    static needsActorInputCancel(): boolean;
    static isTpbMainPhase(): boolean;
    static isInputting(): boolean;
    static isInTurn(): boolean;
    static isTurnEnd(): boolean;
    static isAborting(): boolean;
    static isBattleEnd(): boolean;
    static canEscape(): boolean;
    static canLose(): boolean;
    static isEscaped(): boolean;
    static actor(): Game_Actor | null;
    static startBattle(): void;
    static displayStartMessages(): void;
    static startInput(): void;
    static inputtingAction(): Game_Action | null;
    static selectNextCommand(): void;
    static selectNextActor(): void;
    static selectPreviousCommand(): void;
    static selectPreviousActor(): void;
    static changeCurrentActor(forward: boolean): void;
    static startActorInput(): void;
    static finishActorInput(): void;
    static cancelActorInput(): void;
    static updateStart(): void;
    static startTurn(): void;
    static updateTurn(timeActive: boolean): void;
    static updateTpb(): void;
    static updateAllTpbBattlers(): void;
    static updateTpbBattler(battler: Game_Battler): void;
    static checkTpbTurnEnd(): void;
    static processTurn(): void;
    static endBattlerActions(battler: Game_Battler): void;
    static endTurn(): void;
    static updateTurnEnd(): void;
    static endAllBattlersTurn(): void;
    static displayBattlerStatus(battler: Game_Battler, current: boolean): void;
    static getNextSubject(): Game_Battler | null;
    static allBattleMembers(): Game_Battler[];
    static makeActionOrders(): void;
    static startAction(): void;
    static updateAction(): void;
    static endAction(): void;
    static invokeAction(subject: Game_Battler, target: Game_Battler): void;
    static invokeNormalAction(subject: Game_Battler, target: Game_Battler): void;
    static invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void;
    static invokeMagicReflection(subject: Game_Battler, target: Game_Battler): void;
    static applySubstitute(target: Game_Battler): Game_Battler;
    static checkSubstitute(target: Game_Battler): boolean;
    static isActionForced(): boolean;
    static forceAction(battler: Game_Battler): void;
    static processForcedAction(): void;
    static abort(): void;
    static checkBattleEnd(): boolean;
    static checkAbort(): boolean;
    static processVictory(): void;
    static processEscape(): boolean;
    static onEscapeSuccess(): void;
    static onEscapeFailure(): void;
    static processPartyEscape(): void;
    static processAbort(): void;
    static processDefeat(): void;
    static endBattle(result: number): void;
    static updateBattleEnd(): void;
    static makeRewards(): void;
    static displayVictoryMessage(): void;
    static displayDefeatMessage(): void;
    static displayEscapeSuccessMessage(): void;
    static displayEscapeFailureMessage(): void;
    static displayRewards(): void;
    static displayExp(): void;
    static displayGold(): void;
    static displayDropItems(): void;
    static gainRewards(): void;
    static gainExp(): void;
    static gainGold(): void;
    static gainDropItems(): void;
}

declare class PluginManager {
    static _scripts: string[];
    static _errorUrls: string[];
    static _parameters: { [key: string]: any };
    static _commands: { [key: string]: Function };

    static setup(plugins: any[]): void;
    static parameters(name: string): any;
    static setParameters(name: string, parameters: any): void;
    static loadScript(filename: string): void;
    static onError(e: Event | any): void;
    static makeUrl(filename: string): string;
    static checkErrors(): void;
    static throwLoadError(url: string): void;
    static registerCommand(pluginName: string, commandName: string, func: Function): void;
    static callCommand(self: any, pluginName: string, commandName: string, args: any): void;
}

declare class Game_Temp {
    protected _isPlaytest: boolean;
    protected _destinationX: number | null;
    protected _destinationY: number | null;
    protected _touchTarget: any | null;
    protected _touchState: string;
    protected _needsBattleRefresh: boolean;
    protected _commonEventQueue: number[];
    protected _animationQueue: any[];
    protected _balloonQueue: any[];
    protected _lastActionData: number[];

    constructor();
    initialize(): void;
    isPlaytest(): boolean;
    setDestination(x: number, y: number): void;
    clearDestination(): void;
    isDestinationValid(): boolean;
    destinationX(): number | null;
    destinationY(): number | null;
    setTouchState(target: any, state: string): void;
    clearTouchState(): void;
    touchTarget(): any;
    touchState(): string;
    requestBattleRefresh(): void;
    clearBattleRefreshRequest(): void;
    isBattleRefreshRequested(): boolean;
    reserveCommonEvent(commonEventId: number): void;
    retrieveCommonEvent(): any;
    clearCommonEventReservation(): void;
    isCommonEventReserved(): boolean;
    requestAnimation(targets: Game_Battler[], animationId: number, mirror?: boolean): void;
    retrieveAnimation(): any;
    requestBalloon(target: Game_Character, balloonId: number): void;
    retrieveBalloon(): any;
    lastActionData(type: number): number;
    setLastActionData(type: number, value: number): void;
    setLastUsedSkillId(skillID: number): void;
    setLastUsedItemId(itemID: number): void;
    setLastSubjectActorId(actorID: number): void;
    setLastSubjectEnemyIndex(enemyIndex: number): void;
    setLastTargetActorId(actorID: number): void;
    setLastTargetEnemyIndex(enemyIndex: number): void;
}

declare class Game_System {
    protected _saveEnabled: boolean;
    protected _menuEnabled: boolean;
    protected _encounterEnabled: boolean;
    protected _formationEnabled: boolean;
    protected _battleCount: number;
    protected _winCount: number;
    protected _escapeCount: number;
    protected _saveCount: number;
    protected _versionId: number;
    protected _savefileId: number;
    protected _framesOnSave: number;
    protected _bgmOnSave: any | null;
    protected _bgsOnSave: any | null;
    protected _windowTone: number[] | null;
    protected _battleBgm: any | null;
    protected _victoryMe: any | null;
    protected _defeatMe: any | null;
    protected _savedBgm: any | null;
    protected _walkingBgm: any | null;

    constructor();
    initialize(): void;
    isJapanese(): boolean;
    isChinese(): boolean;
    isKorean(): boolean;
    isCJK(): boolean;
    isRussian(): boolean;
    isSideView(): boolean;
    isAutosaveEnabled(): boolean;
    isMessageSkipEnabled(): boolean;
    isSaveEnabled(): boolean;
    disableSave(): void;
    enableSave(): void;
    isMenuEnabled(): boolean;
    disableMenu(): void;
    enableMenu(): void;
    isEncounterEnabled(): boolean;
    disableEncounter(): void;
    enableEncounter(): void;
    isFormationEnabled(): boolean;
    disableFormation(): void;
    enableFormation(): void;
    battleCount(): number;
    winCount(): number;
    escapeCount(): number;
    saveCount(): number;
    versionId(): number;
    savefileId(): number;
    setSavefileId(savefileId: number): void;
    windowTone(): number[];
    setWindowTone(value: number[]): void;
    battleBgm(): any;
    setBattleBgm(value: any): void;
    victoryMe(): any;
    setVictoryMe(value: any): void;
    defeatMe(): any;
    setDefeatMe(value: any): void;
    onBattleStart(): void;
    onBattleWin(): void;
    onBattleEscape(): void;
    onBeforeSave(): void;
    onAfterLoad(): void;
    playtime(): number;
    playtimeText(): string;
    saveBgm(): void;
    replayBgm(): void;
    saveWalkingBgm(): void;
    replayWalkingBgm(): void;
    saveWalkingBgm2(): void;
    mainFontFace(): string;
    numberFontFace(): string;
    mainFontSize(): number;
    windowPadding(): number;
    windowOpacity(): number;
}

declare class Game_Timer {
    protected _frames: number;
    protected _working: boolean;

    constructor();
    initialize(): void;
    update(sceneActive: boolean): void;
    start(count: number): void;
    stop(): void;
    isWorking(): boolean;
    seconds(): number;
    frames(): number;
    onExpire(): void;
}

declare class Game_Message {
    protected _texts: string[];
    protected _choices: string[];
    protected _speakerName: string;
    protected _faceName: string;
    protected _faceIndex: number;
    protected _background: number;
    protected _positionType: number;
    protected _choiceDefaultType: number;
    protected _choiceCancelType: number;
    protected _choiceBackground: number;
    protected _choicePositionType: number;
    protected _numInputVariableId: number;
    protected _numInputMaxDigits: number;
    protected _itemChoiceVariableId: number;
    protected _itemChoiceItypeId: number;
    protected _scrollMode: boolean;
    protected _scrollSpeed: number;
    protected _scrollNoFast: boolean;
    protected _choiceCallback: ((n: number) => void) | null;

    constructor();
    initialize(): void;
    clear(): void;
    choices(): string[];
    speakerName(): string;
    faceName(): string;
    faceIndex(): number;
    background(): number;
    positionType(): number;
    choiceDefaultType(): number;
    choiceCancelType(): number;
    choiceBackground(): number;
    choicePositionType(): number;
    numInputVariableId(): number;
    numInputMaxDigits(): number;
    itemChoiceVariableId(): number;
    itemChoiceItypeId(): number;
    scrollMode(): boolean;
    scrollSpeed(): number;
    scrollNoFast(): boolean;
    add(text: string): void;
    setSpeakerName(speakerName: string): void;
    setFaceImage(faceName: string, faceIndex: number): void;
    setBackground(background: number): void;
    setPositionType(positionType: number): void;
    setChoices(choices: string[], defaultType: number, cancelType: number): void;
    setChoiceBackground(background: number): void;
    setChoicePositionType(positionType: number): void;
    setNumberInput(variableId: number, maxDigits: number): void;
    setItemChoice(variableId: number, itemType: number): void;
    setScroll(speed: number, noFast: boolean): void;
    setChoiceCallback(callback: (n: number) => void): void;
    onChoice(n: number): void;
    hasText(): boolean;
    isChoice(): boolean;
    isNumberInput(): boolean;
    isItemChoice(): boolean;
    isBusy(): boolean;
    newPage(): void;
    allText(): string;
    isRTL(): boolean;
}

declare class Game_Switches {
    protected _data: boolean[];

    constructor();
    initialize(): void;
    clear(): void;
    value(switchId: number): boolean;
    setValue(switchId: number, value: boolean): void;
    onChange(): void;
}

declare class Game_Variables {
    protected _data: number[];

    constructor();
    initialize(): void;
    clear(): void;
    value(variableId: number): number;
    setValue(variableId: number, value: number): void;
    onChange(): void;
}

declare class Game_SelfSwitches {
    protected _data: { [key: string]: boolean };

    constructor();
    initialize(): void;
    clear(): void;
    value(key: any[]): boolean;
    setValue(key: any[], value: boolean): void;
    onChange(): void;
}

declare class Game_Screen {
    protected _brightness: number;
    protected _fadeOutDuration: number;
    protected _fadeInDuration: number;
    protected _tone: number[];
    protected _toneTarget: number[];
    protected _toneDuration: number;
    protected _flashColor: number[];
    protected _flashDuration: number;
    protected _shakePower: number;
    protected _shakeSpeed: number;
    protected _shakeDuration: number;
    protected _shakeDirection: number;
    protected _shake: number;
    protected _zoomX: number;
    protected _zoomY: number;
    protected _zoomScale: number;
    protected _zoomScaleTarget: number;
    protected _zoomDuration: number;
    protected _weatherType: string;
    protected _weatherPower: number;
    protected _weatherPowerTarget: number;
    protected _weatherDuration: number;
    protected _pictures: (Game_Picture | null)[];

    constructor();
    initialize(): void;
    clear(): void;
    onBattleStart(): void;
    brightness(): number;
    tone(): number[];
    flashColor(): number[];
    shake(): number;
    zoomX(): number;
    zoomY(): number;
    zoomScale(): number;
    weatherType(): string;
    weatherPower(): number;
    picture(pictureId: number): Game_Picture | null;
    realPictureId(pictureId: number): number;
    clearFade(): void;
    clearTone(): void;
    clearFlash(): void;
    clearShake(): void;
    clearZoom(): void;
    clearWeather(): void;
    clearPictures(): void;
    eraseBattlePictures(): void;
    maxPictures(): number;
    startFadeOut(duration: number): void;
    startFadeIn(duration: number): void;
    startTint(tone: number[], duration: number): void;
    startFlash(color: number[], duration: number): void;
    startShake(power: number, speed: number, duration: number): void;
    startZoom(x: number, y: number, scale: number, duration: number): void;
    setZoom(x: number, y: number, scale: number): void;
    changeWeather(type: string, power: number, duration: number): void;
    update(): void;
    updateFadeOut(): void;
    updateFadeIn(): void;
    updateTone(): void;
    updateFlash(): void;
    updateShake(): void;
    updateZoom(): void;
    updateWeather(): void;
    updatePictures(): void;
    startFlashForDamage(): void;
    showPicture(pictureId: number, name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    movePicture(pictureId: number, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void;
    rotatePicture(pictureId: number, speed: number): void;
    tintPicture(pictureId: number, tone: number[], duration: number): void;
    erasePicture(pictureId: number): void;
}

declare class Game_Picture {
    protected _name: string;
    protected _origin: number;
    protected _x: number;
    protected _y: number;
    protected _scaleX: number;
    protected _scaleY: number;
    protected _opacity: number;
    protected _blendMode: number;
    protected _tone: number[] | null;
    protected _angle: number;
    protected _targetX: number;
    protected _targetY: number;
    protected _targetScaleX: number;
    protected _targetScaleY: number;
    protected _targetOpacity: number;
    protected _duration: number;
    protected _wholeDuration: number;
    protected _easingType: number;
    protected _easingExponent: number;
    protected _toneTarget: number[] | null;
    protected _toneDuration: number;
    protected _rotationSpeed: number;

    constructor();
    initialize(): void;
    name(): string;
    origin(): number;
    x(): number;
    y(): number;
    scaleX(): number;
    scaleY(): number;
    opacity(): number;
    blendMode(): number;
    tone(): number[] | null;
    angle(): number;
    initBasic(): void;
    initTarget(): void;
    initTone(): void;
    initRotation(): void;
    show(name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    move(origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void;
    rotate(speed: number): void;
    tint(tone: number[], duration: number): void;
    update(): void;
    updateMove(): void;
    updateTone(): void;
    updateRotation(): void;
    applyEasing(current: number, target: number): number;
    calcEasing(t: number): number;
    easeIn(t: number, exponent: number): number;
    easeOut(t: number, exponent: number): number;
    easeInOut(t: number, exponent: number): number;
}

declare class Game_Item {
    protected _dataClass: string;
    protected _itemId: number;

    constructor(item?: any);
    initialize(item?: any): void;
    isSkill(): boolean;
    isItem(): boolean;
    isUsableItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    isEquipItem(): boolean;
    isNull(): boolean;
    itemId(): number;
    object(): any;
    setObject(item: any): void;
    setEquip(isWeapon: boolean, itemId: number): void;
}

declare class Game_Action {
    static EFFECT_RECOVER_HP: number;
    static EFFECT_RECOVER_MP: number;
    static EFFECT_GAIN_TP: number;
    static EFFECT_ADD_STATE: number;
    static EFFECT_REMOVE_STATE: number;
    static EFFECT_ADD_BUFF: number;
    static EFFECT_ADD_DEBUFF: number;
    static EFFECT_REMOVE_BUFF: number;
    static EFFECT_REMOVE_DEBUFF: number;
    static EFFECT_SPECIAL: number;
    static EFFECT_GROW: number;
    static EFFECT_LEARN_SKILL: number;
    static EFFECT_COMMON_EVENT: number;
    static SPECIAL_EFFECT_ESCAPE: number;
    static HITTYPE_CERTAIN: number;
    static HITTYPE_PHYSICAL: number;
    static HITTYPE_MAGICAL: number;

    protected _subjectActorId: number;
    protected _subjectEnemyIndex: number;
    protected _forcing: boolean;
    protected _item: Game_Item;
    protected _targetIndex: number;
    protected _reflectionTarget: Game_Battler | undefined;

    constructor(subject: Game_Battler, forcing?: boolean);
    initialize(subject: Game_Battler, forcing?: boolean): void;
    clear(): void;
    setSubject(subject: Game_Battler): void;
    subject(): Game_Battler;
    friendsUnit(): Game_Unit;
    opponentsUnit(): Game_Unit;
    setEnemyAction(action: any): void;
    setAttack(): void;
    setGuard(): void;
    setSkill(skillId: number): void;
    setItem(itemId: number): void;
    setItemObject(object: any): void;
    setTarget(targetIndex: number): void;
    item(): any;
    isSkill(): boolean;
    isItem(): boolean;
    numRepeats(): number;
    checkItemScope(list: number[]): boolean;
    isForOpponent(): boolean;
    isForFriend(): boolean;
    isForEveryone(): boolean;
    isForAliveFriend(): boolean;
    isForDeadFriend(): boolean;
    isForUser(): boolean;
    isForOne(): boolean;
    isForRandom(): boolean;
    isForAll(): boolean;
    needsSelection(): boolean;
    numTargets(): number;
    checkDamageType(list: number[]): boolean;
    isHpEffect(): boolean;
    isMpEffect(): boolean;
    isDamage(): boolean;
    isRecover(): boolean;
    isDrain(): boolean;
    isHpRecover(): boolean;
    isMpRecover(): boolean;
    isCertainHit(): boolean;
    isPhysical(): boolean;
    isMagical(): boolean;
    isAttack(): boolean;
    isGuard(): boolean;
    isMagicSkill(): boolean;
    decideRandomTarget(): void;
    setConfusion(): void;
    prepare(): void;
    isValid(): boolean;
    speed(): number;
    makeTargets(): Game_Battler[];
    repeatTargets(targets: Game_Battler[]): Game_Battler[];
    confusionTarget(): Game_Battler;
    targetsForEveryone(): Game_Battler[];
    targetsForOpponents(): Game_Battler[];
    targetsForFriends(): Game_Battler[];
    randomTargets(unit: Game_Unit): Game_Battler[];
    targetsForDead(unit: Game_Unit): Game_Battler[];
    targetsForAlive(unit: Game_Unit): Game_Battler[];
    targetsForDeadAndAlive(unit: Game_Unit): Game_Battler[];
    evaluate(): number;
    itemTargetCandidates(): Game_Battler[];
    evaluateWithTarget(target: Game_Battler): number;
    testApply(target: Game_Battler): boolean;
    testLifeAndDeath(target: Game_Battler): boolean;
    hasItemAnyValidEffects(target: Game_Battler): boolean;
    testItemEffect(target: Game_Battler, effect: any): boolean;
    itemCnt(target: Game_Battler): number;
    itemMrf(target: Game_Battler): number;
    itemHit(target: Game_Battler): number;
    itemEva(target: Game_Battler): number;
    itemCri(target: Game_Battler): number;
    apply(target: Game_Battler): void;
    makeDamageValue(target: Game_Battler, critical: boolean): number;
    evalDamageFormula(target: Game_Battler): number;
    calcElementRate(target: Game_Battler): number;
    elementsMaxRate(target: Game_Battler, elements: number[]): number;
    applyCritical(damage: number): number;
    applyVariance(damage: number, variance: number): number;
    applyGuard(damage: number, target: Game_Battler): number;
    executeDamage(target: Game_Battler, value: number): void;
    executeHpDamage(target: Game_Battler, value: number): void;
    executeMpDamage(target: Game_Battler, value: number): void;
    gainDrainedHp(value: number): void;
    gainDrainedMp(value: number): void;
    applyItemEffect(target: Game_Battler, effect: any): void;
    itemEffectRecoverHp(target: Game_Battler, effect: any): void;
    itemEffectRecoverMp(target: Game_Battler, effect: any): void;
    itemEffectGainTp(target: Game_Battler, effect: any): void;
    itemEffectAddState(target: Game_Battler, effect: any): void;
    itemEffectAddAttackState(target: Game_Battler, effect: any): void;
    itemEffectAddNormalState(target: Game_Battler, effect: any): void;
    itemEffectRemoveState(target: Game_Battler, effect: any): void;
    itemEffectAddBuff(target: Game_Battler, effect: any): void;
    itemEffectAddDebuff(target: Game_Battler, effect: any): void;
    itemEffectRemoveBuff(target: Game_Battler, effect: any): void;
    itemEffectRemoveDebuff(target: Game_Battler, effect: any): void;
    itemEffectSpecial(target: Game_Battler, effect: any): void;
    itemEffectGrow(target: Game_Battler, effect: any): void;
    itemEffectLearnSkill(target: Game_Battler, effect: any): void;
    itemEffectCommonEvent(target: Game_Battler, effect: any): void;
    makeSuccess(target: Game_Battler): void;
    applyItemUserEffect(target: Game_Battler): void;
    lukEffectRate(target: Game_Battler): number;
    applyGlobal(): void;
    updateLastUsed(): void;
    updateLastSubject(): void;
    updateLastTarget(target: Game_Battler): void;
}

declare class Game_ActionResult {
    used: boolean;
    missed: boolean;
    evaded: boolean;
    physical: boolean;
    drain: boolean;
    critical: boolean;
    success: boolean;
    hpAffected: boolean;
    hpDamage: number;
    mpDamage: number;
    tpDamage: number;
    addedStates: number[];
    removedStates: number[];
    addedBuffs: number[];
    addedDebuffs: number[];
    removedBuffs: number[];

    constructor();
    initialize(): void;
    clear(): void;
    addedStateObjects(): any[];
    removedStateObjects(): any[];
    isStatusAffected(): boolean;
    isHit(): boolean;
    isStateAdded(stateId: number): boolean;
    pushAddedState(stateId: number): void;
    isStateRemoved(stateId: number): boolean;
    pushRemovedState(stateId: number): void;
    isBuffAdded(paramId: number): boolean;
    pushAddedBuff(paramId: number): void;
    isDebuffAdded(paramId: number): boolean;
    pushAddedDebuff(paramId: number): void;
    isBuffRemoved(paramId: number): boolean;
    pushRemovedBuff(paramId: number): void;
}


declare class Game_BattlerBase {
    static TRAIT_ELEMENT_RATE: number;
    static TRAIT_DEBUFF_RATE: number;
    static TRAIT_STATE_RATE: number;
    static TRAIT_STATE_RESIST: number;
    static TRAIT_PARAM: number;
    static TRAIT_XPARAM: number;
    static TRAIT_SPARAM: number;
    static TRAIT_ATTACK_ELEMENT: number;
    static TRAIT_ATTACK_STATE: number;
    static TRAIT_ATTACK_SPEED: number;
    static TRAIT_ATTACK_TIMES: number;
    static TRAIT_ATTACK_SKILL: number;
    static TRAIT_STYPE_ADD: number;
    static TRAIT_STYPE_SEAL: number;
    static TRAIT_SKILL_ADD: number;
    static TRAIT_SKILL_SEAL: number;
    static TRAIT_EQUIP_WTYPE: number;
    static TRAIT_EQUIP_ATYPE: number;
    static TRAIT_EQUIP_LOCK: number;
    static TRAIT_EQUIP_SEAL: number;
    static TRAIT_SLOT_TYPE: number;
    static TRAIT_ACTION_PLUS: number;
    static TRAIT_SPECIAL_FLAG: number;
    static TRAIT_COLLAPSE_TYPE: number;
    static TRAIT_PARTY_ABILITY: number;
    static FLAG_ID_AUTO_BATTLE: number;
    static FLAG_ID_GUARD: number;
    static FLAG_ID_SUBSTITUTE: number;
    static FLAG_ID_PRESERVE_TP: number;
    static ICON_BUFF_START: number;
    static ICON_DEBUFF_START: number;

    get hp(): number;
    get mp(): number;
    get tp(): number;
    get mhp(): number;
    get mmp(): number;
    get atk(): number;
    get def(): number;
    get mat(): number;
    get mdf(): number;
    get agi(): number;
    get luk(): number;
    get hit(): number;
    get eva(): number;
    get cri(): number;
    get cev(): number;
    get mev(): number;
    get mrf(): number;
    get cnt(): number;
    get hrg(): number;
    get mrg(): number;
    get trg(): number;
    get tgr(): number;
    get grd(): number;
    get rec(): number;
    get pha(): number;
    get mcr(): number;
    get tcr(): number;
    get pdr(): number;
    get mdr(): number;
    get fdr(): number;
    get exr(): number;

    _hp: number;
    _mp: number;
    _tp: number;
    _hidden: boolean;
    _paramPlus: number[];
    _states: number[];
    _stateTurns: { [key: number]: number };
    _buffs: number[];
    _buffTurns: number[];

    initialize(): void;
    initMembers(): void;
    clearParamPlus(): void;
    clearStates(): void;
    eraseState(stateId: number): void;
    isStateAffected(stateId: number): boolean;
    isDeathStateAffected(): boolean;
    deathStateId(): number;
    resetStateCounts(stateId: number): void;
    isStateExpired(stateId: number): boolean;
    updateStateTurns(): void;
    clearBuffs(): void;
    eraseBuff(paramId: number): void;
    buffLength(): number;
    buff(paramId: number): number;
    isBuffAffected(paramId: number): boolean;
    isDebuffAffected(paramId: number): boolean;
    isBuffOrDebuffAffected(paramId: number): boolean;
    isMaxBuffAffected(paramId: number): boolean;
    isMaxDebuffAffected(paramId: number): boolean;
    increaseBuff(paramId: number): void;
    decreaseBuff(paramId: number): void;
    overwriteBuffTurns(paramId: number, turns: number): void;
    isBuffExpired(paramId: number): boolean;
    updateBuffTurns(): void;
    die(): void;
    revive(): void;
    states(): any[];
    stateIcons(): number[];
    buffIcons(): number[];
    buffIconIndex(buffLevel: number, paramId: number): number;
    allIcons(): number[];
    traitObjects(): any[];
    allTraits(): any[];
    traits(code: number): any[];
    traitsWithId(code: number, id: number): any[];
    traitsPi(code: number, id: number): number;
    traitsSum(code: number, id: number): number;
    traitsSumAll(code: number): number;
    traitsSet(code: number): number[];
    paramBase(paramId: number): number;
    paramPlus(paramId: number): number;
    paramBasePlus(paramId: number): number;
    paramMin(paramId: number): number;
    paramMax(paramId: number): number;
    paramRate(paramId: number): number;
    paramBuffRate(paramId: number): number;
    param(paramId: number): number;
    xparam(xparamId: number): number;
    sparam(sparamId: number): number;
    elementRate(elementId: number): number;
    debuffRate(paramId: number): number;
    stateRate(stateId: number): number;
    stateResistSet(): number[];
    isStateResist(stateId: number): boolean;
    attackElements(): number[];
    attackStates(): number[];
    attackStatesRate(stateId: number): number;
    attackSpeed(): number;
    attackTimesAdd(): number;
    attackSkillId(): number;
    addedSkillTypes(): number[];
    isSkillTypeSealed(stypeId: number): boolean;
    addedSkills(): number[];
    isSkillSealed(skillId: number): boolean;
    isEquipWtypeOk(wtypeId: number): boolean;
    isEquipAtypeOk(atypeId: number): boolean;
    isEquipTypeLocked(etypeId: number): boolean;
    isEquipTypeSealed(etypeId: number): boolean;
    slotType(): number;
    isDualWield(): boolean;
    actionPlusSet(): number[];
    specialFlag(flagId: number): boolean;
    collapseType(): number;
    partyAbility(abilityId: number): boolean;
    isAutoBattle(): boolean;
    isGuard(): boolean;
    isSubstitute(): boolean;
    isPreserveTp(): boolean;
    addParam(paramId: number, value: number): void;
    setHp(hp: number): void;
    setMp(mp: number): void;
    setTp(tp: number): void;
    maxTp(): number;
    refresh(): void;
    recoverAll(): void;
    hpRate(): number;
    mpRate(): number;
    tpRate(): number;
    hide(): void;
    appear(): void;
    isHidden(): boolean;
    isAppeared(): boolean;
    isDead(): boolean;
    isAlive(): boolean;
    isDying(): boolean;
    isRestricted(): boolean;
    canInput(): boolean;
    canMove(): boolean;
    isConfused(): boolean;
    confusionLevel(): number;
    isActor(): boolean;
    isEnemy(): boolean;
    sortStates(): void;
    restriction(): number;
    addNewState(stateId: number): void;
    onRestrict(): void;
    mostImportantStateText(): string;
    stateMotionIndex(): number;
    stateOverlayIndex(): number;
    isSkillWtypeOk(skill: Data_Skill): boolean;
    skillMpCost(skill: Data_Skill): number;
    skillTpCost(skill: Data_Skill): number;
    canPaySkillCost(skill: Data_Skill): boolean;
    paySkillCost(skill: Data_Skill): void;
    isOccasionOk(item: Data_ItemBase): boolean;
    meetsUsableItemConditions(item: Data_ItemBase): boolean;
    meetsSkillConditions(skill: Data_Skill): boolean;
    meetsItemConditions(item: Data_Item): boolean;
    canUse(item: Data_ItemBase | null): boolean;
    canEquip(item: Data_EquipItem | null): boolean;
    canEquipWeapon(item: Data_Weapon): boolean;
    canEquipArmor(item: Data_Armor): boolean;
    guardSkillId(): number;
    canAttack(): boolean;
    canGuard(): boolean;
}

declare class Game_Battler extends Game_BattlerBase {
    initialize(...args: any[]): void;
    initMembers(): void;
    clearDamagePopup(): void;
    clearWeaponAnimation(): void;
    clearEffect(): void;
    clearMotion(): void;
    requestEffect(effectType: string): void;
    requestMotion(motionType: string): void;
    requestMotionRefresh(): void;
    cancelMotionRefresh(): void;
    select(): void;
    deselect(): void;
    isDamagePopupRequested(): boolean;
    isEffectRequested(): boolean;
    isMotionRequested(): boolean;
    isWeaponAnimationRequested(): boolean;
    isMotionRefreshRequested(): boolean;
    isSelected(): boolean;
    effectType(): string | null;
    motionType(): string | null;
    weaponImageId(): number;
    startDamagePopup(): void;
    shouldPopupDamage(): boolean;
    startWeaponAnimation(weaponImageId: number): void;
    action(index: number): Game_Action;
    setAction(index: number, action: Game_Action): void;
    numActions(): number;
    clearActions(): void;
    result(): Game_ActionResult;
    clearResult(): void;
    clearTpbChargeTime(): void;
    applyTpbPenalty(): void;
    initTpbChargeTime(advantageous: boolean): void;
    tpbChargeTime(): number;
    startTpbCasting(): void;
    startTpbAction(): void;
    isTpbCharged(): boolean;
    isTpbReady(): boolean;
    isTpbTimeout(): boolean;
    updateTpb(): void;
    updateTpbChargeTime(): void;
    updateTpbCastTime(): void;
    updateTpbAutoBattle(): void;
    updateTpbIdleTime(): void;
    tpbAcceleration(): number;
    tpbRelativeSpeed(): number;
    tpbSpeed(): number;
    tpbBaseSpeed(): number;
    tpbRequiredCastTime(): number;
    onTpbCharged(): void;
    shouldDelayTpbCharge(): boolean;
    finishTpbCharge(): void;
    isTpbTurnEnd(): boolean;
    initTpbTurn(): void;
    startTpbTurn(): void;
    makeTpbActions(): void;
    onTpbTimeout(): void;
    turnCount(): number;
    canInput(): boolean;
    refresh(): void;
    addState(stateId: number): void;
    isStateAddable(stateId: number): boolean;
    isStateRestrict(stateId: number): boolean;
    onRestrict(): void;
    removeState(stateId: number): void;
    escape(): void;
    addBuff(paramId: number, turns: number): void;
    addDebuff(paramId: number, turns: number): void;
    removeBuff(paramId: number): void;
    removeBattleStates(): void;
    removeAllBuffs(): void;
    removeStatesAuto(timing: number): void;
    removeBuffsAuto(): void;
    removeStatesByDamage(): void;
    makeActionTimes(): number;
    makeActions(): void;
    speed(): number;
    makeSpeed(): void;
    currentAction(): Game_Action;
    removeCurrentAction(): void;
    setLastTarget(target: Game_Battler): void;
    forceAction(skillId: number, targetIndex: number): void;
    useItem(item: Data_ItemBase): void;
    consumeItem(item: Data_Item): void;
    gainHp(value: number): void;
    gainMp(value: number): void;
    gainTp(value: number): void;
    gainSilentTp(value: number): void;
    initTp(): void;
    clearTp(): void;
    chargeTpByDamage(damageRate: number): void;
    regenerateHp(): void;
    maxSlipDamage(): number;
    regenerateMp(): void;
    regenerateTp(): void;
    regenerateAll(): void;
    onBattleStart(advantageous: boolean): void;
    onAllActionsEnd(): void;
    onTurnEnd(): void;
    onBattleEnd(): void;
    onDamage(value: number): void;
    setActionState(actionState: string): void;
    isUndecided(): boolean;
    isInputting(): boolean;
    isWaiting(): boolean;
    isActing(): boolean;
    isChanting(): boolean;
    isGuardWaiting(): boolean;
    performActionStart(action: Game_Action): void;
    performAction(action: Game_Action): void;
    performActionEnd(): void;
    performDamage(): void;
    performMiss(): void;
    performRecovery(): void;
    performEvasion(): void;
    performMagicEvasion(): void;
    performCounter(): void;
    performReflection(): void;
    performSubstitute(target: Game_Battler): void;
    performCollapse(): void;
}

declare class Game_Actor extends Game_Battler {
    readonly level: number;

    initialize(actorId: number): void;
    initMembers(): void;
    setup(actorId: number): void;
    actorId(): number;
    actor(): Data_Actor;
    name(): string;
    setName(name: string): void;
    nickname(): string;
    setNickname(nickname: string): void;
    profile(): string;
    setProfile(profile: string): void;
    characterName(): string;
    characterIndex(): number;
    faceName(): string;
    faceIndex(): number;
    battlerName(): string;
    clearStates(): void;
    eraseState(stateId: number): void;
    resetStateCounts(stateId: number): void;
    initImages(): void;
    expForLevel(level: number): number;
    initExp(): void;
    currentExp(): number;
    currentLevelExp(): number;
    nextLevelExp(): number;
    nextRequiredExp(): number;
    maxLevel(): number;
    isMaxLevel(): boolean;
    initSkills(): void;
    initEquips(equips: number[]): void;
    equipSlots(): number[];
    equips(): (Data_EquipItem | null)[];
    weapons(): Data_Weapon[];
    armors(): Data_Armor[];
    hasWeapon(weapon: Data_Weapon): boolean;
    hasArmor(armor: Data_Armor): boolean;
    isEquipChangeOk(slotId: number): boolean;
    changeEquip(slotId: number, item: Data_EquipItem | null): void;
    forceChangeEquip(slotId: number, item: Data_EquipItem | null): void;
    tradeItemWithParty(newItem: Data_EquipItem | null, oldItem: Data_EquipItem | null): boolean;
    changeEquipById(etypeId: number, itemId: number): void;
    isEquipped(item: Data_EquipItem): boolean;
    discardEquip(item: Data_EquipItem): void;
    releaseUnequippableItems(forcing: boolean): void;
    clearEquipments(): void;
    optimizeEquipments(): void;
    bestEquipItem(slotId: number): Data_EquipItem | null;
    calcEquipItemPerformance(item: Data_EquipItem): number;
    isSkillWtypeOk(skill: Data_Skill): boolean;
    isWtypeEquipped(wtypeId: number): boolean;
    refresh(): void;
    hide(): void;
    isActor(): boolean;
    friendsUnit(): Game_Party;
    opponentsUnit(): Game_Troop;
    index(): number;
    isBattleMember(): boolean;
    isFormationChangeOk(): boolean;
    currentClass(): Data_Class;
    isClass(gameClass: Data_Class): boolean;
    skillTypes(): number[];
    skills(): Data_Skill[];
    usableSkills(): Data_Skill[];
    traitObjects(): any[];
    attackElements(): number[];
    hasNoWeapons(): boolean;
    bareHandsElementId(): number;
    paramBase(paramId: number): number;
    paramPlus(paramId: number): number;
    attackAnimationId1(): number;
    attackAnimationId2(): number;
    bareHandsAnimationId(): number;
    changeExp(exp: number, show: boolean): void;
    levelUp(): void;
    levelDown(): void;
    findNewSkills(lastSkills: Data_Skill[]): Data_Skill[];
    displayLevelUp(newSkills: Data_Skill[]): void;
    gainExp(exp: number): void;
    finalExpRate(): number;
    benchMembersExpRate(): number;
    shouldDisplayLevelUp(): boolean;
    changeLevel(level: number, show: boolean): void;
    learnSkill(skillId: number): void;
    forgetSkill(skillId: number): void;
    isLearnedSkill(skillId: number): boolean;
    hasSkill(skillId: number): boolean;
    changeClass(classId: number, keepExp: boolean): void;
    setCharacterImage(characterName: string, characterIndex: number): void;
    setFaceImage(faceName: string, faceIndex: number): void;
    setBattlerImage(battlerName: string): void;
    isSpriteVisible(): boolean;
    performActionStart(action: Game_Action): void;
    performAction(action: Game_Action): void;
    performActionEnd(): void;
    performAttack(): void;
    performDamage(): void;
    performEvasion(): void;
    performMagicEvasion(): void;
    performCounter(): void;
    performCollapse(): void;
    performVictory(): void;
    performEscape(): void;
    makeActionList(): Game_Action[];
    makeAutoBattleActions(): void;
    makeConfusionActions(): void;
    makeActions(): void;
    onPlayerWalk(): void;
    updateStateSteps(state: Data_State): void;
    showAddedStates(): void;
    showRemovedStates(): void;
    stepsForTurn(): number;
    turnEndOnMap(): void;
    checkFloorEffect(): void;
    executeFloorDamage(): void;
    basicFloorDamage(): number;
    maxFloorDamage(): number;
    performMapDamage(): void;
    clearActions(): void;
    inputtingAction(): Game_Action;
    selectNextCommand(): boolean;
    selectPreviousCommand(): boolean;
    lastSkill(): Data_Skill | null;
    lastMenuSkill(): Data_Skill | null;
    setLastMenuSkill(skill: Data_Skill): void;
    lastBattleSkill(): Data_Skill | null;
    setLastBattleSkill(skill: Data_Skill): void;
    lastCommandSymbol(): string;
    setLastCommandSymbol(symbol: string): void;
    testEscape(item: Data_ItemBase): boolean;
    meetsUsableItemConditions(item: Data_ItemBase): boolean;
    onEscapeFailure(): void;
}

declare class Game_Enemy extends Game_Battler {
    initialize(enemyId: number, x: number, y: number): void;
    initMembers(): void;
    setup(enemyId: number, x: number, y: number): void;
    isEnemy(): boolean;
    friendsUnit(): Game_Troop;
    opponentsUnit(): Game_Party;
    index(): number;
    isBattleMember(): boolean;
    enemyId(): number;
    enemy(): Data_Enemy;
    traitObjects(): any[];
    paramBase(paramId: number): number;
    exp(): number;
    gold(): number;
    makeDropItems(): Data_ItemBase[];
    dropItemRate(): number;
    itemObject(kind: number, dataId: number): Data_ItemBase | null;
    isSpriteVisible(): boolean;
    screenX(): number;
    screenY(): number;
    battlerName(): string;
    battlerHue(): number;
    originalName(): string;
    name(): string;
    isLetterEmpty(): boolean;
    setLetter(letter: string): void;
    setPlural(plural: boolean): void;
    performActionStart(action: Game_Action): void;
    performAction(action: Game_Action): void;
    performActionEnd(): void;
    performDamage(): void;
    performCollapse(): void;
    transform(enemyId: number): void;
    meetsCondition(action: Data_Enemy_Action): boolean;
    meetsTurnCondition(param1: number, param2: number): boolean;
    meetsHpCondition(param1: number, param2: number): boolean;
    meetsMpCondition(param1: number, param2: number): boolean;
    meetsStateCondition(param: number): boolean;
    meetsPartyLevelCondition(param: number): boolean;
    meetsSwitchCondition(param: number): boolean;
    isActionValid(action: Data_Enemy_Action): boolean;
    selectAction(actionList: Data_Enemy_Action[], ratingZero: number): Data_Enemy_Action | null;
    selectAllActions(actionList: Data_Enemy_Action[]): void;
    makeActions(): void;
}

declare class Game_Actors {
    initialize(): void;
    actor(actorId: number): Game_Actor | null;
}

declare class Game_Unit {
    initialize(): void;
    inBattle(): boolean;
    members(): Game_Battler[] | Game_Actor[] | Game_Enemy[];
    aliveMembers(): Game_Battler[];
    deadMembers(): Game_Battler[];
    movableMembers(): Game_Battler[];
    clearActions(): void;
    agility(): number;
    tgrSum(): number;
    randomTarget(): Game_Battler | null;
    randomDeadTarget(): Game_Battler | null;
    smoothTarget(index: number): Game_Battler;
    smoothDeadTarget(index: number): Game_Battler;
    clearResults(): void;
    onBattleStart(advantageous: boolean): void;
    onBattleEnd(): void;
    makeActions(): void;
    select(activeMember: Game_Battler | null): void;
    isAllDead(): boolean;
    substituteBattler(target: Game_Battler): Game_Battler | null;
    tpbBaseSpeed(): number;
    tpbReferenceTime(): number;
    updateTpb(): void;
}

declare class Game_Party extends Game_Unit {
    static readonly ABILITY_ENCOUNTER_HALF: number;
    static readonly ABILITY_ENCOUNTER_NONE: number;
    static readonly ABILITY_CANCEL_SURPRISE: number;
    static readonly ABILITY_RAISE_PREEMPTIVE: number;
    static readonly ABILITY_GOLD_DOUBLE: number;
    static readonly ABILITY_DROP_ITEM_DOUBLE: number;

    initialize(): void;
    initAllItems(): void;
    exists(): boolean;
    size(): number;
    isEmpty(): boolean;
    members(): Game_Actor[];
    allMembers(): Game_Actor[];
    battleMembers(): Game_Actor[];
    hiddenBattleMembers(): Game_Actor[];
    allBattleMembers(): Game_Actor[];
    maxBattleMembers(): number;
    leader(): Game_Actor;
    removeInvalidMembers(): void;
    reviveBattleMembers(): void;
    items(): Data_Item[];
    weapons(): Data_Weapon[];
    armors(): Data_Armor[];
    equipItems(): Data_EquipItem[];
    allItems(): Data_ItemBase[];
    itemContainer(item: Data_ItemBase | null): Record<number, number> | null;
    setupStartingMembers(): void;
    name(): string;
    setupBattleTest(): void;
    setupBattleTestMembers(): void;
    setupBattleTestItems(): void;
    highestLevel(): number;
    addActor(actorId: number): void;
    removeActor(actorId: number): void;
    gold(): number;
    gainGold(amount: number): void;
    loseGold(amount: number): void;
    maxGold(): number;
    steps(): number;
    increaseSteps(): void;
    numItems(item: Data_ItemBase): number;
    maxItems(item: Data_ItemBase): number;
    hasMaxItems(item: Data_ItemBase): boolean;
    hasItem(item: Data_ItemBase, includeEquip?: boolean): boolean;
    isAnyMemberEquipped(item: Data_EquipItem): boolean;
    gainItem(item: Data_ItemBase | null, amount: number, includeEquip?: boolean): void;
    discardMembersEquip(item: Data_EquipItem, amount: number): void;
    loseItem(item: Data_ItemBase, amount: number, includeEquip?: boolean): void;
    consumeItem(item: Data_Item): void;
    canUse(item: Data_ItemBase): boolean;
    canInput(): boolean;
    isAllDead(): boolean;
    isEscaped(): boolean;
    onPlayerWalk(): void;
    menuActor(): Game_Actor;
    setMenuActor(actor: Game_Actor): void;
    makeMenuActorNext(): void;
    makeMenuActorPrevious(): void;
    targetActor(): Game_Actor;
    setTargetActor(actor: Game_Actor): void;
    lastItem(): Data_ItemBase | null;
    setLastItem(item: Data_ItemBase): void;
    swapOrder(index1: number, index2: number): void;
    charactersForSavefile(): [string, number][];
    facesForSavefile(): [string, number][];
    partyAbility(abilityId: number): boolean;
    hasEncounterHalf(): boolean;
    hasEncounterNone(): boolean;
    hasCancelSurprise(): boolean;
    hasRaisePreemptive(): boolean;
    hasGoldDouble(): boolean;
    hasDropItemDouble(): boolean;
    ratePreemptive(troopAgi: number): number;
    rateSurprise(troopAgi: number): number;
    performVictory(): void;
    performEscape(): void;
    removeBattleStates(): void;
    requestMotionRefresh(): void;
    onEscapeFailure(): void;
}

declare class Game_Troop extends Game_Unit {
    static readonly LETTER_TABLE_HALF: string[];
    static readonly LETTER_TABLE_FULL: string[];

    initialize(): void;
    isEventRunning(): boolean;
    updateInterpreter(): void;
    turnCount(): number;
    members(): Game_Enemy[];
    clear(): void;
    troop(): Data_Troop;
    setup(troopId: number): void;
    makeUniqueNames(): void;
    updatePluralFlags(): void;
    letterTable(): string[];
    enemyNames(): string[];
    meetsConditions(page: Data_Troop_Page): boolean;
    setupBattleEvent(): void;
    increaseTurn(): void;
    expTotal(): number;
    goldTotal(): number;
    goldRate(): number;
    makeDropItems(): Data_ItemBase[];
    isTpbTurnEnd(): boolean;
}

declare class Game_Map {
    initialize(): void;
    setup(mapId: number): void;
    isEventRunning(): boolean;
    tileWidth(): number;
    tileHeight(): number;
    bushDepth(): number;
    mapId(): number;
    tilesetId(): number;
    displayX(): number;
    displayY(): number;
    parallaxName(): string;
    battleback1Name(): string | null;
    battleback2Name(): string | null;
    requestRefresh(): void;
    isNameDisplayEnabled(): boolean;
    disableNameDisplay(): void;
    enableNameDisplay(): void;
    createVehicles(): void;
    refereshVehicles(): void;
    vehicles(): Game_Vehicle[];
    vehicle(type: number | string): Game_Vehicle | null;
    boat(): Game_Vehicle;
    ship(): Game_Vehicle;
    airship(): Game_Vehicle;
    setupEvents(): void;
    events(): Game_Event[];
    event(eventId: number): Game_Event;
    eraseEvent(eventId: number): void;
    autorunCommonEvents(): Data_CommonEvent[];
    parallelCommonEvents(): Data_CommonEvent[];
    setupScroll(): void;
    setupParallax(): void;
    setupBattleback(): void;
    setDisplayPos(x: number, y: number): void;
    parallaxOx(): number;
    parallaxOy(): number;
    tileset(): Data_Tileset;
    tilesetFlags(): number[];
    displayName(): string;
    width(): number;
    height(): number;
    data(): number[];
    isLoopHorizontal(): boolean;
    isLoopVertical(): boolean;
    isDashDisabled(): boolean;
    encounterList(): Data_Map_Encounter[];
    encounterStep(): number;
    isOverworld(): boolean;
    screenTileX(): number;
    screenTileY(): number;
    adjustX(x: number): number;
    adjustY(y: number): number;
    roundX(x: number): number;
    roundY(y: number): number;
    xWithDirection(x: number, d: number): number;
    yWithDirection(y: number, d: number): number;
    roundXWithDirection(x: number, d: number): number;
    roundYWithDirection(y: number, d: number): number;
    deltaX(x1: number, x2: number): number;
    deltaY(y1: number, y2: number): number;
    distance(x1: number, y1: number, x2: number, y2: number): number;
    canvasToMapX(x: number): number;
    canvasToMapY(y: number): number;
    autoplay(): void;
    refreshIfNeeded(): void;
    refresh(): void;
    refreshTileEvents(): void;
    eventsXy(x: number, y: number): Game_Event[];
    eventsXyNt(x: number, y: number): Game_Event[];
    tileEventsXy(x: number, y: number): Game_Event[];
    eventIdXy(x: number, y: number): number;
    scrollDown(distance: number): void;
    scrollLeft(distance: number): void;
    scrollRight(distance: number): void;
    scrollUp(distance: number): void;
    isValid(x: number, y: number): boolean;
    checkPassage(x: number, y: number, bit: number): boolean;
    tileId(x: number, y: number, z: number): number;
    layeredTiles(x: number, y: number): number[];
    allTiles(x: number, y: number): number[];
    autotileType(x: number, y: number, z: number): number;
    isPassable(x: number, y: number, d: number): boolean;
    isBoatPassable(x: number, y: number): boolean;
    isShipPassable(x: number, y: number): boolean;
    isAirshipLandOk(x: number, y: number): boolean;
    checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;
    isLadder(x: number, y: number): boolean;
    isBush(x: number, y: number): boolean;
    isCounter(x: number, y: number): boolean;
    isDamageFloor(x: number, y: number): boolean;
    terrainTag(x: number, y: number): number;
    regionId(x: number, y: number): number;
    startScroll(direction: number, distance: number, speed: number): void;
    isScrolling(): boolean;
    update(sceneActive: boolean): void;
    updateScroll(): void;
    scrollDistance(): number;
    doScroll(direction: number, distance: number): void;
    updateEvents(): void;
    updateVehicles(): void;
    updateParallax(): void;
    changeTileset(tilesetId: number): void;
    changeBattleback(battleback1Name: string, battleback2Name: string): void;
    changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void;
    updateInterpreter(): void;
    unlockEvent(eventId: number): void;
    setupStartingEvent(): boolean;
    setupTestEvent(): boolean;
    setupStartingMapEvent(): boolean;
    setupAutorunCommonEvent(): boolean;
    isAnyEventStarting(): boolean;
}

declare class Game_CommonEvent {
    initialize(commonEventId: number): void;
    event(): Data_CommonEvent;
    list(): EventCommand[];
    refresh(): void;
    isActive(): boolean;
    update(): void;
}

declare class Game_CharacterBase {
    readonly x: number;
    readonly y: number;

    initialize(...args: any[]): void;
    initMembers(): void;
    pos(x: number, y: number): boolean;
    posNt(x: number, y: number): boolean;
    moveSpeed(): number;
    setMoveSpeed(moveSpeed: number): void;
    moveFrequency(): number;
    setMoveFrequency(moveFrequency: number): void;
    opacity(): number;
    setOpacity(opacity: number): void;
    blendMode(): number;
    setBlendMode(blendMode: number): void;
    isNormalPriority(): boolean;
    setPriorityType(priorityType: number): void;
    isMoving(): boolean;
    isJumping(): boolean;
    jumpHeight(): number;
    isStopping(): boolean;
    checkStop(threshold: number): boolean;
    resetStopCount(): void;
    realMoveSpeed(): number;
    distancePerFrame(): number;
    isDashing(): boolean;
    isDebugThrough(): boolean;
    straighten(): void;
    reverseDir(d: number): number;
    canPass(x: number, y: number, d: number): boolean;
    canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithVehicles(x: number, y: number): boolean;
    setPosition(x: number, y: number): void;
    copyPosition(character: Game_CharacterBase): void;
    locate(x: number, y: number): void;
    direction(): number;
    setDirection(d: number): void;
    isTile(): boolean;
    isObjectCharacter(): boolean;
    shiftY(): number;
    scrolledX(): number;
    scrolledY(): number;
    screenX(): number;
    screenY(): number;
    screenZ(): number;
    isNearTheScreen(): boolean;
    update(...args: any[]): void;
    updateStop(): void;
    updateJump(): void;
    updateMove(): void;
    updateAnimation(): void;
    animationWait(): number;
    updateAnimationCount(): void;
    updatePattern(): void;
    maxPattern(): number;
    pattern(): number;
    setPattern(pattern: number): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    refreshBushDepth(): void;
    isOnLadder(): boolean;
    isOnBush(): boolean;
    terrainTag(): number;
    regionId(): number;
    increaseSteps(): void;
    tileId(): number;
    characterName(): string;
    characterIndex(): number;
    setImage(characterName: string, characterIndex: number): void;
    setTileImage(tileId: number): void;
    checkEventTriggerTouchFront(d: number): void;
    checkEventTriggerTouch(x: number, y: number): boolean;
    isMovementSucceeded(x?: number, y?: number): boolean;
    setMovementSuccess(success: boolean): void;
    moveStraight(d: number): void;
    moveDiagonally(horz: number, vert: number): void;
    jump(xPlus: number, yPlus: number): void;
    hasWalkAnime(): boolean;
    setWalkAnime(walkAnime: boolean): void;
    hasStepAnime(): boolean;
    setStepAnime(stepAnime: boolean): void;
    isDirectionFixed(): boolean;
    setDirectionFix(directionFix: boolean): void;
    isThrough(): boolean;
    setThrough(through: boolean): void;
    isTransparent(): boolean;
    bushDepth(): number;
    setTransparent(transparent: boolean): void;
    startAnimation(): void;
    startBalloon(): void;
    isAnimationPlaying(): boolean;
    isBalloonPlaying(): boolean;
    endAnimation(): void;
    endBalloon(): void;
}

declare class Game_Character extends Game_CharacterBase {
    static readonly ROUTE_END: number;
    static readonly ROUTE_MOVE_DOWN: number;
    static readonly ROUTE_MOVE_LEFT: number;
    static readonly ROUTE_MOVE_RIGHT: number;
    static readonly ROUTE_MOVE_UP: number;
    static readonly ROUTE_MOVE_LOWER_L: number;
    static readonly ROUTE_MOVE_LOWER_R: number;
    static readonly ROUTE_MOVE_UPPER_L: number;
    static readonly ROUTE_MOVE_UPPER_R: number;
    static readonly ROUTE_MOVE_RANDOM: number;
    static readonly ROUTE_MOVE_TOWARD: number;
    static readonly ROUTE_MOVE_AWAY: number;
    static readonly ROUTE_MOVE_FORWARD: number;
    static readonly ROUTE_MOVE_BACKWARD: number;
    static readonly ROUTE_JUMP: number;
    static readonly ROUTE_WAIT: number;
    static readonly ROUTE_TURN_DOWN: number;
    static readonly ROUTE_TURN_LEFT: number;
    static readonly ROUTE_TURN_RIGHT: number;
    static readonly ROUTE_TURN_UP: number;
    static readonly ROUTE_TURN_90D_R: number;
    static readonly ROUTE_TURN_90D_L: number;
    static readonly ROUTE_TURN_180D: number;
    static readonly ROUTE_TURN_90D_R_L: number;
    static readonly ROUTE_TURN_RANDOM: number;
    static readonly ROUTE_TURN_TOWARD: number;
    static readonly ROUTE_TURN_AWAY: number;
    static readonly ROUTE_SWITCH_ON: number;
    static readonly ROUTE_SWITCH_OFF: number;
    static readonly ROUTE_CHANGE_SPEED: number;
    static readonly ROUTE_CHANGE_FREQ: number;
    static readonly ROUTE_WALK_ANIME_ON: number;
    static readonly ROUTE_WALK_ANIME_OFF: number;
    static readonly ROUTE_STEP_ANIME_ON: number;
    static readonly ROUTE_STEP_ANIME_OFF: number;
    static readonly ROUTE_DIR_FIX_ON: number;
    static readonly ROUTE_DIR_FIX_OFF: number;
    static readonly ROUTE_THROUGH_ON: number;
    static readonly ROUTE_THROUGH_OFF: number;
    static readonly ROUTE_TRANSPARENT_ON: number;
    static readonly ROUTE_TRANSPARENT_OFF: number;
    static readonly ROUTE_CHANGE_IMAGE: number;
    static readonly ROUTE_CHANGE_OPACITY: number;
    static readonly ROUTE_CHANGE_BLEND_MODE: number;
    static readonly ROUTE_PLAY_SE: number;
    static readonly ROUTE_SCRIPT: number;

    initialize(...args: any[]): void;

    initMembers(): void;

    memorizeMoveRoute(): void;

    restoreMoveRoute(): void;

    isMoveRouteForcing(): boolean;

    setMoveRoute(moveRoute: MoveRoute): void;

    forceMoveRoute(moveRoute: MoveRoute): void;

    updateStop(): void;

    updateRoutineMove(): void;

    processMoveCommand(command: MoveCommand): void;

    deltaXFrom(x: number): number;

    deltaYFrom(y: number): number;

    moveRandom(): void;

    moveTowardCharacter(character: Game_Character): void;

    moveAwayFromCharacter(character: Game_Character): void;

    turnTowardCharacter(character: Game_Character): void;

    turnAwayFromCharacter(character: Game_Character): void;

    turnTowardPlayer(): void;

    turnAwayFromPlayer(): void;

    moveTowardPlayer(): void;

    moveAwayFromPlayer(): void;

    moveForward(): void;

    moveBackward(): void;

    processRouteEnd(): void;

    advanceMoveRouteIndex(): void;

    turnRight90(): void;

    turnLeft90(): void;

    turn180(): void;

    turnRightOrLeft90(): void;

    turnRandom(): void;

    swap(character: Game_Character): void;

    findDirectionTo(goalX: number, goalY: number): number;

    searchLimit(): number;
}

declare class Game_Player extends Game_Character {
    initialize(): void;
    initMembers(): void;
    clearTransferInfo(): void;
    followers(): Game_Followers;
    refresh(): void;
    isStopping(): boolean;
    reserveTransfer(mapId: number, x: number, y: number, d: number, fadeType: number): void;
    setupForNewGame(): void;
    requestMapReload(): void;
    isTransferring(): boolean;
    newMapId(): number;
    fadeType(): number;
    performTransfer(): void;
    isMapPassable(x: number, y: number, d: number): boolean;
    vehicle(): Game_Vehicle | null;
    isInBoat(): boolean;
    isInShip(): boolean;
    isInAirship(): boolean;
    isInVehicle(): boolean;
    isNormal(): boolean;
    isDashing(): boolean;
    isDebugThrough(): boolean;
    isCollided(x: number, y: number): boolean;
    centerX(): number;
    centerY(): number;
    center(x: number, y: number): void;
    locate(x: number, y: number): void;
    increaseSteps(): void;
    makeEncounterCount(): void;
    makeEncounterTroopId(): number;
    meetsEncounterConditions(encounter: Data_Map_Encounter): boolean;
    executeEncounter(): boolean;
    startMapEvent(x: number, y: number, triggers: number[], normal: boolean): void;
    moveByInput(): void;
    canMove(): boolean;
    getInputDirection(): number;
    executeMove(direction: number): void;
    update(sceneActive: boolean): void;
    updateDashing(): void;
    isDashButtonPressed(): boolean;
    updateScroll(lastScrolledX: number, lastScrolledY: number): void;
    updateVehicle(): void;
    updateVehicleGetOn(): void;
    updateVehicleGetOff(): void;
    updateNonmoving(wasMoving: boolean, sceneActive: boolean): void;
    triggerAction(): boolean;
    triggerButtonAction(): boolean;
    triggerTouchAction(): boolean;
    triggerTouchActionD1(x1: number, y1: number): boolean;
    triggerTouchActionD2(x2: number, y2: number): boolean;
    triggerTouchActionD3(x2: number, y2: number): boolean;
    updateEncounterCount(): void;
    canEncounter(): boolean;
    encounterProgressValue(): number;
    checkEventTriggerHere(triggers: number[]): void;
    checkEventTriggerThere(triggers: number[]): void;
    checkEventTriggerTouch(x: number, y: number): boolean;
    canStartLocalEvents(): boolean;
    getOnOffVehicle(): boolean;
    getOnVehicle(): boolean;
    getOffVehicle(): boolean;
    forceMoveForward(): void;
    isOnDamageFloor(): boolean;
    moveStraight(d: number): void;
    moveDiagonally(horz: number, vert: number): void;
    jump(xPlus: number, yPlus: number): void;
    showFollowers(): void;
    hideFollowers(): void;
    gatherFollowers(): void;
    areFollowersGathering(): boolean;
    areFollowersGathered(): boolean;
}
declare class Game_Follower extends Game_Character {
    initialize(memberIndex: number): void;
    refresh(): void;
    actor(): Game_Actor;
    isVisible(): boolean;
    isGathered(): boolean;
    update(): void;
    chaseCharacter(character: Game_Character): void;
}
declare class Game_Followers {
    initialize(): void;
    setup(): void;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    data(): Game_Follower[];
    reverseData(): Game_Follower[];
    follower(index: number): Game_Follower;
    refresh(): void;
    update(): void;
    updateMove(): void;
    jumpAll(): void;
    synchronize(x: number, y: number, d: number): void;
    gather(): void;
    areGathering(): boolean;
    visibleFollowers(): Game_Follower[];
    areMoving(): boolean;
    areGathered(): boolean;
    isSomeoneCollided(x: number, y: number): boolean;
}
declare class Game_Vehicle extends Game_Character {
    initialize(type: string): void;
    initMembers(): void;
    isBoat(): boolean;
    isShip(): boolean;
    isAirship(): boolean;
    resetDirection(): void;
    initMoveSpeed(): void;
    vehicle(): Data_System_Vehicle | null;
    loadSystemSettings(): void;
    refresh(): void;
    setLocation(mapId: number, x: number, y: number): void;
    pos(x: number, y: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;
    getOn(): void;
    getOff(): void;
    setBgm(bgm: AudioFile): void;
    playBgm(): void;
    syncWithPlayer(): void;
    screenY(): number;
    shadowX(): number;
    shadowY(): number;
    shadowOpacity(): number;
    canMove(): boolean;
    update(): void;
    updateAirship(): void;
    updateAirshipAltitude(): void;
    maxAltitude(): number;
    isLowest(): boolean;
    isHighest(): boolean;
    isTakeoffOk(): boolean;
    isLandOk(x: number, y: number, d: number): boolean;
}
declare class Game_Event extends Game_Character {
    initialize(mapId: number, eventId: number): void;
    initMembers(): void;
    eventId(): number;
    event(): Data_Event;
    page(): Data_Event_Page;
    list(): EventCommand[];
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithPlayerCharacters(x: number, y: number): boolean;
    lock(): void;
    unlock(): void;
    updateStop(): void;
    updateSelfMovement(): void;
    stopCountThreshold(): number;
    moveTypeRandom(): void;
    moveTypeTowardPlayer(): void;
    isNearThePlayer(): boolean;
    moveTypeCustom(): void;
    isStarting(): boolean;
    clearStartingFlag(): void;
    isTriggerIn(triggers: number[]): boolean;
    start(): void;
    erase(): void;
    refresh(): void;
    findProperPageIndex(): number;
    meetsConditions(page: Data_Event_Page): boolean;
    setupPage(): void;
    clearPageSettings(): void;
    setupPageSettings(): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    checkEventTriggerTouch(x: number, y: number): boolean;
    checkEventTriggerAuto(): void;
    update(): void;
    updateParallel(): void;
    locate(x: number, y: number): void;
    forceMoveRoute(moveRoute: MoveRoute): void;
}
declare class Game_Interpreter {
    initialize(depth?: number): void;

    checkOverflow(): void;

    clear(): void;

    setup(list: EventCommand[], eventId?: number): void;

    loadImages(): void;

    eventId(): number;

    isOnCurrentMap(): boolean;

    setupReservedCommonEvent(): boolean;

    isRunning(): boolean;

    update(): void;

    updateChild(): boolean;

    updateWait(): boolean;

    updateWaitCount(): boolean;

    updateWaitMode(): boolean;

    setWaitMode(waitMode: string): void;

    wait(duration: number): void;

    fadeSpeed(): number;

    executeCommand(): boolean;

    checkFreeze(): boolean;

    terminate(): void;

    skipBranch(): void;

    currentCommand(): EventCommand;

    nextEventCode(): number;

    iterateActorId(param: number, callback: (actor: Game_Actor) => void): void;

    iterateActorEx(param1: number, param2: number, callback: (actor: Game_Actor) => void): void;

    iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;

    iterateEnemyIndex(param: number, callback: (enemy: Game_Enemy) => void): void;

    iterateBattler(param1: number, param2: number, callback: (battler: Game_Battler) => void): void;

    character(param: number): Game_CharacterBase | null;

    operateValue(operation: number, operandType: number, operand: number): number;

    changeHp(target: Game_Battler, value: number, allowDeath: boolean): void;

    // Event commands
    command101(params: any[]): boolean; // Show Text
    command102(params: any[]): boolean; // Show Choices
    setupChoices(params: any[]): void;

    command402(params: any[]): boolean; // When [**]
    command403(): boolean; // When Cancel
    command103(params: any[]): boolean; // Input Number
    setupNumInput(params: any[]): void;

    command104(params: any[]): boolean; // Select Item
    setupItemChoice(params: any[]): void;

    command105(params: any[]): boolean; // Show Scrolling Text
    command108(params: any[]): boolean; // Comment
    command109(): boolean; // Skip
    command111(params: any[]): boolean; // Conditional Branch
    command411(): boolean; // Else
    command112(): boolean; // Loop
    command413(): boolean; // Repeat Above
    command113(): boolean; // Break Loop
    command115(): boolean; // Exit Event Processing
    command117(params: any[]): boolean; // Common Event
    setupChild(list: EventCommand[], eventId: number): void;

    command118(): boolean; // Label
    command119(params: any[]): boolean; // Jump to Label
    jumpTo(index: number): void;

    command121(params: any[]): boolean; // Control Switches
    command122(params: any[]): boolean; // Control Variables
    gameDataOperand(type: number, param1: number, param2: number): any;

    operateVariable(variableId: number, operationType: number, value: any): void;

    command123(params: any[]): boolean; // Control Self Switch
    command124(params: any[]): boolean; // Control Timer
    command125(params: any[]): boolean; // Change Gold
    command126(params: any[]): boolean; // Change Items
    command127(params: any[]): boolean; // Change Weapons
    command128(params: any[]): boolean; // Change Armors
    command129(params: any[]): boolean; // Change Party Member
    command132(params: any[]): boolean; // Change Battle BGM
    command133(params: any[]): boolean; // Change Victory ME
    command134(params: any[]): boolean; // Change Save Access
    command135(params: any[]): boolean; // Change Menu Access
    command136(params: any[]): boolean; // Change Encounter
    command137(params: any[]): boolean; // Change Formation Access
    command138(params: any[]): boolean; // Change Window Color
    command139(params: any[]): boolean; // Change Defeat ME
    command140(params: any[]): boolean; // Change Vehicle BGM
    command201(params: any[]): boolean; // Transfer Player
    command202(params: any[]): boolean; // Set Vehicle Location
    command203(params: any[]): boolean; // Set Event Location
    command204(params: any[]): boolean; // Scroll Map
    command205(params: any[]): boolean; // Set Movement Route
    command206(): boolean; // Get on/off Vehicle
    command211(params: any[]): boolean; // Change Transparency
    command212(params: any[]): boolean; // Show Animation
    command213(params: any[]): boolean; // Show Balloon Icon
    command214(): boolean; // Erase Event
    command216(params: any[]): boolean; // Change Player Followers
    command217(): boolean; // Gather Followers
    command221(): boolean; // Fadeout Screen
    command222(): boolean; // Fadein Screen
    command223(params: any[]): boolean; // Tint Screen
    command224(params: any[]): boolean; // Flash Screen
    command225(params: any[]): boolean; // Shake Screen
    command230(params: any[]): boolean; // Wait
    command231(params: any[]): boolean; // Show Picture
    command232(params: any[]): boolean; // Move Picture
    picturePoint(params: any[]): Point;

    command233(params: any[]): boolean; // Rotate Picture
    command234(params: any[]): boolean; // Tint Picture
    command235(params: any[]): boolean; // Erase Picture
    command236(params: any[]): boolean; // Set Weather Effect
    command241(params: any[]): boolean; // Play BGM
    command242(params: any[]): boolean; // Fadeout BGM
    command243(): boolean; // Save BGM
    command244(): boolean; // Resume BGM
    command245(params: any[]): boolean; // Play BGS
    command246(params: any[]): boolean; // Fadeout BGS
    command249(params: any[]): boolean; // Play ME
    command250(params: any[]): boolean; // Play SE
    command251(): boolean; // Stop SE
    command261(params: any[]): boolean; // Play Movie
    videoFileExt(): string;

    command281(params: any[]): boolean; // Change Map Name Display
    command282(params: any[]): boolean; // Change Tileset
    command283(params: any[]): boolean; // Change Battle Background
    command284(params: any[]): boolean; // Change Parallax
    command285(params: any[]): boolean; // Get Location Info
    command301(params: any[]): boolean; // Battle Processing
    command601(): boolean; // If Win
    command602(): boolean; // If Escape
    command603(): boolean; // If Lose
    command302(params: any[]): boolean; // Shop Processing
    command303(params: any[]): boolean; // Name Input Processing
    command311(params: any[]): boolean; // Change HP
    command312(params: any[]): boolean; // Change MP
    command326(params: any[]): boolean; // Change TP
    command313(params: any[]): boolean; // Change State
    command314(params: any[]): boolean; // Recover All
    command315(params: any[]): boolean; // Change EXP
    command316(params: any[]): boolean; // Change Level
    command317(params: any[]): boolean; // Change Parameter
    command318(params: any[]): boolean; // Change Skill
    command319(params: any[]): boolean; // Change Equipment
    command320(params: any[]): boolean; // Change Name
    command321(params: any[]): boolean; // Change Class
    command322(params: any[]): boolean; // Change Actor Images
    command323(params: any[]): boolean; // Change Vehicle Image
    command324(params: any[]): boolean; // Change Nickname
    command325(params: any[]): boolean; // Change Profile
    command331(params: any[]): boolean; // Change Enemy HP
    command332(params: any[]): boolean; // Change Enemy MP
    command342(params: any[]): boolean; // Change Enemy TP
    command333(params: any[]): boolean; // Change Enemy State
    command334(params: any[]): boolean; // Enemy Recover All
    command335(params: any[]): boolean; // Enemy Appear
    command336(params: any[]): boolean; // Enemy Transform
    command337(params: any[]): boolean; // Show Battle Animation
    command339(params: any[]): boolean; // Force Action
    command340(): boolean; // Abort Battle
    command351(): boolean; // Open Menu Screen
    command352(): boolean; // Open Save Screen
    command353(): boolean; // Game Over
    command354(): boolean; // Return to Title Screen
    command355(): boolean; // Script
    command356(params: any[]): boolean; // Plugin Command MV (deprecated)
    pluginCommand(command: string, args: string[]): void;

    command357(params: any[]): boolean; // Plugin Command
}

declare class Scene_Base extends Stage {
    _started: boolean;
    _active: boolean;
    _fadeSign: number;
    _fadeDuration: number;
    _fadeWhite: number;
    _fadeOpacity: number;
    _colorFilter: ColorFilter;
    _windowLayer: WindowLayer;

    initialize(): void;
    create(): void;
    isActive(): boolean;
    isReady(): boolean;
    start(): void;
    update(): void;
    stop(): void;
    isStarted(): boolean;
    isBusy(): boolean;
    isFading(): boolean;
    terminate(): void;
    createWindowLayer(): void;
    addWindow(window: Window_Base): void;
    startFadeIn(duration?: number, white?: boolean): void;
    startFadeOut(duration?: number, white?: boolean): void;
    createColorFilter(): void;
    updateColorFilter(): void;
    updateFade(): void;
    updateChildren(): void;
    popScene(): void;
    checkGameover(): void;
    fadeOutAll(): void;
    fadeSpeed(): number;
    slowFadeSpeed(): number;
    scaleSprite(sprite: Sprite): void;
    centerSprite(sprite: Sprite): void;
    isBottomHelpMode(): boolean;
    isBottomButtonMode(): boolean;
    isRightInputMode(): boolean;
    mainCommandWidth(): number;
    buttonAreaTop(): number;
    buttonAreaBottom(): number;
    buttonAreaHeight(): number;
    buttonY(): number;
    calcWindowHeight(numLines: number, selectable: boolean): number;
    requestAutosave(): void;
    isAutosaveEnabled(): boolean;
    executeAutosave(): void;
    onAutosaveSuccess(): void;
    onAutosaveFailure(): void;
}

declare class Scene_Boot extends Scene_Base {
    _databaseLoaded: boolean;

    initialize(): void;
    create(): void;
    isReady(): boolean;
    onDatabaseLoaded(): void;
    setEncryptionInfo(): void;
    loadSystemImages(): void;
    loadPlayerData(): void;
    loadGameFonts(): void;
    isPlayerDataLoaded(): boolean;
    start(): void;
    startNormalGame(): void;
    resizeScreen(): void;
    adjustBoxSize(): void;
    adjustWindow(): void;
    screenScale(): number;
    updateDocumentTitle(): void;
    checkPlayerLocation(): void;
}

declare class Scene_Splash extends Scene_Base {
    _waitCount: number;
    _backSprite: Sprite;

    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    stop(): void;
    createBackground(): void;
    adjustBackground(): void;
    isEnabled(): boolean;
    initWaitCount(): void;
    updateWaitCount(): boolean;
    checkSkip(): void;
    gotoTitle(): void;
}

declare class Scene_Title extends Scene_Base {
    _commandWindow: Window_TitleCommand;
    _backSprite1: Sprite;
    _backSprite2: Sprite;
    _gameTitleSprite: Sprite;

    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    isBusy(): boolean;
    terminate(): void;
    createBackground(): void;
    createForeground(): void;
    drawGameTitle(): void;
    adjustBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    commandNewGame(): void;
    commandContinue(): void;
    commandOptions(): void;
    playTitleMusic(): void;
}

declare class Scene_Message extends Scene_Base {
    _messageWindow: Window_Message;
    _scrollTextWindow: Window_ScrollText;
    _goldWindow: Window_Gold;
    _nameBoxWindow: Window_NameBox;
    _choiceListWindow: Window_ChoiceList;
    _numberInputWindow: Window_NumberInput;
    _eventItemWindow: Window_EventItem;

    initialize(): void;
    isMessageWindowClosing(): boolean;
    createAllWindows(): void;
    createMessageWindow(): void;
    messageWindowRect(): Rectangle;
    createScrollTextWindow(): void;
    scrollTextWindowRect(): Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): Rectangle;
    createNameBoxWindow(): void;
    createChoiceListWindow(): void;
    createNumberInputWindow(): void;
    createEventItemWindow(): void;
    eventItemWindowRect(): Rectangle;
    associateWindows(): void;
    cancelMessageWait(): void;
}

declare class Scene_Map extends Scene_Message {
    _waitCount: number;
    _encounterEffectDuration: number;
    _mapLoaded: boolean;
    _touchCount: number;
    _menuEnabled: boolean;
    _transfer: boolean;
    _lastMapWasNull: boolean;
    _spriteset: Spriteset_Map;
    _mapNameWindow: Window_MapName;
    _menuButton: Sprite_Button;
    menuCalling: boolean;

    initialize(): void;
    create(): void;
    isReady(): boolean;
    onMapLoaded(): void;
    onTransfer(): void;
    start(): void;
    onTransferEnd(): void;
    shouldAutosave(): boolean;
    update(): void;
    updateMainMultiply(): void;
    updateMain(): void;
    isPlayerActive(): boolean;
    isFastForward(): boolean;
    stop(): void;
    isBusy(): boolean;
    terminate(): void;
    needsFadeIn(): boolean;
    needsSlowFadeOut(): boolean;
    updateWaitCount(): boolean;
    updateDestination(): void;
    updateMenuButton(): void;
    hideMenuButton(): void;
    updateMapNameWindow(): void;
    isMenuEnabled(): boolean;
    isMapTouchOk(): boolean;
    processMapTouch(): void;
    isAnyButtonPressed(): boolean;
    onMapTouch(): void;
    isSceneChangeOk(): boolean;
    updateScene(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    createAllWindows(): void;
    createMapNameWindow(): void;
    mapNameWindowRect(): Rectangle;
    createButtons(): void;
    createMenuButton(): void;
    updateTransferPlayer(): void;
    updateEncounter(): void;
    updateCallMenu(): void;
    isMenuCalled(): boolean;
    callMenu(): void;
    updateCallDebug(): void;
    isDebugCalled(): boolean;
    fadeInForTransfer(): void;
    fadeOutForTransfer(): void;
    launchBattle(): void;
    stopAudioOnBattleStart(): void;
    startEncounterEffect(): void;
    updateEncounterEffect(): void;
    snapForBattleBackground(): void;
    startFlashForEncounter(duration: number): void;
    encounterEffectSpeed(): number;
}

declare class Scene_MenuBase extends Scene_Base {
    _actor: Game_Actor;
    _backgroundFilter: PIXI.filters.BlurFilter;
    _backgroundSprite: Sprite;
    _helpWindow: Window_Help;
    _cancelButton: Sprite_Button;
    _pageupButton: Sprite_Button;
    _pagedownButton: Sprite_Button;

    initialize(): void;
    create(): void;
    update(): void;
    helpAreaTop(): number;
    helpAreaBottom(): number;
    helpAreaHeight(): number;
    mainAreaTop(): number;
    mainAreaBottom(): number;
    mainAreaHeight(): number;
    actor(): Game_Actor;
    updateActor(): void;
    createBackground(): void;
    setBackgroundOpacity(opacity: number): void;
    createHelpWindow(): void;
    helpWindowRect(): Rectangle;
    createButtons(): void;
    needsCancelButton(): boolean;
    createCancelButton(): void;
    needsPageButtons(): boolean;
    createPageButtons(): void;
    updatePageButtons(): void;
    arePageButtonsEnabled(): boolean;
    nextActor(): void;
    previousActor(): void;
    onActorChange(): void;
}

declare class Scene_Menu extends Scene_MenuBase {
    _commandWindow: Window_MenuCommand;
    _goldWindow: Window_Gold;
    _statusWindow: Window_MenuStatus;

    initialize(): void;
    helpAreaHeight(): number;
    create(): void;
    start(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    commandOptions(): void;
    commandSave(): void;
    commandGameEnd(): void;
    onPersonalOk(): void;
    onPersonalCancel(): void;
    onFormationOk(): void;
    onFormationCancel(): void;
}

declare class Scene_ItemBase extends Scene_MenuBase {
    _actorWindow: Window_MenuActor;
    _itemWindow: Window_Selectable;

    initialize(): void;
    create(): void;
    createActorWindow(): void;
    actorWindowRect(): Rectangle;
    item(): any;
    user(): Game_Actor;
    isCursorLeft(): boolean;
    showActorWindow(): void;
    hideActorWindow(): void;
    isActorWindowActive(): boolean;
    onActorOk(): void;
    onActorCancel(): void;
    determineItem(): void;
    useItem(): void;
    activateItemWindow(): void;
    itemTargetActors(): Game_Actor[];
    canUse(): boolean;
    isItemEffectsValid(): boolean;
    applyItem(): void;
    checkCommonEvent(): void;
}

declare class Scene_Item extends Scene_ItemBase {
    _categoryWindow: Window_ItemCategory;
    _itemWindow: Window_ItemList;

    initialize(): void;
    create(): void;
    createCategoryWindow(): void;
    categoryWindowRect(): Rectangle;
    createItemWindow(): void;
    itemWindowRect(): Rectangle;
    user(): Game_Actor;
    onCategoryOk(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
}

declare class Scene_Skill extends Scene_ItemBase {
    _skillTypeWindow: Window_SkillType;
    _statusWindow: Window_SkillStatus;
    _itemWindow: Window_SkillList;

    initialize(): void;
    create(): void;
    start(): void;
    createSkillTypeWindow(): void;
    skillTypeWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createItemWindow(): void;
    itemWindowRect(): Rectangle;
    needsPageButtons(): boolean;
    arePageButtonsEnabled(): boolean;
    refreshActor(): void;
    user(): Game_Actor;
    commandSkill(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
    onActorChange(): void;
}

declare class Scene_Equip extends Scene_MenuBase {
    _statusWindow: Window_EquipStatus;
    _commandWindow: Window_EquipCommand;
    _slotWindow: Window_EquipSlot;
    _itemWindow: Window_EquipItem;

    initialize(): void;
    create(): void;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    createSlotWindow(): void;
    slotWindowRect(): Rectangle;
    createItemWindow(): void;
    itemWindowRect(): Rectangle;
    statusWidth(): number;
    needsPageButtons(): boolean;
    arePageButtonsEnabled(): boolean;
    refreshActor(): void;
    commandEquip(): void;
    commandOptimize(): void;
    commandClear(): void;
    onSlotOk(): void;
    onSlotCancel(): void;
    onItemOk(): void;
    executeEquipChange(): void;
    onItemCancel(): void;
    onActorChange(): void;
    hideItemWindow(): void;
}

declare class Scene_Status extends Scene_MenuBase {
    _profileWindow: Window_Help;
    _statusWindow: Window_Status;
    _statusParamsWindow: Window_StatusParams;
    _statusEquipWindow: Window_StatusEquip;

    initialize(): void;
    create(): void;
    helpAreaHeight(): number;
    createProfileWindow(): void;
    profileWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createStatusParamsWindow(): void;
    statusParamsWindowRect(): Rectangle;
    createStatusEquipWindow(): void;
    statusEquipWindowRect(): Rectangle;
    statusParamsWidth(): number;
    statusParamsHeight(): number;
    profileHeight(): number;
    start(): void;
    needsPageButtons(): boolean;
    refreshActor(): void;
    onActorChange(): void;
}

declare class Scene_Options extends Scene_MenuBase {
    _optionsWindow: Window_Options;

    initialize(): void;
    create(): void;
    terminate(): void;
    createOptionsWindow(): void;
    optionsWindowRect(): Rectangle;
    maxCommands(): number;
    maxVisibleCommands(): number;
}

declare class Scene_File extends Scene_MenuBase {
    _helpWindow: Window_Help;
    _listWindow: Window_SavefileList;

    initialize(): void;
    create(): void;
    helpAreaHeight(): number;
    start(): void;
    savefileId(): number;
    isSavefileEnabled(savefileId: number): boolean;
    createHelpWindow(): void;
    helpWindowRect(): Rectangle;
    createListWindow(): void;
    listWindowRect(): Rectangle;
    mode(): string;
    needsAutosave(): boolean;
    activateListWindow(): void;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
}

declare class Scene_Save extends Scene_File {
    initialize(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
    executeSave(savefileId: number): void;
    onSaveSuccess(): void;
    onSaveFailure(): void;
}

declare class Scene_Load extends Scene_File {
    _loadSuccess: boolean;

    initialize(): void;
    terminate(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
    executeLoad(savefileId: number): void;
    onLoadSuccess(): void;
    onLoadFailure(): void;
    reloadMapIfUpdated(): void;
}

declare class Scene_GameEnd extends Scene_MenuBase {
    _commandWindow: Window_GameEnd;

    initialize(): void;
    create(): void;
    stop(): void;
    createBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    commandToTitle(): void;
}

declare class Scene_Shop extends Scene_MenuBase {
    _goods: any[];
    _purchaseOnly: boolean;
    _item: any;
    _goldWindow: Window_Gold;
    _commandWindow: Window_ShopCommand;
    _dummyWindow: Window_Base;
    _numberWindow: Window_ShopNumber;
    _statusWindow: Window_ShopStatus;
    _buyWindow: Window_ShopBuy;
    _categoryWindow: Window_ItemCategory;
    _sellWindow: Window_ShopSell;

    initialize(): void;
    prepare(goods: any[], purchaseOnly: boolean): void;
    create(): void;
    createGoldWindow(): void;
    goldWindowRect(): Rectangle;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    createDummyWindow(): void;
    dummyWindowRect(): Rectangle;
    createNumberWindow(): void;
    numberWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createBuyWindow(): void;
    buyWindowRect(): Rectangle;
    createCategoryWindow(): void;
    categoryWindowRect(): Rectangle;
    createSellWindow(): void;
    sellWindowRect(): Rectangle;
    statusWidth(): number;
    activateBuyWindow(): void;
    activateSellWindow(): void;
    commandBuy(): void;
    commandSell(): void;
    onBuyOk(): void;
    onBuyCancel(): void;
    onCategoryOk(): void;
    onCategoryCancel(): void;
    onSellOk(): void;
    onSellCancel(): void;
    onNumberOk(): void;
    onNumberCancel(): void;
    doBuy(number: number): void;
    doSell(number: number): void;
    endNumberInput(): void;
    maxBuy(): number;
    maxSell(): number;
    money(): number;
    currencyUnit(): string;
    buyingPrice(): number;
    sellingPrice(): number;
}

declare class Scene_Name extends Scene_MenuBase {
    _actorId: number;
    _maxLength: number;
    _actor: Game_Actor;
    _editWindow: Window_NameEdit;
    _inputWindow: Window_NameInput;

    initialize(): void;
    prepare(actorId: number, maxLength: number): void;
    create(): void;
    start(): void;
    createEditWindow(): void;
    editWindowRect(): Rectangle;
    createInputWindow(): void;
    inputWindowRect(): Rectangle;
    onInputOk(): void;
}

declare class Scene_Debug extends Scene_MenuBase {
    _rangeWindow: Window_DebugRange;
    _editWindow: Window_DebugEdit;
    _debugHelpWindow: Window_Base;

    initialize(): void;
    create(): void;
    needsCancelButton(): boolean;
    createRangeWindow(): void;
    rangeWindowRect(): Rectangle;
    createEditWindow(): void;
    editWindowRect(): Rectangle;
    createDebugHelpWindow(): void;
    debugHelpWindowRect(): Rectangle;
    onRangeOk(): void;
    onEditCancel(): void;
    refreshHelpWindow(): void;
    helpText(): string;
}

declare class Scene_Battle extends Scene_Message {
    _spriteset: Spriteset_Battle;
    _statusWindow: Window_BattleStatus;
    _partyCommandWindow: Window_PartyCommand;
    _actorCommandWindow: Window_ActorCommand;
    _logWindow: Window_BattleLog;
    _helpWindow: Window_Help;
    _skillWindow: Window_BattleSkill;
    _itemWindow: Window_BattleItem;
    _actorWindow: Window_BattleActor;
    _enemyWindow: Window_BattleEnemy;
    _cancelButton: Sprite_Button;

    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    updateVisibility(): void;
    updateBattleProcess(): void;
    isTimeActive(): boolean;
    isAnyInputWindowActive(): boolean;
    changeInputWindow(): void;
    stop(): void;
    terminate(): void;
    shouldAutosave(): boolean;
    needsSlowFadeOut(): boolean;
    updateLogWindowVisibility(): void;
    updateStatusWindowVisibility(): void;
    shouldOpenStatusWindow(): boolean;
    updateStatusWindowPosition(): void;
    statusWindowX(): number;
    updateInputWindowVisibility(): void;
    needsInputWindowChange(): boolean;
    updateCancelButton(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    createAllWindows(): void;
    createLogWindow(): void;
    logWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createPartyCommandWindow(): void;
    partyCommandWindowRect(): Rectangle;
    createActorCommandWindow(): void;
    actorCommandWindowRect(): Rectangle;
    createHelpWindow(): void;
    helpWindowRect(): Rectangle;
    createSkillWindow(): void;
    skillWindowRect(): Rectangle;
    createItemWindow(): void;
    itemWindowRect(): Rectangle;
    createActorWindow(): void;
    actorWindowRect(): Rectangle;
    createEnemyWindow(): void;
    enemyWindowRect(): Rectangle;
    helpAreaTop(): number;
    helpAreaBottom(): number;
    helpAreaHeight(): number;
    buttonAreaTop(): number;
    windowAreaHeight(): number;
    createButtons(): void;
    createCancelButton(): void;
    closeCommandWindows(): void;
    hideSubInputWindows(): void;
    startPartyCommandSelection(): void;
    commandFight(): void;
    commandEscape(): void;
    startActorCommandSelection(): void;
    commandAttack(): void;
    commandSkill(): void;
    commandGuard(): void;
    commandItem(): void;
    commandCancel(): void;
    selectNextCommand(): void;
    selectPreviousCommand(): void;
    startActorSelection(): void;
    onActorOk(): void;
    onActorCancel(): void;
    startEnemySelection(): void;
    onEnemyOk(): void;
    onEnemyCancel(): void;
    onSkillOk(): void;
    onSkillCancel(): void;
    onItemOk(): void;
    onItemCancel(): void;
    onSelectAction(): void;
    endCommandSelection(): void;
}

declare class Scene_Gameover extends Scene_Base {
    _backSprite: Sprite;

    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    stop(): void;
    terminate(): void;
    playGameoverMusic(): void;
    createBackground(): void;
    adjustBackground(): void;
    isTriggered(): boolean;
    gotoTitle(): void;
}

declare class Sprite_Clickable extends Sprite {
    protected _pressed: boolean;
    protected _hovered: boolean;

    initialize(...args: any[]): void;
    update(): void;
    processTouch(): void;
    isPressed(): boolean;
    isClickEnabled(): boolean;
    isBeingTouched(): boolean;
    hitTest(x: number, y: number): boolean;
    onMouseEnter(): void;
    onMouseExit(): void;
    onPress(): void;
    onClick(): void;
}

declare class Sprite_Button extends Sprite_Clickable {
    protected _buttonType: string;
    protected _clickHandler: (() => void) | null;
    protected _coldFrame: Rectangle | null;
    protected _hotFrame: Rectangle | null;

    initialize(buttonType: string): void;
    setupFrames(): void;
    blockWidth(): number;
    blockHeight(): number;
    loadButtonImage(): void;
    buttonData(): { x: number; w: number };
    update(): void;
    checkBitmap(): void;
    updateFrame(): void;
    updateOpacity(): void;
    setColdFrame(x: number, y: number, width: number, height: number): void;
    setHotFrame(x: number, y: number, width: number, height: number): void;
    setClickHandler(method: () => void): void;
    onClick(): void;
}

declare class Sprite_Character extends Sprite {
    protected _character: Game_Character | null;
    protected _balloonDuration: number;
    protected _tilesetId: number;
    protected _upperBody: Sprite | null;
    protected _lowerBody: Sprite | null;
    protected _tileId: number;
    protected _characterName: string;
    protected _characterIndex: number;
    protected _isBigCharacter: boolean;
    protected _bushDepth: number;

    initialize(character: Game_Character): void;
    initMembers(): void;
    setCharacter(character: Game_Character): void;
    checkCharacter(character: Game_Character): boolean;
    update(): void;
    updateVisibility(): void;
    isTile(): boolean;
    isObjectCharacter(): boolean;
    isEmptyCharacter(): boolean;
    tilesetBitmap(tileId: number): Bitmap;
    updateBitmap(): void;
    isImageChanged(): boolean;
    setTileBitmap(): void;
    setCharacterBitmap(): void;
    updateFrame(): void;
    updateTileFrame(): void;
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): number;
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
    updatePosition(): void;
    updateOther(): void;
}

declare class Sprite_Battler extends Sprite_Clickable {
    protected _battler: Game_Battler | null;
    protected _damages: Sprite_Damage[];
    protected _homeX: number;
    protected _homeY: number;
    protected _offsetX: number;
    protected _offsetY: number;
    protected _targetOffsetX: number;
    protected _targetOffsetY: number;
    protected _movementDuration: number;
    protected _selectionEffectCount: number;

    initialize(battler?: Game_Battler): void;
    initMembers(): void;
    setBattler(battler: Game_Battler | null): void;
    checkBattler(battler: Game_Battler): boolean;
    mainSprite(): Sprite;
    setHome(x: number, y: number): void;
    update(): void;
    updateVisibility(): void;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupDamagePopup(): void;
    createDamageSprite(): void;
    destroyDamageSprite(sprite: Sprite_Damage): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: number, y: number, duration: number): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    isMoving(): boolean;
    inHomePosition(): boolean;
    onMouseEnter(): void;
    onPress(): void;
    onClick(): void;
}

declare class Sprite_Actor extends Sprite_Battler {
    static MOTIONS: {
        [key: string]: { index: number; loop: boolean };
    };

    protected _actor: Game_Actor | null;
    protected _battlerName: string;
    protected _motion: { index: number; loop: boolean } | null;
    protected _motionCount: number;
    protected _pattern: number;
    protected _mainSprite: Sprite;
    protected _shadowSprite: Sprite;
    protected _weaponSprite: Sprite_Weapon;
    protected _stateSprite: Sprite_StateOverlay;

    initialize(battler?: Game_Actor): void;
    initMembers(): void;
    mainSprite(): Sprite;
    createMainSprite(): void;
    createShadowSprite(): void;
    createWeaponSprite(): void;
    createStateSprite(): void;
    setBattler(battler: Game_Actor | null): void;
    moveToStartPosition(): void;
    setActorHome(index: number): void;
    update(): void;
    updateShadow(): void;
    updateMain(): void;
    setupMotion(): void;
    setupWeaponAnimation(): void;
    startMotion(motionType: string): void;
    updateTargetPosition(): void;
    shouldStepForward(): boolean;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updateMotion(): void;
    updateMotionCount(): void;
    motionSpeed(): number;
    refreshMotion(): void;
    startEntryMotion(): void;
    stepForward(): void;
    stepBack(): void;
    retreat(): void;
    onMoveEnd(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}

declare class Sprite_Enemy extends Sprite_Battler {
    protected _enemy: Game_Enemy | null;
    protected _appeared: boolean;
    protected _battlerName: string | null;
    protected _battlerHue: number;
    protected _effectType: string | null;
    protected _effectDuration: number;
    protected _shake: number;
    protected _stateIconSprite: Sprite_StateIcon;

    initialize(battler?: Game_Enemy): void;
    initMembers(): void;
    createStateIconSprite(): void;
    setBattler(battler: Game_Enemy | null): void;
    update(): void;
    updateBitmap(): void;
    loadBitmap(name: string): void;
    setHue(hue: number): void;
    updateFrame(): void;
    updatePosition(): void;
    updateStateSprite(): void;
    initVisibility(): void;
    setupEffect(): void;
    startEffect(effectType: string): void;
    startAppear(): void;
    startDisappear(): void;
    startWhiten(): void;
    startBlink(): void;
    startCollapse(): void;
    startBossCollapse(): void;
    startInstantCollapse(): void;
    updateEffect(): void;
    isEffecting(): boolean;
    revertToNormal(): void;
    updateWhiten(): void;
    updateBlink(): void;
    updateAppear(): void;
    updateDisappear(): void;
    updateCollapse(): void;
    updateBossCollapse(): void;
    updateInstantCollapse(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}

declare class Sprite_Animation extends Sprite {
    protected _targets: any[];
    protected _animation: any;
    protected _mirror: boolean;
    protected _delay: number;
    protected _previous: Sprite_Animation | null;
    protected _effect: any;
    protected _handle: any;
    protected _playing: boolean;
    protected _started: boolean;
    protected _frameIndex: number;
    protected _maxTimingFrames: number;
    protected _flashColor: number[];
    protected _flashDuration: number;
    protected _viewportSize: number;

    initialize(): void;
    initMembers(): void;
    destroy(options?: any): void;
    setup(targets: any[], animation: any, mirror: boolean, delay: number, previous: Sprite_Animation | null): void;
    update(): void;
    canStart(): boolean;
    shouldWaitForPrevious(): boolean;
    updateEffectGeometry(): void;
    updateMain(): void;
    processSoundTimings(): void;
    processFlashTimings(): void;
    checkEnd(): void;
    updateFlash(): void;
    isPlaying(): boolean;
    setRotation(x: number, y: number, z: number): void;
    _render(renderer: any): void;
    setProjectionMatrix(renderer: any): void;
    setCameraMatrix(renderer: any): void;
    setViewport(renderer: any): void;
    targetPosition(renderer: any): Point;
    targetSpritePosition(sprite: Sprite): Point;
    resetViewport(renderer: any): void;
    onBeforeRender(renderer: any): void;
    onAfterRender(renderer: any): void;
}

declare class Sprite_AnimationMV extends Sprite {
    protected _targets: any[];
    protected _animation: any;
    protected _mirror: boolean;
    protected _delay: number;
    protected _rate: number;
    protected _duration: number;
    protected _flashColor: number[];
    protected _flashDuration: number;
    protected _screenFlashDuration: number;
    protected _hidingDuration: number;
    protected _hue1: number;
    protected _hue2: number;
    protected _bitmap1: Bitmap | null;
    protected _bitmap2: Bitmap | null;
    protected _cellSprites: Sprite[];
    protected _screenFlashSprite: ScreenSprite | null;

    initialize(): void;
    initMembers(): void;
    setup(targets: any[], animation: any, mirror: boolean, delay: number): void;
    setupRate(): void;
    setupDuration(): void;
    update(): void;
    updateFlash(): void;
    updateScreenFlash(): void;
    absoluteX(): number;
    absoluteY(): number;
    updateHiding(): void;
    isPlaying(): boolean;
    loadBitmaps(): void;
    isReady(): boolean;
    createCellSprites(): void;
    createScreenFlashSprite(): void;
    updateMain(): void;
    updatePosition(): void;
    updateFrame(): void;
    currentFrameIndex(): number;
    updateAllCellSprites(frame: any[]): void;
    updateCellSprite(sprite: Sprite, cell: any[]): void;
    processTimingData(timing: any): void;
    startFlash(color: number[], duration: number): void;
    startScreenFlash(color: number[], duration: number): void;
    startHiding(duration: number): void;
    onEnd(): void;
}

declare class Sprite_Battleback extends TilingSprite {
    initialize(type: number): void;
    adjustPosition(): void;
    battleback1Bitmap(): Bitmap;
    battleback2Bitmap(): Bitmap;
    battleback1Name(): string;
    battleback2Name(): string;
    overworldBattleback1Name(): string;
    overworldBattleback2Name(): string;
    normalBattleback1Name(): string;
    normalBattleback2Name(): string;
    terrainBattleback1Name(type: number): string | null;
    terrainBattleback2Name(type: number): string | null;
    defaultBattleback1Name(): string;
    defaultBattleback2Name(): string;
    shipBattleback1Name(): string;
    shipBattleback2Name(): string;
    autotileType(z: number): number;
}

declare class Sprite_Damage extends Sprite {
    protected _duration: number;
    protected _flashColor: number[];
    protected _flashDuration: number;
    protected _colorType: number;

    initialize(): void;
    destroy(options?: any): void;
    setup(target: Game_Battler): void;
    setupCriticalEffect(): void;
    fontFace(): string;
    fontSize(): number;
    damageColor(): string;
    outlineColor(): string;
    outlineWidth(): number;
    createMiss(): void;
    createDigits(value: number): void;
    createChildSprite(width: number, height: number): Sprite;
    createBitmap(width: number, height: number): Bitmap;
    update(): void;
    updateChild(sprite: Sprite): void;
    updateFlash(): void;
    updateOpacity(): void;
    isPlaying(): boolean;
}

declare class Sprite_Gauge extends Sprite {
    protected _battler: Game_Battler | null;
    protected _statusType: string;
    protected _value: number;
    protected _maxValue: number;
    protected _targetValue: number;
    protected _targetMaxValue: number;
    protected _duration: number;
    protected _flashingCount: number;

    initialize(): void;
    initMembers(): void;
    destroy(options?: any): void;
    createBitmap(): void;
    bitmapWidth(): number;
    bitmapHeight(): number;
    textHeight(): number;
    gaugeHeight(): number;
    gaugeX(): number;
    labelY(): number;
    labelFontFace(): string;
    labelFontSize(): number;
    valueFontFace(): string;
    valueFontSize(): number;
    setup(battler: Game_Battler, statusType: string): void;
    update(): void;
    updateBitmap(): void;
    updateTargetValue(value: number, maxValue: number): void;
    smoothness(): number;
    updateGaugeAnimation(): void;
    updateFlashing(): void;
    flashingColor1(): number[];
    flashingColor2(): number[];
    isValid(): boolean;
    currentValue(): number;
    currentMaxValue(): number;
    label(): string;
    gaugeBackColor(): string;
    gaugeColor1(): string;
    gaugeColor2(): string;
    labelColor(): string;
    labelOutlineColor(): string;
    labelOutlineWidth(): number;
    valueColor(): string;
    valueOutlineColor(): string;
    valueOutlineWidth(): number;
    redraw(): void;
    drawGauge(): void;
    drawGaugeRect(x: number, y: number, width: number, height: number): void;
    gaugeRate(): number;
    drawLabel(): void;
    setupLabelFont(): void;
    measureLabelWidth(): number;
    labelOpacity(): number;
    drawValue(): void;
    setupValueFont(): void;
}

declare class Sprite_Name extends Sprite {
    protected _battler: Game_Battler | null;
    protected _name: string;
    protected _textColor: string;

    initialize(): void;
    initMembers(): void;
    destroy(options?: any): void;
    createBitmap(): void;
    bitmapWidth(): number;
    bitmapHeight(): number;
    fontFace(): string;
    fontSize(): number;
    setup(battler: Game_Battler): void;
    update(): void;
    updateBitmap(): void;
    // @ts-ignore
    name(): string;
    textColor(): string;
    outlineColor(): string;
    outlineWidth(): number;
    redraw(): void;
    setupFont(): void;
}

declare class Sprite_StateIcon extends Sprite {
    protected _battler: Game_Battler | null;
    protected _iconIndex: number;
    protected _animationCount: number;
    protected _animationIndex: number;

    initialize(): void;
    initMembers(): void;
    loadBitmap(): void;
    setup(battler: Game_Battler): void;
    update(): void;
    animationWait(): number;
    updateIcon(): void;
    shouldDisplay(): boolean;
    updateFrame(): void;
}

declare class Sprite_StateOverlay extends Sprite {
    protected _battler: Game_Battler | null;
    protected _overlayIndex: number;
    protected _animationCount: number;
    protected _pattern: number;

    initialize(): void;
    initMembers(): void;
    loadBitmap(): void;
    setup(battler: Game_Battler): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    updateFrame(): void;
}

declare class Sprite_Weapon extends Sprite {
    protected _weaponImageId: number;
    protected _animationCount: number;
    protected _pattern: number;

    initialize(): void;
    initMembers(): void;
    setup(weaponImageId: number): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    loadBitmap(): void;
    updateFrame(): void;
    isPlaying(): boolean;
}

declare class Sprite_Balloon extends Sprite {
    protected _target: Sprite | null;
    protected _balloonId: number;
    protected _duration: number;

    initialize(): void;
    initMembers(): void;
    loadBitmap(): void;
    setup(targetSprite: Sprite, balloonId: number): void;
    update(): void;
    updatePosition(): void;
    updateFrame(): void;
    speed(): number;
    waitTime(): number;
    frameIndex(): number;
    isPlaying(): boolean;
}

declare class Sprite_Picture extends Sprite_Clickable {
    protected _pictureId: number;
    protected _pictureName: string;

    initialize(pictureId: number): void;
    picture(): Game_Picture | null;
    update(): void;
    updateBitmap(): void;
    updateOrigin(): void;
    updatePosition(): void;
    updateScale(): void;
    updateTone(): void;
    updateOther(): void;
    loadBitmap(): void;
}

declare class Sprite_Timer extends Sprite {
    protected _seconds: number;

    initialize(): void;
    destroy(options?: any): void;
    createBitmap(): void;
    fontFace(): string;
    fontSize(): number;
    update(): void;
    updateBitmap(): void;
    redraw(): void;
    timerText(): string;
    updatePosition(): void;
    updateVisibility(): void;
}

declare class Sprite_Destination extends Sprite {
    protected _frameCount: number;

    initialize(): void;
    destroy(options?: any): void;
    update(): void;
    createBitmap(): void;
    updatePosition(): void;
    updateAnimation(): void;
}

declare class Spriteset_Base extends Sprite {
    protected _baseSprite: Sprite;
    protected _blackScreen: ScreenSprite;
    protected _baseColorFilter: ColorFilter;
    protected _pictureContainer: Sprite;
    protected _timerSprite: Sprite_Timer;
    protected _overallColorFilter: ColorFilter;
    protected _animationSprites: Sprite_Animation[];
    protected _effectsContainer: Sprite;

    initialize(...args: any[]): void;
    destroy(options?: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createUpperLayer(): void;
    update(): void;
    createBaseSprite(): void;
    createBaseFilters(): void;
    createPictures(): void;
    pictureContainerRect(): Rectangle;
    createTimer(): void;
    createOverallFilters(): void;
    updateBaseFilters(): void;
    updateOverallFilters(): void;
    updatePosition(): void;
    findTargetSprite(target: any): Sprite | null;
    updateAnimations(): void;
    processAnimationRequests(): void;
    createAnimation(request: any): void;
    createAnimationSprite(targets: any[], animation: any, mirror: boolean, delay: number): void;
    isMVAnimation(animation: any): boolean;
    makeTargetSprites(targets: any[]): Sprite[];
    lastAnimationSprite(): Sprite_Animation;
    isAnimationForEach(animation: any): boolean;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    animationShouldMirror(target: any): boolean;
    removeAnimation(sprite: Sprite_Animation): void;
    removeAllAnimations(): void;
    isAnimationPlaying(): boolean;
}

declare class Spriteset_Map extends Spriteset_Base {
    protected _parallax: TilingSprite;
    protected _parallaxName: string;
    protected _tilemap: Tilemap;
    protected _tileset: any;
    protected _characterSprites: Sprite_Character[];
    protected _shadowSprite: Sprite;
    protected _destinationSprite: Sprite_Destination;
    protected _weather: Weather;
    protected _balloonSprites: Sprite_Balloon[];

    initialize(): void;
    destroy(options?: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    update(): void;
    hideCharacters(): void;
    createParallax(): void;
    createTilemap(): void;
    loadTileset(): void;
    createCharacters(): void;
    createShadow(): void;
    createDestination(): void;
    createWeather(): void;
    updateTileset(): void;
    updateParallax(): void;
    updateTilemap(): void;
    updateShadow(): void;
    updateWeather(): void;
    updateBalloons(): void;
    processBalloonRequests(): void;
    createBalloon(request: any): void;
    removeBalloon(sprite: Sprite_Balloon): void;
    removeAllBalloons(): void;
    findTargetSprite(target: any): Sprite_Character | undefined;
    animationBaseDelay(): number;
}

declare class Spriteset_Battle extends Spriteset_Base {
    protected _battlebackLocated: boolean;
    protected _backgroundFilter: any;
    protected _backgroundSprite: Sprite;
    protected _back1Sprite: Sprite_Battleback;
    protected _back2Sprite: Sprite_Battleback;
    protected _battleField: Sprite;
    protected _enemySprites: Sprite_Enemy[];
    protected _actorSprites: Sprite_Actor[];

    initialize(): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createBackground(): void;
    createBattleback(): void;
    createBattleField(): void;
    battleFieldOffsetY(): number;
    update(): void;
    updateBattleback(): void;
    createEnemies(): void;
    compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
    createActors(): void;
    updateActors(): void;
    findTargetSprite(target: Game_Battler): Sprite_Battler | undefined;
    battlerSprites(): Sprite_Battler[];
    isEffecting(): boolean;
    isAnyoneMoving(): boolean;
    isBusy(): boolean;
}

declare class Window_Base extends RMMZWindow {
    constructor(rect: Rectangle);

    initialize(...args: any[]): void;
    destroy(options?: any): void;
    checkRectObject(rect: Rectangle): void;
    lineHeight(): number;
    itemWidth(): number;
    itemHeight(): number;
    itemPadding(): number;
    baseTextRect(): Rectangle;
    loadWindowskin(): void;
    updatePadding(): void;
    updateBackOpacity(): void;
    fittingHeight(numLines: number): number;
    updateTone(): void;
    createContents(): void;
    destroyContents(): void;
    contentsWidth(): number;
    contentsHeight(): number;
    resetFontSettings(): void;
    resetTextColor(): void;
    update(): void;
    updateOpen(): void;
    updateClose(): void;
    open(): void;
    close(): void;
    isOpening(): boolean;
    isClosing(): boolean;
    show(): void;
    hide(): void;
    activate(): void;
    deactivate(): void;
    systemColor(): string;
    translucentOpacity(): number;
    changeTextColor(color: string): void;
    changeOutlineColor(color: string): void;
    changePaintOpacity(enabled: boolean): void;
    drawRect(x: number, y: number, width: number, height: number): void;
    drawText(text: string, x: number, y: number, maxWidth: number, align?: string): void;
    textWidth(text: string): number;
    drawTextEx(text: string, x: number, y: number, width: number): number;
    textSizeEx(text: string): { width: number; height: number };
    createTextState(text: string, x: number, y: number, width: number): any;
    processAllText(textState: any): void;
    flushTextState(textState: any): void;
    createTextBuffer(rtl: boolean): string;
    convertEscapeCharacters(text: string): string;
    actorName(n: number): string;
    partyMemberName(n: number): string;
    processCharacter(textState: any): void;
    processControlCharacter(textState: any, c: string): void;
    processNewLine(textState: any): void;
    obtainEscapeCode(textState: any): string;
    obtainEscapeParam(textState: any): number | string;
    processEscapeCharacter(code: string, textState: any): void;
    processColorChange(colorIndex: number): void;
    processDrawIcon(iconIndex: number, textState: any): void;
    makeFontBigger(): void;
    makeFontSmaller(): void;
    calcTextHeight(textState: any): number;
    maxFontSizeInLine(line: string): number;
    drawIcon(iconIndex: number, x: number, y: number): void;
    drawFace(faceName: string, faceIndex: number, x: number, y: number, width?: number, height?: number): void;
    drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    drawItemName(item: any, x: number, y: number, width: number): void;
    drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;
    setBackgroundType(type: number): void;
    showBackgroundDimmer(): void;
    createDimmerSprite(): void;
    hideBackgroundDimmer(): void;
    updateBackgroundDimmer(): void;
    refreshDimmerBitmap(): void;
    playCursorSound(): void;
    playOkSound(): void;
    playBuzzerSound(): void;

    _opening: boolean;
    _closing: boolean;
    _dimmerSprite: Sprite | null;
}

declare class Window_Scrollable extends Window_Base {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    clearScrollStatus(): void;
    scrollX(): number;
    scrollY(): number;
    scrollBaseX(): number;
    scrollBaseY(): number;
    scrollTo(x: number, y: number): void;
    scrollBy(x: number, y: number): void;
    smoothScrollTo(x: number, y: number): void;
    smoothScrollBy(x: number, y: number): void;
    setScrollAccel(x: number, y: number): void;
    overallWidth(): number;
    overallHeight(): number;
    maxScrollX(): number;
    maxScrollY(): number;
    scrollBlockWidth(): number;
    scrollBlockHeight(): number;
    smoothScrollDown(n: number): void;
    smoothScrollUp(n: number): void;
    update(): void;
    processWheelScroll(): void;
    processTouchScroll(): void;
    isWheelScrollEnabled(): boolean;
    isTouchScrollEnabled(): boolean;
    isScrollEnabled(): boolean;
    isTouchedInsideFrame(): boolean;
    onTouchScrollStart(): void;
    onTouchScroll(): void;
    onTouchScrollEnd(): void;
    updateSmoothScroll(): void;
    updateScrollAccel(): void;
    updateArrows(): void;
    updateOrigin(): void;
    updateScrollBase(baseX: number, baseY: number): void;
    paint(): void;

    _scrollX: number;
    _scrollY: number;
    _scrollBaseX: number;
    _scrollBaseY: number;
    _scrollTargetX: number;
    _scrollTargetY: number;
    _scrollDuration: number;
    _scrollAccelX: number;
    _scrollAccelY: number;
    _scrollTouching: boolean;
    _scrollLastTouchX: number;
    _scrollLastTouchY: number;
    _scrollLastCursorVisible: boolean;
}

declare class Window_Selectable extends Window_Scrollable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    index(): number;
    cursorFixed(): boolean;
    setCursorFixed(cursorFixed: boolean): void;
    cursorAll(): boolean;
    setCursorAll(cursorAll: boolean): void;
    maxCols(): number;
    maxItems(): number;
    colSpacing(): number;
    rowSpacing(): number;
    itemWidth(): number;
    itemHeight(): number;
    contentsHeight(): number;
    maxRows(): number;
    overallHeight(): number;
    activate(): void;
    deactivate(): void;
    select(index: number): void;
    forceSelect(index: number): void;
    smoothSelect(index: number): void;
    deselect(): void;
    reselect(): void;
    row(): number;
    topRow(): number;
    maxTopRow(): number;
    setTopRow(row: number): void;
    maxPageRows(): number;
    maxPageItems(): number;
    maxVisibleItems(): number;
    isHorizontal(): boolean;
    topIndex(): number;
    itemRect(index: number): Rectangle;
    itemRectWithPadding(index: number): Rectangle;
    itemLineRect(index: number): Rectangle;
    setHelpWindow(helpWindow: Window_Help): void;
    showHelpWindow(): void;
    hideHelpWindow(): void;
    setHandler(symbol: string, method: Function): void;
    isHandled(symbol: string): boolean;
    callHandler(symbol: string): void;
    isOpenAndActive(): boolean;
    isCursorMovable(): boolean;
    cursorDown(wrap: boolean): void;
    cursorUp(wrap: boolean): void;
    cursorRight(wrap: boolean): void;
    cursorLeft(wrap: boolean): void;
    cursorPagedown(): void;
    cursorPageup(): void;
    isScrollEnabled(): boolean;
    update(): void;
    processCursorMove(): void;
    processHandling(): void;
    processTouch(): void;
    isHoverEnabled(): boolean;
    onTouchSelect(trigger: boolean): void;
    onTouchOk(): void;
    onTouchCancel(): void;
    hitIndex(): number;
    hitTest(x: number, y: number): number;
    isTouchOkEnabled(): boolean;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    isOkTriggered(): boolean;
    isCancelTriggered(): boolean;
    processOk(): void;
    callOkHandler(): void;
    processCancel(): void;
    callCancelHandler(): void;
    processPageup(): void;
    processPagedown(): void;
    updateInputData(): void;
    ensureCursorVisible(smooth: boolean): void;
    callUpdateHelp(): void;
    updateHelp(): void;
    setHelpWindowItem(item: any): void;
    isCurrentItemEnabled(): boolean;
    drawAllItems(): void;
    drawItem(...args: any[]): void;
    clearItem(index: number): void;
    drawItemBackground(index: number): void;
    drawBackgroundRect(rect: Rectangle): void;
    redrawItem(index: number): void;
    redrawCurrentItem(): void;
    refresh(): void;
    paint(): void;
    refreshCursor(): void;
    refreshCursorForAll(): void;

    _index: number;
    _cursorFixed: boolean;
    _cursorAll: boolean;
    _helpWindow: Window_Help | null;
    _handlers: { [key: string]: Function };
    _doubleTouch: boolean;
    _canRepeat: boolean;
}

declare class Window_Command extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    maxItems(): number;
    clearCommandList(): void;
    makeCommandList(): void;
    addCommand(name: string, symbol: string, enabled?: boolean, ext?: any): void;
    commandName(index: number): string;
    commandSymbol(index: number): string;
    isCommandEnabled(index: number): boolean;
    currentData(): any;
    isCurrentItemEnabled(): boolean;
    currentSymbol(): string | null;
    currentExt(): any;
    findSymbol(symbol: string): number;
    selectSymbol(symbol: string): void;
    findExt(ext: any): number;
    selectExt(ext: any): void;
    drawItem(index: number): void;
    itemTextAlign(): string;
    isOkEnabled(): boolean;
    callOkHandler(): void;
    refresh(): void;

    _list: Array<{ name: string; symbol: string; enabled: boolean; ext: any }>;
}

declare class Window_HorzCommand extends Window_Command {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    maxCols(): number;
    itemTextAlign(): string;
}

declare class Window_Help extends Window_Base {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setText(text: string): void;
    clear(): void;
    setItem(item: any): void;
    refresh(): void;

    _text: string;
}

declare class Window_Gold extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    colSpacing(): number;
    refresh(): void;
    value(): number;
    currencyUnit(): string;
    open(): void;
}

declare class Window_StatusBase extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    loadFaceImages(): void;
    refresh(): void;
    hideAdditionalSprites(): void;
    placeActorName(actor: Game_Actor, x: number, y: number): void;
    placeStateIcon(actor: Game_Actor, x: number, y: number): void;
    placeGauge(actor: Game_Actor, type: string, x: number, y: number): void;
    createInnerSprite(key: string, spriteClass: any): any;
    placeTimeGauge(actor: Game_Actor, x: number, y: number): void;
    placeBasicGauges(actor: Game_Actor, x: number, y: number): void;
    gaugeLineHeight(): number;
    drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
    drawActorFace(actor: Game_Actor, x: number, y: number, width?: number, height?: number): void;
    drawActorName(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorClass(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorNickname(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorLevel(actor: Game_Actor, x: number, y: number): void;
    drawActorIcons(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;
    actorSlotName(actor: Game_Actor, index: number): string;

    _additionalSprites: { [key: string]: any };
}

declare class Window_MenuCommand extends Window_Command {
    constructor(rect: Rectangle);

    static _lastCommandSymbol: string | null;
    static initCommandPosition(): void;

    initialize(rect: Rectangle): void;
    makeCommandList(): void;
    addMainCommands(): void;
    addFormationCommand(): void;
    addOriginalCommands(): void;
    addOptionsCommand(): void;
    addSaveCommand(): void;
    addGameEndCommand(): void;
    needsCommand(name: string): boolean;
    areMainCommandsEnabled(): boolean;
    isFormationEnabled(): boolean;
    isOptionsEnabled(): boolean;
    isSaveEnabled(): boolean;
    isGameEndEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}

declare class Window_MenuStatus extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    maxItems(): number;
    numVisibleRows(): number;
    itemHeight(): number;
    actor(index: number): Game_Actor;
    drawItem(index: number): void;
    drawPendingItemBackground(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    processOk(): void;
    isCurrentItemEnabled(): boolean;
    selectLast(): void;
    formationMode(): boolean;
    setFormationMode(formationMode: boolean): void;
    pendingIndex(): number;
    setPendingIndex(index: number): void;

    _formationMode: boolean;
    _pendingIndex: number;
}

declare class Window_MenuActor extends Window_MenuStatus {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    processOk(): void;
    selectLast(): void;
    selectForItem(item: any): void;
}

declare class Window_ItemCategory extends Window_HorzCommand {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    maxCols(): number;
    update(): void;
    makeCommandList(): void;
    needsCommand(name: string): boolean;
    setItemWindow(itemWindow: Window_ItemList): void;
    needsSelection(): boolean;

    _itemWindow: Window_ItemList | null;
}

declare class Window_ItemList extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setCategory(category: string): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): number;
    item(): any;
    itemAt(index: number): any;
    isCurrentItemEnabled(): boolean;
    includes(item: any): boolean;
    needsNumber(): boolean;
    isEnabled(item: any): boolean;
    makeItemList(): void;
    selectLast(): void;
    drawItem(index: number): void;
    numberWidth(): number;
    drawItemNumber(item: any, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;

    _category: string;
    _data: any[];
}

declare class Window_SkillType extends Window_Command {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    makeCommandList(): void;
    update(): void;
    setSkillWindow(skillWindow: Window_SkillList): void;
    selectLast(): void;

    _actor: Game_Actor | null;
    _skillWindow: Window_SkillList | null;
}

declare class Window_SkillStatus extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    refresh(): void;

    _actor: Game_Actor | null;
}

declare class Window_SkillList extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    setStypeId(stypeId: number): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): number;
    item(): any;
    itemAt(index: number): any;
    isCurrentItemEnabled(): boolean;
    includes(item: any): boolean;
    isEnabled(item: any): boolean;
    makeItemList(): void;
    selectLast(): void;
    drawItem(index: number): void;
    costWidth(): number;
    drawSkillCost(skill: any, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;

    _actor: Game_Actor | null;
    _stypeId: number;
    _data: any[];
}

declare class Window_EquipStatus extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    colSpacing(): number;
    refresh(): void;
    setTempActor(tempActor: Game_Actor): void;
    drawAllParams(): void;
    drawItem(x: number, y: number, paramId: number): void;
    drawParamName(x: number, y: number, paramId: number): void;
    drawCurrentParam(x: number, y: number, paramId: number): void;
    drawRightArrow(x: number, y: number): void;
    drawNewParam(x: number, y: number, paramId: number): void;
    rightArrowWidth(): number;
    paramWidth(): number;
    paramX(): number;
    paramY(index: number): number;

    _actor: Game_Actor | null;
    _tempActor: Game_Actor | null;
}

declare class Window_EquipCommand extends Window_HorzCommand {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    maxCols(): number;
    makeCommandList(): void;
}

declare class Window_EquipSlot extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    update(): void;
    maxItems(): number;
    item(): any;
    itemAt(index: number): any;
    drawItem(index: number): void;
    slotNameWidth(): number;
    isEnabled(index: number): boolean;
    isCurrentItemEnabled(): boolean;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    setItemWindow(itemWindow: Window_EquipItem): void;
    updateHelp(): void;

    _actor: Game_Actor | null;
    _statusWindow: Window_EquipStatus | null;
    _itemWindow: Window_EquipItem | null;
}

declare class Window_EquipItem extends Window_ItemList {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    maxCols(): number;
    colSpacing(): number;
    setActor(actor: Game_Actor): void;
    setSlotId(slotId: number): void;
    includes(item: any): boolean;
    etypeId(): number;
    isEnabled(item: any): boolean;
    selectLast(): void;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    updateHelp(): void;
    playOkSound(): void;

    _actor: Game_Actor | null;
    _slotId: number;
    _statusWindow: Window_EquipStatus | null;
}

declare class Window_Status extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    refresh(): void;
    drawBlock1(): void;
    block1Y(): number;
    drawBlock2(): void;
    block2Y(): number;
    drawBasicInfo(x: number, y: number): void;
    drawExpInfo(x: number, y: number): void;
    expTotalValue(): string | number;
    expNextValue(): string | number;

    _actor: Game_Actor | null;
}

declare class Window_StatusParams extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    maxItems(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    drawItemBackground(index: number): void;

    _actor: Game_Actor | null;
}

declare class Window_StatusEquip extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setActor(actor: Game_Actor): void;
    maxItems(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    drawItemBackground(index: number): void;

    _actor: Game_Actor | null;
}

declare class Window_Options extends Window_Command {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    makeCommandList(): void;
    addGeneralOptions(): void;
    addVolumeOptions(): void;
    drawItem(index: number): void;
    statusWidth(): number;
    statusText(index: number): string;
    isVolumeSymbol(symbol: string): boolean;
    booleanStatusText(value: boolean): string;
    volumeStatusText(value: number): string;
    processOk(): void;
    cursorRight(): void;
    cursorLeft(): void;
    changeVolume(symbol: string, forward: boolean, wrap: boolean): void;
    volumeOffset(): number;
    changeValue(symbol: string, value: any): void;
    getConfigValue(symbol: string): any;
    setConfigValue(symbol: string, volume: any): void;
}

declare class Window_SavefileList extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setMode(mode: string, autosave: boolean): void;
    maxItems(): number;
    numVisibleRows(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    indexToSavefileId(index: number): number;
    savefileIdToIndex(savefileId: number): number;
    isEnabled(savefileId: number): boolean;
    savefileId(): number;
    selectSavefile(savefileId: number): void;
    drawTitle(savefileId: number, x: number, y: number): void;
    drawContents(info: any, rect: Rectangle): void;
    drawPartyCharacters(info: any, x: number, y: number): void;
    drawPlaytime(info: any, x: number, y: number, width: number): void;
    playOkSound(): void;

    _mode: string | null;
    _autosave: boolean;
}

declare class Window_ShopCommand extends Window_HorzCommand {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setPurchaseOnly(purchaseOnly: boolean): void;
    maxCols(): number;
    makeCommandList(): void;

    _purchaseOnly: boolean;
}

declare class Window_ShopBuy extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setupGoods(shopGoods: any[]): void;
    maxItems(): number;
    item(): any;
    itemAt(index: number): any;
    setMoney(money: number): void;
    isCurrentItemEnabled(): boolean;
    price(item: any): number;
    isEnabled(item: any): boolean;
    refresh(): void;
    makeItemList(): void;
    goodsToItem(goods: any): any;
    drawItem(index: number): void;
    priceWidth(): number;
    setStatusWindow(statusWindow: Window_ShopStatus): void;
    updateHelp(): void;

    _money: number;
    _shopGoods: any[];
    _data: any[];
    _price: number[];
    _statusWindow: Window_ShopStatus | null;
}

declare class Window_ShopSell extends Window_ItemList {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    isEnabled(item: any): boolean;
}

declare class Window_ShopNumber extends Window_Selectable {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    isScrollEnabled(): boolean;
    number(): number;
    setup(item: any, max: number, price: number): void;
    setCurrencyUnit(currencyUnit: string): void;
    createButtons(): void;
    placeButtons(): void;
    totalButtonWidth(): number;
    buttonSpacing(): number;
    refresh(): void;
    drawCurrentItemName(): void;
    drawMultiplicationSign(): void;
    multiplicationSign(): string;
    multiplicationSignX(): number;
    drawNumber(): void;
    drawHorzLine(): void;
    drawTotalPrice(): void;
    itemNameY(): number;
    totalPriceY(): number;
    buttonY(): number;
    cursorWidth(): number;
    cursorX(): number;
    maxDigits(): number;
    update(): void;
    playOkSound(): void;
    processNumberChange(): void;
    changeNumber(amount: number): void;
    itemRect(): Rectangle;
    isTouchOkEnabled(): boolean;
    onButtonUp(): void;
    onButtonUp2(): void;
    onButtonDown(): void;
    onButtonDown2(): void;
    onButtonOk(): void;

    _item: any;
    _max: number;
    _price: number;
    _number: number;
    _currencyUnit: string;
    _buttons: any[];
}

declare class Window_ShopStatus extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    refresh(): void;
    setItem(item: any): void;
    isEquipItem(): boolean;
    drawPossession(x: number, y: number): void;
    drawEquipInfo(x: number, y: number): void;
    statusMembers(): Game_Actor[];
    pageSize(): number;
    maxPages(): number;
    drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
    drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: any): void;
    paramId(): number;
    currentEquippedItem(actor: Game_Actor, etypeId: number): any;
    update(): void;
    updatePage(): void;
    isPageChangeEnabled(): boolean;
    isPageChangeRequested(): boolean;
    changePage(): void;

    _item: any;
    _pageIndex: number;
}

declare class Window_NameEdit extends Window_StatusBase {
    constructor(rect: Rectangle);

    initialize(rect: Rectangle): void;
    setup(actor: Game_Actor, maxLength: number): void;
    // @ts-ignore
    name(): string;
    restoreDefault(): boolean;
    add(ch: string): boolean;
    back(): boolean;
    faceWidth(): number;
    charWidth(): number;
    left(): number;
    itemRect(index: number): Rectangle;
    underlineRect(index: number): Rectangle;
    underlineColor(): string;
    drawUnderline(index: number): void;
    drawChar(index: number): void;
    refresh(): void;

    _actor: Game_Actor | null;
    _maxLength: number;
    _name: string;
    _index: number;
    _defaultName: string;
}

declare class Window_NameInput extends Window_Selectable {
    constructor(rect: Rectangle);

    static LATIN1: string[];
    static LATIN2: string[];
    static RUSSIA: string[];
    static JAPAN1: string[];
    static JAPAN2: string[];
    static JAPAN3: string[];

    initialize(rect: Rectangle): void;
    setEditWindow(editWindow: Window_NameEdit): void;
    table(): string[][];
    maxCols(): number;
    maxItems(): number;
    itemWidth(): number;
    groupSpacing(): number;
    character(): string;
    isPageChange(): boolean;
    isOk(): boolean;
    itemRect(index: number): Rectangle;
    drawItem(index: number): void;
    updateCursor(): void;
    isCursorMovable(): boolean;
    cursorDown(wrap: boolean): void;
    cursorUp(wrap: boolean): void;
    cursorRight(wrap: boolean): void;
    cursorLeft(wrap: boolean): void;
    cursorPagedown(): void;
    cursorPageup(): void;
    processCursorMove(): void;
    processHandling(): void;
    isCancelEnabled(): boolean;
    processCancel(): void;
    processJump(): void;
    processBack(): void;
    processOk(): void;
    onNameAdd(): void;
    onNameOk(): void;

    _editWindow: Window_NameEdit | null;
    _page: number;
    _index: number;
}

declare class Window_NameBox extends Window_Base {
    constructor();

    initialize(): void;
    setMessageWindow(messageWindow: Window_Message): void;
    setName(name: string): void;
    clear(): void;
    start(): void;
    updatePlacement(): void;
    updateBackground(): void;
    windowWidth(): number;
    windowHeight(): number;
    refresh(): void;

    _messageWindow: Window_Message | null;
    _name: string;
}

declare class Window_ChoiceList extends Window_Command {
    constructor();

    initialize(): void;
    setMessageWindow(messageWindow: Window_Message): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    selectDefault(): void;
    updatePlacement(): void;
    updateBackground(): void;
    placeCancelButton(): void;
    windowX(): number;
    windowY(): number;
    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    maxLines(): number;
    maxChoiceWidth(): number;
    makeCommandList(): void;
    drawItem(index: number): void;
    isCancelEnabled(): boolean;
    needsCancelButton(): boolean;
    callOkHandler(): void;
    callCancelHandler(): void;

    _messageWindow: Window_Message | null;
    _background: number;
    _cancelButton: any;
}

declare class Window_NumberInput extends Window_Selectable {
    constructor();

    initialize(): void;
    setMessageWindow(messageWindow: Window_Message): void;
    start(): void;
    updatePlacement(): void;
    windowWidth(): number;
    windowHeight(): number;
    maxCols(): number;
    maxItems(): number;
    itemWidth(): number;
    itemRect(index: number): Rectangle;
    isScrollEnabled(): boolean;
    isHoverEnabled(): boolean;
    create(): void;
    placeButtons(): void;
    totalButtonWidth(): number;
    buttonSpacing(): number;
    buttonY(): number;
    update(): void;
    processDigitChange(): void;
    changeDigit(up: boolean): void;
    isTouchOkEnabled(): boolean;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    processOk(): void;
    drawItem(index: number): void;
    onButtonUp(): void;
    onButtonDown(): void;
    onButtonOk(): void;_messageWindow: Window_Message | null;
    _number: number;
    _maxDigits: number;
    _buttons: any[];
}

declare class Window_EventItem extends Window_ItemList {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    setMessageWindow(messageWindow: Window_Message): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    updatePlacement(): void;
    placeCancelButton(): void;
    includes(item: any): boolean;
    needsNumber(): boolean;
    isEnabled(item: any): boolean;
    onOk(): void;
    onCancel(): void;

    _messageWindow: Window_Message | null;
    _cancelButton: any;
}
declare class Window_Message extends Window_Base {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    initMembers(): void;
    setGoldWindow(goldWindow: Window_Gold): void;
    setNameBoxWindow(nameBoxWindow: Window_NameBox): void;
    setChoiceListWindow(choiceListWindow: Window_ChoiceList): void;
    setNumberInputWindow(numberInputWindow: Window_NumberInput): void;
    setEventItemWindow(eventItemWindow: Window_EventItem): void;
    clearFlags(): void;
    update(): void;
    checkToNotClose(): void;
    synchronizeNameBox(): void;
    canStart(): boolean;
    startMessage(): void;
    newLineX(textState: any): number;
    updatePlacement(): void;
    updateBackground(): void;
    terminateMessage(): void;
    updateWait(): boolean;
    cancelWait(): void;
    updateLoading(): boolean;
    updateInput(): boolean;
    isAnySubWindowActive(): boolean;
    updateMessage(): boolean;
    shouldBreakHere(textState: any): boolean;
    canBreakHere(textState: any): boolean;
    onEndOfText(): void;
    startInput(): boolean;
    isTriggered(): boolean;
    doesContinue(): boolean;
    areSettingsChanged(): boolean;
    updateShowFast(): void;
    newPage(textState: any): void;
    updateSpeakerName(): void;
    loadMessageFace(): void;
    drawMessageFace(): void;
    processControlCharacter(textState: any, c: string): void;
    processNewLine(textState: any): void;
    processNewPage(textState: any): void;
    isEndOfText(textState: any): boolean;
    needsNewPage(textState: any): boolean;
    processEscapeCharacter(code: string, textState: any): void;
    startWait(count: number): void;
    startPause(): void;
    isWaiting(): boolean;

    _background: number;
    _positionType: number;
    _waitCount: number;
    _faceBitmap: Bitmap | null;
    _textState: any;
    _goldWindow: Window_Gold | null;
    _nameBoxWindow: Window_NameBox | null;
    _choiceListWindow: Window_ChoiceList | null;
    _numberInputWindow: Window_NumberInput | null;
    _eventItemWindow: Window_EventItem | null;
    _showFast: boolean;
    _lineShowFast: boolean;
    _pauseSkip: boolean;
}
declare class Window_ScrollText extends Window_Base {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    update(): void;
    startMessage(): void;
    refresh(): void;
    updatePlacement(): void;
    contentsHeight(): number;
    updateMessage(): void;
    scrollSpeed(): number;
    isFastForward(): boolean;
    fastForwardRate(): number;
    terminateMessage(): void;

    _reservedRect: Rectangle;
    _text: string;
    _maxBitmapHeight: number;
    _allTextHeight: number;
    _blockHeight: number;
    _blockIndex: number;
    _scrollY: number;
}
declare class Window_MapName extends Window_Base {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    update(): void;
    updateFadeIn(): void;
    updateFadeOut(): void;
    open(): void;
    close(): void;
    refresh(): void;
    drawBackground(x: number, y: number, width: number, height: number): void;

    _showCount: number;
}
declare class Window_BattleLog extends Window_Base {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    setSpriteset(spriteset: any): void;
    maxLines(): number;
    numLines(): number;
    messageSpeed(): number;
    isBusy(): boolean;
    update(): void;
    updateWait(): boolean;
    updateWaitCount(): boolean;
    updateWaitMode(): boolean;
    setWaitMode(waitMode: string): void;
    callNextMethod(): void;
    isFastForward(): boolean;
    push(methodName: string, ...args: any[]): void;
    clear(): void;
    wait(): void;
    waitForEffect(): void;
    waitForMovement(): void;
    addText(text: string): void;
    pushBaseLine(): void;
    popBaseLine(): void;
    waitForNewLine(): void;
    popupDamage(target: any): void;
    performActionStart(subject: any, action: any): void;
    performAction(subject: any, action: any): void;
    performActionEnd(subject: any): void;
    performDamage(target: any): void;
    performMiss(target: any): void;
    performRecovery(target: any): void;
    performEvasion(target: any): void;
    performMagicEvasion(target: any): void;
    performCounter(target: any): void;
    performReflection(target: any): void;
    performSubstitute(substitute: any, target: any): void;
    performCollapse(target: any): void;
    showAnimation(subject: any, targets: any[], animationId: number): void;
    showAttackAnimation(subject: any, targets: any[]): void;
    showActorAttackAnimation(subject: any, targets: any[]): void;
    showEnemyAttackAnimation(subject: any, targets: any[]): void;
    showNormalAnimation(targets: any[], animationId: number, mirror?: boolean): void;
    refresh(): void;
    drawBackground(): void;
    backRect(): Rectangle;
    lineRect(index: number): Rectangle;
    backColor(): string;
    backPaintOpacity(): number;
    drawLineText(index: number): void;
    startTurn(): void;
    startAction(subject: any, action: any, targets: any[]): void;
    endAction(subject: any): void;
    displayCurrentState(subject: any): void;
    displayRegeneration(subject: any): void;
    displayAction(subject: any, item: any): void;
    displayItemMessage(fmt: string, subject: any, item: any): void;
    displayCounter(target: any): void;
    displayReflection(target: any): void;
    displaySubstitute(substitute: any, target: any): void;
    displayActionResults(subject: any, target: any): void;
    displayFailure(target: any): void;
    displayCritical(target: any): void;
    displayDamage(target: any): void;
    displayMiss(target: any): void;
    displayEvasion(target: any): void;
    displayHpDamage(target: any): void;
    displayMpDamage(target: any): void;
    displayTpDamage(target: any): void;
    displayAffectedStatus(target: any): void;
    displayAutoAffectedStatus(target: any): void;
    displayChangedStates(target: any): void;
    displayAddedStates(target: any): void;
    displayRemovedStates(target: any): void;
    displayChangedBuffs(target: any): void;
    displayBuffs(target: any, buffs: number[], fmt: string): void;
    makeHpDamageText(target: any): string;
    makeMpDamageText(target: any): string;
    makeTpDamageText(target: any): string;

    _lines: string[];
    _methods: Array<{ name: string; params: any[] }>;
    _waitCount: number;
    _waitMode: string;
    _baseLineStack: number[];
    _spriteset: any;
}
declare class Window_PartyCommand extends Window_Command {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    makeCommandList(): void;
    setup(): void;
}
declare class Window_ActorCommand extends Window_Command {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    makeCommandList(): void;
    addAttackCommand(): void;
    addSkillCommands(): void;
    addGuardCommand(): void;
    addItemCommand(): void;
    setup(actor: Game_Actor): void;
    actor(): Game_Actor | null;
    processOk(): void;
    selectLast(): void;

    _actor: Game_Actor | null;
}
declare class Window_BattleStatus extends Window_StatusBase {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    extraHeight(): number;
    maxCols(): number;
    itemHeight(): number;
    maxItems(): number;
    rowSpacing(): number;
    updatePadding(): void;
    actor(index: number): Game_Actor;
    selectActor(actor: Game_Actor): void;
    update(): void;
    preparePartyRefresh(): void;
    performPartyRefresh(): void;
    drawItem(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    faceRect(index: number): Rectangle;
    nameX(rect: Rectangle): number;
    nameY(rect: Rectangle): number;
    stateIconX(rect: Rectangle): number;
    stateIconY(rect: Rectangle): number;
    basicGaugesX(rect: Rectangle): number;
    basicGaugesY(rect: Rectangle): number;

    _bitmapsReady: number;
}
declare class Window_BattleActor extends Window_BattleStatus {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    show(): void;
    hide(): void;
    select(index: number): void;
    processTouch(): void;
}
declare class Window_BattleEnemy extends Window_Selectable {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    maxCols(): number;
    maxItems(): number;
    enemy(): any;
    enemyIndex(): number;
    drawItem(index: number): void;
    show(): void;
    hide(): void;
    refresh(): void;
    select(index: number): void;
    processTouch(): void;

    _enemies: any[];
}
declare class Window_BattleSkill extends Window_SkillList {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    show(): void;
    hide(): void;
}
declare class Window_BattleItem extends Window_ItemList {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    includes(item: any): boolean;
    show(): void;
    hide(): void;
}
declare class Window_TitleCommand extends Window_Command {
    constructor(rect: Rectangle);
    static _lastCommandSymbol: string | null;
    static initCommandPosition(): void;

    initialize(rect: Rectangle): void;
    makeCommandList(): void;
    isContinueEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}
declare class Window_GameEnd extends Window_Command {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    makeCommandList(): void;
}
declare class Window_DebugRange extends Window_Selectable {
    constructor(rect: Rectangle);
    static lastTopRow: number;
    static lastIndex: number;

    initialize(rect: Rectangle): void;
    maxItems(): number;
    update(): void;
    mode(index: number): string;
    topId(index: number): number;
    isSwitchMode(index: number): boolean;
    drawItem(index: number): void;
    isCancelTriggered(): boolean;
    processCancel(): void;
    setEditWindow(editWindow: Window_DebugEdit): void;

    _maxSwitches: number;
    _maxVariables: number;
    _editWindow: Window_DebugEdit | null;
}
declare class Window_DebugEdit extends Window_Selectable {
    constructor(rect: Rectangle);
    initialize(rect: Rectangle): void;
    maxItems(): number;
    drawItem(index: number): void;
    itemName(dataId: number): string;
    itemStatus(dataId: number): string;
    setMode(mode: string): void;
    setTopId(id: number): void;
    currentId(): number;
    update(): void;
    updateSwitch(): void;
    updateVariable(): void;
    deltaForVariable(): number;

    _mode: string;
    _topId: number;
}