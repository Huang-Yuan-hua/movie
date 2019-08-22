<template>
  <div>
    <Header title="热门电影" />
    <div>
      <cube-tab-bar
        class="navbar"
        v-model="selectedLabelDefault"
        show-slider
        inline
        @click="clickHandler"
      >
        <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
          <!-- name为icon的插槽 -->
          <i slot="icon" :class="item.icon"></i>
          <!-- 默认插槽 -->
          <router-link :to="item.path">{{item.label}}</router-link>
        </cube-tab>
      </cube-tab-bar>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
export default {
  name: "Movie",
  data() {
    return {
      selectedLabelDefault: "正在热映",
      tabs: [
        {
          label: "大连",
          icon: "cubeic-location",
          path: "/movie/city"
        },
        {
          label: "正在热映",
          icon: "cubeic-hot",
          path: "/movie/nowPlaying"
        },
        {
          label: "即将上映",
          icon: "cubeic-time",
          path: "/movie/commingSoon"
        },
        {
          label: "搜索",
          icon: "cubeic-search",
          path: "/movie/search"
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
    TabBar
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 30px;
  font-size: 12px;
  background-color: lightcyan;
  box-shadow: 0px 3px 3px #c8c8c8;
}
</style>
