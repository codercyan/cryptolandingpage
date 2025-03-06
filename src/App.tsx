import React, { useEffect, useState } from 'react';
import { Rocket, TrendingUp, Shield, Users, ArrowRight, Twitter, Github, Disc as Discord, Menu, X, ChevronUp, Globe, Award, Clock, Lock, Zap, BarChart as ChartBar } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-12-31T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      items: [
        'Smart Contract Development',
        'Security Audit',
        'Community Building',
        'Website Launch'
      ],
      status: 'completed'
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      items: [
        'Exchange Listings',
        'Marketing Campaign',
        'Partnership Development',
        'Staking Platform'
      ],
      status: 'in-progress'
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      items: [
        'NFT Integration',
        'Mobile App Development',
        'Cross-chain Bridge',
        'DAO Governance'
      ],
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1437] text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B1437]/50 via-[#132454]/30 to-[#1D3A8F]/20 pointer-events-none" />

      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#132454]/30 to-transparent" />
        <nav className="relative container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Rocket className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold gradient-text">token</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
              <a href="#tokenomics" className="hover:text-indigo-400 transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-indigo-400 transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-indigo-400 transition-colors">Community</a>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Buy Now
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed inset-0 bg-[#0B1437]/95 z-40 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#features" className="text-2xl hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#tokenomics" className="text-2xl hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
                <a href="#roadmap" className="text-2xl hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
                <a href="#community" className="text-2xl hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Next Generation <span className="gradient-text">Meme Token</span> 🚀
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Join the revolution in decentralized finance with Moonshot. 
                Built for the community, secured by innovation, and ready for astronomical growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                  Launch App <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-indigo-400/50 hover:border-indigo-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-indigo-400/10">
                  Read Whitepaper
                </button>
              </div>
              
              {/* Countdown Timer */}
              <div className="mt-12 p-6 bg-[#132454]/50 rounded-2xl backdrop-blur-xl border border-indigo-400/20">
                <h3 className="text-lg font-semibold text-indigo-400 mb-4">Presale Ends In:</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">{countdown.days}</div>
                    <div className="text-sm text-indigo-200">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">{countdown.hours}</div>
                    <div className="text-sm text-indigo-200">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">{countdown.minutes}</div>
                    <div className="text-sm text-indigo-200">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">{countdown.seconds}</div>
                    <div className="text-sm text-indigo-200">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-purple-500/30 rounded-3xl blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" 
                  alt="Crypto illustration" 
                  className="relative rounded-3xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="stat-card text-center">
              <h3 className="text-4xl font-bold text-indigo-400 mb-2">$1.2M</h3>
              <p className="text-indigo-200">Market Cap</p>
            </div>
            <div className="stat-card text-center">
              <h3 className="text-4xl font-bold text-indigo-400 mb-2">12.5K</h3>
              <p className="text-indigo-200">Holders</p>
            </div>
            <div className="stat-card text-center">
              <h3 className="text-4xl font-bold text-indigo-400 mb-2">5.2M</h3>
              <p className="text-indigo-200">Total Supply</p>
            </div>
            <div className="stat-card text-center">
              <h3 className="text-4xl font-bold text-indigo-400 mb-2">2.1K</h3>
              <p className="text-indigo-200">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose Moonshot?</h2>
          <p className="text-xl text-indigo-200 text-center mb-16 max-w-2xl mx-auto">
            Built with security, scalability, and community in mind. Moonshot represents the future of decentralized finance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stat-card">
              <TrendingUp className="w-12 h-12 mb-6 text-indigo-400" />
              <h3 className="text-2xl font-semibold mb-4">Deflationary Model</h3>
              <p className="text-indigo-200 leading-relaxed">
                Our innovative tokenomics ensure continuous value appreciation through automatic burning mechanisms and reward distribution.
              </p>
            </div>
            <div className="stat-card">
              <Shield className="w-12 h-12 mb-6 text-indigo-400" />
              <h3 className="text-2xl font-semibold mb-4">Bulletproof Security</h3>
              <p className="text-indigo-200 leading-relaxed">
                Multi-audited smart contract with locked liquidity and renounced ownership. Your investment is protected.
              </p>
            </div>
            <div className="stat-card">
              <Users className="w-12 h-12 mb-6 text-indigo-400" />
              <h3 className="text-2xl font-semibold mb-4">Thriving Community</h3>
              <p className="text-indigo-200 leading-relaxed">
                Join thousands of believers in our mission. Regular events, rewards, and community-driven governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 relative bg-[#132454]/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-indigo-200">Available worldwide on major exchanges</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-2">Certified</h3>
              <p className="text-indigo-200">Fully audited by leading security firms</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-2">24/7 Trading</h3>
              <p className="text-indigo-200">Non-stop liquidity and trading</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-indigo-200">Compatible with all major wallets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Tokenomics</h2>
          <p className="text-xl text-indigo-200 text-center mb-16 max-w-2xl mx-auto">
            Carefully designed token distribution and tax system to ensure long-term sustainability and growth.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="stat-card">
              <h3 className="text-2xl font-semibold mb-8 text-indigo-400">Token Distribution</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Presale</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-[#132454] rounded-full overflow-hidden mr-4">
                      <div className="w-[40%] h-full bg-gradient-to-r from-indigo-400 to-purple-500" />
                    </div>
                    <span className="text-indigo-400 font-semibold">40%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Liquidity</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-[#132454] rounded-full overflow-hidden mr-4">
                      <div className="w-[30%] h-full bg-gradient-to-r from-indigo-400 to-purple-500" />
                    </div>
                    <span className="text-indigo-400 font-semibold">30%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Team</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-[#132454] rounded-full overflow-hidden mr-4">
                      <div className="w-[10%] h-full bg-gradient-to-r from-indigo-400 to-purple-500" />
                    </div>
                    <span className="text-indigo-400 font-semibold">10%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Marketing</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-[#132454] rounded-full overflow-hidden mr-4">
                      <div className="w-[20%] h-full bg-gradient-to-r from-indigo-400 to-purple-500" />
                    </div>
                    <span className="text-indigo-400 font-semibold">20%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <h3 className="text-2xl font-semibold mb-8 text-indigo-400">Transaction Tax</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-indigo-100">Burn</span>
                    <p className="text-sm text-indigo-300">Permanent token removal</p>
                  </div>
                  <span className="text-indigo-400 font-semibold">2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-indigo-100">Liquidity</span>
                    <p className="text-sm text-indigo-300">Automatic pool growth</p>
                  </div>
                  <span className="text-indigo-400 font-semibold">3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-indigo-100">Rewards</span>
                    <p className="text-sm text-indigo-300">Holder redistribution</p>
                  </div>
                  <span className="text-indigo-400 font-semibold">3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 relative bg-[#132454]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Roadmap</h2>
          <p className="text-xl text-indigo-200 text-center mb-16 max-w-2xl mx-auto">
            Our strategic plan for continuous growth and development
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`stat-card relative ${
                item.status === 'completed' ? 'border-green-400/40' :
                item.status === 'in-progress' ? 'border-indigo-400/40' :
                'border-blue-400/40'
              }`}>
                <div className="absolute -top-3 left-4 bg-[#0B1437] px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-indigo-400">{item.phase}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6 mt-4">{item.title}</h3>
                <ul className="space-y-4">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-indigo-200">
                      <ChartBar className="w-4 h-4 mr-2 text-indigo-400" />
                      {listItem}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    item.status === 'completed' ? 'bg-green-400' :
                    item.status === 'in-progress' ? 'bg-indigo-400' :
                    'bg-blue-400'
                  }`} />
                  <span className="text-sm capitalize text-indigo-200">
                    {item.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
            Be part of something bigger. Join our growing community and stay updated with the latest developments.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="stat-card p-6 inline-block hover:scale-110 transition-transform">
              <Twitter className="w-8 h-8 text-indigo-400" />
            </a>
            <a href="#" className="stat-card p-6 inline-block hover:scale-110 transition-transform">
              <Discord className="w-8 h-8 text-indigo-400" />
            </a>
            <a href="#" className="stat-card p-6 inline-block hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-indigo-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative bg-[#132454]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-indigo-200 mb-8">
              Subscribe to our newsletter for the latest updates, announcements, and exclusive opportunities.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-[#0B1437] border border-indigo-400/20 focus:border-indigo-400 focus:outline-none text-white"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#132454] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="w-6 h-6 text-indigo-400" />
                <span className="font-bold text-indigo-400">MOONSHOT</span>
              </div>
              <p className="text-indigo-200 text-sm">
                The next generation of decentralized finance, powered by community and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#features" className="hover:text-indigo-400">Features</a></li>
                <li><a href="#tokenomics" className="hover:text-indigo-400">Tokenomics</a></li>
                <li><a href="#roadmap" className="hover:text-indigo-400">Roadmap</a></li>
                <li><a href="#community" className="hover:text-indigo-400">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-indigo-400">Whitepaper</a></li>
                <li><a href="#" className="hover:text-indigo-400">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-400">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#132454] pt-8 text-center text-indigo-200 text-sm">
            © 2025 Moonshot. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;