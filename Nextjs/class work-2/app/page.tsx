import Link from 'next/link';
import Image from 'next/image'
import pic from '../public/mb.jpg'

const title :string = "Hello World from MBZ!"
const tittle2 :string = "Welcome to NextJS"


export default function Home() {
  return (
    <div >
      <div className='bg-red-800 w-full p-4 flex'>
        <div>
        <h1 className='text-3xl font-semibold'>Masab MBZ!</h1>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro quidem eaque quae debitis est commodi totam! Quae sequi at rem modi culpa quisquam esse placeat eos nemo, aperiam cupiditate.</p>
        <button className='bg-blue-600 px-3 py-2 rounded-full mt-2'>Learn More</button>
        </div>
        <div className='shrink-0'>
        <Image className='rounded-full w-32 h-32' src={pic} width={200} height={200} alt='pic' />
        </div>
      </div>
      <h1 className='text-center text-7xl font-bold underline'>
        {title}
      </h1>
      <br />
      <h2 className='text-red-300 text-center text-3xl '>
        {tittle2}
      </h2>
      {/* <div className='flex justify-center bg-red-300'>
        <div>
          <Image src={pic} width={80} height={80} alt='pic' />
        </div>
        <div className='mx-4 self-center order-start'>
          <h1 className='text-6xl font-bold text-red-900 '>Welcome to MBZ!</h1>
          <h2 className='text-3xl font-bold text-blue-600'>Frontend Engineer</h2>
          <button className=''>Home</button>
        </div>
      </div> */}
      

    </div>
  )
}