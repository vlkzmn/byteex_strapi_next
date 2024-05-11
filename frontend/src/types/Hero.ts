import { Image } from './Image';

export default interface HeroType {
  title: string;
  message: string;
  reviewTitle: string;
  headerReview: {
    name: string;
    text: string;
    foto: Image;
  };
  list: {
    title: string;
    description: string;
    image: Image;
  }[];
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
  logo: Image;
  image: Image;
}
