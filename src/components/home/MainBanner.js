import useGetBanner from "../../hooks/api/useGetBanner";
import {CarouselBasic3} from "../carousel";

export default function MainBanner() {
  const {data, loading} = useGetBanner()

  if (loading) return <p>Loading...</p>

  console.log(data);

  if (!loading && data && data.length > 0) {
    return (
      <CarouselBasic3 data={data} />
    )
  }
}
