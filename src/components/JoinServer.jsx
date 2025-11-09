import { Copy, Server, CheckCircle2 } from "lucide-react";
import { useState } from "react";

function JoinServer() {
  const [copied, setCopied] = useState(false);
  const ip = "play.blockmine.gg";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="join" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-violet-100 text-violet-700 p-3 ring-1 ring-violet-200">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Join the server</h3>
                <p className="text-sm text-gray-600">IP Address: <span className="font-mono font-medium">{ip}</span></p>
                <p className="text-xs text-gray-500">Java 1.20+ • Bedrock supported via proxy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-black">
                {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />} 
                {copied ? "Copied" : "Copy IP"}
              </button>
              <a href="#how" className="text-sm font-medium text-violet-700 hover:text-violet-900">Setup guide →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinServer;
