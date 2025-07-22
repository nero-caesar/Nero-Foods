"use client"

import type React from "react"
import { useMemo } from "react"
import menuData from "./menudata.ts"
import MenuItem from "./menuitem.tsx"
import type { Product } from "../../Component/Cart/carttypes.ts"
import "./menuplus.css"

interface Props {
  onAddToCart: (product: Product) => void
}

const MenuPlus: React.FC<Props> = ({ onAddToCart }) => {
  // Group menu items by category
  const categorizedMenu = useMemo(() => {
    const grouped = menuData.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
      },
      {} as Record<string, typeof menuData>,
    )

    // Sort categories alphabetically
    return Object.keys(grouped)
      .sort()
      .map((category) => ({
        category,
        items: grouped[category],
      }))
  }, [])

  return (
    <>
      {categorizedMenu.map(({ category, items }) => (
        <div key={category} className="menu-category">
          <h2 className="menu-category-title">{category}</h2>
          <div className="menu-grid">
            {items.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default MenuPlus
