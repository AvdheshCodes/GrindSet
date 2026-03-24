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
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-green-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="GrindSet" className="w-16 h-16 object-contain rounded-2xl mb-4 shadow-lg shadow-green-500/20" />
          <h1 className="text-2xl font-bold text-white tracking-tight">GrindSet</h1>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin ? "Welcome back! Keep grinding 💪" : "Start your DSA journey today"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#111111] border border-white/8 rounded-2xl p-6">
          {/* Toggle */}
          <div className="flex bg-white/5 rounded-xl p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                isLogin ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                !isLogin ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2.5 rounded-xl mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {!isLogin && (
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Avdhesh Kumar"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/8 transition text-sm placeholder-gray-700"
                />
              </div>
            )}
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/8 transition text-sm placeholder-gray-700"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/8 transition text-sm placeholder-gray-700"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-2 shadow-lg shadow-green-500/20"
            >
              {loading ? "Please wait..." : isLogin ? "Login →" : "Create Account →"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Built for placement warriors 🚀
        </p>
      </div>
    </div>
  );
}

export default LoginPage;