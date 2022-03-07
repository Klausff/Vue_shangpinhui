<template>
  <div>
    <!-- 三级联动组件，已注册为全局组件 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/ListContainer.vue";
import Recommend from "./Recommend/Recommend.vue";
import Rank from "./Rank/Rank.vue";
import Like from "./Like/Like.vue";
import Floor from "./Floor/Floor.vue";
import Brand from './Brand/Brand.vue'
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
};
</script>

<style>
</style>