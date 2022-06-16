/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import groq from 'groq';
import {client} from '../../utils/client'


export default function useGetProductsByCategory(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = groq`
  *[_type == 'product' && category->title ==  $category ] {
  title,
  "slug": slug.current,
  price,
  lastPrice,
  images,
  isNew,
  isFeatured,
  "category": category->title,
}
`

  async function fetchData(query) {
    try {
      setLoading(true)
      const response = await client.fetch(query, {category: category});
      setData(response);
      setLoading(false)
    } catch(err) {
      setError(err)
      setLoading(false)
    }
  }

  return {data, loading, error, search: (externalQuery) => fetchData(externalQuery)};
}
