<template>
    <div class="skills">
      <h1>Mis Habilidades</h1>
      
      <div class="skills-category">
        <h2>Frontend</h2>
        <div class="skills-grid">
          <div v-for="skill in frontendSkills" :key="skill.name" class="skill-card">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="progress" :style="{width: `${skill.level}%`}"></div>
            </div>
            <span>{{ skill.level }}%</span>
          </div>
        </div>
      </div>
      
      <div class="skills-category">
        <h2>Backend</h2>
        <div class="skills-grid">
          <div v-for="skill in backendSkills" :key="skill.name" class="skill-card">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="progress" :style="{width: `${skill.level}%`}"></div>
            </div>
            <span>{{ skill.level }}%</span>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h2>Otras Skills</h2>
        <div class="skills-grid">
          <div v-for="skill in otherSkills" :key="skill.name" class="skill-card">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="progress" :style="{width: `${skill.level}%`}"></div>
            </div>
            <span>{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsPage',
    data() {
      return {
        frontendSkills: [
          { name: 'HTML', level: 100, icon: '🌐' },
          { name: 'CSS', level: 95, icon: '🎨' },
          { name: 'JavaScript', level: 80, icon: '📝' },
          { name: 'Vue.js', level: 20, icon: '⚡' },
          { name: 'Responsive Design', level: 85, icon: '📱' },
            { name: 'Sass', level: 90, icon: '🎨' },
            { name: 'Bootstrap', level: 95, icon: '🅱️' },
            { name: 'Tailwind CSS', level: 80, icon: '🌪️' },
            { name: 'Angular', level: 70, icon: '🅰️' },
        ],
        backendSkills: [
          { name: 'Node.js', level: 70, icon: '🟢' },
          { name: 'SQL', level: 85, icon: '🗃️' },
          { name: 'MongoDB', level: 60, icon: '🍃' },
          { name: 'Laravel', level: 95, icon: '🔗' },
          { name: 'Spring Boot', level: 90, icon: '🍃' },
          { name: 'PHP', level: 80, icon: '🐘' }
        ], 
        otherSkills: [
            { name: 'Figma', level: 100, icon: '🎨' },
            { name: 'Git', level: 90, icon: '🐱' },
            { name: 'Docker', level: 70, icon: '🐳' },
            { name: 'Java', level: 85, icon: '☕' },
            { name: 'Photoshop', level: 90, icon: '🎨' },
            { name: 'Illustrator', level: 90, icon: '🎨' },
            { name: 'Premiere Pro', level: 70, icon: '🎬' },
            { name: 'After Effects', level: 70, icon: '🎞️' }
      ]
      }
    }
  }
  </script>
  
  <style scoped>
  .skills {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .skills-category {
    margin-bottom: 40px;
  }
  
  .skills-category h2 {
    margin-bottom: 20px;
    text-align: left;
    border-bottom: 2px solid #42b983;
    padding-bottom: 10px;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .skill-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    /* Para hacer que la transición sea más suave a la vuelta, podemos agregar un transition al estado normal también.  */
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-10px);
      transition: transform 0.3s ease;
      background-color: #dedede;
    }
  }
  
  .skill-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .skill-level {
    height: 10px;
    background-color: #ddd;
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #42b983;
    border-radius: 5px;
  }
  </style>