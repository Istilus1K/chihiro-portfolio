import React from "react";
import { Github, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

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
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">
                Projects
              </a>
              <a
                href="#research-presentations" /* 追加 */
                className="text-gray-700 hover:text-gray-900"
              >
                Research Presentation
              </a>
              <a href="#artworks" className="text-gray-700 hover:text-gray-900">
                Artworks
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
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
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Projects
              </a>
              <a
                href="#research-presentations" /* 追加 */
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Research Presentation
              </a>
              <a
                href="#artworks"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Artworks
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Chihiro Oshima</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            情報システム研究室所属。
            <br />
            開発プロジェクトや学会発表に積極的に参加。
            <br />
            また、絵を中心に様々な趣味にも力を入れている。
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Booking Resort レジデンスヴィラ管理システム
              </h3>
              <p className="text-gray-600 mb-4">
                <a
                  href="https://www.residence-villa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  レジデンスヴィラ
                </a>
                の業務システムの開発。
                <br />
                顧客、施設、予約等の効率的な管理を実現。
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                みらいパーク ゲーム開発
              </h4>
              <p className="text-gray-600 mb-4">
                <a
                  href="https://miraii-park.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  みらいパーク
                </a>
                掲載のゲームを複数作成。
                <br />
                直感的で自由度の高い実装を重視。
              </p>
              <p className="text-gray-600 mb-2">
                <a
                  href="/videos/20250119_レントゲン.mp4" // publicフォルダー内のビデオファイルへのパス
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  ゲームの詳細はこちら
                </a>
              </p>
              {/* <video
                src="../public/videos/20250119_レントゲン.mp4" // publicフォルダー内のビデオファイルへのパス
                width="100%"
                controls
              >
                お使いのブラウザはビデオタグをサポートしていません。
              </video> */}
            </div>
          </div>

          <div className="my-4"></div>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                日立ヴァンタラ株式会社 インターンシップ
              </h4>
              <p className="text-gray-600 mb-4">
                テーマ：【SE(プロジェクトガバナンススペシャリスト)
                】ハイブリッドクラウドIT環境向けSoftware Defined
                Storageのビジネス計画策定
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Presentations Section */}
      <section id="research-presentations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Research Presentations</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                2023年電子情報通信学会ソサイエティ大会
              </h3>
              <p className="text-gray-600 mb-4">
                論文:「クラウドソーシングを利用した議事録作成における話者認識」
                <br />
                <a
                  href="https://confit.atlas.jp/guide/event/society2023/subject/A-14-3/classlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  講演情報
                </a>
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                情報処理学会　第166回情報システムと社会環境研究会
              </h3>
              <p className="text-gray-600 mb-4">
                論文:「クラウドソーシングにおける話者認識タスクの検討」
                <br />
                <a
                  href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202402242749928283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  論文リンク
                </a>
              </p>
            </div>
          </div>

          <div className="my-4"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                第28回学生会研究発表講演会
              </h3>
              <p className="text-gray-600 mb-4">
                論文:「クラウドソーシングによる話者認識タスクの検討」
                <br />
                <a
                  href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=230490&item_no=1&page_id=13&block_id=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  論文リンク
                </a>
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                第32回 マルチメディア通信と分散処理ワークショップ
              </h3>
              <p className="text-gray-600 mb-4">
                論文:「speaker diarizatonの精度低下要因の考察」
                <br />
                <a
                  href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=240100&item_no=1&page_id=13&block_id=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  論文リンク
                </a>
              </p>
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
                src="/artworks/kuzira.png"
                alt="Artwork 1"
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">浮き、沈み</h3>
              <p className="text-gray-600">アクリル絵の具</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col">
              <img
                src="/artworks/mama.png"
                alt="Artwork 2"
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">石膏像</h3>
              <p className="text-gray-600">デッサン</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col">
              <img
                src="/artworks/horagai.png"
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
      <section id="contact" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Contact</h2>
          <p className="text-gray-600 mb-4">
            Email: chihiro.oshima@myemail.com
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Istilus1K"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="mailto:IstilusK@gmail.com"
              className="inline-flex items-center justify-center w-8 h-8 text-gray-700 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://zenn.dev/chihiro_0203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gray-700">Zenn</span>
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
