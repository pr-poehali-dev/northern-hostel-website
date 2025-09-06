import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Wifi, Coffee, Car, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const rooms = [
    {
      id: 1,
      title: 'Общая комната на 4 человека',
      price: '800',
      image: 'https://cdn.poehali.dev/files/e593b04c-b7a6-4cff-bf03-32168db0a233.jpeg',
      beds: '2 двухъярусные кровати',
      amenities: ['Wi-Fi', 'Общая кухня', 'Парковка']
    },
    {
      id: 2,
      title: 'Общая комната с кухней',
      price: '950',
      image: 'https://cdn.poehali.dev/files/ece0518e-9c37-4cf5-a8d5-aa484be407d8.jpeg',
      beds: '6 спальных мест',
      amenities: ['Wi-Fi', 'Кухня', 'Холодильник', 'Микроволновка']
    },
    {
      id: 3,
      title: 'Компактная комната',
      price: '600',
      image: 'https://cdn.poehali.dev/files/e118f3b0-b6a6-4c5c-97f0-bbf76ed3ada8.jpeg',
      beds: '2 спальных места',
      amenities: ['Wi-Fi', 'Общая кухня', 'Стол для работы']
    }
  ];

  const amenities = [
    { icon: 'Wifi', name: 'Бесплатный Wi-Fi' },
    { icon: 'Coffee', name: 'Общая кухня' },
    { icon: 'Car', name: 'Парковка' },
    { icon: 'Shield', name: '24/7 охрана' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличное место! Очень чисто, уютно и современно. Персонал дружелюбный.',
      date: 'Сентябрь 2024'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Прекрасное расположение, удобная кухня, все необходимое есть. Рекомендую!',
      date: 'Август 2024'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 4,
      text: 'Хороший хостел по разумной цене. Тихо и спокойно, всё работает.',
      date: 'Июль 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-montserrat font-bold text-sm">С</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-foreground">Северный</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#rooms" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Номера</a>
              <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Галерея</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">О нас</a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Контакты</a>
            </div>
            <Button className="font-medium">Забронировать</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-foreground mb-6">
                Хостел <span className="text-primary">Северный</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Современный хостел в центре Краснодара. Комфортабельные номера, 
                уютная атмосфера и доступные цены для вашего идеального отдыха.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8 py-3">
                  Забронировать сейчас
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Виртуальный тур
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name={amenity.icon as any} size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-background border-border shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-2xl mb-6 text-center">Забронировать номер</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Заезд</label>
                        <div className="relative">
                          <Input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="pl-10"
                          />
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Выезд</label>
                        <div className="relative">
                          <Input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="pl-10"
                          />
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Количество гостей</label>
                      <Input type="number" placeholder="1" min="1" max="8" />
                    </div>
                    <Button className="w-full text-lg py-3">
                      Проверить наличие
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">Наши номера</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите подходящий вариант размещения из наших современных и комфортабельных номеров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{room.title}</h3>
                  <p className="text-muted-foreground mb-4">{room.beds}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-montserrat font-bold text-2xl text-primary">₽{room.price}</span>
                      <span className="text-muted-foreground text-sm">/ночь</span>
                    </div>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Посмотрите на наш уютный хостел изнутри</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://cdn.poehali.dev/files/e593b04c-b7a6-4c5c-97f0-bbf76ed3ada8.jpeg',
              'https://cdn.poehali.dev/files/ece0518e-9c37-4cf5-a8d5-aa484be407d8.jpeg',
              'https://cdn.poehali.dev/files/e118f3b0-b6a6-4c5c-97f0-bbf76ed3ada8.jpeg',
              'https://cdn.poehali.dev/files/b307c78b-733a-414f-aaab-af4d6c07406d.jpeg'
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-foreground mb-6">О хостеле Северный</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Хостел «Северный» — это современное место для комфортабельного проживания в самом центре Краснодара. 
                Мы предлагаем чистые номера, дружелюбный персонал и все необходимые удобства для отличного отдыха.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Круглосуточная работа</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Спальных мест</div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary w-5 h-5" />
                  <span className="text-muted-foreground">Краснодар, ул. Северная 399</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary w-5 h-5" />
                  <span className="text-muted-foreground">+7 (989) 222-78-55</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary w-5 h-5" />
                  <span className="text-muted-foreground">Заезд: 14:00, Выезд: 12:00</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/39da1316-ba9c-4396-8301-745d8f2d3b.jpeg"
                alt="Хостел Северный снаружи"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">Отзывы гостей</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши гости о проживании</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-foreground font-medium">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{review.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для бронирования</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Адрес</h4>
                    <p className="text-muted-foreground">Краснодар, ул. Северная 399</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (989) 222-78-55</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Время заезда</h4>
                    <p className="text-muted-foreground">Заезд: 14:00 | Выезд: 12:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-foreground mb-4">Написать нам</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input placeholder="Email" />
                  <Input placeholder="Сообщение" />
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-16 h-16 text-muted-foreground" />
              </div>
              <p className="text-center text-muted-foreground">
                Интерактивная карта будет загружена здесь
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-montserrat font-bold text-lg">С</span>
              </div>
              <span className="font-montserrat font-bold text-2xl">Хостел Северный</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Современный хостел в самом центре Краснодара
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span>© 2024 Хостел Северный</span>
              <span>•</span>
              <span>+7 (989) 222-78-55</span>
              <span>•</span>
              <span>ул. Северная 399</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}