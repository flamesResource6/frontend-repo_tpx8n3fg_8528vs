import { ShieldCheck, Pickaxe, Swords, Gift } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Pickaxe className="h-5 w-5 text-violet-600" />,
      title: "Play",
      desc: "Complete quests, gather resources, conquer dungeons, and win events.",
    },
    {
      icon: <Gift className="h-5 w-5 text-emerald-600" />,
      title: "Earn",
      desc: "Get $BLOCK token rewards for milestones verified by our anti-cheat.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
      title: "Verify",
      desc: "Actions are logged on-chain; leaderboards and payouts stay fair.",
    },
    {
      icon: <Swords className="h-5 w-5 text-amber-600" />,
      title: "Trade",
      desc: "Swap tokens, buy ranks, and trade unique in-game items you truly own.",
    },
  ];

  return (
    <section id="how" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How it works</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">No grinding without rewards. Every meaningful action translates to a provable on-chain score and periodic token payouts.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl bg-white ring-1 ring-gray-200 p-5 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-200 p-2">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
