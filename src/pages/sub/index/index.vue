<script setup lang="ts">
import {useRouter} from "vue-router";
import echarts from './canvas/echarts.min.js'
import {onMounted} from "vue";

const router = useRouter();

const backIndex = () => {
  router.push({
    path: '/'
  })
}

onMounted(() => {
  console.log(echarts)
})
</script>

<template>
  <view>
    <nut-button @click="backIndex">back index</nut-button>
  </view>
</template>

<style scoped>

</style>
