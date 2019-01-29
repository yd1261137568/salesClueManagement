import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import TopBar from '../../components/topBar/index'
import RepairItem from '../../components/repairItem/index'
import loading from '../../image/loading.gif'
import './index.less'

export default class companyManagement extends Component {

  config = {
    navigationBarTitleText: '维修企业管理'
  }

  state = {
    labelStatus: '',
    pageNo: 1,
    pageSize: 10,
    list: [
      {
        "repairId":"12",
        "repairFactoryName":"fsfs",
        "repairType":"b",
        "repairPhone":"158555588882",
        "keyMark":"1",
        "agreementFlag":"1",
        "status":"1",
        "labelStatus": 0,
        "remark":"158555588882"
      },
      {
        "repairId":"12",
        "repairFactoryName":"wwww",
        "repairType":"v",
        "repairPhone":"138555588882",
        "keyMark":"0",
        "agreementFlag":"0",
        "status":"1",
        "labelStatus": 1,
        "remark":"158555588882"
      }
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    setTimeout(function(){
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    },2000)
  }

  onScrolltolower () {

  }

  onScroll (e) {
    if(e.currentTarget.deltaY < -20 && e.currentTarget.scrollTop < -30){
      Taro.startPullDownRefresh()
      wx.showNavigationBarLoading()
    }
  }

  render () {
    return (
      <View className='index'>
        <TopBar title='维修企业列表' back='false' search='false'></TopBar>
        <ScrollView className='listContent'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='20'
          upperThreshold='20'
          onScrollToLower={this.onScrolltolower}
          onScroll={this.onScroll}>
          <View className='listDiv'>
            {this.state.list.map((item)=>(
              <RepairItem item={item}></RepairItem>
            ))}
          </View>
          <View className='loading'>
            <Text>加载中</Text>
            <Image className='loadingGIF' src={loading}></Image>
          </View>
        </ScrollView>
      </View>
    )
  }
}

