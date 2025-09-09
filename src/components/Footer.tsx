import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ТрансГруз</h3>
                <p className="text-sm text-gray-400">Надежные перевозки</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные транспортные услуги по всей России и СНГ. 
              Более 15 лет опыта в сфере грузоперевозок.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/cargo" className="text-gray-400 hover:text-white">Грузоперевозки</Link></li>
              <li><Link to="/logistics" className="text-gray-400 hover:text-white">Логистика</Link></li>
              <li><Link to="/warehouses" className="text-gray-400 hover:text-white">Складские услуги</Link></li>
              <li><Link to="/express" className="text-gray-400 hover:text-white">Экспресс доставка</Link></li>
              <li><Link to="/international" className="text-gray-400 hover:text-white">Международные перевозки</Link></li>
              <li><Link to="/insurance" className="text-gray-400 hover:text-white">Страхование грузов</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">О компании</Link></li>
              <li><Link to="/fleet" className="text-gray-400 hover:text-white">Наш автопарк</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Карьера</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">Новости</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-white">Калькулятор</Link></li>
              <li><Link to="/tracking" className="text-gray-400 hover:text-white">Отследить груз</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-white">+7 (495) 123-45-67</p>
                  <p className="text-gray-400 text-sm">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">info@transgruz.ru</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">Москва, ул. Транспортная, 15</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">Работаем 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ТрансГруз. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;