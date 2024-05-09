import { Image } from "./Image";

export interface ReviewsType {  
  title: string;
  description: string;
  reviews: {
    name: string | null;
    text: string;
    foto: Image;
  }[];
  imageMobile: Image,
  image: Image,
  button: { title: string; link: string; reviewsCount: string };   
}
