/** @author Roan Hofland */
#define color 0.91372549019607843137254901960784313725490196078431372549019607843137254901960784313725490196078431372549019607843137254901960784313725490196078431372549019607843137254901960784313725490196078431372549
#define ratio 1.7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778

varying lowp vec2 vpos;

void main() {
	gl_FragColor = vec4(color, color, color, 1.0 - min(500.0 * abs(mod(vpos.x * ratio, 0.1) - 0.05), 500.0 * abs(mod(vpos.y, 0.1) - 0.05)));
}
/** @end-author Roan Hofland */
