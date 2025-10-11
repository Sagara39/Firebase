'use client';

import type { MenuItem } from '@/lib/types';
import MenuItemCard from '@/components/MenuItemCard';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import MenuItemSkeleton from './MenuItemSkeleton';

export default function Menu() {
  const firestore = useFirestore();
  const inventoryCollection = useMemoFirebase(
    () => (firestore ? collection(firestore, 'inventory') : null),
    [firestore]
  );
  const { data: menuItems, isLoading } =
    useCollection<MenuItem>(inventoryCollection);

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
