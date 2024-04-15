<script setup>
import { onMounted } from 'vue'
const model = defineModel();
const props = defineProps(['place'])
onMounted(() => console.log(model))
</script>
<template>
<el-input v-model="model" style="width: 300px" :placeholder="props.place"/>
</template>