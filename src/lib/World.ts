/**
 * This class represents the world in the game and initializes the WebGL context and the canvas.
 * It checks for WebGL support and creates a program to hold the shaders.
 */
export default class World {
  /**
   * The canvas element to render the game on.
   * It is created using the HTMLCanvasElement constructor and can be accessed as a static property.
   */
  public static readonly canvas: HTMLCanvasElement =
    document.createElement("canvas");

  /**
   * The WebGL rendering context that allows rendering of 2D graphics in the canvas.
   * It is created using the WebGLRenderingContext constructor and can be accessed as a static property.
   */
  public static readonly GL: WebGLRenderingContext =
    World.canvas.getContext("webgl2");

  /**
   * The WebGL program that holds the shaders to render the game.
   * It is created using the WebGLRenderingContext createProgram method and can be accessed as a static property.
   */
  public static readonly PROGRAM: WebGLProgram = World.GL.createProgram();

  /**
   * The constructor initializes the World class by checking for WebGL support and setting the width and height of the canvas.
   * If WebGL is not supported, an error message is displayed and an error is thrown.
   */
  constructor() {
    // Check to make sure WebGL is supported by the machine
    if (World.GL == null) {
      const message: string =
        "WebGL cannot be initialized. Your browser does not support WebGL.";
      alert(message);

      throw new Error(message);
    }

    // Set the width and height of the canvas to the default values of 800x600
    // TODO: This should not be hard-coded and should be taken as a parameter
    World.canvas.width = 800;
    World.canvas.height = 600;
  }
}
