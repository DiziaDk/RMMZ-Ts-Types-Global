declare namespace KDCore {
    class Sprite extends Sprite_Base {
        constructor();
        move(x: number, y: number): void;
        isUnderMouse(): boolean;
    }
    class ParamLoader {
        constructor(pluginName: string);
        getParam(name: string, def?: any): any;
    }
}

declare namespace AA {
    var PP: ParamsManager;
    var UI: UI_Manager;

    function isABSMap(): boolean;
    function isABSActive(): boolean;
    function isDEV(): boolean;
    function isPro(): boolean;

    namespace Utils {
        function getAASkillObject(skillId: number): any;
        function isAASkill(skillId: number): boolean;
        function isAAItem(itemId: number): boolean;
        function getSafeEValue(paramValue: any, defValue?: number): number;
    }

    class ParamsManager extends KDCore.ParamLoader {
        isPopUpIsActive(): boolean;
        isAllowDodge(): boolean;
        getDodgeSettings(): any;
        getCollisionPreccissionLevel(): number;
    }

    class UI_Manager {
        refreshElement(tag: string): void;
        refresh(): void;
        hide(): void;
        show(): void;
        isSkillSelectorOpen(): boolean;
        closeSkillSelector(): void;
        openSkillSelectorFor(symbol: string): void;
    }
}

declare class AAEntity {
    constructor();
    isActive(): boolean;
    activate(): void;
    deactivate(): void;
    inBattle(): boolean;
    resetBattle(): void;
    isDead(): boolean;
    setDead(): void;
    resetDead(): void;

    character(): Game_Character;
    battler(): Game_Battler;
    sprite(): Sprite_Character;

    setTarget(target: Game_Character): void;
    resetTarget(): void;
    getTarget(): Game_Character | null;
    isHasTarget(): boolean;

    isPlayer(): boolean;
    isAlly(): boolean;
    isEnemy(): boolean;
    teamId(): number;
}

declare class AAEnemyEntity extends AAEntity {
    constructor(eventId: number);
    model(): AAEnemyModelData;
}

declare class AAAllyEntity extends AAEntity {
    constructor(actorId: number);
    model(): AAAllyModelData;
}

declare class AAPlayerEntity extends AAEntity {
    constructor();
}

declare class AASkill2 {
    constructor(idA: number);
    idA: number;

    radius: number | string;
    range: number | string;
    direction: number;
    speed: number | string;
    reloadTime: number | string;

    name(): string;
    isItem(): boolean;
    isSkill(): boolean;
    databaseId(): number;

    gRange(): number;
    gRadius(): number;
    gSpeed(): number;
    gReloadTime(): number;

    isInstant(): boolean;
    isProjectile(): boolean;
    isInPoint(): boolean;
    isSelfAction(): boolean;
    isForEnemies(): boolean;
    isForFriends(): boolean;
    isNeedCasting(): boolean;
}

declare class AAEnemyModelData {
    constructor(eventId: number);
    eventId: number;
    enemyId: number;

    viewRadius: number | string;
    returnRadius: number | string;
    teamId: number | string;

    gViewRadius(): number;
    gReturnRadius(): number;
    gTeamId(): number;
}

declare class AAAllyModelData {
    constructor(actorId: number);
    actorId: number;

    gViewRadius(): number;
    gReturnRadius(): number;
}

declare namespace uAPI {
    function setSkillToPanel(skillId: number, slotSymbol?: string): void;
    function setItemToPanel(itemId: number, slotSymbol?: string): void;
    function getSkillIdFromPanel(slotSymbol: string): number;
    function refreshSkillPanelSafe(): void;

    function pauseABS(): void;
    function resumeABS(): void;

    function scriptAction(scriptAction: string, char?: Game_Character | Game_Interpreter, delay?: number): void;
    function lastLocatorTarget(): Game_Character | null;
    function lastActivatedLocator(): Game_Event | null;

    function playExtraAnimation(x: number, y: number, extraAnimation: string, seName?: string, ox?: number, oy?: number): void;
    function drawEnemyVisors(isDraw: boolean, opacity?: number, color?: string): void;

    function playBattleBgm(name: string, delay?: number): void;
    function stopBattleBgm(delay?: number): void;

    function makePlayerDodge(isForce?: boolean): void;

    function editUI(): void;
    function controlUIElement(tag: string, command: string, value: any): void;
    function showUI(): void;
    function hideUI(): void;
    function resetUserUISettings(): void;

