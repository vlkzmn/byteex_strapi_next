import { Image } from '@/types/Image';

export interface Images {
  attributes: {
    alternativeText: string;
    url: string;
  };
}

export default interface BenefitsType {
  title: string;
  where: string;
  list: {
    title: string;
    description: string;
    image: Image;
  }[];
  brands: {
    data: Images[];
  };
  images: {
    data: Images[];
  };
  button: {
    title: string;
    link: string;
    reviewsCount: string;
  };
}
