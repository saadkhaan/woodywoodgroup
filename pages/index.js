import Head from 'next/head'
import Image from "next/image";

// Custom Components
import Button from '../components/Button';

// Assets
import heroEye from "../public/hero-eye.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Woody Wood Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:grid grid-cols-2 items-center md:py-20">
        <div className="md:order-last">
          <Image src={heroEye} alt="woody wood group" />
        </div>
        <div className="title">
          <h1 className="text-5xl font-bold italic text-wwg">
            <span className="text-7xl not-italic">Yes!</span> You are exclusive.
          </h1>
          <p className="text-2xl italic mt-4">
            Top-Class Designs. Crafted to Perfection
          </p>
          <Button btnTitle="Let's Talk" btnLink="/" />
        </div>
      </div>
    </div>
  );
}
