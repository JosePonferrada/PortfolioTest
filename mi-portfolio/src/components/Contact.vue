<template>
    <div class="contact">
      <h1>Contáctame</h1>
      
      <div class="contact-container">
        <div class="contact-info">
          <h2>Información de contacto</h2>
          <p><strong>Email:</strong> ponferradajosemanuel@gmail.com</p>
          <p><strong>Ubicación:</strong> Córdoba, España</p>
          
          <div class="social-links">
            <a href="https://www.linkedin.com/in/jose-manuel-ponferrada-42188a295/" target="_blank">LinkedIn</a>
            <a href="https://github.com/JosePonferrada" target="_blank">GitHub</a>
        </div>
        </div>
        
        <div class="contact-form">
          <h2>Envíame un mensaje</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
              >
            </div>
            
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
              ></textarea>
            </div>
            
            <button type="submit">Enviar Mensaje</button>
          </form>
          
          <p v-if="formSubmitted" class="success-message">
            ¡Gracias por tu mensaje! Te responderé pronto.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        formSubmitted: false
      }
    },
    methods: {
      submitForm() {
        // Aquí normalmente enviarías el formulario a un backend
        console.log('Formulario enviado:', this.form);
        
        // Reiniciar formulario
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        
        // Mostrar mensaje de éxito
        this.formSubmitted = true;
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      }
    }
  }
  </script>
  
  <style scoped>
  .contact {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 40px;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  }
  
  .contact-info, .contact-form {
    text-align: left;
  }
  
  .contact-info h2, .contact-form h2 {
    margin-bottom: 20px;
  }
  
  .social-links {
    margin-top: 20px;
  }
  
  .social-links a {
    display: inline-block;
    margin-right: 15px;
    color: #42b983;
    text-decoration: none;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    height: 150px;
    resize: vertical;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  
  .success-message {
    color: #42b983;
    margin-top: 20px;
    font-weight: bold;
  }
  </style>