import { useParams } from 'react-router'
import { getProducts, getProductsByCateg } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

export const Products = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState(null)

  categoryId && console.log(categoryId);
  

    useEffect(() => {
      if(categoryId)  getProductsByCateg(categoryId).then(setProducts)
        else getProducts().then(setProducts)
    }, [])
products && console.log(products);

  return (
    <div>
        {products && products[0] && 
           <h1 className="text-2xl font-bold mb-6"> {products[0].categ_name} kategória termékei</h1>
        }
      {/* Termékek megjelenítése */}
    </div>
  )
}