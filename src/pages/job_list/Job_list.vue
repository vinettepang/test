<config>
{
    "navigationBarTitleText": ""
}
</config>

<template lang="wxml">
    <view id='findJob'>
      <view class='section'>
        <!-- 求职导航 -->
        <view class='navbar'>
            <view
                class='item {{ tabIndex == 0 ? "active" : "" }}'
                data-index='0'
                bindtap='selectTabIndex'
            >
                <text class='text'>求职列表</text>
            </view>
            <view class='item {{ tabIndex == 1 ? "active" : "" }}' data-index='1'
            bindtap='selectTabIndex'>
            <text class='text'>我的订阅</text>
            </view>
          <!-- <view  class='item {{ tabIndex == 1 ? "active" : "" }}' >
            <button class='btn-getUserInfo' open-type="getUserInfo" bindgetuserinfo="userInfoHandler" data-index='1'>
              <text class='text'>我的求职</text>
            </button>
          </view> -->
          <view class='slider' style='transform: translateX({{ tabIndex == 1 ? 372 / rpxRatio : 0 }}px);'></view>
        </view>
        <!-- 求职列表 -->
        <view id='findJob_list' class="job_list" wx:if='{{tabIndex == 0}}'>
          <!-- 选择类别 -->
            <view class='selectType'>
                <view class='comType'>
                    <view class='top'>
                        <radio-group class='radio-group' bindchange='updataComType'>
                            <label class='radio' wx:for='{{comType}}' wx:key='{{item.id}}'>
                                <radio
                                    class='radioItem'
                                    color="#9085e7"
                                    value='{{item.id}}'
                                    checked='{{item.id == selectedData[5].id}}'
                                />{{item.name}}
                            </label>
                        </radio-group>
                        <view class='more-btn' bindtap='showSelectMore'>{{ selectMoreName }}</view>
                    </view>

                  <!-- 选中筛选的内容 -->
                  <view class='selected' style='padding-bottom: {{selectTypeDetail_state ? 10 : 0}}rpx'
                   wx:if='{{selectedData[0].id + selectedData[1].id + selectedData[2].id + selectedData[3].id + selectedData[4].id}}'>
                    <view class='selectedItem' wx:for='{{selectedData}}' wx:key='{{item.id}}' wx:if='{{item.value}}'
                    data-index='{{index}}' bindtap='closeSelectedItem'>
                      {{item.value}}
                      <icon class='nc-icon nc-simple-remove'></icon>
                    </view>
                  </view>

                  <!-- 更多筛选内容 -->
                  <view class='detail' hidden='{{selectTypeDetail_state}}'>
                    <view class='detailWrapper'>
                      <view class='item'>
                        <text class='title'>行业：</text>
                        <view class='list' id='iduItem' style='height: {{iduHeight ? "auto" : "72rpx"}}'>
                          <text class='listItem {{selectedData[0].id == item.id ? "active" : ""}}'
                          wx:for='{{iduType}}' wx:key='{{item.id}}' data-id='{{item.id}}'
                          bindtap='updataIdu_check'>{{item.name}}</text>
                        </view>
                        <icon class='showMore-btn nc-icon {{iduHeight ? "nc-circle-delete" : "nc-circle-add"}}'
                        hidden='{{iduShowMore_btn}}' bindtap='selectItem_showMore' data-id='{{0}}'></icon>
                      </view>

                      <view class='item'>
                        <text class='title'>城市：</text>
                        <view class='list' id='cityItem' style='height: {{cityHeight ? "auto" : "72rpx"}}'>
                          <text class='listItem {{selectedData[1].id == item.id ? "active" : ""}}'
                          wx:for='{{cityType}}' wx:key='{{item.id}}' data-id='{{item.id}}'
                          bindtap='updataCity_check'>{{item.name}}</text>
                        </view>
                        <icon class='showMore-btn nc-icon {{cityHeight ? "nc-circle-delete" : "nc-circle-add"}}'
                        hidden='{{cityShowMore_btn}}' bindtap='selectItem_showMore' data-id='{{1}}'></icon>
                      </view>

                      <view class='item'>
                        <text class='title'>职位：</text>
                        <view class='list' id='positionItem' style='height: {{positionHeight ? "auto" : "72rpx"}}'>
                          <text class='listItem {{selectedData[2].id == item.id ? "active" : ""}}'
                          wx:for='{{positionType}}' wx:key='{{item.id}}' data-id='{{item.id}}'
                          bindtap='updataPosition_check'>{{item.name}}</text>
                        </view>
                        <icon class='showMore-btn nc-icon {{positionHeight ? "nc-circle-delete" : "nc-circle-add"}}'
                        hidden='{{positionShowMore_btn}}' bindtap='selectItem_showMore' data-id='{{2}}'></icon>
                      </view>
                      <view class='item'>
                        <text class='title'>只看官方校招：</text>
                        <view class='list' style='height: 72rpx'>
                          <text class='listItem {{selectedData[3].id == 0 ? "active" : ""}}' data-id='0'
                          bindtap='updataSchool_check'>否</text>
                          <text class='listItem {{selectedData[3].id == 1 ? "active" : ""}}' data-id='1'
                          bindtap='updataSchool_check'>是</text>
                        </view>
                      </view>
                      <!-- <view class=' item'>
                        <text class='title'>只看有内推：</text>
                        <view class='list' style='height: 72rpx'>
                          <text class='listItem {{selectedData[4].id == 0 ? "active" : ""}}'
                          data-id='0' bindtap='updataInternal_check'>否</text>
                          <text class='listItem {{selectedData[4].id == 1 ? "active" : ""}}'
                          data-id='1' bindtap='updataInternal_check'>是</text>
                        </view>
                      </view> -->
                    </view>
                  </view>
                </view>
            </view>

          <!-- 公司列表 -->
            <view class="companyList">
                <company-item
                tip-num='{{tip_num}}'
                company-list='{{companyData}}'
                tip-index='{{tipIndex}}'
                close-tip='{{closeTipState}}'
                bindrefresh="onRefresh_job_list"
                ></company-item>

            <view
            class='emptyDataView' wx:if='{{emptyDataView_state == 0}}'
            style='height: {{970 - selectType_height * 2}}rpx'>
              <view class='emptyWrapper'>
                 <image src='../../src/images/empty.png'></image>
                <view class='text'>暂无数据</view>
              </view>
            </view>

            <view class='page_loading' hidden='{{page_loading}}'>
              加载中<icon class='loading_icon nc-icon nc-dots-05'></icon>
            </view>

            <view class='loading_more' hidden='{{loadingState}}'>
              <icon class='loading_icon nc-icon nc-dots-05'></icon>
              查看更多
            </view>
            <view class='loading_more_block' hidden='{{noMoreloadingState}}'><view class='loading_more_block_text'>©2018 icebear</view></view>
          </view>
        </view>

        <!-- 我的求职 -->
        <view id='my_findJob' wx:if='{{tabIndex == 1}}'>
          <!-- 创建自己的专属订阅 -->
          <!-- <view class='createSub' wx:if='{{create_sub_state}}'>
            <view class='row'>
              <text class='about'>创建自己的专属订阅，第一时间获取求职信息。</text>
              <navigator url='./createSub' class='create-btn' open-type='navigate'>开始创建</navigator>
            </view>
          </view> -->

          <!-- 关注公众号的banner -->
          <!-- <view class='instantNew' wx:if='{{instantNew_state}}'>
            <view class='new_content'>关注公众号「白熊小助手」，及时收到求职订阅提醒。</view>
            <navigator url='/pages/job/focus_wx' class='new_btn focus_btn'>开启提醒</navigator>
          </view> -->

        <view
            class='created-box'
            wx:if="{{!loginAuth || create_sub_state}}"
        >
            <view class='title'>创建求职订阅</view>
            <view class='created-box-body'>
                <view class='created-icon'>
                    <image src='../../src/images/pencil@2x.png'></image>
                </view>
                <text class='text'>我们会根据你的设定，第一时间推送最新职位给你。</text>
            </view>
            <button class='btn-w560 btn-secondary'
            open-type="getUserInfo" bindgetuserinfo="createSubHandler">
                <text class='text'>点击创建</text>
            </button>
        </view>

          <!-- 相关订阅 -->
           <!-- <scroll-view class='subTags' scroll-x='true' wx:if="{{loginAuth && !create_sub_state}}">
            <text class='tagItem {{subTagCheck_index == item.id ? "active" : ""}}'
            wx:for='{{subTags}}' wx:if='{{index<3}}' wx:key='{{item.id}}' data-id='{{item.id}}'
            bindtap='updataSubTag_check'>{{item.tag_name}}</text>

             <text class='tagItem {{myCollectState ? "active" : ""}}' bindtap='get_my_collect'>我的收藏</text>

            <text class='tagItem {{subTagCheck_index == item.id ? "active" : ""}}'
            wx:for='{{subTags}}' wx:if='{{index>=3}}' wx:key='{{item.id}}' data-id='{{item.id}}'
            bindtap='updataSubTag_check'>{{item.tag_name}}</text>
          </scroll-view>  -->
        <view class='subTags-list' wx:if="{{loginAuth && !create_sub_state}}">
            <view wx:for='{{subTags}}' wx:if='{{index<3}}' wx:key='{{item.id}}' data-id='{{item.id}}'
              bindtap='updataSubTag_check' class='tagItem {{subTagCheck_index == item.id ? "active" : ""}}' >
              <text class='tagItem-text'
              >{{item.tag_name}}</text>
              <icon class='icon-reddot' wx:if='{{index==0 && job_red_point}}'></icon>
            </view>
        </view>

          <!-- 公司列表 -->
          <view class="companyList {{my_page_loading ? '' : 'my_page_loading'}}" wx:if="{{loginAuth && !create_sub_state}}">
             <company-item company-list="{{myCompanyData}}"></company-item>
            <view class='page_loading' hidden='{{my_page_loading}}'>
              加载中<icon class='loading_icon nc-icon nc-dots-05'></icon>
            </view>
            <view class='emptyDataView' wx:if='{{my_emptyDataView_state == 0}}'>
              <view class='emptyWrapper'>
                 <image src='../../src/images/empty.png'></image>
                <view class='text'>暂无数据</view>
              </view>
            </view>
             <view class='loading_more' hidden='{{my_loadingState}}'>
              <icon class='loading_icon nc-icon nc-dots-05'></icon>
              查看更多
            </view>
             <view class='loading_more_block' hidden='{{my_noMoreloadingState || !my_emptyDataView_state}}'><view class='loading_more_block_text'>©2018 icebear</view></view>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
