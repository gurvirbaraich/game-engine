import World from "@/lib/World";
import { vertexShaderSource, fragmentShaderSource } from "@/core/program";

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
    World.GL.clearColor(0.4, 0.6, 1.0, 0.9);

    // Create a new vertex shader
    const vertexShader: WebGLShader = World.GL.createShader(
      World.GL.VERTEX_SHADER
    );

    // Set the source code for the vertex shader
    World.GL.shaderSource(vertexShader, vertexShaderSource);

    // Compile the vertex shader
    World.GL.compileShader(vertexShader);

    // Create a new fragment shader
    const fragmentShader: WebGLShader = World.GL.createShader(
      World.GL.FRAGMENT_SHADER
    );

    // Set the source code for the fragment shader
    World.GL.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile the fragment shader
    World.GL.compileShader(fragmentShader);

    // Attach the shaders to the program
    World.attachShaders(World.PROGRAM, vertexShader, fragmentShader);

    // Link the program with the attached shaders
    World.linkProgram(World.PROGRAM);
  }

  /**
   * The update method updates the game engine and the world on each animation frame.
   * It sets the viewport to the size of the canvas, clears the color buffer bit in
   * the WebGL context, enables blending, sets the blend function to use the source alpha
   * and one minus source alpha, flushes the WebGL context, and requests the next animation frame.
   */
  update(): void {
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
  }
}
