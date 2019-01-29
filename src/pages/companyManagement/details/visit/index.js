import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  Image,
  Radio,
  Textarea,
  Button
} from "@tarojs/components";
import { AtIcon, AtCheckbox, AtTextarea, AtToast } from "taro-ui";
import "./index.less";

export default class visit extends Component {
  config = {
    navigationBarTitleText: "维修企业拜访"
  };
  constructor() {
    super(...arguments);
    this.state = {
      checkedList1: [],
      checkedList2: [],
      value: "",
      showTextArea1: false, // 是否显示拜访目的的多文本框
      showTextArea2: false, // 是否显示拜访结果的多文本框
      showSignoutButton: false, // 是否显示签出按钮
      showVisitResult: false, //是否显示拜访结果(签到页面不显示,签出页面显示)
      radioList:[],
      imgLength: 5,
      newImg: [],
      storage: '',
      data: {
        repairId: "修理厂id",
        repairName: "修理厂名称",
        purposeCode: "01,02,99",
        purposeText: "了解修理厂需求、寻求突破口,寻找或核实销售线索,其他",
        otherPurposeDescribe: "其他拜访目的描述",
        keyPersonFlag: "1",
        resultCode: "02,05",
        resultText: "达成部分拜访目的（见备注）,收集到客户意见和建议（见备注）",
        otherResultDescribe: "",
        longitude: "经度",
        latitude: "纬度",
        endFlag: "1",
        createTime: 1548214221957,
        endTime: 1548214252337,
        remark: "备注",
        imgUrlList: [
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=737493545,2593507728&fm=173&app=25&f=JPEG?w=218&h=146&s=2664DA064777399C745D89080300F093"
        ]
      }
    };
    this.visitPurpose = [
      {
        value: "list1",
        label: "了解修理厂需求、寻求突破口"
      },
      {
        value: "list2",
        label: "寻求或核实销售线索"
      },
      {
        value: "list3",
        label: "老客户例行拜访"
      },
      {
        value: "list4",
        label: "验货并拜访"
      },
      {
        value: "list5",
        label: "宣讲促销政策"
      },
      {
        value: "list6",
        label: "首次拜访并签约"
      },
      {
        value: "list7",
        label: "成交客户回访(见备注)"
      },
      {
        value: "list8",
        label: "其它"
      }
    ];
    this.visitResult = [
      {
        value: "result1",
        label: "达成全部拜访目的"
      },
      {
        value: "result2",
        label: "达成部分拜访目的(见备注)"
      },
      {
        value: "result3",
        label: "实现订单成交"
      },
      {
        value: "result4",
        label: "约定下次拜访时间"
      },
      {
        value: "result5",
        label: "收集到客户意见和建议(见备注)"
      },
      {
        value: "result6",
        label: "其它"
      }
    ];
  }
  // 点击拜访目的的其它
  handlePurposeChange(value) {
    this.setState(
      {
        checkedList1: value
      },
      () => {
        const { checkedList1 } = this.state
        let show = false
        checkedList1.find(item => {
          if (item == "list8") {
            show = true
          }
        });
        this.setState({
          showTextArea1: show
        });
      }
    );
  }
  handlePurposeChange2(event) {
    this.setState({
      value: event.target.value
    });
  }
  // 点击拜访结果的其它
  handleResultChange(value) {
    this.setState(
      {
        checkedList2: value
      },() => {
        const { checkedList2 } = this.state;
        let show2 = false;
        checkedList2.find(item => {
          if (item == "result6") {
            show2 = true;
          }
        });
        this.setState({
          showTextArea2: show2
        });
      }
    );
  }
  handleResultChange2(event) {
    this.setState({
      value: event.target.value
    });
  }
  componentWillMount() {
    // 获取visitItem传的参(showVisitResult=true,显示拜访结果  showSignoutButton=true,显示签出按钮)
    const showVisitResult = this.$router.params.showVisitResult //true
    const showSignoutButton = Boolean(this.$router.params.showSignoutButton); //false
    this.setState({ 
      showVisitResult,
      showSignoutButton
     });
    //跟进请求回来的拜访数据更新上传图片的剩余个数（最多5张）
    if (this.state.data.imgUrlList) {
      this.setState({
        imgLength: 5 - this.state.data.imgUrlList.length
      });
    }

  
  }

