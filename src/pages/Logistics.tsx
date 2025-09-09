import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Package, 
  TrendingUp, 
  MapPin, 
  Clock,
  BarChart3,
  Settings,
  Users,
  CheckCircle,
  Calculator,
  Phone
} from 'lucide-react';

const Logistics = () => {
  const services = [
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: "Управление запасами",
      description: "Оптимизация складских остатков и планирование поставок",
      features: ["ABC-анализ", "Прогнозирование спроса", "Автоматизация заказов"]
    },
    {
      icon: <MapPin className="h-12 w-12 text-green-600" />,
      title: "Планирование маршрутов",
      description: "Оптимальные маршруты доставки с учетом всех факторов",
      features: ["Минимизация расходов", "Сокращение времени", "Экологичность"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
      title: "Аналитика и отчетность",
      description: "Детальная аналитика всех логистических процессов",
      features: ["KPI мониторинг", "Финансовые отчеты", "Прогнозы"]
    },
    {
      icon: <Settings className="h-12 w-12 text-purple-600" />,
      title: "Процессная оптимизация",
      description: "Совершенствование логистических процессов",
      features: ["Lean-методы", "Автоматизация", "Стандартизация"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Логистические услуги</h1>
            <p className="text-xl text-gray-200 mb-8">
              Комплексные решения для оптимизации цепей поставок и снижения логистических затрат
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="mr-2 h-4 w-4" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-900">
                <Calculator className="mr-2 h-4 w-4" />
                Рассчитать эффект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши логистические решения</h2>
            <p className="text-xl text-gray-600">
              Профессиональный подход к управлению цепями поставок
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Результаты оптимизации</h2>
            <p className="text-xl text-gray-600">
              Измеримые улучшения для вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">-30%</div>
              <div className="text-lg font-semibold mb-2">Снижение затрат</div>
              <p className="text-gray-600">на логистику</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+25%</div>
              <div className="text-lg font-semibold mb-2">Ускорение</div>
              <p className="text-gray-600">доставки</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">-20%</div>
              <div className="text-lg font-semibold mb-2">Сокращение</div>
              <p className="text-gray-600">складских остатков</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">+40%</div>
              <div className="text-lg font-semibold mb-2">Повышение</div>
              <p className="text-gray-600">качества сервиса</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistics;