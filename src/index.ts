export type Points = Vector2D[];
export type Vector = [number, number, number?];
export type Vector2D = [number, number];
export type Vector3D = [number, number, number];
export type Color = [number, number, number, number];
export interface PathValue {}

export type SourceData = any[];

// Global objects, attributes, and methods
export class Key {
  value: string = "key value";
  time: number = 0;
  index: number = 1;
}

export class Project {
  fullPath: string = "path/to/project/file";
  bitsPerChannel: "8" | "16" | "32" = "8";
  linearBlending: boolean = true;
}

export interface MarkerParam {
  [id: string]: any;
}

export class Marker {
  readonly time: number = 0;
  readonly index: number = 1;
  readonly duration: number = 0;
  readonly comment: string = "Marker comment";
  readonly chapter: string = "Chapter 1";
  readonly url: string = "URL";
  readonly frameTarget: string = "Frame Target";
  readonly eventCuePoint: boolean = false;
  readonly cuePointName: string = "Cue Point Name";
  readonly parameters: MarkerParam = {};
  readonly protectedRegion: boolean = false;
}

export class MarkerProperty {
  readonly numKeys: number = 1;
  key(index: number | string): Marker {
    return new Marker();
  }
  nearestKey(t: number): Marker {
    return new Marker();
  }
}

export class Comp {
  readonly name: string = "Comp Base";
  readonly numLayers: number = 1;
  readonly activeCamera: Camera | null = null;
  readonly width: number = 1920;
  readonly height: number = 1080;
  readonly duration: number = 10;
  readonly ntscDropFrame: boolean = false;
  readonly displayStartTime: number = 0;
  readonly frameDuration: number = 0.04;
  readonly frameRate: number = 25;
  readonly shutterAngle: number = 180;
  readonly bgColor: Color = [1, 1, 1, 1];
  readonly pixelAspect: number = 1;
  layer(indexOrOtherLayer: number | string, relIndex?: number): Layer {
    return thisLayer;
  }
}

export class PropertyGroup {
  readonly name: string = "property group base";
  constructor(groupName: string) {
    this.name = groupName;
  }
}

export type Value =
  | string
  | number
  | boolean
  | Vector
  | Vector2D
  | Vector3D
  | Color
  | PathValue;

export class Property<T extends Value> {
  readonly velocity: number | Vector = 0;
  readonly speed: number | Vector = 0;
  readonly numKeys: number = 0;
  readonly propertyIndex: number = 0;
  valueAtTime(time: number): Value {
    return this.value;
  }
  velocityAtTime(time: number): number | Vector {
    return this.velocity;
  }
  speedAtTime(time: number): number | Vector {
    return this.speed;
  }
  wiggle(
    freq: number,
    amp: number,
    octaves?: number,
    amp_mult?: number,
    time?: number
  ): Value {
    return this.value;
  }
  temporalWiggle(
    freq: number,
    amp: number,
    octaves?: number,
    amp_mult?: number,
    time?: number
  ): Value {
    return this.value;
  }
  smooth(width?: number, samples?: number, time?: number): Value {
    return this.value;
  }
  loopIn(type?: loopType, numKeyframes?: number): Value {
    return this.value;
  }
  loopOut(type?: loopType, numKeyframes?: number): Value {
    return this.value;
  }
  loopInDuration(type?: loopType, duration?: number): Value {
    return this.value;
  }
  loopOutDuration(type?: loopType, duration?: number): Value {
    return this.value;
  }
  key(indexOrName: number | string): Key {
    return new Key();
  }
  nearestKey(time: number): Key {
    return new Key();
  }
  propertyGroup(countUp: number): PropertyGroup {
    return new PropertyGroup("property group from function");
  }
  constructor(readonly value: T, readonly name: string = "Property name") {}
}

