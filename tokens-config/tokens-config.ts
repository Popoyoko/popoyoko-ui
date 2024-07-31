export interface TokenConfig {
  tokenDirectory: string;
  brand: string;
}

const config: TokenConfig = {
  tokenDirectory: './build-tokens',
  brand: 'Popoyoko', 
};

export default config;
