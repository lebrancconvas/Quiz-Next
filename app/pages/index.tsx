import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div>
      <Head> 
        <title>First Page</title> 
      </Head>
      <header>
        <div>
          <h1>Hello World</h1>
        </div>
      </header> 
      <section>
        <div>
          <h2>My First Post</h2>
        </div>
        <div>
          <p>Posted on 1/1/2021</p> 
        </div>
      </section>
    </div>
  )
}
