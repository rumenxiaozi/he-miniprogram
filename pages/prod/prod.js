var app = getApp()
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    compTypes: [],
    prodList: [],
    filterProdList: [],
    curNav: 0,
    curIndex: 0,
    curCompType: "c0",
    curCompTypeIndex: 0,

    scrollHeight: wx.getSystemInfoSync().windowHeight,
  },
  onLoad: function () {

    var that = this;

    that.setData({
      navLeftItems: [
        { "id": 0, name: "全部", daiCode: 'ALL' },
        { "id": 1, name: "生意贷", daiCode: 'SYD' },
        { "id": 2, name: "税票贷", daiCode: 'SPD' },
        { "id": 3, name: "房产一抵", daiCode: 'FCYD' },
        { "id": 4, name: "房产二抵", daiCode: 'FCED' },
        { "id": 5, name: "按揭房放大", daiCode: 'AJFFD' },
        { "id": 6, name: "全款房信贷", daiCode: 'QKFXD' },
        { "id": 7, name: "合同房信贷", daiCode: 'HTFXD' },
        { "id": 8, name: "装修贷", daiCode: 'ZXD' },
        { "id": 9, name: "全款车一抵", daiCode: 'QKCYD' },
        { "id": 10, name: "全款车信贷", daiCode: 'QKCXD'},
      ],
      compTypes: [
        { "id": "c0", compName: "全部", compCode: "ALL" },
        { "id": "c1", compName: "银行", compCode: "YH"},
        { "id": "c2", compName: "消费金融", compCode: 'XFJR'},
        { "id": "c3", compName: "信保", compCode: 'XB'},
        { "id": "c4", compName: "小贷", compCode: 'XD'},
        { "id": "c5", compName: "P2P", compCode: 'P2P'},
      ],
      prodList : [
        { "id": "p0", prodName: "中国银行", desc: '中国银行 (BANK OF CHINA, 简称BOC，中行) 经孙中山...', compCode: 'YH' },
        { "id": "p1", prodName: "平安银行", compCode: 'YH' },
        { "id": "p2", prodName: "建设银行", compCode: 'YH' },
        { "id": "p3", prodName: "成都银行", compCode: 'YH' },
        { "id": "p4", prodName: "农业银行", compCode: 'YH' },
        { "id": "p5", prodName: "中银消费", compCode: 'XFJR' },
        { "id": "p6", prodName: "锦城消费", compCode: 'XFJR' },
        { "id": "p7", prodName: "兴业消费", compCode: 'XFJR' },
        { "id": "p8", prodName: "中邮消费", compCode: 'XFJR' },
        { "id": "p9", prodName: "湖北消费", compCode: 'XFJR' },
        { "id": "p10", prodName: "平安普惠", compCode: 'XB' },
        { "id": "p11", prodName: "大地保险", compCode: 'XFJR' },
        { "id": "p12", prodName: "人保保险", compCode: 'XFJR' },
        { "id": "p12", prodName: "阳光保险", compCode: 'XFJR' },
        { "id": "p13", prodName: "太平洋保险", compCode: 'XFJR' },
        { "id": "p14", prodName: "亚联财小贷", compCode: 'XD' },
        { "id": "p15", prodName: "富登小贷", compCode: 'XD' },
        { "id": "p16", prodName: "邦信小贷", compCode: 'XD' },
        { "id": "p17", prodName: "美兴小贷", compCode: 'XD' },
        { "id": "p18", prodName: "瀚华小贷", compCode: 'XD' },
        { "id": "p19", prodName: "友信惠普", compCode: 'P2P' },
        { "id": "p20", prodName: "华夏信财", compCode: 'P2P' },
        { "id": "p21", prodName: "中腾信", compCode: 'P2P' },
        { "id": "p22", prodName: "厚冠", compCode: 'P2P' },
      ],
    })

    // wx.request({
    //   url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       navLeftItems: res.data,
    //       navRightItems: res.data
    //     })
    //   }
    // })
  },

  //事件处理函数
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  switchCompType: function (e) {
    let id = e.target.id,
      index = parseInt(e.target.dataset.index),
      compCode = e.target.dataset.compcode,
      prodList = this.data.prodList;
      
    let filterProdList = [];
    if(compCode == 'ALL') {
      filterProdList = prodList;
    } else {
      filterProdList = prodList.filter(prod => prod.compCode === compCode);
    }

    this.setData({
      curCompType: id,
      curCompTypeIndex: index,
      filterProdList: filterProdList
    })
  }

})