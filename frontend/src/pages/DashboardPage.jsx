import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../api/questions";
import { getProgress, markSolved } from "../api/progress";
import logo from "../assets/logo.jpeg";
import { getMyQuestions, addMyQuestion, deleteMyQuestion, toggleMyQuestion } from "../api/userQuestions";

function DashboardPage() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  // Global sheet state
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ topic: "All", difficulty: "All" });
  const [search, setSearch] = useState("");
  const [expandedTopics, setExpandedTopics] = useState({});

  // My Questions state
  const [activeTab, setActiveTab] = useState("global");
  const [myFilter, setMyFilter] = useState({ topic: "All" });
  const [myQuestions, setMyQuestions] = useState([]);
  const [myQLoading, setMyQLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [myForm, setMyForm] = useState({ title: "", topic: "", difficulty: "Medium", leetcodeLink: "" });
  const [myFormError, setMyFormError] = useState("");
  const [myFormLoading, setMyFormLoading] = useState(false);

  useEffect(() => {
    fetchData();
    fetchMyQuestions();
  }, []);

  const fetchData = async () => {
    try {
      const [qRes, pRes] = await Promise.all([getQuestions(), getProgress()]);
      setQuestions(qRes.data);
      setProgress(pRes.data);
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

  const fetchMyQuestions = async () => {
    setMyQLoading(true);
    try {
      const { data } = await getMyQuestions();
      setMyQuestions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setMyQLoading(false);
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

  const handleAddMyQuestion = async (e) => {
    e.preventDefault();
    setMyFormError("");
    setMyFormLoading(true);
    try {
      await addMyQuestion(myForm);
      setMyForm({ title: "", topic: "", difficulty: "Medium", leetcodeLink: "" });
      setShowAddForm(false);
      fetchMyQuestions();
    } catch (err) {
      setMyFormError(err.response?.data?.message || "Something went wrong");
    } finally {
      setMyFormLoading(false);
    }
  };

  const handleDeleteMyQuestion = async (id) => {
    try {
      await deleteMyQuestion(id);
      fetchMyQuestions();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleMyQuestion = async (id) => {
    try {
      await toggleMyQuestion(id);
      fetchMyQuestions();
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
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      {/* --- Animated Background for Main Pages --- */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] opacity-5 pointer-events-none z-0 animate-float-fast rotate-12">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.4H4.8L12 5.8z" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-[5%] opacity-[0.03] pointer-events-none z-0 animate-float-delayed -rotate-12">
        <span className="text-9xl font-black tracking-tighter select-none">CODE</span>
      </div>
      {/* ---------------------------------------- */}

      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GrindSet" className="w-10 h-10 object-contain rounded-lg" />
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

      <div className="flex flex-1 relative z-10">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#111111]/50 backdrop-blur-sm border-r border-white/5 p-4 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
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
        <main className="flex-1 p-6 overflow-y-auto z-10">
          {/* Header + Tabs */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-3">Dashboard</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("global")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "global"
                  ? "bg-green-500 text-black"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
              >
                📋 DSA Sheet
              </button>
              <button
                onClick={() => setActiveTab("mine")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2 ${activeTab === "mine"
                  ? "bg-green-500 text-black"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
              >
                ⭐ My Questions
                {myQuestions.length > 0 && (
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === "mine" ? "bg-black/20 text-black" : "bg-green-500/20 text-green-400"
                      }`}
                  >
                    {myQuestions.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* ── Global DSA Sheet Tab ── */}
          {activeTab === "global" && (
            <>
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Easy", count: questions.filter((q) => q.difficulty === "Easy").length, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
                  { label: "Medium", count: questions.filter((q) => q.difficulty === "Medium").length, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
                  { label: "Hard", count: questions.filter((q) => q.difficulty === "Hard").length, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
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
                    className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-600"
                  />
                </div>
                <select
                  value={filter.difficulty}
                  onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}
                  className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 transition text-sm"
                >
                  {difficulties.map((d) => (
                    <option key={d} className="bg-[#111]">{d}</option>
                  ))}
                </select>
              </div>

              {/* Questions grouped by topic */}
              <div className="space-y-4">
                {Object.entries(grouped).map(([topic, qs]) => {
                  const topicSolved = qs.filter((q) => progress?.solvedQuestions?.includes(q._id)).length;
                  const isExpanded = expandedTopics[topic];
                  return (
                    <div key={topic} className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden">
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
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${solved ? "bg-green-500 border-green-500" : "border-gray-600 hover:border-green-500"
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
            </>
          )}

          {/* ── My Questions Tab ── */}
          {activeTab === "mine" && (() => {
            const mySolvedCount = myQuestions.filter((q) => q.solved).length;
            const myTotalCount = myQuestions.length;
            const myPercentage = myTotalCount > 0 ? Math.round((mySolvedCount / myTotalCount) * 100) : 0;

            const myGrouped = {};
            myQuestions.forEach((q) => {
              if (!myGrouped[q.topic]) myGrouped[q.topic] = { total: 0, solved: 0 };
              myGrouped[q.topic].total++;
              if (q.solved) myGrouped[q.topic].solved++;
            });

            const myFilteredQuestions = myQuestions.filter((q) => {
              return myFilter.topic === "All" || q.topic === myFilter.topic;
            });

            return (
              <div className="flex flex-col gap-6">
                {/* Horizontal Progress Tracking */}
                {myQuestions.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-white mb-4">Your Progress</h2>
                    <style>{`
                      .hide-scrollbar::-webkit-scrollbar { display: none; }
                      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    `}</style>
                    <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                      {/* Overall Progress */}
                      <button 
                        onClick={() => setMyFilter({ topic: "All" })}
                        className={`min-w-[220px] max-w-[220px] text-left border rounded-2xl p-4 flex-shrink-0 transition-all ${myFilter.topic === "All" ? "bg-green-500/10 border-green-500/50" : "bg-green-500/5 border-green-500/20 hover:bg-white/5"}`}
                      >
                        <p className="text-xs text-gray-400 mb-1">Overall Progress</p>
                        <div className="flex items-end gap-3 mb-2">
                          <p className="text-2xl font-bold text-white">{myPercentage}%</p>
                          <p className="text-xs text-gray-500 mb-1.5">{mySolvedCount} of {myTotalCount} solved</p>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className="bg-green-500 h-1.5 rounded-full transition-all duration-700"
                            style={{ width: `${myPercentage}%` }}
                          />
                        </div>
                      </button>

                      {/* Topic Cards */}
                      {Object.entries(myGrouped).map(([topic, stats]) => {
                        const topicPercentage = stats.total > 0 ? Math.round((stats.solved / stats.total) * 100) : 0;
                        const isSelected = myFilter.topic === topic;
                        return (
                          <button 
                            key={topic} 
                            onClick={() => setMyFilter({ topic })}
                            className={`min-w-[180px] max-w-[180px] text-left border rounded-2xl p-4 flex-shrink-0 flex flex-col justify-between transition-all ${isSelected ? "bg-white/10 border-green-500/50" : "bg-[#111111] border-white/5 hover:bg-white/5"}`}
                          >
                            <div>
                              <p className="text-sm font-semibold text-white truncate mb-1" title={topic}>{topic}</p>
                              <p className="text-xs text-gray-500">{stats.solved}/{stats.total} solved</p>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
                              <div
                                className="bg-green-400 h-1.5 rounded-full transition-all duration-700"
                                style={{ width: `${topicPercentage}%` }}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-500 text-sm">
                    {myFilter.topic !== "All" ? `${myFilter.topic} - ` : ""}
                    {myFilteredQuestions.filter((q) => q.solved).length}/{myFilteredQuestions.length} solved
                  </p>
                  <button
                    onClick={() => { setShowAddForm(!showAddForm); setMyFormError(""); }}
                    className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 rounded-xl text-sm transition shadow-lg shadow-green-500/20"
                  >
                    {showAddForm ? "✕ Cancel" : "+ Add Question"}
                  </button>
                </div>

              {/* Add Form */}
              {showAddForm && (
                <div className="bg-[#111111] border border-white/5 rounded-2xl p-5 mb-6">
                  <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    Add Your Question
                  </h3>
                  {myFormError && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2.5 rounded-xl mb-4 text-sm">
                      {myFormError}
                    </div>
                  )}
                  <form onSubmit={handleAddMyQuestion} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="md:col-span-2">
                      <label className="text-xs text-gray-500 mb-1.5 block">Question Title *</label>
                      <input
                        type="text"
                        placeholder="e.g. Two Sum"
                        value={myForm.title}
                        onChange={(e) => setMyForm({ ...myForm, title: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1.5 block">Topic *</label>
                      <input
                        type="text"
                        placeholder="e.g. Arrays, DP"
                        value={myForm.topic}
                        onChange={(e) => setMyForm({ ...myForm, topic: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1.5 block">Difficulty</label>
                      <select
                        value={myForm.difficulty}
                        onChange={(e) => setMyForm({ ...myForm, difficulty: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 transition text-sm"
                      >
                        <option className="bg-[#111]">Easy</option>
                        <option className="bg-[#111]">Medium</option>
                        <option className="bg-[#111]">Hard</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs text-gray-500 mb-1.5 block">Problem Link (optional)</label>
                      <input
                        type="url"
                        placeholder="https://leetcode.com/problems/..."
                        value={myForm.leetcodeLink}
                        onChange={(e) => setMyForm({ ...myForm, leetcodeLink: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-700"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={myFormLoading}
                        className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-2.5 rounded-xl transition disabled:opacity-50 text-sm shadow-lg shadow-green-500/20"
                      >
                        {myFormLoading ? "Saving..." : "+ Add to My List"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Questions List */}
              {myQLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : myQuestions.length === 0 ? (
                <div className="text-center py-20 text-gray-600 bg-[#111111] border border-white/5 rounded-2xl">
                  <p className="text-4xl mb-3">⭐</p>
                  <p className="text-sm font-medium text-gray-400 mb-1">No personal questions yet</p>
                  <p className="text-xs">Add questions you want to track separately from the main sheet</p>
                </div>
              ) : myFilteredQuestions.length === 0 ? (
                <div className="text-center py-20 text-gray-600 bg-[#111111] border border-white/5 rounded-2xl">
                  <p className="text-sm font-medium text-gray-400 mb-1">No questions found for this topic</p>
                </div>
              ) : (
                <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-gray-600 uppercase tracking-wider border-b border-white/5">
                        <th className="text-left px-5 py-3 w-10">✓</th>
                        <th className="text-left px-5 py-3">Problem</th>
                        <th className="text-left px-5 py-3 hidden md:table-cell">Level</th>
                        <th className="text-left px-5 py-3 hidden md:table-cell">Topic</th>
                        <th className="text-left px-5 py-3 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {myFilteredQuestions.map((q) => (
                        <tr
                          key={q._id}
                          className={`border-b border-white/5 last:border-0 hover:bg-white/3 transition ${q.solved ? "opacity-50" : ""}`}
                        >
                          <td className="px-5 py-3.5">
                            <button
                              onClick={() => handleToggleMyQuestion(q._id)}
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${q.solved ? "bg-green-500 border-green-500" : "border-gray-600 hover:border-green-500"
                                }`}
                            >
                              {q.solved && (
                                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          </td>
                          <td className="px-5 py-3.5">
                            {q.leetcodeLink ? (
                              <a
                                href={q.leetcodeLink}
                                target="_blank"
                                rel="noreferrer"
                                className={`text-sm hover:text-green-400 transition ${q.solved ? "line-through text-gray-500" : "text-gray-200"}`}
                              >
                                {q.title}
                              </a>
                            ) : (
                              <span className={`text-sm ${q.solved ? "line-through text-gray-500" : "text-gray-200"}`}>
                                {q.title}
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3.5 hidden md:table-cell">
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${diffBadge(q.difficulty)}`}>
                              {q.difficulty}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 hidden md:table-cell">
                            <span className="text-xs text-gray-500">{q.topic}</span>
                          </td>
                          <td className="px-5 py-3.5">
                            <button
                              onClick={() => handleDeleteMyQuestion(q._id)}
                              className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 flex items-center justify-center transition"
                              title="Delete"
                            >
                              <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              </div>
            );
          })()}
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;