import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SEO from './components/SEO'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <main>
        <Hero />
        <SEO />
        {/* Placeholder sections to reflect architecture: services teaser, testimonials, contact */}
        <section id="services" className="bg-white text-[#36454F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-serif text-[#4A148C] font-semibold text-center">Core Love Work Services</h2>
            <p className="mt-3 text-center text-[#36454F]/80 max-w-3xl mx-auto">Every case is unique. I offer compassionate guidance and tailored work such as reconciliation rituals, commitment alignment, and healing for communication.</p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Bring Back Lost Lover', slug: 'bring-back-lost-lover-spell' },
                { title: 'Get Your Ex Back', slug: 'get-your-ex-back-spell' },
                { title: 'Binding Love Spell', slug: 'binding-love-spell' },
                { title: 'Stop Divorce Spell', slug: 'stop-divorce-spell' },
              ].map((s) => (
                <a key={s.slug} href={`/services/${s.slug}`} className="group rounded-xl border border-[#4A148C]/10 bg-[#FAF9F6] p-5 hover:shadow-md transition">
                  <div className="text-[#D4AF37] text-sm tracking-wider">Service</div>
                  <div className="mt-1 font-semibold text-[#4A148C] group-hover:underline">{s.title}</div>
                  <div className="mt-2 text-sm text-[#36454F]/80">Respectful, ethical, and grounded in traditional methods.</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6] text-[#36454F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-serif text-[#4A148C] font-semibold text-center">Words from Clients</h2>
            <Testimonials />
          </div>
        </section>

        <section className="bg-white text-[#36454F]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-serif text-[#4A148C] font-semibold">Ready to talk?</h2>
            <p className="mt-3">Tell me your story. I will listen without judgement and guide you with honesty.</p>
            <a href="/contact" className="mt-6 inline-block rounded-full bg-[#4A148C] text-[#FAF9F6] px-6 py-3 font-semibold">Begin a Free Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Testimonials() {
  const [items, setItems] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/testimonials?featured=true`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoaded(true)
      }
    }
    load()
  }, [])

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {(loaded && items.length === 0) && (
        <div className="col-span-full text-center text-sm text-[#36454F]/70">Testimonials will appear here.</div>
      )}
      {items.map((t, i) => (
        <div key={i} className="rounded-xl border border-[#4A148C]/10 bg-white p-5">
          <div className="text-[#2D5016] text-xs">Verified Client</div>
          <div className="mt-2 font-semibold text-[#4A148C]">{t.name}{t.location ? ` • ${t.location}` : ''}</div>
          <p className="mt-2 text-sm text-[#36454F]/90">“{t.message}”</p>
        </div>
      ))}
    </div>
  )
}

export default App
