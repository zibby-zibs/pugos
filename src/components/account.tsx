"use client";

import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  // const {} = useBalance()
  if (!address) return null;
  return (
    <button
      className="flex gap-1 items-center p-3 sunken"
      type="reset"
      onClick={() => disconnect()}
    >
      <p className="text-lg">CA:</p>
      {address && (
        <div className="text-[17px]">
          {ensName
            ? `${ensName} (${address.slice(0, 5)}...${address.slice(-6)})`
            : `${address.slice(0, 5)}...${address.slice(-6)}`}
        </div>
      )}
      {/* <button className="text-lg p-3" }>
        Disconnect
      </button> */}
    </button>
  );
}
