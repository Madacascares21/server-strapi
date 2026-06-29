import type { Schema, Struct } from '@strapi/strapi';

export interface AttributesPrice extends Struct.ComponentSchema {
  collectionName: 'components_attributes_prices';
  info: {
    displayName: 'Price';
  };
  attributes: {
    discounted_price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    final_price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    original_price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface AttributesSeo extends Struct.ComponentSchema {
  collectionName: 'components_attributes_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'attributes.price': AttributesPrice;
      'attributes.seo': AttributesSeo;
    }
  }
}
