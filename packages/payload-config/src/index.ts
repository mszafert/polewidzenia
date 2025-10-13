import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Users, Media, Pages } from '@repo/payload-types/collections';
import { Homepage, Navigation } from '@repo/payload-types/globals';

export const createPayloadConfig = (options: {
  adminImportMapBaseDir?: string;
  typescriptOutputFile?: string;
}) => {
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
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
      outputFile: options.typescriptOutputFile,
    },
    db: sqliteAdapter({
      client: {
        url: process.env.DATABASE_URI || '',
      },
    }),
    sharp,
    plugins: [],
  });
};

export default createPayloadConfig;
