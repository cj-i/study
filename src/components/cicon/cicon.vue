<template>
  <span class="icon" :class="classMap[iconType]"></span>
</template>

<script type="text/ecmascript-6">
	export default {
    props: {
      iconType: {
          type: Number
      }
    },
    computed: {
      iconType(now,i) {
        console.log(this.iconType);
        return this.iconType;


//        return this.iconType;
      }
    },
		created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		}
	};
</script>

<style lang="stylus">
  .icon
      display inline-block
      vertical-align top
      width 12px
      height 12px
      margin-right 2px
      -webkit-background-size 12px 12px
      background-size 12px 12px
      background-repeat no-repeat
      &.decrease
        bg-image('decrease_3')
      &.discount
        bg-image('discount_3')
      &.guarantee
        bg-image('guarantee_3')
      &.invoice
        bg-image('invoice_3')
      &.special
        bg-image('special_3')
</style>
