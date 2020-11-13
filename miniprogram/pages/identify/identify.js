// pages/photo/photo.js
var app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "",
    con: "",
    name: "",
    inputShowed: false,  //初始文本框不显示内容
    modalName: null, // 初始不显示下部窗口
    imgModalName: "",
  },

  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
    // 当返回当前页面的时候，会自动调用这个参数，则实现自动返回刷新

  },


  // 搜索框的函数
  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },


  // 跳转到拍照页面
  goToTakePhoto() {
    wx.navigateTo({
      url: '../takephoto/takephoto',
    })
  },


  // 搜索框跳转页面
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  // chooseImage从本地相册选择图片或使用相机拍照。
  // uploadFile将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求
  onCameraTap: function () {
    var that = this;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        db.collection("user").doc("5d755ab25fa65b4c000818205fc5f60a").get().then(res => {
          console.log(res)
          that.setData({
            name: res.data,
          })
        })
        wx.showToast({
          title: '正在识别图片',
          icon: 'loading',
          mask: true,
          duration: 2000,
        })
        that.setData({
          img: res.tempFilePaths[0],
        })
        // console.log('临时路径：' + res.tempFilePaths[0])
        wx.uploadFile({
          url: 'http://124.70.130.61:80/predict',
          filePath: res.tempFilePaths[0],
          //header:{"chartset":"gbk"},
          header: {
            "content-type": "multipart/form-data",
            "content-type": "application/x-www-form-urlencoded"
          },

          name: 'file',

          success: function (res) {
            console.log(JSON.parse(res.data))
            that.setData({
              con: JSON.parse(res.data),
              modalName: "bottomModal"
            })
            wx.showToast({
              title: '识别成功',
              icon: 'success',
              mask: true,
              duration: 800,
            })
          },

        })
        // uploadFile的结束

      },
      fail: function () {

      },
      complete: function () {
        // complete
      }
    })
    // chooseImage的结束
  },

  hideModal(e) {
    this.setData({
      modalName: null,
      imgModalName: null
    })
  },

  chocie1(e) {
    this.setData({
      imgModalName: "Image1"
    })
  },


  chocie2(e) {
    this.setData({
      imgModalName: "Image2"
    })
  },


  chocie3(e) {
    this.setData({
      imgModalName: "Image3"
    })
  },


})