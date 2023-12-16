import Image from "next/image";
export default function Home() {
  return (
    <>
      <header className="w-full h-12 backdrop-blur-lg bg-black!">
        <div className="flex justify-center items-center">
          <Image
            src={"/hidemaru-2023.png"}
            height="50"
            width="50"
            alt="Logo"
            className="block mx-auto"
          />
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-sm font-bold sm:text-3xl">
          ぷよすきーは滅んでしまったようです。 <br /> ここにあるのは、 <br />{" "}
          ぷよすきーの墓標です。
          <Image
            className="w-48 sm:w-96"
            src={"/grave.png"}
            height={400}
            width={400}
            loading="lazy"
            alt="grave"
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
          <a
            href="https://puyo.v-sli.me"
            className="text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              新しいぷよすきーに進む{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 text-sm opacity-50`}>
              売国奴に国を滅ばされてしまった少年。
              <br />
              彼は諦められずにいた。
              <br />
              彼は再建国をした。
              <br />
              それがここ"ぷよすきー"なのだ。
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
