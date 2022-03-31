<template>
  <div>
    <!-- 三级联动组件，已注册为全局组件 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor ,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer/ListContainer.vue";
import Recommend from "./Recommend/Recommend.vue";
import Rank from "./Rank/Rank.vue";
import Like from "./Like/Like.vue";
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted(){
    // 派发action获取floor组件数据
    this.$store.dispatch("getFloorList")
  },
  computed:{
    ...mapState({
      floorList:(state)=>state.home.floorList
    })
  }
};
</script>

<style>
</style>