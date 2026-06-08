<template>
  <div class="home">
    <h1>学生课表管理系统</h1>
    
    <section class="upload-section">
      <h2>上传课表</h2>
      <PdfUploader />
    </section>
    
    <section class="today-courses">
      <h2>今日课程</h2>
      <el-empty v-if="todayCourses.length === 0" description="今日无课程" />
      <el-card v-for="course in todayCourses" :key="course.course + course.timeSlot" class="course-card">
        <div class="course-info">
          <h3>{{ course.course }}</h3>
          <p>时间段：{{ course.timeSlot }}</p>
          <p>教师：{{ course.teacher }}</p>
          <p>地点：{{ course.location }}</p>
        </div>
      </el-card>
    </section>
    
    <section class="schedule-section">
      <h2>课表表格</h2>
      <ScheduleTable />
    </section>
    
    <section class="calendar-section">
      <h2>课表日历</h2>
      <CalendarView />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import PdfUploader from '../components/PdfUploader.vue';
import ScheduleTable from '../components/ScheduleTable.vue';
import CalendarView from '../components/CalendarView.vue';
import { useScheduleStore } from '../store/schedule';

const scheduleStore = useScheduleStore();

const todayCourses = computed(() => {
  return scheduleStore.getTodayCourses();
});

onMounted(() => {
  // 可以在这里设置学期开始日期，例如：
  // scheduleStore.setStartDate('2024-09-01');
});
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

h2 {
  margin: 30px 0 20px;
  color: #555;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.upload-section {
  margin-bottom: 40px;
}

.today-courses {
  margin-bottom: 40px;
}

.course-card {
  margin-bottom: 15px;
  max-width: 400px;
}

.schedule-section {
  margin-bottom: 40px;
}

.calendar-section {
  margin-bottom: 40px;
}
</style>
