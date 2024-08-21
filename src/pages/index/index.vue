<template>
  <view class="demo">
    <view>
      欢迎使用 NutUI 开发 Taro 多端项目
      <Dongdong/>
    </view>
    <view>{{ count }}</view>
    <view>
      <nut-button type="primary" @click="handleClick">
        Count++
      </nut-button>
      <nut-button type="primary" @click="goSub">
        Go sub
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import {ref} from 'vue';
import {Dongdong} from '@nutui/icons-vue-taro';
import {useRouter} from "vue-router";

const count = ref(0);
const router = useRouter();

const handleClick = () => {
  count.value++;
};

const goSub = () => {
  router.push({
    path: '/sub'
  })
};
</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
