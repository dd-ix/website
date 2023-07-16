import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'server.ts',
  external: false,
  output: {
    file: "dist/server.mjs",
    format: 'module',
  },
  plugins: [
    resolve({preferBuiltins: true}),
    commonjs(),
    json(),
    typescript({tsconfig: "./tsconfig.node-server.json"}),
  ],
};
