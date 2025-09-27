import type { MenuItem } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string) => {
  const placeholder = PlaceHolderImages.find(p => p.id === id);
  if (!placeholder) {
    return {
      imageUrl: "https://picsum.photos/seed/placeholder/400/300",
      imageHint: "food item",
    };
  }
  return {
    imageUrl: placeholder.imageUrl,
    imageHint: placeholder.imageHint,
  };
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Buttery Croissant",
    description: "A classic French pastry, known for its flaky layers and buttery taste. Perfect with coffee.",
    price: 3.5,
    image: findImage("croissant").imageUrl,
    imageHint: findImage("croissant").imageHint,
  },
  {
    id: "2",
    name: "Artisanal Coffee",
    description: "Rich, aromatic, and freshly brewed coffee to kickstart your day. Available hot or iced.",
    price: 4.0,
    image: findImage("coffee").imageUrl,
    imageHint: findImage("coffee").imageHint,
  },
  {
    id: "3",
    name: "Club Sandwich",
    description: "A hearty sandwich with layers of turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
    price: 8.5,
    image: findImage("sandwich").imageUrl,
    imageHint: findImage("sandwich").imageHint,
  },
  {
    id: "4",
    name: "Chocolate Fudge Cake",
    description: "A decadent and moist chocolate cake with a rich fudge icing. A true indulgence.",
    price: 5.0,
    image: findImage("cake").imageUrl,
    imageHint: findImage("cake").imageHint,
  },
  {
    id: "5",
    name: "Fresh Orange Juice",
    description: "Squeezed daily from fresh oranges. A pure and refreshing dose of Vitamin C.",
    price: 4.5,
    image: findImage("juice").imageUrl,
    imageHint: findImage("juice").imageHint,
  },
  {
    id: "6",
    name: "Garden Salad",
    description: "A mix of fresh greens, cherry tomatoes, cucumbers, and a light vinaigrette dressing.",
    price: 7.0,
    image: findImage("salad").imageUrl,
    imageHint: findImage("salad").imageHint,
  },
];
