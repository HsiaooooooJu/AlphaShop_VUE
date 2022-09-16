export const CheckoutConfigs = {
  productData: [
    {
      id: 1,
      name: '破壞修身牛仔褲',
      price: 2000,
      image: 'dagny-petite-jeans.png'
    },
    {
      id: 2,
      name: '刷色寬筒牛仔褲',
      price: 2500,
      image: 'block-wide-jeans.png'
    }
  ],
  steps: [
    {
      id: 1,
      title: '寄送地址',
    },
    {
      id: 2,
      title: '運送方式',
    },
    {
      id: 3,
      title: '付款資訊'
    }
  ],
  shippingMethods: [
    {
      id: 1,
      method: '標準運送',
      days: '約 3-7 個工作天',
      price: 0
    },
    {
      id: 2,
      method: 'DHL 貨運',
      days: '48 小時內送達',
      price: 500
    }
  ]
}