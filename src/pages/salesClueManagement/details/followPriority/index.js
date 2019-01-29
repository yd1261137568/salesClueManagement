import Taro, { Component } from "@tarojs/taro";
import { View, Button, Radio, Textarea } from "@tarojs/components";
import "./index.less";

export default class followPriority extends Component {
  config = {
    navigationBarTitleText: "销售线索跟进优先级",
    enablePullDownRefresh: false
  };

  state = {
    originalId: "",
    originalStatus: "",
    remark: ""
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  originalStatusEvent(e) {
    this.setState({
      originalStatus: e.detail.value
    });
  }

  remarkEvent(e) {
    console.log(e.detail.value);
    this.setState({
      remark: e.detail.value
    });
  }

  submit() {
    if (this.state.originalStatus == "") {
      Taro.showToast({
        title: "请选择跟进优先级",
        icon: "none",
        duration: 1000
      });
      return false;
    }
    if (this.state.remark == "") {
      if (this.state.originalStatus == "3") {
        Taro.showToast({
          title: "请填写无需跟进原因",
          icon: "none",
          duration: 1000
        });
        return false;
      }
    }
  }

  cancel() {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="index">
        <View className="main">
          <View className="topBar">跟进优先级修改</View>
          <View className="item">
            <View className="itemTitle">跟进优先级</View>
            <View className="itemContent">
              <RadioGroup onChange={this.originalStatusEvent}>
                <View>
                  <Label>
                    <Radio className="radioStyle" value="2" />
                    必跟进
                  </Label>
                </View>
                <View>
                  <Label>
                    <Radio className="radioStyle" value="1" />
                    需跟进
                  </Label>
                </View>
                <View>
                  <Label>
                    <Radio className="radioStyle" value="3" />
                    无需跟进
                  </Label>
                </View>
              </RadioGroup>
            </View>
          </View>
          {this.state.originalStatus == 3 && (
            <View className="item">
              <View className="itemTitle">无需跟进原因</View>
              <View className="itemContent">
                <Textarea
                  onInput={this.remarkEvent}
                  className="textarea"
                  autoHeight
                />
              </View>
            </View>
          )}
          <View className="btnContent">
            <View className="btnWarpper">
              <Button
                className="btn-max-w"
                type="primary"
                onClick={this.submit}
              >
                确定
              </Button>
            </View>
            <View className="btnWarpper">
              <Button
                className="btn-max-w btnStyle"
                type="primary"
                onClick={this.cancel}
              >
                取消
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
