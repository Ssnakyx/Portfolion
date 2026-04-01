<template>
  <section id="contact" class="section bg-gradient" role="region" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="section-title gradient-text">Contactez-moi</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <p class="text-paragraph">
            Je suis toujours ouvert à discuter de nouveaux projets, opportunités ou partenariats. N'hésitez pas à me contacter.
          </p>
          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon" aria-hidden="true"><i data-feather="mail" /></div>
              <span>hamed0405n@gmail.com</span>
            </div>
            <div class="contact-method">
              <div class="contact-icon" aria-hidden="true"><i data-feather="github" /></div>
              <a href="https://github.com/Ssnakyx" target="_blank" rel="noopener noreferrer">github.com/Ssnakyx</a>
            </div>
            <div class="contact-method">
              <div class="contact-icon" aria-hidden="true"><i data-feather="linkedin" /></div>
              <a href="https://www.linkedin.com/in/hamed-kaffa-98587032a/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/hamed-kaffa
              </a>
            </div>
          </div>
        </div>
        <div class="contact-form-container">
          <form class="contact-form" action="https://formsubmit.co/hamed0405n@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Nouveau message depuis votre portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://portfoliohamed.netlify.app/merci.html" />
            <input type="text" name="_honey" style="display: none" />

            <div class="form-group">
              <label for="name">Nom</label>
              <input id="name" type="text" name="name" placeholder="Votre nom" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Votre email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Votre message" required />
            </div>
            <button type="submit" class="btn btn-primary btn-full"><span>Envoyer le message</span></button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
