import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from './createEmotionCache';

export default function createEmotionServerInstance() {
  const cache = createEmotionCache();
  return createEmotionServer(cache);
}
