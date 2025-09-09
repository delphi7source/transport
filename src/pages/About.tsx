import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Shield,
  Clock,
  MapPin,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Надежность",
      description: "Гарантируем сохранность и своевременную доставку каждого груза"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Профессионализм",
      description: "Команда опытных специалистов с многолетним стажем"
    },
    {
      icon: <Award className="h-12 w-12 text-orange-600" />,
      title: "Качество",
      description: "Высокие стандарты обслуживания и современные технологии"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: "Развитие",
      description: "Постоянное совершенствование услуг и расширение возможностей"
    }
  ];

  const achievements = [
    { number: "15+", label: "лет на рынке" },
    { number: "500+", label: "единиц техники" },
    { number: "10000+", label: "довольных клиентов" },
    { number: "50+", label: "городов присутствия" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">О компании ТрансГруз</h1>
            <p className="text-xl text-gray-200">
              Ведущая транспортно-логистическая компания с 15-летним опытом работы
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Наша история</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Компания ТрансГруз была основана в 2009 году группой профессионалов 
                с многолетним опытом в сфере транспорта и логистики. За годы работы 
                мы выросли от небольшой региональной компании до одного из лидеров 
                рынка грузоперевозок в России.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Сегодня ТрансГруз - это современная высокотехнологичная компания, 
                предоставляющая полный спектр транспортно-логистических услуг. 
                Мы обслуживаем более 1000 постоянных клиентов по всей России и 
                странам СНГ, выполняя свыше 50000 заказов ежегодно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-200">
              Цифры, которые говорят о нашем успехе
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-gray-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Наша миссия</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Обеспечивать надежные, быстрые и экономически эффективные 
              транспортно-логистические решения, способствуя развитию бизнеса 
              наших клиентов и экономики страны в целом.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;