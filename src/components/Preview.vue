<script setup>
import { onMounted } from 'vue'
const props = defineProps(
    ['form']);
// onMounted(()=> console.log(props.form))
</script>
<template>
<h4>Form Id: {{ props.form.id }}</h4>
<h4>Form name: {{ props.form.name }}</h4>
<h4>Form text: {{ props.form.text }}</h4>
</template>
<style scoped>

</style>