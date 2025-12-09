import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, LogIn, ChevronRight } from 'lucide-react';

const Login = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Page title set karna
  useEffect(() => {
    document.title = "Client Login - Maviontech";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan backend login logic aayega
    console.log("Logging in with:", email, password);
    alert("Login functionality is not connected to backend yet.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      
      {/* Main Card Container */}
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden m-4 min-h-[600px]">
        
        {/* LEFT SIDE: Branding Area */}
        <div className="md:w-1/2 bg-[#022c22] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
          
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
          
          {/* Top: Logo & Back Link */}
          <div>
            <Link to="/" className="inline-flex items-center text-green-400 hover:text-white transition-colors mb-8 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Website
            </Link>
            
            <h1 className="text-3xl font-bold tracking-tighter">
              <span className="text-green-500">MAVION</span>TECH
            </h1>
            <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
              Private Limited
            </p>
          </div>

          {/* Center: Welcome Text */}
          <div className="z-10">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Access your client dashboard to manage your projects, view invoices, and communicate with our support team efficiently.
            </p>
            
            {/* Small Feature List */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-100/80">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                <span>Real-time project tracking</span>
              </div>
              <div className="flex items-center text-sm text-green-100/80">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                <span>Secure document sharing</span>
              </div>
              <div className="flex items-center text-sm text-green-100/80">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                <span>24/7 Premium Support access</span>
              </div>
            </div>
          </div>

          {/* Bottom: Footer Text */}
          <div className="text-xs text-slate-500 mt-8">
            &copy; {new Date().getFullYear()} Maviontech Pvt Ltd.
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900">Sign In</h2>
            <p className="text-slate-500 text-sm mt-2">
              Please enter your details to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors text-slate-900 placeholder-slate-400"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-slate-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors text-slate-900 placeholder-slate-400"
                  placeholder="••••••••"
                />
                {/* Toggle Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Sign In
              <LogIn className="ml-2 w-4 h-4" />
            </button>
          </form>

          {/* Sign Up Link (Optional) */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/contact" className="font-medium text-green-600 hover:text-green-500">
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;