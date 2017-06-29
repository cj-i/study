<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <cicon v-show="item.type>0" :type="item.type"></cicon>{{item.name}}
            <!--<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>-->
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import cicon from 'components/cicon/cicon';
  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      this.$http.get('api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          console.log(this.goods);
        }
      });
    },
    components: {
      cicon
    }
  };
</script>

<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl";

  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%;
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px;
        width 56px;
        line-height 14px;
        .text
          display table-cell
          width 56px
          vetical-align middle
          border-1px(rgba(7,17,28,0.1))
          font-size 12px
    .food-wrapper
      flex 1
</style>
