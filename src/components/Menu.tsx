'use client';

import type { MenuItem } from '@/lib/types';
import MenuItemCard from '@/components/MenuItemCard';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import MenuItemSkeleton from './MenuItemSkeleton';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Menu() {
  const firestore = useFirestore();
  const inventoryCollection = useMemoFirebase(
    () => (firestore ? collection(firestore, 'inventory') : null),
    [firestore]
  );
  const { data: menuItemsFromDb, isLoading } =
    useCollection<MenuItem>(inventoryCollection);

  const menuItems = menuItemsFromDb?.map(item => {
    const localImage = PlaceHolderImages.find(img => img.id === item.id);
    return {
      ...item,
      imageUrl: localImage?.imageUrl || 'https://placehold.co/600x400',
      imageHint: localImage?.imageHint || 'placeholder',
    };
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <MenuItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {menuItems?.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
