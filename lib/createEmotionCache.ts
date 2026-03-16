import createCache from '@emotion/cache';

// Create a new emotion cache.
export default function createEmotionCache() {
  return createCache({ key: 'mui', prepend: true });
}
