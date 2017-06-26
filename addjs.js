<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt=""/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}�����ʹ�
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]  "></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}��</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="backgroud">
      <img :src="seller.avatar" alt="" width="100%" height="100%"/>
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star
    }
  };
</script>

<style lang="stylus">
  @import '../../common/stylus/mixin.styl';
  .header {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7,17,27,0.5);
  }
  .content-wrapper{
    position: relative;
    padding:24px 12px 18px 24px;
    font-size:0;
  }
  .avatar{
    display:inline-block;
    vertical-align: top;
  }
  .avatar img{
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
  .content{
    display: inline-block;
    margin-left: 16px;
  }
  .title{
    margin:2px 0 8px 0;
  }
  .brand {
    display: inline-block;
    vertical-align:top;
    width: 30px;
    height: 18px;
    bg-image('brand')
    background-size : 30px 18px;
    background-repeat: no-repeat;
  }
  .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
  .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }
  .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    -webkit-background-size: 12px 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .decrease{
    bg-image('decrease_1')
  }
  .discount{
    bg-image('discount_1')
  }
  .guarantee{
    bg-image('guarantee_1')
  }
  .invoice{
    bg-image('invoice_1')
  }
  .special{
    bg-image('special_1')
  }
  .text{
    line-height: 12px;
    font-size: 10px;
  }
  .support-count {
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    -webkit-border-radius: 14px;
    -moz-border-radius: 14px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .count {
    font-size: 10px;
    vertical-align: top;
  }
  .support-count .icon-keyboard_arrow_right {
    margin-left: 2px;
    font-size: 10px;
    line-height: 24px;
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    background: rgba(7,17,27,0.2);
  }
  .bulletin-title{
    display: inline-block;
    vertical-align: top;
    margin-top: 8px;
    width: 22px;
    height: 12px;
    bg-image('bulletin')
    -webkit-background-size : 22 px 12 px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
  }
  .bulletin-text{
    vertical-align: top;
    margin:0 4px;
    font-size: 10px;
  }
  .bulletin-wrapper .icon-keyboard_arrow_right{
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 9px;
  }
  .backgroud{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px)
  }
  .detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
  }
  .detail-wrapper{
    min-height: 100%;
    width: 100%;
  }
  .detail-main{
    margin-top: 64px;
    padding-bottom: 64px;
  }
  .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
  }
  .name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  .star-wrapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }
</style>
