
import React from 'react';
import { Home, Users, Clock, Award } from 'lucide-react';
import { Counter } from '../ui/Counter';

interface StatItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon, index }) => (
  <div
    className="text-center animate-fade-up flex flex-col items-center"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="text-[#B80002] mb-3">
      {icon}
    </div>
    <p className='text-5xl font-bold'><Counter className="text-5xl font-bold text-[#183152] mb-2" from={0} to={value} />+</p>
    <div className="text-[#B80002] mt-2">{label}</div>
  </div>
);

const StatsSection: React.FC = () => {
  const stats = [
    { value: 70, label: 'Properties', icon: <Home className="w-10 h-10" /> },
    { value: 123, label: 'Happy Clients', icon: <Users className="w-10 h-10" /> },
    { value: 33, label: 'Years Experience', icon: <Clock className="w-10 h-10" /> },
    { value: 42, label: 'Awards Won', icon: <Award className="w-10 h-10" /> },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
