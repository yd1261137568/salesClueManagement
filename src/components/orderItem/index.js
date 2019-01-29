import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.less'

export default class orderItem extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let status = this.props.item.jcRepairOrderVo.status.substring(0,1)
    console.log(status)
    let statusText = null
    if (status == '2') {
        statusText = '待支付'
    } else if (status == '5') {
        statusText = '待发货'
    } else if (status == '6') {
        statusText = '待确认收货'
    } else if (status == '7') {
        statusText = '已收货'
    } else if (status == '0') {
        statusText = '付款前取消'
    }

    return (
        <View className='listItem'>
            <View className='top'>
                <View className='carmsg'>
                    <AtIcon prefixClass='iconfont' value='car' size='16' color='#24ac90'></AtIcon>
                    <Text className='licenseNo'>{this.props.item.jcRepairOrderVo.licenseNo}</Text>
                    <Text className='damcarname'>{this.props.item.jcShopDamageVo.damcarname}</Text>
                </View>
                <View className='status'>
                    {statusText}
                </View>
            </View>
            <View className='content'>
                <View className='commoditymsg'>
                    <Text>{this.props.item.jcRepairOrderVo.partNum}件商品</Text>
                </View>
                <View className='purchasemsg'>
                    <View className='left'>
                        <Text className='purchaseTitle'>订单总金额</Text>
                        <Text className='purchaseMoney'>￥{this.props.item.jcRepairOrderVo.total}</Text>
                    </View>
                    <View className='right'>
                        <Text className='purchaseTime'>下单时间: {this.props.item.jcRepairOrderVo.createTime}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
  }
}

