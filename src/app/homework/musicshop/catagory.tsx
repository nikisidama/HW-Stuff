'use client'

type Category = {
  name: string;
  subcategories: string[];
}

export default function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div>
      <ul className="ml-2 p-4 rounded-lg bg-gray-200 flex flex-col space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <strong className="block text-xs font-medium uppercase text-gray-400">{category.name}</strong>
            <ul className="mt-2 space-y-1">
              {category.subcategories.map((subCategory, subIndex) => (
                <li key={subIndex} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  {subCategory}
                </li>))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}