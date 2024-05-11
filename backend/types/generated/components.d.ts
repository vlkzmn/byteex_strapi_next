import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAbout extends Schema.Component {
  collectionName: 'components_blocks_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface BlocksBenefits extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'Benefits';
    description: '';
  };
  attributes: {
    where: Attribute.String;
    brands: Attribute.Media;
    title: Attribute.String;
    list: Attribute.Component<'elements.list', true>;
    images: Attribute.Media;
  };
}

export interface BlocksCallToAction extends Schema.Component {
  collectionName: 'components_blocks_call_to_actions';
  info: {
    displayName: 'CallToAction';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.Component<'elements.list', true>;
    image: Attribute.Media;
  };
}

export interface BlocksFinal extends Schema.Component {
  collectionName: 'components_blocks_finals';
  info: {
    displayName: 'Final';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    payment: Attribute.Media;
    list: Attribute.Component<'elements.list', true>;
  };
}

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    payment: Attribute.Media;
    footerList: Attribute.Component<'elements.list', true>;
  };
}

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    message: Attribute.String;
    title: Attribute.String;
    logo: Attribute.Media;
    image: Attribute.Media;
    list: Attribute.Component<'elements.list', true>;
    headerReview: Attribute.Component<'elements.review'>;
    reviewTitle: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    message: Attribute.String;
    logo: Attribute.Media;
    title: Attribute.String;
    image: Attribute.Media;
    reviewTitle: Attribute.String;
    headerReview: Attribute.Component<'elements.review'>;
    list: Attribute.Component<'elements.list', true>;
  };
}

export interface BlocksInfo extends Schema.Component {
  collectionName: 'components_blocks_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.Component<'elements.list', true>;
  };
}

export interface BlocksOrder extends Schema.Component {
  collectionName: 'components_blocks_orders';
  info: {
    displayName: 'Order';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksQnA extends Schema.Component {
  collectionName: 'components_blocks_qn_as';
  info: {
    displayName: 'QnA';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    QnAList: Attribute.Component<'elements.list', true>;
    image: Attribute.Media;
  };
}

export interface BlocksReviews extends Schema.Component {
  collectionName: 'components_blocks_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    reviews: Attribute.Component<'elements.review', true>;
    imageMobile: Attribute.Media;
  };
}

export interface BlocksSaved extends Schema.Component {
  collectionName: 'components_blocks_saveds';
  info: {
    displayName: 'Saved';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsList extends Schema.Component {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsReview extends Schema.Component {
  collectionName: 'components_elements_reviews';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    foto: Attribute.Media;
    name: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about': BlocksAbout;
      'blocks.benefits': BlocksBenefits;
      'blocks.call-to-action': BlocksCallToAction;
      'blocks.faq': BlocksFaq;
      'blocks.final': BlocksFinal;
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'blocks.hero': BlocksHero;
      'blocks.info': BlocksInfo;
      'blocks.order': BlocksOrder;
      'blocks.qn-a': BlocksQnA;
      'blocks.reviews': BlocksReviews;
      'blocks.saved': BlocksSaved;
      'elements.card': ElementsCard;
      'elements.list': ElementsList;
      'elements.review': ElementsReview;
    }
  }
}
