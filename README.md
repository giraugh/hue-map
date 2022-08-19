# 🎨 Hue Map

[![npm version](https://img.shields.io/npm/v/hue-map)](https://www.npmjs.com/package/hue-map)
[![minzip size](https://img.shields.io/bundlephobia/minzip/hue-map)](https://bundlephobia.com/package/hue-map)

Interpolate gradients based on common palettes

## Installation

```bash
yarn add hue-map
```

## Usage

```js
import createPalette from 'hue-map'

const myPalette = createPalette({
  map: 'viridis',
  shades: 3,
  format: 'hex',
})

console.log(myPalette)
// ['#hello', '#there', '#ewan']
```

## API

The default export is a function that takes an options object.

### Options

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `map` | `string | array[]` | `'viridis'` | The colour map to use, see below for a list of built-in colour maps. You can also provide a custom colour map. |
| `shades` | `number` | `10` | The number of colour shades to return. |
| `format` | `'float' | 'rgba' | 'cssHex' | 'cssRGBA'` | The format of the returned colours. E.g. `float` for `[0.96, 0.61, 0, 1]`, `rgba` for `[247, 158, 0, 1]`, `cssHex` for `'#F79E00'`, and `cssRGBA` for `'rgba(247, 158, 0, 1)'`. |

### Built-in maps

There are several built-in colour maps available to use.

| Name | Preview |
| ---- | ------- |
| `jet` |
| `hsv` |
| `hot` |
| `spring` |
| `summer` |
| `autumn` |
| `winter` |
| `bone` |
| `copper` |
| `greys` |
| `yignbu` |
| `greens` |
| `yiorrd` |
| `bluered` |
| `rdbu` |
| `picnic` |
| `rainbow` |
| `portland` |
| `blackbody` |
| `earth` |
| `electric` |
| `alpha` |
| `viridis` |
| `inferno` |
| `magma` |
| `plasma` |
| `warm` |
| `cool` |
| `rainbow-soft` |
| `bathymetry` |
| `cdom` |
| `chlorophyll` |
| `density` |
| `freesurface-blue` |
| `freesurface-red` |
| `oxygen` |
| `par` |
| `phase` |
| `salinity` |
| `temperature` |
| `turbidity` |
| `velocity-blue` |
| `velocity-green` |
| `cubehelix` |

## Examples

## Development

1. Clone the repo onto your machine
2. Run `yarn` to install dependencies
3. Run `yarn ???` TODO:

Build the library to `dist` using `yarn build`.

## Contributing

Issue contributions and PRs are greatly welcomed and appreciated!

## License

`hue-map` is licensed under MIT
