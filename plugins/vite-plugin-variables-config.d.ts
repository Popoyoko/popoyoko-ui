export declare function variablesConfigPlugin(options: any): {
    name: string;
    transform(code: any, id: any): {
        code: string;
        map: any;
    };
};
