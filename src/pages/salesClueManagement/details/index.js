import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import jia from '../../../image/jia.png'
import './index.less'

export default class details extends Component {

  config = {
    navigationBarTitleText: '销售线索详情',
    enablePullDownRefresh: false
  }

  state = {
    data: {
      "originalId": 1364852,
      "provinceCode": "140000",
      "cityCode": "140100",
      "originalStatus": "2",
      "registNo": "FASFDSAFSAFSAFASFAFASF",
      "carNo": "测C55555",
      "channelSource": "PICC",
      "receiveTime": "2018-08-27 14:42:20",
      "vin": "KKKKKKKKKKKKKKKKK",
      "brandName": "上汽大众",
      "vehkindName": "2008款 上汽大众 朗逸 三厢 2.0L 手动档 品雅版 (SVW7207CPD)",
      "insuranceName": "",
      "repairFlag":  1,
      "repairFactoryName": "第五aaa维修厂",
      "jcRepairFactoryVoList": [
          {
            "repairFactoryLinkName": "张三",
            "repairFactoryMobile": "158555588882"
          },
          {
            "repairFactoryLinkName": "李四",
            "repairFactoryMobile": "178555588888"
          }
      ],
      "deflossName": "马双",
      "deflossMobile": "185118066761",
      "damageRemark": "",
      "damageContext": "",
      "checkerName": "",
      "checkerMobile": "",
      "pictureUrlList": [
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=737493545,2593507728&fm=173&app=25&f=JPEG?w=218&h=146&s=2664DA064777399C745D89080300F093",
          "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3197663125,357838978&fm=173&app=25&f=JPEG?w=218&h=146&s=32A2DC4D24F5C677402B743F0300C058",
          "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1250318025,1959353060&fm=173&app=25&f=JPEG?w=218&h=146&s=E4C2B30DA24114E75B8001910100C082",
          "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3491781345,1849634089&fm=173&app=25&f=JPEG?w=218&h=146&s=912AEFB1C00A12EE57148305030060C7"
      ],
      "jcMobileFollowInfoVoList": [
        {
          operater: '张三',
          operateTime: '2018-11-11',
          remark: '色发射点发的说法打发手动阀手动阀手动阀爱上放大范德萨发生的啊手动阀手动阀地方啊手动阀手动阀手动阀手动阀'
        },
        {
          operater: '李四',
          operateTime: '2018-12-11',
          remark: '色发射点发的说法打发手动阀手动阀手动阀爱上放大范德萨发生的啊手动阀手动阀地方啊手动阀手动阀手动阀手动阀'
        },
        {
          operater: '王五',
          operateTime: '2019-11-11',
          remark: '色发射点发的说法打发手动阀手动阀手动阀爱上放大范德萨发生的啊手动阀手动阀地方啊手动阀手动阀手动阀手动阀'
        },
        {
          operater: '赵六',
          operateTime: '2019-11-22',
          remark: '色发射点发的说法打发手动阀手动阀手动阀爱上放大范德萨发生的啊手动阀手动阀地方啊手动阀手动阀手动阀手动阀'
        }
      ],
      "followStatus": null,
      "followCause": null,
      "remark": null
    },
    followSituationShow: false
  }

