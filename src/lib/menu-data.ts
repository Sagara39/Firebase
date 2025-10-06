import type { MenuItem } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
    const placeholder = PlaceHolderImages.find(p => p.id === id);
    return placeholder || { imageUrl: `https://picsum.photos/seed/${id}/600/400`, imageHint: 'food' };
};

export const MOCK_MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Gourmet Burger',
    description: 'A juicy beef patty with fresh lettuce, tomatoes, and our special sauce.',
    price: 12.50,
    imageUrl: getImage('sandwich').imageUrl,
    imageHint: getImage('sandwich').imageHint,
  },
  {
    id: '2',
    name: 'Crispy Fries',
    description: 'Golden, crispy, and lightly salted. The perfect side for any meal.',
    price: 4.50,
    imageUrl: 'https://picsum.photos/seed/fries/600/400',
    imageHint: 'french fries',
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    description: 'A warm, gooey chocolate cake with a molten center. Served with a scoop of vanilla ice cream.',
    price: 8.00,
    imageUrl: getImage('cake').imageUrl,
    imageHint: getImage('cake').imageHint,
  },
  {
    id: '4',
    name: 'Classic Croissant',
    description: 'A buttery, flaky, and freshly baked croissant.',
    price: 3.50,
    imageUrl: getImage('croissant').imageUrl,
    imageHint: getImage('croissant').imageHint,
  },
  {
    id: '5',
    name: 'Fresh Garden Salad',
    description: 'A mix of fresh greens, cherry tomatoes, cucumbers, and a light vinaigrette.',
    price: 9.00,
    imageUrl: getImage('salad').imageUrl,
    imageHint: getImage('salad').imageHint,
  },
  {
    id: '6',
    name: 'Iced Coffee',
    description: 'Chilled and refreshing coffee, perfect for a hot day.',
    price: 5.00,
    imageUrl: getImage('coffee').imageUrl,
    imageHint: getImage('coffee').imageHint,
  },
];
