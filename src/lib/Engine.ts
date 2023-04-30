import World from "@/lib/World";

/**
 * The engine initializes the canvas and WebGL context and provides the update loop
 * for the game and world to run
 */
export default class Engine {
    /**
     * The constructor initializes the game engine by adding the canvas to the document's
     * body and setting the clear color for the WebGL context.
     */
    constructor() {
        // Add the canvas to the document's body
        document.body.appendChild(World.canvas);

        // Set the clear color for the WebGL context to light blue
        World.GL.clearColor(0.4, 0.6, 1.0, 0.9)
    }

    /**
     * The update method updates the game engine and the world on each animation frame.
     * It sets the viewport to the size of the canvas, clears the color buffer bit in
     * the WebGL context, enables blending, sets the blend function to use the source alpha
     * and one minus source alpha, flushes the WebGL context, and requests the next animation frame.
     */
    update() : void {
        // Set the viewport to the size of the canvas
        World.GL.viewport(0, 0, World.canvas.width, World.canvas.height);

        // Clear the color buffer bit in the WebGL context to the clear color set
        World.GL.clear(World.GL.COLOR_BUFFER_BIT);

        // Enable blending in the WebGL context to allow transparency
        World.GL.enable(World.GL.BLEND);

        // Set the blend function to use the source alpha and one minus source alpha
        // This creates a standard blend that supports transparency
        World.GL.blendFunc(World.GL.SRC_ALPHA, World.GL.ONE_MINUS_SRC_ALPHA);

        // Flush the WebGL context to ensure that all the previous draw calls have been processed
        World.GL.flush();

        // Request the next animation frame, that will call the update method again
        requestAnimationFrame(() => this.update())
    }
}