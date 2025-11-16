import type { Media } from '@repo/payload-types/types';

export interface ImageData {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Extracts image data from Payload Media object or ID
 */
export const getImageData = (media: number | Media | null | undefined): ImageData | null => {
  if (!media) return null;

  if (typeof media === 'number') {
    // If it's just an ID, construct URL manually
    const cmsUrl = import.meta.env.CMS_URL || 'http://localhost:3000';

    return {
      url: `${cmsUrl}/api/media/file/${media}`,
      alt: 'Image',
    };
  }

  // If it's a Media object
  if (media.url) {
    const cmsUrl = import.meta.env.CMS_URL || 'http://localhost:3000';
    const fullUrl = media.url.startsWith('http') ? media.url : `${cmsUrl}${media.url}`;

    return {
      url: fullUrl,
      alt: media.alt || 'Image',
      width: media.width ?? undefined,
      height: media.height ?? undefined,
    };
  }

  return null;
};

/**
 * Gets optimized image URL using local proxy
 */
export const getProxiedImageUrl = (media: number | Media | null | undefined): string | null => {
  if (!media) return null;

  if (typeof media === 'number') {
    return `/api/media/${media}`;
  }

  if (media.filename) {
    return `/api/media/${media.filename}`;
  }

  return null;
};
