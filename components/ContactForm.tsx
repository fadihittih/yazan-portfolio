"use client";

import { useState } from "react";

const SHOOT_TYPES = [
  "Portrait Session",
  "Wedding",
  "Fine Art",
  "Editorial",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  type: string;
  date: string;
  message: string;
}

const BASE_INPUT: React.CSSProperties = {
  background: "transparent",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "0.5px solid var(--border)",
  color: "var(--text)",
  fontSize: "15px",
  letterSpacing: "0.5px",
  width: "100%",
  outline: "none",
  padding: "12px 0",
  fontFamily: "inherit",
  fontWeight: 200,
};

const FOCUS_INPUT: React.CSSProperties = {
  ...BASE_INPUT,
  borderBottom: "0.5px solid var(--accent)",
};

const LABEL: React.CSSProperties = {
  color: "var(--muted)",
  fontSize: "10px",
  letterSpacing: "4px",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    type: "Portrait Session",
    date: "",
    message: "",
  });
  const [focused, setFocused] = useState<keyof FormData | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const inputStyle = (field: keyof FormData) =>
    focused === field ? FOCUS_INPUT : BASE_INPUT;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="flex flex-col gap-6 justify-center py-10">
        <p
          className="font-jost font-extralight uppercase"
          style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px" }}
        >
          Message sent
        </p>
        <h2
          className="font-cormorant font-light leading-tight"
          style={{ fontSize: "44px", color: "var(--text)" }}
        >
          Thank you,
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            {form.name.trim().split(" ")[0] || "friend"}.
          </em>
        </h2>
        <p
          className="font-cormorant"
          style={{ fontSize: "18px", lineHeight: "1.75", color: "var(--muted)" }}
        >
          I&apos;ll review your message and get back to you within 48 hours.
        </p>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 pt-1">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="font-jost font-extralight uppercase" style={LABEL}>
          Name
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          placeholder="Your full name"
          className="font-jost font-extralight placeholder:text-muted"
          style={inputStyle("name")}
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="font-jost font-extralight uppercase" style={LABEL}>
          Email
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          placeholder="your@email.com"
          className="font-jost font-extralight placeholder:text-muted"
          style={inputStyle("email")}
          required
        />
      </div>

      {/* Type of shoot */}
      <div className="flex flex-col gap-2">
        <label className="font-jost font-extralight uppercase" style={LABEL}>
          Type of shoot
        </label>
        <select
          value={form.type}
          onChange={(e) => update("type", e.target.value)}
          onFocus={() => setFocused("type")}
          onBlur={() => setFocused(null)}
          className="font-jost font-extralight"
          style={{ ...inputStyle("type"), appearance: "none" as const }}
        >
          {SHOOT_TYPES.map((t) => (
            <option key={t} value={t} style={{ backgroundColor: "var(--bg)" }}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Preferred date */}
      <div className="flex flex-col gap-2">
        <label className="font-jost font-extralight uppercase" style={LABEL}>
          Preferred date{" "}
          <span style={{ color: "var(--muted)", fontSize: "9px", letterSpacing: "2px" }}>
            (optional)
          </span>
        </label>
        <input
          type="text"
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          onFocus={() => setFocused("date")}
          onBlur={() => setFocused(null)}
          placeholder="e.g. September 2025"
          className="font-jost font-extralight placeholder:text-muted"
          style={inputStyle("date")}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="font-jost font-extralight uppercase" style={LABEL}>
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          placeholder="Tell me about your project..."
          rows={4}
          className="font-jost font-extralight placeholder:text-muted resize-none"
          style={inputStyle("message")}
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="font-jost font-extralight uppercase w-fit px-6 py-3 mt-2"
        style={{
          border: "0.5px solid #2A4030",
          color: "var(--accent)",
          fontSize: "10px",
          letterSpacing: "4px",
          background: "none",
          cursor: "pointer",
        }}
      >
        Send enquiry
      </button>
    </form>
  );
}
