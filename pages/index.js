import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airdrop Labs</title>
        <meta name="description" content="WAGMI." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WAGMI.
        </h1>
        <h2>
          <a href="https://jobs.gusto.com/boards/airdrop-labs-de232069-6209-49e9-8597-63ac9d858075" target="_blank" className={styles.link}>[We're Hiring]</a>
        </h2>
      </main>
    </div>
  )
}
