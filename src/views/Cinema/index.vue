<template>
  <div>
    <Header title="附近影院" />
    <div>
      <cube-tab-bar class="navbar" v-model="selectedLabelDefault" inline @click="clickHandler">
        <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
          <!-- name为icon的插槽 -->
          <i slot="icon" :class="item.icon"></i>
          <!-- 默认插槽 -->
          {{item.label}}
        </cube-tab>
      </cube-tab-bar>
    </div>
    <CinemaList />
    <TabBar />
  </div>
</template>

<script>
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import CinemaList from "../../components/CinemaList";
export default {
  name: "Cinema",
  data() {
    return {
      selectedLabelDefault: "最热推荐",
      tabs: [
        {
          label: "最热推荐",
          icon: "cubeic-hot"
        },
        {
          label: "综合排序",
          icon: "cubeic-pulldown"
        },
        {
          label: "筛选",
          icon: "cubeic-pulldown"
        }
      ]
    };
  },
  methods: {
    clickHandler(label, path) {
      // console.log(path, label);
    }
  },
  components: {
    Header,
    TabBar,
    CinemaList
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 30px;
  font-size: 12px;
  box-shadow: 0px 3px 3px #c8c8c8;
  background-color: lightcyan;
}
</style>
