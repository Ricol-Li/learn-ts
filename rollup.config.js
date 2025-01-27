import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'node:path'
// __dirname __filename
const __filename = fileURLToPath(import.meta.url) // 当前rollup.config.js文件的绝对路径
const __dirname = dirname(__filename) // 当前文件所在的文件夹 绝对路径

// console.log(__dirname, __filename)

export default {
  input: resolve(__dirname, 'src/index.ts'),
  output: {
    format: 'iife',
    file: resolve(__dirname, 'dist/bundle.js'),
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    ts({
      tsconfig: resolve(__dirname, 'tsconfig.json'),
    }),
    serve({
      port: 3000,
      openPage: '/public/index.html',
      open: true,
    }),
  ],
}
