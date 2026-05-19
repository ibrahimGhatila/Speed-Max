import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Brand favicon — red square with the Speedmax peak mark in white.
 * Generated as PNG at build time via next/og.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#e11d2a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 32 32" width="22" height="22">
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
    ),
    { ...size },
  );
}
