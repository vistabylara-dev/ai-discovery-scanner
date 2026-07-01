export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">

        <h1 className="text-5xl font-bold mb-6">
          AI Discovery Scanner
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Analyze any website for AI Discovery, GEO, AEO,
          structured data, semantic architecture, and technical readiness.
        </p>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">

          <label className="block text-sm mb-3">
            Website URL
          </label>

          <input
            className="w-full rounded-xl bg-neutral-950 border border-neutral-700 px-5 py-4 text-lg outline-none"
            placeholder="https://example.com"
          />

          <button
            className="mt-6 w-full rounded-xl bg-white text-black font-semibold py-4 hover:bg-gray-200 transition"
          >
            Scan Website
          </button>

        </div>

      </div>
    </main>
  );
}