    function showPopUpOnChar(charId: number | string, styleId: string, value: number | string, isForceString?: boolean): void;
    function showPopUpOnMap(x: number | string, y: number | string, styleId: string, value: number | string, isForceString?: boolean): void;
    function showPopUpOnScreen(x: number | string, y: number | string, styleId: string, value: number | string, isForceString?: boolean): void;

    function setBloodSplatterEffectVisible(isEnabled?: boolean): void;

    function enableMapScroll(): void;
    function disableMapScroll(): void;
    function resetMapScroll(): void;

    function gainExpForEnemyDb(enemyId: number, isVisible?: boolean): void;
    function gainExpForEnemyEv(eventId: number, isVisible?: boolean): void;
    function gainHpForBattler(charId: number, value: number, isCrit?: boolean): void;
    function gainMpForBattler(charId: number, value: number, isCrit?: boolean): void;
    function gainExpForParty(value: number): void;
    function gainGoldForParty(value: number): void;

    function getEnemyByLabel(label?: string): Game_Event | null;
    function getEnemiesByLabel(label?: string): Game_Event[];
    function resetHpForEnemy(mapId?: number, eventId?: number): void;
    function spawnFlyingBonus(eventId: number, bonusIds: number[]): void;

    function addCustomGaugeForVariable(parametersId: string, variableId: number, bindedEventId: number, x: number, y: number, isGlobal: boolean): void;
    function addCustomGaugeForEnemy(parametersId: string, enemyEventId: number, bindedEventId: number, x: number, y: number): void;
    function removeVariableCustomGauge(variableId: number): void;
    function removeEnemyCustomGauge(enemyEventId: number): void;

    function spawnEnemy(id: number | string, xOrRegion: number | string, y?: number | string): void;
    function spawnEnemyForced(id: number, x: number, y: number): void;
    function getLastSpawnedEnemy(): Game_Event | null;
    function isEnemyBeenSpawned(): boolean;
    function spawnEnemyAround(id: number | string, x: number | string, y: number | string, radius: number | string): void;
    function spawnEnemyNearPlayer(id: number, maxDistance?: number): void;
    function spawnEnemyAroundForced(id: number, x: number, y: number, radius: number): void;

    function getSpawnPointSpawnedEnemies(spawnPointId: number): Game_Event[];
    function getSpawnPointSpawnedTotal(spawnPointId: number): number;
    function getSpawnPointSpawnedAlive(spawnPointId: number): number;
    function getSpawnEnemiesAlive(): number;
    function getSpawnedByEncountersCount(): number;
    function setSpawnEnemyAnimation(animationId?: number): void;

    function executeAASkillOnMap(ownerId: number | string, teamId: number, skillId: number | string, x: number | string, y: number | string): void;
    function executeAASkillOnMapProjFromPoint(ownerId: number | string, teamId: number, skillId: number | string, x: number, y: number, xOrD: number, tY?: number): void;
    function executeAASkillOnChar(ownerId: number | string, teamId: number, skillId: number | string, charId: number | string): void;
    function executeAASkillOnMapProjFromChar(ownerId: number | string, teamId: number, skillId: number | string, charId: number | string, tX?: number, tY?: number): void;

    function lastUsedSkill(): any;
    function lastUsedSkillTarget(): Game_Character;
    function lastSkillUser(): Game_Character;

    function setTeamIdFor(byWhat: string, value: any, teamId: number, isOuter?: boolean): void;
    function setPvPMode(): void;
    function setPvEMode(): void;
    function getWhoKillMeInPvP(what?: string): any;
}

interface Game_BattlerBase {
    isAppeared(): boolean;
    canUse(item: any): boolean;
    paySkillCost(skill: any): void;
    isOccasionOk(item: any): boolean;

    aaUpdateABS(): void;
    aaCalculateFormula(formula: string): number;
    aaSetSkillTimer(skill: any): void;
    aaIsSkillReadyInTime(skill: any): boolean;
    aaGetRemainTimeForSkill(skillId: number): number;
    canUseABSItem(item: any): boolean;
    meetsABSExtraConditions(item: any): boolean;
    meetsABSSkillContitions(skill: any): boolean;
    meetsABSItemContitions(item: any): boolean;

    aaSetSpeedMod(_aaSpeedModValue: number): void;
    aaSpeedMod(): number;

    addNewStateABS(stateId: number): void;
    clearStatesABS(): void;
    eraseStateABS(stateId: number): void;
}

