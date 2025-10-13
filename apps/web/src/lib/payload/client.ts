import { getPayload } from 'payload';
import { createPayloadConfig } from '@repo/payload-config';

const config = createPayloadConfig({
  // Web app doesn't need admin config
});

let cachedPayload: PayloadClient | null = null;

export const payloadClient = async () => {
  if (cachedPayload) {
    return cachedPayload;
  }

  cachedPayload = await getPayload({ config });

  return cachedPayload;
};

export type PayloadClient = Awaited<ReturnType<typeof getPayload>>;
