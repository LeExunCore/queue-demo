<template>
  <div class="pdf-uploader">
    <el-upload
      class="upload-demo"
      action=""
      :auto-upload="false"
      :on-change="handleFileChange"
      :file-list="fileList"
      accept=".pdf"
    >
      <el-button type="primary">点击上传PDF课表</el-button>
      <template #tip>
        <div class="el-upload__tip">
          只能上传PDF文件
        </div>
      </template>
    </el-upload>
    <el-button type="success" @click="parseFile" :disabled="!fileList.length">解析PDF</el-button>
    <el-message v-if="message" :type="messageType">{{ message }}</el-message>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { parsePDF } from '../utils/pdfParser';
import { useScheduleStore } from '../store/schedule';

const fileList = ref([]);
const message = ref('');
const messageType = ref('info');
const scheduleStore = useScheduleStore();

const handleFileChange = (file) => {
  fileList.value = [file];
  message.value = '';
};

const parseFile = async () => {
  if (!fileList.value.length) return;
  
  try {
    message.value = '正在解析PDF...';
    messageType.value = 'info';
    const courses = await parsePDF(fileList.value[0].raw);
    scheduleStore.addCourses(courses);
    message.value = `成功解析 ${courses.length} 门课程`;
    messageType.value = 'success';
  } catch (error) {
    message.value = '解析失败：' + error.message;
    messageType.value = 'error';
  }
};
</script>

<style scoped>
.pdf-uploader {
  margin: 20px 0;
}

.el-upload {
  margin-bottom: 20px;
}
</style>
