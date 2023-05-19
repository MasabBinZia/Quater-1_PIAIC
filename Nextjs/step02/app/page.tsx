import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center '>
          Hello World from Pakistan!
          <br/>
          <Link className='text-center' href="/name">Go to name page</Link>
    </div>
  )
}