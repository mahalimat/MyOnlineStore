import React from "react";

import SHOP_Data from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_Data
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsprops }) => (
          <CollectionPreview key={id} {...otherCollectionsprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
