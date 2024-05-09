/**
 * `landing-page-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {    
  blocks: {
    populate: {
      headerReview: {
        populate: {
          foto: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      list : {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      reviews: {
        populate: {
          foto: {
            fields: ["alternativeText", "url"]
          }
        }
      }, 
      cards: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      QnAList: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      savedList: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      footerList: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      button: {
        populate: true
      },
      CallToActionButton: {
        populate: true
      },
      reviewsButton: {
        populate: true
      },
      footerButton: {
        populate: true
      },
      logo: {
        fields: ["alternativeText", "url"]
      },
      image: {
        fields: ["alternativeText", "url"]
      },
      imageMobile: {
        fields: ["alternativeText", "url"]
      },
      payment: {
        fields: ["alternativeText", "url"]
      },
      images: {
        populate: true
      },
      brands: {
        populate: {
          data: {
            fields: ["alternativeText", "url"]
          }
        }
      },
    }
  }
};

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }
    await next();
  };
};
