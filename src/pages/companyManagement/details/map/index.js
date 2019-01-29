import Taro, { Component } from '@tarojs/taro'
import { View, Map, CoverImage, CoverView } from '@tarojs/components'
import { AtIcon, AtSearchBar } from 'taro-ui'
import iconPos from '../../../../image/icon-pos.png'
import './index.less'

export default class map extends Component {
  constructor () {
    this.mapCtx = Taro.createMapContext('mymap')
  }

  config = {
    navigationBarTitleText: '腾讯个性化地图'
  }

  state = {
    value: '',
    markers: {}
  }
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  ToArea () {
    console.log(111)
    Taro.navigateTo({
      url: '/pages/companyManagement/details/map/area/index'
    })
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  onActionClick (value) {

  }

  mapEvent () {
      console.log(1111)

  }

  bindregionchange () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  }

  click () {
    this.mapCtx.moveToLocation()
  }

  render () {
    return (
      <View className='index'>
        <View className='top'>
          <View className='left' onClick={this.ToArea}>
            <View className='areaName'>北京市</View>
            <AtIcon value='chevron-down' size='20'></AtIcon>
          </View>
          <View className='right'>
            <AtSearchBar
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
          </View>
        </View>
        <Map onClick={this.mapEvent} id='mymap' className='mapStyle' subkey={'LSOBZ-LQWLQ-CDC55-G7U5N-W3JKF-VEFUJ'} onRegionchange={this.bindregionchange} show-location>
          <CoverView className='CView'>
            <CoverImage className='CImage' src={iconPos} onClick={this.click}></CoverImage>
          </CoverView>
        </Map>
      </View>
    )
  }
}

