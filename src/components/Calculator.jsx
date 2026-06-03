import { useState } from 'react'

function Calculator() {
  const [formData, setFormData] = useState({
    houseArea: '',
    monthlyUsage: '',
    electricityPrice: '',
    systemType: 'residential'
  })
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const area = parseFloat(formData.houseArea) || 100
    const usage = parseFloat(formData.monthlyUsage) || 300
    const price = parseFloat(formData.electricityPrice) || 0.8
    const annualSavings = usage * price * 12
    const systemCost = area * 800
    const paybackYears = Math.round(systemCost / annualSavings)
    
    setResult({
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackYears,
      co2Reduction: (area * 1.5).toFixed(0)
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="calculator" className="calculator-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">智能收益测算</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            输入您的房屋信息，即刻获取专属能源投资方案与收益预测
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2">
                    房屋面积 (㎡)
                  </label>
                  <input
                    type="number"
                    name="houseArea"
                    value={formData.houseArea}
                    onChange={handleChange}
                    placeholder="请输入房屋面积"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2">
                    月均用电量 (kWh)
                  </label>
                  <input
                    type="number"
                    name="monthlyUsage"
                    value={formData.monthlyUsage}
                    onChange={handleChange}
                    placeholder="请输入月均用电量"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2">
                    电价 (元/kWh)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="electricityPrice"
                    value={formData.electricityPrice}
                    onChange={handleChange}
                    placeholder="请输入电价"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2">
                    系统类型
                  </label>
                  <select
                    name="systemType"
                    value={formData.systemType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                  >
                    <option value="residential">居民住宅</option>
                    <option value="commercial">商业办公</option>
                    <option value="industrial">工业厂房</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all"
                >
                  开始测算
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all"
                >
                  重置
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-base font-semibold text-black mb-6">测算结果</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-light text-black mb-1">¥{result.annualSavings}</div>
                    <div className="text-xs text-gray-500">年预计节省</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-light text-black mb-1">¥{result.systemCost}</div>
                    <div className="text-xs text-gray-500">系统投资</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-light text-black mb-1">{result.paybackYears}年</div>
                    <div className="text-xs text-gray-500">回本周期</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-light text-black mb-1">{result.co2Reduction}吨</div>
                    <div className="text-xs text-gray-500">年减碳量</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
