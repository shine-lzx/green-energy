function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20minimalist%20house%20with%20solar%20panels%20contemporary%20architecture%20clean%20lines%20professional%20photography%20sunset%20lighting&image_size=landscape_16_9"
          alt="现代住宅太阳能" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-black/5 rounded-full mb-8 border border-black/10">
            <span className="w-2 h-2 bg-[#016d35] rounded-full mr-2" />
            <span className="text-black/70 text-sm font-medium">Nexus Energy</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight mb-6">
            赋能绿色未来，
            <br />
            <span className="text-[#016d35]">开启家庭能源投资新纪元</span>
          </h1>
          
          <p className="text-base text-gray-600 mb-8 max-w-xl leading-relaxed">
            智能分析您的用电需求，为您量身定制最优能源解决方案，让投资回报看得见、摸得着。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all text-base">
              开始测算收益
            </button>
            <button className="px-8 py-4 bg-transparent text-black font-semibold rounded-lg border border-black/20 hover:bg-black/5 transition-all text-base">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
