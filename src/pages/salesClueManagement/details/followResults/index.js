import Taro, { Component } from '@tarojs/taro'
import { View, Button, Radio, Textarea } from '@tarojs/components'
import './index.less'

export default class followResults extends Component {

  config = {
    navigationBarTitleText: '销售线索跟进结果',
    enablePullDownRefresh: false
  }

  state = {
    "originalId":"",
	"followStatus":"",
	"followCauseCode":"",
    "remark":""
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  followStatusEvent (e) {
    this.setState({
        followStatus: e.detail.value
    })
  }

  followCauseCodeEvent (e) {
    this.setState({
        followCauseCode: e.detail.value
    })
  }

  remarkEvent (e) {
      console.log(e.detail.value)
      this.setState({
          remark: e.detail.value
      })
  }

  saveFollowUpResult () {
    if (this.state.followStatus=='') {
        Taro.showToast({title: '请选择跟进状态',icon:'none',duration:1000})
        return false
    }
    if (this.state.followCauseCode=='') {
        Taro.showToast({title: '请选择跟进结果',icon:'none',duration:1000})
        return false
    }
    if (this.state.remark=='') {
        if (this.state.followCauseCode=='03'||this.state.followCauseCode=='04') {
            Taro.showToast({title: '请填写跟进情况',icon:'none',duration:1000})
            return false
        }
    }
    console.log(111)
  }

  render () {
    return (
        <View className='index'>
            <View className='main'>
                <View className='topBar'>
                    跟进结果填写
                </View>
                <View className='item'>
                    <View className='itemTitle'>
                    跟进状态
                    </View>
                    <View className='itemContent'>
                        <RadioGroup onChange={this.followStatusEvent}>
                            <View>
                                <Label>
                                    <Radio className='radioStyle' value='2'></Radio>
                                    继续跟进
                                </Label>
                            </View>
                            <View>
                                <Label>
                                    <Radio className='radioStyle' value='1'></Radio>
                                    跟进完成
                                </Label>
                            </View>
                        </RadioGroup>
                    </View>
                </View>
                <View className='item'>
                    <View className='itemTitle'>
                        跟进结果
                    </View>
                    <View className='itemContent'>
                        <RadioGroup onChange={this.followCauseCodeEvent}>
                            <View>
                                <Label>
                                    <Radio className='radioStyle' value='01'></Radio>
                                    确认供货
                                </Label>
                            </View>
                            <View>
                                <Label>
                                    <Radio className='radioStyle' value='02'></Radio>
                                    可能供货
                                </Label>
                            </View>
                            <View>
                                <Label>
                                    <Radio className='radioStyle' value='04'></Radio>
                                    仅询价
                                </Label>
                            </View>
                            <View>
                                <Label>
                                    <Radio className='radioStyle' value='03'></Radio>
                                    无需询价
                                </Label>
                            </View>
                        </RadioGroup>
                    </View>
                </View>
                <View className='item'>
                    <View className='itemTitle'>
                    跟进情况
                    </View>
                    <View className='itemContent'>
                        <Textarea onInput={this.remarkEvent} className='textarea' autoHeight/>
                    </View>
                </View>
                <View className='btnContent'>
                    <Button className='btn-max-w' type='primary' onClick={this.saveFollowUpResult}>保存</Button>
                </View>
            </View>
        </View>
    )
  }
}

