# Portofolio_usingFlask

=>PERSONAL PORTOFOLIO WEBSITE
A modern, responsive personal portfolio website built with Flask, showcasing professional skills, projects, and contact information.

->PROJECT STRUCTURE
  portfolio/
  ├── app.py                # Main Flask application
  ├── static/
  │   ├── css/              # CSS stylesheets
  │   └── js/               # JavaScript files 
  └── templates/
      ├── base.html         # Base template
      ├── index.html        # Home page
      ├── about.html        # About page
      ├── projects.html     # Projects page
      └── contact.html      # Contact page

      
 ->CUSTOMIZATION
  Update personal information in the HTML templates:
    templates/index.html - Update hero section
    templates/about.html - Update education, skills, and interests
    templates/projects.html - Update project details and certifications
    templates/contact.html - Update contact information
    
  Modify styles in static/css/style.css:
    Change color scheme in :root variables
    Adjust layouts and spacing as needed
    Update background images
  Add your own projects and certifications in projects.html


 ->FEATURES
  Professional Design: Clean, modern UI with responsive layout
  Complete Sections: Home, About, Projects, and Contact pages
  Dynamic Content: Flask-powered templates with active navigation
  Contact Form: Functional form with validation and flash messages
  Mobile Responsive: Works on all device sizes
  Tech Background: Eye-catching technology-themed home page


->TECHNOLOGIES USED
  Frontend: HTML5, CSS3, JavaScript
  Backend: Python, Flask
  Icons: Font Awesome
  Hosting: Local development (can be deployed to Heroku, AWS, etc.)

=>INSTALLATION
  1.Clone the repository:
    git clone https://github.com/yourusername/your-portfolio.git
    cd your-portfolio
  2.Create a virtual environment (recommended):
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
  3.Install dependencies:
    pip install -r requirements.txt
  4.Run the application:
    python app.py
  5.Visit the website:
    http://localhost:5000

  
