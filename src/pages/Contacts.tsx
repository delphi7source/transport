import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';

const Contacts = () => {
  const offices = [
    {
      city: "Москва (Головной офис)",
      address: "ул. Транспортная, 15, офис 301",
      phone: "+7 (495) 123-45-67",
      email: "moscow@transgruz.ru",
      hours: "Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00"
    },
    {
      city: "Санкт-Петербург",
      address: "пр. Логистический, 42",
      phone: "+7 (812) 987-65-43",
      email: "spb@transgruz.ru",
      hours: "Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00"
    },
    {
      city: "Екатеринбург",
      address: "ул. Грузовая, 28",
      phone: "+7 (343) 555-44-33",
      email: "ekb@transgruz.ru",
      hours: "Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-gray-200">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Отправить сообщение</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон *
                        </label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Тема
                      </label>
                      <Input placeholder="Тема сообщения" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение *
                      </label>
                      <Textarea 
                        placeholder="Опишите ваш запрос..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-lg">Телефон</h3>
                        <p className="text-gray-600">+7 (495) 123-45-67</p>
                        <p className="text-sm text-gray-500">Круглосуточно</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600">info@transgruz.ru</p>
                        <p className="text-sm text-gray-500">Ответим в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-orange-600" />
                      <div>
                        <h3 className="font-semibold text-lg">Адрес</h3>
                        <p className="text-gray-600">Москва, ул. Транспортная, 15</p>
                        <p className="text-sm text-gray-500">Офис 301, 3 этаж</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-8 w-8 text-purple-600" />
                      <div>
                        <h3 className="font-semibold text-lg">Режим работы</h3>
                        <p className="text-gray-600">Пн-Пт: 8:00-20:00</p>
                        <p className="text-gray-600">Сб-Вс: 9:00-18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши офисы</h2>
            <p className="text-xl text-gray-600">
              Представительства в крупных городах России
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">{office.email}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-gray-500 mt-1" />
                      <p className="text-sm text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;