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

  <RouterView />
</template>

<style scoped>
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
