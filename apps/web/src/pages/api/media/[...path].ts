import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  const path = params.path || '';
  const cmsUrl = import.meta.env.CMS_URL || 'http://localhost:3000';

  try {
    const imageUrl = `${cmsUrl}/media/${path}`;
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new Response('Image not found', { status: 404 });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await response.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return new Response('Error fetching image', { status: 500 });
  }
};
