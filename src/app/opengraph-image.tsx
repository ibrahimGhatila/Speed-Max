import { ImageResponse } from "next/og";

export const alt =
  "Speedmax — Network infrastructure for businesses that can't afford downtime";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide social share image (Facebook, LinkedIn, WhatsApp).
 * Dark navy, brand red top accent + dot, large headline, URL bottom-right.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a1428",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          position: "relative",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Brand red top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#e11d2a",
          }}
        />

        {/* Top row — brand mark + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: "#e11d2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 32 32" width="26" height="26">
                <path
                  d="M8 22 L16 8 L24 22"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div
              style={{
                color: "white",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Speedmax
            </div>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            speedmax.my
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#e11d2a",
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: 22,
            }}
          >
            Network infrastructure
          </div>
          <div
            style={{
              color: "white",
              fontSize: 80,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <span>Engineered for businesses that can&apos;t afford</span>
            <span style={{ color: "#e11d2a", marginLeft: 18 }}>
              downtime.
            </span>
          </div>
          <div
            style={{
              marginTop: 26,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div style={{ width: 56, height: 2, background: "#e11d2a" }} />
            <div
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 18,
              }}
            >
              Speedmax Solutions Sdn Bhd · Johor Bahru · Est. 2010
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