export class PathProperty<T> extends Property<T> {
  readonly isClosed: boolean = true;
  createPath(
    points: Points,
    inTangents: Points | [],
    outTangent: Points | [],
    isClosed: boolean
  ): PathValue {
    return [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  }
  points(time?: number): Vector2D[] {
    return [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  }
  inTangents(time?: number): Vector2D[] {
    return [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  }
  outTangents(time?: number): Vector2D[] {
    return [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  }
  pointOnPath(percentage?: number, time?: number): Vector2D {
    return [0, 0];
  }
  tangentOnPath(percentage?: number, time?: number): Vector2D {
    return [0, 0];
  }
  normalOnPath(percentage?: number, time?: number): Vector2D {
    return [0, 0];
  }
  constructor(value: T) {
    super(value);
  }
}

export type loopType = "cycle" | "pingpong" | "offset" | "continue";

export class Transform extends PropertyGroup {
  constructor() {
    super("Transform");
  }
  readonly anchorPoint: Property<Vector> = new Property([0, 0], "Anchor Point");
  readonly position: Property<Vector> = new Property([0, 0], "Position");
  readonly xPosition: Property<number> = new Property(0, "X Position");
  readonly yPosition: Property<number> = new Property(0, "Y Position");
  readonly zPosition: Property<number> = new Property(0, "Z Position");
  readonly scale: Property<Vector> = new Property([0, 0], "Scale");
  readonly rotation: Property<number> = new Property(0, "Rotation");
  readonly orientation?: Property<Vector3D> = new Property(
    [0, 0, 0],
    "Orientation"
  );
  readonly rotationX?: Property<number> = new Property(0, "X Rotation");
  readonly rotationY?: Property<number> = new Property(0, "Y Rotation");
  readonly rotationZ?: Property<number> = new Property(0, "Z Rotation");
}

export class TextStyle {
  fontSize: number = 0;
  setFontSize(fontSize: number): TextStyle {
    this.fontSize = fontSize;
    return this;
  }
  font: string = "Arial";
  setFont(font: string): TextStyle {
    this.font = font;
    return this;
  }
  setText(text: string): TextStyle {
    return this;
  }
  isFauxBold: boolean = false;
  setFauxBold(isFauxBold: boolean): TextStyle {
    this.isFauxBold = isFauxBold;
    return this;
  }
  isFauxItalic: boolean = false;
  setFauxItalic(isFauxItalic: boolean): TextStyle {
    this.isFauxItalic = isFauxItalic;
    return this;
  }
  isAllCaps: boolean = false;
  setAllCaps(isAllCaps: boolean): TextStyle {
    this.isAllCaps = isAllCaps;
    return this;
  }
  isSmallCaps: boolean = false;
  setSmallCaps(isSmallCaps: boolean): TextStyle {
    this.isSmallCaps = isSmallCaps;
    return this;
  }
  tracking: number = 0;
  setTracking(tracking: number): TextStyle {
    this.tracking = tracking;
    return this;
  }
  leading: number = 60;
  setLeading(leading: number): TextStyle {
    this.leading = leading;
    return this;
  }
  autoLeading: boolean = false;
  setAutoLeading(autoLeading: boolean): TextStyle {
    this.autoLeading = autoLeading;
    return this;
  }
  baselineShift: number = 0;
  setBaselineShift(baselineShift: number): TextStyle {
    this.baselineShift = baselineShift;
    return this;
  }
  applyFill: boolean = true;
  setApplyFill(applyFill: boolean): TextStyle {
    this.applyFill = applyFill;
    return this;
  }
  fillColor: [number, number, number] = [1, 1, 1];
  setFillColor(fillColor: [number, number, number]): TextStyle {
    this.fillColor = fillColor;
    return this;
  }
  applyStroke: boolean = false;
  setApplyStroke(applyStroke: boolean): TextStyle {
    this.applyStroke = applyStroke;
    return this;
  }
  strokeColor: [number, number, number] = [1, 1, 1];
  setStrokeColor(strokeColor: [number, number, number]): TextStyle {
    this.strokeColor = strokeColor;
    return this;
  }
  strokeWidth: number = 0;
  setStrokeWidth(strokeWidth: number): TextStyle {
    this.strokeWidth = strokeWidth;
    return this;
  }
}

export class SourceText extends Property<string> {
  constructor(value: string) {
    super(value);
  }
  style = new TextStyle();
  getStyleAt(characterIndex: number, sampleTime: number = thisLayer.time) {
    return this.style;
  }
}

export class TextPathOptions extends PropertyGroup {
  constructor() {
    super("Path Options");
  }
  readonly path: string | undefined = "Mask 1";
  readonly reversePath?: boolean = false;
  readonly perpendicularToPath?: Property<boolean> = new Property(
    false,
    "Perpendicular To Path"
  );
  readonly forceAlignment?: Property<boolean> = new Property(
    false,
    "Force Alignment"
  );
  readonly firstMargin?: Property<number> = new Property(0, "First Margin");
  readonly lastMargin?: Property<number> = new Property(0, "Last Margin");
}

export class TextMoreOptions extends PropertyGroup {
  constructor() {
    super("More Options");
  }
  readonly anchorPointGrouping: number = 1;
  readonly groupingAlignment: Property<[number, number]> = new Property(
    [0, 0],
    "Grouping Alignment"
  );
  readonly fillANdStroke: number = 1;
  readonly interCharacterBlending: number = 1;
}

export class Text extends PropertyGroup {
  constructor() {
    super("Text");
  }
  readonly sourceText: SourceText = new SourceText("Source text value");
  readonly pathOption: TextPathOptions = new TextPathOptions();
  readonly moreOption: TextMoreOptions = new TextMoreOptions();
}

export class MaterialOptions extends PropertyGroup {
  constructor() {
    super("Material Options");
  }
  readonly lightTransmission: Property<number> = new Property(
    0,
    "Light Transmission"
  );
  readonly castShadows: Property<boolean> = new Property(false, "Cast Shadows");
  readonly acceptsShadows: Property<boolean> = new Property(
    false,
    "Accept Shadows"
  );
  readonly acceptsLights: Property<boolean> = new Property(
    false,
    "Accepts Lights"
  );
  readonly ambient: Property<number> = new Property(100, "Ambient");
  readonly diffuse: Property<number> = new Property(100, "Diffuse");
  readonly specular: Property<number> = new Property(100, "Specular");
  readonly shininess: Property<number> = new Property(100, "Shininess");
  readonly metal: Property<number> = new Property(100, "Metal");
}

export class Effects extends PropertyGroup {}

export class Masks extends PropertyGroup {}

export class SourceRect {
  readonly top: number = 0;
  readonly left: number = 0;
  readonly width: number = 100;
  readonly height: number = 100;
}

export class Effect {
  active: boolean = true;
  param(nameOrIndex: string | number): Property<string> {
    return new Property<string>("Effect Param");
  }
}

export class Mask {
  readonly maskOpacity: Property<number> = new Property(100, "Mask Opacity");
  readonly maskFeather: Property<number> = new Property(100, "Mask Feather");
  readonly maskExpansion: Property<number> = new Property(0, "Mask Expansion");
  readonly invert: Property<boolean> = new Property(false, "Invert");
}

export class Light {
  readonly pointOfInterest: Property<Vector3D> = new Property(
    [0, 0, 0],
    "Point of Interest"
  );
  readonly intensity: Property<number> = new Property(100, "Intensity");
  readonly color: Property<Color> = new Property([1, 1, 1, 1], "Color");
  readonly shadowDarkness: Property<number> = new Property(
    100,
    "Shadow Darkness"
  );
  readonly shadowDiffusion: Property<number> = new Property(
    0,
    "Shadow Diffusion"
  );
  readonly coneAngle?: Property<number> = new Property(90, "Cone Angle");
  readonly coneFeather?: Property<number> = new Property(50, "Cone Feather");
}

export class Camera {}

const thisComp = new Comp();

export class Layer {
  readonly time: number = 0;
  readonly colorDepth: number = 8;
  readonly name: string = "Layer name";
  readonly source?: Comp | Footage = thisComp;
  readonly width: number = 1920;
  readonly height: number = 1080;
  readonly index: number = 0;
  readonly parent?: Layer | Light | Camera = thisLayer;
  readonly hasParent: boolean = true;
  readonly inPoint: number = 0;
  readonly outPoint: number = 1;
  readonly startTime: number = 0;
  readonly hasVideo: boolean = true;
  readonly hasAudio: boolean = true;
  readonly active: boolean = true;
  readonly enabled: boolean = true;
  readonly audioActive?: boolean = true;
  readonly audioLevels?: Property<number> = new Property(0, "Audio Levels");
  readonly timeRemap?: Property<number> = new Property(0, "Time Remap");
  readonly marker?: MarkerProperty;
  readonly transform?: Transform = new Transform();
  readonly text?: Text = new Text();
  readonly materialOption?: MaterialOptions = new MaterialOptions();
  toComp(vec: Vector, time?: number): Vector {
    return vec;
  }
  fromComp(vec: Vector, time?: number): Vector {
    return vec;
  }
  toWorld(vec: Vector, time?: number): Vector {
    return vec;
  }
  toCompVec(vec: Vector, time?: number): Vector {
    return vec;
  }
  fromCompVec(vec: Vector, time?: number): Vector {
    return vec;
  }
  toWorldVec(vec: Vector, time?: number): Vector {
    return vec;
  }
  fromWorldVec(vec: Vector, time?: number): Vector {
    return vec;
  }
  fromCompToSurface(vec: Vector): Vector {
    return vec;
  }
  sourceTime?(time?: number): number {
    return 0;
  }
  sourceRectAtTime(time?: number, includeExtents?: boolean): SourceRect {
    return new SourceRect();
  }
  effect(nameOrIndex: number | string): Effect {
    return new Effect();
  }
  mask(nameOrIndex: number | string): Mask {
    return new Mask();
  }
  sampleImage(
    point: Vector2D,
    radius?: Vector2D,
    postEffect?: boolean,
    time?: number
  ): Color {
    return [0, 0, 0, 0];
  }
  degreesToRadians(degrees: number): number {
    return degrees;
  }
  radiansToDegrees(radians: number): number {
    return radians;
  }
  footage(name: string): Footage {
    return new Footage();
  }
  layer(indexOrOtherLayer: string | number, relIndex?: number) {
    return thisComp.layer(indexOrOtherLayer, relIndex);
  }
  comp(index: number | string) {
    return thisComp;
  }
  timeToFrames(
    t: number = this.time + thisComp.displayStartTime,
    fps: number = 1.0 / thisComp.frameDuration,
    isDuration: boolean = false
  ): number {
    return this.time * thisComp.frameDuration;
  }
  framesToTime(
    frames: number,
    fps: number = 1.0 / thisComp.frameDuration
  ): number {
    return frames * thisComp.frameDuration;
  }
  timeToTimecode(
    t: number = this.time + thisComp.displayStartTime,
    timecodeBase: number = 30,
    isDuration: boolean = false
  ): string {
    return "00:00:00:00";
  }
  timeToNTSCTimecode(
    t: number = this.time + thisComp.displayStartTime,
    ntscDropFrame: boolean = false,
    isDuration: boolean = false
  ) {
    return "00:00:00:00";
  }
  timeToFeetAndFrames(
    t: number = this.time + thisComp.displayStartTime,
    fps: number = 1.0 / thisComp.frameDuration,
    framesPerFoot: number = 16,
    isDuration: boolean = false
  ): string {
    return "00:00:00:00";
  }
  timeToCurrentFormat(
    t: number = this.time + thisComp.displayStartTime,
    fps: number = 1.0 / thisComp.frameDuration,
    isDuration: boolean = false,
    ntscDropFrame: boolean = thisComp.ntscDropFrame
  ): string {
    return "0000";
  }
  add(vec1: Vector, vec2: Vector): Vector {
    return vec1;
  }
  sub(vec1: Vector, vec2: Vector): Vector {
    return vec1;
  }
  mul(vec1: Vector, amount: number): Vector {
    return vec1;
  }
  div(vec1: Vector, amount: number): Vector {
    return vec1;
  }
  clamp(value: number | [], limit1: number, limit2: number): number | [] {
    return value;
  }
  dot(vec1: Vector, vec2: Vector): Vector {
    return vec1;
  }
  cross(vec1: Vector, vec2: Vector): Vector {
    return vec1;
  }
  normalize(vec1: Vector, vec2: Vector): Vector {
    return [1, 1];
  }
  length(point1: Vector, point2?: Vector): number {
    return 1;
  }
  lookAt(fromPoint: Vector, atPoint: Vector): Vector3D {
    return [0, 0, 0];
  }
  seedRandom(offset: number, timeless: boolean = false): void {}
  random(minValOrArray: number | [], maxValOrArray: number | []): number | [] {
    return minValOrArray;
  }
  gaussRandom(
    minValOrArray: number | [],
    maxValOrArray: number | []
  ): number | [] {
    return minValOrArray;
  }
  noise(valOrArray: number | []): number {
    return 1;
  }
  linear(
    t: number,
    tMin: number,
    tMax: number,
    value1?: number | [],
    value2?: number | []
  ): number | [] {
    return value1 || tMin;
  }
  ease(
    t: number,
    tMin: number,
    tMax: number,
    value1?: number | [],
    value2?: number | []
  ): number | [] {
    return value1 || tMin;
  }
  easeIn(
    t: number,
    tMin: number,
    tMax: number,
    value1?: number | [],
    value2?: number | []
  ): number | [] {
    return value1 || tMin;
  }
  easeOut(
    t: number,
    tMin: number,
    tMax: number,
    value1?: number | [],
    value2?: number | []
  ): number | [] {
    return value1 || tMin;
  }
  rgbToHsl(rgbaArray: Color): Color {
    return [1, 1, 1, 1];
  }
  hslToRgb(hslaArray: Color): Color {
    return [1, 1, 1, 1];
  }
  hexToRgb(hex: string): Color {
    return [1, 1, 1, 1];
  }
}

const thisLayer = new Layer();

export class Footage {
  readonly name: string = "Layer Name";
  readonly width?: number = 500;
  readonly height?: number = 500;
  readonly duration?: number = 10;
  readonly frameDuration?: number = 0.04;
  readonly ntscDropFrame?: boolean = false;
  readonly pixelAspect?: number = 1;
  readonly sourceText?: string = "Source Text";
  readonly sourceData?: SourceData[] = [["source data"]];
  dataValue?(dataPath: []): number {
    return 0;
  }
  dataKeyCount?(dataPath: []): number {
    return 0;
  }
  dataKeyTimes?(dataPath: [], t0?: number, t1?: number): number[] {
    return [0, 0];
  }
  dataKeyValues?(dataPath: [], t0?: number, t1?: number): number[] {
    return [0, 0];
  }
}
