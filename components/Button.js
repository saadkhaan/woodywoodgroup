import Link from "next/link";

export default function Button({btnTitle, btnLink}) {
    return (
      <>
        <Link href={btnLink}>
          <a className="bg-wwg text-white text-2xl px-6 py-3 inline-block rounded-br-full mt-6 hover:bg-violet-900 transform transition-all hover:shadow-xl">
            {btnTitle}
          </a>
        </Link>
      </>
    );
}
