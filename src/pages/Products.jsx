import { useParams } from 'react-router'
import { getProductsByCateg } from '../utils'

export const Products = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState(null)

  console.log(categoryId);
  

    useEffect(() => {
    getProductsByCateg(categoryId).then(setProducts)
    }, [])

  return (
    <div>
        {products && products[0] && 
           <h1 className="text-2xl font-bold mb-6"> {products[0].categ_name} kategória termékei</h1>
        }
      {/* Termékek megjelenítése */}
    </div>
  )
}