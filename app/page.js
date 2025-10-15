// Structured data for homepage
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Person", "WebPage"],
  "@id": "https://my-portfolio-mreskys-projects.vercel.app/#person",
  name: "Muhammad Resky Rachmanto",
  alternateName: "Resky Rachmanto",
  jobTitle: ["Chemical Engineer", "Python Developer", "Data Scientist", "Web Developer"],
  description: "Chemical Engineer, Python Enthusiast, Data Scientist, and Fullstack Developer passionate about technology and innovation.",
  url: "https://my-portfolio-mreskys-projects.vercel.app/",
  sameAs: [
    "https://github.com/mresky",
    "https://linkedin.com/in/muhammad-resky-rachmanto"
  ],
  knowsAbout: [
    "Chemical Engineering",
    "Python Programming",
    "Data Science", 
    "Machine Learning",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://my-portfolio-mreskys-projects.vercel.app/"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />
      
      {/* Navigation with underline animation */}
      <nav 
        className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50 transition-all duration-300 hover:bg-background/90"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold hover:scale-110 transition-transform cursor-pointer">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8" role="menubar">
              <a 
                href="#home" 
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to Home section"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </a>
              <a 
                href="#about" 
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to About section"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </a>
              <a 
                href="#skills" 
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to Skills section"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </a>
              <a 
                href="#projects" 
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to Projects section"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </a>
              <a 
                href="#contact" 
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to Contact section"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with stars */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
          {/* Stars Animation */}
          <div className="stars-container absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star absolute rounded-full bg-blue-400 dark:bg-blue-300"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              />
            ))}
          </div>

          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse hover:scale-110 transition-transform cursor-pointer">Resky Rachmanto</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 mb-8 animate-fade-in-delayed">
            Chemical Engineer | Python Enthusiast | Aspiring Data Scientist & Web Developer
          </p>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fade-in-delayed-2">
            I'm passionate about learning Python, Data Science, and modern web development.
            I enjoy building simple projects and exploring how technology can solve real-world problems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delayed-3">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-foreground/20 rounded-lg hover:bg-foreground/5 hover:scale-105 hover:border-blue-500 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section with decorative elements */}
      <section id="about" className="py-20 px-4 bg-foreground/5 relative overflow-hidden">
        {/* Decorative animated circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center hover:scale-105 transition-transform inline-block w-full cursor-pointer">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80">
            <p className="hover:translate-x-4 hover:scale-105 transition-all duration-500 p-6 rounded-lg hover:bg-background/50 hover:shadow-2xl cursor-pointer relative group border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r"></span>
              Hello! I'm an aspiring web developer and data science enthusiast with a background in Chemical Engineering.
              I'm passionate about learning how technology and data can solve real-world problems.
            </p>
            <p className="hover:translate-x-4 hover:scale-105 transition-all duration-500 p-6 rounded-lg hover:bg-background/50 hover:shadow-2xl cursor-pointer relative group border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r"></span>
              My journey started with Python, and I'm currently exploring web development using frameworks like React and Next.js.
              While I'm still learning and often experiment by adapting existing projects, I enjoy understanding how each part works and improving step by step.
            </p>
            <p className="hover:translate-x-4 hover:scale-105 transition-all duration-500 p-6 rounded-lg hover:bg-background/50 hover:shadow-2xl cursor-pointer relative group border border-transparent hover:border-green-200 dark:hover:border-green-800">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r"></span>
              When I'm not coding, I love exploring data-driven projects, learning new tools, and expanding my knowledge in both web development and data science.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section with grid background */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 animate-grid-move" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center hover:scale-105 transition-transform inline-block w-full cursor-pointer">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Frontend */}
            <div className="p-6 border border-foreground/10 rounded-lg hover:border-blue-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 bg-background/50 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🎨</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Frontend</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:translate-x-4 hover:text-blue-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded">• HTML5 & CSS3</li>
                <li className="hover:translate-x-4 hover:text-blue-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded">• Tailwind CSS</li>
                <li className="hover:translate-x-4 hover:text-blue-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded">• React (Learning)</li>
                <li className="hover:translate-x-4 hover:text-blue-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded">• Next.js (Learning)</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 border border-foreground/10 rounded-lg hover:border-green-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 bg-background/50 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">⚙️</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Backend</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:translate-x-4 hover:text-green-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-green-50 dark:hover:bg-green-950 p-2 rounded">• Python</li>
                <li className="hover:translate-x-4 hover:text-green-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-green-50 dark:hover:bg-green-950 p-2 rounded">• FastAPI (Learning)</li>
                <li className="hover:translate-x-4 hover:text-green-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-green-50 dark:hover:bg-green-950 p-2 rounded">• RESTful APIs</li>
                <li className="hover:translate-x-4 hover:text-green-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-green-50 dark:hover:bg-green-950 p-2 rounded">• Basic Database Handling (SQLite / PostgreSQL)</li>
              </ul>
            </div>

            {/* Data Science */}
            <div className="p-6 border border-foreground/10 rounded-lg hover:border-purple-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 bg-background/50 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">📊</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Data Science & Analysis</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:translate-x-4 hover:text-purple-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 p-2 rounded">• Pandas & NumPy</li>
                <li className="hover:translate-x-4 hover:text-purple-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 p-2 rounded">• Scikit-learn (Basics)</li>
                <li className="hover:translate-x-4 hover:text-purple-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 p-2 rounded">• Data Visualization (Matplotlib, Seaborn)</li>
                <li className="hover:translate-x-4 hover:text-purple-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 p-2 rounded">• Machine Learning Fundamentals</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="p-6 border border-foreground/10 rounded-lg hover:border-orange-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 bg-background/50 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🛠️</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Tools & Environment</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:translate-x-4 hover:text-orange-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-950 p-2 rounded">• Git & GitHub</li>
                <li className="hover:translate-x-4 hover:text-orange-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-950 p-2 rounded">• VS Code</li>
                <li className="hover:translate-x-4 hover:text-orange-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-950 p-2 rounded">• Jupyter Notebook</li>
                <li className="hover:translate-x-4 hover:text-orange-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-950 p-2 rounded">• Docker (Learning)</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-6 border border-foreground/10 rounded-lg hover:border-pink-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 bg-background/50 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">💡</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Soft Skills</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:translate-x-4 hover:text-pink-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-950 p-2 rounded">• Problem Solving</li>
                <li className="hover:translate-x-4 hover:text-pink-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-950 p-2 rounded">• Continuous Learning</li>
                <li className="hover:translate-x-4 hover:text-pink-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-950 p-2 rounded">• Team Collaboration</li>
                <li className="hover:translate-x-4 hover:text-pink-500 transition-all duration-300 hover:font-medium cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-950 p-2 rounded">• Research & Analytical Thinking</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* Projects Section with enhanced animations */}
      <section id="projects" className="py-20 px-4 bg-foreground/5 relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-float opacity-50"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-purple-500 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center hover:scale-105 transition-transform inline-block w-full cursor-pointer">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 - Morse Code Converter */}
            <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 group cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/morse.png"
                  alt="Morse Code Converter Project"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Python Morse Code Converter</h3>
                <p className="text-foreground/70 mb-4">
                  A Python scripting project that converts text into Morse code and plays the corresponding beeps.
                  It helped me understand basic text processing, sound generation, and logic flow in Python.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded text-sm hover:scale-110 transition-transform">Python</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded text-sm hover:scale-110 transition-transform">Scripting</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MRESKY/1-Python_Scripting_Text_Morse_Code"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Snake Game */}
            <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 group cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/snake.png"
                  alt="Snake Game Project"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Snake Game</h3>
                <p className="text-foreground/70 mb-4">
                  A simple Snake game built with Python and Pygame.
                  This project enhanced my understanding of game loops, event handling, and collision detection in Python.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded text-sm hover:scale-110 transition-transform">Python</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-sm hover:scale-110 transition-transform">Pygame</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MRESKY/Game_Snake"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Tic Tac Toe */}
            <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 group cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/tictactoe.png"
                  alt="Tic Tac Toe Project"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Tic Tac Toe Game</h3>
                <p className="text-foreground/70 mb-4">
                  A classic Tic Tac Toe game implemented in Python.
                  This project helped me practice functions, conditionals, and user input handling in Python.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded text-sm hover:scale-110 transition-transform">Python</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-sm hover:scale-110 transition-transform">Pygame</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MRESKY/3-Python_Scripting_Tic_Tac_Toe"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 - Automation Data Entry (get hearing information) */}
            <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 group cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/automation_data_entry.png"
                  alt="Automation Data Entry Project"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Automation Data Entry (Get Hearing Information)</h3>
                <p className="text-foreground/70 mb-4">
                  A project focused on automating the data entry process for hearing information.
                  This involved web scraping, data cleaning, and integration with existing databases.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded text-sm hover:scale-110 transition-transform">Python</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-sm hover:scale-110 transition-transform">Beautiful Soup</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded text-sm hover:scale-110 transition-transform">Selenium</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MRESKY/Data_Entry_Bot1/blob/main/trial_data_entry.py"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href="https://www.linkedin.com/pulse/web-scraping-automation-dengan-python-beautifulsoup-rachmanto-34fdc/?trackingId=FUXysnHnkuOsmK%2BfMlueKA%3D%3D"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View LinkedIn Post
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 - Simulasi Reaktor Kimia Sederhana (pendekatan OOP) */}
            <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 group cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/simulasi_reaktor.png"
                  alt="Simulasi Reaktor Kimia Sederhana Project"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Simple Chemical Reactor Simulation (OOP Approach)</h3>
                <p className="text-foreground/70 mb-4">
                  A simple chemical reactor simulation using Object-Oriented Programming (OOP) in Python.
                  This project helped me apply my chemical engineering knowledge while improving my programming skills.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded text-sm hover:scale-110 transition-transform">Python</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-600 dark:text-red-400 rounded text-sm hover:scale-110 transition-transform">OOP</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-sm hover:scale-110 transition-transform">Simulation</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MRESKY/Simulasi_Reactor"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
                

            {/* Project - Private Projects */}
            <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 group cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/coming_soon.png"
                  alt="Coming Soon Project"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Private Projects</h3>
                <p className="text-foreground/70 mb-4">
                  Several ongoing and private projects focused on web development and data analysis.
                  These include experiments with FastAPI, React, and data processing pipelines.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded text-sm hover:scale-110 transition-transform">FastAPI</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-sm hover:scale-110 transition-transform">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded text-sm hover:scale-110 transition-transform">Data Science</span>
                </div>
                <p className="text-sm text-foreground/50 italic">More projects coming soon...</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section with pulse effect */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 hover:scale-105 transition-transform inline-block cursor-pointer">Get In Touch</h2>
          <p className="text-xl text-foreground/70 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:muhreskyrachmanto@gmail.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">📧 Send Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <a
              href="https://github.com/MRESKY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-foreground/20 rounded-lg hover:bg-foreground/5 hover:scale-110 hover:rotate-2 hover:border-blue-500 hover:shadow-xl transition-all duration-500 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">💻 GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-resky-rachmanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-foreground/20 rounded-lg hover:bg-foreground/5 hover:scale-110 hover:rotate-2 hover:border-blue-500 hover:shadow-xl transition-all duration-500 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">💼 LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer with hover effect */}
      <footer className="py-8 px-4 border-t border-foreground/10 text-center text-foreground/60 hover:text-foreground transition-colors">
        <p className="hover:scale-105 transition-transform inline-block">
          © 2025 Muhammad Resky Rachmanto. Built with Next.js & Tailwind CSS ✨
        </p>
      </footer>
    </div>
  );
}
