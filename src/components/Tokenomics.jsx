import { Coins, Wallet, BarChart3 } from "lucide-react";

function Tokenomics() {
  const items = [
    { title: "Play Rewards", value: "60%", desc: "Distributed to players via quests, events, and milestones." },
    { title: "Staking + Liquidity", value: "20%", desc: "Supports stability and long-term growth of the token." },
    { title: "Treasury + Dev", value: "15%", desc: "Ongoing development, servers, audits, and grants." },
    { title: "Airdrops", value: "5%", desc: "Seasonal events and community giveaways." },
  ];

  return (
    <section id="token" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tokenomics</h2>
        </div>
        <p className="mt-2 text-gray-600 max-w-2xl">$BLOCK is the in-game token paid out for verified gameplay. Claim to your wallet with a single click—gas is subsidized for weekly payouts.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Allocation</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {items.map((x) => (
                <li key={x.title} className="rounded-lg bg-gray-50 ring-1 ring-gray-200 p-4">
                  <div className="text-2xl font-extrabold text-gray-900">{x.value}</div>
                  <div className="mt-1 text-sm font-medium text-gray-700">{x.title}</div>
                  <p className="text-xs text-gray-600 mt-1">{x.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Payout Model</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-violet-600" /> Difficulty-adjusted rewards based on action rarity.</p>
              <p className="flex items-center gap-2"><Wallet className="h-4 w-4 text-emerald-600" /> Weekly claim window. Anti-bot checks before distribution.</p>
              <p className="flex items-center gap-2"><Coins className="h-4 w-4 text-amber-600" /> Hard cap and halving schedule to maintain long-term value.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
