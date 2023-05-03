/**
 * The `initialize()` method creates an instance of the `World` and `Engine` classes, and then calls the `update()` method of
 * the `Engine` class to start the main game loop. By linking the `World` and `Engine` classes in this way, we can ensure that
 * the game logic is separated from the rendering logic, and that the two are updated and rendered independently.
 *
 * This will initialize the game engine, create a new world instance, and start the main game loop.
 */
import World from "@/lib/World";
import Engine from "@/lib/Engine";
import * as Utils from "@/lib/helpers";

export default class Linker {
  public static initialize() {
    const world = new World();
    const engine = new Engine();

    // requestAnimationFrame(Utils.middleware.FPS(30, engine.update))
  }
}

Linker.initialize();
