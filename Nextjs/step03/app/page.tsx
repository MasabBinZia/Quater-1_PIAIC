import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from MBZ!
          <br/>
          <Link href="/name">Go to name page</Link>
    </div>
  )
}