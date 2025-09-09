import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Truck, 
  Package, 
  Warehouse, 
  Globe, 
  Shield, 
  Clock,
  Calculator,
  MapPin,
  Users,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Автомобильные грузоперевозки",
      description: "Перевозка грузов различной сложности по России и СНГ",
      features: ["Грузоподъемность до 40 тонн", "Различные типы кузовов", "Экспресс доставка"],
      link: "/cargo"
    },
    {
      icon: <Package className="h-12 w-12 text-green-600" />,
      title: "Логистические услуги",
      description: "Комплексные решения для оптимизации цепей поставок",
      features: ["Планирование маршрутов", "Управление запасами", "Консультации"],
      link: "/logistics"
    },
    {
      icon: <Warehouse className="h-12 w-12 text-orange-600" />,
      title: "Складские услуги",
      description: "Хранение, обработка и комплектация товаров",
      features: ["Современные склады", "Система WMS", "Температурные режимы"],
      link: "/warehouses"
    },
    {
      icon: <Globe className="h-12 w-12 text-purple-600" />,
      title: "Международные перевозки",
      description: "Доставка грузов в страны Европы, Азии и СНГ",
      features: ["Таможенное оформление", "Страхование грузов", "Мультимодальные перевозки"],
      link: "/international"
    }
  ];

  const additionalServices = [
    {
      title: "Экспресс доставка",
      description: "Срочная доставка грузов в кратчайшие сроки",
      link: "/express"
    },
    {
      title: "Негабаритные перевозки",
      description: "Транспортировка крупногабаритных и тяжеловесных грузов",
      link: "/oversized"
    },
    {
      title: "Рефрижераторные перевозки",
      description: "Доставка грузов с соблюдением температурного режима",
      link: "/refrigerated"
    },
    {
      title: "Страхование грузов",
      description: "Полная защита вашего груза от рисков",
      link: "/insurance"
    },
    {
      title: "Упаковка и маркировка",
      description: "Профессиональная подготовка грузов к транспортировке",
      link: "/packaging"
    },
    {
      title: "Консультации по логистике",
      description: "Экспертная помощь в оптимизации логистических процессов",
      link: "/consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-gray-200">
              Полный спектр транспортных и логистических услуг для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Основные направления</h2>
            <p className="text-xl text-gray-600">
              Профессиональные решения для любых транспортных задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button className="w-full">
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-gray-600">
              Расширенный функционал для комплексного обслуживания
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Узнать больше
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">
              Почему клиенты выбирают именно нас
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Надежность</h3>
              <p className="text-gray-600">Гарантия сохранности и своевременной доставки</p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Скорость</h3>
              <p className="text-gray-600">Оптимальные маршруты и сжатые сроки</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
              <p className="text-gray-600">Опытная команда специалистов</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">Высокие стандарты обслуживания</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Наши специалисты помогут выбрать оптимальное решение для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              <Calculator className="mr-2 h-4 w-4" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;