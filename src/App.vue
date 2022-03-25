<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1 v-html="msg"></h1>

    <input type="text" v-model="ItemNew" v-on:keyup.enter="addNew" />
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="turnred(item)"
        :class="{ student: item.student }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import local from "./local.js";
export default {
  name: "App",
  components: {},
  data() {
    return {
      msg: "请输入学生的名字，并点击进行标记",
      items: local.get(),
      ItemNew: "",
    };
  },
  methods: {
    addNew: function () {
      this.items.push({
        name: this.ItemNew,
        student: false,
      });
      //清空文本栏
      this.itemNew = null;
    },
    turnred(item) {
      item.student = !item.student;
    },
  },
  watch: {
    item: {
      handler(items) {
        local.save(items);
      },
      deep: true,
    },
  },
};
</script>

<style>
.student {
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  margin-top: 60px;
}

img {
  position: absolute;
  left: 28%;
  top: 3%;
  width: 50px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
