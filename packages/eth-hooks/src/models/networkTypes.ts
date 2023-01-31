/**
 * #### Summary
 * A type that describes the basics of a network for applications. e.g. mainnet, ropsten, rinkeby, etc.
 *
 * @category Models
 */
export type TNetworkInfo = {
  name: string;
  chainId: number;
  rpcUrl: string;
  color: string;
  faucet?: string;
  blockExplorer: string;
  price?: number;
  gasPrice?: number;
};
