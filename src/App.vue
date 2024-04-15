<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// 选项式
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   }
// }
// 组合式
// const count = ref(1)
// const name = ref('Vue.js')
// function greet(event: any) {
//   alert(`Hello, ${name.value}`);
//   if(event) {
//     console.dir(event.target)
//     alert(event.target.tagName)
//   }
// }
// const rawHtml = ref('<span style="color: red">This should be red.</span>')
</script>

<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#000"
    text-color="#fff"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <span>Feedback Service(IPF)</span>
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="1">
      <template #title>Support</template>
      <el-menu-item index="1-1">Slack</el-menu-item>
      <el-menu-item index="1-2">Email</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>Bob Green</template>
      <el-menu-item index="2-1">Profile</el-menu-item>
      <el-menu-item index="2-2">LogOut</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-row>
    <el-col :span="6">
      <el-menu
        default-active="1"
        class="vertical-menu"
      >
      <el-menu-item index="1"><router-link to="/feedback">Feedback</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/forms">Form</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/trigger-rule">Trigger Rule</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/notification-rule">Notification Rule</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/audit-event">Audit Event</router-link></el-menu-item>
        <el-menu-item index="6"><router-link to="/dashboard">Dashboard</router-link></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18" >
      <div class="main-content">
        <RouterView/>
      </div>
    </el-col>
  </el-row>
  <!-- <button @click="greet">Count is: {{ count }}</button> -->
  <!-- <span>{{ rawHtml }}</span>
  <span v-html="rawHtml"></span>
  <button @click="count++">count++</button>
  <span>parent: {{ count }}</span>
  <HelloWorld msg="You did it!" v-model="count"/> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
.el-menu-item > a {
  text-decoration: none!important;
  color: #303133;
}
.vertical-menu {
  height: 100%;
  .el-menu-item {
    line-height: 40px;
    height: 40px;
    &.is-active {
      background-color: #bcf5ef;
    }
  }
}
.main-content {
  height: 100%;
}
.el-row {
  height: calc(100vh - 64px)!important;
}
.flex-grow {
  flex-grow: 1;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