import { API } from '@const'
import { _get,_post } from '@utils'
export default {
    data () {
        return {
            selectTypeDetail_state: true, //默认收起筛选=
            selectMoreName: '更多筛选', //初始化筛选按钮文案
            // 行业、城市、职位类别的高度     false高度为72rpx      true为auto
            iduHeight: false,
            cityHeight: false,
            positionHeight: false,
            iduShowMore_btn: true,
            cityShowMore_btn: true,
            positionShowMore_btn: true,
            loadingState: true, //加载状态
            my_loadingState: true, //加载状态
            page_loading: false, //页面数据加载状态
            tabIndex: 0, //tab选项卡的下标
            emptyDataView_state: 1, //求职列表空数据的显示
            my_emptyDataView_state: 1, //我的求职空数据的显示
            list_page: 1, //页码
            list_prevPage: 1, //页码
            my_page: 1, //页码
            my_prevPage: 1, //页码
            col_page: 1, //页码
            col_prevPage: 1, //页码
            list_filter: '', //岗位列表filter
            my_filter: 0, //我的求职的filter
            selectType_height: 0, //筛选框的高度
            query: '', //选择器
            job_red_point:false, //是否有红点
            //类别选中的内容
            selectedData: [{ id: 0, value: '' },
            { id: 0, value: '' },
            { id: 0, value: '' },
            { id: 0, value: '' },
            { id: 0, value: '' },
            { id: 0, value: '' }],
            //公司类别
            comType: [{
                id: 0,
                name: '全部'
            },{
                id: 1,
                name: '全职'
            },{
                id: 2,
                name: '实习'
            }],
            //行业类别
            iduType: [{
              id: 0,
              name: '不限'
            }],
            //城市类别
            cityType: [{
              id: 0,
              name: '不限'
            }],
            //职位类别
            positionType: [{
              id: 0,
              name: '不限'
            }],
            companyData: [], //公司数据
            subTagCheck_index: 0, //订阅标签的选中值
            subTags: [], //订阅标签数据
            myCompanyData: [], //公司数据
            create_sub_state: false, //是否渲染创建自己的专属订阅
            //instantNew_state: 0, //是否渲染关注公众号的banner
            tipIndex: 0, //tipIndex的初始值
            closeTipState: true, //关闭提示框的初始值
            tip_num: 0,
            myCollectState: false,
            sliderOffset: 0,
            pixelRatio: 2, //设备像素比、图片的设备像素比
            rpxRatio: 2, //设备像素比、图片的设备像素比
            noMoreloadingState: true, //没有加载更多了
            my_noMoreloadingState: true, //我的没有加载更多了
            API,
        }
    },
    computed: {},
    watch: {},
    methods: {
        //检测用户是否创建过我的订阅
  checkUserSub(){
    let _ = this
    if (_.data.create_sub_state){
      return
    }
    _post('/api/job_my_subscribe', {}, function (res) {
      if (res.code) {
        if (res.data.is_new == 0) {
          _.setData({
            tabIndex: 1,
            create_sub_state: false,
          })
          _.clickTabIndex(_.data.my_filter)
          // _.get_job_my_tag_list()
          // _.getMySubscribeRed()
          // _.get_job_list_by_tag_id(_.data.my_filter)
        }else{
          _.setData({
            create_sub_state: true,
          })
          _.get_job_list(_.data.list_filter)
        }
      }
    })
  },
  //导航
  selectTabIndex(e, type) {
    let _ = this
    let index = typeof (e) == 'object' ? parseInt(e.currentTarget.dataset.index) : e
    //this.addTip_num()
    //回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0
      })
    }
    if (index == 1) {
      _.setData({
        tabIndex: index
      })
      if (app.checkSessionUser()){
        _.setData({
          loginAuth: true
        })
        _.checkUserSub()
      }
    } else if (index == 0) {
      _.setData({
        tabIndex: index
      })
      _.get_job_list_filter()
      _.get_job_list(_.data.list_filter)
    }
  },
  //点击创建我的订阅触发登录事件
  createSubHandler(res){
    let _ = this
    app.checkUser(res, function () {
      _post('/api/job_my_subscribe', {}, function (res) {
        if (res.code === 1) {
          if (res.data.is_new){
            wx.navigateTo({
              url: './createSub',
            })
          }else{
            _.clickTabIndex(_.data.my_filter)
            // _.get_job_my_tag_list()
            // _.getMySubscribeRed()
            // _.get_job_list_by_tag_id(_.data.my_filter)
            _.setData({
              loginAuth:true,
              create_sub_state: true,
            })
          }
        }
      })
    })
  },
  //获取小程序进入求职列表的次数
  // addTip_num() {
  //   let tip_num = wx.getStorageSync('jobList_tip_num')
  //   if (tip_num === '') {
  //     wx.setStorage({
  //       key: 'jobList_tip_num',
  //       data: 1,
  //     })
  //   } else {
  //     tip_num++
  //     wx.setStorage({
  //       key: 'jobList_tip_num',
  //       data: tip_num
  //     })
  //   }

  //   this.setData({
  //     tip_num: wx.getStorageSync('jobList_tip_num')
  //   })
  // },
  //获取tipIndex的初始值
  tipIndex_init(data) {
    let index = 0
    for (var item of data) {
      if (item.subTags.length === 0) {
        index++
      } else {
        break;
      }
    }
    this.setData({
      tipIndex: index
    })
  },
  //获取所有岗位列表信息
  get_job_list(filter) {
    let _this = this
    let new_filter = filter != undefined ? filter : ''
    let companyData = this.data.companyData
    _post('/api/job_list', { page: 1, filter: filter }, function (res) {
      if (res.code) {
        _this.setData({
          page_loading: true,
          companyData: res.data.list,
          emptyDataView_state: res.data.list.length
        })
        if (res.data.total_page >= 2) {
          _this.setData({
            list_page: 2,
            list_prevPage: 1,
            loadingState: false
          })
        } else {
          _this.setData({
            list_page: 1,
            list_prevPage: 1,
            loadingState: true
          })
        }
        _this.tipIndex_init(res.data.list)
      }
    })
  },
  //筛选岗位信息
  filter_job_list(data) {
    let _ = this
    let newData = []
    let filter = ''

    data.forEach(function (item, index) {
      if (index < 3) {
        newData[index] = item.id
      }
    })

    newData[3] = data[5].id
    newData[4] = 0
    newData[5] = 1
    newData[6] = ''

    data[3].id === 1 ? newData[4] = 2 : newData[4] = newData[4]
    data[4].id === 1 ? newData[4] = 1 : newData[4] = newData[4]

    filter = newData.join('!')
    //_postLoading('/api/job_list', { filter: filter }, '加载中', 'post', function (res) {
    _post('/api/job_list', { filter: filter }, function (res) {
      if (res.code === 1) {
        _.setData({
          page_loading:true,
          companyData: res.data.list,
          emptyDataView_state: res.data.list.length
        })
        if (res.data.total_page >= 2) {
          _.setData({
            list_page: 2,
            list_prevPage: 1,
            loadingState: false
          })
        } else {
          _.setData({
            list_page: 1,
            list_prevPage: 1,
            loadingState: true
          })
        }
        _.change_closeTipState(false)
      }
    })

    this.setData({
      list_filter: filter
    })
  },
  //获取顶部过滤器数据
  get_job_list_filter() {
    let _this = this
    const cityType = [{
      id: 0,
      name: '不限'
    }]
    const iduType = [{
      id: 0,
      name: '不限'
    }]
    const positionType = [{
      id: 0,
      name: '不限'
    }]
    _post('/api/job_list_filter', {}, function (res) {
      if (res.code == 1) {
        let city_list = cityType.concat(res.data.city_list)
        let industry_list = iduType.concat(res.data.industry_list)
        let position_list = positionType.concat(res.data.position_list)

        _this.setData({
          iduType: industry_list,
          cityType: city_list,
          positionType: position_list
        })
      } else {
        wx.showToast({
          title: '无法获取数据',
          icon:'none',
        })
      }
    })
  },
  //类别初始化
  select_init: function () {
    this.setData({
      selectMoreName: this.data.selectTypeDetail_state ? '更多筛选' : '收起筛选'
    })
  },
  //更多筛选
  showSelectMore: function (e) {
    this.setData({
      selectTypeDetail_state: !this.data.selectTypeDetail_state,
      selectMoreName: this.data.selectTypeDetail_state ? '收起筛选' : '更多筛选'
    });

    // let query = wx.createSelectorQuery();
    // this.selectHidden_init(query.selectAll('#iduItem .listItem'), 0)
    // this.selectHidden_init(query.selectAll('#cityItem .listItem'), 1)
    // this.selectHidden_init(query.selectAll('#positionItem .listItem'), 2)
    // this.get_selectType_height()
  },
  //初始化帅选里面的类别过多自动隐藏
  selectHidden_init: function (el, index) {
    let _ = this;

    el.boundingClientRect().exec(function (res) {
      let allWidth = 0;
      res[0].forEach(function (item, index) {
        allWidth += item.width + 6
      })
      if (allWidth > 278) {
        if (index == 0) {
          _.setData({
            iduShowMore_btn: false
          })
        } else if (index == 1) {
          _.setData({
            cityShowMore_btn: false
          })
        } else if (index == 2) {
          _.setData({
            positionShowMore_btn: false
          })
        }
      }
    })
  },
  //显示  自动隐藏的类别item
  selectItem_showMore: function (e) {
    let index = e.currentTarget.dataset.id
    if (index == 0) {
      this.setData({
        iduHeight: !this.data.iduHeight
      })
    } else if (index == 1) {
      this.setData({
        cityHeight: !this.data.cityHeight
      })
    } else if (index == 2) {
      this.setData({
        positionHeight: !this.data.positionHeight
      })
    }
  },
  //更新类别、行业、城市、职位、只看校招、只看内推的选中值 ---
  updataSelectedData: function (e, type, index) {
    let id = e.currentTarget.dataset.id;
    let selectedData = this.data.selectedData;
    let _ = this;

    type.forEach(function (item) {
      if (item.id == id) {
        if (id != 0) {
          selectedData[index].value = item.name;
        } else {
          selectedData[index].value = '';
        }
        selectedData[index].id = id
        _.setData({
          selectedData: selectedData
        })
        _.filter_job_list(_.data.selectedData)
      }
    })
    //this.get_selectType_height()
  },
  updataIdu_check: function (e) {
    this.updataSelectedData(e, this.data.iduType, 0)
  },
  updataCity_check: function (e) {
    this.updataSelectedData(e, this.data.cityType, 1)
  },
  updataPosition_check: function (e) {
    this.updataSelectedData(e, this.data.positionType, 2)
  },
  updataSchool_check: function (e) {
    let selectedData = this.data.selectedData
    let id = e.currentTarget.dataset.id

    if (id == 1) {
      selectedData[3].value = '只看校招'
      selectedData[3].id = 1
    } else {
      selectedData[3].value = ''
      selectedData[3].id = 0
    }

    this.setData({
      selectedData: selectedData
    })

    this.filter_job_list(this.data.selectedData)
    //this.get_selectType_height()
  },
  updataInternal_check: function (e) {
    let selectedData = this.data.selectedData
    let id = e.currentTarget.dataset.id

    if (id == 1) {
      selectedData[4].value = '只看内推'
      selectedData[4].id = 1
    } else {
      selectedData[4].value = ''
      selectedData[4].id = 0
    }

    this.setData({
      selectedData: selectedData
    })
    this.filter_job_list(this.data.selectedData)
    //this.get_selectType_height()
  },
  //更新行业、城市、职位、只看校招、只看内推的选中值 ---
  //关闭选中值
  closeSelectedItem: function (e) {
    let index = e.currentTarget.dataset.index
    let selectedData = this.data.selectedData
    selectedData[index].value = ''
    selectedData[index].id = 0
    this.setData({
      selectedData: selectedData
    })
    this.filter_job_list(this.data.selectedData)
    //this.get_selectType_height()
  },
  //更新公司类别
  updataComType(e) {
    let selectedData = this.data.selectedData
    selectedData[5].id = parseInt(e.detail.value)
    this.setData({
      selectedData: selectedData
    })
    this.filter_job_list(this.data.selectedData)
  },
  //滚动到底部加载数据
  onReachBottom(e) {
    let list_page = this.data.list_page
    let list_prevPage = this.data.list_prevPage
    let list_filter = this.data.list_filter
    let my_page = this.data.my_page
    let my_prevPage = this.data.my_prevPage
    let my_filter = this.data.my_filter
    let myCollectState = this.data.myCollectState
    let col_page = this.data.col_page
    let col_prevPage = this.data.col_prevPage
    let _this = this

    let tab_index = parseInt(this.data.tabIndex)

    //tab_index：0为求职列表 1为我的求职
    if (tab_index === 0) {
      if (list_page >= 2) {
        // this.setData({
        //   loadingState: false
        // })
        _post('/api/job_list', { page: list_page, filter: list_filter }, function (res) {
          if (res.code === 1 && list_page > list_prevPage) {
            let companyData = _this.data.companyData
            _this.setData({
              companyData: companyData.concat(res.data.list),
              list_prevPage: list_page
            })
          }
          if (list_page < res.data.total_page) {
            _this.setData({
              list_page: list_page + 1
            })
          } else {
            _this.setData({
              list_page: list_prevPage,
              loadingState: true,
              noMoreloadingState:false
            })
          }
        })
      }

    } else if (tab_index === 1) {
      if (my_page >= 2 || col_page >= 2) {
        // this.setData({
        //   my_loadingState: false
        // })
        _post('/api/get_job_list_by_tag_id', { page: my_page, tag_id: my_filter }, function (res) {
          if (res.code === 1 && my_page > my_prevPage) {
            let myCompanyData = _this.data.myCompanyData
            _this.setData({
              myCompanyData: myCompanyData.concat(res.data.list),
              my_prevPage: my_page
            })
          }
          if (my_page < res.data.total_page) {
            _this.setData({
              my_page: my_page + 1
            })
          } else {
            _this.setData({
              my_page: my_prevPage,
              my_loadingState: true,
              my_noMoreloadingState: false
            })
          }
        })
      }
    }
  },
  //我的求职的相关方法
  //获取我的订阅标签列表
  get_job_my_tag_list: function () {
    let _this = this

    _post('/api/job_my_tag_list', {}, function (res) {
      if (res.code === 1) {
        _this.setData({
          subTags: res.data.tag_list,
          create_sub_state: res.data.my_subscribe.is_empty
        })
      }
    })
  },
  //获取我的求职列表
  get_job_list_by_tag_id: function (id) {
    let filter = id != undefined ? id : 0
    let myCompanyData = this.data.myCompanyData
    let _this = this

    this.setData({
      subTagCheck_index: filter
    })


    if (myCompanyData.length === 0) {
      //_postLoading('/api/get_job_list_by_tag_id', { tag_id: filter }, '加载中', 'post', function (res) {
      _post('/api/get_job_list_by_tag_id', { tag_id: filter }, function (res) {
        if (res.code) {
          _this.setData({
            my_page_loading: true,
            myCompanyData: res.data.list,
            my_emptyDataView_state: res.data.list.length
          })
          if (res.data.total_page >= 2) {
            _this.setData({
              my_page: 2,
              my_prevPage: 1,
              my_loadingState: false
            })
          } else {
            _this.setData({
              my_page: 1,
              my_prevPage: 1,
              my_loadingState: true,
              my_noMoreloadingState: false
            })
          }
        }
      })
    } else {
      _post('/api/get_job_list_by_tag_id', { tag_id: filter }, function (res) {
        if (res.code === 1) {
          _this.setData({
            myCompanyData: res.data.list,
            my_emptyDataView_state: res.data.list.length
          })
          if (res.data.total_page >= 2) {
            _this.setData({
              my_page: 2,
              my_prevPage: 1,
              my_loadingState: false
            })
          } else {
            _this.setData({
              my_page: 1,
              my_prevPage: 1,
              my_loadingState: true,
              my_noMoreloadingState: false
            })
          }
        }
      })
    }

  },
  //check是否关注微信公众号
  // check_weixin_subscribe: function () {
  //   let _this = this
  //   //let instantNew_state = 1

  //   _post('/api/check_weixin_subscribe', {}, function (res) {
  //     if (res.code === 1) {
  //       _this.setData({
  //         //instantNew_state: !res.data
  //       })
  //     }
  //   }, function (res) {
  //     console.log(res)
  //   })
  // },
  //更新订阅标签的选中值
  updataSubTag_check: function (e) {
    let id = e.currentTarget.dataset.id
    let _this = this

    _this.setData({
      subTagCheck_index: id,
      my_filter: id,
      myCollectState: false
    })
    if (_this.data.job_red_point && id == 'new'){
      _this.updateReddot()
    }

    _post('/api/get_job_list_by_tag_id', { tag_id: id }, function (res) {
      if (res.code === 1) {
        _this.setData({
          myCompanyData: res.data.list,
          my_emptyDataView_state: res.data.list.length
        })
        if (res.data.total_page >= 2) {
          _this.setData({
            my_page: 2,
            my_prevPage: 1,
            my_loadingState: false
          })
        } else {
          _this.setData({
            my_page: 1,
            my_prevPage: 1,
            my_loadingState: true,
            my_noMoreloadingState: false
          })
        }
      }
    })
  },
  //关闭提示
  change_closeTipState(state) {
    this.setData({
      closeTipState: state
    })
  },
  //判断页面入口
  fromTrigger() {
    if (app.globalData.fromMsg == 'msg') {
      this.selectTabIndex(1, 'formMsg')
      this.setData({
        subTagCheck_index: 0,
        my_filter: 0
      })
      this.clickTabIndex(this.data.my_filter)
    }else if (app.globalData.fromMsg == 'new') {
      this.selectTabIndex(1, 'formMsg')
      this.setData({
        subTagCheck_index: 'new',
        my_filter:'new'
      })
      this.clickTabIndex('new')
    }
    app.globalData.fromMsg = ''
  },
  //获取selectType_height的值
  get_selectType_height(){
    //let _this = this
    // let query = this.data.query
    // query.select('.selectType').boundingClientRect().exec(function (res) {
    //   _this.setData({
    //     selectType_height: res[0].height
    //   })
    // })
  },
  //更新列表
  onRefresh_job_list(e){
    this.get_job_list(this.data.list_filter)
  },
  //初始化设备像素比和图片使用的设备像素比
  pixelRatio_init(){
    this.setData({
      pixelRatio: app.getPixelRatio(),
      rpxRatio: app.getRpxRatio()
    })
  },
  //获取今日更新红点显示
  getMySubscribeRed(){
    let _ = this
    // let read_date = wx.getStorageSync('read_my_subscribe_date')
    // let today_date = util.formatDate(new Date())
    _post('/api/get_job_red_point', {}, function (res) {
      if (res.code) {
        if (res.data.job_red_point == 1 ) {
          _.setData({
            job_red_point: 1,
          })
        }
      }
    })
  },
  //点击今日更新后取消红点显示
  updateReddot(){
    let _ = this
    _post('/api/update_job_red_point', {}, function (res) {
      if (res.code) {
        //wx.setStorageSync('read_my_subscribe_date', util.formatDate(new Date()))
        _.setData({
          job_red_point: 0,
        })
      }
    })
  },
  //静默点击我的订阅加载
  clickTabIndex(type){
    const load_type = type ? type : this.data.my_filter
    this.get_job_my_tag_list()
    this.getMySubscribeRed()
    this.get_job_list_by_tag_id(load_type)
    this.setData({
      list_filter: load_type,
    })
    return
  },
    },
    onLoad () {
        console.log(API)
        _get(API.job_list).then(res => {
          console.log(res)
        }).catch(e => {
          console.log(e)
        })
        // _get(API.job_list).then(res => {
        //   console.log(res)
        // }).catch(e => {
        //   console.log(e)
        // })
    },
    created () {
        console.log('created')
    },
}
</script>

