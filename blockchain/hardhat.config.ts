import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import '@nomiclabs/hardhat-etherscan';

require('dotenv').config({ path: '../.env' });

type Config = HardhatUserConfig & {
  etherscan: {
    apiKey: {
      [key: string]: string
    }
  }
}

const config: Config = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    rinkeby: {
      url: process.env.RENKEBY_URL || '',
      accounts: {
        mnemonic: process.env.MNEMONIC || ''
      },
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY || ''
    }
  }
};

export default config;
