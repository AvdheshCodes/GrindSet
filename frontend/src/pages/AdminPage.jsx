import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from "../api/questions";
import logo from "../assets/logo.jpeg";

const emptyForm = {
  questionNumber: "",
  title: "",
  topic: "",
  difficulty: "Easy",
  leetcodeLink: "",
  videoLinks: "",
  articleLinks: "",
};

function AdminPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user?.role !== "admin") navigate("/dashboard");
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data } = await getQuestions();
      setQuestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const payload = {
      ...form,
      videoLinks: form.videoLinks ? [form.videoLinks] : [],
      articleLinks: form.articleLinks ? [form.articleLinks] : [],
    };
    try {
      if (editingId) {
        await updateQuestion(editingId, payload);
      } else {
        await addQuestion(payload);
      }
      setForm(emptyForm);
      setEditingId(null);
      fetchQuestions();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (q) => {
    setEditingId(q._id);
    setForm({
      questionNumber: q.questionNumber || "",
      title: q.title,
      topic: q.topic,
      difficulty: q.difficulty,
      leetcodeLink: q.leetcodeLink,
      videoLinks: q.videoLinks?.[0] || "",
      articleLinks: q.articleLinks?.[0] || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this question?")) return;
    try {
      await deleteQuestion(id);
      fetchQuestions();
    } catch (err) {
      console.error(err);
    }
  };

  const diffBadge = (diff) => {
    if (diff === "Easy") return "bg-green-500/20 text-green-400 border border-green-500/30";
    if (diff === "Medium") return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
    return "bg-red-500/20 text-red-400 border border-red-500/30";
  };

  const filtered = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      {/* --- Animated Background --- */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] opacity-5 pointer-events-none z-0 animate-float-fast rotate-12">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8z" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-[5%] opacity-[0.03] pointer-events-none z-0 animate-float-delayed -rotate-12">
        <span className="text-9xl font-black tracking-tighter select-none">ADMIN</span>
      </div>
      {/* --------------------------- */}

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5 px-6 py-3 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GrindSet" className="w-10 h-10 object-cover object-left rounded-lg" />
          <span className="font-bold text-white tracking-tight">GrindSet</span>
          <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-0.5 rounded-full">
            Admin Panel
          </span>
          <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-0.5 rounded-full">
            {questions.length} questions
          </span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2"
        >
          ← Dashboard
        </button>
      </nav>

      <main className="flex-1 overflow-y-auto relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Form */}
          <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 mb-8">
            <h2 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {editingId ? "Edit Question" : "Add New Question"}
            </h2>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2.5 rounded-xl mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "questionNumber", placeholder: "e.g. 1", label: "Question Number", type: "number" },
                { name: "title", placeholder: "Question Title", label: "Title" },
                { name: "topic", placeholder: "e.g. Arrays, DP, Graphs", label: "Topic" },
                { name: "leetcodeLink", placeholder: "https://leetcode.com/problems/...", label: "LeetCode / GFG Link" },
                { name: "videoLinks", placeholder: "https://youtube.com/...", label: "Video Link (optional)" },
                { name: "articleLinks", placeholder: "https://...", label: "Article Link (optional)" },
              ].map((field) => (
                <div key={field.name} className={field.name === "title" ? "md:col-span-2" : ""}>
                  <label className="text-xs text-gray-500 mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={["questionNumber", "title", "topic", "leetcodeLink"].includes(field.name)}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-700"
                  />
                </div>
              ))}

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Difficulty</label>
                <select
                  name="difficulty"
                  value={form.difficulty}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 transition text-sm"
                >
                  <option className="bg-[#111]">Easy</option>
                  <option className="bg-[#111]">Medium</option>
                  <option className="bg-[#111]">Hard</option>
                </select>
              </div>

              <div className="md:col-span-2 flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-2.5 rounded-xl transition disabled:opacity-50 text-sm shadow-lg shadow-green-500/20"
                >
                  {loading ? "Saving..." : editingId ? "Update Question" : "+ Add Question"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => { setEditingId(null); setForm(emptyForm); }}
                    className="bg-white/5 hover:bg-white/10 text-gray-300 px-6 py-2.5 rounded-xl transition text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Questions List */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <h2 className="text-base font-semibold text-white">All Questions</h2>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-600 w-48"
              />
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-600 uppercase tracking-wider border-b border-white/5">
                  <th className="text-left px-6 py-3">#</th>
                  <th className="text-left px-6 py-3">Title</th>
                  <th className="text-left px-6 py-3 hidden md:table-cell">Topic</th>
                  <th className="text-left px-6 py-3 hidden md:table-cell">Level</th>
                  <th className="text-left px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((q) => (
                  <tr key={q._id} className="border-b border-white/5 last:border-0 hover:bg-white/3 transition">
                    <td className="px-6 py-3.5 text-gray-600 text-xs">{q.questionNumber}</td>
                    <td className="px-6 py-3.5 text-gray-200 text-sm">{q.title}</td>
                    <td className="px-6 py-3.5 text-gray-500 text-sm hidden md:table-cell">{q.topic}</td>
                    <td className="px-6 py-3.5 hidden md:table-cell">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${diffBadge(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(q)}
                          className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs px-3 py-1.5 rounded-lg hover:bg-blue-500/20 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(q._id)}
                          className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-3 py-1.5 rounded-lg hover:bg-red-500/20 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-600 py-12 text-sm">
                      No questions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;