<style lang="scss">
page{
  height:100%;
  background-color: #fff;
}
radio .wx-radio-input{
  border-radius: 0;
  width: 27rpx;
  height: 27rpx;
  margin-bottom: 3rpx;
}
#findJob{
  width: 100%;
  font-size: 32rpx;
  height:100%;
  background-color: #faf8f6;
}
#findJob .section{
  width: 100%;
}
#findJob .section .navbar{
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(25, 25, 0, 0.1);
  margin-bottom: 4rpx;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 400;
}
#findJob .section .navbar .slider{
  width: 140rpx;
  height: 6rpx;
  border-radius: 6rpx;
  background-color: #ffcc2d;
  position: relative;
  bottom: 6rpx;
  left: 118rpx;
  transition: all .3s;
}
#findJob .section .navbar .item{
  width: 50%;
  display: inline-block;
  text-align: center;
  font-size: 30rpx;
  line-height: 88rpx;
}
#findJob .section .navbar .item button{
  display:flex;
  background-color:#fff;
  font-size:inherit;
  line-height:82rpx;
  color:#482929;
  overflow:auto;
  justify-content:center;
}
#findJob .section .navbar .item button.button-hover{
  background-color:#fff;
  color:#482929;
}
#findJob .section .navbar .active .text{
  display: inline-block;
  padding: 0 10rpx;
  font-weight: bold;
}

