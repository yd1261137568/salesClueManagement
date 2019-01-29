import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Input, Radio, Button } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import TopBar from "../../../components/topBar/index";
import SalesItem from "../../../components/salesItemOther/index";
import OrderItem from "../../../components/orderItem/index";
import VisitItem from "../../../components/visitItem/index";
import cardBG from "../../../image/cardBG.png";
import audited0 from "../../../image/audited0.png";
import audited1 from "../../../image/audited1.png";
import audited2 from "../../../image/audited2.png";
import audited3 from "../../../image/audited3.png";
import "./index.less";

export default class details extends Component {
  config = {
    navigationBarTitleText: "维修企业详情"
  };

  state = {
    isShowDownArrow:false, // 是否显示向下箭头
    optionIndex: "relationContent",
    address: "",
    detailAddress: "",
    isPICC: 0,
    data: {
      repairId: "xlcid",
      userName: "fy",
      repairFactoryName: "test修理厂",
      repairShortName: "test修理厂简称",
      repairType: "01",
      repairFactoryCodeClaim: "123456理赔送修码",
      registAddress: "河南开封",
      registProvinceCode: "注册省份编码",
      registProvinceName: "注册省份名称",
      registCityCode: "注册市编码",
      registCityName: "注册市名称",
      registDistrictCode: "注册区编码",
      registDistrictName: "注册区名称",
      provinceCode: "实际省份代码",
      provinceName: "实际省份名称",
      cityCode: "实际市代码",
      cityName: "实际市名称",
      districtCode: "实际区代码",
      districtName: "实际区名称",
      address: "实际地址",
      latitude: "纬度",
      Longitude: "经度",
      isPICC: 1,
      labelStatus: 1,
      remark: "修理厂状态描述",
      businessNo: "工商执照号",
      documentValidityType: 0,
      ducumentValidity: "失效期",
      businessPhoto:
        "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=737493545,2593507728&fm=173&app=25&f=JPEG?w=218&h=146&s=2664DA064777399C745D89080300F093",
      legalName: "法人姓名",
      legalCard: "法人身份证号码",
      legalValidityType: 0,
      legalvalidity: "法人身份证有效期",
      legalPhoto:
        "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1250318025,1959353060&fm=173&app=25&f=JPEG?w=218&h=146&s=E4C2B30DA24114E75B8001910100C082",
      legalPhoto1:
        "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3491781345,1849634089&fm=173&app=25&f=JPEG?w=218&h=146&s=912AEFB1C00A12EE57148305030060C7",
      agentPhone: "法人联系电话",
      openMatchingclaim: 0,
      matchingAccountFlag: 0,
      reviewFlag: 3,
      thisWeekTrans: 150,
      lastWeekTrans: 130,
      thisMonthTrans: 1000,
      lastMonthTrans: 700
    },
    salesList: [
      {
        originalId: 1,
        carNo: "测试s123456",
        brandName: "一汽奥迪",
        channelSource: "PICC",
        certFlag: 1,
        registNo: "LXH207888777117787289",
        deflossName: "测试员",
        deflossMobile: "13988981234",
        repairFlag: 1,
        repairFactoryName:
          "诚合维修企业(股份有限公司)111111111111111111111111111111",
        followStatus: 0,
        followCause: "???",
        operater: "2019-01-15",
        receiveTime: "14:13:12"
      },
      {
        originalId: 2,
        carNo: "测试s123456",
        brandName: "一汽奥迪",
        channelSource: "PICC",
        certFlag: 2,
        registNo: "LXH207888777117787289",
        deflossName: "测试员",
        deflossMobile: "13988980000",
        repairFlag: 0,
        repairFactoryName: "诚合维修企业(股份有限公司)",
        followStatus: 1,
        followCause: "???",
        operater: "2019-01-15",
        receiveTime: "14:13:12"
      }
    ],
    orderList: [
      {
        jcRepairOrderVo: {
          licenseNo: "测试KK0001",
          total: "297",
          partNum: "198",
          createTime: "2019-01-18 11:12:37",
          status: "200"
        },
        jcShopDamageVo: {
          damcarname: "2006款 上汽通用 测试"
        }
      },
      {
        jcRepairOrderVo: {
          licenseNo: "测试KK0002",
          total: "307",
          partNum: "111",
          createTime: "2019-01-21 11:12:37",
          status: "000"
        },
        jcShopDamageVo: {
          damcarname: "2007款 上汽通用 测试"
        }
      }
    ],
    visitList: [
      {
        id: 1,
        createTime: 1548123317553,
        purposeText: "第一,第二,第三,其他",
        otherPurposeDescribe: "测试目的",
        resultText: "第一,第二,第三,其他",
        otherResultDescribe: "测试结果",
        userCName: "wdy"
      },
      {
        id: 2,
        createTime: 1548123473866,
        purposeText: "第一,第二,第三",
        otherPurposeDescribe: "",
        resultText: "第一,第二,第三,第四,第五,第六,第七,第八,其他",
        otherResultDescribe: "测试结果",
        userCName: "测试员"
      }
    ]
  };

