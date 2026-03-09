export default function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.22),transparent_30%),linear-gradient(160deg,#111827_0%,#172033_55%,#0f172a_100%)] px-6 py-10 text-stone-100">
      <section className="w-full max-w-2xl rounded-[28px] border border-white/12 bg-slate-950/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.38)] backdrop-blur-xl sm:p-10">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-amber-400">
          Tutorial tecnico
        </p>
        <h1 className="text-4xl leading-none font-semibold sm:text-5xl">
          Consulta a Gemini
        </h1>

        <label
          className="mt-7 flex flex-col gap-3 justify-center"
          htmlFor="barcelona-time"
        >
          <span className="text-sm font-semibold text-white/80">Pregunta</span>

          <div className="flex flex-row justify-between items-center gap-4">
            <input
              id="barcelona-time"
              className="w-full rounded-[18px] border border-white/15 bg-white/6 px-5 py-4 text-base text-white outline-none transition duration-150 placeholder:text-white/40 hover:bg-white/8 focus:-translate-y-px focus:border-amber-300/75 focus:bg-white/10 focus:ring-4 focus:ring-amber-300/20"
              type="text"
              placeholder="Consulta el tiempo en Barcelona..."
            />
            <button className=" rounded-full bg-amber-400 px-4 py-2 cursor-pointer text-black font-bold">
              Enviar
            </button>
          </div>
        </label>
      </section>
    </main>
  );
}
