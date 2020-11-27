// pages/showResult/showResult.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: null,
    class_id: null,
    name: null,
    show: false,
    modalName: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // 从另外一个界面传过来的img链接和与数据库相对应的id
      img: options.img,
      // 野生菌集合对应的id
      class_id: options.class_id,
    })
    if(options.class_id!=21){
      this.setData({
        show: true,
      })
    }else{
      // 若不是野生菌，提示后返回页面
      this.setData({
        show: false,
        modalName: "Modal"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 读取数据库中的野生菌集合将其存放在name中
    db.collection("user").doc("5d755ab25fa65b4c000818205fc5f60a").get().then(res=>{
      console.log(res)
      this.setData({
        name:res.data,
      })
    })

  },
  // 隐藏弹窗
  hideModal(e) {
    this.setData({
      modalName: null
    })
    wx.navigateBack({
      delta: 1
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 显示识别结果已完成
    wx.showToast({
      title: '识别成功',
      icon: 'success',
      mask: true,
      duration: 800,
    })

  },
})