import { createQwen } from 'qwen-ai-provider'

export const qwen = createQwen({
  apiKey: process.env.QWEN_API_KEY || '',
})
