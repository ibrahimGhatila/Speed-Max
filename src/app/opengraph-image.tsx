import { ImageResponse } from "next/og";

export const alt = "Trenddeck — Premium decorative wall panels";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f4f1ec",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#b94a1f",
          }}
        />

        {/* Top row — wordmark + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "#1a1815",
              fontSize: 26,
              letterSpacing: "0.32em",
              fontWeight: 500,
            }}
          >
            TRENDDECK
          </div>
          <div
            style={{
              color: "rgba(26,24,21,0.55)",
              fontSize: 16,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            trenddeck.com.tr
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
              color: "#b94a1f",
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: 28,
              fontFamily: "sans-serif",
            }}
          >
            Decorative wall panels
          </div>
          <div
            style={{
              color: "#1a1815",
              fontSize: 92,
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Premium solutions</span>
            <span style={{ fontStyle: "italic", color: "#2a2723" }}>
              for modern interiors.
            </span>
          </div>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div style={{ width: 56, height: 2, background: "#b94a1f" }} />
            <div
              style={{
                color: "rgba(26,24,21,0.6)",
                fontSize: 18,
                fontFamily: "sans-serif",
              }}
            >
              Stone · MDF · Wood — designed and manufactured in-house.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
