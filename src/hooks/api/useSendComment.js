import {useState} from 'react';
import {writeClient} from "../../utils/client";

export default function useSendComment(fn) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function postData(payload) {
    try {
      setLoading(true)
      const newComment = {
        _type: 'reviews',
        name: payload.name,
        email: payload.email,
        comment: payload.comment,
        product: payload.product
      }
      const response = await writeClient.create(newComment);
      console.log(response);
      if (response !== null) {
        console.log('congrats!')
        await fn()
      }
      setLoading(false)

    } catch(err) {
      setError(err)
      setLoading(false)
    }
  }

  return {send: (values) => postData(values), loading, error};
}
