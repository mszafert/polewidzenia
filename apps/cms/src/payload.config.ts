import { createPayloadConfig } from '@repo/payload-config';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default createPayloadConfig({
  adminImportMapBaseDir: path.resolve(dirname),
  typescriptOutputFile: path.resolve(dirname, '../../../packages/payload-types/src/payload-types.ts'),
});
