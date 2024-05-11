export interface Image {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
}

export interface ImageInArray {
  attributes: {
    alternativeText: string;
    url: string;
  };
}
