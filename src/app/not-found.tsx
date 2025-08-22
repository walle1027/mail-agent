import Link from 'next/link'

function NotFound(props: { backurl?: string }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        404 - Page Not Found
        <Link href={props?.backurl || ''}></Link>
      </h1>
    </div>
  )
}

export default NotFound
