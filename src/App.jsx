import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-3xl mx-auto bg-white text-black rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-4">Привет! Меня зовут Эржан 👋</h1>
        <p className="text-lg mb-2">🗓 Родился: 13 сентября 2008 года (мне 16 лет)</p>
        <p className="text-lg mb-2">🏫 Учусь в 99 лицее</p>
        <p className="text-lg mb-6">💻 Знаю языки программирования: HTML, CSS, JavaScript, React  </p>
        <p className="text-lg mt-2">💻Занимаюс програмированием 2 года, b  знаю Frontend </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Немного обо мне:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Уверенный в себе, целеустремлённый и креативный</li>
          <li>Легко осваиваю новые технологии и не боюсь сложных задач</li>
          <li>Всегда стремлюсь быть лучше, чем вчера</li>
          <li>Обожаю кодить, снимать крутые видео и вдохновлять других</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Конакты:</h2>
        <p>Номер: +996 704 130 908</p>
         <a href="https://t.me/@Nekitigoser"><p>ТГ: Warker </p></a> 

        <footer className="mt-10 text-center text-sm text-gray-500">
          © 2025 Ержан. Все права защищены.
        </footer>
      </div>
    </div>
  );
}
