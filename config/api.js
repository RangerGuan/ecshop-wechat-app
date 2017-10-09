var serverUrl = 'http://127.0.0.1:8360/api/';

module.exports = {
    IndexUrl: serverUrl + 'index/index', //首页数据接口
    CatalogList: serverUrl + 'catalog/index',  //分类目录全部分类数据接口
    CatalogCurrent: serverUrl + 'catalog/current',  //分类目录当前分类数据接口

    AuthLoginByWeixin: serverUrl + 'auth/loginByWeixin', //微信登录

    GoodsCount: serverUrl + 'goods/count',  //统计商品总数
    GoodsList: serverUrl + 'goods/list',  //获得商品列表
    GoodsCategory: serverUrl + 'goods/category',  //获得分类数据
    GoodsDetail: serverUrl + 'goods/detail',  //获得商品的详情
    GoodsNew: serverUrl + 'goods/new',  //新品
    GoodsHot: serverUrl + 'goods/hot',  //热门
    GoodsRelated: serverUrl + 'goods/related',  //商品详情页的关联商品（大家都在看）

    BrandList: serverUrl + 'brand/list',  //品牌列表
    BrandDetail: serverUrl + 'brand/detail',  //品牌详情

    CartList: serverUrl + 'cart/index', //获取购物车的数据
    CartAdd: serverUrl + 'cart/add', // 添加商品到购物车
    CartUpdate: serverUrl + 'cart/update', // 更新购物车的商品
    CartDelete: serverUrl + 'cart/delete', // 删除购物车的商品
    CartChecked: serverUrl + 'cart/checked', // 选择或取消选择商品
    CartGoodsCount: serverUrl + 'cart/goodscount', // 获取购物车商品件数
    CartCheckout: serverUrl + 'cart/checkout', // 下单前信息确认

    OrderSubmit: serverUrl + 'order/submit', // 提交订单
    PayPrepayId: serverUrl + 'pay/payPrepay', //获取微信统一下单prepay_id

    CollectList: serverUrl + 'collect/list',  //收藏列表
    CollectAddOrDelete: serverUrl + 'collect/addordelete',  //添加或取消收藏

    CommentList: serverUrl + 'comment/list',  //评论列表
    CommentCount: serverUrl + 'comment/count',  //评论总数
    CommentPost: serverUrl + 'comment/post',   //发表评论

    TopicList: serverUrl + 'topic/list',  //专题列表
    TopicDetail: serverUrl + 'topic/detail',  //专题详情
    TopicRelated: serverUrl + 'topic/related',  //相关专题

    SearchIndex: serverUrl + 'search/index',  //搜索页面数据
    SearchResult: serverUrl + 'search/result',  //搜索数据
    SearchHelper: serverUrl + 'search/helper',  //搜索帮助
    SearchClearHistory: serverUrl + 'search/clearhistory',  //搜索帮助

    AddressList: serverUrl + 'address/list',  //收货地址列表
    AddressDetail: serverUrl + 'address/detail',  //收货地址详情
    AddressSave: serverUrl + 'address/save',  //保存收货地址
    AddressDelete: serverUrl + 'address/delete',  //保存收货地址

    RegionList: serverUrl + 'region/list',  //获取区域列表

    OrderList: serverUrl + 'order/list',  //订单列表
    OrderDetail: serverUrl + 'order/detail',  //订单详情
    OrderCancel: serverUrl + 'order/cancel',  //取消订单

    FootprintList: serverUrl + 'footprint/list',  //足迹列表
    FootprintDelete: serverUrl + 'footprint/delete',  //删除足迹
};