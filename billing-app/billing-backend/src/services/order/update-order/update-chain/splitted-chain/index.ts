import { ChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { SplittedHighCostHandler } from './splitted-high-cost.handler';
import { SplittedApprovedHandler } from './splitted-approved.handler';
import { SplittedFinalHandler } from './splitted-final.handler';

const finalHandler = new SplittedFinalHandler();
const highCostHandler = new SplittedHighCostHandler();
const approvedHandler = new SplittedApprovedHandler();

export function getSplittedUpdateChain(): ChainHandler<UpdateOrderDTO> {
  const chain = finalHandler;
  chain.setNext(highCostHandler).setNext(approvedHandler);
  return chain;
}
