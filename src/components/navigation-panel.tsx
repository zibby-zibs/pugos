"use client";

import Image from "next/image";
import Link from "next/link";
import React, { SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  openRaffle: boolean;
  setOpenRaffle: React.Dispatch<SetStateAction<boolean>>;
  openStake: boolean;
  setOpenStake: React.Dispatch<SetStateAction<boolean>>;
};

const NavigationPanel = ({
  open,
  setOpen,
  openRaffle,
  openStake,
  setOpenRaffle,
  setOpenStake,
}: Props) => {
  const socials = [
    {
      id: 1,
      name: "Twitter",
      link: "#",
      icon: "/pixel-x.png",
    },
    {
      id: 2,
      name: "Discord",
      link: "#",
      icon: "/pixel-discord.png",
    },
    {
      id: 3,
      name: "Telegram",
      link: "#",
      icon: "/pixel-telegram.png",
    },
    {
      id: 4,
      name: "Trade NFTs",
      link: "https://blast.mintify.xyz/blast/0x89ae653674178738854c83426c6ac6be69900766",
      icon: "/mintify-pixel.png",
    },
    // {
    //     id: 5,
    //     name: "Etherscan",
    //     link: "",
    //     icon: "/etherscan.png"
    // }
  ];
  return (
    <div
      className={`max-h-[60svh] h-[300px] overflow-hidden relative  w-full  window ${
        open ? "block animate-in duration-300" : "hidden"
      }`}
    >
      <section className="flex relative">
        <aside className="w-10 title-bar "></aside>
        <p className="font-semibold !absolute -rotate-90 w-fit top-[150px] text-xl text-white tracking-wider -left-[75px]">
          pugOs start menu
        </p>
        <aside className="relative z-10 flex flex-col gap-3 h-[300px] overflow-y-auto">
          {socials.map((social) => (
            <Link
              href={social.link}
              key={social.id}
              className="hover:bg-blue-800"
              target="_blank"
            >
              <div className="flex items-center gap-5 p-4">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-contain h-[20px] w-[20px]"
                />
                <article className="mt-2">
                  <p className="text-xl font-bold text-center">{social.name}</p>
                </article>
              </div>
            </Link>
          ))}
          <aside className="relative z-10 h-full flex flex-col gap-3 ">
            <div
              className="text-center flex items-center gap-5 cursor-pointer p-4 hover:bg-blue-700"
              onClick={() => setOpenRaffle(true)}
            >
              <Image
                src={"/raffle-icon.png"}
                alt=""
                width={20}
                height={20}
                sizes="100vw"
                className="object-contain"
              />
              <p className="text-xl font-bold">Raffle</p>
            </div>
            <div
              className="text-center flex items-center gap-5 cursor-pointer p-4 hover:bg-blue-700"
              onClick={() => setOpenStake(true)}
            >
              <Image
                src={"/stake-icon.png"}
                alt=""
                width={20}
                height={20}
                sizes="100vw"
                className="object-contain"
              />
              <p className="text-xl font-bold">Stake</p>
            </div>
            <div
              className="text-center flex items-center gap-5 cursor-pointer p-4 hover:bg-blue-700"
              //   onClick={() => setOpenStake(true)}
            >
              <Image
                src={"/docs.png"}
                alt=""
                width={20}
                height={20}
                sizes="100vw"
                className="object-contain"
              />
              <p className="text-xl font-bold">Docs</p>
            </div>
          </aside>
        </aside>
      </section>
    </div>
  );
};

export default NavigationPanel;
