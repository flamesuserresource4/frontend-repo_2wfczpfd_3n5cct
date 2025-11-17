export default function Footer() {
  return (
    <footer className="bg-[#1f0937] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-[#D4AF37] font-semibold">SpellsToGetMyExBack</div>
          <p className="mt-3 text-sm text-[#FAF9F6]/80">Guidance from Baba Ali • Traditional African spiritual healer • USA nationwide</p>
        </div>
        <div>
          <div className="text-[#D4AF37] font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-[#FAF9F6]/80">
            <li><a href="/services">Services</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[#D4AF37] font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-[#FAF9F6]/80">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/disclaimer">Disclaimer & Ethics</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </div>
        <div id="consult">
          <div className="text-[#D4AF37] font-semibold">Free Consultation</div>
          <p className="mt-3 text-sm text-[#FAF9F6]/80">Share your situation privately. I respond within hours.</p>
          <a href="/contact" className="inline-block mt-4 rounded-full bg-[#D4AF37] text-[#4A148C] px-5 py-2 font-semibold">Contact</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Baba Ali. All rights reserved. Ethical practice. No false promises.</div>
    </footer>
  )
}
