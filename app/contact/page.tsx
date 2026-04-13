export default function ContactPage() {
  return (
    <section className="px-8 md:px-16 pt-20 pb-28">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          className="font-jost font-extralight uppercase mb-6"
          style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
        >
          Let&apos;s collaborate
        </p>

        <h1
          className="font-cormorant font-light leading-tight mb-10"
          style={{ fontSize: "clamp(36px, 4vw, 54px)", color: "var(--text)" }}
        >
          Send me the brief and
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>I&apos;ll build the ticket</em>
        </h1>

        <p
          className="font-cormorant font-light mb-12"
          style={{ fontSize: "20px", lineHeight: 1.9, color: "var(--muted)", maxWidth: "620px" }}
        >
          Leave your name, phone number, and message. I&apos;ll receive it as an email ticket and reply from there.
        </p>

        <div className="mb-12 pb-8" style={{ borderBottom: "0.5px solid var(--border)" }}>
          <div>
            <p
              className="font-jost font-extralight uppercase mb-4"
              style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
            >
              Instagram
            </p>
            <a
              href="https://instagram.com/yazan_.tahseen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost font-extralight uppercase"
              style={{
                color: "var(--text)",
                fontSize: "10px",
                letterSpacing: "4px",
              }}
            >
              @yazan_.tahseen →
            </a>
          </div>
        </div>

        <form
          className="grid gap-6"
          action="https://formsubmit.co/ytahseen.dev@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-6 md:grid-cols-2">
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
                required
                className="font-cormorant placeholder:opacity-25"
                style={{
                  background: "var(--surface)",
                  border: "0.5px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "18px",
                  outline: "none",
                  width: "100%",
                  padding: "14px 16px",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="font-jost font-extralight uppercase"
                style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+962 ..."
                required
                className="font-cormorant placeholder:opacity-25"
                style={{
                  background: "var(--surface)",
                  border: "0.5px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "18px",
                  outline: "none",
                  width: "100%",
                  padding: "14px 16px",
                }}
              />
            </div>
          </div>

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
              rows={7}
              placeholder="Tell me what you need, the event date, and any details I should know."
              required
              className="font-cormorant placeholder:opacity-25"
              style={{
                background: "var(--surface)",
                border: "0.5px solid var(--border)",
                color: "var(--text)",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "18px",
                outline: "none",
                width: "100%",
                padding: "14px 16px",
                resize: "none",
              }}
            />
          </div>

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
            Send ticket →
          </button>
        </form>
      </div>
    </section>
  );
}
