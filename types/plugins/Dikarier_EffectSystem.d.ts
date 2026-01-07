declare interface DikarierEffectData {
    id: string;
    effect: string;
    param: any;
    actor: Game_Actor | null;
    stateId: number | null;
    totalDuration: number;
    fadeDuration: number;
    elapsed: number;
    intensity: number;
    state: 'fadeIn' | 'full' | 'fadeOut';
    fadingOutManual: boolean;
    fadeOutStartTime: number;
    fadeOutStartTimeFixed?: boolean;
    slowFactor?: number;
    originalSpeed?: number;
}

declare interface DikarierPendingEffectData {
    effectName: string;
    param: any;
    fadeInDuration: number | null;
    duration: number;
    actor: Game_Actor | null;
    stateId: number | null;
}

declare interface DikarierEffectParsedData {
    effect: string;
    param: any;
    fadeIn: number | null;
}

declare class DikarierScreenEffects {
    static effectRegistry: Record<string, (screen: any, ...args: any[]) => void>;
    static INTERNAL_STATE_TIMER_EFFECT_NAME: string;
    static activeEffects: DikarierEffectData[];
    static effectTime: number;
    static fadeIn: boolean;
    static fadeOut: boolean;
    static fadeProgress: number;
    static FADE_DURATION_DEFAULT: number;
    static pendingEffects: DikarierPendingEffectData[];

    static getScreen(): any;
    static applyEffect(effectName: string, param: any, fadeInDuration: number | null, duration: number, actor: Game_Actor | null, stateId: number | null): void;
    static clearEffect(effectName: string, actor?: Game_Actor | null, stateId?: number | null): void;
    static clearAllEffects(): void;
    static update(delta: number): void;
    static lerpColor(color1: number, color2: number, t: number): number;
    static saveState(): {
        activeEffects: any[];
        effectTime: number;
        effectStates: any;
        pendingEffects: any[];
    };
    static loadState(state: any): void;

    static alcoholEffect(screen: any): void;
    static updateAlcoholEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static drugsEffect(screen: any): void;
    static updateDrugsEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static psychosisEffect(screen: any): void;
    static updatePsychosisEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static traumaEffect(screen: any): void;
    static updateTraumaEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static paranoiaEffect(screen: any): void;
    static updateParanoiaEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static hallucinationEffect(screen: any): void;
    static updateHallucinationEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static dizzyEffect(screen: any): void;
    static updateDizzyEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static shockEffect(screen: any): void;
    static updateShockEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static panicEffect(screen: any): void;
    static updatePanicEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static depressionEffect(screen: any): void;
    static updateDepressionEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static anxietyEffect(screen: any): void;
    static updateAnxietyEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static confusionEffect(screen: any): void;
    static updateConfusionEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static fearEffect(screen: any): void;
    static updateFearEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static disorientationEffect(screen: any): void;
    static updateDisorientationEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static nightmareEffect(screen: any): void;
    static updateNightmareEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static madnessEffect(screen: any): void;
    static updateMadnessEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static deliriumEffect(screen: any): void;
    static updateDeliriumEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static blindnessEffect(screen: any): void;
    static updateBlindnessEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static tinnitusEffect(screen: any): void;
    static updateTinnitusEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static timeDistortionEffect(screen: any): void;
    static updateTimeDistortionEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static hangoverEffect(screen: any): void;
    static updateHangoverEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static slowEffect(screen: any, speed?: number, actor?: Game_Actor | null): void;
    static updateSlowEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static clearSlowEffect(actor?: Game_Actor | null): void;
    static lsdEffect(screen: any): void;
    static updateLSDEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static cocaineEffect(screen: any): void;
    static updateCocaineEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static marijuanaEffect(screen: any): void;
    static updateMarijuanaEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static heroinEffect(screen: any): void;
    static updateHeroinEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static mdmaEffect(screen: any): void;
    static updateMDMAEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static methEffect(screen: any): void;
    static updateMethEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static ketamineEffect(screen: any): void;
    static updateKetamineEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static psilocybinEffect(screen: any): void;
    static updatePsilocybinEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static dmtEffect(screen: any): void;
    static updateDMTEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static opiumEffect(screen: any): void;
    static updateOpiumEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static amphetamineEffect(screen: any): void;
    static updateAmphetamineEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static salviaEffect(screen: any): void;
    static updateSalviaEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static pcpEffect(screen: any): void;
    static updatePCPEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static mescalineEffect(screen: any): void;
    static updateMescalineEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static ayahuascaEffect(screen: any): void;
    static updateAyahuascaEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static barbituratesEffect(screen: any): void;
    static updateBarbituratesEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static xanaxEffect(screen: any): void;
    static updateXanaxEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static ghbEffect(screen: any): void;
    static updateGHBEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static nitrousEffect(screen: any): void;
    static updateNitrousEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static ecstasyEffect(screen: any): void;
    static updateEcstasyEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static deprivationEffect(screen: any): void;
    static updateDeprivationEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static frozenEffect(screen: any): void;
    static updateFrozenEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static emergenceEffect(screen: any): void;
    static updateEmergenceEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static hashishEffect(screen: any): void;
    static updateHashishEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
    static krokodilEffect(screen: any): void;
    static updateKrokodilEffect(screen: any, effectData: DikarierEffectData, currentFrameFilters: any[]): void;
}

declare var des: {
    random(min: number, max: number): number;
    randfloat(min: number, max: number): number;
    mainClass: typeof DikarierScreenEffects;
    getEffects(): DikarierEffectData[];
};

declare interface Game_Player {
    _originalSpeed?: number;
    _slowFactor?: number;
}

declare interface Game_Battler {
    extractStateDuration(note: string): number;
    extractFadeInDuration(note: string): number | null;
    extractEffectsFromNote(note: string): DikarierEffectParsedData[];
}