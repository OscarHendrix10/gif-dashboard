module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        // [
        //     '@babel/preset-env',
        //     {
        //       targets: {
        //         node: 'current'
        //       }
        //     }
        //   ]
    ],
};