import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { FaUsers, FaTrophy, FaHeadset, FaServer, FaCopy, FaDiscord } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <img src="/servericon.png" alt="PythonMC Server Icon" className="server-icon"/>
      <p className="slogan">¡Vive la mejor experiencia Minecraft en PythonMC!</p>
      <a href="#caracteristicas" className="btn-primary"><FaTrophy style={{marginRight:8}}/>Conoce más</a>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#caracteristicas">Características</a>
      <a href="#galeria">Galería</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );
}

function InfoServidor() {
  const copyIP = () => {
    navigator.clipboard.writeText('play.pythonmc.net');
    alert('¡IP copiada al portapapeles!');
  };
  return (
    <section className="server-info">
      <h2><FaServer style={{marginRight:8}}/>Información del Servidor</h2>
      <div className="ip-box">
        <span className="ip-label">IP:</span>
        <span className="server-ip">play.pythonmc.net</span>
        <button className="copy-btn" onClick={copyIP} title="Copiar IP"><FaCopy/></button>
      </div>
      <div className="server-details">
        <span><b>Versión:</b> 1.13x - 1.21x</span>
        <span><b>Modo de juego:</b> Survival</span>
      </div>
    </section>
  );
}

function Caracteristicas() {
  return (
    <section className="features">
      <h2>¿Por qué elegir PythonMC?</h2>
      <div className="features-list">
        <div className="feature">
          <FaUsers className="feature-icon"/>
          <h3>Comunidad Activa</h3>
          <p>Únete a cientos de jugadores y haz nuevos amigos cada día.</p>
        </div>
        <div className="feature">
          <FaTrophy className="feature-icon"/>
          <h3>Eventos Únicos</h3>
          <p>Participa en eventos semanales y gana recompensas exclusivas.</p>
        </div>
        <div className="feature">
          <FaHeadset className="feature-icon"/>
          <h3>Soporte 24/7</h3>
          <p>Nuestro staff está siempre disponible para ayudarte.</p>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="galeria-section">
      <h2>Galería</h2>
      <div className="galeria">
        <img src="https://placehold.co/350x220/101820/00ff88?text=PythonMC+1" alt="Galería 1" />
        <img src="https://placehold.co/350x220/101820/00ff88?text=PythonMC+2" alt="Galería 2" />
        <img src="https://placehold.co/350x220/101820/00ff88?text=PythonMC+3" alt="Galería 3" />
      </div>
    </section>
  );
}

function Unete() {
  return (
    <section className="join">
      <h2>¡Únete ahora!</h2>
      <div className="ip-box join-ip">
        <span className="ip-label">IP:</span>
        <span className="server-ip">play.pythonmc.net</span>
        <button className="copy-btn" onClick={()=>{navigator.clipboard.writeText('play.pythonmc.net');alert('¡IP copiada al portapapeles!')}} title="Copiar IP"><FaCopy/></button>
      </div>
      <a href="https://discord.gg/" className="btn-secondary" target="_blank" rel="noopener noreferrer"><FaDiscord style={{marginRight:8}}/>Unirse al Discord</a>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <h2>Contacto</h2>
      <div className="contacto-card">
        <p>¿Tienes dudas, sugerencias o quieres formar parte de la comunidad?</p>
        <div className="contacto-opciones">
          <a href="https://discord.gg/" className="btn-secondary" target="_blank" rel="noopener noreferrer" title="Unirse al Discord">
            <FaDiscord style={{marginRight:8}}/> Unirse al Discord
          </a>
        </div>
        <p className="contacto-info">¡Te responderemos lo antes posible!</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 PythonMC. Todos los derechos reservados. Made by DKR.</p>
    </footer>
  );
}

// Renderiza estrellas animadas en el fondo (galaxia)
function GalaxyStars() {
  React.useEffect(() => {
    const canvas = document.getElementById('galaxy-stars');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth, h = window.innerHeight;
    canvas.width = w; canvas.height = h;
    let stars = Array.from({length: 120}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.2+0.3,
      o: Math.random()*0.5+0.3,
      s: Math.random()*0.5+0.2
    }));
    function draw() {
      ctx.clearRect(0,0,w,h);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2*Math.PI);
        ctx.fillStyle = `rgba(0,255,136,${star.o})`;
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    function animate() {
      for (const star of stars) {
        star.x += Math.sin(star.y/80)*0.08;
        star.y += star.s*0.12;
        if (star.y > h+2) { star.y = -2; star.x = Math.random()*w; }
      }
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
    });
    // Limpieza
    return () => { ctx.clearRect(0,0,w,h); };
  }, []);
  return <canvas id="galaxy-stars" className="galaxy-stars"></canvas>;
}

function App() {
  const [page, setPage] = React.useState('inicio');
  React.useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash.replace('#', '') || 'inicio');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Animación de entrada para el banner y fade para las secciones
  React.useEffect(() => {
    const banner = document.querySelector('.banner');
    if (banner) {
      banner.style.opacity = 0;
      banner.style.transform = 'translateY(-40px) scale(0.98)';
      setTimeout(() => {
        banner.style.transition = 'all 0.8s cubic-bezier(.77,0,.18,1)';
        banner.style.opacity = 1;
        banner.style.transform = 'translateY(0) scale(1)';
      }, 100);
    }
    const fadeSections = document.querySelectorAll('main > section, .features-list .feature, .galeria img');
    fadeSections.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'all 0.7s cubic-bezier(.77,0,.18,1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 350 + i * 120);
    });
  }, [page]);

  let content;
  switch (page) {
    case 'caracteristicas':
      content = <><Caracteristicas /><Unete /></>;
      break;
    case 'galeria':
      content = <Galeria />;
      break;
    case 'contacto':
      content = <Contacto />;
      break;
    default:
      content = <><InfoServidor /><Caracteristicas /><Unete /></>;
  }

  return (
    <>
      <GalaxyStars />
      <header className="main-header">
        <Banner />
        <Nav />
      </header>
      <main>{content}</main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
