
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Download, ExternalLink, Menu, X, Computer, Smartphone, Palette, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [typewriterText, setTypewriterText] = useState("");
  const { toast } = useToast();
  
  const fullText = "Hi! I'm Imalka, a 3rd-year IT student who loves turning ideas into digital reality. I specialize in mobile apps, website UI/UX design, and full-stack development. My passion lies in solving real-world problems through technology.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      name: "E-Commerce Mobile App",
      description: "Flutter-based shopping app with real-time inventory",
      techStack: ["Flutter", "Firebase", "Dart"],
      category: "Mobile Apps",
      github: "https://github.com/YOURUSERNAME/ecommerce-app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      name: "Portfolio Website",
      description: "Responsive React portfolio with modern animations",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      category: "Websites",
      github: "https://github.com/YOURUSERNAME/portfolio",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      name: "Task Management UI",
      description: "Clean and intuitive task management interface",
      techStack: ["Figma", "Adobe XD", "Prototyping"],
      category: "UI Designs",
      github: "https://github.com/YOURUSERNAME/task-ui",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      name: "Weather App",
      description: "Native Android weather app with location services",
      techStack: ["Java", "Android Studio", "REST API"],
      category: "Mobile Apps",
      github: "https://github.com/YOURUSERNAME/weather-app",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"
    },
    {
      name: "Restaurant Website",
      description: "Full-stack restaurant booking system",
      techStack: ["Node.js", "Express", "MongoDB"],
      category: "Websites",
      github: "https://github.com/YOURUSERNAME/restaurant-site",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      name: "Banking App Design",
      description: "Modern banking app interface with dark mode",
      techStack: ["Figma", "Sketch", "Principle"],
      category: "UI Designs",
      github: "https://github.com/YOURUSERNAME/banking-ui",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Imalka Lakshitha
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">About Me</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors text-left">About Me</button>
                <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors text-left">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors text-left">Contact</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
                  alt="Imalka Lakshitha" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Imalka Lakshitha
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-400 font-semibold">
            3rd Year IT Undergraduate
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Passionate about mobile apps, web development, and UI design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <Github className="mr-2" size={20} />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed min-h-[120px]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="text-center animate-fade-in">
              <Computer className="w-12 h-12 mx-auto mb-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer" />
              <p className="text-sm text-slate-400">Development</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Smartphone className="w-12 h-12 mx-auto mb-2 text-green-400 hover:text-green-300 transition-colors cursor-pointer" />
              <p className="text-sm text-slate-400">Mobile Apps</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Palette className="w-12 h-12 mx-auto mb-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer" />
              <p className="text-sm text-slate-400">UI Design</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Brain className="w-12 h-12 mx-auto mb-2 text-pink-400 hover:text-pink-300 transition-colors cursor-pointer" />
              <p className="text-sm text-slate-400">Problem Solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Mobile Apps", "Websites", "UI Designs"].map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.name} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2" size={16} />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 mb-8 text-lg">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://www.linkedin.com/in/YOURUSERNAME', '_blank')}
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://github.com/YOURUSERNAME', '_blank')}
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Imalka Lakshitha | Built with 💻 & ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