  componentDidMount() {}

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

  remarkEvent01() {}
  remarkEvent02() {}
  remarkEvent03() {}
  jump() {
    Taro.navigateTo({
      url: "/pages/companyManagement/details/visit/index"
    });
  }

  save() {}

  addImg() {
    let img = [
      "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=737493545,2593507728&fm=173&app=25&f=JPEG?w=218&h=146&s=2664DA064777399C745D89080300F093",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3197663125,357838978&fm=173&app=25&f=JPEG?w=218&h=146&s=32A2DC4D24F5C677402B743F0300C058",
      "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1250318025,1959353060&fm=173&app=25&f=JPEG?w=218&h=146&s=E4C2B30DA24114E75B8001910100C082",
      "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3491781345,1849634089&fm=173&app=25&f=JPEG?w=218&h=146&s=912AEFB1C00A12EE57148305030060C7",
      "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=737493545,2593507728&fm=173&app=25&f=JPEG?w=218&h=146&s=2664DA064777399C745D89080300F093"
    ];
    let imgAry = [];
    if (this.state.newImg.length > 0) {
      imgAry = this.state.newImg;
    }
    let index = 5 - this.state.imgLength;
    imgAry.push(img[index]);
    let otherLength = this.state.imgLength - 1;
    this.setState({
      newImg: imgAry,
      imgLength: otherLength
    });
  }

