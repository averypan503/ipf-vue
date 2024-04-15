<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { Forms } from '../mock/forms.mock'
import FormInput from './FormInput.vue'
const router = useRouter();
const route = useRoute();
let form = ref(null)
onMounted(() => {
    const formId = route['params']['id'];
    form.value = Forms.filter(f=> f.id == formId)[0];
    console.log(form);
})
function previewData() {
    console.log(form.value);
}
</script>
<template>
<h1>Edit form</h1>
<div v-if="form">
<h2>Form name</h2>
<FormInput v-model="form.name" place="please input name"/>
<h2>Form text</h2>
<FormInput v-model="form.text" place="please input text"/>
<h2>layout</h2>
<el-select v-model="form.layout" style="width: 300px">
    <el-option key="vertival" value="vertival">Vertival</el-option>
    <el-option key="horizatal" value="horizatal">Horizatal</el-option>
</el-select>
</div>
<br/><br/>
<el-button type="primary" @click="previewData()">Save</el-button>
</template>
<style scoped>

</style>