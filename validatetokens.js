
require('ts-node').register({
    transpileOnly: true,
    compilerOptions: {
      module: 'ESNext'
    }
  });
  
  require('./tokens-config/tokensverification');
  