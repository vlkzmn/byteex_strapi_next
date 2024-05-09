import { Image } from "./Image";

export interface Images {
  attributes: {
    alternativeText: string;
    url: string;
  }
}  

export interface BenefitsType {
  where: string;
  title: string;
  list: {
    title: string | null;
    description: string;
    image: Image;
  }[];
  brands: {
    data: Images[],
  },
  images: {
    data: Images[],
  },
}
