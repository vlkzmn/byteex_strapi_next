import { Image } from './Image';

export default interface ReviewsType {
  title: string;
  description: string;
  reviews: {
    name: string;
    text: string;
    foto: Image;
  }[];
  imageMobile: Image;
  image: Image;
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
}
