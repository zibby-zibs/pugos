import Image from "next/image";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import {
  Button,
  Frame,
  GroupBox,
  Tab,
  TabBody,
  TableBody,
  Tabs,
  TextInput,
  Window,
  WindowHeader,
} from "react95";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Stake = ({ open, setOpen }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main
      className={`${
        open
          ? "fixed top-0 left-0 inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-[0px]"
          : "hidden"
      }`}
    >
      <div
        className={`min-h-screen animate-in duration-300 max-h-svh overflow-hidden relative items-center justify-center w-full lg:w-[70%] ${
          open ? "flex" : "hidden"
        }`}
      >
        <main className="window relative z-10 w-full lg:w-[70%] p-4">
          <section className="title-bar flex items-center justify-between">
            <div className="title-bar-text flex items-center gap-2">
              <Image src={"/stake-icon.png"} alt="" height={20} width={20} />
              <p>Stake</p>
            </div>

            <div className="title-bar-controls">
              {/* <button aria-label="Minimize" />
              <button aria-label="Maximize" /> */}
              <button onClick={() => setOpen(false)} className="bg-[#c6c6c6] ">
                <BiX className="size-6" />
              </button>
            </div>
          </section>

          <section className=" w-full !flex items-center">
            <div className="raised-body w-full h-24 !flex items-center justify-center gap-3 !border-y-blue-700 !p-2">
              <div>
                <p className="text-lg font-bold text-center">Rewards Earned</p>
                <p className="text-center">0</p>
              </div>
            </div>
            <div className="raised-body w-full h-24 !flex items-center justify-center !border-y-blue-700 !p-2">
              <div>
                <p className="text-lg font-bold">APY</p>
                <p className="text-center">22%</p>
              </div>
            </div>
            <div className="raised-body w-full h-24 !flex items-center justify-center !border-y-blue-700 !p-2">
              <div>
                <p className="text-lg font-bold">VAULT TVL</p>
                <p className="text-center">2.931Pug/ETH</p>
              </div>
            </div>
          </section>
          <div className="raised-body w-full !flex items-center justify-center !border-y-blue-700 !p-4">
            <div className="text-center w-full">
              <p className="text-lg font-bold">My total value staked($)</p>
              <p className="text-center">$119,231.23</p>
            </div>
          </div>
          <section className="raised-body w-full border-y-blue-700 !p-3">
            <div className="flex w-full justify-between">
              {/* <div>
                <p className="">View Contract</p>
                <p className="text-xl">LOVE</p>
              </div> */}
            </div>
            <div className="">
              <div className="!flex !justify-end">
                <menu role="tablist">
                  <li
                    role="tab"
                    aria-selected={activeTab === 0}
                    className="p-2 cursor-pointer"
                    onClick={() => setActiveTab(0)}
                  >
                    STAKE
                  </li>
                  <li
                    role="tab"
                    aria-selected={activeTab === 1}
                    className="p-2 cursor-pointer"
                    onClick={() => setActiveTab(1)}
                  >
                    UNSTAKE
                  </li>
                </menu>
              </div>
              <div className="!w-full raised-body bg-[#c6c6c6]">
                {activeTab === 0 && (
                  <div className=" interactive bg-[#c6c6c6] !p-2">
                    <div className="flex justify-between gap-4">
                      <aside>
                        <p className="text-base font-semibold">stake pug</p>
                      </aside>
                      <aside>
                        <div className="flex items-center gap-2">
                          <input
                            placeholder="NFT contract address"
                            className="rounded-lg"
                            type="number"
                          />
                          <button>stake</button>
                        </div>
                        {/* <button className="mt-2 w-full">Stake</button> */}
                      </aside>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className=" interactive bg-[#c6c6c6] !p-2">
                    <div className="flex justify-between gap-4">
                      <aside>
                        <p className="text-base font-semibold">unstake pug</p>
                      </aside>
                      <aside>
                        <div className="flex items-center gap-2">
                          <input
                            placeholder="Enter Amount"
                            className="rounded-lg"
                            type="number"
                          />
                          <button>unstake</button>
                        </div>
                        {/* <button className="mt-2 w-full">Stake</button> */}
                      </aside>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
};

export default Stake;
