import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import audited0 from '../../image/audited0.png'
import audited1 from '../../image/audited1.png'
import audited2 from '../../image/audited2.png'
import audited3 from '../../image/audited3.png'
import './index.less'

export default class repairItem extends Component {

  state = {
      keyMark: 0
  }

  componentWillMount () {
    //0否1是
    const keyMark = this.props.item.keyMark
    this.setState({
        keyMark: keyMark
    })
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  makePhoneCall (e) {
    e.stopPropagation()
    wx.makePhoneCall({
        phoneNumber: this.props.item.repairPhone
    })
  }
  
  jump () {
    Taro.navigateTo({
      url: '/pages/companyManagement/details/index?originalId=' + this.props.item.originalId
    })
  }

  keyMarkEvent (keyMark,e) {
    e.stopPropagation()
    var index = 0
    if(keyMark==0){
        index = 1
    }
    this.setState({
        keyMark: index
    })
  }

  render () {
    let labelStatus = this.props.item.labelStatus;
    let audited = null;
    if (labelStatus==0) {
        audited = <Image className='audited' src={audited3}></Image>
    } else if (labelStatus==1) {
        audited = <Image className='audited' src={audited2}></Image>
    } else if (labelStatus==2) {
        audited = <Image className='audited' src={audited1}></Image>
    } else if (labelStatus==3) {
        audited = <Image className='audited' src={audited0}></Image>
    }
    return <View className="listItem" onClick={this.jump}>
        <View className="top">
          <View className="left">
            <Text>【{this.props.item.repairType}】</Text>
            <Text>{this.props.item.repairFactoryName}</Text>
          </View>
          <View className="right" onClick={this.keyMarkEvent.bind(this, this.state.keyMark)}>
            {this.state.keyMark == 0 ? <AtIcon value="star" size="26" color="#ccc" /> : <AtIcon value="star-2" size="26" color="#feb405" />}
          </View>
        </View>
        <View className="middle">
          <View className="item">
            <AtIcon prefixClass="iconfont" value="phone" size="16" />
            <Text onClick={this.makePhoneCall}>
              {this.props.item.repairPhone}
            </Text>
          </View>
          <View className={["item", this.props.item.agreementFlag == 1 ? "activeR" : "activeO"].join(" ")}>
            <View>
              {this.props.item.agreementFlag == 1
                ? "已签订电子合同"
                : "未签订电子合同"}
            </View>
            <Text>
              {this.props.item.labelStatus == 0
                ? this.props.item.remark
                : null}
            </Text>
          </View>
        </View>
        {audited}
      </View>;
  }
}

