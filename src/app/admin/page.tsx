"use client";

import { useEffect, useState } from "react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  type?: string;
  phone?: string;
  budget?: string;
  createdAt: string;
}

export default function AdminPage() {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Reply Modal State
  const [replyingTo, setReplyingTo] = useState<Contact | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [replyStatus, setReplyStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/contact");
      const result = await res.json();
      if (result.success) {
        setData(result.data);
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyingTo) return;

    setSendingReply(true);
    setReplyStatus("idle");

    try {
      const res = await fetch("/api/contact/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: replyingTo.email,
          originalName: replyingTo.name,
          message: replyMessage,
          subject: `Re: Your ${replyingTo.type || 'Contact'} Inquiry - BG THUB`
        }),
      });

      if (res.ok) {
        setReplyStatus("success");
        setReplyMessage("");
        setTimeout(() => setReplyingTo(null), 2000);
      } else {
        setReplyStatus("error");
      }
    } catch (err) {
      setReplyStatus("error");
    } finally {
      setSendingReply(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loader"></div>
        <p>Loading submissions...</p>
        <style jsx>{`
          .admin-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: #050a06;
            color: #fff;
            font-family: sans-serif;
          }
          .loader {
            border: 3px solid rgba(255,255,255,0.1);
            border-top: 3px solid #0f5c20;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-logo">
          <span>BG THUB</span> Admin
        </div>
        <div className="admin-stats">
          Total Submissions: {data.length}
        </div>
      </header>

      <main className="admin-content">
        <h1>Form Submissions</h1>
        <p className="admin-sub">Manage and view all incoming requests from the contact forms.</p>

        {error && <div className="admin-error">{error}</div>}

        {data.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">📂</div>
            <h3>No submissions yet</h3>
            <p>New requests will appear here as they come in.</p>
          </div>
        ) : (
          <div className="admin-grid">
            {data.map((item) => (
              <div key={item._id} className="admin-card">
                <div className="card-header">
                  <span className="card-badge">{item.type || "General Contact"}</span>
                  <span className="card-date">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h3>{item.name}</h3>
                <p className="card-email">{item.email}</p>
                
                {item.phone && <p className="card-meta"><span>📞</span> {item.phone}</p>}
                {item.budget && <p className="card-meta"><span>💰</span> {item.budget}</p>}
                
                <div className="card-divider"></div>
                <p className="card-message">{item.message}</p>
                
                <div className="card-actions">
                  <button 
                    className="btn-reply"
                    onClick={() => {
                        setReplyingTo(item);
                        setReplyStatus("idle");
                    }}
                  >
                    Reply Directly
                  </button>
                  <a href={`mailto:${item.email}`} className="btn-email">
                    Open in Mail
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* REPLY MODAL */}
      {replyingTo && (
        <div className="modal-overlay" onClick={() => setReplyingTo(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setReplyingTo(null)}>✕</button>
            <h2>Reply to {replyingTo.name}</h2>
            <p className="modal-sub">Sending to: <strong>{replyingTo.email}</strong></p>
            
            <form onSubmit={handleSendReply}>
              <textarea 
                placeholder="Type your reply here..."
                required
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
              />
              
              {replyStatus === "success" && <p className="status-success">✓ Reply sent successfully!</p>}
              {replyStatus === "error" && <p className="status-error">✕ Failed to send reply. Please try again.</p>}

              <button 
                type="submit" 
                className="btn-send"
                disabled={sendingReply || replyStatus === "success"}
              >
                {sendingReply ? "Sending..." : replyStatus === "success" ? "Sent!" : "Send Reply"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .admin-container {
          min-height: 100vh;
          background: #0a0f0b;
          color: #e0e0e0;
          font-family: 'Inter', -apple-system, sans-serif;
          padding-bottom: 4rem;
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: rgba(5, 10, 6, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .admin-logo {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .admin-logo span {
          color: #0f5c20;
        }
        .admin-stats {
          font-size: 0.875rem;
          color: #888;
        }
        .admin-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }
        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #fff 0%, #888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .admin-sub {
          color: #888;
          margin-bottom: 3rem;
        }
        .admin-error {
          background: rgba(139, 0, 0, 0.1);
          border: 1px solid #8b0000;
          color: #ff4d4d;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 2rem;
        }
        .admin-empty {
          text-align: center;
          padding: 5rem 0;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }
        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        .admin-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }
        .admin-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .admin-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(15, 92, 32, 0.3);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .card-badge {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(15, 92, 32, 0.15);
          color: #4ade80;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .card-date {
          font-size: 0.75rem;
          color: #666;
        }
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
          color: #fff;
        }
        .card-email {
          font-size: 0.9rem;
          color: #aaa;
          margin-bottom: 1rem;
        }
        .card-meta {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .card-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.05);
          margin: 1.25rem 0;
        }
        .card-message {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #ccc;
          white-space: pre-wrap;
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }
        .card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .btn-reply, .btn-email {
          padding: 0.6rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-reply {
          background: #0f5c20;
          color: #fff;
          border: none;
        }
        .btn-reply:hover {
          background: #15803d;
        }
        .btn-email {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .btn-email:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
        }
        .modal-container {
          background: #0a0f0b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          width: 100%;
          max-width: 500px;
          padding: 2rem;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #666;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .modal-sub {
          color: #888;
          margin-bottom: 1.5rem;
        }
        textarea {
          width: 100%;
          min-height: 150px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          padding: 1rem;
          font-family: inherit;
          margin-bottom: 1rem;
          outline: none;
        }
        textarea:focus {
          border-color: #0f5c20;
        }
        .btn-send {
          width: 100%;
          padding: 0.8rem;
          background: #0f5c20;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .status-success { color: #4ade80; font-size: 0.9rem; margin-bottom: 1rem; }
        .status-error { color: #ff4d4d; font-size: 0.9rem; margin-bottom: 1rem; }
      `}</style>
    </div>
  );
}
