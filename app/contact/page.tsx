const fieldStyle: React.CSSProperties = {
  background: "var(--surface)",
  border: "0.5px solid var(--border)",
  color: "var(--text)",
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "18px",
  outline: "none",
  width: "100%",
  padding: "14px 16px",
};

export default function ContactPage() {
  return (
    <section className="px-8 md:px-16 pt-20 pb-28">
      {/* ── Centered container ── */}
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>

        {/* Heading */}
        <p
          className="font-jost font-extralight uppercase mb-6"
          style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
        >
          Let&apos;s collaborate
        </p>
        <h1
          className="font-cormorant font-light leading-tight mb-14"
          style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "var(--text)" }}
        >
          Let&apos;s make something
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>together</em>
        </h1>

        {/* Email */}
        <div
          className="pb-10 mb-10"
          style={{ borderBottom: "0.5px solid var(--border)" }}
        >
          <p
            className="font-jost font-extralight uppercase mb-4"
            style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
          >
            Email
          </p>
          <a
            href="mailto:hello@yazankhalil.com"
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "var(--accent)",
              letterSpacing: "-0.01em",
              display: "block",
            }}
          >
            hello@yazankhalil.com
          </a>
        </div>

        {/* Instagram */}
        <div
          className="pb-10 mb-10"
          style={{ borderBottom: "0.5px solid var(--border)" }}
        >
          <p
            className="font-jost font-extralight uppercase mb-4"
            style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
          >
            Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost font-extralight uppercase"
            style={{
              color: "var(--text)",
              fontSize: "10px",
              letterSpacing: "4px",
            }}
          >
            @yazankhalil →
          </a>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" action="#" method="post">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-jost font-extralight uppercase"
              style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              style={fieldStyle}
              className="font-cormorant placeholder:opacity-25"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-jost font-extralight uppercase"
              style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              style={fieldStyle}
              className="font-cormorant placeholder:opacity-25"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-jost font-extralight uppercase"
              style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about the project — what you need, when, where."
              style={{ ...fieldStyle, resize: "none" }}
              className="font-cormorant placeholder:opacity-25"
            />
          </div>

          {/* Send */}
          <button
            type="submit"
            className="font-jost font-extralight uppercase self-start mt-2 px-8 py-3"
            style={{
              border: "0.5px solid #2A4030",
              color: "var(--accent)",
              fontSize: "10px",
              letterSpacing: "4px",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Send →
          </button>
        </form>
      </div>
    </section>
  );
}
