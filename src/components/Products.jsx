const products = [
  {
    id: 1,
    name: 'Premium Alpha',
    description: '为大型住宅量身打造的顶级太阳能解决方案',
    price: '¥120,000',
    originalPrice: '¥150,000',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20modern%20house%20solar%20panels%20professional%20installation&image_size=landscape_4_3',
    features: ['10kW 高效光伏系统', '25年质保', '智能监控平台', '免费安装服务', '政府补贴对接'],
    popular: false,
    buttonText: '了解详情',
    power: '10kW',
    efficiency: '98%',
    warranty: '25年'
  },
  {
    id: 2,
    name: 'Smart Eco',
    description: '最受欢迎的家庭能源解决方案，性价比之选',
    price: '¥80,000',
    originalPrice: '¥100,000',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20residential%20solar%20installation%20clean%20energy&image_size=landscape_4_3',
    features: ['6kW 高效光伏系统', '20年质保', '智能APP监控', '专业安装团队', '售后无忧'],
    popular: true,
    buttonText: '立即咨询',
    power: '6kW',
    efficiency: '95%',
    warranty: '20年'
  },
  {
    id: 3,
    name: 'Energy Freedom',
    description: '入门级绿色能源方案，轻松开启环保之旅',
    price: '¥50,000',
    originalPrice: '¥65,000',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=small%20residential%20solar%20panels%20clean%20energy%20solution&image_size=landscape_4_3',
    features: ['3kW 基础光伏系统', '15年质保', '远程监控', '标准安装服务', '灵活付款'],
    popular: false,
    buttonText: '获取报价',
    power: '3kW',
    efficiency: '92%',
    warranty: '15年'
  }
]

import { useState } from 'react'

function Products() {
  const [hoveredId, setHoveredId] = useState(2)

  return (
    <section id="products" className="products-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">全案能源方案</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            为不同规模的住宅和预算量身定制，总有一款适合您
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const isHovered = hoveredId === product.id
            return (
              <div 
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`product-card relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out border-2 ${
                  isHovered
                    ? 'border-black -translate-y-5 scale-[1.04] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]' 
                    : 'border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'
                }`}
                style={{ willChange: 'transform, box-shadow' }}
              >
                {isHovered && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-1.5 bg-black text-white text-xs font-semibold rounded-full shadow-lg">
                      最受欢迎
                    </span>
                  </div>
                )}
              
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ease-out ${
                      isHovered ? 'scale-115' : 'scale-100'
                    }`}
                  />
                </div>
              
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-semibold text-black">{product.power}</div>
                      <div className="text-xs text-gray-500">功率</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-semibold text-black">{product.efficiency}</div>
                      <div className="text-xs text-gray-500">效率</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-semibold text-black">{product.warranty}</div>
                      <div className="text-xs text-gray-500">质保</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#016d35] rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-bold text-black">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isHovered
                        ? 'bg-black text-white shadow-md'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    {product.buttonText}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products