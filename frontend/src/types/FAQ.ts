import { Image } from './Image';

export default interface FAQType {
  title: string;
  image: Image;
  list: {
    title: string;
    description: string;
  }[];
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
}
