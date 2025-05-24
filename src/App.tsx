import React, { useState, useEffect } from "react";
import { Github, Mail, Menu, X } from "lucide-react";

const translations = {
  ja: {
    name: "大島千尋",
    about: "About",
    projects: "Projects",
    research: "Research Presentation",
    artworks: "Artworks",
    contact: "Contact",
    heroTitle: "Chihiro Oshima",
    heroDesc: (
      <>
        情報システム研究室所属。
        <br />
        開発プロジェクトや学会発表に積極的に参加。
        <br />
        また、絵を中心に様々な趣味にも力を入れている。
      </>
    ),
    projectsTitle: "プロジェクト",
    bookingTitle: "Booking Resort レジデンスヴィラ管理システム",
    bookingDesc: (
      <>
        <a
          href="https://www.nishigaki-group.com/grande-residence-villa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          レジデンスヴィラ
        </a>
        の業務システムの開発。
        <br />
        顧客、施設、予約等の効率的な管理を実現。
      </>
    ),
    miraiTitle: "みらいパーク ゲーム開発",
    miraiDesc: (
      <>
        <a
          href="https://miraii-park.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          みらいパーク
        </a>
        掲載の
        <a
          href="/videos/20250119_レントゲン.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          ゲーム
        </a>
        を複数作成。
        <br />
        直感的で自由度の高い実装を重視。
      </>
    ),
    internshipTitle: "日立ヴァンタラ株式会社 インターンシップ",
    internshipDesc: (
      <>
        テーマ：【SE(プロジェクトガバナンススペシャリスト)】
        ハイブリッドクラウドIT環境向けSoftware Defined
        Storageのビジネス計画策定
        <br />
        企業情報：
        <a
          href="https://www.hitachivantara.com/ja-jp/home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          日立ヴァンタラ株式会社 公式サイト
        </a>
      </>
    ),
    researchTitle: "研究発表",
    research1Title: "2023年電子情報通信学会ソサイエティ大会",
    research1Paper: "論文:「クラウドソーシングを利用した議事録作成における話者認識」",
    research1Link: "講演情報",
    research2Title: "情報処理学会　第166回情報システムと社会環境研究会",
    research2Paper: "論文:「クラウドソーシングにおける話者認識タスクの検討」",
    research2Link: "論文リンク",
    research3Title: "第28回学生会研究発表講演会",
    research3Paper: "論文:「クラウドソーシングによる話者認識タスクの検討」",
    research3Link: "",
    research4Title: "第32回 マルチメディア通信と分散処理ワークショップ（DPSWS 2024）",
    research4Paper: "論文:「speaker diarizatonの精度低下要因の考察」",
    research4Link: "論文リンク",
    artworksTitle: "作品",
    artwork1Title: "浮き、沈み",
    artwork1Material: "アクリル絵の具",
    artwork1Button: "工夫点",
    artwork1Detail: "制作当初、「浮き、沈み」というテーマから、画面の上下で浮いてるものと沈んでいるものを表現しようとしたが、面白みがなかった。そこから、「どのような画面に面白さを感じるか」という視点で考え直した。そして、奥行きや空間を感じるような構図に決まった。また、本来同じ場所には存在しないアヒルとクジラを描くことで、面白い画面にしている。",
    artwork2Title: "石膏像",
    artwork2Material: "デッサン",
    artwork3Title: "法螺貝",
    artwork3Material: "デッサン",
    contactMail: "メール: IstilusK@gmail.com",
    zenn: "Zenn",
    footer: "© 2024 大島千尋. All rights reserved.",
    toggle: "English",
  },
  en: {
    name: "Chihiro Oshima",
    about: "About",
    projects: "Projects",
    research: "Research Presentation",
    artworks: "Artworks",
    contact: "Contact",
    heroTitle: "Chihiro Oshima",
    heroDesc: (
      <>
        Belongs to Information Systems Lab.
        <br />
        Actively participates in development projects and academic conferences.
        <br />
        Also passionate about various hobbies, especially painting.
      </>
    ),
    projectsTitle: "Projects",
    bookingTitle: "Booking Resort Residence Villa Management System",
    bookingDesc: (
      <>
        Development of the business system for
        <a
          href="https://www.nishigaki-group.com/grande-residence-villa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          Residence Villa
        </a>
        .
        <br />
        Efficient management of customers, facilities, and reservations.
      </>
    ),
    miraiTitle: "Mirai Park Game Development",
    miraiDesc: (
      <>
        Created several games listed on
        <a
          href="https://miraii-park.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          Mirai Park
        </a>
        .
        <a
          href="/videos/20250119_レントゲン.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          Game
        </a>
        <br />
        Focused on intuitive and flexible implementation.
      </>
    ),
    internshipTitle: "Hitachi Vantara Internship",
    internshipDesc: (
      <>
        Theme: [SE (Project Governance Specialist)] Business planning for Software Defined Storage for hybrid cloud IT environments.
        <br />
        Company Info:
        <a
          href="https://www.hitachivantara.com/ja-jp/home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          Hitachi Vantara Official Site
        </a>
      </>
    ),
    researchTitle: "Research Presentations",
    research1Title: "2023 IEICE Society Conference",
    research1Paper: "Paper: 'Speaker Recognition in Taking Minutes Using Crowdsourcing'",
    research1Link: "Presentation Info",
    research2Title: "IPSJ 166th Special Interest Group on Information Systems (SIG-IS)",
    research2Paper: "Paper: 'クラウドソーシングにおける話者認識タスクの検討'",
    research2Link: "Paper Link",
    research3Title: "第28回学生会研究発表講演会",
    research3Paper: "Paper: 'クラウドソーシングによる話者認識タスクの検討'",
    research3Link: "",
    research4Title: "第32回 マルチメディア通信と分散処理ワークショップ（DPSWS 2024）",
    research4Paper: "Paper: 'speaker diarizatonの精度低下要因の考察'",
    research4Link: "Paper Link",
    artworksTitle: "Artworks",
    artwork1Title: "Floating and Sinking",
    artwork1Material: "Acrylic paint",
    artwork1Button: "Details",
    artwork1Detail: "At first, I tried to express floating and sinking by placing objects at the top and bottom of the canvas, but it was not interesting. So I reconsidered from the perspective of 'what kind of composition is interesting.' I decided on a composition that gives a sense of depth and space. Also, by drawing a duck and a whale, which do not usually exist in the same place, I made the picture more interesting.",
    artwork2Title: "Plaster Statue",
    artwork2Material: "Drawing",
    artwork3Title: "Conch Shell",
    artwork3Material: "Drawing",
    artwork4Title: "Pitcher",
    artwork4Material: "Drawing",
    contactTitle: "Contact",
    contactMail: "Email: IstilusK@gmail.com",
    zenn: "Zenn",
    footer: "© 2024 Chihiro Oshima. All rights reserved.",
    toggle: "日本語",
  },
};

