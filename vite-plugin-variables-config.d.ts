import { Plugin } from 'vite';
interface VariablesConfigPluginOptions {
    tokenPath: string;
}
export declare function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin;
export {};