interface Game_Battler {
    getAASkills(): any[];
    getAAItems(): any[];
    getUsableAASkills(): any[];
    onAAActionComplete(): void;
    onAAActionStart(): void;
    aaPlayAAWeaponMotionAnimation(skill: AASkill2): void;

    aaGainHpWithPopUp(value: number, isCrit?: boolean): void;
    aaGainMpWithPopUp(value: number, isCrit?: boolean): void;
}

interface Game_Actor {
    isSupportAIControl(): boolean;
    AACharacter(): Game_Character | null;
    isPlayer(): boolean;
    aaCheckAndParseExtendedHitBoxes(): void;
    aaGetExtendedHitBoxes(): number[] | null;
    aaOnEquipChanged(): void;
    aaGetProjectileStartOffset(): number | null;
    aaGetWeaponAttackSkillId(): number;
    aaGetDefaultSecondarySkillId(): number;
    aaIsEquippedInHeavyArmor(): boolean;

    aaDisplayCustomLevelUp(): void;
    aaIsCanUseWeaponWithExtension(): boolean;
    aaGetActiveWeaponExtensionDefinition(): any;
    aaGetActiveSkillExtensionItemId(): number;
    aaSetActiveSkillExtensionItemId(extItemId: number): void;
}

interface Game_CharacterBase {
    isABS(): boolean;
    AAEntity(): AAEntity | null;
    AAModel(): any;
    initABS(): void;
    stopABS(): void;
    clearABS(): void;
    AABattler(): Game_Battler | null;
    AASprite(): Sprite_Character | null;
    AALogic(): any;
    inBattle(): boolean;
    isActive(): boolean;
    aaIsInvincible(): boolean;
    isMyEnemy(character: Game_CharacterBase): boolean;
    aaUpdateABS(): void;
    aaCharId(): number;
    aaDirection(): number;
    aaIsDodging(): boolean;

    aaOnActionOnMe(action: any): void;
    aaOnDefeat(): void;
    aaOnDeath(): void;
    aaOnRevive(): void;

    aaIsCanMoveByImpulse(): boolean;
    aaApplyImpulse(power: number, dir: number, withJump: boolean, isReversed?: boolean): void;

    aaClearCharacterEffects(): void;
    aaMotionDX(): number;
    aaRequestShakeEffect(time?: number): void;
    aaIsShakeRequested(): boolean;
    aaIsShatterRequested(): boolean;
    aaRequestShatterEffect(dx?: number, dy?: number): void;
    aaOnShatterEffectCreated(): void;
    aaIsSupportMotion(): boolean;
    aaIsMotionRequested(): boolean;
    aaClearMotion(): void;
    aaRequestMotion(aaMotionType: string): void;

    canMove(): boolean;
    aaSpeedMod(): number;
    posExt(x: number, y: number): boolean;
    screenXExt(): number[];
    screenYExt(): number[];
    aaIsHaveExtendedHitBoxes(): boolean;
    aaGetExtendedHitBoxes(): number[] | null;
    aaIsThisCharCanUseDiagMovement(): boolean;
    distTo(point: {x: number, y: number}): number;
    distToCol(point: {x: number, y: number}): number;
    aaIsNearThePoint(point: {x: number, y: number}, minDist?: number): boolean;
    aaTurnTowardTarget(): void;
    aaFindDirectionToDiagonal(goalX: number, goalY: number): number;
}

interface Game_Character {
    aaInSkillCastingProcess(): boolean;
    aaStartSkillCastingProcess(skill: AASkill2): void;
    aaAbortSkillCastingProcess(): void;
    aaClearSkillCastingProcess(): void;
    aaFinishSkillCastingProcess(): void;
    aaOnEventWhileCasting(eventName: string): void;

    setActiveAASkill(_activeAASkillId: number): void;
    activeAASkill(): AASkill2 | null;
    startPerformAASkill(point: {x: number, y: number}, afterCasting?: boolean): void;

    aaUpdateAIMovement(): void;
    aaStoreMoveData(): void;
    aaRestoreMoveData(): void;
    aaResetDefaultFreqAndSpeed(): void;
    aaStoreHomePoint(): void;
    aaResetHomePoint(): void;

    aaSetMoveTypeReturnToHomePoint(): void;
    aaSetMoveTypeApproachTarget(): void;
    aaSetMoveTypeKeepBattleDistance(): void;
    aaSetMoveTypeStayStill(): void;
    aaMoveTypeKeepDistance(): void;
    aaMoveTypeToTarget(target?: Game_Character): void;
    aaMoveTypeToPoint(point: {x: number, y: number}): void;

