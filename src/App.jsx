import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Tokenomics from "./components/Tokenomics";
import JoinServer from "./components/JoinServer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg">BlockMine</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#token" className="hover:text-gray-900">Tokenomics</a>
            <a href="#join" className="hover:text-gray-900">Join</a>
          </nav>
          <a href="#join" className="inline-flex items-center rounded-lg bg-gray-900 text-white px-3 py-1.5 text-sm font-semibold hover:bg-black">Play Now</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <HowItWorks />
        <Tokenomics />
        <JoinServer />
      </main>

      <footer className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} BlockMine • Play-to-Earn Minecraft</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
