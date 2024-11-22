import React from 'react';
import { Github, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-medium">大島千尋</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">同志社大学大学院1年生</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            フロントエンド開発とUI/UXデザインに情熱を持つエンジニア。
            最新技術のトレンドを追いながら、使いやすく美しいインターフェースの創造を目指しています。
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Booking Resort レジデンスヴィラ管理システム</h3>
              <p className="text-gray-600 mb-4">
                ホテルコンドミニアムのプレゼン用システムの設計・開発を担当。
                効率的な予約管理と顧客体験の向上を実現。
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/" 
                   className="inline-flex items-center text-gray-700 hover:text-gray-900">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cloud</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Contact</h2>
          <div className="flex flex-col space-y-4">
            <a href="mailto:IstilusK@gmail.com" 
               className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <Mail className="w-5 h-5 mr-2" />
              IstilusK@gmail.com
            </a>
            <a href="https://github.com/" 
               className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 大島千尋. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;