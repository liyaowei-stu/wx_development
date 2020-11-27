const db = wx.cloud.database();
var app = getApp() //获得app.js文件对象，以便能够访问文件里的全局变量
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: "",
    con: "",
    name: "",
  },

  // 1.拍照函数，获取图片并将其上传至服务器进行识别
  takePhoto() {
    // createCameraContext创建 camera 上下文 CameraContext 对象
    const ctx = wx.createCameraContext()
    var that = this;
    // 获取数据库中相应的野生菌数据
    db.collection("user").doc("5d755ab25fa65b4c000818205fc5f60a").get().then(res => {
      console.log(res)
      that.setData({
        name: res.data,
      })
    })
    // 拍照
    ctx.takePhoto({
      success: (res) => {
        console.log("图片地址:" + res.tempImagePath);
        this.setData({
          img: res.tempImagePath
        })
        wx.showToast({
          title: '正在识别图片',
          icon: 'loading',
          mask: true,
          duration: 20000,
        })
        // 上传到服务器API进行识别
        this.imageIdentify(res)
      },
    });
  },

  // 2.将图片上传到API进行识别
  imageIdentify: function (res) {
    var that = this
    wx.uploadFile({
      url: 'https://zzg90576.xyz:10001/predict',
      filePath: res.tempImagePath,
      header: {
        "content-type": "multipart/form-data",
        "content-type": "application/x-www-form-urlencoded"
      },
      name: 'file',
      success: function (res) {
        // console.log(JSON.parse(res.data))
        that.setData({
          con: JSON.parse(res.data),
        })
        wx.showToast({
          title: '识别成功',
          icon: 'success',
          mask: true,
          duration: 800,
        })
        /* 第二种方法，不显示下拉框显示另一个页面(不同页面传值) */
        // console.log(that.data.con[class_id])
        wx.navigateTo({
          url: '../showResult/showResult?img=' + that.data.img + '&class_id=' + that.data.con["class_id"]
        })
        // 关闭Toast
        wx.hideToast();
      },
    })
    // uploadFile的结束       
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  }



})