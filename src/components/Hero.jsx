export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#4A148C]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4A148C] opacity-70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center text-[#FAF9F6]">
        <p className="text-sm tracking-widest uppercase text-[#D4AF37]">United States • 24/7 Guidance</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
          I help reunite separated hearts with compassion and integrity
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#FAF9F6]/90 max-w-3xl mx-auto">
          In my 30+ years as a traditional African spiritual healer, I have sat with people in their deepest sorrow—and guided them toward reconciliation, clarity, and peace.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#consult" className="rounded-full bg-[#D4AF37] text-[#4A148C] px-6 py-3 font-semibold shadow hover:shadow-md transition">Start Free Consultation</a>
          <a href="#services" className="rounded-full border border-[#D4AF37] text-[#D4AF37] px-6 py-3 font-semibold hover:bg-[#D4AF37]/10 transition">Explore Services</a>
        </div>
      </div>
    </section>
  )
}
