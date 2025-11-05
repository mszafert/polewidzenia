import createPayloadConfig from '@repo/payload-config';
import { Page } from '@repo/payload-types/types';
import { getPayload } from 'payload';

export class PageService {
  private config;

  constructor() {
    this.config = createPayloadConfig({});
  }

  getAll = async (): Promise<Page[]> => {
    const config = await this.config;
    const payload = await getPayload({ config });
    const pages = await payload.find({
      collection: 'pages',
      depth: 1,
      limit: 100,
    });

    return pages.docs;
  };
}
