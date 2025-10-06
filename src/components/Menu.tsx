'use client';

import type { MenuItem } from '@/lib/types';
import MenuItemCard from '@/components/MenuItemCard';
import { MOCK_MENU_ITEMS } from '@/lib/menu-data';

export default function Menu() {
  const menuItems: MenuItem[] = MOCK_MENU_ITEMS;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {menuItems?.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
