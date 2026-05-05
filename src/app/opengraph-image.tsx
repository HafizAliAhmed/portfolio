import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

// Image metadata
export const alt = `${siteConfig.name} — Co-founder & CEO of Safock`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const runtime = "edge";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,252,31,0.12), transparent 60%), #0a0a0a",
          color: "#fafafa",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.02em",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.6,
            display: "flex",
          }}
        />

        {/* Top row — logo + status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* h. logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "9999px",
                background: "#c5fc1f",
                color: "#0a0a0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "36px",
                fontWeight: 400,
                paddingBottom: "6px",
              }}
            >
              h.
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#fafafa",
              }}
            >
              hafizaliahmed
              <span style={{ color: "#737373" }}>.xyz</span>
            </div>
          </div>

          {/* Status pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              border: "1px solid #2a2a2a",
              borderRadius: "9999px",
              background: "#161616",
              color: "#a3a3a3",
              fontFamily: "ui-monospace, monospace",
              fontSize: "16px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                background: "#c5fc1f",
                display: "flex",
              }}
            />
            <span>Available · Q3 2026</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "100px",
              fontWeight: 500,
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              color: "#fafafa",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <span>AI systems that</span>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              ship.
            </span>
          </div>
          <div
            style={{
              fontSize: "100px",
              fontWeight: 500,
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              color: "#a3a3a3",
              display: "flex",
            }}
          >
            Not demos.
          </div>
        </div>

        {/* Bottom row — name + role */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            position: "relative",
            paddingTop: "32px",
            borderTop: "1px solid #1f1f1f",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 500,
                color: "#fafafa",
              }}
            >
              {siteConfig.author.name}
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#a3a3a3",
                display: "flex",
              }}
            >
              Co-founder & CEO of Safock · Founder · Builder · Educator
            </div>
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#737373",
              fontFamily: "ui-monospace, monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Karachi · Remote
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
