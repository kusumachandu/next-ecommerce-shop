import Image from 'next/image'

import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboard';

export const revalidate = 0;

export default async function HomePage() {

  const billboard = await getBillboard("0a6f5f5f-b200-4e66-8d7b-afbc1e3c6594");

  return (
    <div>
      <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
        </div>
      </Container>
    </div>
  )
}
