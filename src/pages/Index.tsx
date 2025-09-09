import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Truck, 
  Shield, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  Phone, 
  Calculator,
  Package,
  Globe,
  Warehouse,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  PlayCircle
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Грузоперевозки",
      description: "Автомобильные перевозки по России и СНГ",
      link: "/cargo"
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      title: "Логистика",
      description: "Комплексные логистические решения",
      link: "/logistics"
    },
    {
      icon: <Warehouse className="h-8 w-8 text-orange-600" />,
      title: "Складские услуги",
      description: "Хранение и обработка грузов",
      link: "/warehouses"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Международные перевозки",
      description: "Доставка в страны Европы и Азии",
      link: "/international"
    }
  ];

  const advantages = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Надежность",
      description: "100% гарантия сохранности груза"
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Скорость",
      description: "Доставка точно в срок"
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Опыт",
      description: "Более 15 лет на рынке"
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: "Качество",
      description: "Высокие стандарты обслуживания"
    }
  ];

  const stats = [
    { number: "15+", label: "лет опыта" },
    { number: "500+", label: "автомобилей" },
    { number: "10000+", label: "довольных клиентов" },
    { number: "50+", label: "городов доставки" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Надежные <span className="text-orange-400">грузоперевозки</span> по всей России
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Профессиональные транспортные услуги с гарантией качества и соблюдением сроков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3">
                <Calculator className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр транспортных и логистических услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
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

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Наши конкурентные преимущества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш автопарк</h2>
            <p className="text-xl text-gray-600">Современный и надежный транспорт</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Легкие грузовики</CardTitle>
                <CardDescription>До 3,5 тонн</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Городские перевозки</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Быстрая доставка</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Экономичность</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Средние грузовики</CardTitle>
                <CardDescription>До 10 тонн</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Межгородские перевозки</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Универсальность</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Надежность</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Тяжелые грузовики</CardTitle>
                <CardDescription>До 40 тонн</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Крупногабаритные грузы</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Дальние расстояния</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Максимальная грузоподъемность</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">География доставки</h2>
            <p className="text-xl text-gray-600">Работаем по всей России и странам СНГ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Центральный регион
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Москва, Московская область, Тула, Калуга, Рязань</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  Северо-Запад
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Санкт-Петербург, Новгород, Псков, Мурманск</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                  Юг России
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ростов-на-Дону, Краснодар, Волгоград, Астрахань</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Современные технологии</h2>
            <p className="text-xl text-gray-600">Инновационные решения для вашего удобства</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>GPS мониторинг</CardTitle>
                <CardDescription>Отслеживание груза в реальном времени</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Полный контроль над перемещением вашего груза с возможностью 
                  отслеживания через мобильное приложение или веб-интерфейс.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Электронный документооборот</CardTitle>
                <CardDescription>Быстрое оформление документов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Цифровизация всех процессов позволяет сократить время на 
                  оформление документов и повысить прозрачность операций.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши партнеры</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle>ООО "Стройматериалы"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Сотрудничаем с ТрансГруз уже 3 года. Всегда точно в срок, 
                  груз в целости и сохранности. Рекомендуем!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle>ИП Петров А.В.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличный сервис! Особенно нравится возможность отслеживать 
                  груз онлайн. Очень удобно и современно."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle>ЗАО "Торговый дом"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Профессиональный подход к каждому заказу. Менеджеры всегда 
                  на связи, решают любые вопросы быстро."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Получите персональное предложение для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3">
              <Calculator className="mr-2 h-5 w-5" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;