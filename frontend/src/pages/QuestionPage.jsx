import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getComments, addComment, deleteComment } from "../api/comments";
import { getQuestions } from "../api/questions";

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
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-xl font-bold text-blue-400">DSA Tracker</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg text-sm transition"
        >
          Back to Dashboard
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {question && (
          <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
            <div className="flex gap-3 mb-4">
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                {question.topic}
              </span>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  question.difficulty === "Easy"
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
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
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
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition"
            >
              Post
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c._id}
                className="bg-gray-800 rounded-lg p-4 flex justify-between items-start"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-400 text-sm font-medium">
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