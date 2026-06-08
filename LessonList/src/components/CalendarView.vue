<template>
  <div class="calendar-view">
    <h3>日历视图</h3>
    <div class="calendar-grid">
      <div class="weekday-header">周一</div>
      <div class="weekday-header">周二</div>
      <div class="weekday-header">周三</div>
      <div class="weekday-header">周四</div>
      <div class="weekday-header">周五</div>
      <div class="weekday-header">周六</div>
      <div class="weekday-header">周日</div>
      
      <div v-for="(day, index) in 7" :key="index" class="weekday-cell">
        <div class="day-courses">
          <div v-for="course in getCoursesByDay(day)" :key="course.course + course.timeSlot" class="course-item">
            <div class="course-name">{{ course.course }}</div>
            <div class="course-time">{{ course.timeSlot }}</div>
            <div class="course-location">{{ course.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useScheduleStore } from '../store/schedule';

const scheduleStore = useScheduleStore();

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const getCoursesByDay = (dayIndex) => {
  const weekday = weekdays[dayIndex];
  return scheduleStore.filterByWeekDay(weekday);
};
</script>

<style scoped>
.calendar-view {
  margin: 20px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.weekday-header {
  text-align: center;
  font-weight: bold;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.weekday-cell {
  min-height: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
}

.course-item {
  background-color: #ecf5ff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 14px;
}

.course-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.course-time {
  font-size: 12px;
  color: #666;
  margin-bottom: 2px;
}

.course-location {
  font-size: 12px;
  color: #999;
}
</style>
