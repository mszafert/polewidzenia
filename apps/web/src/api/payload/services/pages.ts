import { payloadClient } from '../client.js';
import type { Page, Homepage } from '@repo/payload-types/types';

export const getPages = async (): Promise<Page[]> => {
  const payload = await payloadClient();

  const result = await payload.find({
    collection: 'pages',
    depth: 1,
    limit: 100,
  });

  return result.docs;
};

export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  const payload = await payloadClient();

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
    limit: 1,
  });

  return result.docs[0] || null;
};

export const getPageById = async (id: number): Promise<Page | null> => {
  const payload = await payloadClient();

  try {
    const page = await payload.findByID({
      collection: 'pages',
      id,
      depth: 1,
    });

    return page;
  } catch {
    return null;
  }
};

export const getHomepage = async (): Promise<Homepage | null> => {
  const payload = await payloadClient();

  try {
    const homepage = await payload.findGlobal({
      slug: 'homepage',
      depth: 2,
    });

    return homepage;
  } catch (error) {
    console.error('Error fetching homepage:', error);

    return null;
  }
};

export const getStartPage = async (): Promise<Page | null> => {
  const homepage = await getHomepage();

  if (!homepage?.startPage) {
    return null;
  }

  if (typeof homepage.startPage === 'object') {
    return homepage.startPage;
  }

  return await getPageById(homepage.startPage);
};

export const getQuickNavPages = async (): Promise<Page[]> => {
  const homepage = await getHomepage();

  if (!homepage?.quickNavLinks) {
    return [];
  }

  const pages: Page[] = [];

  for (const link of homepage.quickNavLinks) {
    let page: Page | null = null;

    if (typeof link.page === 'object') {
      page = link.page;
    } else {
      page = await getPageById(link.page);
    }

    if (page) {
      pages.push(page);
    }
  }

  return pages;
};
