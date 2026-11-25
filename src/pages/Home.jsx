import { useEffect, useState } from 'react'

import { CategoryCard } from '../components/CategoryCard'
import { getCategories } from '../utils'

export const Home = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-4 bg-slate-200">
      {categories && categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}