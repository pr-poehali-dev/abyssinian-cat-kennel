import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-cyan-300 to-blue-400 relative overflow-hidden">
      {/* VK Icon in top right */}
      <div className="absolute top-6 right-6 z-10">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">VK</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Image */}
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/75d1cd88-ef65-488e-a9ef-a5880d1a449e.png"
              alt="Заводчик с абиссинской кошкой"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left space-y-8">
            {/* Cat silhouette icon */}
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    d="M20 80 Q30 60 40 70 Q50 50 60 70 Q70 60 80 80 Q70 90 50 85 Q30 90 20 80 Z" 
                    fill="black" 
                    opacity="0.8"
                  />
                  <path 
                    d="M35 45 Q40 40 45 45 Q50 40 55 45" 
                    stroke="black" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Abyssinian cattery
              </h1>
              
              <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Domesticani
              </h2>
              
              <p className="text-2xl md:text-3xl text-black italic font-medium">
                Питомник абиссинских котов
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6 mt-12">
              <div className="flex justify-center md:justify-start space-x-8 md:space-x-12">
                <a 
                  href="#cats" 
                  className="text-3xl md:text-4xl font-bold text-black hover:text-gray-700 transition-colors cursor-pointer"
                >
                  КОТЫ
                </a>
                <a 
                  href="#cats" 
                  className="text-3xl md:text-4xl font-bold text-black hover:text-gray-700 transition-colors cursor-pointer"
                >
                  КОШКИ
                </a>
                <a 
                  href="#kittens" 
                  className="text-3xl md:text-4xl font-bold text-black hover:text-gray-700 transition-colors cursor-pointer"
                >
                  КОТЯТА
                </a>
              </div>
              
              <div className="flex justify-center md:justify-start mt-8">
                <a 
                  href="#about" 
                  className="text-4xl md:text-5xl font-bold text-black hover:text-gray-700 transition-colors cursor-pointer"
                >
                  О НАС
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections (hidden initially, can be scrolled to) */}
      <div className="hidden">
        {/* Cats Section */}
        <section id="cats" className="min-h-screen bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Наши производители</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-amber-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Коты</h3>
                <p className="text-gray-700">Информация о котах-производителях</p>
              </div>
              <div className="bg-amber-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Кошки</h3>
                <p className="text-gray-700">Информация о кошках-производителях</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kittens Section */}
        <section id="kittens" className="min-h-screen bg-amber-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Котята</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Арина", age: "3 месяца", price: "45 000 ₽", color: "Руди", image: "/img/35108d02-d507-41ba-9f4c-671fa5defe20.jpg" },
                { name: "Бонифаций", age: "2 месяца", price: "50 000 ₽", color: "Соррель", image: "/img/8ded44e6-3757-41e5-952c-71fb05a580ab.jpg" },
                { name: "Василиса", age: "4 месяца", price: "40 000 ₽", color: "Фавн", image: "/img/411ade58-54ca-4338-a0cc-2ab5c9f44769.jpg" }
              ].map((kitten, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <img 
                    src={kitten.image}
                    alt={`Котёнок ${kitten.name}`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{kitten.name}</h3>
                  <p className="text-gray-600">Возраст: {kitten.age}</p>
                  <p className="text-gray-600">Окрас: {kitten.color}</p>
                  <p className="text-amber-600 font-bold text-lg">{kitten.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">О питомнике Domesticani</h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
              <p>
                Наш питомник специализируется на разведении абиссинских кошек более 10 лет. 
                Мы гордимся здоровьем и характером наших питомцев, каждый котёнок выращивается 
                с особой заботой и любовью.
              </p>
              <p>
                Абиссинские кошки — это воплощение грации и элегантности. Их короткая блестящая 
                шерсть с тикингом, выразительные глаза и активный характер делают их идеальными 
                компаньонами для семьи.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;