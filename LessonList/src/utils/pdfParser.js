import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

export async function parsePDF(file) {
  const fileReader = new FileReader();
  
  return new Promise((resolve, reject) => {
    fileReader.onload = async function(event) {
      try {
        const arrayBuffer = event.target.result;
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = '';
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          content.items.forEach(item => {
            text += item.str + ' ';
          });
        }
        
        const courses = extractCourses(text);
        resolve(courses);
      } catch (error) {
        reject(error);
      }
    };
    
    fileReader.onerror = function() {
      reject(new Error('文件读取失败'));
    };
    
    fileReader.readAsArrayBuffer(file);
  });
}

function extractCourses(text) {
  const courses = [];
  const coursePattern = /([^\n]+)\s+([^\n]+)\s+([^\n]+)\s+([^\n]+)\s+([^\n]+)\s+([^\n]+)/g;
  let match;
  
  while ((match = coursePattern.exec(text)) !== null) {
    const course = {
      weekDay: match[1],
      timeSlot: match[2],
      course: match[3],
      teacher: match[4],
      location: match[5],
      weeks: match[6],
      credits: 0
    };
    courses.push(course);
  }
  
  return courses;
}
