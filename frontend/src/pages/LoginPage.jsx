import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login, signup } from "../api/auth";
import logo from "../assets/logo.jpeg";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = isLogin
        ? await login({ email: form.email, password: form.password })
        : await signup(form);
      loginUser(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      {/* Background glow / Ambient effects */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid container */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 lg:p-12 items-center min-h-screen">
        
        {/* Left Column: Marketing & Features */}
        <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 w-full pt-10 lg:pt-0">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="GrindSet" className="w-16 h-16 object-contain rounded-xl shadow-lg shadow-green-500/20 bg-black/50" />
            <span className="text-2xl font-bold tracking-tight">GrindSet</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Master your Data Structures & Algorithms
          </h1>
          <p className="text-gray-400 text-lg mb-12 w-full sm:max-w-md leading-relaxed">
            The ultimate tracker built for placement warriors. Keep your coding journey organized, focused, and effective.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: "🎯",
                title: "Curated DSA Questions",
                desc: "Hand-picked problems to build your core foundation across all essential topics.",
              },
              {
                icon: "📈",
                title: "Track Your Progress",
                desc: "Visual progress bars, topic breakdowns, and dynamic solved counts.",
              },
              {
                icon: "⭐",
                title: "Personal Questions List",
                desc: "Add custom problems you want to practice separately from the main sheet.",
              },
            ].map((f, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:border-green-500/50 group-hover:bg-green-500/5 transition duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-1 text-lg">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Auth Form */}
        <div className="flex flex-col justify-center items-center w-full lg:pl-10">
          <div className="w-full max-w-md">
            
            {/* Header for Mobile */}
            <div className="flex flex-col items-center mb-8 lg:hidden">
              <p className="text-gray-500 text-sm mt-1">
                {isLogin ? "Welcome back! Keep grinding 💪" : "Start your DSA journey today"}
              </p>
            </div>

            {/* Card */}
            <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Toggle */}
              <div className="flex bg-white/5 rounded-xl p-1.5 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                    isLogin ? "bg-green-500 text-black shadow-lg shadow-green-500/20" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition ${
                    !isLogin ? "bg-green-500 text-black shadow-lg shadow-green-500/20" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-6 text-sm flex items-center gap-2">
                  <span className="shrink-0">⚠️</span> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-2 block uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Avdhesh Kumar"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/10 transition text-sm placeholder-gray-700"
                    />
                  </div>
                )}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/10 transition text-sm placeholder-gray-700"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block uppercase tracking-wider">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/10 transition text-sm placeholder-gray-700"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3.5 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-xl shadow-green-500/20 flex items-center justify-center gap-2 group"
                  >
                    {loading ? "Please wait..." : isLogin ? "Access Dashboard" : "Create Account"}
                    {!loading && <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>}
                  </button>
                </div>
              </form>
            </div>

            <p className="text-center text-gray-600 text-xs mt-8">
              Built for placement warriors 🚀
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;