/* 选择类别 */
#findJob_list .selectType{
  width: 100%;
  margin-top: 88rpx;
}
#findJob_list .selectType .comType{
  line-height: 92rpx;
  padding: 0 40rpx;
}
#findJob_list .selectType .comType .top{
  display: flex;
  justify-content: space-between;
}
#findJob_list .selectType .comType .top .radio{
  margin-right: 30rpx;
  font-size: 28rpx;
}
#findJob_list .selectType .comType .top .more-btn{
  font-size: 28rpx;
  color: #747474;
}

#findJob_list .selectType .comType .selected{
  line-height: 1;
}
#findJob_list .selectType .comType .selectedItem{
  display: inline-block;
  padding: 0rpx 12rpx;
  line-height: 48rpx;
  border-radius: 6rpx;
  background-color: #e4e1fa;
  font-size: 28rpx;
  margin:4rpx 20rpx 18rpx 0;
}
 #findJob_list .selectType .comType .selected .nc-icon{
  position: relative;
  top: -10rpx;
 }
/* 更多筛选内容 */
#findJob_list .selectType .comType .detail{
  width: 100%;
  margin-top: 16rpx;
}
#findJob_list .selectType .comType .detail .item{
  width: 100%;
  display: flex;
  line-height: 40rpx;
  margin-bottom: 10rpx;
}
#findJob_list .selectType .comType .detail .item .title{
  line-height: 54rpx;
  flex: 0 0 auto;
  font-size: 28rpx;
}
#findJob_list .selectType .comType .detail .item .list{
  height: auto;
  flex: 1;
  overflow: hidden;
}
#findJob_list .selectType .comType .detail .item .showMore-btn{
  width: 30rpx;
  height: 50rpx;
  color: #9085e7;
  flex: 0 0 30rpx;
  display: inline-flex;
  align-items: flex-start;
  padding-top: 14rpx;
}
#findJob_list .selectType .comType .detail .item .listItem{
  display: inline-block;
  padding: 10rpx 20rpx;
  margin: 6rpx 12rpx 25rpx 0;
  border-radius: 24rpx;
  font-size: 28rpx;
  line-height: 1;
}
#findJob_list .selectType .comType .detail .item .list .active{
  background-color: #ffcc2d;
}

