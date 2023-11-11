export class Product {
  remote_product_id;
  store_id;
  event_type;
  product_name;
  price;
  price_origin;
  product_image;
  is_display = "y";
  view_count = 0;
  month;
  constructor(
    store_id,
    remote_product_id,
    product_name,
    product_image,
    price,
    event_type,
    month
  ) {
    this.store_id = store_id;
    this.remote_product_id = remote_product_id;
    this.event_type = event_type;
    this.product_name = product_name;
    this.price = price;
    this.price_origin = price;
    this.product_image = product_image;
    this.month = month;
  }
}
