# 🎨 Hue Map

[![npm version](https://img.shields.io/npm/v/hue-map)](https://www.npmjs.com/package/hue-map)
[![minzip size](https://img.shields.io/bundlephobia/minzip/hue-map)](https://bundlephobia.com/package/hue-map)

Interpolate gradients based on common palettes. **[See a demo](https://giraugh.github.io/hue-map/)**.

Inspired by D3 colour scales, with maps from [colormap](https://github.com/bpostlethwaite/colormap).

## Installation

```bash
yarn add hue-map
```

## Usage

```js
import createPalette from 'hue-map'

const myPalette = createPalette({
  map: 'viridis',
  steps: 3,
  format: 'cssHex',
})

console.log(myPalette)
// ['#472C7AFF', '#2C718EFF', '#5CC863FF']
```

## API

The default export is a function that takes an options object.

### Options

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `map` | `string` | `'viridis'` | The colour map to use, see below for a list of built-in colour maps. You can also provide a custom colour map. |
| `steps` | `number` | `10` | The number of colour shades to return. |
| `format` | `'float' \| 'rgba' \| 'cssHex' \| 'cssRGBA'` | `'cssHex'` | The format of the returned colours. E.g. `float` for `[0.96, 0.61, 0, 1]`, `rgba` for `[247, 158, 0, 1]`, `cssHex` for `'#F79E00FF'`, and `cssRGBA` for `'rgba(247, 158, 0, 1)'`. |

### Built-in maps

There are several built-in colour maps available to use:

`jet`, `hsv`, `hot`, `spring`, `summer`, `autumn`, `winter`, `bone`, `copper`, `greys`, `yignbu`, `greens`, `yiorrd`, `bluered`, `rdbu`, `picnic`, `rainbow`, `portland`, `blackbody`, `earth`, `electric`, `alpha`, `viridis`, `inferno`, `magma`, `plasma`, `warm`, `cool`, `rainbow-soft`, `bathymetry`, `cdom`, `chlorophyll`, `density`, `freesurface-blue`, `freesurface-red`, `oxygen`, `par`, `phase`, `salinity`, `temperature`, `turbidity`, `velocity-blue`, `velocity-green`, `cubehelix`

Visit the [demo page](https://giraugh.github.io/hue-map/) to see a list with examples.

### Custom colour maps

> Coming soon...

## Development

1. Clone the repo onto your machine
2. Run `yarn` to install dependencies
3. Run `yarn dev` to test palettes with a demo page

Build the library to `dist` using `yarn build`.

## Contributing

Issue contributions and PRs are greatly welcomed and appreciated!

This library uses [changesets](https://github.com/changesets/changesets), if the changes you've made would constitute a version bump, run `yarn changeset` and follow the prompts to document the changes you've made. Changesets are consumed on releases, and used to generate a changelog and bump version number.

## License

`hue-map` is licensed under MIT
