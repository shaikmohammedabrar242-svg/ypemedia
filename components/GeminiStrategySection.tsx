
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Loader2, Send } from 'lucide-react';

const GeminiStrategySection: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<any>(null);

  const generateStrategy = async () => {
    if (!industry.trim()) return;
    setLoading(true);
    setStrategy(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide a high-converting digital growth strategy for a business in the ${industry} industry. Focus on web design improvements and cold email outreach strategy.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING },
              webDesignTips: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              coldEmailStrategy: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              estimatedImpact: { type: Type.STRING }
            },
            required: ["headline", "webDesignTips", "coldEmailStrategy", "estimatedImpact"]
          }
        }
      });

      const data = JSON.parse(response.text.trim());
      setStrategy(data);
    } catch (error) {
      console.error("AI Strategy failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-blue-900 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-800 text-blue-200 px-4 py-1.5 rounded-full mb-4 text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Insights</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get a Free AI Growth Strategy</h2>
          <p className="mt-4 text-blue-200">Tell us your industry, and our custom Gemini AI will map out a growth plan.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g. Real Estate, Dentistry, E-commerce..."
              className="flex-grow bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button 
              onClick={generateStrategy}
              disabled={loading || !industry}
              className="bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center transition"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Send className="h-5 w-5 mr-2" /> Analyze Industry</>}
            </button>
          </div>

          {strategy && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
                {strategy.headline}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">Website Conversion Fixes</h4>
                  <ul className="space-y-3">
                    {strategy.webDesignTips.map((tip: string, i: number) => (
                      <li key={i} className="text-gray-200 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">Outreach Roadmap</h4>
                  <ul className="space-y-3">
                    {strategy.coldEmailStrategy.map((tip: string, i: number) => (
                      <li key={i} className="text-gray-200 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <p className="text-blue-200 font-medium">Potential Impact: <span className="text-white font-bold">{strategy.estimatedImpact}</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default GeminiStrategySection;
