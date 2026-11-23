import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { findKnowledgeResponse } from '../ai/knowledgeEngine';

export function EasyLaneAiChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Hello! I am EasyLane AI, your logistics intelligence assistant. Ask me anything about our AI-enabled TMS, live Control Tower, return-load matching, or digital freight finance.',
      category: 'Assistant',
      suggestions: [
        'What is EasyLane TMS?',
        'How does return-load matching work?',
        'Explain digital POD & bill discounting',
        'Can EasyLane integrate with SAP/ERP?'
      ]
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSend = (queryToSend) => {
    const query = (queryToSend || inputQuery).trim();
    if (!query) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsThinking(true);

    // Simulate realistic AI lookup from verified EasyLane knowledge engine
    setTimeout(() => {
      const response = findKnowledgeResponse(query, 'en');
      let aiText = '';
      let category = 'Knowledge Base';
      let ctaLabel = null;
      let ctaTarget = null;

      if (response && response.answer) {
        aiText = response.answers?.en || response.answer;
        category = response.category || 'Platform Knowledge';
        ctaLabel = response.ctaLabel;
        ctaTarget = response.ctaTarget;
      } else {
        aiText = "EasyLane is an AI-enabled logistics platform bringing transportation, fleet operations, live visibility, and freight finance into one connected system. Our team can provide tailored answers for your specific fleet volume and corridors.";
        ctaLabel = 'Book a Demo';
        ctaTarget = '#contact';
      }

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        category,
        ctaLabel,
        ctaTarget,
        suggestions: [
          'What corridors do you cover?',
          'How does driver welfare work?',
          'What are the payment terms?'
        ]
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: 'Hello! I am EasyLane AI, your logistics intelligence assistant. Ask me anything about our AI-enabled TMS, live Control Tower, return-load matching, or digital freight finance.',
        category: 'Assistant',
        suggestions: [
          'What is EasyLane TMS?',
          'How does return-load matching work?',
          'Explain digital POD & bill discounting',
          'Can EasyLane integrate with SAP/ERP?'
        ]
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-chat-drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Ask EasyLane AI">
      <div className="ai-chat-drawer-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="ai-chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="ai-avatar-icon">
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--navy-deep)', fontWeight: 700 }}>
                  EasyLane AI
                </strong>
                <span className="ai-online-badge">
                  <span className="badge-dot" />
                  VERIFIED KNOWLEDGE
                </span>
              </div>
              <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', margin: 0 }}>
                Autonomous Freight Operations Assistant
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleReset}
              className="ai-chat-header-btn"
              title="Reset conversation"
              aria-label="Reset conversation"
            >
              <RotateCcw size={15} />
            </button>
            <button
              onClick={onClose}
              className="ai-chat-header-btn"
              aria-label="Close Assistant"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* External ChatGPT Destination Banner (Raft Flow) */}
        <div className="ai-chat-gpt-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bot size={14} color="var(--brand-blue)" />
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              Prefer an external LLM?
            </span>
          </div>
          <a
            href="https://chatgpt.com/?q=Tell+me+about+EasyLane+AI-enabled+logistics+platform+and+TMS"
            target="_blank"
            rel="noopener noreferrer"
            className="ai-chat-gpt-link"
          >
            <span>Ask on ChatGPT</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Message Feed */}
        <div className="ai-chat-messages-container">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`ai-message-row ${m.sender === 'user' ? 'user-row' : 'ai-row'}`}
            >
              {m.sender === 'ai' && (
                <div className="ai-msg-avatar">
                  <Sparkles size={13} />
                </div>
              )}

              <div className={`ai-message-bubble ${m.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                {m.category && (
                  <div className="ai-bubble-category-tag">
                    <CheckCircle2 size={11} color="var(--brand-blue)" />
                    <span>{m.category}</span>
                  </div>
                )}
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.55 }}>
                  {m.text}
                </p>

                {m.ctaLabel && (
                  <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                    <a
                      href={m.ctaTarget || '#solutions'}
                      onClick={() => onClose()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--brand-blue)'
                      }}
                    >
                      <span>{m.ctaLabel}</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="ai-message-row ai-row">
              <div className="ai-msg-avatar">
                <Sparkles size={13} />
              </div>
              <div className="ai-message-bubble ai-bubble" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 16px' }}>
                <span className="typing-dot" />
                <span className="typing-dot" style={{ animationDelay: '0.2s' }} />
                <span className="typing-dot" style={{ animationDelay: '0.4s' }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '4px' }}>
                  Consulting TMS knowledge base...
                </span>
              </div>
            </div>
          )}

          {/* Quick Suggestions */}
          {messages.length > 0 && messages[messages.length - 1].suggestions && !isThinking && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Suggested inquiries:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {messages[messages.length - 1].suggestions.map((sugg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(sugg)}
                    className="ai-suggestion-chip"
                  >
                    <span>{sugg}</span>
                    <ArrowRight size={10} />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="ai-chat-input-row"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about TMS, return loads, pricing, tracking..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="ai-chat-input"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isThinking}
            className="ai-chat-send-btn"
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
