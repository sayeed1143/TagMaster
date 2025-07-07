import { useState } from "react";
import Logo from "@/components/logo";
import SEOHead from "@/components/seo-head";
import PlatformSelector from "@/components/platform-selector";
import TagGenerator from "@/components/tag-generator";
import FeaturesShowcase from "@/components/features-showcase";
import GoogleAdsPlaceholder from "@/components/google-ads-placeholder";
import RecentGenerations from "@/components/recent-generations";
import AnalyticsDashboard from "@/components/analytics-dashboard";
import TipsAndTricks from "@/components/tips-and-tricks";
import SearchFunctionality from "@/components/search-functionality";
import YouTubeContentGenerator from "@/components/youtube-content-generator";
import ComingSoon from "@/components/coming-soon";
import Footer from "@/components/footer";
import { PlatformType } from "@shared/schema";

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType | null>(null);
  const [activeTab, setActiveTab] = useState<'generator' | 'analytics' | 'history' | 'search' | 'premium' | 'coming-soon' | 'tips'>('generator');

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-pink-500/5"></div>
      
      {/* Header */}
      <header className="relative z-10 glass-morphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Ko-fi Support Button */}
            <a 
              href="https://ko-fi.com/ytseo1509" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism px-6 py-3 rounded-xl glow-button border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300"
            >
              <span className="text-white font-medium">Support TagMaster on Ko-fi ☕</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Generate Perfect
              </span>
              <br />
              <span className="text-white">Social Media Tags</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Boost your content reach with AI-powered hashtags and tags for YouTube, Instagram, and TikTok. 
              <span className="text-cyan-500 font-semibold"> SEO-optimized</span> results in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  setActiveTab('generator');
                  document.getElementById('enhanced-features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl text-white font-bold text-lg glow-button hover:animate-pulse-glow transition-all duration-300"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Generating Tags
              </button>
              <button className="glass-morphism px-8 py-4 rounded-xl text-white font-medium border border-white/20 hover:border-white/40 transition-all duration-300">
                <i className="fas fa-play mr-2"></i>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Placeholder 1 */}
      <GoogleAdsPlaceholder 
        type="banner" 
        label="SPONSORED" 
        description="Advertisement Space - Google Ads Integration"
        size="728x90 Banner Placement"
        borderColor="border-yellow-500/20"
      />



      {/* Google Ads Placeholder 2 */}
      <GoogleAdsPlaceholder 
        type="medium-rectangle" 
        label="SPONSORED CONTENT" 
        description="Advertisement Space - Google Ads Integration"
        size="Medium Rectangle 300x250"
        borderColor="border-purple-500/20"
      />

      {/* Features Section */}
      <FeaturesShowcase />

      {/* Google Ads Placeholder 3 */}
      <GoogleAdsPlaceholder 
        type="leaderboard" 
        label="ADVERTISEMENT" 
        description="Advertisement Space - Google Ads Integration"
        size="Leaderboard 728x90 Banner"
        borderColor="border-cyan-500/20"
      />

      {/* Call to Action */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-morphism-strong rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Go Viral?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who've boosted their reach with TagMaster's AI-powered tag generation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  setActiveTab('generator');
                  document.getElementById('enhanced-features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-10 py-4 rounded-xl text-white font-bold text-lg glow-button hover:animate-pulse-glow transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">
                  <i className="fas fa-rocket mr-2"></i>
                  Start Generating Now
                </span>
                <div className="absolute inset-0 shimmer-effect opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-400">100% Free to Try</p>
                <p className="text-xs text-cyan-500">No sign-up required</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-500">50K+</div>
                <div className="text-sm text-gray-400">Tags Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">1M+</div>
                <div className="text-sm text-gray-400">Views Boosted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">5K+</div>
                <div className="text-sm text-gray-400">Happy Creators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Tabs */}
      <section id="enhanced-features" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">
              Enhanced <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Features</span>
            </h3>
            <p className="text-xl text-gray-300">Explore analytics, history, and pro tips to maximize your reach</p>
          </div>

          {/* Tab Navigation */}
          <div className="glass-morphism rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex flex-wrap border-b border-white/10">
              {[
                { id: 'generator', label: 'Tag Generator', icon: 'fas fa-magic' },
                { id: 'analytics', label: 'Analytics', icon: 'fas fa-chart-bar' },
                { id: 'history', label: 'History', icon: 'fas fa-history' },
                { id: 'search', label: 'Search', icon: 'fas fa-search' },
                { id: 'premium', label: 'Premium', icon: 'fas fa-crown', badge: 'NEW' },
                { id: 'coming-soon', label: 'Coming Soon', icon: 'fas fa-rocket' },
                { id: 'tips', label: 'Pro Tips', icon: 'fas fa-lightbulb' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-6 py-4 text-center transition-all duration-300 relative ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-b-2 border-cyan-500' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <i className={`${tab.icon} mr-2`}></i>
                  <span className="font-medium">{tab.label}</span>
                  {(tab as any).badge && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs px-2 py-1 rounded-full text-black font-bold">
                      {(tab as any).badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'generator' && (
                <div className="space-y-8">
                  <PlatformSelector 
                    selectedPlatform={selectedPlatform}
                    onPlatformSelect={setSelectedPlatform}
                  />
                  <TagGenerator selectedPlatform={selectedPlatform} />
                </div>
              )}

              {activeTab === 'analytics' && <AnalyticsDashboard />}
              
              {activeTab === 'history' && <RecentGenerations />}
              
              {activeTab === 'search' && <SearchFunctionality />}
              
              {activeTab === 'premium' && <YouTubeContentGenerator />}
              
              {activeTab === 'coming-soon' && <ComingSoon />}
              
              {activeTab === 'tips' && <TipsAndTricks />}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}
