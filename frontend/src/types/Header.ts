import { Image } from "./Image";

export interface HeaderType {
  message: string;
  title: string;
  reviewTitle: string;
  headerReview: {
    name: string;
    text: string;
    foto: Image;
  };
  list: {
    title: string | null;
    description: string;
    image: Image;
  }[];
  button: { title: string; link: string; reviewsCount: string };    
  logo: Image;
  image: Image;
}
