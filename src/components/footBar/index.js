import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class footBar extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  skip(index){
    Taro.redirectTo({
      url: '/pages/'+index+'/index'
    })
  }

  render () {
    return (
      <View className='footBar'>
        <View onClick={this.skip.bind(this,'salesClueManagement')} className={['footOption',this.props.index=='salesClueManagement'?'choose':null].join(' ')}>销售线索管理</View>
        <View onClick={this.skip.bind(this,'companyManagement')} className={['footOption',this.props.index=='companyManagement'?'choose':null].join(' ')}>维修企业管理</View>
        <View onClick={this.skip.bind(this,'index')} className={['footOption',this.props.index=='MarketingWorkbench'?'choose':null].join(' ')}>营销工作台</View>
      </View>
    )
  }
}

