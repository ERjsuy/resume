import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Header */}
      

      {/* Main content */}
      <div className="max-w-3xl mx-auto bg-white text-black rounded-2xl shadow-xl p-10 mt-10">
        <h1 className="text-4xl font-bold mb-4">ПРИВЕТ АЯНА НЕ КОГДА МЕНЯ НЕ ИЗВЕНЯЙ МНЕ НЕ НАДО ТВОИХ ИЗВИНЕНИЙ  👋</h1>
        <p className="text-lg mb-2">🗓 Родился: 13 сентября 2008 года (мне 16 лет)</p>
        <p className="text-lg mb-2">🏫 Учусь в 99 лицее</p>
        <p className="text-lg mb-6">💻 Знаю языки программирования: HTML, CSS, JavaScript, React</p>

        <h2 id="about" className="text-2xl font-semibold mt-6 mb-4">Немного обо мне:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Уверенный в себе, целеустремлённый и креативный</li>
          <li>Легко осваиваю новые технологии и не боюсь сложных задач</li>
          <li>Всегда стремлюсь быть лучше, чем вчера</li>
          <li>Обожаю кодить, снимать крутые видео и вдохновлять других</li>
        </ul>

        {/* Placeholder sections */}
        <h2 id="projects" className="text-2xl font-semibold mt-10 mb-4">Проекты</h2>
        <p className="text-gray-600">Скоро здесь появятся мои лучшие работы!</p>

        <h2 id="charity" className="text-2xl font-semibold mt-10 mb-4">Благотворительность</h2>
        <p className="text-gray-600">Информация о моих инициативах и помощи другим.</p>

        <footer className="mt-10 text-center text-sm text-gray-500">
          © 2025 Ержан. Все права защищены.
        </footer>
      </div>
    </div>
  );
}
