const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [
      {
        name: "食用菌",
        id: 0,
        name1:"羊肚菌",
        text1:"羊肚菌是一种珍稀名贵食用野生菌，居四大名菌之首",
        img1:"https://s3.ax1x.com/2020/11/12/BvowkT.jpg",
        name2:"牛肝菌",
        text2:"牛肝菌属珍稀菌类，又称大脚菇，是世界著名的优良野生食用菌",
        img2:"https://s3.ax1x.com/2020/11/27/DDB66s.png",
        name3:"松茸",
        text3:"松茸又名松蘑，菌盖初生为半球形，成熟后展开成伞状",
        img3:"https://s3.ax1x.com/2020/11/27/DDD1H0.png",
        name4:"黑虎掌菌",
        text4:"黑虎掌菌是著名的出口食用菌之一，新鲜的虎掌菌菌肉鲜脆、奇香浓郁",
        img4:"https://s3.ax1x.com/2020/11/27/DDDN34.png",
        name5:"竹荪",
        text5:"竹荪，中药名。为鬼笔科竹荪属真菌竹荪",
        img5:"https://s3.ax1x.com/2020/11/27/DDDvbq.jpg",
      },
      {
        name: "药用菌",
        id: 1,
        name1:"冬虫夏草",
        text1:"冬虫夏草是麦角菌科真菌冬虫夏草菌",
        img1:"https://s3.ax1x.com/2020/11/27/DD6YZR.jpg",
        name2:"蜂窝菌",
        text2:"“蜂窝菌”也是一味药材，特别是对胃痛",
        img2:"https://s3.ax1x.com/2020/11/27/DD6xlF.jpg",
        name3:"蝉花",
        text3:"蝉拟青霉即我国传统名贵中药蝉花又叫金蝉花",
        img3:"https://s3.ax1x.com/2020/11/27/DDc3ff.jpg",
        name4:"雷丸",
        text4:"雷丸，为白蘑科真菌雷丸的干燥菌核",
        img4:"https://s3.ax1x.com/2020/11/27/DDg1b9.jpg",
        name5:"安络皮伞",
        text5:"安络小皮伞，国内已研制出“安络痛”药物，有止痛等作用",
        img5:"https://s3.ax1x.com/2020/11/27/DDgsUI.jpg",
      },
      {
        name: "有毒菌",
        id: 2,
        name1:"天蓝蘑菇",
        text1:"天蓝蘑菇，学名霍氏粉褶菌。",
        img1:"https://s1.ax1x.com/2020/11/10/Bq8N6g.png",
        name2:"血齿菌",
        text2:"血齿菌，也被称之为“恶魔牙齿”或者“草莓加奶油”",
        img2:"https://s1.ax1x.com/2020/11/10/Bq1Pc4.png",
        name3:"死亡天使",
        text3:"死亡天使，是一种含有致命毒素的真菌",
        img3:"https://s1.ax1x.com/2020/11/10/BqG4Kg.jpg",
        name4:"荧光小菇",
        text4:"荧光小菇，它们是一种非常稀有的真菌。",
        img4:"https://s1.ax1x.com/2020/11/10/BqJudA.jpg",
        name5:"伞形毒菌",
        text5:"伞形毒菌是一种可以作用于神经的剧毒真菌",
        img5:"https://s1.ax1x.com/2020/11/10/BqJ7Oe.jpg",
      },
      {
        name: "无毒菌",
        id: 3,
        name1:"鸡枞菌",
        text1:"鸡枞菌是云南著名野生菌品种，鸡枞又名鸡脚菇。",
        img1:"https://s3.ax1x.com/2020/11/27/DD2goR.jpg",
        name2:"白葱菌",
        text2:"白葱菌菌盖扁半球形，菌肉白色。",
        img2:"https://s3.ax1x.com/2020/11/27/DDWFDe.jpg",
        name3:"奶浆菌",
        text3:"奶浆菌是一种可以食用，且美味的菌种。",
        img3:"https://s3.ax1x.com/2020/11/27/DDh54A.jpg",
        name4:"青头菌",
        text4:"青头菌，因颜色青绿而得名。",
        img4:"https://s3.ax1x.com/2020/11/27/DD4mCR.jpg",
        name5:"米汤菌",
        text5:"米汤菌，颜色淡紫，味道平淡嫩滑。",
        img5:"https://s3.ax1x.com/2020/11/27/DD48Ve.jpg",
      },
      {
        name: "草腐菌",
        id: 4,
        name1:"双孢蘑菇",
        text1:"双孢蘑菇子实体中等大,有多种氨基酸。",
        img1:"https://s3.ax1x.com/2020/11/27/DD5sOK.jpg",
        name2:"高温蘑菇",
        text2:"高温蘑菇，耐高温，菇质好。",
        img2:"https://s3.ax1x.com/2020/11/27/DDIe6x.jpg",
        name3:"姬松茸",
        text3:"姬松茸（又名巴西蘑菇），原产巴西、秘鲁。",
        img3:"https://s3.ax1x.com/2020/11/27/DDIDhj.jpg",
        name4:"草菇",
        text4:"草菇，菌丝无色透明，细胞长度不一。",
        img4:"https://s3.ax1x.com/2020/11/27/DDI54J.jpg",
        name5:"鸡腿菇",
        text5:"鸡腿蘑又名毛头鬼伞、毛鬼伞、刺蘑菇，属真菌门。",
        img5:"https://s3.ax1x.com/2020/11/27/DDIvUe.jpg",
      },
      {
        name: "木腐菌",
        id: 5,
        name1:"牛舌菌",
        text1:"牛舌菌又名牛排菌、肝脏菌、鲜血耳、猪舌菌等",
        img1:"https://s3.ax1x.com/2020/11/27/DDoqRs.png",
        name2:"松针层孔菌",
        text2:"松针层孔菌，用于各种癌症，可改善患者的症状",
        img2:"https://s3.ax1x.com/2020/11/27/DDTeeK.jpg",
        name3:"桦剥管菌",
        text3:"桦剥管菌，专门生长在桦木属(Betulina)的树干上",
        img3:"https://s3.ax1x.com/2020/11/27/DD7ObV.jpg",
        name4:"灵芝",
        text4:"灵芝，腐生真菌，子实体，有柄，木栓质。菌盖半圆形",
        img4:"https://s3.ax1x.com/2020/11/27/DDHKxA.jpg",
        name5:"云芝",
        text5:"云芝，菌盖单个呈扇形、半圆形或贝壳形",
        img5:"https://s3.ax1x.com/2020/11/27/DDHsaT.jpg",
      },
    ],
    load: true
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = this.data.list;
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          console.log(data)
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})