  componentWillMount () {
    console.log(this.$router.params.originalId) 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  previewImage (url) {
    Taro.previewImage({
      current: url, // 当前显示图片的http链接
      urls: this.state.data.pictureUrlList // 需要预览的图片http链接列表
    })
  }

  displaySwitch () {
    this.setState({
      followSituationShow: !this.state.followSituationShow
    })
  }

  followResults () {
    Taro.navigateTo({
      url: '/pages/salesClueManagement/details/followResults/index?originalId=testid'
    })
  }

  followPriority () {
    Taro.navigateTo({
      url: '/pages/salesClueManagement/details/followPriority/index?originalId=testid'
    })
  }

  render () {
    const originalStatus = this.state.data.originalStatus
    let status = null
    if (originalStatus==1) {
      status = <Text>需跟进</Text>
    } else if (originalStatus==2) {
      status = <Text>必跟进</Text>
    } else {
      status = <Text>无需跟进</Text>
    }
    const pictureUrlListLength = this.state.data.pictureUrlList.length
    let imgStatus = null
    if (pictureUrlListLength>0) {
      imgStatus = <Text>共{pictureUrlListLength}张</Text>
    } else {
      imgStatus = <Text>无</Text>
    }
    const jcMobileFollowInfoVoList = this.state.data.jcMobileFollowInfoVoList
    return (
      <View className='index'>
        <View className='top'>
          <Text>销售线索明显</Text>
          <View className='status' onClick={this.followPriority}>
            {status}
            <AtIcon prefixClass='iconfont' value='edit' size='20'></AtIcon>
          </View>
        </View>
        <View className='content'>
          <View className='main'>
            <View className='item'>
              <View className='left'>
                报案号
              </View>
              <View className='right'>
                {this.state.data.rgistNo}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                车牌号
              </View>
              <View className='right'>
                {this.state.data.carNo}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                接收时间
              </View>
              <View className='right'>
                {this.state.data.receiveTime}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                VIN码
              </View>
              <View className='right'>
                {this.state.data.vin}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                车型品牌
              </View>
              <View className='right'>
                {this.state.data.brandName}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                车型名称
              </View>
              <View className='right'>
                {this.state.data.vehkindName}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                保险公司
              </View>
              <View className='right'>
                {this.state.data.insuranceName}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                修理厂信息
              </View>
              <View className='right'>
                <View className='iconText'>
                  {this.state.data.repairFlag == 1&&<Image className='iconImg' src={jia}></Image>}
                  {this.state.data.repairFactoryName}
                </View>
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                修理厂送修码
              </View>
              <View className='right'>
                {this.state.data.repairFactoryCodeClaim}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                修理厂电话
              </View>
              <View className='right'>
                {this.state.data.jcRepairFactoryVoList.map((item)=>{
                  return <View>
                    <Text className='marginR'>{item.repairFactoryLinkName}</Text>
                    <Text>{item.repairFactoryMobile}</Text>
                  </View>
                })}
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                定损员信息
              </View>
              <View className='right'>
                <View>
                  <Text className='marginR'>{this.state.data.deflossName}</Text>
                  <Text>{this.state.data.deflossMobile}</Text>
                </View>
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                勘察员信息
              </View>
              <View className='right'>
                <View>
                  <Text className='marginR'>{this.state.data.checkerName}</Text>
                  <Text>{this.state.data.checkerMobile}</Text>
                </View>
              </View>
            </View>
            <View className='item bottom'>
              <View className='left'>
                图片
              </View>
              <View className='right'>
                <View className='imgContent'>
                  <View className='imgLeft'>
                    <View className='imglist'>
                      {this.state.data.pictureUrlList.map((item)=>{
                        return <Image onClick={this.previewImage.bind(this,item)} className='inlineBlock' src={item}></Image>
                      })}
                    </View>
                  </View>
                  <View className='imgRight'>
                    {imgStatus}
                  </View>
                </View>
              </View>
            </View>
            <View className='item'>
              <View className='left'>
                跟进情况
              </View>
              <View className='right'>
              </View>
            </View>
            <View className='followSituationContent'>
              {jcMobileFollowInfoVoList.length>0?jcMobileFollowInfoVoList.map((item,index)=>{
                return <View className={['followSituation', index>2?this.state.followSituationShow?null:'hidden':null].join(' ')}>
                  <View className='operater'>
                    <AtIcon className='operaterIcon' prefixClass='iconfont' value='yuan' size='12' color='#59ba53'></AtIcon>
                    {item.operater}
                  </View>
                  <View>{item.operateTime}</View>
                  <View className='remake'>{item.remark}</View>
                </View>
              }):<View className='tips'>暂无跟进情况</View>}             
            </View>
            {jcMobileFollowInfoVoList.length>3&&<View className='displaySwitch' onClick={this.displaySwitch}>
              {this.state.followSituationShow?<View>收起<AtIcon className='operaterIcon' prefixClass='iconfont' value='up' size='15'></AtIcon></View>:<View>展开<AtIcon className='operaterIcon' prefixClass='iconfont' value='down' size='15'></AtIcon></View>}
            </View>}
          </View>
          <View className='btnContent'>
            <Button className='btn-max-w' type='primary' onClick={this.followResults}>跟进结果</Button>
          </View>
        </View>
      </View>
    )
  }
}

