import { Address } from 'viem'
import getStackClient from './getStackClient'
import { SETUP_NEW_CONTRACT_EVENT, SETUP_NEW_CONTRACT_POINT } from '../consts'

const trackSetupNewContractPoints = async (
  address: Address,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setupContractEventArgs: any,
  chainId: number,
) => {
  const stackClient = getStackClient()
  await stackClient.track(SETUP_NEW_CONTRACT_EVENT, {
    points: SETUP_NEW_CONTRACT_POINT,
    account: address,
    uniqueId: `${chainId}-${setupContractEventArgs.newContract}`,
    metadata: setupContractEventArgs,
  })
}

export default trackSetupNewContractPoints