/* 创建订阅 */
#my_findJob{
  height:calc(100% - 88rpx);
  padding-top: 88rpx;
}
#my_findJob .createSub{
  width: 710rpx;
  height: 180rpx;
  margin: 30rpx auto 10rpx auto;
  border-radius: 12rpx;
  background-color: #fff;
  padding: 40rpx 36rpx;
  box-sizing: border-box;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.24);
}
#my_findJob .createSub .row{
  display: flex;
  justify-content: space-between;
  margin-bottom: 24rpx;
}
#my_findJob .createSub .create-btn{
  width: 200rpx;
  height: 76rpx;
  line-height: 76rpx;
  border-radius: 40rpx;
  text-align: center;
  background-color: #9085e7;
  font-size: 30rpx;
  color: #fff;
  position: relative;
  top: 15rpx;
}
#my_findJob .createSub .about{
  width: 413rpx;
  display: inline-block;
  font-size: 28rpx;
  color: #482929;
  line-height: 1.8;
}

/* 即时信息 */
.instantNew{
  width: 710rpx;
  margin: 30rpx auto 10rpx auto;
  border-radius: 12rpx;
  background-color: #fff;
  padding: 40rpx 36rpx;
  box-sizing: border-box;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
.instantNew .new_content{
  width: 416rpx;
  font-size: 28rpx;
  display: inline-block;
}
.instantNew .new_btn{
  width: 200rpx;
  height: 76rpx;
  line-height: 76rpx;
  margin: auto 0;
  display: inline-block;
  border-radius: 40px;
  background-color: #9085e7;
  text-align: center;
  color: #fff;
  font-size: 30rpx;
}


/* 订阅标签 */
#my_findJob .subTags{
  width: 100%;
  line-height: 92rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
  white-space: nowrap;
}
#my_findJob .subTags .tagItem{
  font-size: 28rpx;
  color: #747474;
  margin-right: 50rpx;
  display: inline-block;
}
#my_findJob .subTags .active{
   color: #482929;
   font-weight: bold;
}
#my_findJob .subTags-list{
  width: 100%;
  line-height: 92rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
  white-space: nowrap;
}
#my_findJob .subTags-list .tagItem{
  position: relative;
  width: calc(100%/3);
  font-size: 28rpx;
  color: #747474;
  /* margin-right: 50rpx; */
  text-align: center;
  display: inline-block;
}
#my_findJob .subTags-list .tagItem-text{
  width:100%;
  display:inline-block;
  border-right: 1px solid #9b9b9b;
  height:28rpx;
  line-height:28rpx;
}
#my_findJob .subTags-list .tagItem:last-child .tagItem-text{
  border: none;
}
#my_findJob .subTags-list .active{
   color: #482929;
   font-weight: bold;
}
.subTags-list .tagItem .icon-reddot{
  position: absolute;
  top:39rpx;
  right: 32rpx;
  display: block;
  width: 16rpx;
  height: 16rpx;
  border-radius: 16rpx;
  background-color: #fd554c;
}
/* 公司列表 */
.companyList{
  width: 100%;
  /* height: 100%; */
  background-color: #fff;
  /* box-shadow: 0 -1rpx 1rpx 0 rgba(25, 25, 0, 0.1); */
  border-top:1rpx solid #e8e8e8;
  box-sizing: border-box;
  padding: 0 40rpx 0 40rpx;
}
.companyList.my_page_loading{
  height:100% ;
  /* height: calc(100% - 88rpx); */
}
.companyList.list_page_loading .companyItem:last-child{
  border: none;
}
.companyList .emptyDataView{
  width: 100%;
  height: 917rpx;
  background-color: #fff;
  text-align: cenetr;
  position: relative;
  /* display: flex; */
  /* align-content: centr; */
  /* justify-content: center; */
}
.companyList .emptyDataView .emptyWrapper{
  /* width: 216rpx;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column;
  padding-top:220rpx;
}
.companyList .emptyDataView image{
  width: 216rpx;
  height: 216rpx;
  display: block;
}
.companyList .emptyDataView .text{
  width: 100%;
  text-align: center;
  font-size: 28rpx;
  color: #7e7e7e;
}

.focus_btn{
  position: relative;
}
.focus_btn contact-button{
  position: absolute;
  opacity: 0;
}

.created-box{
  width: 700rpx;
  height: 448rpx;
  border-radius: 24rpx;
  background-color: #ffffff;
  text-align: center;
  margin: 200rpx auto 0 auto;
  box-shadow: 0 2rpx 4rpx 0 rgba(0, 0, 0, 0.14);
}

.created-box .title{
  padding: 48rpx 0 58rpx 0;
  font-size: 40rpx;
  font-weight: bold;
  line-height: 1;
}

.created-box .created-box-body{
  display: flex;
  margin: 0 80rpx 50rpx 80rpx;
}

.created-box .created-box-body .created-icon{
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100rpx;
  height: 100rpx;
  border-radius: 8rpx;
  background-color: #9085e7;
  border: solid 2rpx #e8e8e8;
}
.created-box image{
  display: inline-block;
  width: 86rpx;
  height: 86rpx;
}

.created-box .created-box-body .text{
  width: 430rpx;
  height: 80rpx;
  font-size: 30rpx;
  line-height: 1.33;
  text-align: left;
  margin-left: 32rpx;
  color: #7e7e7e;
}

.created-box button{
  font-size:32rpx;
  font-weight:bold;
  width:560rpx;
  height:90rpx;
  line-height:90rpx;
  border-radius:50rpx;
  color:#482929;
  background-color:#ffcc2d;
  margin:  0 auto;
}

#findJob .section,
.job_list,
.job_list .companyList{
  height:100%;
}
.loading_more{

}
.loading_more_block{
  background-color:#faf8f6;
  height: 200rpx;
  margin:0 -40rpx;
  text-align: center;
}

.loading_more_block_text{
  color: #cecece;
  height: 40rpx;
  padding-top: 20rpx;
  font-size: 28rpx;
}
</style>
