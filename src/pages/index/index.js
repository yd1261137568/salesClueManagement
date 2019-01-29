import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TopBar from '../../components/topBar/index'
import GraphicDisplay from '../../components/graphicDisplay/index'
import './index.less'

export default class Index extends Component {
  // constructor(props) {
  //   super(props)
  //   this.testEven = this.testEven.bind(this)
  // }
  config = {
    navigationBarTitleText: '营销工作台'
  }

  state = {
    salesClues: {
      mustCount: 90,
      needCount: 7,
      todayCount: 0,
      preCollection: 0,
      collection: 0,
      postCollection: 3
    }
  }

  getDataObj (index) {
    if (index=='salesLeads') {
      return{
        title: '销售线索',
        oneIndex: 2,
        oneContent: '必跟进',
        oneNum: this.state.salesClues.mustCount,
        oneStyle: 'green',
        twoIndex: 1,
        twoContent: '需跟进',
        twoNum: this.state.salesClues.needCount,
        twoStyle: 'blue',
        threeIndex: 9,
        threeContent: '今日已跟进',
        threeNum: this.state.salesClues.todayCount,
        threeStyle: 'yellow'
      }
    } else if (index=='maintenanceEnterprise') {
      return{
        title: '维修企业管理',
        oneIndex: 3,
        oneContent: '待采集',
        oneNum: this.state.salesClues.preCollection,
        oneStyle: 'lightBlue',
        twoIndex: 2,
        twoContent: '采集中',
        twoNum: this.state.salesClues.collection,
        twoStyle: 'yellow',
        threeIndex: 1,
        threeContent: '已采集',
        threeNum: this.state.salesClues.postCollection,
        threeStyle: 'red'
      }
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <TopBar title='待办事项' back='false' search='false'></TopBar>
        <GraphicDisplay dataObj={this.getDataObj('salesLeads')}></GraphicDisplay>
        <GraphicDisplay dataObj={this.getDataObj('maintenanceEnterprise')}></GraphicDisplay>
      </View>
    )
  }
}

