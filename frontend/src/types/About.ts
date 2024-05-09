import { Image } from "./Image";

export interface AboutType {
  text: string;
  title: string;
  image: Image,
  button: { title: string; link: string; reviewsCount: string };   
}
