export default function TrustLogos() {
    const logos = ['/airbnb.svg','/getty.svg','/amazon.svg','/fiverr.svg','/wish.svg']
    return (
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {logos.map((src,i) => <img key={i} src={src} alt="" className="h-8 opacity-70" />)}
        </div>
      </section>
    )
  }
  