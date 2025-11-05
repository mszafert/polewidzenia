# Payload Configuration Package

This package contains the centralized Payload CMS configuration for the project.

## Environment Variables

Create a `.env` file in this directory (`packages/payload-config/.env`) with the following variables:

```bash
# Database configuration
DATABASE_URI=file:../../apps/cms/cms.db

# Payload CMS secret key - generate a secure random string
PAYLOAD_SECRET=your-secret-key-here
```

You can copy `.env.example` to `.env` and update the values as needed.

## Usage

```typescript
import { createPayloadConfig } from '@repo/payload-config';

const config = createPayloadConfig({
  adminImportMapBaseDir: '/path/to/admin',
  typescriptOutputFile: '/path/to/types.ts'
});
```

## Configuration Options

- `adminImportMapBaseDir` (optional): Base directory for admin import map
- `typescriptOutputFile` (optional): Path for TypeScript output file
- `payloadSecret` (optional): Override environment variable
- `databaseUri` (optional): Override environment variable
