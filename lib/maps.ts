import { RGBA } from './util'

export type ColorMap = [number, number | RGBA][]

const maps: Record<string, ColorMap> = {
  'jet':              [[0, 0x000083FF], [0.125, 0x003CAAFF], [0.375, 0x05FFFFFF], [0.625, 0xFFFF00FF], [0.875, 0xFA0000FF], [1, 0x800000FF]],
  'hsv':              [[0, 0xFF0000FF], [0.169, 0xFDFF02FF], [0.173, 0xF7FF02FF], [0.337, 0x00FC04FF], [0.341, 0x00FC0AFF], [0.506, 0x01F9FFFF], [0.671, 0x0200FDFF], [0.675, 0x0800FDFF], [0.839, 0xFF00FBFF], [0.843, 0xFF00F5FF], [1, 0xFF0006FF]],
  'hot':              [[0, 0x000000FF], [0.3, 0xE60000FF], [0.6, 0xFFD200FF], [1, 0xFFFFFFFF]],
  'spring':           [[0, 0xFF00FFFF], [1, 0xFFFF00FF]],
  'summer':           [[0, 0x008066FF], [1, 0xFFFF66FF]],
  'autumn':           [[0, 0xFF0000FF], [1, 0xFFFF00FF]],
  'winter':           [[0, 0x0000FFFF], [1, 0x00FF80FF]],
  'bone':             [[0, 0x000000FF], [0.376, 0x545474FF], [0.753, 0xA9C8C8FF], [1, 0xFFFFFFFF]],
  'copper':           [[0, 0x000000FF], [0.804, 0xFFA066FF], [1, 0xFFC77FFF]],
  'greys':            [[0, 0x000000FF], [1, 0xFFFFFFFF]],
  'yignbu':           [[0, 0x081D58FF], [0.125, 0x253494FF], [0.25, 0x225EA8FF], [0.375, 0x1D91C0FF], [0.5, 0x41B6C4FF], [0.625, 0x7FCDBBFF], [0.75, 0xC7E9B4FF], [0.875, 0xEDF8D9FF], [1, 0xFFFFD9FF]],
  'greens':           [[0, 0x00441BFF], [0.125, 0x006D2CFF], [0.25, 0x238B45FF], [0.375, 0x41AB5DFF], [0.5, 0x74C476FF], [0.625, 0xA1D99BFF], [0.75, 0xC7E9C0FF], [0.875, 0xE5F5E0FF], [1, 0xF7FCF5FF]],
  'yiorrd':           [[0, 0x800026FF], [0.125, 0xBD0026FF], [0.25, 0xE31A1CFF], [0.375, 0xFC4E2AFF], [0.5, 0xFD8D3CFF], [0.625, 0xFEB24CFF], [0.75, 0xFED976FF], [0.875, 0xFFEDA0FF], [1, 0xFFFFCCFF]],
  'bluered':          [[0, 0x0000FFFF], [1, 0xFF0000FF]],
  'rdbu':             [[0, 0x050AACFF], [0.35, 0x6A89F7FF], [0.5, 0xBEBEBEFF], [0.6, 0xDCAA84FF], [0.7, 0xE6915AFF], [1, 0xB20A1CFF]],
  'picnic':           [[0, 0x0000FFFF], [0.1, 0x3399FFFF], [0.2, 0x66CCFFFF], [0.3, 0x99CCFFFF], [0.4, 0xCCCCFFFF], [0.5, 0xFFFFFFFF], [0.6, 0xFFCCFFFF], [0.7, 0xFF99FFFF], [0.8, 0xFF66CCFF], [0.9, 0xFF6666FF], [1, 0xFF0000FF]],
  'rainbow':          [[0, 0x96005AFF], [0.125, 0x0000C8FF], [0.25, 0x0019FFFF], [0.375, 0x0098FFFF], [0.5, 0x2CFF96FF], [0.625, 0x97FF00FF], [0.75, 0xFFEA00FF], [0.875, 0xFF6F00FF], [1, 0xFF0000FF]],
  'portland':         [[0, 0x0C3383FF], [0.25, 0x0A88BAFF], [0.5, 0xF2D338FF], [0.75, 0xF28F38FF], [1, 0xD91E1EFF]],
  'blackbody':        [[0, 0x000000FF], [0.2, 0xE60000FF], [0.4, 0xE6D200FF], [0.7, 0xFFFFFFFF], [1, 0xA0C8FFFF]],
  'earth':            [[0, 0x000082FF], [0.1, 0x00B4B4FF], [0.2, 0x28D228FF], [0.4, 0xE6E632FF], [0.6, 0x784614FF], [1, 0xFFFFFFFF]],
  'electric':         [[0, 0x000000FF], [0.15, 0x1E0064FF], [0.4, 0x780064FF], [0.6, 0xA05A00FF], [0.8, 0xE6C800FF], [1, 0xFFFADCFF]],
  'alpha':            [[0, 0xFFFFFF00], [1, 0xFFFFFFFF]],
  'viridis':          [[0, 0x440154FF], [0.13, 0x472C7AFF], [0.25, 0x3B518BFF], [0.38, 0x2C718EFF], [0.5, 0x21908DFF], [0.63, 0x27AD81FF], [0.75, 0x5CC863FF], [0.88, 0xAADC32FF], [1, 0xFDE725FF]],
  'inferno':          [[0, 0x000004FF], [0.13, 0x1F0C48FF], [0.25, 0x550F6DFF], [0.38, 0x88226AFF], [0.5, 0xBA3655FF], [0.63, 0xE35933FF], [0.75, 0xF98C0AFF], [0.88, 0xF9C932FF], [1, 0xFCFFA4FF]],
  'magma':            [[0, 0x000004FF], [0.13, 0x1C1044FF], [0.25, 0x4F127BFF], [0.38, 0x812581FF], [0.5, 0xB5367AFF], [0.63, 0xE55064FF], [0.75, 0xFB8761FF], [0.88, 0xFEC287FF], [1, 0xFCFDBFFF]],
  'plasma':           [[0, 0x0D0887FF], [0.13, 0x4B03A1FF], [0.25, 0x7D03A8FF], [0.38, 0xA82296FF], [0.5, 0xCB4679FF], [0.63, 0xE56B5DFF], [0.75, 0xF89441FF], [0.88, 0xFDC328FF], [1, 0xF0F921FF]],
  'warm':             [[0, 0x7D00B3FF], [0.13, 0xAC00BBFF], [0.25, 0xDB00AAFF], [0.38, 0xFF0082FF], [0.5, 0xFF3F4AFF], [0.63, 0xFF7B00FF], [0.75, 0xEAB000FF], [0.88, 0xBEE400FF], [1, 0x93FF00FF]],
  'cool':             [[0, 0x7D00B3FF], [0.13, 0x7400DAFF], [0.25, 0x624AEDFF], [0.38, 0x4492E7FF], [0.5, 0x00CCC5FF], [0.63, 0x00F792FF], [0.75, 0x00FF58FF], [0.88, 0x28FF08FF], [1, 0x93FF00FF]],
  'rainbow-soft':     [[0, 0x7D00B3FF], [0.1, 0xC700B4FF], [0.2, 0xFF0079FF], [0.3, 0xFF6C00FF], [0.4, 0xDEC200FF], [0.5, 0x96FF00FF], [0.6, 0x00FF37FF], [0.7, 0x00F696FF], [0.8, 0x32A7DEFF], [0.9, 0x6733EBFF], [1, 0x7C00BAFF]],
  'bathymetry':       [[0, 0x281A2CFF], [0.13, 0x3B315AFF], [0.25, 0x404C8BFF], [0.38, 0x3F6E97FF], [0.5, 0x488E9EFF], [0.63, 0x55AEA3FF], [0.75, 0x78CEA3FF], [0.88, 0xBBE6ACFF], [1, 0xFDFECCFF]],
  'cdom':             [[0, 0x2F0F3EFF], [0.13, 0x571756FF], [0.25, 0x821C63FF], [0.38, 0xAB2960FF], [0.5, 0xCE4356FF], [0.63, 0xE66A54FF], [0.75, 0xF29567FF], [0.88, 0xF9C187FF], [1, 0xFEEDB0FF]],
  'chlorophyll':      [[0, 0x122414FF], [0.13, 0x193F29FF], [0.25, 0x185B3BFF], [0.38, 0x0D7748FF], [0.5, 0x129450FF], [0.63, 0x50AD59FF], [0.75, 0x84C47AFF], [0.88, 0xAFDDA2FF], [1, 0xD7F9D0FF]],
  'density':          [[0, 0x360E24FF], [0.13, 0x591750FF], [0.25, 0x6E2D84FF], [0.38, 0x784DB2FF], [0.5, 0x7871D5FF], [0.63, 0x7397E4FF], [0.75, 0x86B9E3FF], [0.88, 0xB1D6E3FF], [1, 0xE6F1F1FF]],
  'freesurface-blue': [[0, 0x1E046EFF], [0.13, 0x2F0EB0FF], [0.25, 0x292DECFF], [0.38, 0x1963D4FF], [0.5, 0x4483C8FF], [0.63, 0x729CC5FF], [0.75, 0x9DB5CBFF], [0.88, 0xC8D0D8FF], [1, 0xF1EDECFF]],
  'freesurface-red':  [[0, 0x3C0912FF], [0.13, 0x64111BFF], [0.25, 0x8E141DFF], [0.38, 0xB12B1BFF], [0.5, 0xC0573FFF], [0.63, 0xCD7D69FF], [0.75, 0xD8A294FF], [0.88, 0xE3C7C1FF], [1, 0xF1EDECFF]],
  'oxygen':           [[0, 0x400505FF], [0.13, 0x6A060FFF], [0.25, 0x901A07FF], [0.38, 0xA84003FF], [0.5, 0xBC6404FF], [0.63, 0xCE880BFF], [0.75, 0xDCAE19FF], [0.88, 0xE7D72CFF], [1, 0xF8FE69FF]],
  'par':              [[0, 0x331418FF], [0.13, 0x5A2023FF], [0.25, 0x812C22FF], [0.38, 0x9F4419FF], [0.5, 0xB66313FF], [0.63, 0xC78616FF], [0.75, 0xD4AB23FF], [0.88, 0xDDD236FF], [1, 0xE1FD4BFF]],
  'phase':            [[0, 0x916912FF], [0.13, 0xB84726FF], [0.25, 0xBA3A73FF], [0.38, 0xA047B9FF], [0.5, 0x6E61DAFF], [0.63, 0x327BA4FF], [0.75, 0x1F836EFF], [0.88, 0x4D8122FF], [1, 0x916912FF]],
  'salinity':         [[0, 0x2A186CFF], [0.13, 0x2132A2FF], [0.25, 0x0F5A91FF], [0.38, 0x287689FF], [0.5, 0x3B9287FF], [0.63, 0x4FAF7EFF], [0.75, 0x78CB68FF], [0.88, 0xC1DD64FF], [1, 0xFDEF9AFF]],
  'temperature':      [[0, 0x042333FF], [0.13, 0x17337AFF], [0.25, 0x553B9DFF], [0.38, 0x814F8FFF], [0.5, 0xAF5F82FF], [0.63, 0xDE7065FF], [0.75, 0xF99242FF], [0.88, 0xF9C441FF], [1, 0xE8FA5BFF]],
  'turbidity':        [[0, 0x221F1BFF], [0.13, 0x413229FF], [0.25, 0x624534FF], [0.38, 0x835939FF], [0.5, 0xA1703BFF], [0.63, 0xB98C42FF], [0.75, 0xCAAE58FF], [0.88, 0xD8D17EFF], [1, 0xE9F6ABFF]],
  'velocity-blue':    [[0, 0x112040FF], [0.13, 0x233474FF], [0.25, 0x1D519CFF], [0.38, 0x1F71A2FF], [0.5, 0x3290A9FF], [0.63, 0x57ADB0FF], [0.75, 0x95C4BDFF], [0.88, 0xCBDDD3FF], [1, 0xFEFBE6FF]],
  'velocity-green':   [[0, 0x172313FF], [0.13, 0x184026FF], [0.25, 0x0B5F2DFF], [0.38, 0x277B23FF], [0.5, 0x5F920CFF], [0.63, 0x98A512FF], [0.75, 0xC9BA45FF], [0.88, 0xE9D889FF], [1, 0xFFFDCDFF]],
  'cubehelix':        [[0, 0x000000FF], [0.07, 0x16053BFF], [0.13, 0x3C0469FF], [0.2, 0x6D0187FF], [0.27, 0xA10093FF], [0.33, 0xD2028EFF], [0.4, 0xFB0B7BFF], [0.47, 0xFF1D61FF], [0.53, 0xFF3645FF], [0.6, 0xFF552EFF], [0.67, 0xFF7822FF], [0.73, 0xFF9D25FF], [0.8, 0xF1BF39FF], [0.87, 0xE0DC5DFF], [0.93, 0xDAF18EFF], [1, 0xE3FDC6FF]],
}

export default maps
