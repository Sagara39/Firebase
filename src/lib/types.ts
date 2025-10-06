export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type CartItem = MenuItem & {
  quantity: number;
};

export type Order = {
  id?: string;
  orderDate: any;
  totalAmount: number;
  orderItems: {
    menuItemId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
}
