declare namespace PIXI {
    export const VERSION: string;
    export const PI_2: number;
    export const RAD_TO_DEG: number;
    export const DEG_TO_RAD: number;

    export enum ENV {
        WEBGL_LEGACY = 0,
        WEBGL = 1,
        WEBGL2 = 2
    }

    export enum RENDERER_TYPE {
        UNKNOWN = 0,
        WEBGL = 1,
        CANVAS = 2
    }

    export enum BLEND_MODES {
        NORMAL = 0,
        ADD = 1,
        MULTIPLY = 2,
        SCREEN = 3,
        OVERLAY = 4,
        DARKEN = 5,
        LIGHTEN = 6,
        COLOR_DODGE = 7,
        COLOR_BURN = 8,
        HARD_LIGHT = 9,
        SOFT_LIGHT = 10,
        DIFFERENCE = 11,
        EXCLUSION = 12,
        HUE = 13,
        SATURATION = 14,
        COLOR = 15,
        LUMINOSITY = 16,
        NORMAL_NPM = 17,
        ADD_NPM = 18,
        SCREEN_NPM = 19,
        NONE = 20,
        SRC_OVER = 0,
        SRC_IN = 21,
        SRC_OUT = 22,
        SRC_ATOP = 23,
        DST_OVER = 24,
        DST_IN = 25,
        DST_OUT = 26,
        DST_ATOP = 27,
        ERASE = 26,
        SUBTRACT = 28,
        XOR = 29
    }

    export enum DRAW_MODES {
        POINTS = 0,
        LINES = 1,
        LINE_LOOP = 2,
        LINE_STRIP = 3,
        TRIANGLES = 4,
        TRIANGLE_STRIP = 5,
        TRIANGLE_FAN = 6
    }

    export enum FORMATS {
        RGBA = 6408,
        RGB = 6407,
        ALPHA = 6406,
        LUMINANCE = 6409,
        LUMINANCE_ALPHA = 6410,
        DEPTH_COMPONENT = 6402,
        DEPTH_STENCIL = 34041
    }

    export enum TARGETS {
        TEXTURE_2D = 3553,
        TEXTURE_CUBE_MAP = 34067,
        TEXTURE_2D_ARRAY = 35866,
        TEXTURE_CUBE_MAP_POSITIVE_X = 34069,
        TEXTURE_CUBE_MAP_NEGATIVE_X = 34070,
        TEXTURE_CUBE_MAP_POSITIVE_Y = 34071,
        TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072,
        TEXTURE_CUBE_MAP_POSITIVE_Z = 34073,
        TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074
    }

    export enum TYPES {
        UNSIGNED_BYTE = 5121,
        UNSIGNED_SHORT = 5123,
        UNSIGNED_SHORT_5_6_5 = 33635,
        UNSIGNED_SHORT_4_4_4_4 = 32819,
        UNSIGNED_SHORT_5_5_5_1 = 32820,
        FLOAT = 5126,
        HALF_FLOAT = 36193
    }

    export enum SCALE_MODES {
        NEAREST = 0,
        LINEAR = 1
    }

    export enum WRAP_MODES {
        CLAMP = 33071,
        REPEAT = 10497,
        MIRRORED_REPEAT = 33648
    }

    export enum MIPMAP_MODES {
        OFF = 0,
        POW2 = 1,
        ON = 2
    }

    export enum ALPHA_MODES {
        NPM = 0,
        UNPACK = 1,
        PMA = 2,
        NO_PREMULTIPLIED_ALPHA = 0,
        PREMULTIPLY_ON_UPLOAD = 1,
        PREMULTIPLY_ALPHA = 2
    }

    export enum CLEAR_MODES {
        NO = 0,
        YES = 1,
        AUTO = 2,
        BLEND = 0,
        CLEAR = 1,
        BLIT = 2
    }

    export enum GC_MODES {
        AUTO = 0,
        MANUAL = 1
    }

    export enum PRECISION {
        LOW = 'lowp',
        MEDIUM = 'mediump',
        HIGH = 'highp'
    }

    export enum MASK_TYPES {
        NONE = 0,
        SCISSOR = 1,
        STENCIL = 2,
        SPRITE = 3
    }

    export enum MSAA_QUALITY {
        NONE = 0,
        LOW = 2,
        MEDIUM = 4,
        HIGH = 8
    }

    export enum UPDATE_PRIORITY {
        INTERACTION = 50,
        HIGH = 25,
        NORMAL = 0,
        LOW = -25,
        UTILITY = -50
    }

    export enum SHAPES {
        POLY = 0,
        RECT = 1,
        CIRC = 2,
        ELIP = 3,
        RREC = 4
    }

    export interface ISize {
        width: number;
        height: number;
    }

    export interface IPointData {
        x: number;
        y: number;
    }

    export interface IPoint extends IPointData {
        set(x?: number, y?: number): void;
        copyFrom(p: IPointData): this;
        copyTo(p: IPoint): IPoint;
        equals(p: IPointData): boolean;
    }

    export class Point implements IPoint {
        constructor(x?: number, y?: number);
        x: number;
        y: number;
        clone(): Point;
        copyFrom(p: IPointData): this;
        copyTo(p: IPoint): IPoint;
        equals(p: IPointData): boolean;
        set(x?: number, y?: number): this;
    }

    export class ObservablePoint implements IPoint {
        constructor(cb: () => void, scope: any, x?: number, y?: number);
        x: number;
        y: number;
        clone(cb?: () => void, scope?: any): ObservablePoint;
        set(x?: number, y?: number): this;
        copyFrom(p: IPointData): this;
        copyTo(p: IPoint): IPoint;
        equals(p: IPointData): boolean;
    }

