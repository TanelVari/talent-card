import React from "react"

export interface MenuItem {
  label: string
  onClick: () => void
}

export interface PopoverMenuProps {
  menuItems: MenuItem[]
  className?: string
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({
  menuItems,
  className = "",
}) => {
  return (
    <div
      className={`bg-page text-primary rounded-md shadow-xl p-2 border border-gray-300 dark:border-gray-600 ${className}`} // Updated border color
    >
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={item.onClick}
              className="w-full text-left px-3 py-1.5 text-sm text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-150"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopoverMenu
