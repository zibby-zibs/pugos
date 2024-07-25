"use client";

import Image from "next/image";
import React from "react";
import { BiX } from "react-icons/bi";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Rafflepage = ({ open, setOpen }: Props) => {
  return (
    <main
      className={`${
        open
          ? "fixed top-0 left-0 inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm"
          : "hidden"
      }`}
    >
      <div
        className={`min-h-screen animate-in duration-300 max-h-svh overflow-hidden relative items-center justify-center w-full lg:w-[70%] ${
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
        <main className="window relative z-10 w-full lg:w-[70%] !text-sm">
          <section className="title-bar flex items-center justify-between">
            <div className="title-bar-text flex items-center gap-2">
              <Image src={"/raffle-icon.png"} alt="" height={20} width={20} />
              <p>Raffle</p>
            </div>

            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" onClick={() => setOpen(false)} />
            </div>
          </section>
          <section className="flex">
            <aside className="hidden md:block w-[40%] sunken-panel shrink-0">
              <Image
                src={"/nft-pixel.png"}
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="object-cover h-full w-full"
              />
            </aside>
            <aside className="w-full">
              <div className=" w-full raised-body !p-4">
                <section className="flex justify-between items-end">
                  <div className="space-y-2">
                    <p className=" font-semibold">Buy Tickets</p>
                    <p>1 ticket = 0.00002ETH</p>
                    <div>
                      <button className="!border-4 !border-blue-700">5</button>
                      <button className="!border-4 !border-blue-700">10</button>
                      {/* <button className="!border-4 !border-blue-700">20</button>
                      <button className="!border-4 !border-blue-700">50</button> */}
                    </div>
                  </div>
                  <div className="">
                    <input
                      placeholder="Enter amount"
                      type="number"
                      className="w-full !border-[4px]"
                    />
                    <div className="flex items-center gap-2 justify-center mt-3">
                      <button>Buy</button>
                    </div>
                  </div>
                </section>
              </div>

              <div className=" window-body bg-[#c6c6c6]  sunken-panel !p-4  font-semibold">
                <p className="">Time to next game</p>
                <p className="flex justify-end">0.0000</p>
              </div>
              <div className="window-body ">
                <article className="flex items-center gap-5">
                  <p className="text-sm">Multiplier</p>
                  <input type="checkbox" />
                </article>
                <input
                  placeholder="Enter amount"
                  className="rounded-tl-lg rounded-br-lg !w-[150px] "
                  type="number"
                />
              </div>
              <div className="status-bar sunken-panel bg-[#c6c6c6]  window-body ">
                <div className="p-2 px-8 status-bar-field font-semibold">
                  <p className="text-xl">Rewards</p>
                  <div className="mt-2 flex gap-2 flex-wrap justify-between">
                    <div className="w-fit">
                      <Image
                        src={"/nft-pixel.png"}
                        alt=""
                        height={40}
                        width={40}
                        sizes="100vw"
                        className="object-contain rounded-full"
                      />
                      <p className="text-center">0.x</p>
                    </div>
                    <div className="w-fit">
                      <Image
                        src={"/nft-pixel.png"}
                        alt=""
                        height={40}
                        width={40}
                        sizes="100vw"
                        className="object-contain rounded-full"
                      />
                      <p className="text-center">0.x</p>
                    </div>
                    <div className="w-fit">
                      <Image
                        src={"/nft-pixel.png"}
                        alt=""
                        height={40}
                        width={40}
                        sizes="100vw"
                        className="object-contain rounded-full"
                      />
                      <p className="text-center">0.x</p>
                    </div>
                    <div className="w-fit">
                      <Image
                        src={"/nft-pixel.png"}
                        alt=""
                        height={40}
                        width={40}
                        sizes="100vw"
                        className="object-contain rounded-full"
                      />
                      <p className="text-center">0.x</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </section>
          <div className="!flex mt-5">
            <menu role="tablist">
              <li
                role="tab"
                aria-selected="true"
                className="p-2 px-8  text-gray-900 font-semibold"
              >
                History
              </li>
            </menu>
          </div>
          <div className="!w-full sunken-panel " role="tabpanel">
            <table className="bg-[#c6c6c6] interactive w-full">
              <thead>
                <tr>
                  <th>ROUND</th>
                  <th>BREAK</th>
                  <th>PLAY/TIME</th>
                  <th>TOTAL PLAY</th>
                  <th>TOTAL WON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

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

export default Rafflepage;
