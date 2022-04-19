import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Button } from 'shared'

export default function Home() {
  const router = useRouter();

  const onLogin = () => {
    router.push("/login")
  }

  return (
    <div className={styles.container}>
      WELCOME TO WEB-APP
      <Link href="/login">Loginn</Link>
      <Button />
      <Link href="/register">Go to ubbu.io register</Link>
    </div>
  )
}
