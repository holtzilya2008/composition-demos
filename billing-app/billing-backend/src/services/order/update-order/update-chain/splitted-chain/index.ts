import { ChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { SplittedHighCostHandler } from './aplitted-high-cost.handler';
import { SplittedAproovedHandler } from './splitted-aprooved.handler';
import { SplittedFinalHandler } from './splitted-final.handler';

const finalHandler = new SplittedFinalHandler();
const highCostHandler = new SplittedHighCostHandler();
const aproovedHandler = new SplittedAproovedHandler();

export function getSplittedUpdateChain(): ChainHandler<UpdateOrderDTO> {
  const chain = finalHandler;
  chain.setNext(highCostHandler).setNext(aproovedHandler);
  return chain;
}
