import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

export default class visitItem extends Component {
  
  componentWillMount() {
    // let that;
    // that = this,
    // //获取存储信息
    // wx.getStorage({
    //   key: 'storage',
    //   success: function (res) {
    //     // success
    //     that.setData({
    //       storage: res.data
    //     })
    //   }
    // })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  jump() {
    Taro.navigateTo({
      url:
        "/pages/companyManagement/details/visit/index?id=" + this.props.item.id + "&showVisitResult=" + true + "&showSignoutButton=" +true
    });

  }

  render() {
    let purposeText = this.props.item.purposeText.split(",");
    let purpose = null;
    purposeText.forEach((o, i) => {
      if (o == "其他") {
        purposeText[i] = this.props.item.otherPurposeDescribe;
      }
    });
    purpose = purposeText.join(",");

    let resultText = this.props.item.resultText.split(",");
    let result = null;
    resultText.forEach((o, i) => {
      if (o == "其他") {
        resultText[i] = this.props.item.otherResultDescribe;
      }
    });
    result = resultText.join(",");

    let userCName = this.props.item.userCName;
    let createTime = new Date(this.props.item.createTime);

    return (
      <View className="listItem" onClick={this.jump}>
        <View className="list">
          <Text className="title">拜访目的</Text>
          <Text>{purpose}</Text>
        </View>
        <View className="list">
          <Text className="title">拜访结果</Text>
          <Text>{result}</Text>
        </View>
        <View className="list mTop">
          <Text>
            {userCName}在{createTime.getFullYear()}年{createTime.getMonth() + 1}
            月{createTime.getDate()}日 {createTime.getHours()}:
            {createTime.getMinutes()}签到
          </Text>
        </View>
      </View>
    );
  }
}
