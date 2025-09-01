import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen w-full flex items-center justify-center bg-red-500 snap-start">
        <h1 className="text-white text-4xl animate-in slide-in-from-bottom duration-[2s]">Page 1</h1>
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-blue-500 snap-start">
        <h1 className="text-white text-4xl animate-in slide-in-from-bottom fade-in ease-in duration-[2s]">Page 2</h1>
      </section>
      <section className="h-screen w-full flex flex-col items-center justify-center bg-green-500 snap-start">
        <h1 className="text-white text-4xl slide-in-from-bottom fade-in ease-in duration-[2s]">Page 3</h1>
        <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      </section>
    </div>
  );
}
 
