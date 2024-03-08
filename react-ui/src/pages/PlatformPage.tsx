import { useParams } from "react-router-dom"
import usePlatforms from "../hooks/usePlatforms";


const PlatformPage = () => {
  const {name} = useParams();
  console.log(name);
  const {data} = usePlatforms();
  console.log(data);


  return (
    <div>

    </div>
  )
}

export default PlatformPage
