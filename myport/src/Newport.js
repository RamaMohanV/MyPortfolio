import React from 'react';
import './newport.css'; // Make sure your CSS is correctly referenced

function Newport() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header-background">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <img src="https://img.freepik.com/free-vector/trademark_53876-59932.jpg?t=st=1719476413~exp=1719480013~hmac=96401a27a9c705d029607e2d8f12a236aa3318b060a6ce914be33e278f889cc9&w=740" alt="Profile Photo of Rama Mohan" />
        <h1 style={{color:"white"}}>Hi, my name is Rama Mohan Vithala</h1>
        <p style={{color:"white"}}>Web Developer | UI Developer| Tech Enthusiast | Full stack developer</p>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

function About() {
  return (
    <section id="about">
      <h2>~ About Me ~</h2>
      <img src="https://img.freepik.com/premium-photo/front-view-male-engineer-sitting-his-working-place-with-laptop-suit-work-plan-contractor-occupation-business-job-corporate-project_461922-16161.jpg?ga=GA1.1.1823645783.1707716147&semt=ais_user" alt="Ram's Profile" className="profile-photo" />
      <p>Hello there! I'm Rama Mohan, a Full Stack Developer passionate about creating responsive web applications. With expertise in both front-end and back-end technologies, I enjoy turning ideas into robust digital solutions. My journey began with a fascination for crafting user interfaces and evolved into mastering server-side logic and databases.</p>
      <p>I thrive on challenges, leveraging frameworks like React-Js and Java-Spring Boot to build scalable and efficient applications. My skills include proficiency in HTML5, CSS3, JavaScript, React-Js, Java, Spring Boot, HiberNet,Spring MVC,MySQLS and SQL databases. Whether it's designing intuitive user experiences or optimizing server performance, I'm committed to delivering quality software that meets both user needs and business objectives.</p>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio">
    <h2>~ My Work ~</h2>
    <div className="project" id="project1">
      <h3>Employee Management System</h3>
      <p>The Employee Management System is a comprehensive application designed to streamline human resource operations within an organization. It includes features for managing employee information, such as personal details, employment history, and performance evaluations. The system also facilitates tasks like leave management, payroll processing, and employee scheduling. Built with a user-friendly interface, the application ensures efficient data handling and improves organizational productivity.</p>
      <p style={{fontWeight:"bold"}}>Technologies used: HTML, CSS, Jav Script, React-Js, Java, Spring Boot, MySQL, RESTful APIs.</p>
    </div>
    <div className="project" id="project2">
      <h3>Adactin Hotel Application</h3>
      <p>The Adactin Hotel Booking Application is a robust platform that allows users to search for hotels, view details, and make reservations online. It features a responsive and intuitive user interface designed to enhance the booking experience. Key functionalities include real-time room availability updates, secure payment integration, and booking management. The application ensures seamless interaction between guests and hotel services, optimizing the hospitality experience for both customers and administrators.</p>
    <p style={{fontWeight:"bold"}}>Technologies used: HTML, CSS, JavaScript, React-Js, Java, Spring Boot, MySQL, RESTful APIs.</p>

    </div>
  </section>
  
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>~ Keep in Touch ~</h2>
      <button className="btn btn-default td-btn outline white">Send me a message!</button>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2023 Rama Mohan — All Rights Reserved</p>
    </footer>
  );
}

export default Newport;
