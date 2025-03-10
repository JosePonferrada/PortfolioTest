<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <header class="navbar" :class="{ 'scrolled': scrolled }">
      <div class="logo">Bienvenid@</div>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/projects">Proyectos</router-link>
        <router-link to="/skills">Habilidades</router-link>
        <router-link to="/contact">Contacto</router-link>
      </nav>
      <button @click="toggleDarkMode" class="theme-toggle">
        {{ darkMode ? '☀️' : '🌙' }}
      </button>
    </header>
    
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Jose Manuel Ponferrada</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Comprobar preferencia de tema del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  }
}
</script>

<style>
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a29bfe;
  --accent-color: #fd79a8;
  --background-color: #ffffff;
  --text-color: #2d3436;
  --card-bg: #f9f9f9;
  --border-color: #dfe6e9;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
  
  font-size: 16px;
}

.dark-mode {
  --primary-color: #9b59b6;
  --secondary-color: #8e44ad;
  --accent-color: #e84393;
  --background-color: #2d3436;
  --text-color: #f1f1f1;
  --card-bg: #34495e;
  --border-color: #4b6584;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
  transition: background-color 0.3s ease;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--background-color);
  transition: var(--transition);
}

.navbar.scrolled {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  padding-bottom: 5px;
}

nav a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-color);
  transition: var(--transition);
}

nav a:hover:after,
nav a.router-link-active:after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

main {
  flex-grow: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

footer {
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
}

h1, h2, h3, h4 {
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

p {
  margin-bottom: 1.5rem;
}

/* Transición entre rutas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  nav {
    margin-top: 1rem;
    gap: 1rem;
  }
}
</style>