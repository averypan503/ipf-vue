<script setup lang="ts">
import { getFeedback } from '../services/api'
import Preview from './Preview.vue'
import { onMounted, ref } from 'vue'

let feedback = ref([])
onMounted(() =>{
    getFeedback().then((res: any) => feedback.value = res)
})
function formatDate(date: any) {
  // console.log(date);
  return new Date(date).toDateString();
}
let currentPage = ref(1);
let pageSize = ref(10);
let preview = ref(false);
let deleteOpen = ref(false);
let selectedFeedback: any = ref(null);
function handleSizeChange(val: any) {
  // console.log(val);
  pageSize.value = val;
}
function handleCurrentChange(val: any) {
  currentPage.value = val;
}
function openModal(feedback: any) {
  selectedFeedback.value = feedback
}
function resize() {
  console.log('resize')
}
</script>
<template >
    <h1 v-resize="resize">Feedback</h1>
    <el-table :data="feedback.slice((currentPage-1)*pageSize, currentPage*pageSize)">
        <el-table-column label="actions">
          <template #default="scope">

            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-icon><MoreFilled /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="preview=true;selectedFeedback = scope.row">Preview</el-dropdown-item>
                  <el-dropdown-item @click="deleteOpen = true;selectedFeedback = scope.row">Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="form.name" label="form"></el-table-column>
        <el-table-column prop="createdBy" label="user"></el-table-column>
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
          :total="feedback.length"
        ></el-pagination>
      <el-dialog v-model="preview" align-center>
        <h2>Form Preview</h2>
        <div v-if="selectedFeedback && selectedFeedback.form">
            <div><span>id</span>:<span>{{ selectedFeedback.id }}</span></div>
            <Preview :form="selectedFeedback.form"/>
        </div>

        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="preview = false">ok</el-button>
            </div>
        </template>
    </el-dialog>
    <el-dialog v-model="deleteOpen" align-center>
      <h2>Do you want to delete feedback for form {{selectedFeedback.form.name}}</h2>
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