/**
 * TODO: Under Development
 */

import World from "@/lib/World";
import { Shapes } from "@/enums";
import { Vector2 } from "@/interfaces";

export default class Sprite {
  constructor(position: Vector2, shape: Shapes) {
    const positionLocation: number = World.GL.getAttribLocation(World.PROGRAM, "aPosition");
  }
}