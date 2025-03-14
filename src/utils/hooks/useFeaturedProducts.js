import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featProducts, setFeatProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeatProducts() {
      try {
        setFeatProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(
            '[[at(document.tags, ["Featured"])]]'
          )}&lang=en-us&pageSize=16`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeatProducts({ data, isLoading: false });
      } catch (err) {
        setFeatProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeatProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featProducts;
}
