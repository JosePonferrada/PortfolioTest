<template>
  <div class="home-page">
    <!-- Sección Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>
          Hola, soy <span class="highlight">Jose Manuel Ponferrada</span>
          <span class="emoji">👋</span>
        </h1>
        <p class="tagline">Desarrollador Web FullStack</p>
        <div class="hero-buttons">
          <a href="#about" class="btn btn-primary">Sobre mí</a>
          <router-link to="/projects" class="btn btn-secondary">Ver proyectos</router-link>
        </div>
        <div class="social-links">
          <a href="https://github.com/JosePonferrada" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jose-manuel-ponferrada-42188a295/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div class="hero-image">
        <div class="blob"></div>
        <img src="https://via.placeholder.com/400x500" alt="Foto Personal">
      </div>
    </section>
    
    <!-- Sección Sobre mí -->
    <section id="about" class="about">
      <h2 class="section-title">Sobre mí</h2>
      <div class="about-content">
        <p>
          Soy un desarrollador web apasionado por crear experiencias digitales intuitivas y dinámicas.
          Mi enfoque se centra en la construcción de aplicaciones web modernas utilizando Vue.js y
          otras tecnologías frontend y Backend de vanguardia.
        </p>
        <p>
          Con un fuerte énfasis en la experiencia de usuario y el rendimiento, me esfuerzo por crear
          soluciones que sean tanto técnicamente sólidas como visualmente impactantes.
        </p>
        <div class="stats">
          <div class="stat">
            <span class="stat-number">2+</span>
            <span class="stat-label">Años de experiencia</span>
          </div>
          <div class="stat">
            <span class="stat-number">15+</span>
            <span class="stat-label">Proyectos completados</span>
          </div>
          <div class="stat">
            <span class="stat-number">5+</span>
            <span class="stat-label">Clientes satisfechos</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Resumen de Servicios -->
    <section class="services">
      <h2 class="section-title">Lo que hago</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🎨</div>
          <h3>Diseño UI/UX</h3>
          <p>Creación de interfaces atractivas e intuitivas</p>
        </div>
        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Desarrollo Frontend</h3>
          <p>Implementación de diseños interactivos y dinámicos</p>
        </div>
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Web Responsiva</h3>
          <p>Sitios web adaptados a todos los dispositivos</p>
        </div>
        <div class="service-card">
          <div class="service-icon">⚡</div>
          <h3>Optimización</h3>
          <p>Mejora de rendimiento y velocidad de carga</p>
        </div>
      </div>
    </section>
    
    <!-- Llamado a la acción -->
    <section class="cta">
      <h2>¿Listo para trabajar juntos?</h2>
      <p>Contáctame para discutir cómo puedo ayudarte con tu próximo proyecto</p>
      <router-link to="/contact" class="btn btn-primary">Contáctame</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  padding-bottom: 2rem;
}

/* Hero Section */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}

.hero-content {
  flex: 1;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.highlight {
  color: var(--primary-color);
  position: relative;
  z-index: 1;
}

.highlight::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 30%;
  background-color: var(--secondary-color);
  opacity: 0.3;
  left: 0;
  bottom: 0;
  z-index: -1;
  transform: rotate(-2deg);
}

.emoji {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(0deg); }
  60% { transform: rotate(15deg); }
  80% { transform: rotate(0deg); }
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(108, 92, 231, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--card-bg);
  color: var(--text-color);
  transition: var(--transition);
}

.social-links a:hover {
  transform: translateY(-3px);
  background-color: var(--primary-color);
  color: white;
}

.hero-image {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  position: relative;
  z-index: 2;
}

.blob {
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(120deg, var(--secondary-color), var(--accent-color));
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  animation: blob-animation 10s linear infinite alternate;
  opacity: 0.2;
  z-index: 1;
}

@keyframes blob-animation {
  0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
  50% { border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%; }
  100% { border-radius: 45% 55% 65% 35% / 40% 50% 50% 60%; }
}

/* About Section */
.about, .services {
  margin: 6rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 4px;
  background-color: var(--accent-color);
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 1rem;
}

/* Services Section */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 5rem 2rem;
  text-align: center;
  border-radius: 15px;
  color: white;
  margin: 4rem 0;
}

.cta h2 {
  margin-bottom: 1rem;
}

.cta p {
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta .btn-primary {
  background-color: white;
  color: var(--primary-color);
}

@media (max-width: 992px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-bottom: 3rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .stats {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>