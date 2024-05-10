import { Image } from "./Image";

export interface QuestionAnswerType {  
  title: string;
  QnAList: {
    title: string;
    description: string;
  }[];
  image: Image,
  button: { title: string; link: string; reviewsCount: string };   
}
