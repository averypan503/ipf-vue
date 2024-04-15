<script setup lang="ts">
import { getForms } from '../services/api'
import Preview from './Preview.vue'
import { onMounted, ref } from 'vue'

const props = defineProps(['form'])

let forms = ref([])
onMounted(() =>{
    getForms().then((res: any) => forms.value = res)
})
function formatDate(date: any) {
  // console.log(date);
  return new Date(date).toDateString();
}
let currentPage = ref(1);
let pageSize = ref(10);
let preview = ref(false);
let selectedForm: any = ref(null);
let deleteOpen = ref(false);
function handleSizeChange(val: any) {
  pageSize.value = val;
}
function handleCurrentChange(val: any) {
  currentPage.value = val;
}
function openModal(form: any) {
    selectedForm.value = form;
}
</script>
<template>
    <h1>Forms</h1>
    <el-table :data="forms.slice((currentPage-1)*pageSize, currentPage*pageSize)">
        <el-table-column label="actions">
          <template #default="scope">

            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-icon><MoreFilled /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item><router-link :to="{name: 'formedit', params: {id: scope.row.id}}">Edit</router-link></el-dropdown-item>
                  <el-dropdown-item @click="preview= true; openModal(scope.row)">Preview</el-dropdown-item>
                  <el-dropdown-item @click="deleteOpen=true;selectedForm = scope.row">Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
        <el-table-column prop="layout" label="layout"></el-table-column>
        <el-table-column label="created">
          <template #default="scope">
              <span style="margin-left: 10px">{{ formatDate(scope.row.created) }}</span>
          </template>
        </el-table-column>

    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :pageSize="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="forms.length"
    ></el-pagination>
    <el-dialog v-model="preview" align-center>
        <h2>Form Preview</h2>
        <div v-if="selectedForm">
            <Preview :form="selectedForm"/>
        </div>

        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="preview = false">ok</el-button>
      </div>
        </template>
    </el-dialog>
    <el-dialog v-model="deleteOpen" align-center>
      <h2>Do you want to delete form {{selectedForm.name}}</h2>
      <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="deleteOpen = false">ok</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<style scoped>
.el-icon {
  transform: rotate(90deg);
}
</style>