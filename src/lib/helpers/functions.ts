import { Vector2 } from "@/interfaces";
import { Vec2 } from "@/lib/helpers/classes";

/**
 * Defines a function that creates a 2D vector with the specified X and Y components.
 *
 * @param x The X component of the vector.
 * @param y The Y component of the vector.
 * @returns A new 2D vector with the specified components.
 */
export const vec2 = (x: number, y: number): Vector2 => new Vec2(x, y);