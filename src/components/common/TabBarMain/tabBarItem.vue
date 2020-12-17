<template>
  <div class="item" :style="isActiveColor" @click="itemFun">
    <slot name="icon"></slot>
    <slot name="nav"></slot>
  </div>
</template>


<script>
export default {
  name: "item",
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor() {
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type : String,
      default: 'pink',
    }
  },
  methods: {
    itemFun() {
      if (this.path != "/file") {
        this.$router.push(this.path);
      } else {
        this.$router.push(`${this.path}/zhangsan`);
      }
    },
  },
};
</script> 


<style scoped lang="less">
.item {
  height: 49px;
  border-right: solid 1px #ddd;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & i {
    margin-bottom: 5px;
  }
  & span {
    font-size: 10px;
  }
}
</style>