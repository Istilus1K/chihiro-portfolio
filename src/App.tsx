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
              <a href="#artworks" className="text-gray-700 hover:text-gray-900">Artworks</a>
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
              <a href="#artworks" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Artworks</a>
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
                <a
                  href="https://www.residence-villa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  レジデンスヴィラ
                </a>の業務システムの開発。<br/>
                顧客、施設、予約等の効率的な管理を実現。
              </p>
              <div className="flex space-x-4"></div>
            </div>
          </div>

          <div className="my-4"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">みらいパーク ゲーム開発</h4>
              <p className="text-gray-600 mb-4">
                <a
                  href="https://miraii-park.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  みらいパーク
                </a>掲載のゲームを複数作成。<br/>
                直感的で自由度の高い実装を重視。
              </p>
              <div className="flex space-x-4"></div>
            </div>
          </div>
        </div>
      </section>

{/* Artworks Section */}
<section id="artworks" className="py-16 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12">Artworks</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col">
        <img
          src="public/artworks/IMG_1972@2x.PNG"
          srcSet="public/artworks/IMG_1972.PNG 1x, public/artworks/IMG_1972@2x.PNG 2x"
          alt="Artwork 1"
          className="w-full object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">浮き、沈み</h3>
        <p className="text-gray-600">アクリル絵の具</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col">
        <img
          src="public/artworks/IMG_9121@2x.PNG"
          srcSet="public/artworks/IMG_9121.PNG 1x, public/artworks/IMG_9121@2x.PNG 2x"
          alt="Artwork 2"
          className="w-full object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">石膏像</h3>
        <p className="text-gray-600">デッサン</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col">
        <img
          src="public/artworks/IMG_0238@2x.PNG"
          srcSet="public/artworks/IMG_0238.PNG 1x, public/artworks/IMG_0238@2x.PNG 2x"
          alt="Artwork 3"
          className="w-full object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">ホラガイ</h3>
        <p className="text-gray-600">デッサン</p>
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
            <a href="https://github.com/Istilus1K/" 
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
