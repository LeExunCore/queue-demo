<template>
  <div class="settings">
    <h1>设置</h1>
    
    <el-form :model="settings" label-width="120px">
      <el-form-item label="学期开始日期">
        <el-date-picker
          v-model="settings.startDate"
          type="date"
          placeholder="选择日期"
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveSettings">保存设置</el-button>
      </el-form-item>
    </el-form>
    
    <el-message v-if="message" :type="messageType">{{ message }}</el-message>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useScheduleStore } from '../store/schedule';

const scheduleStore = useScheduleStore();
const settings = ref({
  startDate: ''
});
const message = ref('');
const messageType = ref('info');

const saveSettings = () => {
  if (settings.value.startDate) {
    scheduleStore.setStartDate(settings.value.startDate);
    message.value = '设置保存成功';
    messageType.value = 'success';
  } else {
    message.value = '请选择学期开始日期';
    messageType.value = 'error';
  }
};

onMounted(() => {
  settings.value.startDate = scheduleStore.startDate;
});
</script>

<style scoped>
.settings {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.el-form {
  margin-top: 20px;
}
</style>
