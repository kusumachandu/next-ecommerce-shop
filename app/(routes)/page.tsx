import Image from 'next/image'

import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

export default async function HomePage() {

  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("0a6f5f5f-b200-4e66-8d7b-afbc1e3c6594");

  return (
    <div>
      <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
        </div>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title={"Featured Products"} items={products} />
        </div>
      </Container>
    </div>
  )
}
