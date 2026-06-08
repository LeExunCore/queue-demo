import { defineStore } from 'pinia';
import { getWeekDay } from '../utils/dateHelper';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    courses: [],
    startDate: '',
    currentWeek: 1
  }),
  
  actions: {
    addCourse(course) {
      this.courses.push(course);
    },
    
    addCourses(courses) {
      this.courses = courses;
    },
    
    setStartDate(date) {
      this.startDate = date;
    },
    
    setCurrentWeek(week) {
      this.currentWeek = week;
    },
    
    filterByWeek(week) {
      return this.courses.filter(course => {
        const weeks = course.weeks.split('-');
        const startWeek = parseInt(weeks[0]);
        const endWeek = parseInt(weeks[1]);
        return week >= startWeek && week <= endWeek;
      });
    },
    
    getTodayCourses() {
      const today = getWeekDay();
      return this.courses.filter(course => course.weekDay === today);
    },
    
    filterByWeekDay(weekDay) {
      return this.courses.filter(course => course.weekDay === weekDay);
    }
  }
});
