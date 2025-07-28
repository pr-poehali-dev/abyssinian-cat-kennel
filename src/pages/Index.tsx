import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/936303c7-a8ab-47d1-920c-03a4e5aeca77.jpeg"
              alt="Логотип питомника Domesticani"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-amber-800">Domesticani</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Главная</a>
            <a href="#kittens" className="text-gray-700 hover:text-amber-600 transition-colors">Котята</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors">Галерея</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">О питомнике</a>
            <a href="#contacts" className="text-gray-700 hover:text-amber-600 transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Питомник абиссинских кошек
              <span className="block text-amber-600">Domesticani</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Элегантные и грациозные абиссинские кошки с многолетней родословной. 
              Здоровые котята от титулованных родителей.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              Посмотреть котят
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/75d1cd88-ef65-488e-a9ef-a5880d1a449e.png"
              alt="Заводчик с абиссинской кошкой"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Kittens Section */}
      <section id="kittens" className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Наши котята</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Доступные для резервирования малыши</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Арина", age: "3 месяца", price: "45 000 ₽", color: "Руди", image: "/img/35108d02-d507-41ba-9f4c-671fa5defe20.jpg" },
              { name: "Бонифаций", age: "2 месяца", price: "50 000 ₽", color: "Соррель", image: "/img/8ded44e6-3757-41e5-952c-71fb05a580ab.jpg" },
              { name: "Василиса", age: "4 месяца", price: "40 000 ₽", color: "Фавн", image: "/img/411ade58-54ca-4338-a0cc-2ab5c9f44769.jpg" }
            ].map((kitten, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={kitten.image}
                    alt={`Котёнок ${kitten.name}`}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{kitten.name}</h3>
                    <div className="space-y-1 text-gray-600 mb-4">
                      <p>Возраст: {kitten.age}</p>
                      <p>Окрас: {kitten.color}</p>
                      <p className="text-amber-600 font-semibold text-lg">{kitten.price}</p>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Галерея</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Красота абиссинской породы в фотографиях</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="https://cdn.poehali.dev/files/35486ef3-7714-41fd-90b9-8ffe798f6100.jpg"
                  alt={`Галерея ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-amber-50">
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
            <p>
              Все наши производители имеют чемпионские титулы и прошли полное ветеринарное 
              обследование. Котята передаются новым владельцам с документами, ветпаспортом 
              и полным пакетом рекомендаций по содержанию.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                  <p className="text-gray-600">Москва, Россия</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@domesticani.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Время работы</h3>
                  <p className="text-gray-600">Ежедневно с 10:00 до 20:00</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                ></textarea>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <Icon name="Cat" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold">Domesticani</span>
          </div>
          <p className="text-gray-400 mb-4">Питомник абиссинских кошек</p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
            <Icon name="Phone" size={24} className="text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;