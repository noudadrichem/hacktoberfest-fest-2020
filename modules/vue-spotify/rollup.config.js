import resolve from 'rollup-plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "@rollup/plugin-buble";

export default {
    input: "src/wrapper.js",
    output: {
        name: "Example",
        exports: "named"
    },
    plugins: [
        resolve({ extensions: ['.ts', '.js'] }),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true
        }),
        buble()
    ]
};
