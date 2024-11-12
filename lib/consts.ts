import { Address } from "viem"
import { zora } from "viem/chains"

export const CHAIN_ID = zora.id

// STACK EVENTS
export const FIRST_SMART_WALLET_LOGIN_EVENT = 'first_smart_wallet_login'
export const MESSAGE_SENT_EVENT = 'message_sent'
export const SETUP_NEW_CONTRACT_EVENT = 'setup_new_contract'
export const SETUP_NEW_CONTRACT_POINT = 55
export const SMART_WALLET_LOGIN_POINT = 11
export const MESSAGE_SENT_POINT = 1
export const CHAT_POINT_SYSTEM_ID = 4026

// IPFS
export const ONE_MB = 1024 * 1024
export const MAX_FILE_SIZE = 5 * ONE_MB

export const SUPPORTED_FILES = ['image', 'audio', 'video']
export const PROFILE_APP_URL = process.env.NEXT_PUBLIC_PROFILE_APP_URL || 'https://profile.myco.wtf'
export const API_APP_URL = 'https://api.myco.wtf'

export const REFERRAL_RECIPIENT = '0x749B7b7A6944d72266Be9500FC8C221B6A7554Ce'

// Vercel AI SDK
export const AI_MODEL = "gpt-4o-mini"

// Suggestions
export const SUGGESTIONS = [
  "What did I create this week???",
  "What's my Zora score???",
]

export const NEW_COLLECTION = {
  address: "0x0000000000000000000000000000000000000000" as Address,
  tokensCreated: 0,
  chainId: CHAIN_ID,
  metadata: {
    name: "",
    description: "",
    image: "",
  },
}
