import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>This is the login app's homepage</p>
      <Link href="/logout">
        <a >Go to logout</a>
      </Link>
    </div>
  )
}
