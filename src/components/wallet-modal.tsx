"use client";

import React from "react";
import { BiX } from "react-icons/bi";
import {
  Button,
  Checkbox,
  Frame,
  TextInput,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { WalletOptions } from "./wallet-options";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const WalletModal = ({ open, setOpen }: Props) => {
  return (
    <main
      className={`${
        open
          ? "fixed top-0 left-0 inset-0 flex items-center justify-center z-50"
          : "hidden"
      }`}
    >
      <div
        className={`min-h-screen max-h-svh overflow-hidden relative items-center justify-center w-[70%] ${
          open ? "flex" : "hidden"
        }`}
      >
        {/* <Image
        src={"/pixel-game.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-screen h-svh object-cover fixed top-0 left-0"
      /> */}
        <Window className="window relative z-10 w-full lg:w-[70%]">
          <WindowHeader className="window-title flex items-center justify-between">
            <span>Raffle</span>

            <Button onClick={() => setOpen(false)}>
              <BiX />
            </Button>
          </WindowHeader>

          <Frame className="w-full mt-3 p-3">
            <WalletOptions />
          </Frame>
        </Window>

        {/* <Window className="window">
        <WindowHeader active={false} className="window-title">
          <span>not-active.exe</span>

          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>I am not active</WindowContent>
      </Window> */}
      </div>
    </main>
  );
};

export default WalletModal;
