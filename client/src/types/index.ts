export interface Category {
  id: number;
  category_name: string;
  products?: Product[];
}

export interface Product {
  id: number;
  product_name: string;
  price: number;
  stock: number;
  category_id: number;
  category?: Category;
  tags?: Tag[];
}

export interface Tag {
  id: number;
  tag_name: string;
  products?: Product[];
}