    aaChangeModelParam(paramName: string, newValue: any): void;
}

interface Game_Event {
    aaIsShouldBeReActivated(): boolean;
    aaCheckABSEventState(): void;
    aaIsABSEventPage(): boolean;

    aaStartCommonEvent(ceId: number): void;
    aaIsSpawned(): boolean;
    aaIsLabeledAs(label: string): boolean;

    aaInitExCollider(): void;

    aaOnVectorHit(skillId: number): void;
    aaIsBlockVision(): boolean;
    aaIsHaveVectorHitAction(skillId: number): boolean;
    aaIsHaveSpawnBlockFlag(): boolean;
    aaIsHaveSpawnPointId(): boolean;
    aaIsHaveLocator(): boolean;
}

interface Game_Player {
    aaOnMapSceneEnd(): void;
    canBeControlled(): boolean;
    isInSkillTargetingState(): boolean;
    aaIsHaveABSSkill(skillId: number): boolean;
    onSkillTargetSelected(): void;
    onSkillTargetCancel(): void;

    aaGetABSFollowers(): Game_Follower[];
    aaIsHaveAnyABSFollower(): boolean;

    aaPerformPlayerAttack01(isSmart?: boolean): void;
    aaPerformPlayerAttack02(isSmart?: boolean): void;
    aaPerformAttack(isPrimary: boolean, isSmart?: boolean): void;
    aaPerformSmartSkillUse(skillId: number, point: {x: number, y: number}): void;
    aaTryPerformSkill(skillId: number, forced?: boolean): void;
    prepareAASkillToExecute(skill: AASkill2): void;
    aaRefreshABSSkillsForPanel(): void;

    aaIsInvincible(): boolean;
    aaIsDodging(): boolean;
    aaIsCanDodgeNow(): boolean;
    aaPerformDodge(): void;
}

interface Game_Party {
    aaRefreshABSStatesSet(): void;
    aaCheckDeath(): void;
    aaGainExpForParty(value: number, isVisible?: boolean): void;
    aaGainGoldForParty(value: number): void;
    pOnSomeItemBeenGained(): void;
}

interface Game_Map {
    aaIsHaveEncounters(): boolean;
    aaIsABSOnlyEncounters(): boolean;
    aaGetEncountersCount(): number;

    aaSpawnEnemyInPoint(refEventId: number, x: number, y: number, isForce?: boolean): void;
    aaIsMapPointIsValidForSpawn(x: number, y: number): boolean;
    aaSpawnEnemyInRegion(refEventId: number, regionId: number, isForce?: boolean): void;
    aaGetRandomSpawnPointForRegion(regionId: number): {x: number, y: number} | null;
    aaGetRandomSpawnPointInRadius(x: number, y: number, radius: number): {x: number, y: number} | null;

    aaRegisterBlockSpawnEventExist(): void;
    aaIsSpawnBlockEventRegistred(): boolean;
    aaIsSpawnOnMapPointIsBlocked(x: number, y: number): boolean;

    eventsAA(): Game_Event[];
    followersAA(): Game_Follower[];
    eventAAWithLabel(label?: string): Game_Event[];
    eventsWithSpawnPoints(): Game_Event[];
    eventsWithLocators(): Game_Event[];
    eventsXyAA(x: number, y: number): Game_Event[];
    eventsXyAAExt(x: number, y: number): Game_Event[];
    eventsXyNoAAExt(x: number, y: number): Game_Event[];
    eventsXyExt(x: number, y: number): Game_Event[];

    aaSpriteset(): Spriteset_Map;

    aaSaveEnemiesHpDataForMap(mapId: number, data: any): void;
    aaGetEnemiesHpDataForMap(mapId: number): any;
}

interface Game_Interpreter {
    aaBattler(): Game_Battler | null;
    aaEvent(): Game_Event | null;
    aaChangeAIParam(paramName: string, newValue: any): void;
    aaExecuteSAction(action: string): void;
    aaGainExp(): void;
}

interface Scene_Map {
    onMapTouchAA(): void;
}

interface Sprite_Character {
    isPlayer(): boolean;
    isABSEntity(): boolean;
    isAllyParty(): boolean;
    isEnemy(): boolean;
}

interface Spriteset_Map {
    aaRegisterDynamicSprite(sprite: Sprite, character: Game_Character, dx?: number, dy?: number): void;
    aaRemoveDynamicSprite(sprite: Sprite): void;
    aaGetDamagePopUpLayer(): Sprite;
}