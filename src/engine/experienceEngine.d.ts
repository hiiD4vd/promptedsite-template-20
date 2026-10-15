export class ExperienceManager {
  static getInstance(): any;
  static getModal(): any;
  static init(canvasElement?: HTMLCanvasElement | null): any;
  static destroy(): void;
  static toggleDayNight(): boolean;
  static isNight(): boolean;
  static showHitboxMarkers(): void;
  static hideHitboxMarkers(): void;
  static openInfoModal(): void;
  static resetCamera(): void;
  static dismissPreloader(playMusic?: boolean): void;
}

export class Experience {
  constructor();
  canvasElement: HTMLCanvasElement;
  scene: any;
  camera: any;
  renderer: any;
  resources: any;
  world: any;
  time: any;
  sizes: any;
  raycaster: any;
  preloader: any;
}

export class Modal {
  constructor();
  openHTML(title: string, html: string): void;
  close(): void;
}
