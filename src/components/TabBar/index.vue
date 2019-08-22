<template>
    <footer>
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont">&#xe622;</i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont">&#xe6c2;</i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont">&#xe600;</i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: #fff 2px solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
footer ul li {
  flex: 1;
  height: 40px;
}
footer ul li.active {
  color: red;
}
footer ul li.router-link-active{color:red}
footer ul i {
  font-size: 20px;
}
footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>