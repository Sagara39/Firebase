'use client';

import { useMemo } from 'react';
import type { MenuItem } from '@/lib/types';
import MenuItemCard from '@/components/MenuItemCard';
import MenuItemSkeleton from '@/components/MenuItemSkeleton';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';

export default function Menu() {
  const firestore = useFirestore();
  const menuItemsCollection = useMemoFirebase(
    () => (firestore ? collection(firestore, 'menu_items') : null),
    [firestore]
  );
  const {
    data: menuItems,
    isLoading,
    error,
  } = useCollection<MenuItem>(menuItemsCollection);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <MenuItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 bg-card rounded-lg">
        <p className="text-destructive">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm-grid-cols-2 xl:grid-cols-3 gap-6">
      {menuItems?.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
