Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://s3.ax1x.com/2020/11/12/Bzaqud.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://s3.ax1x.com/2020/11/12/BzaBNV.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://s3.ax1x.com/2020/11/12/BzajEt.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://s3.ax1x.com/2020/11/12/BzavUP.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://s3.ax1x.com/2020/11/12/Bzax4f.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://s3.ax1x.com/2020/11/12/BzdRxg.jpg'
    },
    {id: 6,
    type: 'image',
    url: 'https://s3.ax1x.com/2020/11/12/Bzdp8S.jpg'
  }],
  },
  onLoad() {
    // this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    console.log(e);
    this.setData({
      DotStyle: e.detail.value
    })
  },
  goToPassageIno() {
    wx.navigateTo({
      url: '../PassageIno/PassageIno',
    })
  },
  // 跳转巨型菌
  goTolargemushroom(){
    wx.navigateTo({
      url: '../largemushroom/largemushroom',
    })
  },
  // 跳转见手青
  goTojianshouqing(){
    wx.navigateTo({
      url: '../jianshouqing/jianshouqing',
    })
  },
  // 跳转辨别、自救
  goTodiscern(){
    wx.navigateTo({
      url: '../discern/discern',
    })
  }
})

