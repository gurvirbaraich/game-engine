// Define the vertex shader source code
export const vertexShaderSource = `
    attribute vec2 aPosition;

    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

// Define the fragment shader source code
export const fragmentShaderSource = `
    precision mediump float;
    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`;