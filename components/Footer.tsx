import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "0.5px solid var(--border)",
      }}
      className="w-full px-8 md:px-16 h-14 flex items-center justify-between"
    >
      {/* Logo */}
      <span className="font-cormorant font-light text-base tracking-wide text-text">
        Yazan
        <span style={{ color: "var(--accent)" }} className="italic">
          {" "}Tahseen
        </span>
      </span>

      {/* Social links */}
      <ul className="flex items-center gap-8">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--muted)",
                fontSize: "10px",
                letterSpacing: "4px",
              }}
              className="font-jost font-extralight uppercase hover:text-text transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <span
        style={{
          color: "var(--muted)",
          fontSize: "10px",
          letterSpacing: "2px",
        }}
        className="font-jost font-extralight uppercase"
      >
        © {new Date().getFullYear()} Yazan Tahseen
      </span>
    </footer>
  );
}
