import { Rocket, Gamepad2, Coins } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-emerald-500/10" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
              <Coins className="h-3.5 w-3.5 text-amber-500" />
              Play. Earn. Own.
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Play-to-Earn Minecraft
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600">
                powered by crypto rewards
              </span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Mine, build, and battle on a custom server that pays you tokens for your in-game achievements. Fair economy, on-chain rewards, and real ownership of your progress.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 text-white px-5 py-3 font-semibold shadow hover:bg-violet-700 transition"
              >
                <Gamepad2 className="h-5 w-5" /> Join the Server
              </a>
              <a
                href="#token"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold ring-1 ring-gray-200 hover:ring-gray-300 transition"
              >
                <Rocket className="h-5 w-5 text-violet-600" /> View Tokenomics
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Java + Bedrock support • Anti-cheat enabled • Gas fees covered for payouts
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 p-6">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-violet-600 via-blue-600 to-emerald-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <Gamepad2 className="mx-auto h-12 w-12 opacity-90" />
                  <p className="mt-3 font-medium opacity-90">Season 1: Skyblock Economy</p>
                  <p className="text-sm opacity-80">Complete quests • Sell resources • Earn tokens</p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <dt className="text-xs text-gray-500">Active Players</dt>
                  <dd className="font-semibold text-gray-900">1,200+</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Rewards Paid</dt>
                  <dd className="font-semibold text-gray-900">2.5M $BLOCK</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Avg Payout</dt>
                  <dd className="font-semibold text-gray-900">~$8.40/d</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
