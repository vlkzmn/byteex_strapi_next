import { Image } from './Image';

export default interface FinalCTAType {
  title: string;
  description: string;
  image: Image;
  payment: Image;
  list: {
    title: string;
    image: Image;
  }[];
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
}
