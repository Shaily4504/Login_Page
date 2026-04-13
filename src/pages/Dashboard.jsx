import { useNavigate } from 'react-router-dom';
import { LogOut, Home, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens/auth state here
    navigate('/login');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50"
    >
      <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-slate-400">Welcome back to your application.</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 bg-slate-700 hover:bg-red-500/20 text-slate-200 hover:text-red-400 rounded-xl transition-all"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors cursor-pointer group">
          <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Home className="text-blue-400 h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Overview</h3>
          <p className="text-slate-400 text-sm">View your main analytics and statistics.</p>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors cursor-pointer group">
          <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <User className="text-purple-400 h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Profile</h3>
          <p className="text-slate-400 text-sm">Manage your personal information.</p>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-colors cursor-pointer group">
          <div className="bg-pink-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Settings className="text-pink-400 h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Settings</h3>
          <p className="text-slate-400 text-sm">Configure your application preferences.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