  componentWillMount() {
    console.log(this.$router.params.originalId);
  }

  componentDidMount() {
    let address = Taro.getStorageSync("address");
    if (!address) {
      let addressInfo = {
        province: this.state.data.provinceName,
        city: this.state.data.cityName,
        district: this.state.data.districtName,
        address: this.state.data.address
      };
      address = addressInfo;
      Taro.setStorageSync("address", addressInfo);
    }
    Taro.removeStorageSync("address");
    let addressString =
      address.province + address.city + address.district || "";
    let detailAddressString = address.address || this.state.data.address;
    let isPICC = this.state.data.isPICC;
    this.setState({
      address: addressString,
      detailAddress: detailAddressString,
      isPICC: isPICC
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  previewImage(url) {
    Taro.previewImage({
      current: url, // 当前显示图片的http链接
      urls: this.state.data.pictureUrlList // 需要预览的图片http链接列表
    });
  }

  optionEvent(index) {
    this.setState({
      optionIndex: index
    });
  }

  isPICCEvent(e) {
    this.setState({
      isPICC: e.detail.value
    });
  }

  jump() {
    Taro.navigateTo({
      url: "/pages/companyManagement/details/visit/index"
    });
  }

  save() {}

  toMap() {
    Taro.navigateTo({
      url: "/pages/companyManagement/details/map/index"
    });
  }
  onScroll = e =>{
    if (e.currentTarget.deltaY < -20 && e.currentTarget.scrollTop < -30) {
      Taro.startPullDownRefresh()
      wx.showNavigationBarLoading()
    }
  }
  // 点击加载更多,添加2条新数据
  loadingMore () {
    const newSalesItemList = [
      {
        originalId: 2,
        carNo: "测试s123456",
        brandName: "一汽奥迪",
        channelSource: "PICC",
        certFlag: 2,
        registNo: "LXH207888777117787289",
        deflossName: "测试员",
        deflossMobile: "13988980000",
        repairFlag: 0,
        repairFactoryName: "诚合维修企业(股份有限公司)",
        followStatus: 1,
        followCause: "???",
        operater: "2019-01-15",
        receiveTime: "14:13:12"
      },
      {
        originalId: 2,
        carNo: "测试s12345678",
        brandName: "一汽奥迪",
        channelSource: "PICC",
        certFlag: 2,
        registNo: "LXH207888777117787289",
        deflossName: "测试员",
        deflossMobile: "13988980000",
        repairFlag: 0,
        repairFactoryName: "诚合维修企业(股份有限公司)",
        followStatus: 1,
        followCause: "???",
        operater: "2019-01-15",
        receiveTime: "14:13:12"
      }
    ]
    const {salesList} = this.state;
    setTimeout(()=>{
      salesList.push(...newSalesItemList);
      this.setState({
        salesList
      })
    },1000)
  }
  // 切换小箭头的方向,当箭头方向朝下时,收起所有数据,只保留最上面的2条
  onCheckArrow() {
    const { isShowDownArrow, salesList } = this.state;
    this.setState({
      isShowDownArrow: !this.state.isShowDownArrow
    })
    if (isShowDownArrow == false) {
      salesList.splice(0, salesList.length-2)
    }
  }
  render() {
    let reviewFlag = this.state.data.reviewFlag;
    let reviewFlagText = null;
    switch (reviewFlag) {
      case "0":
        reviewFlagText = "平台注册待审核";
        break;
      case "1":
        reviewFlagText = "平台注册待审核";
        break;
      case "2":
        reviewFlagText = "平台信息审核通过";
        break;
      case "3":
        reviewFlagText = "平台信息审核不通过";
        break;
      case "4":
        reviewFlagText = "修改信息待审核";
        break;
      case "5":
        reviewFlagText = "修改信息审核通过";
        break;
      default:
        reviewFlagText = "修改信息审核不通过";
    }
    let repairType = this.state.data.repairType;
    let repairTypeText = null;
    switch (repairType) {
      case "01":
        repairTypeText = "零售买家(b)";
        break;
      case "05":
        repairTypeText = "个人买家(c)";
        break;
      default:
        repairTypeText = "批发买家(v)";
    }

    let labelStatus = this.state.data.labelStatus;
    let audited = null;
    if (labelStatus == 0) {
      audited = <Image className="audited" src={audited3} />;
    } else if (labelStatus == 1) {
      audited = <Image className="audited" src={audited2} />;
    } else if (labelStatus == 2) {
      audited = <Image className="audited" src={audited1} />;
    } else if (labelStatus == 3) {
      audited = <Image className="audited" src={audited0} />;
    }

    return (
      <View className="index">
        <TopBar title="维修企业详情" back="false" search="false" />
        <ScrollView
          className="center"
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 150px;'
          lowerThreshold='20'
          upperThreshold='20'
          onScrolltoupper={this.onScrolltoupper}
          onScroll={this.onScroll}>
          <View className="card">
            <Image className="cardBG" src={cardBG} />
            <View className="basemsg">
              <View className="title">{this.state.data.repairFactoryName}</View>
              <View className="location">
                <AtIcon prefixClass="iconfont" value="Map-Pin" size="12" />
                <Text className="paddingLeft">
                  {this.state.data.registAddress}
                </Text>
              </View>
              <View className="phone">
                <AtIcon prefixClass="iconfont" value="phonenew" size="10" />
                <Text className="paddingLeft">
                  {this.state.data.agentPhone}
                </Text>
              </View>
            </View>
            <View className="moneymsg">
              <View className="moneyItem">
                <View className="money">{this.state.data.lastWeekTrans}</View>
                <View className="moneyTitle">上周成交金额</View>
              </View>
              <View className="moneyItem">
                <View className="money">{this.state.data.thisWeekTrans}</View>
                <View className="moneyTitle">本周成交金额</View>
              </View>
              <View className="moneyItem">
                <View className="money">{this.state.data.lastMonthTrans}</View>
                <View className="moneyTitle">上月成交金额</View>
              </View>
              <View className="moneyItem">
                <View className="money">{this.state.data.thisMonthTrans}</View>
                <View className="moneyTitle">本月成交金额</View>
              </View>
            </View>
          </View>
          <View className="optionBar">
            <View
              onClick={this.optionEvent.bind(this, "relationContent")}
              className={[
                "option",
                this.state.optionIndex == "relationContent" ? "onChoose" : null
              ].join(" ")}
            >
              关联
            </View>
            <View
              onClick={this.optionEvent.bind(this, "messageContent")}
              className={[
                "option",
                this.state.optionIndex == "messageContent" ? "onChoose" : null
              ].join(" ")}
            >
              信息
            </View>
          </View>
          <View className={["relationContent",
            this.state.optionIndex == "relationContent" ? null : "hidden"
          ].join(" ")}
          >
            <View className="salesLeads">
              <View className="contentTitle">
                <View className="contentT">销售线索</View>
                {
                  this.state.isShowDownArrow ? <AtIcon prefixClass="iconfont" value="down" size="12" onClick={this.onCheckArrow.bind(this)} />:
                    <AtIcon prefixClass="iconfont" value="up" size="12" onClick={this.onCheckArrow.bind(this)} />
                }
              </View>
              <View className="listContent">
                {this.state.salesList.map(item => (
                  <SalesItem item={item} />
                ))}
                {this.state.salesList.length > 0 ? (
                  <View className="other" onClick={this.loadingMore.bind(this)}>查看更多</View>
                ) : (
                    <View className="noData">暂无数据</View>
                  )}
              </View>
            </View>
            <View className="order">
              <View className="contentTitle">
                <View className="contentT">交易</View>
                <AtIcon prefixClass="iconfont" value="up" size="12" />
              </View>
              <View className="listContent">
                {this.state.orderList.map(item => (
                  <OrderItem item={item} />
                ))}
                {this.state.orderList.length > 0 ? (
                  <View className="other">查看更多</View>
                ) : (
                    <View className="noData">暂无数据</View>
                  )}
              </View>
            </View>
            <View className="visit">
              <View className="contentTitle">
                <View className="contentT">拜访</View>
                <AtIcon value="add" size="16" onClick={this.jump} />
              </View>
              <View className="listContent">
                {this.state.visitList.map(item => (
                  <VisitItem item={item} />
                ))}
                {this.state.visitList.length > 0 ? (
                  <View className="other">查看更多</View>
                ) : (
                    <View className="noData">暂无数据</View>
                  )}
              </View>
            </View>
            <View className="footOption">
              <View className="footItem" onClick={this.jump}>
                拜访
              </View>
              <View className="footItem">导航</View>
              <View className="footItem">电话</View>
            </View>
          </View>
          <View
            className={[
              "messageContent",
              this.state.optionIndex == "messageContent" ? null : "hidden"
            ].join(" ")}
          >
            <View className="accountStatus">账号状态：{reviewFlagText}</View>
            <View className="repairDetail">
              <View className="item">
                <View className="label">买家身份</View>
                <View className="text">{repairTypeText}</View>
              </View>
              <View className="item">
                <View className="label">登录账号</View>
                <View className="text">{this.state.data.userName}</View>
              </View>
              <View className="item">
                <View className="label">修理厂送修码</View>
                <View className="text">
                  {this.state.data.repairFactoryCodeClaim}
                </View>
              </View>
              {audited}
            </View>
            <View className="repairDetail">
              <View className="item">
                <View className="label">公司名称</View>
                <View className="text">
                  {this.state.data.repairFactoryName}
                </View>
              </View>
              <View className="item">
                <View className="label">公司简称</View>
                <View className="text">{this.state.data.repairShortName}</View>
              </View>
              <View className="item">
                <View className="label">公司所在地</View>
                <View className="text">
                  {this.state.data.registProvinceName +
                    this.state.data.registCityName +
                    this.state.data.registDistrictName +
                    this.state.data.registAddress}
                </View>
              </View>
              <View className="item">
                <View className="label">实际所在地</View>
                <View className="text">{this.state.address}</View>
                <View onClick={this.toMap}>
                  <AtIcon
                    prefixClass="iconfont"
                    value="Map-Pin"
                    size="15"
                    color="#666"
                  />
                </View>
              </View>
              <View className="item">
                <View className="label">实际详细地址</View>
                <View className="text">
                  <Input
                    className="input"
                    type="text"
                    value={this.state.detailAddress}
                  />
                </View>
              </View>
              <View className="item">
                <View className="label">是否与人保合作</View>
                <View className="text">
                  <RadioGroup onChange={this.isPICCEvent}>
                    <Label className="radio-list__label">
                      <Radio
                        className="radio-list__radio radioSize"
                        value="1"
                        checked={this.state.isPICC == 1}
                      />
                      是
                    </Label>
                    <Label className="radio-list__label">
                      <Radio
                        className="radio-list__radio radioSize marginL"
                        value="0"
                        checked={this.state.isPICC == 0}
                      />
                      否
                    </Label>
                  </RadioGroup>
                </View>
              </View>
            </View>
            <View className="repairDetail">
              <View className="item">
                <View className="label">营业执照号</View>
                <View className="text">{this.state.data.businessNo}</View>
              </View>
              <View className="item">
                <View className="label">营业执照号有效止期</View>
                <View className="text">
                  {this.state.data.documentValidityType == 0
                    ? "非长期"
                    : "长期"}
                </View>
              </View>
              {this.state.data.documentValidityType == 0 && (
                <View className="item">
                  <View className="label">有效期至</View>
                  <View className="text">
                    {this.state.data.ducumentValidity}
                  </View>
                </View>
              )}
              <View className="item">
                <View className="label">营业执照照片</View>
                <View className="text">
                  <View className="imgContent">
                    <Image
                      className="img"
                      mode="aspectFit"
                      src={this.state.data.businessPhoto}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View className="repairDetail">
              <View className="item">
                <View className="label">法人姓名</View>
                <View className="text">{this.state.data.legalName}</View>
              </View>
              <View className="item">
                <View className="label">法人身份证号</View>
                <View className="text">{this.state.data.legalCard}</View>
              </View>
              <View className="item">
                <View className="label">身份证有效止期</View>
                <View className="text">
                  {this.state.data.legalValidityType == 0 ? "非长期" : "长期"}
                </View>
              </View>
              {this.state.data.legalValidityType == 0 && (
                <View className="item">
                  <View className="label">身份证有效期</View>
                  <View className="text">{this.state.data.legalValidity}</View>
                </View>
              )}
              <View className="item">
                <View className="label">法人身份证照片</View>
                <View className="text">
                  <View className="imgContent">
                    <Image
                      className="img"
                      mode="aspectFit"
                      src={this.state.data.legalPhoto}
                    />
                  </View>
                  <View className="imgContent">
                    <Image
                      className="img"
                      mode="aspectFit"
                      src={this.state.data.legalPhoto1}
                    />
                  </View>
                </View>
              </View>
              <View className="item">
                <View className="label">法人联系电话</View>
                <View className="text">{this.state.data.agentPhone}</View>
              </View>
            </View>
            <View className="repairDetail">
              <View className="item">
                <View className="label">撮合直赔</View>
                <View className="text">
                  {this.state.data.openMatchingclaim == 0 ? "未开通" : "开通"}
                </View>
              </View>
              <View className="item">
                <View className="label">撮合账期</View>
                <View className="text">
                  {this.state.data.matchingAccountFlag == 0 ? "未开通" : "开通"}
                </View>
              </View>
            </View>
            <View className="btnContent">
              <Button className="btn-max-w" type="primary" onClick={this.save}>
                保存
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
