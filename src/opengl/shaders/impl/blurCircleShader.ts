/** @author Roan Hofland */
import {CircleShader} from "./circleShader";
import {Shader} from "../shader";
import * as vertexSource from "raw-loader!../vertex/interpolatingVertexShader.glsl";
import * as fragmentSource from "raw-loader!../fragment/blurCircleFragmentShader.glsl";
import {Element} from "../../element";
import {OpenGL} from "../../opengl";

export class BlurCircleShader extends CircleShader{
    private colorUniform: WebGLUniformLocation;
    private blurUniform: WebGLUniformLocation;
    private alphaUniform: WebGLUniformLocation;
    
    public preInit(shader: Shader): WebGLProgram {
        return shader.initShader(vertexSource, fragmentSource);
    }
    
    public postProcess(elem: Element, gl: WebGLRenderingContext): void {
        gl.uniform3fv(this.colorUniform, elem.color);
        gl.uniform3fv(this.colorUniform, elem.color);
        gl.uniform3fv(this.colorUniform, elem.color);
    }
    
    public postInit(gl: WebGLRenderingContext): void {
        this.colorUniform = gl.getUniformLocation(this.shader, "color");
        this.colorUniform = gl.getUniformLocation(this.shader, "color");
        this.colorUniform = gl.getUniformLocation(this.shader, "color");
    }
}
/** @end-author Roan Hofland */ 