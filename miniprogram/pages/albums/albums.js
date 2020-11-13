const app = getApp()
const db = wx.cloud.database()
const _ = db.command;

Page({
    data: {
        photo: []
    },
    onLoad(options) {
        wx.showLoading({
            title: '初始化中',
            mask: true
        });
    },
    onShow() {
        this.init();
    },
    async init() {
        //1. 从用户集合中取出当前用户信息
        let result = await db.collection('cloudImg').get();
        console.log('result:', result)
        if (result.data.length == 0) {
            // 当前用户第一次登录，集合中无用户信息，插入当前用户信息记录，并在全局存储docId
            app.globalData.id = (await db.collection('cloudImg').add({
                data: {
                    photo: []
                }
            }))._id;
        } else {
            // 能取到当前用户信息，直接取出用户的照片数据进行渲染
            app.globalData.id = result.data[0]._id;
            this.setData({
                photo: result.data[0].photo
            })
        }
        wx.hideLoading();
    },
    // 跳转照片详情
    todetail(e) {        
        app.globalData.currentPhoto = this.data.photo[e.currentTarget.dataset.index];
        wx.navigateTo({
            url: '/pages/cloudImg/cloudImg',
        })
    },
    // 选择照片
    chooseImage: function () {
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                console.log('res:', res)
                this.uploadImage(res.tempFilePaths);
            }
        })
    },
    // 上传照片
    uploadImage: function (imgs) {
        wx.showLoading({
            title: '上传图片中',
            mask: true
        })
        // TODO 照片上传至云存储
        const uploadTasks = imgs.map(item => {
            return wx.cloud.uploadFile({
                cloudPath: `photos/${Date.now()}-${Math.floor(Math.random(0,1)*1000)}.png`,
                filePath: item
            })
        });
        Promise.all(uploadTasks).then(result => {
            this.addPhotos(result);
        }).catch(err => {
            wx.hideLoading();
            wx.showToast({
                title: '上传图片错误',
                icon: 'error'
            })
        })
    },
    // 添加图片数据至数据库
    addPhotos(photos) {
        wx.showLoading({
            title: '添加图片中',
            mask: true
        })
        // 构造照片数据结构体，保存到数据库
        const albumPhotos = photos.map(photo => ({
            fileID: photo.fileID,
            comments: ''
        }));
        db.collection('cloudImg').doc(app.globalData.id).update({
            data: {
                photo: _.push(albumPhotos)
            }
        }).then(result => {
            console.log(result);
            this.init();
        })
    },
    // 删除图片
    removeImage(e) {
        const that = this
        wx.showModal({
            title: '提示',
            content: '是否要删除该图片',
            success(res) {
                if (res.confirm) {
                    wx.showLoading({
                        title: '删除中',
                        mask: true
                    })
                    // TODO 照片删除功能
                    db.collection('cloudImg').doc(app.globalData.id).update({
                        data: {
                            photo: _.pull({
                                fileID: that.data.photo[e.currentTarget.dataset.index].fileID
                            })
                        }
                    }).then(result => {
                        console.log(result);
                        wx.cloud.deleteFile({
                            fileList: [that.data.photo[e.currentTarget.dataset.index].fileID]
                        }).then(res=>{
                            that.init();
                        });
                    })
                }
            }
        })
    }
})