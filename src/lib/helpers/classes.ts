import { Vector2 } from "@/interfaces";

/**
 * A class that represents 2D vector with X and Y coordinates
 * @implements {Vector2}
 */
export class Vec2 implements Vector2 {
  /**
   * x component of the vector
   */
  public x: number;

  /**
   * y component of the vector
   */
  public y: number;

  /**
   * Creates a new Vec2 object with the given x and y coordinates
   * 
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}