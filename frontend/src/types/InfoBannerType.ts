import { Image } from "./Image";

export interface InfoBannerType {
  title: string;
  savedList: {
    title: string;
    description: string;
    image: Image;
  }[]
}
