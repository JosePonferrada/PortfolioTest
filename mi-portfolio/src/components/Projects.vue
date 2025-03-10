<template>
    <div class="projects">
      <h1>Mis Proyectos</h1>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.name">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="(tag, index) in project.tags" :key="index">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsPage',
    data() {
      return {
        projects: [
          {
            id: 1,
            name: 'Portfolio Vue',
            description: 'Mi primer proyecto con Vue.js',
            image: 'https://via.placeholder.com/300x200',
            tags: ['Vue.js', 'CSS', 'JavaScript']
          },
          {
            id: 2,
            name: 'Proyecto de Ejemplo',
            description: 'Una descripción de otro proyecto',
            image: 'https://via.placeholder.com/300x200',
            tags: ['HTML', 'CSS', 'JavaScript']
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .projects {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
  }
  
  .project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .project-card h3, .project-card p {
    padding: 0 15px;
    text-align: left;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    gap: 5px;
  }
  
  .tags span {
    background: #f0f0f0;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
  </style>