function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">Nexus Energy</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              致力于为家庭提供智能、透明、可持续的绿色能源投资解决方案。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">产品服务</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">太阳能解决方案</a></li>
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">储能系统</a></li>
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">智能监控</a></li>
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">售后服务</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">公司介绍</a></li>
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">团队成员</a></li>
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">新闻动态</a></li>
              <li><a href="#" className="text-sm hover:text-[#016d35] transition-colors">合作伙伴</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#016d35] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">北京市朝阳区科技园区88号</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-[#016d35] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">400-888-8888</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-[#016d35] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">contact@nexus-energy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">
            © 2024 Nexus Energy. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-xs text-gray-600 hover:text-[#016d35] transition-colors">隐私政策</a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#016d35] transition-colors">服务条款</a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#016d35] transition-colors">Cookie设置</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
