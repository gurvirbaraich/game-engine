import World from "./lib/World";

const gl = World.GL;

// Define the vertex shader source code
const vertexShaderSource = `
    attribute vec2 aPosition;

    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

// Define the fragment shader source code
const fragmentShaderSource = `
    precision mediump float;
    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`;

// Create the vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

// Create the fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// Create the shader program
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// Get the location of the "aPosition" attribute
const positionLocation = gl.getAttribLocation(program, "aPosition");

// Create the vertex buffer
const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

// Define the vertices of the rectangle
const vertices = [
    -0.5, -0.5,
     0.5, -0.5,
     0.5,  0.5,
    -0.5,  0.5,
];

// Set the vertex buffer data
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Create the index buffer
const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

// Define the indices of the rectangle
const indices = [
    0, 1, 2,
    2, 3, 0,
];

// Set the index buffer data
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

// Set the viewport
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// Clear the canvas
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// Use the shader program
gl.useProgram(program);

// Enable the "aPosition" attribute
gl.enableVertexAttribArray(positionLocation);

// Bind the vertex buffer
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

// Set the "aPosition" attribute pointer
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

// Set the "uColor" uniform
const colorLocation = gl.getUniformLocation(program, "uColor");
gl.uniform4fv(colorLocation, [1.0, 1.0, 1.0, 1.0]);

// Bind the index buffer
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

// Draw the rectangle
gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
