/** @author Roan Hofland */
import {ShaderBase} from "../abstractShader";
import {fillcircleFragmentSource} from "../fragment/fillcircleFragmentShader";
import {circleVertexSource} from "../vertex/circleVertexShader";
import {Shader} from "../shader";
import {CircleElement} from "../elem/circleElement";
import {Element} from "../../element";
import {OpenGL} from "../../opengl";

export class FillCircleShader implements ShaderBase{
    public shader: WebGLProgram;
    public attribPosition: number;
    private centerXUniform: WebGLUniformLocation;
    private centerYUniform: WebGLUniformLocation;
    private radiusUniform: WebGLUniformLocation;

    public init(shader: Shader, gl: WebGLRenderingContext): void{
        console.log("init fill circle shader");
        this.shader = shader.initShader(circleVertexSource, fillcircleFragmentSource);
        console.log("shader: " + this.shader);
        this.centerXUniform = gl.getUniformLocation(this.shader, "cx");
        this.centerYUniform = gl.getUniformLocation(this.shader, "cy");
        this.radiusUniform = gl.getUniformLocation(this.shader, "radius");
        this.attribPosition = gl.getAttribLocation(this.shader, "pos");
        console.log("done1");
    }
    
    public preProcess(elem: Element, gl: WebGLRenderingContext, opengl: OpenGL): void {
        gl.uniform1f(this.centerXUniform, elem.x / opengl.HALFWIDTH);
        gl.uniform1f(this.centerYUniform, elem.y / opengl.HALFHEIGHT);
        console.log("center at " + elem.x + " | " + elem.y);
        gl.uniform1f(this.radiusUniform, (elem as CircleElement).radius);
    }
}
/** @end-author Roan Hofland */  