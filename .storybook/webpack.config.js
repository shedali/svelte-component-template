const autoPreprocess = require('svelte-preprocess');
module.exports = ({config, mode}) => {

    const svelteLoader = config.module.rules.find(
        r => r.loader && r.loader.includes('svelte-loader'),
    );



    svelteLoader.options.preprocess = autoPreprocess({
        typescript: {
            tsconfigFile: './tsconfig.json',
            transpileOnly: true,
        },
    });

    config.module.rules.push(
        {
            test: /\.ts$/,
            use: [
                {
                    loader: 'ts-loader',
                }
            ]
        }
    );
    config.resolve.extensions.push(".ts")
    return config;
};
