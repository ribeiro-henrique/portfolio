import '../styles/Content.css';

function Content() {
  return (
    <section className="content-container">
      <h2>Info</h2>
      <div className="list-container">
        <ul>
          <li>
            <h4><a className="link" href="https://www.efset.org/cert/ooDBZj" target="_blank" rel="noopener noreferrer">EF Set English Certificate</a></h4>
            <p>Score scale of C1 Advanced according to the Common European Framework of Reference (CEFR)</p>
          </li>
          <li>
            <h4><a className="link" href="https://www.credential.net/d2eb7d97-442c-4a46-8ab6-77ab20c7d0aa#gs.6kz6z5" target="_blank" rel="noopener noreferrer">Front End Development</a></h4>
            <p>React, Ciclo de Vida, Router, Testes com RTL, Redux com React, Context API, React Hooks e metodologias ágeis</p>
          </li>
        </ul>
      </div>
      <h2>Contato</h2>
      
      <div className="list-contato">
        <ul>
          <li>
            <a className="link" href="https://github.com/ribeiro-henrique" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a className="link" href="https://www.linkedin.com/in/hesr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="link" href="mailto:hesr.ribeiro@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Content;