  cancelImg(item) {
    console.log('item' + item);
    let imgAry = this.state.newImg;
    let otherLength = this.state.imgLength;
    if (imgAry.indexOf(item) > -1) {
      imgAry.splice(imgAry.indexOf(item), 1);
      otherLength += 1;
    }
    this.setState({
      newImg: imgAry,
      imgLength: otherLength
    });
  }
  // 单选框,将选中的单选框的value插到radioList数组中
  //(当该<radio> 选中时，<radio-group> 的 change 事件会携带<radio>的value,可通过value.target.value拿到单选框的value值)
  originalStatusEvent = (value) => {
    const { radioList} = this.state;
    radioList.push(value.target.value);
    this.setState({
      radioList
    })
  }
  // 点击签到,返回到维修企业详情页面
  signIn() {
    const { newImg } = this.state
    if (newImg.length < 1) {
      Taro.showToast({ 
        title: "请选择照片", 
        icon: "none",
        duration: 1000 });
      return false;
    } else {
      wx.navigateTo({ url: "../index" });
    }
  }
  // 点击签出,拜访目的、是否见到关键人和拜访结果是必填项,并返回到维修企业详情页面
  signOut() {
    const { checkedList1, checkedList2, radioList } = this.state;
    this.setState(
      {
        checkedList1,
        checkedList2,
        radioList
      },() => {
        const { checkedList1, checkedList2, radioList, } = this.state;
        if (checkedList1.length == 0) {
          Taro.showToast({
            title: "请选择拜访目的",
            icon: "none",
            duration: 1000
          });
        } else if (radioList.length == 0) {
          Taro.showToast({
            title: "请选择是否见到关键人",
            icon: "none",
            duration: 1000
          });
        } else if (checkedList2.length == 0) {
          Taro.showToast({
            title: "请选择拜访结果",
            icon: "none",
            duration: 1000
          });
          return false;
        } else {
          wx.navigateTo({ url: "../index" });
        }


        //获取输入值
        const enterTime = this.state.createTimeString;
        const outTime = this.state.endTimeString;
        console.log(enterTime, outTime);
        const storage = {
          enterTime,
          outTime,

        }
        this.setState({
          storage
        })
        
      }
    )
    // 存储输入值
    wx.setStorageSync("storage", this.state.storage);
  }
  cancel() {
    Taro.navigateBack();
  }
  render() {
    const {showSignoutButton} = this.state;
    let createTimeString = null;
    if (this.state.data.createTime) {
      let createTime = new Date(this.state.data.createTime);
      let year = createTime.getFullYear();
      let month = createTime.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let date = createTime.getDate();
      if (date < 10) {
        date = "0" + date;
      }
      let hours = createTime.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      let minutes = createTime.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      let seconds = createTime.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      createTimeString =
        year +
        "年" +
        month +
        "月" +
        date +
        "日 " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    }
    let endTimeString = null;
    if (this.state.data.endTime) {
      let endTime = new Date(this.state.data.endTime);
      let year = endTime.getFullYear();
      let month = endTime.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let date = endTime.getDate();
      if (date < 10) {
        date = "0" + date;
      }
      let hours = endTime.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      let minutes = endTime.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      let seconds = endTime.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      endTimeString =
        year +
        "年" +
        month +
        "月" +
        date +
        "日 " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    }
    return (
      <View className="index">
        <View className="time">
          <View className="item">
            <View className="left">到达时间</View>
            <View className="right">{createTimeString}</View>
          </View>
          <View className="item">
            <View className="left">离开时间</View>
            <View className="right">{endTimeString}</View>
          </View>
        </View>
      
          <View className="checkboxContent">
            <View className="title">拜访目的</View>
            <AtCheckbox
              options={this.visitPurpose}
              selectedList={this.state.checkedList1}
              onChange={this.handlePurposeChange.bind(this)}
            />
            {this.state.showTextArea1 && (
              <AtTextarea
                autoFocus
                count={false}
                value={this.state.value}
                onChange={this.handlePurposeChange2.bind(this)}
                // maxLength={200}
                placeholder="填写其它拜访目的"
              />
            )}
          </View>
        <View className="keyPerson">
          <Text>是否见到关键人</Text>
          <RadioGroup onChange={this.originalStatusEvent}>
            <Label>
              <Radio className="radioStyle" value="1" />是
            </Label>
            <Label>
              <Radio className="radioStyle" value="0" />否
            </Label>
          </RadioGroup>
        </View>
        {this.state.showVisitResult && (
        <View className="checkboxContent">
          <View className="title">拜访结果</View>
          <AtCheckbox
            options={this.visitResult}
            selectedList={this.state.checkedList2}
            onChange={this.handleResultChange.bind(this)}
          />
          {this.state.showTextArea2 && (
            <AtTextarea
              autoFocus
              count={false}
              value={this.state.value}
              onChange={this.handleResultChange2.bind(this)}
              // maxLength={200}
              placeholder="填写其它拜访结果"
            />
          )}
        </View>
        )}
        <View className="imageAndMark">
          <View className="title">图片</View>
          <View className="imgContent">
            {this.state.data.imgUrlList.map(item => {
              return (
                <View className="imgWarpper">
                  <Image mode="aspectFit" className="img" src={item} />
                </View>
              );
            })}
            {this.state.newImg.map(item => {
              return (
                <View className="imgWarpper">
                  <Image mode="aspectFit" className="img" src={item} />
                  <View onClick={this.cancelImg.bind(this, item)}>
                    <AtIcon
                      className="cancelIcon"
                      prefixClass="iconfont"
                      value="cancel"
                      size="16"
                    />
                  </View>
                </View>
              );
            })}
            {this.state.imgLength > 0 && (
              <View onClick={this.addImg} className="imgWarpper iconContent">
                <AtIcon
                  prefixClass="iconfont"
                  value="add"
                  size="49"
                  color="#e6e6e6"
                />
              </View>
            )}
            {this.state.imgLength > 0 && (
              <View className="tips">请添加签到图片</View>
            )}
          </View>
          <View className="title">备注</View>
          <View className="textareaContent">
            <Textarea
              onInput={this.remarkEvent03}
              className="textarea"
              placeholder="填写备注内容"
              autoHeight
            />
          </View>
        </View>
        <View className="btnContent">
          <View className="btnWarpper">
            {showSignoutButton ? 
              <Button className="btn-max-w" type="primary" onClick={this.signOut}>签出</Button> :
              <Button className="btn-max-w" type="primary" onClick={this.signIn}>签到</Button>
            }
          </View>
          <View className="btnWarpper">
            <Button
              className="btn-max-w btnStyle"
              type="primary"
              onClick={this.cancel}>
              返回
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
