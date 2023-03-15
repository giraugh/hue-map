import { RGBA } from './util';
declare const maps: {
    jet: number[][];
    hsv: number[][];
    hot: number[][];
    spring: number[][];
    summer: number[][];
    autumn: number[][];
    winter: number[][];
    bone: number[][];
    copper: number[][];
    greys: number[][];
    yignbu: number[][];
    greens: number[][];
    yiorrd: number[][];
    bluered: number[][];
    rdbu: number[][];
    picnic: number[][];
    rainbow: number[][];
    portland: number[][];
    blackbody: number[][];
    earth: number[][];
    electric: number[][];
    alpha: number[][];
    viridis: number[][];
    inferno: number[][];
    magma: number[][];
    plasma: number[][];
    warm: number[][];
    cool: number[][];
    'rainbow-soft': number[][];
    bathymetry: number[][];
    cdom: number[][];
    chlorophyll: number[][];
    density: number[][];
    'freesurface-blue': number[][];
    'freesurface-red': number[][];
    oxygen: number[][];
    par: number[][];
    phase: number[][];
    salinity: number[][];
    temperature: number[][];
    turbidity: number[][];
    'velocity-blue': number[][];
    'velocity-green': number[][];
    cubehelix: number[][];
};
export type ColorMap = [number, number | RGBA][];
export type MapKey = keyof typeof maps;
declare const _default: Record<string, ColorMap>;
export default _default;
