import { FC } from "react"
import { TProduct } from "../MainPage/components/Catalog"

const Product2:FC<{ product: TProduct }> = ({product}) => {
  console.log(product)
  return (
    <div>
      Product2
    </div>
  )
}

export default Product2