    export class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        fromArray(array: number[]): void;
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): this;
        toArray(transpose?: boolean, out?: Float32Array): Float32Array;
        apply(pos: IPointData, newPos?: Point): Point;
        applyInverse(pos: IPointData, newPos?: Point): Point;
        translate(x: number, y: number): this;
        scale(x: number, y: number): this;
        rotate(angle: number): this;
        append(matrix: Matrix): this;
        setTransform(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number): this;
        prepend(matrix: Matrix): this;
        decompose(transform: Transform): Transform;
        invert(): this;
        identity(): this;
        clone(): Matrix;
        copyTo(matrix: Matrix): Matrix;
        copyFrom(matrix: Matrix): this;
        static readonly IDENTITY: Matrix;
        static readonly TEMP_MATRIX: Matrix;
    }

    export class Rectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);
        x: number;
        y: number;
        width: number;
        height: number;
        readonly type: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly bottom: number;
        static readonly EMPTY: Rectangle;
        clone(): Rectangle;
        copyFrom(rectangle: Rectangle): this;
        copyTo(rectangle: Rectangle): Rectangle;
        contains(x: number, y: number): boolean;
        pad(paddingX: number, paddingY?: number): this;
        fit(rectangle: Rectangle): this;
        ceil(resolution?: number, eps?: number): this;
        enlarge(rectangle: Rectangle): this;
    }

    export class Circle {
        constructor(x?: number, y?: number, radius?: number);
        x: number;
        y: number;
        radius: number;
        readonly type: number;
        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }

    export class Ellipse {
        constructor(x?: number, y?: number, halfWidth?: number, halfHeight?: number);
        x: number;
        y: number;
        width: number;
        height: number;
        readonly type: number;
        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }

    export class Polygon {
        constructor(points: IPoint[] | number[]);
        constructor(...points: (IPoint | number)[]);
        points: number[];
        readonly type: number;
        closeStroke: boolean;
        clone(): Polygon;
        contains(x: number, y: number): boolean;
    }

    export class RoundedRectangle {
        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);
        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        readonly type: number;
        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;
    }

    export class Transform {
        constructor();
        worldTransform: Matrix;
        localTransform: Matrix;
        position: ObservablePoint;
        scale: ObservablePoint;
        pivot: ObservablePoint;
        skew: ObservablePoint;
        rotation: number;
        updateLocalTransform(): void;
        updateTransform(parentTransform: Transform): void;
        setFromMatrix(matrix: Matrix): void;
        static readonly IDENTITY: Transform;
    }

    export interface IHitArea {
        contains(x: number, y: number): boolean;
    }

    export namespace utils {
        export class EventEmitter {
            eventNames(): Array<string | symbol>;
            listeners(event: string | symbol): Array<Function>;
            listenerCount(event: string | symbol): number;
            emit(event: string | symbol, ...args: any[]): boolean;
            on(event: string | symbol, fn: Function, context?: any): this;
            once(event: string | symbol, fn: Function, context?: any): this;
            removeListener(event: string | symbol, fn: Function, context?: any, once?: boolean): this;
            removeAllListeners(event?: string | symbol): this;
            off(event: string | symbol, fn: Function, context?: any, once?: boolean): this;
            addListener(event: string | symbol, fn: Function, context?: any): this;
        }

        export function isWebGLSupported(): boolean;
        export function skipHello(): void;
        export function sayHello(type: string): void;
        export function hex2rgb(hex: number, out?: number[]): number[];
        export function hex2string(hex: number): string;
        export function string2hex(string: string): number;
        export function rgb2hex(rgb: number[]): number;
        export function getResolutionOfUrl(url: string, defaultValue?: number): number;
        export function decomposeDataUri(dataUri: string): { mediaType: string; subType: string; charset: string; encoding: string; data: string; } | undefined;
        export function urlGet(url: string, base?: string): string;
        export function extractUrl(url: string): { protocol: string; host: string; path: string; };
        export const isMobile: {
            apple: {
                phone: boolean;
                ipod: boolean;
                tablet: boolean;
                universal: boolean;
                device: boolean;
            };
            android: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            amazon: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            windows: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            other: {
                blackberry: boolean;
                blackberry10: boolean;
                opera: boolean;
                firefox: boolean;
                chrome: boolean;
                device: boolean;
            };
            phone: boolean;
            tablet: boolean;
            any: boolean;
        };

        export class CanvasRenderTarget {
            constructor(width: number, height: number, resolution?: number);
            canvas: HTMLCanvasElement;
            context: CanvasRenderingContext2D;
            resolution: number;
            width: number;
            height: number;
            resize(width: number, height: number): void;
            destroy(): void;
        }
    }

    export class DisplayObject extends utils.EventEmitter {
        transform: Transform;
        alpha: number;
        visible: boolean;
        renderable: boolean;
        parent: Container;
        worldAlpha: number;
        filterArea: Rectangle;
        filters: Filter[];
        x: number;
        y: number;
        worldTransform: Matrix;
        localTransform: Matrix;
        position: ObservablePoint;
        scale: ObservablePoint;
        pivot: ObservablePoint;
        skew: ObservablePoint;
        rotation: number;
        angle: number;
        zIndex: number;
        worldVisible: boolean;
        mask: Container | MaskData;
        interactive: boolean;
        interactiveChildren: boolean;
        hitArea: IHitArea;
        buttonMode: boolean;
        cursor: string;
        getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
        getLocalBounds(rect?: Rectangle): Rectangle;
        toGlobal(position: IPointData, point?: Point, skipUpdate?: boolean): Point;
        toLocal(position: IPointData, from?: DisplayObject, point?: Point, skipUpdate?: boolean): Point;
        setParent(container: Container): Container;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): this;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        enableTempParent(): DisplayObject;
        disableTempParent(cacheParent: DisplayObject): void;
        getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
        name: string;
        updateTransform(): void;
        displayObjectUpdateTransform(): void;

        // CacheAsBitmap mixin
        cacheAsBitmap: boolean;
        _cacheAsBitmap: boolean;
    }

    export class Container extends DisplayObject {
        children: DisplayObject[];
        sortableChildren: boolean;
        sortDirty: boolean;
        width: number;
        height: number;
        addChild<T extends DisplayObject>(...children: T[]): T;
        addChildAt<T extends DisplayObject>(child: T, index: number): T;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
        getChildIndex(child: DisplayObject): number;
        setChildIndex(child: DisplayObject, index: number): void;
        getChildAt(index: number): DisplayObject;
        removeChild<T extends DisplayObject>(...children: T[]): T;
        removeChildAt(index: number): DisplayObject;
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
        sortChildren(): void;
        updateTransform(): void;
        calculateBounds(): void;
        getLocalBounds(rect?: Rectangle, skipChildrenUpdate?: boolean): Rectangle;
        render(renderer: Renderer): void;
        renderAdvanced(renderer: Renderer): void;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        getChildByName(name: string, deep?: boolean): DisplayObject;
    }

    export namespace settings {
        export let MIPMAP_TEXTURES: MIPMAP_MODES;
        export let ANISOTROPIC_LEVEL: number;
        export let RESOLUTION: number;
        export let FILTER_RESOLUTION: number;
        export let SPRITE_MAX_TEXTURES: number;
        export let SPRITE_BATCH_SIZE: number;
        export let RENDER_OPTIONS: {
            view: HTMLCanvasElement;
            antialias: boolean;
            autoDensity: boolean;
            transparent: boolean;
            backgroundColor: number;
            clearBeforeRender: boolean;
            preserveDrawingBuffer: boolean;
            width: number;
            height: number;
            legacy: boolean;
        };
        export let GC_MODE: GC_MODES;
        export let GC_MAX_IDLE: number;
        export let GC_MAX_CHECK_COUNT: number;
        export let WRAP_MODE: WRAP_MODES;
        export let SCALE_MODE: SCALE_MODES;
        export let PRECISION_VERTEX: PRECISION;
        export let PRECISION_FRAGMENT: PRECISION;
        export let CAN_UPLOAD_SAME_BUFFER: boolean;
        export let CREATE_IMAGE_BITMAP: boolean;
        export let ROUND_PIXELS: boolean;
        export let TARGET_FPMS: number;
        export let UPLOADS_PER_FRAME: number;
        export let SORTABLE_CHILDREN: boolean;
        export let PREFER_ENV: number;
        export let STRICT_TEXTURE_CACHE: boolean;
        export let RETINA_PREFIX: RegExp;
        export let FAIL_IF_MAJOR_PERFORMANCE_CAVEAT: boolean;
    }

    export class Bounds {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        isEmpty(): boolean;
        clear(): void;
        getRectangle(rect?: Rectangle): Rectangle;
        addPoint(point: IPointData): void;
        addQuad(vertices: Float32Array): void;
        addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;
        addFrameMatrix(matrix: Matrix, x0: number, y0: number, x1: number, y1: number): void;
        addVertexData(vertexData: Float32Array, beginOffset: number, endOffset: number): void;
        addVertices(transform: Transform, vertices: Float32Array, beginOffset: number, endOffset: number): void;
        addVerticesMatrix(matrix: Matrix, vertices: Float32Array, beginOffset: number, endOffset: number, padX?: number, padY?: number): void;
        addBounds(bounds: Bounds): void;
        addBoundsMask(bounds: Bounds, mask: Bounds): void;
        addBoundsMatrix(bounds: Bounds, matrix: Matrix): void;
        addBoundsArea(bounds: Bounds, area: Rectangle): void;
        pad(paddingX: number, paddingY?: number): void;
        addFramePad(x0: number, y0: number, x1: number, y1: number, padX: number, padY: number): void;
    }

    export class Runner {
        constructor(name: string);
        emit(a0?: any, a1?: any, a2?: any, a3?: any, a4?: any, a5?: any, a6?: any, a7?: any): this;
        add(item: any): this;
        remove(item: any): this;
        contains(item: any): boolean;
        removeAll(): this;
        destroy(): void;
        empty: boolean;
        name: string;
    }

    export class Ticker {
        autoStart: boolean;
        deltaTime: number;
        deltaMS: number;
        elapsedMS: number;
        lastTime: number;
        speed: number;
        started: boolean;
        FPS: number;
        minFPS: number;
        maxFPS: number;
        add(fn: (deltaTime: number) => void, context?: any, priority?: number): this;
        addOnce(fn: (deltaTime: number) => void, context?: any, priority?: number): this;
        remove(fn: (deltaTime: number) => void, context?: any): this;
        count: number;
        start(): void;
        stop(): void;
        destroy(): void;
        update(currentTime?: number): void;
        static readonly shared: Ticker;
        static readonly system: Ticker;
    }

    export namespace resources {
        class Resource {
            constructor(width?: number, height?: number);
            bind(baseTexture: BaseTexture): void;
            unbind(baseTexture: BaseTexture): void;
            resize(width: number, height: number): void;
            valid: boolean;
            update(): void;
            load(): Promise<void>;
            width: number;
            height: number;
            style(renderer: Renderer, baseTexture: BaseTexture, glTexture: any): boolean;
            dispose(): void;
            destroy(): void;
            static test(source: any, extension: string): boolean;
        }

        class BaseImageResource extends Resource {
            constructor(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement);
            source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            upload(renderer: Renderer, baseTexture: BaseTexture, glTexture: any, source?: any): boolean;
        }

        class ImageResource extends BaseImageResource {
            constructor(source: HTMLImageElement | string, options?: { autoLoad?: boolean, createBitmap?: boolean, crossorigin?: boolean, alphaMode?: ALPHA_MODES });
            url: string;
            bitmap: ImageBitmap;
            process(): Promise<void>;
        }

        class CanvasResource extends BaseImageResource {}

        class VideoResource extends BaseImageResource {
            constructor(source: HTMLVideoElement | object | string | Array<string | object>, options?: { autoLoad?: boolean, autoPlay?: boolean, updateFPS?: number, crossorigin?: boolean });
            autoUpdate: boolean;
            updateFPS: number;
        }

        class SVGResource extends BaseImageResource {
            constructor(sourceBase64: string, options?: { scale?: number, width?: number, height?: number, autoLoad?: boolean, crossorigin?: boolean });
            svg: string;
            scale: number;
            load(): Promise<void>;
            static getSize(svgString: string): ISize;
        }

        class BufferResource extends Resource {
            constructor(source: Float32Array | Uint8Array | Uint32Array, options: { width: number, height: number });
            data: Float32Array | Uint8Array | Uint32Array;
        }

        class ArrayResource extends Resource {
            constructor(source: number | Array<any>, options?: { width: number, height: number });
            addBaseTextureAt(baseTexture: BaseTexture, index: number): this;
        }

        class CubeResource extends ArrayResource {
            constructor(source: Array<string | Resource>, options?: { width: number, height: number, autoLoad?: boolean, linkBaseTexture?: boolean });
            static readonly SIDES: number;
        }

        function autoDetectResource(source: string | any, options?: any): Resource;
    }

    export class BaseTexture extends utils.EventEmitter {
        constructor(resource?: resources.Resource | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, options?: any);
        width: number;
        height: number;
        resolution: number;
        mipmap: MIPMAP_MODES;
        anisotropicLevel: number;
        wrapMode: WRAP_MODES;
        scaleMode: SCALE_MODES;
        format: FORMATS;
        type: TYPES;
        target: TARGETS;
        alphaMode: ALPHA_MODES;
        readonly uid: number;
        readonly touched: number;
        readonly isPowerOfTwo: boolean;
        readonly dirtyId: number;
        readonly dirtyStyleId: number;
        cacheId: string;
        valid: boolean;
        readonly textureCacheIds: string[];
        readonly destroyed: boolean;
        readonly resource: resources.Resource;
        readonly realWidth: number;
        readonly realHeight: number;
        setStyle(scaleMode?: SCALE_MODES, mipmap?: MIPMAP_MODES): this;
        setSize(width: number, height: number, resolution?: number): this;
        setRealSize(realWidth: number, realHeight: number, resolution?: number): this;
        setResolution(resolution: number): this;
        setResource(resource: resources.Resource): this;
        update(): void;
        destroy(): void;
        dispose(): void;
        static from(source: string | HTMLImageElement | HTMLCanvasElement | SVGElement | HTMLVideoElement, options?: any, strict?: boolean): BaseTexture;
        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: any): BaseTexture;
        static addToCache(baseTexture: BaseTexture, id: string): void;
        static removeFromCache(baseTexture: string | BaseTexture): BaseTexture | null;
    }

    export class Texture extends utils.EventEmitter {
        constructor(baseTexture: BaseTexture, frame?: Rectangle, orig?: Rectangle, trim?: Rectangle, rotate?: number, anchor?: IPointData);
        noFrame: boolean;
        baseTexture: BaseTexture;
        frame: Rectangle;
        trim: Rectangle;
        valid: boolean;
        requiresUpdate: boolean;
        orig: Rectangle;
        defaultAnchor: Point;
        readonly textureCacheIds: string[];
        update(): void;
        destroy(destroyBase?: boolean): void;
        clone(): Texture;
        updateUvs(): void;
        static from(source: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | BaseTexture, options?: any, strict?: boolean): Texture;
        static fromURL(url: string, options?: any): Promise<Texture>;
        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: any): Texture;
        static fromLoader(source: HTMLImageElement | HTMLCanvasElement, imageUrl: string, name?: string): Texture;
        static addToCache(texture: Texture, id: string): void;
        static removeFromCache(texture: string | Texture): Texture | null;
        static readonly EMPTY: Texture;
        static readonly WHITE: Texture;
        resolution: number;
        width: number;
        height: number;
        rotate: number;
    }

    export class RenderTexture extends Texture {
        constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);
        resize(width: number, height: number, resizeBaseTexture?: boolean): void;
        setResolution(resolution: number): void;
        static create(options?: { width?: number, height?: number, scaleMode?: SCALE_MODES, resolution?: number }): RenderTexture;
        readonly framebuffer: Framebuffer;
    }

    export class BaseRenderTexture extends BaseTexture {
        constructor(options?: { width?: number, height?: number, scaleMode?: SCALE_MODES, resolution?: number });
        resize(width: number, height: number): void;
        framebuffer: Framebuffer;
        clearColor: number[];
    }

    export class Framebuffer {
        constructor(width: number, height: number);
        width: number;
        height: number;
        stencil: boolean;
        depth: boolean;
        dirtyId: number;
        dirtyFormat: number;
        dirtySize: number;
        depthTexture: BaseTexture;
        colorTextures: BaseTexture[];
        multisample: MSAA_QUALITY;
        readonly colorTexture: BaseTexture;
        addColorTexture(index?: number, texture?: BaseTexture): this;
        addDepthTexture(texture?: BaseTexture): this;
        enableDepth(): this;
        enableStencil(): this;
        resize(width: number, height: number): void;
        dispose(): void;
        destroyDepthTexture(): void;
    }

    export class GLFramebuffer {
        constructor(framebuffer: WebGLFramebuffer);
        framebuffer: WebGLFramebuffer;
        stencil: WebGLRenderbuffer;
        multisample: MSAA_QUALITY;
        msaaBuffer: WebGLRenderbuffer;
        blitFramebuffer: Framebuffer;
    }

    export class State {
        constructor();
        blendMode: number;
        polygonOffset: number;
        blend: boolean;
        offsets: boolean;
        culling: boolean;
        depthTest: boolean;
        clockwiseFrontFace: boolean;
        static for2d(): State;
    }

    export class Program {
        constructor(vertexSrc?: string, fragmentSrc?: string, name?: string);
        vertexSrc: string;
        fragmentSrc: string;
        extractData(vertexSrc: string, fragmentSrc: string): void;
        attributeData: any;
        uniformData: any;
        static readonly defaultVertexSrc: string;
        static readonly defaultFragmentSrc: string;
        static from(vertexSrc?: string, fragmentSrc?: string, name?: string): Program;
    }

    export class Shader {
        constructor(program?: Program, uniforms?: any);
        program: Program;
        uniforms: any;
        destroy(): void;
        static from(vertexSrc?: string, fragmentSrc?: string, uniforms?: any): Shader;
    }

    export class UniformGroup {
        constructor(uniforms?: any, _static?: boolean);
        uniforms: any;
        group: boolean;
        static: boolean;
        update(): void;
        add(name: string, uniforms: any, _static?: boolean): void;
        static from(uniforms: any, _static?: boolean): UniformGroup;
    }

    export class Geometry {
        constructor(buffers?: Buffer[], attributes?: any);
        buffers: Buffer[];
        indexBuffer: Buffer;
        attributes: any;
        id: number;
        instanced: boolean;
        instanceCount: number;
        refCount: number;
        addAttribute(id: string, buffer: Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number, instance?: boolean): this;
        getAttribute(id: string): Attribute;
        getBuffer(id: string): Buffer;
        addIndex(buffer: Buffer | number[]): this;
        getIndex(): Buffer;
        interleave(): this;
        getSize(): number;
        dispose(): void;
        destroy(): void;
        clone(): Geometry;
        static merge(geometries: Geometry[]): Geometry;
    }

    export class Attribute {
        constructor(buffer: string, size?: number, normalized?: boolean, type?: number, stride?: number, start?: number, instance?: boolean);
        buffer: string;
        size: number;
        normalized: boolean;
        type: number;
        stride: number;
        start: number;
        instance: boolean;
        destroy(): void;
        static from(buffer: string, size?: number, normalized?: boolean, type?: number, stride?: number): Attribute;
    }

    export class Buffer {
        constructor(data: ArrayBuffer | SharedArrayBuffer | ArrayBufferView, _static?: boolean, index?: boolean);
        data: ArrayBuffer | SharedArrayBuffer | ArrayBufferView;
        index: boolean;
        static: boolean;
        id: number;
        update(data?: ArrayBuffer | SharedArrayBuffer | ArrayBufferView): void;
        dispose(): void;
        destroy(): void;
        static from(data: ArrayBufferView | number[]): Buffer;
    }

    export class AbstractRenderer extends utils.EventEmitter {
        constructor(type?: RENDERER_TYPE, options?: any);
        readonly type: RENDERER_TYPE;
        readonly options: any;
        readonly screen: Rectangle;
        readonly view: HTMLCanvasElement;
        readonly resolution: number;
        readonly transparent: boolean;
        readonly autoDensity: boolean;
        readonly preserveDrawingBuffer: boolean;
        readonly clearBeforeRender: boolean;
        readonly width: number;
        readonly height: number;
        resize(screenWidth: number, screenHeight: number): void;
        generateTexture(displayObject: DisplayObject, scaleMode?: SCALE_MODES, resolution?: number, region?: Rectangle): RenderTexture;
        destroy(removeView?: boolean): void;
        backgroundColor: number;
        plugins: any;
        protected initPlugins(staticMap: any): void;
    }

    export class Renderer extends AbstractRenderer {
        constructor(options?: any);
        readonly gl: WebGLRenderingContext;
        readonly CONTEXT_UID: number;
        readonly globalUniforms: UniformGroup;
        readonly mask: systems.MaskSystem;
        readonly context: systems.ContextSystem;
        readonly state: systems.StateSystem;
        readonly shader: systems.ShaderSystem;
        readonly texture: systems.TextureSystem;
        readonly geometry: systems.GeometrySystem;
        readonly framebuffer: systems.FramebufferSystem;
        readonly scissor: systems.ScissorSystem;
        readonly stencil: systems.StencilSystem;
        readonly projection: systems.ProjectionSystem;
        readonly textureGC: systems.TextureGCSystem;
        readonly filter: systems.FilterSystem;
        readonly renderTexture: systems.RenderTextureSystem;
        readonly batch: systems.BatchSystem;
        addSystem(ClassRef: any, name?: string): this;
        render(displayObject: DisplayObject, renderTexture?: RenderTexture, clear?: boolean, transform?: Matrix, skipUpdateTransform?: boolean): void;
        resize(screenWidth: number, screenHeight: number): void;
        reset(): this;
        clear(): void;
        destroy(removeView?: boolean): void;
        static registerPlugin(pluginName: string, ctor: Function): void;
        static create(options?: any): Renderer;
    }

    export class System {
        constructor(renderer: Renderer);
        renderer: Renderer;
        destroy(): void;
    }

    export namespace systems {
        class FilterSystem extends System {
            push(target: DisplayObject, filters: Filter[]): void;
            pop(): void;
            bindAndClear(filterTexture: RenderTexture, clearMode?: CLEAR_MODES): void;
            applyFilter(filter: Filter, input: RenderTexture, output: RenderTexture, clearMode?: CLEAR_MODES): void;
            calculateSpriteMatrix(outputMatrix: Matrix, sprite: Sprite): Matrix;
            destroy(): void;
            getOptimalFilterTexture(minWidth: number, minHeight: number, resolution?: number): RenderTexture;
            getFilterTexture(input: RenderTexture | number, resolution?: number): RenderTexture;
            returnFilterTexture(renderTexture: RenderTexture): void;
            emptyPool(): void;
            resize(): void;
        }

        class BatchSystem extends System {
            setObjectRenderer(objectRenderer: ObjectRenderer): void;
            flush(): void;
            reset(): void;
        }

        class ContextSystem extends System {
            readonly isLost: boolean;
            contextChange(gl: WebGLRenderingContext): void;
            initFromContext(gl: WebGLRenderingContext): void;
            initFromOptions(options: any): void;
        }

        class FramebufferSystem extends System {
            bind(framebuffer: Framebuffer, frame?: Rectangle): void;
            setViewport(x: number, y: number, width: number, height: number): void;
            readonly size: { x: number, y: number, width: number, height: number };
            clear(r: number, g: number, b: number, a: number, mask?: number): void;
            blit(framebuffer?: Framebuffer, sourcePixels?: Rectangle, destPixels?: Rectangle): void;
            reset(): void;
        }

        class GeometrySystem extends System {
            bind(geometry: Geometry, shader?: Shader): void;
            reset(): void;
            draw(type: number, size?: number, start?: number, instanceCount?: number): this;
        }

        class MaskSystem extends System {
            push(target: DisplayObject, maskData: MaskData | Sprite | Graphics | DisplayObject): void;
            pop(target: DisplayObject): void;
            detect(maskData: MaskData): void;
        }

        class ScissorSystem extends System {
            push(maskData: MaskData): void;
            pop(): void;
        }

        class StencilSystem extends System {
            push(maskData: MaskData): void;
            pop(maskObject: DisplayObject): void;
        }

        class ProjectionSystem extends System {
            destinationFrame: Rectangle;
            sourceFrame: Rectangle;
            defaultFrame: Rectangle;
            projectionMatrix: Matrix;
            transform: Matrix;
            update(destinationFrame: Rectangle, sourceFrame: Rectangle, resolution: number, root: boolean): void;
        }

        class RenderTextureSystem extends System {
            bind(renderTexture?: RenderTexture, sourceFrame?: Rectangle, destinationFrame?: Rectangle): void;
            clear(clearColor?: number[], mask?: number): void;
            resize(): void;
            reset(): void;
        }

        export class GLProgram {
            constructor(program: WebGLProgram, uniformData: any);
            program: WebGLProgram;
            uniformData: any;
            uniformGroups: any;
            destroy(): void;
        }

        class ShaderSystem extends System {
            bind(shader: Shader, dontSync?: boolean): GLProgram;
            setUniforms(uniforms: any): void;
            syncUniformGroup(group: UniformGroup, syncData?: any): void;
            reset(): void;
        }

        class StateSystem extends System {
            set(state: State): void;
            forceState(state: State): void;
            setBlend(value: boolean): void;
            setOffset(value: boolean): void;
            setDepthTest(value: boolean): void;
            setCullFace(value: boolean): void;
            setFrontFace(value: boolean): void;
            setBlendMode(value: number): void;
            setPolygonOffset(value: number, scale: number): void;
            reset(): void;
        }

        class TextureGCSystem extends System {
            count: number;
            checkCount: number;
            maxIdle: number;
            checkCountMax: number;
            mode: GC_MODES;
            postrender(): void;
            run(): void;
            unload(displayObject: DisplayObject): void;
        }

        class TextureSystem extends System {
            bind(texture: Texture | BaseTexture, location?: number): void;
            reset(): void;
            unbind(texture: BaseTexture): void;
        }
    }

    export class ObjectRenderer extends System {
        constructor(renderer: Renderer);
        flush(): void;
        destroy(): void;
        start(): void;
        stop(): void;
        render(object: DisplayObject): void;
    }

    export class AbstractBatchRenderer extends ObjectRenderer {
        constructor(renderer: Renderer);
        shaderGenerator: BatchShaderGenerator;
        geometryClass: any;
        vertexSize: number;
        state: State;
        size: number;
        MAX_TEXTURES: number;
        contextChange(): void;
        render(element: DisplayObject): void;
        flush(): void;
        start(): void;
        stop(): void;
        destroy(): void;
    }

    export class BatchShaderGenerator {
        constructor(vertexSrc: string, fragTemplate: string);
        generateShader(maxTextures: number): Shader;
    }

    export class BatchGeometry extends Geometry {
        constructor(_static?: boolean);
    }

    export class Graphics extends Container {
        constructor(geometry?: GraphicsGeometry);
        readonly geometry: GraphicsGeometry;
        clone(): Graphics;
        blendMode: number;
        tint: number;
        readonly fill: FillStyle;
        readonly line: LineStyle;
        lineStyle(options?: { width?: number, color?: number, alpha?: number, alignment?: number, native?: boolean, cap?: LINE_CAP, join?: LINE_JOIN, miterLimit?: number } | number): this;
        lineTextureStyle(options?: { width?: number, texture?: Texture, color?: number, alpha?: number, matrix?: Matrix, alignment?: number, native?: boolean, cap?: LINE_CAP, join?: LINE_JOIN, miterLimit?: number }): this;
        moveTo(x: number, y: number): this;
        lineTo(x: number, y: number): this;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): this;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): this;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;
        beginFill(color?: number, alpha?: number): this;
        beginTextureFill(options?: { texture?: Texture, color?: number, alpha?: number, matrix?: Matrix } | Texture): this;
        endFill(): this;
        drawRect(x: number, y: number, width: number, height: number): this;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): this;
        drawCircle(x: number, y: number, radius: number): this;
        drawEllipse(x: number, y: number, width: number, height: number): this;
        drawPolygon(path: number[] | Point[] | Polygon): this;
        drawShape(shape: Circle | Ellipse | Polygon | Rectangle | RoundedRectangle): this;
        drawStar(x: number, y: number, points: number, radius: number, innerRadius?: number, rotation?: number): this;
        clear(): this;
        isFastRect(): boolean;
        containsPoint(point: IPointData): boolean;
        closePath(): this;
        setMatrix(matrix: Matrix): this;
        beginHole(): this;
        endHole(): this;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
    }

    export class GraphicsGeometry extends BatchGeometry {
        constructor();
        clear(): this;
        drawShape(shape: Circle | Ellipse | Polygon | Rectangle | RoundedRectangle, fillStyle?: FillStyle, lineStyle?: LineStyle, matrix?: Matrix): this;
        drawHole(shape: Circle | Ellipse | Polygon | Rectangle | RoundedRectangle, matrix?: Matrix): this;
        destroy(): void;
        containsPoint(point: IPointData): boolean;
        static BATCHABLE_SIZE: number;
    }

    export class FillStyle {
        color: number;
        alpha: number;
        texture: Texture;
        matrix: Matrix;
        visible: boolean;
        clone(): FillStyle;
        reset(): void;
        destroy(): void;
    }

    export class LineStyle extends FillStyle {
        width: number;
        alignment: number;
        native: boolean;
        cap: LINE_CAP;
        join: LINE_JOIN;
        miterLimit: number;
        clone(): LineStyle;
        reset(): void;
    }

    export enum LINE_JOIN {
        MITER = "miter",
        BEVEL = "bevel",
        ROUND = "round"
    }

    export enum LINE_CAP {
        BUTT = "butt",
        ROUND = "round",
        SQUARE = "square"
    }

    export class Sprite extends Container {
        constructor(texture?: Texture);
        anchor: ObservablePoint;
        tint: number;
        blendMode: number;
        pluginName: string;
        roundPixels: boolean;
        texture: Texture;
        width: number;
        height: number;
        calculateVertices(): void;
        calculateTrimmedVertices(): void;
        getLocalBounds(rect?: Rectangle): Rectangle;
        containsPoint(point: IPointData): boolean;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        static from(source: string | Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): Sprite;
    }

    export class Mesh extends Container {
        constructor(geometry: Geometry, shader: Shader | MeshMaterial, state?: State, drawMode?: number);
        geometry: Geometry;
        shader: Shader | MeshMaterial;
        state: State;
        drawMode: number;
        start: number;
        size: number;
        uvBuffer: Buffer;
        verticesBuffer: Buffer;
        material: MeshMaterial;
        blendMode: number;
        roundPixels: boolean;
        tint: number;
        texture: Texture;
        calculateVertices(): void;
        calculateUvs(): void;
        containsPoint(point: IPointData): boolean;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        static BATCHABLE_SIZE: number;
    }

    export class SimpleMesh extends Mesh {
        constructor(texture?: Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);
        vertices: Float32Array;
        autoUpdate: boolean;
    }

    export class SimplePlane extends Mesh {
        constructor(texture: Texture, verticesX: number, verticesY: number);
        texture: Texture;
        textureUpdated(): void;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
    }

    export class NineSlicePlane extends SimplePlane {
        constructor(texture: Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);
        width: number;
        height: number;
        leftWidth: number;
        rightWidth: number;
        topHeight: number;
        bottomHeight: number;
        vertices: Float32Array;
        updateHorizontalVertices(): void;
        updateVerticalVertices(): void;
    }

    export class SimpleRope extends Mesh {
        constructor(texture: Texture, points: Point[], textureScale?: number);
        autoUpdate: boolean;
    }

    export class RopeGeometry extends MeshGeometry {
        constructor(width?: number, points?: Point[], textureScale?: number);
        points: Point[];
        readonly width: number;
        textureScale: number;
        updateVertices(): void;
        update(): void;
    }

    export class MeshGeometry extends Geometry {
        constructor(vertices?: Float32Array | number[], uvs?: Float32Array | number[], index?: Uint16Array | number[]);
        readonly vertexDirtyId: number;
    }

    export class MeshMaterial extends Shader {
        constructor(uSampler: Texture, options?: { alpha?: number, tint?: number, pluginName?: string, program?: Program, uniforms?: any });
        texture: Texture;
        alpha: number;
        tint: number;
        readonly uvMatrix: TextureMatrix;
        batchable: boolean;
        pluginName: string;
        update(): void;
    }

    export class TextureMatrix {
        constructor(texture: Texture, clampMargin?: number);
        texture: Texture;
        readonly mapCoord: Matrix;
        readonly uClampFrame: Float32Array;
        readonly uClampOffset: Float32Array;
        clampOffset: number;
        clampMargin: number;
        readonly isSimple: boolean;
        multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
        update(forceUpdate?: boolean): boolean;
    }

    export class Text extends Sprite {
        constructor(text: string, style?: TextStyle | any, canvas?: HTMLCanvasElement);
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        style: TextStyle;
        text: string;
        resolution: number;
        width: number;
        height: number;
        updateText(respectDirty?: boolean): void;
        getLocalBounds(rect?: Rectangle): Rectangle;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
    }

    export class TextStyle {
        constructor(style?: any);
        styleID: number;
        align: string;
        breakWords: boolean;
        dropShadow: boolean;
        dropShadowAlpha: number;
        dropShadowAngle: number;
        dropShadowBlur: number;
        dropShadowColor: string | number;
        dropShadowDistance: number;
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fillGradientType: number;
        fillGradientStops: number[];
        fontFamily: string | string[];
        fontSize: number | string;
        fontStyle: string;
        fontVariant: string;
        fontWeight: string;
        letterSpacing: number;
        lineHeight: number;
        leading: number;
        lineJoin: string;
        miterLimit: number;
        padding: number;
        stroke: string | number;
        strokeThickness: number;
        textBaseline: string;
        trim: boolean;
        whiteSpace: string;
        wordWrap: boolean;
        wordWrapWidth: number;
        clone(): TextStyle;
        reset(): void;
        toFontString(): string;
    }

    export enum TEXT_GRADIENT {
        LINEAR_VERTICAL = 0,
        LINEAR_HORIZONTAL = 1
    }

    export class TextMetrics {
        constructor(text: string, style: TextStyle, width: number, height: number, lines: string[], lineWidths: number[], lineHeight: number, maxLineWidth: number, fontProperties: any);
        text: string;
        style: TextStyle;
        width: number;
        height: number;
        lines: string[];
        lineWidths: number[];
        lineHeight: number;
        maxLineWidth: number;
        fontProperties: any;
        static measureText(text: string, style: TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement): TextMetrics;
        static measureFont(font: string): any;
        static METRICS_STRING: string;
        static BASELINE_SYMBOL: string;
        static BASELINE_MULTIPLIER: number;
    }

    export class BitmapText extends Container {
        constructor(text: string, style?: { fontName?: string, fontSize?: number, align?: string, tint?: number, letterSpacing?: number, maxWidth?: number });
        tint: number;
        align: string;
        fontName: string;
        fontSize: number;
        anchor: Point | number;
        text: string;
        maxWidth: number;
        maxLineHeight: number;
        textWidth: number;
        letterSpacing: number;
        roundPixels: boolean;
        textHeight: number;
        updateText(): void;
        updateTransform(): void;
        getLocalBounds(rect?: Rectangle): Rectangle;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        static registerFont(data: any, textures: Texture | Texture[] | Record<string, Texture>): BitmapFont;
    }

    export class BitmapFont {
        constructor(data: BitmapFontData, textures: Texture[] | Record<string, Texture>, ownsTextures?: boolean);
        readonly font: string;
        readonly size: number;
        readonly lineHeight: number;
        readonly chars: any;
        destroy(): void;
        static install(data: any, textures: Texture | Texture[] | Record<string, Texture>, ownsTextures?: boolean): BitmapFont;
        static uninstall(name: string): void;
        static from(name: string, textStyle?: TextStyle | any, options?: any): BitmapFont;
        static available: Record<string, BitmapFont>;
        static ALPHA: string[][];
        static NUMERIC: string[][];
        static ALPHANUMERIC: string[][];
        static ASCII: string[][];
    }

    export class BitmapFontData {
        info: any[];
        common: any[];
        page: any[];
        char: any[];
        kerning: any[];
    }

    export class AnimatedSprite extends Sprite {
        constructor(textures: Texture[] | any[], autoUpdate?: boolean);
        animationSpeed: number;
        loop: boolean;
        updateAnchor: boolean;
        onComplete: () => void;
        onFrameChange: (currentFrame: number) => void;
        onLoop: () => void;
        totalFrames: number;
        textures: Texture[] | any[];
        currentFrame: number;
        playing: boolean;
        autoUpdate: boolean;
        stop(): void;
        play(): void;
        gotoAndStop(frameNumber: number): void;
        gotoAndPlay(frameNumber: number): void;
        update(deltaTime: number): void;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        static fromFrames(frames: string[]): AnimatedSprite;
        static fromImages(images: string[]): AnimatedSprite;
    }

    export class TilingSprite extends Sprite {
        constructor(texture: Texture, width?: number, height?: number);
        tileTransform: Transform;
        uvMatrix: TextureMatrix;
        pluginName: string;
        clampMargin: number;
        tileScale: ObservablePoint;
        tilePosition: ObservablePoint;
        width: number;
        height: number;
        getLocalBounds(rect?: Rectangle): Rectangle;
        containsPoint(point: IPointData): boolean;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        static from(source: string | Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): TilingSprite;
    }

    export class ParticleContainer extends Container {
        constructor(maxSize?: number, properties?: any, batchSize?: number, autoResize?: boolean);
        blendMode: number;
        autoResize: boolean;
        roundPixels: boolean;
        readonly baseTexture: BaseTexture;
        tint: number;
        destroy(options?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
    }

    export class Filter extends Shader {
        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: any);
        padding: number;
        resolution: number;
        enabled: boolean;
        autoFit: boolean;
        legacy: boolean;
        state: State;
        apply(filterManager: systems.FilterSystem, input: RenderTexture, output: RenderTexture, clearMode?: CLEAR_MODES, currentState?: any): void;
        blendMode: number;
        static readonly defaultVertexSrc: string;
        static readonly defaultFragmentSrc: string;
    }

    export namespace filters {
        class AlphaFilter extends Filter {
            constructor(alpha?: number);
            alpha: number;
        }

        class BlurFilter extends Filter {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);
            blur: number;
            quality: number;
            blurX: number;
            blurY: number;
            blendMode: number;
            repeatEdgePixels: boolean;
        }

        class BlurFilterPass extends Filter {
            constructor(horizontal: boolean, strength?: number, quality?: number, resolution?: number, kernelSize?: number);
            blur: number;
            quality: number;
        }

        class ColorMatrixFilter extends Filter {
            constructor();
            matrix: number[];
            alpha: number;
            brightness(b: number, multiply?: boolean): void;
            greyscale(scale: number, multiply?: boolean): void;
            blackAndWhite(multiply?: boolean): void;
            hue(rotation: number, multiply?: boolean): void;
            contrast(amount: number, multiply?: boolean): void;
            saturate(amount?: number, multiply?: boolean): void;
            desaturate(): void;
            negative(multiply?: boolean): void;
            sepia(multiply?: boolean): void;
            technicolor(multiply?: boolean): void;
            polaroid(multiply?: boolean): void;
            toBGR(multiply?: boolean): void;
            kodachrome(multiply?: boolean): void;
            browni(multiply?: boolean): void;
            vintage(multiply?: boolean): void;
            colorTone(desaturation?: number, toned?: number, lightColor?: number, darkColor?: number, multiply?: boolean): void;
            night(intensity?: number, multiply?: boolean): void;
            predator(amount: number, multiply?: boolean): void;
            lsd(multiply?: boolean): void;
            reset(): void;
            grayscale(scale: number, multiply?: boolean): void;
        }

        class DisplacementFilter extends Filter {
            constructor(sprite: Sprite, scale?: number);
            scale: Point;
            map: Texture;
        }

        class FXAAFilter extends Filter {
            constructor();
        }

        class NoiseFilter extends Filter {
            constructor(noise?: number, seed?: number);
            noise: number;
            seed: number;
        }
    }

    export class InteractionData {
        global: Point;
        target: DisplayObject;
        originalEvent: MouseEvent | TouchEvent | PointerEvent;
        identifier: number;
        isPrimary: boolean;
        button: number;
        buttons: number;
        width: number;
        height: number;
        tiltX: number;
        tiltY: number;
        pointerType: string;
        pressure: number;
        rotationAngle: number;
        twist: number;
        tangentialPressure: number;
        readonly pointerId: number;
        getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;
    }

    export class InteractionEvent {
        stopped: boolean;
        target: DisplayObject;
        currentTarget: DisplayObject;
        type: string;
        data: InteractionData;
        stopPropagation(): void;
        reset(): void;
    }

    export class InteractionManager extends utils.EventEmitter {
        constructor(renderer: Renderer, options?: any);
        renderer: Renderer;
        autoPreventDefault: boolean;
        interactionFrequency: number;
        mouse: InteractionData;
        eventData: InteractionEvent;
        useSystemTicker: boolean;
        readonly lastObjectRendered: DisplayObject;
        hitTest(globalPoint: Point, root?: Container): DisplayObject;
        setTargetElement(element: HTMLElement, resolution?: number): void;
        tickerUpdate(deltaTime: number): void;
        update(): void;
        setCursorMode(mode: string): void;
        destroy(): void;
    }

    export class AccessibilityManager {
        constructor(renderer: Renderer);
        isActive: boolean;
        isMobileAccessibility: boolean;
        update(): void;
        destroy(): void;
    }

    export class Extract {
        constructor(renderer: Renderer);
        image(target?: DisplayObject | RenderTexture, format?: string, quality?: number): HTMLImageElement;
        base64(target?: DisplayObject | RenderTexture, format?: string, quality?: number): string;
        canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
        pixels(target?: DisplayObject | RenderTexture): Uint8Array;
        destroy(): void;
    }

    export class Prepare extends BasePrepare {
        constructor(renderer: Renderer);
    }

    export class BasePrepare {
        constructor(renderer: AbstractRenderer);
        upload(item: any, done?: Function): void;
        add(item: any): this;
        destroy(): void;
    }

    export class Loader extends utils.EventEmitter {
        constructor(baseUrl?: string, concurrency?: number);
        baseUrl: string;
        progress: number;
        loading: boolean;
        defaultQueryString: string;
        resources: any;
        onProgress: any;
        onError: any;
        onLoad: any;
        onStart: any;
        onComplete: any;
        add(name: string, url: string, options?: any, cb?: Function): this;
        add(url: string, options?: any, cb?: Function): this;
        add(name: string, url: string, cb?: Function): this;
        add(url: string, cb?: Function): this;
        add(options: any, cb?: Function): this;
        add(resources: any[], cb?: Function): this;
        pre(fn: Function): this;
        use(fn: Function): this;
        reset(): this;
        load(cb?: Function): this;
        destroy(): void;
        static readonly shared: Loader;
        static registerPlugin(plugin: any): typeof Loader;
    }

    export class LoaderResource {
        constructor(name: string, url: string, options?: any);
        name: string;
        url: string;
        extension: string;
        data: any;
        crossOrigin: string;
        timeout: number;
        loadType: number;
        xhrType: string;
        metadata: any;
        error: Error;
        xhr: XMLHttpRequest;
        children: LoaderResource[];
        type: number;
        progressChunk: number;
        onStart: any;
        onProgress: any;
        onComplete: any;
        onAfterMiddleware: any;
        readonly isDataUrl: boolean;
        readonly isComplete: boolean;
        readonly isLoading: boolean;
        complete(): void;
        abort(message?: string): void;
        load(cb?: Function): void;
        texture: Texture;
        textures: any;
        static setExtensionLoadType(extname: string, loadType: number): void;
        static setExtensionXhrType(extname: string, xhrType: string): void;
        static readonly STATUS_FLAGS: any;
        static readonly TYPE: any;
        static readonly LOAD_TYPE: any;
        static readonly XHR_RESPONSE_TYPE: any;
        static readonly EMPTY_GIF: string;
    }

    export class Application {
        constructor(options?: {
            autoStart?: boolean;
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            preserveDrawingBuffer?: boolean;
            resolution?: number;
            forceCanvas?: boolean;
            backgroundColor?: number;
            clearBeforeRender?: boolean;
            powerPreference?: string;
            sharedTicker?: boolean;
            sharedLoader?: boolean;
            resizeTo?: Window | HTMLElement;
        });
        renderer: Renderer;
        stage: Container;
        readonly view: HTMLCanvasElement;
        readonly screen: Rectangle;
        render(): void;
        destroy(removeView?: boolean, stageOptions?: { children?: boolean, texture?: boolean, baseTexture?: boolean }): void;
        static registerPlugin(plugin: any): void;
        loader: Loader;
        ticker: Ticker;
        start(): void;
        stop(): void;
    }

    // Mixins
    export interface DisplayObject {
        cacheAsBitmap: boolean;
        name: string;
        getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
    }

    export interface Container {
        getChildByName(name: string, deep?: boolean): DisplayObject;
    }

    export class MaskData {
        constructor(maskObject?: DisplayObject);
        type: MASK_TYPES;
        autoDetect: boolean;
        maskObject: DisplayObject;
        pooled: boolean;
        isMaskData: boolean;
        reset(): void;
        copyCountersOrReset(maskAbove: MaskData): void;
    }
}