import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const whatsappNumber = '+917385311748'
  const whatsappMessage = encodeURIComponent('Hello! Mujhe apni website banana hai. Winter offer ke baare mein batao.')
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  const faqs = [
    {
      question: 'Sirf ₹500 mein? Itna sasta kyun?',
      answer: 'Winter special offer hai! Regular price ₹2,000 hai, lekin hum chahte hain ki har business online aaye. Isliye limited time ke liye ₹500 mein quality website de rahe hain.'
    },
    {
      question: 'Next.js aur Tailwind kyun? Plain HTML nahi?',
      answer: 'Kyunki modern websites ko modern technology chahiye! Next.js super fast loading, better SEO, aur smooth performance deta hai. Tailwind se aapki website har device pe perfect dikhti hai. HTML purana technology hai - hum future-proof websites banate hain.'
    },
    {
      question: 'Free subdomain kya hota hai?',
      answer: 'Aapko apna custom domain milega - jaise yourname.siteget.in. Iska koi extra charge nahi hai! Baad mein agar chahe toh apna .com domain bhi connect kar sakte ho.'
    },
    {
      question: 'Kitne din mein website ready hogi?',
      answer: 'Usually 3-5 days mein aapki website live ho jayegi. Simple websites 2 days mein bhi ready ho jati hain. Aur haan - free setup bhi included hai!'
    },
    {
      question: 'Mobile pe bhi achhi dikhegi website?',
      answer: 'Bilkul! Har website fully responsive hoti hai. Matlab mobile, tablet, laptop - har screen pe perfect dikhegi. Ye modern Tailwind CSS ka kamal hai.'
    },
    {
      question: 'Baad mein changes karva sakta hoon?',
      answer: 'Haan! Initial setup ke baad bhi aap changes request kar sakte ho. Pricing alag se discuss karenge based on changes.'
    }
  ]

  const competitors = [
    { name: 'Local Agencies', price: '₹8,000 - ₹15,000', time: '15-30 days', tech: 'Old PHP/HTML' },
    { name: 'Freelance Market', price: '₹5,000 - ₹10,000', time: '10-20 days', tech: 'Mixed' },
    { name: 'Big Companies', price: '₹20,000+', time: '30+ days', tech: 'Various' },
    { name: 'SiteGet', price: '₹500', time: '3-5 days', tech: 'Next.js + Tailwind', highlight: true }
  ]

  const features = [
    {
      icon: 'fa-solid fa-bolt',
      title: 'Lightning Fast',
      description: 'Next.js ki power se super fast loading'
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Fully Responsive',
      description: 'Har device pe perfect display'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Secure & Modern',
      description: 'Latest tech stack, zero security risk'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Free Subdomain',
      description: 'Custom subdomain bilkul free'
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'SEO Optimized',
      description: 'Google pe top ranking ke liye ready'
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Free Setup',
      description: 'Koi hidden charges nahi'
    }
  ]

  return (
    <>
      <Head>        
        <title>SiteGet — Premium Modern Websites</title>
        <meta name="description" content="Get your modern, responsive website in just ₹500. Built with Next.js and Tailwind CSS. Winter offer - save ₹1500!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="container">
              <div className="badge" data-testid="winter-offer-badge">
                <i className="fa-solid fa-snowflake"></i>
                <span>Winter Special Offer</span>
              </div>
              
              <h1 className="hero-title" data-testid="hero-title">
                Modern Website
                <span className="gradient-text"> Sirf ₹500 </span>
                Mein
              </h1>
              
              <p className="hero-subtitle" data-testid="hero-subtitle">
                Next.js + Tailwind se bani professional website.<br />
                <span className="highlight-text">Regular ₹2,000 - Ab sirf ₹500!</span>
              </p>

              <div className="hero-features" data-testid="hero-features">
                <div className="feature-tag">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Free Subdomain</span>
                </div>
                <div className="feature-tag">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Free Setup</span>
                </div>
                <div className="feature-tag">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Fully Responsive</span>
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                data-testid="whatsapp-cta-button"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Get Your Site Now</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <p className="trust-text" data-testid="trust-text">
                <i className="fa-solid fa-clock"></i>
                3-5 days mein ready | No hidden charges
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section" data-testid="why-choose-section">
          <div className="container">
            <h2 className="section-title">Kyun Choose Karein SiteGet?</h2>
            <p className="section-subtitle">Modern technology, affordable price, fast delivery</p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                {/*<div key={index} className="feature-card" data-testid={`feature-card-${index}`}>
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>*/}

                            <div 
  key={index}
  className="feature-card flex items-start gap-4"
  data-testid={`feature-card-${index}`}
>
  <div className="feature-icon text-3xl">
    <i className={feature.icon}></i>
  </div>

  <div className="flex flex-col">
    <h3 className="font-semibold text-lg">{feature.title}</h3>
    <p className="text-sm opacity-80">{feature.description}</p>
  </div>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="section pricing-section" data-testid="pricing-comparison-section">
          <div className="container">
            <h2 className="section-title">Market Comparison</h2>
            <p className="section-subtitle">Dekho khud - kitna save kar rahe ho!</p>
            
            <div className="comparison-table">
              <div className="table-header">
                <div>Provider</div>
                <div>Price</div>
                <div>Delivery</div>
                <div>Technology</div>
              </div>
              {competitors.map((comp, index) => (
                <div 
                  key={index} 
                  className={`table-row ${comp.highlight ? 'highlight-row' : ''}`}
                  data-testid={`comparison-row-${index}`}
                >
                  <div className="provider-name">
                    {comp.name}
                    {comp.highlight && <span className="best-badge">Best Deal</span>}
                  </div>
                  <div className="price-cell">
                    <span className={comp.highlight ? 'price-highlight' : ''}>{comp.price}</span>
                    {comp.highlight && <span className="save-badge">Save ₹1,500</span>}
                  </div>
                  <div>{comp.time}</div>
                  <div className="tech-cell">
                    {comp.tech}
                    {comp.highlight && <i className="fa-solid fa-star"></i>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq-section" data-testid="faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Sab questions ke jawab yahan hain</p>
            
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openFaq === index ? 'open' : ''}`}
                  data-testid={`faq-item-${index}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    data-testid={`faq-question-${index}`}
                  >
                    <span>{faq.question}</span>
                    <i className={`fa-solid ${openFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  <div className="faq-answer" data-testid={`faq-answer-${index}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section" data-testid="final-cta-section">
          <div className="container">
            <div className="cta-box">
              <h2>Ready to Get Your Modern Website?</h2>
              <p>Winter offer sirf limited time ke liye hai. Book karein abhi!</p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-large"
                data-testid="final-whatsapp-button"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <div>
                  <div>Book now</div>
                  <div className="phone-number">+91 7385311748</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer" data-testid="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <h3>SiteGet</h3>
                <p>Modern websites, affordable prices</p>
              </div>
              <div className="footer-tech">
                <p>Built with</p>
                <div className="tech-badges">
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2024 SiteGet. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
