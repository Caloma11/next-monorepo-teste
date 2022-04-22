import React from 'react'
import Link from 'next/link'

const Logout = () => {

  console.log(process.env.NODE_ENV)
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

  return (
    <div>
      <h2>This is a logout page within the login app</h2>
    <Link href="/">
      <a>Back</a>
    </Link>
    </div>
  )
}

export default Logout