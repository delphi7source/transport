import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Truck, 
  Package, 
  Shield, 
  Clock,
  MapPin,
  CheckCircle,
  Calculator,
  Phone,
  Weight,
  Ruler,
  Thermometer
} from 'lucide-react';

const Cargo = () => {
  const cargoTypes = [
    {
      title: "Сборные грузы",
      description: "Экономичная доставка небольших партий товаров",
      icon: <Package className="h-8 w-8 text-blue-600" />,
      features: ["От 1 кг до 1000 кг", "Ежедневные отправки", "Доступные тарифы"]
    },
    {
      title: "Полные загрузки",
      description: "Выделенный транспорт для крупных партий",
      icon: <Truck className="h-8 w-8 text-green-600" />,
      features: ["До 40 тонн", "Прямая доставка", "Гибкие маршруты"]
    },
    {
      title: "Негабаритные грузы",
      description: "Специализированная перевозка крупногабаритных грузов",
      icon: <Ruler className="h-8 w-8 text-orange-600" />,
      features: ["Спецтранспорт", "Разрешения", "Сопровождение"]
    },
    {
      title: "Температурные грузы",
      description: "Рефрижераторные перевозки с контролем температуры",
      icon: <Thermometer className="h-8 w-8 text-purple-600" />,
      features: ["От -25°C до +25°C", "Мониторинг", "Сертификация"]
    }
  ];

  const vehicleTypes = [
    {
      type: "Тентованные",
      capacity: "До 20 тонн",
      volume: "До 82 м³",
      description: "Универсальный транспорт для большинства грузов"
    },
    {
      type: "Изотермические",
      capacity: "До 15 тонн",
      volume: "До 60 м³",
      description: "Поддержание температурного режима"
    },
    {
      type: "Рефрижераторы",
      capacity: "До 18 тонн",
      volume: "До 70 м³",
      description: "Активное охлаждение и заморозка"
    },
    {
      type: "Открытые платформы",
      capacity: "До 25 тонн",
      volume: "Без ограничений",
      description: "Для негабаритных и строительных грузов"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Грузоперевозки</h1>
            <p className="text-xl text-gray-200 mb-8">
              Надежная доставка грузов любой сложности по всей России и странам СНГ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="mr-2 h-4 w-4" />
                Заказать перевозку
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                <Calculator className="mr-2 h-4 w-4" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Типы грузоперевозок</h2>
            <p className="text-xl text-gray-600">
              Специализированные решения для различных видов грузов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cargoTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {type.icon}
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Типы транспорта</h2>
            <p className="text-xl text-gray-600">
              Современный автопарк для любых задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{vehicle.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Weight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">{vehicle.volume}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{vehicle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-gray-600">
              Комплексное обслуживание для вашего удобства
            </p>
          </div>
          
          <Tabs defaultValue="loading" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="loading">Погрузка</TabsTrigger>
              <TabsTrigger value="packaging">Упаковка</TabsTrigger>
              <TabsTrigger value="insurance">Страхование</TabsTrigger>
              <TabsTrigger value="tracking">Отслеживание</TabsTrigger>
            </TabsList>
            
            <TabsContent value="loading" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Погрузочно-разгрузочные работы</CardTitle>
                  <CardDescription>
                    Профессиональная погрузка и разгрузка любых типов грузов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Ручная погрузка</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Опытные грузчики</li>
                        <li>• Бережное обращение</li>
                        <li>• Быстрое выполнение</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Механизированная погрузка</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Автопогрузчики</li>
                        <li>• Краны-манипуляторы</li>
                        <li>• Специальное оборудование</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="packaging" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Упаковка и маркировка</CardTitle>
                  <CardDescription>
                    Профессиональная подготовка грузов к транспортировке
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Виды упаковки</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Картонные коробки</li>
                        <li>• Деревянная тара</li>
                        <li>• Стрейч-пленка</li>
                        <li>• Пузырчатая пленка</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Маркировка</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Адресные ярлыки</li>
                        <li>• Предупреждающие знаки</li>
                        <li>• Штрих-коды</li>
                        <li>• Специальная маркировка</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insurance" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Страхование грузов</CardTitle>
                  <CardDescription>
                    Полная защита вашего груза от всех видов рисков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Виды страхования</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• От повреждений</li>
                        <li>• От утраты</li>
                        <li>• От стихийных бедствий</li>
                        <li>• Комплексное страхование</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Быстрое оформление</li>
                        <li>• Выгодные тарифы</li>
                        <li>• Оперативные выплаты</li>
                        <li>• Надежные партнеры</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tracking" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Отслеживание грузов</CardTitle>
                  <CardDescription>
                    Полный контроль над перемещением вашего груза
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Возможности системы</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• GPS мониторинг в реальном времени</li>
                        <li>• История перемещений</li>
                        <li>• Уведомления о статусе</li>
                        <li>• Фото-отчеты</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Способы отслеживания</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Веб-интерфейс</li>
                        <li>• Мобильное приложение</li>
                        <li>• SMS уведомления</li>
                        <li>• Email рассылка</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Преимущества работы с нами</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">Полное страхование и контроль качества</p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Пунктуальность</h3>
              <p className="text-gray-600">Строгое соблюдение сроков доставки</p>
            </div>
            <div className="text-center">
              <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">География</h3>
              <p className="text-gray-600">Доставка по всей России и СНГ</p>
            </div>
            <div className="text-center">
              <Calculator className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Прозрачность</h3>
              <p className="text-gray-600">Честные цены без скрытых платежей</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы отправить груз?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Получите расчет стоимости и оформите заказ прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="mr-2 h-4 w-4" />
              Заказать перевозку
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

export default Cargo;