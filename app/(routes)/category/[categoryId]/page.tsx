import getProducts from '@/actions/get-products';
import React from 'react'

interface CategoryPageProps {
  params : {
    categoryId: string;
  },
  searchParams :{
    colorId: string;
    sizeId: string
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {

  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
    isFeatured: false || true
  })

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage