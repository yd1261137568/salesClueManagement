import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

import './icon/icon.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/companyManagement/details/index',
      'pages/index/index',
      'pages/companyManagement/details/visit/index',
      'pages/salesClueManagement/index',
      'pages/salesClueManagement/details/index',
      'pages/salesClueManagement/details/followResults/index',
      'pages/salesClueManagement/details/followPriority/index',
      'pages/companyManagement/index',
      'pages/companyManagement/details/map/index',
      'pages/companyManagement/details/map/area/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'light',
      backgroundColor: '#000',
      enablePullDownRefresh: true
    },
    tabBar: {
      "color": "#000000",
      "selectedColor": "#59ba53",
      "backgroundColor": "#fff",
      "list": [
        {
          "pagePath": "pages/salesClueManagement/index",
          "text": "销售线索管理"
        },
        {
          "pagePath": "pages/companyManagement/index",
          "text": "维修企业管理"
        },
        {
          "pagePath": "pages/index/index",
          "text": "营销工作台"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
