import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../api/questions";
import { getProgress, markSolved } from "../api/progress";
import logo from "../assets/logo.jpeg";

function DashboardPage() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ topic: "All", difficulty: "All" });
  const [search, setSearch] = useState("");
  const [expandedTopics, setExpandedTopics] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [qRes, pRes] = await Promise.all([getQuestions(), getProgress()]);
      setQuestions(qRes.data);
      setProgress(pRes.data);
      // Expand all topics by default
      const topics = [...new Set(qRes.data.map((q) => q.topic))];
      const expanded = {};
      topics.forEach((t) => (expanded[t] = true));
      setExpandedTopics(expanded);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkSolved = async (questionId) => {
    try {
      await markSolved(questionId);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const toggleTopic = (topic) => {
    setExpandedTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));
  };

  const allTopics = [...new Set(questions.map((q) => q.topic))];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filteredQuestions = questions.filter((q) => {
    const topicMatch = filter.topic === "All" || q.topic === filter.topic;
    const diffMatch = filter.difficulty === "All" || q.difficulty === filter.difficulty;
    const searchMatch =
      search === "" ||
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      q.questionNumber?.toString().includes(search);
    return topicMatch && diffMatch && searchMatch;
  });

  // Group by topic
  const grouped = {};
  filteredQuestions.forEach((q) => {
    if (!grouped[q.topic]) grouped[q.topic] = [];
    grouped[q.topic].push(q);
  });

  const diffBadge = (diff) => {
    if (diff === "Easy") return "bg-green-500/20 text-green-400 border border-green-500/30";
    if (diff === "Medium") return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
    return "bg-red-500/20 text-red-400 border border-red-500/30";
  };

  const solvedCount = progress?.solvedCount || 0;
  const totalQuestions = progress?.totalQuestions || 0;
  const percentage = progress?.percentage || 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading your sheet...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-[#111111] border-b border-white/5 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GrindSet" className="w-8 h-8 object-contain rounded-lg" />
          <span className="font-bold text-white tracking-tight">GrindSet</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-300">{solvedCount}/{totalQuestions} Solved</span>
          </div>
          <span className="text-gray-400 text-sm hidden md:block">Hi, {user?.name} 👋</span>
          {user?.role === "admin" && (
            <button
              onClick={() => navigate("/admin")}
              className="bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 px-3 py-1.5 rounded-lg text-xs font-medium transition"
            >
              Admin
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#111111] border-r border-white/5 p-4 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
          {/* Progress Card */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 mb-6">
            <p className="text-xs text-gray-400 mb-1">Overall Progress</p>
            <p className="text-2xl font-bold text-white">{percentage}%</p>
            <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 mb-1">
              <div
                className="bg-green-500 h-1.5 rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">{solvedCount} of {totalQuestions} solved</p>
          </div>

          {/* Topic List */}
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 px-1">Topics</p>
          <div className="space-y-1">
            <button
              onClick={() => setFilter({ ...filter, topic: "All" })}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex justify-between items-center ${filter.topic === "All"
                  ? "bg-green-500/10 text-green-400"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <span>All Topics</span>
              <span className="text-xs opacity-60">{questions.length}</span>
            </button>
            {allTopics.map((topic) => {
              const count = questions.filter((q) => q.topic === topic).length;
              const solved = questions.filter(
                (q) => q.topic === topic && progress?.solvedQuestions?.includes(q._id)
              ).length;
              return (
                <button
                  key={topic}
                  onClick={() => setFilter({ ...filter, topic })}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex justify-between items-center ${filter.topic === topic
                      ? "bg-green-500/10 text-green-400"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  <span className="truncate">{topic}</span>
                  <span className="text-xs opacity-60 shrink-0 ml-1">{solved}/{count}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">DSA Sheet</h1>
            <p className="text-gray-500 text-sm">Most Important Interview Questions</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Easy", count: questions.filter(q => q.difficulty === "Easy").length, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
              { label: "Medium", count: questions.filter(q => q.difficulty === "Medium").length, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
              { label: "Hard", count: questions.filter(q => q.difficulty === "Hard").length, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
            ].map((s) => (
              <div key={s.label} className={`border rounded-xl p-3 ${s.bg}`}>
                <p className={`text-lg font-bold ${s.color}`}>{s.count}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Search + Filters */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/8 transition text-sm placeholder-gray-600"
              />
            </div>
            <select
              value={filter.difficulty}
              onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}
              className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 transition text-sm"
            >
              {difficulties.map((d) => <option key={d} className="bg-[#111]">{d}</option>)}
            </select>
          </div>

          {/* Questions grouped by topic */}
          <div className="space-y-4">
            {Object.entries(grouped).map(([topic, qs]) => {
              const topicSolved = qs.filter(q => progress?.solvedQuestions?.includes(q._id)).length;
              const isExpanded = expandedTopics[topic];
              return (
                <div key={topic} className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden">
                  {/* Topic Header */}
                  <button
                    onClick={() => toggleTopic(topic)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/3 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="font-semibold text-white">{topic}</span>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                        {topicSolved}/{qs.length}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-white/10 rounded-full h-1.5">
                        <div
                          className="bg-green-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${qs.length ? (topicSolved / qs.length) * 100 : 0}%` }}
                        />
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Questions Table */}
                  {isExpanded && (
                    <div className="border-t border-white/5">
                      <table className="w-full">
                        <thead>
                          <tr className="text-xs text-gray-600 uppercase tracking-wider border-b border-white/5">
                            <th className="text-left px-5 py-3 w-10">✓</th>
                            <th className="text-left px-5 py-3">Problem</th>
                            <th className="text-left px-5 py-3 hidden md:table-cell">Level</th>
                            <th className="text-left px-5 py-3 hidden md:table-cell">Resources</th>
                          </tr>
                        </thead>
                        <tbody>
                          {qs.map((q) => {
                            const solved = progress?.solvedQuestions?.includes(q._id);
                            return (
                              <tr
                                key={q._id}
                                className={`border-b border-white/5 last:border-0 hover:bg-white/3 transition group ${solved ? "opacity-60" : ""}`}
                              >
                                <td className="px-5 py-3.5">
                                  <button
                                    onClick={() => handleMarkSolved(q._id)}
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${solved
                                        ? "bg-green-500 border-green-500"
                                        : "border-gray-600 hover:border-green-500"
                                      }`}
                                  >
                                    {solved && (
                                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </button>
                                </td>
                                <td className="px-5 py-3.5">
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-600 text-xs w-6 shrink-0">{q.questionNumber}.</span>
                                    <a
                                      href={q.leetcodeLink}
                                      target="_blank"
                                      rel="noreferrer"
                                      className={`text-sm hover:text-green-400 transition ${solved ? "line-through text-gray-500" : "text-gray-200"}`}
                                    >
                                      {q.title}
                                    </a>
                                    <button
                                      onClick={() => navigate(`/question/${q._id}`)}
                                      className="opacity-0 group-hover:opacity-100 transition text-gray-600 hover:text-gray-400 text-xs ml-1"
                                      title="Comments"
                                    >
                                      💬
                                    </button>
                                  </div>
                                </td>
                                <td className="px-5 py-3.5 hidden md:table-cell">
                                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${diffBadge(q.difficulty)}`}>
                                    {q.difficulty}
                                  </span>
                                </td>
                                <td className="px-5 py-3.5 hidden md:table-cell">
                                  <div className="flex gap-2">
                                    {q.videoLinks?.[0] && (
                                      <a href={q.videoLinks[0]} target="_blank" rel="noreferrer"
                                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition"
                                        title="Video">
                                        <svg className="w-3.5 h-3.5 text-gray-400 hover:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M8 5v14l11-7z" />
                                        </svg>
                                      </a>
                                    )}
                                    {q.articleLinks?.[0] && (
                                      <a href={q.articleLinks[0]} target="_blank" rel="noreferrer"
                                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-blue-500/20 flex items-center justify-center transition"
                                        title="Article">
                                        <svg className="w-3.5 h-3.5 text-gray-400 hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                      </a>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}

            {Object.keys(grouped).length === 0 && (
              <div className="text-center py-20 text-gray-600">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-sm">No questions found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;