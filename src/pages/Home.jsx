import { useEffect, useState } from 'react'

import { CategoryCard } from '../components/CategoryCard'
import { getCategories } from '../utils'

export const Home = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))]">
      {categories && categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}