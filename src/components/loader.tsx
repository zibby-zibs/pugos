import Image from "next/image";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <main className="fixed inset-0 flex w-screen h-svh max-h-svh overflow-hidden items-center justify-center z-[60] bg-black/40 backdrop-blur-sm">
      <Image
        src={"/clouds-wallpaper.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="fixed inset-0 w-screen h-svh object-cover top-0 left-0"
      />
      <div className="flex flex-col gap-5 justify-center items-center relative z-10 ">
        <Image
          src="/logo-pixel.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-[200px] h-[200px] object-contain"
        />
        <article>
          <p className="text-3xl animate-bounce">Welcome to</p>
          <p className="text-6xl font-semibold ml-3 lg:ml-8 tracking-wide">
            pugOs
          </p>
        </article>
        <p className="text-lg mt-8">
          Please wait while setup loads your configuration...
        </p>
      </div>
    </main>
  );
};

export default Loader;