// 画像ごとにobjectPositionを指定
const artworkImages = [
  { src: "/artworks/kuzira.png", position: "45% 110%" },
  { src: "/artworks/mama.png", position: "20% 0%" },
  { src: "/artworks/horagai.png", position: "10% -50%" },
  { src: "/artworks/pitcher.jpg", position: "60% -20%" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"ja" | "en">("ja");
  const t = translations[lang];

  // スライドショー用
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % artworkImages.length);
        setFade(true);
      }, 500);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-medium">{t.name}</h1>
            </div>
            {/* 言語トグルボタン */}
            <button
              className="mr-4 px-3 py-1 border rounded text-sm hover:bg-neutral-100"
              onClick={() => setLang(lang === "ja" ? "en" : "ja")}
            >
              {t.toggle}
            </button>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                {t.about}
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">
                {t.projects}
              </a>
              <a
                href="#research-presentations"
                className="text-gray-700 hover:text-gray-900"
              >
                {t.research}
              </a>
              <a href="#artworks" className="text-gray-700 hover:text-gray-900">
                {t.artworks}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                {t.contact}
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
                {t.about}
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                {t.projects}
              </a>
              <a
                href="#research-presentations"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                {t.research}
              </a>
              <a
                href="#artworks"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                {t.artworks}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                {t.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:justify-start">
          {/* 左に寄せるためのラッパー */}
          <div className="w-full flex md:block">
            <div className="md:ml-[5%] lg:ml-[5%] xl:ml-0 flex flex-col md:flex-row items-center gap-8" style={{ width: "fit-content" }}>
              {/* 左：画像スライドショー（やや左寄せ・小さめ・丸み） */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shadow-lg relative bg-white/70 border border-neutral-200">
                  <img
                    key={artworkImages[current].src}
                    src={artworkImages[current].src}
                    alt="artwork"
                    className={`w-full h-full object-cover scale-110 transition-all duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
                    style={{
                      objectPosition: artworkImages[current].position, // 画像ごとに位置を指定
                      transitionProperty: "opacity",
                    }}
                  />
                </div>
              </div>
              {/* 右：名前・自己紹介など（画像の右横に縦並び） */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-4xl font-bold mb-2">{t.heroTitle}</h2>
                <p className="text-lg text-gray-600 whitespace-normal md:whitespace-nowrap">{t.heroDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t.projectsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                {t.bookingTitle}
              </h3>
              <p className="text-gray-600 mb-4">{t.bookingDesc}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">{t.miraiTitle}</h4>
              <p className="text-gray-600 mb-4">{t.miraiDesc}</p>
            </div>
          </div>
          <div className="my-4"></div>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                {t.internshipTitle}
              </h4>
              <p className="text-gray-600 mb-4">{t.internshipDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Presentations Section */}
      <section id="research-presentations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t.researchTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.research1Title}</h3>
              <p className="text-gray-600 mb-4">
                {t.research1Paper}
                <br />
                <a
                  href="https://confit.atlas.jp/guide/event/society2023/subject/A-14-3/classlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t.research1Link}
                </a>
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.research2Title}</h3>
              <p className="text-gray-600 mb-4">
                {t.research2Paper}
                <br />
                <a
                  href="https://ipsj.ixsq.nii.ac.jp/records/230490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t.research2Link}
                </a>
              </p>
            </div>
          </div>

          <div className="my-4"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.research3Title}</h3>
              <p className="text-gray-600 mb-4">
                {t.research3Paper}
                {/* 論文3のリンクは表示しない */}
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.research4Title}</h3>
              <p className="text-gray-600 mb-4">
                {t.research4Paper}
                <br />
                <a
                  href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=240100&item_no=1&page_id=13&block_id=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t.research4Link}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <section id="artworks" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t.artworksTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1カラム目：浮き、沈み */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-col relative">
              <img
                src="/artworks/kuzira.png"
                alt={t.artwork1Title}
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{t.artwork1Title}</h3>
              <p className="text-gray-600">{t.artwork1Material}</p>
              <div className="mt-2">
                <button
                  className="text-blue-500 hover:underline focus:outline-none"
                  onClick={() => {
                    const details = document.getElementById('artwork-details-1');
                    if (details) {
                      details.style.display = details.style.display === 'none' ? 'block' : 'none';
                    }
                  }}
                >
                  {t.artwork1Button}
                </button>
                <div id="artwork-details-1" style={{ display: 'none' }} className="absolute top-full left-0 mt-4 p-4 bg-white border rounded-lg shadow-lg w-full text-gray-600">
                  {t.artwork1Detail}
                </div>
              </div>
            </div>
            {/* 2カラム目：石膏像 */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-col">
              <img
                src="/artworks/mama.png"
                alt={t.artwork2Title}
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{t.artwork2Title}</h3>
              <p className="text-gray-600">{t.artwork2Material}</p>
            </div>
            {/* 3カラム目：法螺貝＋ピッチャー（上下） */}
            <div className="flex flex-col gap-8">
              <div className="bg-white p-4 rounded-lg shadow flex flex-col">
                <img
                  src="/artworks/horagai.png"
                  alt={t.artwork3Title}
                  className="w-full object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{t.artwork3Title}</h3>
                <p className="text-gray-600">{t.artwork3Material}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex flex-col">
                <img
                  src="/artworks/pitcher.jpg"
                  alt={t.artwork4Title}
                  className="w-full object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{t.artwork4Title}</h3>
                <p className="text-gray-600">{t.artwork4Material}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t.contactTitle}</h2>
          <p className="text-gray-600 mb-4">{t.contactMail}</p>
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
              <span className="text-gray-700">{t.zenn}</span>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-neutral-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
