import Head from 'next/head'
import Image from "next/image";

// Custom Components
import Button from '../components/Button';

// Assets
import heroEye from "../public/hero-eye.png";

export default function Home() {
  return (
    <>
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
              <span className="text-7xl not-italic">Yes!</span> You are
              exclusive.
            </h1>
            <p className="text-2xl italic mt-4">
              Top-Class Designs. Crafted to Perfection
            </p>
            <Button btnTitle="Let's Talk" btnLink="/" />
          </div>
        </div>
      </div>

      <section className="idea">
        <div className="sm:flex sm:gap-x-40">
          <div className="image">
            <Image
              src="/bulb.png"
              width="435"
              height="860"
              layout="intrinsic"
              objectFit='contain'
            />
          </div>
          <div className="text-box flex-1">
            <h2 className="text-4xl leading-normal sm:leading-none md:text-7xl 2xl:text-8xl text-wwg font-bold">
              We Craft, Beauty!
            </h2>
            <p className="text-2xl mt-8">
              We love designing concepts for people/companies who seek high
              quality, whether it’s about the aesthetics, the development, the
              security aspect, or the visual representation of their ideas.
            </p>
            <Button btnTitle="Read More" btnLink="/" />
          </div>
        </div>
      </section>
    </>
  );
}
