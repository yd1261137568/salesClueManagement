import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Image, Icon } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import SalesItem from '../../components/salesItem/index'
import loading from '../../image/loading.gif'
import './index.less'

export default class salesClueManagement extends Component {

  config = {
    navigationBarTitleText: '销售线索管理',
    "enablePullDownRefresh": true,
    onReachBottomDistance: 50

  }

  state = {
    searchBar: false,
    carNo: '',
    optionData:{
      mustCount: 90,
      needCount: 7,
      todayCount: 0,
      preCollection: 0,
      collection: 0,
      postCollection: 0
    },
    originalStatus: 2, // 1-需跟进,2-必跟进,3-无需跟进,9-已跟进
    mustFollow: [1,10],
    needFollow: [1,10],
    noNeedFollow: [1,10],
    followOver: [1,10],
    list: [
      {
        originalId: 1,
        carNo: '测试s123456',
        brandName: '一汽奥迪',
        channelSource: 'PICC',
        certFlag: 1,
        registNo: 'LXH207888777117787289',
        deflossName: '测试员',
        deflossMobile: '13988981234',
        repairFlag: 1,
        repairFactoryName: '诚合维修企业(股份有限公司)111111111111111111111111111111',
        followStatus: 0,
        followCause: '???',
        operater: '2019-01-15',
        receiveTime: '14:13:12'
      },
      {
        originalId: 2,
        carNo: '测试s123456',
        brandName: '一汽奥迪',
        channelSource: 'PICC',
        certFlag: 2,
        registNo: 'LXH207888777117787289',
        deflossName: '测试员',
        deflossMobile: '13988980000',
        repairFlag: 0,
        repairFactoryName: '诚合维修企业(股份有限公司)',
        followStatus: 1,
        followCause: '???',
        operater: '2019-01-15',
        receiveTime: '14:13:12'
      }
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    let originalStatus = Taro.getStorageSync('salesClueManagement')
    Taro.removeStorageSync('salesClueManagement')
    this.setState({
      originalStatus: originalStatus?originalStatus:2
    })
   }

  componentDidHide () { }

  initPaging () {
    if (this.state.originalStatus==1) {
      this.setState({
        needFollow: [1,10]
      })
    } else if (this.state.originalStatus==2) {
      this.setState({
        mustFollow: [1,10]
      })
    } else if (this.state.originalStatus==3) {
      this.setState({
        noNeedFollow: [1,10]
      })
    } else {
      this.setState({
        followOver: [1,10]
      })
    }
  }

  searchIconEvent () {
    this.setState({
      searchBar: !this.state.searchBar
    })
  }

  onChange (value) {
    this.setState({
      carNo: value
    })
  }

  optionEvent (index) {
    this.setState({
      originalStatus: index
    })
    
  }
  onPullRefresh (){

  }
  startPullDownRefresh() {
    setTimeout(function(){
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    },2000)
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
        <View className='topBar'>
          <View className='topOption'></View>
          <View className='topOption'>
            <Text className='title'>销售线索列表</Text>
          </View>
          <View className='topOption'>
            <Icon className='search' size='20' type='search' onClick={this.searchIconEvent} />
          </View>
        </View>
        {this.state.searchBar&&<AtSearchBar
          value={this.state.carNo}
          onChange={this.onChange.bind(this)}
        />}
        <View className='optionBar'>
          <View className={['option',this.state.originalStatus==2?'choose':null].join(' ')} onClick={this.optionEvent.bind(this,2)}>
            <Text>必跟进</Text>
            <View className={this.state.optionData.mustCount>0?'num':'hidden'}>
              {this.state.optionData.mustCount>99?'99+':this.state.optionData.mustCount}
            </View>
          </View>
          <View className={['option',this.state.originalStatus==1?'choose':null].join(' ')} onClick={this.optionEvent.bind(this,1)}>
            <Text>需跟进</Text>
            <View className={this.state.optionData.needCount>0?'num':'hidden'}>
              {this.state.optionData.needCount>99?'99+':this.state.optionData.needCount}
            </View>
          </View>
          <View className={['option',this.state.originalStatus==3?'choose':null].join(' ')} onClick={this.optionEvent.bind(this,3)}>
            <Text>无需跟进</Text>
          </View>
          <View className={['option',this.state.originalStatus==9?'choose':null].join(' ')} onClick={this.optionEvent.bind(this,9)}>
            <Text>跟进完成</Text>
          </View>
        </View>
        <ScrollView className='listContent'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='20'
          upperThreshold='20'
          onScrollToLower={this.onScrolltolower}
          onScroll={this.onScroll}>
          <View className={['listDiv', this.state.originalStatus==2?null:'hidden'].join(' ')}>
            {this.state.list.map((item)=>(
              <SalesItem item={item}></SalesItem>
            ))}
          </View>
          <View className={['listDiv', this.state.originalStatus==1?null:'hidden'].join(' ')}>B{this.state.offsetTop}</View>
          <View className={['listDiv', this.state.originalStatus==3?null:'hidden'].join(' ')}>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
            <View>111</View>
          </View>
          <View className={['listDiv', this.state.originalStatus==9?null:'hidden'].join(' ')}>D{this.state.scroll}</View>
          <View className='loading'>
            <Text>加载中</Text>
            <Image className='loadingGIF' src={loading}></Image>
          </View>
        </ScrollView>
      </View>
    )
  }
}

