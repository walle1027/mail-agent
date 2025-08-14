import { AppContext } from 'next/app'
import React from 'react'

export default class ProductPage extends React.Component<{ product: Product }> {
  render() {
    const { product } = this.props

    return (
      <div className="product-page">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <span className="product-price">{product.price}</span>
      </div>
    )
  }
}

export class Product {
  id?: string
  name?: string
  description?: string
  price?: number
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await (await fetch(`https://pokeapi.co/api/v2/item/${id}/`)).json()

  return {
    props: {
      product: res,
    },
  }
}
