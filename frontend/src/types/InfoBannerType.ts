import { Image } from './Image';

export default interface InfoBannerType {
  title: string;
  list: {
    title: string;
    description: string;
    image: Image;
  }[];
}
