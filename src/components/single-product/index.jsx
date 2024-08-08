import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card'
import Loading from '../Loading'

function SingleProduct() {
    const { productId } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products/" + productId).then((res => {
        setProducts(res.data)
      }))
    })
  return (
    <div className="max-w-[90%] w-full mx-auto mt-24">
        {product ? <Card {...product} /> : <Loading /> }
    </div>
)
}

export default SingleProduct