import Image from "next/image";
import Link from "next/link";
import React, { SetStateAction } from "react";
import { BiX } from "react-icons/bi";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  hash: `0x${string}`;
};

const Transaction = ({ open, hash, setOpen }: Props) => {
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
              <p>Success</p>
            </div>
            <div className="title-bar-controls">
              {/* <button aria-label="Minimize" />
              <button aria-label="Maximize" /> */}
              <button onClick={() => setOpen(false)} className="bg-[#c6c6c6] ">
                <BiX className="size-6" />
              </button>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center p-3">
            <Image
              src={"/hourglass-loader.gif"}
              alt=""
              height={60}
              width={60}
            />
            <p className="text-lg text-center">
              Your transaction has been completed successfully. You can view the
              details on the explorer
            </p>
            <Link href={`https://sepolia.etherscan.io/tx/${hash}`}>
              <button>Visit Explorer</button>
            </Link>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Transaction;
