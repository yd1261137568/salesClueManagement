import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Image } from '@tarojs/components'

import iconBack from '../../image/icon_back.png'

import './index.less'

export default class topBar extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='topBar'>
        <View className='topOption'>
            <Image className={this.props.back?'hidden':null} src={iconBack}/>
        </View>
        <View className='topOption'>
            <Text className='title'>{this.props.title}</Text>
        </View>
        <View className='topOption'>
            <Icon className={['search',this.props.search?'hidden':null].join(' ')} size='20' type='search' />
        </View>
      </View>
    )
  }
}

