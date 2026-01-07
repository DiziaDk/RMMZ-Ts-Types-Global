# RPG Maker MZ TypeScript Boilerplate (Global Scope)

**Scope:** Global (No Modules) | **Target:** ES5/ES6 | **Environment:** RMMZ
[Read in Russian (Читать на русском)](README_RU.md)

A complete starter setup for writing RPG Maker MZ plugins in TypeScript using the native **Global Scope**.

Unlike complex Webpack setups, this template mirrors the engine's native environment. It includes type definitions for the Core Engine, PIXI.js, and popular plugins like Alpha ABS Z.

## 📂 Structure

This repository is designed to be placed as a `ts` folder inside your RPG Maker MZ project root.

```text
YourProject/
├── js/
├── img/
├── ts/                 <-- This repository
│   ├── types/          <-- Definitions (.d.ts)
│   ├── output/         <-- Compiled JS files go here
│   ├── tsconfig.json   <-- Compiler config
│   └── MyPlugin.ts     <-- Your source code
└── game.rmmzproject
```

## 📦 Included Type Definitions

The `types/` folder contains definitions configured for global access:

1.  **RMMZ Core:** Full engine coverage (`$gameParty`, `Scene_Map`, `Window_Base`).
2.  **PIXI.js:** Adjusted specifically for RMMZ compatibility.
3.  **Plugin Declarations (`types/plugins/`):**
    *   **Alpha ABS Z (ABSZ):** Full types for Phoenix KageDesu's Action Battle System (`KDCore`, `AA`, `uAPI`).
    *   **Dikarier Ecosystem:** Types for Dikarier Core, WeatherControl, and EffectSystem.
    *   *Note on EffectSystem:* API is currently provisional due to source obfuscation.

## 🚀 How to Use

1.  Create a folder named `ts` in your RPG Maker project directory.
2.  Clone or unzip this repository into that `ts` folder.
3.  Create your `.ts` file (e.g., `MyAwesomePlugin.ts`) in the root of the `ts` folder.
4.  Run the TypeScript compiler (`tsc`).
5.  The compiled plugin will appear in the `output/` folder.

## ⚙️ Configuration

The included `tsconfig.json` is pre-configured to:
*   Compile to **ES5** (compatible with RMMZ).
*   Disable modules (Ambient Context).
*   Load **PIXI types first** to avoid conflicts (Crucial step).
*   Output files to `./output`.

## License

MIT License.