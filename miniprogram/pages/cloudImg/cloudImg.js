// pages/detail/detail.js
const app= getApp()
const db = wx.cloud.database()
const _ = db.command;
var that = null;
Page({
  onLoad(){
    that = this;
    that.setData(app.globalData.currentPhoto);
  },
  getcomments: function(e){
    that.setData({
      comments:e.detail.value
    });
  },
  // 预览图片大图
  previewImage: function() {
    wx.previewImage({
        urls: [that.data.fileID]
    })
  },
  // 保存评论数据至数据库
  saveComment: function(){
    //TODO 照片评论功能
    db.collection('cloudImg').doc(app.globalData.id).update({
      data:{
        photo:_.pull({
            fileID:that.data.fileID
        })
      }
    }).then(result=>{
      db.collection('cloudImg').doc(app.globalData.id).update({
        data:{
          photo:_.push({
              fileID:that.data.fileID,
              comments:that.data.comments
          })
        }
      }).then(res=>{
        console.log(result);
        wx.showToast({
          title: '保存成功'
        });
      })
    })
  }
})