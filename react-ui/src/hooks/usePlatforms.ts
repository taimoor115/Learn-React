import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}




const usePlatforms = () => useData<Platform>("/platforms");

export default usePlatforms;
