export type Product = {
  name: string;
  regularPrice: number;
  salePrice: number;
};

export type Products = Product[];

export type BookType = {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
};

export type SearchBarProps = {
  data: BookType[];
  // placeholder: string;
};
