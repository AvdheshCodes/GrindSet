import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getComments, addComment, deleteComment } from "../api/comments";
import { getQuestions } from "../api/questions";
import logo from "../assets/logo.jpeg";

function QuestionPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [qRes, cRes] = await Promise.all([
        getQuestions(),
        getComments(id),
      ]);
      const found = qRes.data.find((q) => q._id === id);
      setQuestion(found);
      setComments(cRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await addComment(id, { text });
      setText("");
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <nav className="sticky top-0 z-50 bg-[#111111] border-b border-white/5 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GrindSet" className="w-8 h-8 object-contain rounded-lg" />
          <span className="font-bold text-white tracking-tight">GrindSet</span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium transition"
        >
          ← Dashboard
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {question && (
          <div className="bg-[#111111] rounded-2xl p-6 mb-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
            <div className="flex gap-3 mb-4">
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                {question.topic}
              </span>
              <span
                className={`text-sm px-3 py-1 rounded-full ${question.difficulty === "Easy"
                    ? "bg-green-500/20 text-green-400"
                    : question.difficulty === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
              >
                {question.difficulty}
              </span>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href={question.leetcodeLink}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-lg text-sm hover:bg-orange-600/40 transition"
              >
                Open on LeetCode
              </a>
              {question.videoLinks?.[0] && (
                <a
                  href={question.videoLinks[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg text-sm hover:bg-red-600/40 transition"
                >
                  Watch Video
                </a>
              )}
              {question.articleLinks?.[0] && (
                <a
                  href={question.articleLinks[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm hover:bg-green-600/40 transition"
                >
                  Read Article
                </a>
              )}
            </div>
          </div>
        )}

        {/* Comments */}
        <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-semibold mb-4">
            Comments ({comments.length})
          </h3>

          {/* Add Comment */}
          <form onSubmit={handleAddComment} className="flex gap-3 mb-6">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 transition text-sm placeholder-gray-600"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2.5 rounded-xl text-sm transition"
            >
              Post
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c._id}
                className="bg-white/5 border border-white/5 rounded-xl p-4 flex justify-between items-start"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 text-sm font-medium">
                      {c.userId?.name}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{c.text}</p>
                </div>
                {user?.id === c.userId?._id && (
                  <button
                    onClick={() => handleDeleteComment(c._id)}
                    className="text-red-400 text-xs hover:text-red-300 transition ml-4"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
            {comments.length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No comments yet. Be the first!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;