import Head from 'next/head'
import UnderConstruction from './components/underconstruction'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <div>
            <Head>
                <title>Training and Placement Cell | IIIT Ranchi</title>
                <meta name="description" content="Training and Placement Cell, Indian Institute of Information Technology Ranchi" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Shippori+Antique+B1&display=swap" rel="stylesheet"></link>
            </Head>

            <main>
                {/* add other components in a similar fashion as below */}
                <UnderConstruction />
            </main>
        </div>
    )
}
