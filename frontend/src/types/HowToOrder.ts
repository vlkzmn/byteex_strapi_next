import { Image } from './Image';

export default interface HowToOrderType {
  title: string;
  cards: {
    title: string;
    description: string;
    image: Image;
  }[];
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
}
