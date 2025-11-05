import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import { Users, Media, Pages } from '@repo/payload-types/collections';
import { Homepage, Navigation } from '@repo/payload-types/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, '../.env') });

export const createPayloadConfig = (options: {
  adminImportMapBaseDir?: string;
  typescriptOutputFile?: string;
  payloadSecret?: string;
  databaseUri?: string;
} = {}) => {
  const PAYLOAD_SECRET = options.payloadSecret || process.env.PAYLOAD_SECRET;
  const DATABASE_URI = options.databaseUri || process.env.DATABASE_URI;

  if (!PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is not defined. Check .env file in packages/payload-config/');
  }

  if (!DATABASE_URI) {
    throw new Error('DATABASE_URI is not defined. Check .env file in packages/payload-config/');
  }

  return buildConfig({
    admin: {
      user: Users.slug,
      importMap: {
        baseDir: options.adminImportMapBaseDir,
      },
    },
    collections: [Users, Media, Pages],
    globals: [Homepage, Navigation],
    editor: lexicalEditor(),
    secret: PAYLOAD_SECRET,
    typescript: {
      outputFile: options.typescriptOutputFile,
    },
    db: sqliteAdapter({
      client: {
        url: DATABASE_URI,
      },
    }),
    sharp,
    plugins: [],
  });
};

export default createPayloadConfig;
