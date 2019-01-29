import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import car from "../../image/car.png";
import icon_bbyp from "../../image/icon_bbyp.png";
import icon1 from "../../image/icon1.png";
import icon2 from "../../image/icon2.png";
import icon3 from "../../image/icon3.png";
import jia from "../../image/jia.png";
import "./index.less";

export default class salesItem extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  makePhoneCall(e) {
    e.stopPropagation();
    wx.makePhoneCall({
      phoneNumber: this.props.item.deflossMobile
    });
  }

  jump() {
    Taro.navigateTo({
      url:
        "/pages/salesClueManagement/details/index?originalId=" +
        this.props.item.originalId
    });
  }

  render() {
    const followStatus = this.props.item.followStatus;
    // 这里最好初始化声明为 `null`，初始化又不赋值的话
    // 小程序可能会报警为变量为 undefined
    let iconImg = null;
    if (followStatus == 0) {
      iconImg = <Image className="followStatus" src={icon1} />;
    } else if (followStatus == 1) {
      iconImg = <Image className="followStatus" src={icon2} />;
    } else if (followStatus == 2) {
      iconImg = <Image className="followStatus" src={icon3} />;
    }

    return (
      <View className="listItem" onClick={this.jump}>
        <View className="top">
          <View className="left">
            <AtIcon
              prefixClass="iconfont"
              value="car"
              size="16"
              color="#24ac90"
            />
            <Text className="carNo">{this.props.item.carNo}</Text>
            <Text>{this.props.item.brandName}</Text>
          </View>
          <View className="right">
            <Text className="channelSource">
              {this.props.item.channelSource}
            </Text>
            {this.props.item.certFlag == 1 && (
              <Image className="logoIcon" src={icon_bbyp} />
            )}
          </View>
        </View>
        <View className="middle">
          <View className="left">
            <View className="list">
              <View className="label">报案号</View>
              <View className="content">{this.props.item.registNo}</View>
            </View>
            <View className="list">
              <View className="label">定损员</View>
              <View className="content">{this.props.item.deflossName}</View>
            </View>
            <View className="list">
              <View className="label">
                <AtIcon prefixClass="iconfont" value="phone" size="16" />
              </View>
              <View className="content" onClick={this.makePhoneCall}>
                {this.props.item.deflossMobile}
              </View>
            </View>
            <View className="list">
              <View className="label">修理厂</View>
              <View className="content">
                {this.props.item.repairFlag == 1 && (
                  <Image className="jia" src={jia} />
                )}
                <Text>{this.props.item.repairFactoryName}</Text>
              </View>
            </View>
          </View>
          <View className="right">{iconImg}</View>
        </View>
        <View className="bottom">
          {this.props.item.operater && <Text>{this.props.item.operater}</Text>}
          <Text className="padding">{this.props.item.receiveTime}</Text>
        </View>
      </View>
    );
  }
}
