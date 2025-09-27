export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
};

export type CartItem = MenuItem & {
  quantity: number;
};
