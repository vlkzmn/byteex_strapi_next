import { Image } from "./Image";

export interface CallToActionType {
  title: string;
  cards: {
    title: string | null;
    description: string;
    image: Image;
  }[];
  button: { title: string; link: string; reviewsCount: string };  
}
