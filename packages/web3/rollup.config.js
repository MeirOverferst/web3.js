import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: {
            name: 'Web3',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            autoExternal(),
            commonjs(),
            builtins(),
            resolve(),
            json(),
            babel({
                exclude: 'node_modules/**',
                plugins: [
                    '@babel/plugin-proposal-export-default-from',
                    '@babel/plugin-proposal-export-namespace-from'
                ]
            }),
        ]
    },
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
            },
            {
                file: pkg.module,
                format: 'es',
            }
        ],
        plugins: [
            json(),
            autoExternal()
        ]
    }
];
