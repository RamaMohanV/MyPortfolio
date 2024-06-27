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
        <p style={{color:'white'}}>Web Developer | UI Developer| Tech Enthusiast | Full stack developer</p>
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
        <div class="container mt-3 contactContent">
            <h1 class="text-center">Contact Me</h1>

            <div class="row mt-4">
                <div class="col-lg-6">
                   
                    <div style={{maxwidth:"100%",overflow:"hidden",color:"red",width:"500px",height:"500px"}}>
                        <div id="embedmap-canvas" style={{height:"100%", width:"100%",maxwidth:"100%"}}>
                            <iframe style={{height:"100%",width:"100%",border:"0"}} frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.47787204565!2d78.07836299470652!3d17.41273323120619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1719483552320!5m2!1sen!2sin">
                            </iframe>
                        </div>
                        <a class="googlemaps-html" href="https://www.embed-map.com" id="get-data-forembedmap">https://www.embed-map.com</a>
                        {/* <style>#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}
                        </style> */}
                    </div>
                </div>

                <div class="col-lg-8">
                  <div className='card'>
                    
                    <form>
                        <input type="text" class="form-control form-control-lg" placeholder="Name"/><br/>
                        <input type="email" class="form-control mt-3" placeholder="Email"/><br/>
                        <input type="text" class="form-control mt-3" placeholder="Subject"/><br/>
                        <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details" style={{width:"8cm",borderRadius:"5px"}}></textarea>
                        </div>
                    </form>
                    <button type="button" class="button type1">Contact Me</button>
                    </div>
                </div>

            </div>
        </div>
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
