import { Image } from './Image';

export default interface AboutType {
  title: string;
  text: string;
  image: Image;
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
}
