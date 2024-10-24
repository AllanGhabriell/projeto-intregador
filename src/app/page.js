import Image from "next/image";
// import 'globals.css';

export default function Home() {
  return (
    <>
      <header>
        <h1>Code One</h1>
        <nav>
          <div id="nav_menu">
            <a href="#" id="inicial">Inicial</a>
            <a href="#" id="html">Html</a>
            <a href="#" id="css">Css</a>
            <a href="#" id="jsmob">Js</a>
            <a href="#" id="js">JavaScript</a>
          </div>
          <div id="nav_login">
            <Image src="/imagens/usericon.svg" alt="" width={24} height={24} />
          </div>
        </nav>
      </header>
      <main>
        <h1>Como se Tornar um Desenvolvedor Web</h1>
        <p>Se tornar um desenvolvedor web é uma jornada emocionante e gratificante. Com a crescente demanda por profissionais nessa área, as oportunidades são vastas. Aqui estão algumas etapas que podem ajudá-lo a trilhar esse caminho:</p>
        
        <h2>1. Entenda os Fundamentos da Web</h2>
        <p>Antes de mergulhar em tecnologias específicas, é importante entender como a web funciona. Familiarize-se com os conceitos básicos de HTML, CSS e JavaScript. Esses são os pilares da construção de sites e aplicativos web.</p>
        
        <ul>
          <li><strong><a href="#" id="shtml">HTML</a></strong> (HyperText Markup Language): A estrutura básica de qualquer página web.</li>
          <li><strong><a href="#" id="scss">CSS</a></strong> (Cascading Style Sheets): Usado para estilizar e formatar o layout das páginas.</li>
          <li><strong><a href="#" id="sjs">JavaScript</a></strong>: A linguagem de programação que traz interatividade e dinamismo às páginas.</li>
        </ul>
        
        <h2>2. Aprenda as Ferramentas e Tecnologias</h2>
        <p>Após dominar os fundamentos, explore ferramentas e frameworks que facilitam o desenvolvimento:</p>
        
        <ul>
          <li><strong>Frameworks CSS</strong>: Como Bootstrap ou Tailwind, que ajudam na criação de layouts responsivos.</li>
          <li><strong>Bibliotecas JavaScript</strong>: Como React, Vue.js ou Angular, que agilizam o desenvolvimento de interfaces dinâmicas.</li>
          <li><strong>Controle de Versão</strong>: Aprenda a usar o Git para gerenciar seu código e colaborar com outros desenvolvedores.</li>
        </ul>
        
        <h2>3. Pratique, Pratique e Pratique</h2>
        <p>A prática é essencial para se tornar um desenvolvedor competente. Crie projetos pessoais, como um portfólio, blogs ou até mesmo pequenos aplicativos. Use plataformas como GitHub para compartilhar seu trabalho e receber feedback.</p>
        
        <h2>4. Aprenda sobre Back-End</h2>
        <p>Embora o front-end seja a parte visível de um site, entender como funciona o back-end é crucial. Familiarize-se com linguagens de programação como Python, Ruby ou PHP, e aprenda a trabalhar com bancos de dados, como MySQL ou MongoDB.</p>
        
        <h2>5. Mantenha-se Atualizado</h2>
        <p>O mundo do desenvolvimento web está sempre evoluindo. Siga blogs, assista a tutoriais e participe de comunidades online. Isso não só manterá suas habilidades atualizadas, mas também ajudará a fazer networking com outros profissionais.</p>
        
        <h2>6. Construa um Portfólio Impressionante</h2>
        <p>Um portfólio bem elaborado pode fazer toda a diferença na hora de procurar um emprego. Inclua seus melhores projetos, descreva seu papel em cada um e destaque as tecnologias que usou.</p>
        
        <h2>7. Busque Oportunidades de Emprego ou Estágio</h2>
        <p>Com um portfólio em mãos e habilidades desenvolvidas, comece a procurar estágios ou empregos juniores. Essas experiências são valiosas para aprender na prática e crescer profissionalmente.</p>
        
        <h2>8. Continue Aprendendo</h2>
        <p>A tecnologia está em constante mudança. Nunca pare de aprender! Considere cursos online, certificações e workshops para expandir seu conhecimento e suas habilidades.</p>
        
        <h2>Conclusão</h2>
        <p>Tornar-se um desenvolvedor web é uma jornada que exige dedicação, curiosidade e prática. Com as ferramentas e recursos certos, você pode construir uma carreira gratificante e cheia de oportunidades. Comece hoje mesmo sua jornada e transforme suas ideias em realidade na web!</p>
        
        <form action="" id="coment">
          <label htmlFor="icoment">Deixe um comentário:</label>
          <br />
          <textarea id="icoment" placeholder="Seu comentário" maxLength="150" minLength="1"></textarea>
          <br />
          <button type="submit">Enviar</button>
        </form>            
      </main>
      <footer>Criado por Allan e Miguel!</footer>
    </>
  );
}
