import {useState, useEffect} from 'react';
import groq from "groq";
import {client} from "../../utils/client";

const query = groq`
*[_type == 'banner' && active == true] {
  title,
  subtitle,
  buttonText,
  url,
  image
}
`

export default function useGetBanner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true)
      const response = await client.fetch(query)
      console.log(response);
      setData(response[0])
      setLoading(false)

    } catch(err) {
      setError(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return {data, loading, error};
}
