import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeader from '@/components/layout/SectionHeader'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-16' id="about">
        <SectionHeader subHeader={'Our Story'} mainHeader='About Us' />
        <div className='text-gray-500 max-w-xl  mx-auto mt-4 flex-col gap-4'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem culpa ratione ad distinctio ut laudantium incidunt repellat sed esse at maiores, sequi explicabo odio debitis eius impedit. Eum, tempore voluptatem.
          </p>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae non molestias, adipisci cupiditate dolores eaque reprehenderit tempore eligendi molestiae id soluta ipsum, facilis ab temporibus libero incidunt eveniet quod.
          </p>
        </div>
      </section>

      <section className='text-center my-8' id="contact">
        <SectionHeader subHeader='Dont Hesitate' mainHeader='Contact Us' />
        <div className='mt-8'>
          <Link href="" className='text-4xl underline text-gray-500 '>+91 9876543210</Link>
        </div>
      </section>

    </>
  )
}