import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Warehouse, 
  Package, 
  Thermometer, 
  Shield,
  BarChart3,
  Truck,
  CheckCircle,
  Calculator,
  Phone
} from 'lucide-react';

const Warehouses = () => {
  const services = [
    {
      icon: <Warehouse className="h-12 w-12 text-blue-600" />,
      title: "Складское хранение",
      description: "Современные склады класса А с системой WMS",
      features: ["Площадь от 100 м²", "Высота до 12 м", "Круглосуточная охрана"]
    },
    {
      icon: <Package className="h-12 w-12 text-green-600" />,
      title: "Комплектация заказов",
      description: "Профессиональная обработка и комплектация товаров",
      features: ["Picking и packing", "Маркировка", "Контроль качества"]
    },
    {
      icon: <Thermometer className="h-12 w-12 text-orange-600" />,
      title: "Температурные режимы",
      description: "Хранение товаров с соблюдением температуры",
      features: ["От -25°C до +25°C", "Мониторинг 24/7", "Сертификация"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
      title: "Управление запасами",
      description: "Полный контроль движения товаров",
      features: ["Учет в реальном времени", "Отчетность", "Инвентаризация"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Складские услуги</h1>
            <p className="text-xl text-gray-200 mb-8">
              Современные складские комплексы для хранения и обработки ваших товаров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <Phone className="mr-2 h-4 w-4" />
                Арендовать склад
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-900">
                <Calculator className="mr-2 h-4 w-4" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Складские решения</h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг для эффективного управления товарными запасами
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

      <Footer />
    </div>
  );
};

export default Warehouses;