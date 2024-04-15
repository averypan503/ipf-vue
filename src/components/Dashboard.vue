
<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
let container = ref(null)
onMounted(() => {
    let chart = echarts.init(container.value)
    const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
        type: 'value'
        },
        series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
        ]
    };
    chart.setOption(option)
})
</script>
<template>
    <h1>Dashboard works</h1>
    <div ref="container" style="width:400px;height: 300px"></div>
</template>
<style scoped>

</style>