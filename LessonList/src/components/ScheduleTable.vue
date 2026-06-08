<template>
  <div class="schedule-table">
    <el-input-number v-model="currentWeek" :min="1" :max="20" label="当前周次" style="margin-bottom: 20px" />
    <el-button type="primary" @click="filterCourses">过滤课程</el-button>
    
    <el-table :data="filteredCourses" style="width: 100%">
      <el-table-column prop="weekDay" label="星期" width="100" />
      <el-table-column prop="timeSlot" label="时间段" width="100" />
      <el-table-column prop="course" label="课程名" width="180" />
      <el-table-column prop="teacher" label="教师" width="120" />
      <el-table-column prop="location" label="地点" width="120" />
      <el-table-column prop="weeks" label="周次" width="100" />
      <el-table-column prop="credits" label="学分" width="80" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useScheduleStore } from '../store/schedule';
import { getCurrentWeek } from '../utils/dateHelper';

const scheduleStore = useScheduleStore();
const currentWeek = ref(1);
const filteredCourses = ref([]);

const filterCourses = () => {
  filteredCourses.value = scheduleStore.filterByWeek(currentWeek.value);
};

watch(() => scheduleStore.courses, () => {
  filterCourses();
}, { deep: true });

// 初始化时设置当前周次
if (scheduleStore.startDate) {
  currentWeek.value = getCurrentWeek(scheduleStore.startDate);
}

// 初始化过滤
filterCourses();
</script>

<style scoped>
.schedule-table {
  margin: 20px 0;
}
</style>
