"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import Link from "next/link";
import React, { useState } from "react";
import { SiRetroarch } from "react-icons/si";

import WalletModal from "./wallet-modal";
import { Account } from "./account";
import Image from "next/image";
import { useAccount } from "wagmi";
import NavigationPanel from "./navigation-panel";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openStake: boolean;
  setOpenStake: React.Dispatch<React.SetStateAction<boolean>>;
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({
  open,
  setOpen,
  openStake,
  setOpenStake,
  openNav,
  setOpenNav,
}: Props) => {
  // const [openWallets, setOpenWallets] = useState(false);

  const { open: openModal } = useWeb3Modal();
  const { address } = useAccount();

  const updateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  };

  return (
    <main className="w-full bg-[#c6c6c6]">
      <main className="">
        <section className="flex flex-row items-center justify-between !w-full p-2">
          <aside className="flex items-center gap-2">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="font-bold flex items-center gap-2 text-lg p-3 !extra-button"
            >
              <Image
                src="/bone-icon.png"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="size-7"
              />
              <p>Start</p>
            </button>
            <aside className="flex items-center gap-2">
              {!address ? (
                <button
                  className="!text-black text-lg p-3"
                  onClick={() => openModal()}
                >
                  {/* <w3m-button /> */}
                  Connect Wallet
                </button>
              ) : null}
              <Account />
              {/* <WalletModal open={openWallets} setOpen={setOpenWallets} /> */}
            </aside>
            {open ? (
              <button
                onClick={() => setOpen(!open)}
                className="text-lg p-3 flex gap-2 items-center"
              >
                <Image src={"/raffle-icon.png"} alt="" height={20} width={20} />
                <p>Raffle</p>
              </button>
            ) : null}
            {openStake ? (
              <button
                onClick={() => setOpenStake(!openStake)}
                className="text-lg p-3 flex gap-2 items-center"
              >
                <Image src={"/stake-icon.png"} alt="" height={20} width={20} />
                <p>Stake</p>
              </button>
            ) : null}
          </aside>
          {/* <Button className=""> */}
          <aside className="sunken-panel text-lg bg-[#c6c6c6] p-2">
            {updateTime()}
          </aside>
        </section>
      </main>
    </main>
  );
};

export default Navbar;
