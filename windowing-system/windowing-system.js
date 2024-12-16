// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(/** @type {number} */ newWidth, /** @type {number} */ newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function(/** @type {number} */ newX, /** @type {number} */ newY) {
  this.x = newX;
  this.y = newY;
}


export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * @param {Size } size
   */
  resize(size) {
    this.size.width = Math.min(Math.max(1, size.width), this.screenSize.width - this.position.x);
    this.size.height = Math.min(Math.max(1, size.height), this.screenSize.height - this.position.y);
  }

  /**
   * @param {Position} position
   */
  move(position) {
    this.position.x = Math.min(Math.max(0, position.x), this.screenSize.width - this.size.width);
    this.position.y = Math.min(Math.max(0, position.y), this.screenSize.height - this.size.height);
  }
}

/**
 * @param {{ size: { width: number; height: number; }; position: { x: number; y: number; }; }} programWindow
 */
export function changeWindow(programWindow) {
  programWindow.size.width = (400)
  programWindow.size.height = 300
  programWindow.position.x = 100
  programWindow.position.y = 150
  return programWindow;
}
