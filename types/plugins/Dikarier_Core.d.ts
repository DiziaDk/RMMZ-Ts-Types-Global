declare namespace DCore {
    let pluginName: string;
    let pluginVersion: string;

    function itemCount(id: number, action?: string, count?: number): boolean;
    function weaponCount(id: number, action?: string, count?: number): boolean;
    function armorCount(id: number, action?: string, count?: number): boolean;
    function thisRegion(): number;
    function membersInParty(ID: number): boolean;
    function changeName(ID: number, length: number): void;
    function random(min: number, max: number): number;
    function randFloat(min: number, max: number): number;
    function persentRandom(persent: number): boolean;
    function getData(fileName: string): Promise<any>;
    function getDataSync(fileName: string): any;
}