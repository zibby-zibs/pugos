import Image from "next/image";
import React from "react";

type Props = {
  open: boolean;
};

const Loading = ({ open }: Props) => {
  return (
    <main
      className={`${
        open
          ? "fixed top-0 left-0 inset-0 flex items-center justify-center z-[60] bg-white/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-[0px]"
          : "hidden"
      }`}
    >
      <div
        className={`min-h-screen animate-in duration-300 max-h-svh overflow-hidden relative items-center justify-center w-[70%] ${
          open ? "flex" : "hidden"
        }`}
      >
        <section className="window w-full">
          <section className="title-bar flex items-center justify-between">
            <div className="title-bar-text flex items-center gap-2">
              <Image
                src={"/hourglass-loader.gif"}
                alt=""
                height={20}
                width={20}
              />
              <p>Loading</p>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center p-3">
            <Image
              src={"/hourglass-loader.gif"}
              alt=""
              height={60}
              width={60}
            />
            <p className="text-lg">Loading, please wait...</p>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Loading;
