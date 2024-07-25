"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

import Stake from "./stake";
import Rafflepage from "./raffle-page";
import Loader from "./loader";
import Link from "next/link";

type Props = {};

const Homepage = (props: Props) => {
  const [image, setImage] = useState("/pixel-wallpaper-waterfall.jpg");
  const [open, setOpen] = useState(false);
  const [openStake, setOpenStake] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  const wallpapers = [
    "/pixel-wallpaper-waterfall.jpg",
    "/most-famous-windows-95-desktop-abdvzrjfnw81471k.jpg",
    "/pixel-wallpaper-lava.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(wallpapers[Math.floor(Math.random() * wallpapers.length)]);
    }, 5000);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className="relative  h-[calc(100svh-100px)] w-screen">
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        className="w-screen h-svh object-cover absolute top-0 left-0"
        alt=""
      />

      <section className="relative flex items-start gap-5 lg:gap-8">
        <aside className="relative z-10 p-5 h-full flex flex-col gap-10 lg:gap-20 w-[100px]">
          {socials.map((social) => (
            <Link
              href={social.link}
              key={social.id}
              className=""
              target="_blank"
            >
              <div>
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-contain h-[80px] w-[80px]"
                />
                <article className="mt-2">
                  <p className="text-xl font-bold text-center">{social.name}</p>
                </article>
              </div>
            </Link>
          ))}
        </aside>
        <aside className="relative z-10 p-5 h-full flex flex-col gap-10 lg:gap-20 w-[100px]">
          <div
            className="text-center cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Image
              src={"/raffle-icon.png"}
              alt=""
              width={60}
              height={60}
              sizes="100vw"
              className="object-contain"
            />
            <p className="text-xl font-bold">Raflle</p>
          </div>
          <div
            className="text-center cursor-pointer"
            onClick={() => setOpenStake(true)}
          >
            <Image
              src={"/stake-icon.png"}
              alt=""
              width={60}
              height={60}
              sizes="100vw"
              className="object-contain"
            />
            <p className="text-xl font-bold">Stake</p>
          </div>
        </aside>
      </section>
      <section>
        <Rafflepage open={open} setOpen={setOpen} />
      </section>
      <section>
        <Stake open={openStake} setOpen={setOpenStake} />
      </section>
      <section className="fixed left-0 bottom-0 w-full">
        <Navbar
          setOpen={setOpen}
          open={open}
          openStake={openStake}
          setOpenStake={setOpenStake}
        />
      </section>

      {/* <section className="relative">
        <Image
          src={"/paint.png"}
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-full object-contain"
        />
      </section> */}
    </main>
  );
};

export default Homepage;
