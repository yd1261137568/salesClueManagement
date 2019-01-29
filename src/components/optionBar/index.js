import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class optionBar extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleEvent (index) {
    console.log(this.props)
    console.log(this.props.optionEvent)
    this.props.optionEvent(index);
  }

  render () {
    return (
      <View className='optionBar'>
        {
            this.props.optionData.map((item) => (
                <View className='option' onClick={this.handleEvent.bind(this,item.index)} key={item.index}>
                    {item.title}
                    <View className={item.num>0?'num':'hidden'}>
                        {item.num>99?'99+':item.num}
                    </View>
                </View>
            ))
        }
      </View>
    )
  }
}

