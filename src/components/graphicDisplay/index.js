import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class graphicDisplay extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

//   jump (index) {
//       if (this.props.dataObj.title=='销售线索') {
//         Taro.redirectTo({
//             url: '/pages/salesClueManagement/index?originalStatus='+index
//         })
//       } else {
//         Taro.redirectTo({
//             url: '/pages/companyManagement/index'
//         })
//       }
//   }
  jump (index) {
    if (this.props.dataObj.title=='销售线索') {
      Taro.setStorageSync('salesClueManagement', index)
      Taro.switchTab({url: '/pages/salesClueManagement/index'})
    } else {
        Taro.setStorageSync('companyManagement', index)
        Taro.switchTab({url: '/pages/companyManagement/index'})
      Taro.switchTab({url: '/pages/companyManagement/index'})
    }
}

  render () {
    return (
        <View className='warpper'>
            <View className='content'>
                <View className='top'>
                    <Text>{this.props.dataObj.title}</Text>
                </View>
                <View className='bottom'>
                    <View className={['option',this.props.dataObj.oneStyle].join(' ')} onClick={this.jump.bind(this,this.props.dataObj.oneIndex)}>
                        <Text>{this.props.dataObj.oneNum}</Text>
                        <Text>{this.props.dataObj.oneContent}</Text>
                    </View>
                    <View className={['option',this.props.dataObj.twoStyle].join(' ')} onClick={this.jump.bind(this,this.props.dataObj.twoIndex)}>
                        <Text>{this.props.dataObj.twoNum}</Text>
                        <Text>{this.props.dataObj.twoContent}</Text>
                    </View>
                    <View className={['option',this.props.dataObj.threeStyle].join(' ')} onClick={this.jump.bind(this,this.props.dataObj.threeIndex)}>
                        <Text>{this.props.dataObj.threeNum}</Text>
                        <Text>{this.props.dataObj.threeContent}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
  }
}

