import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeTab, setActiveTab] = useState('home');
  
  const navItems = [
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'blogs', label: 'Blogs', path: '/blogs' },
  ];

  return (
    <header className="max-w-2xl mx-auto py-6 px-4">
      <nav className="bg-zinc-900 rounded-full px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src={"./hero.jpg"} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </Link>
          <Link to="/" onClick={() => setActiveTab('home')} className="text-white font-medium">
            Sahil Khan
          </Link>
        </div>
        
        <div className="flex gap-6">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm text-gray-300 hover:text-white transition-colors ${
                activeTab === item.id ? 'text-white' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}