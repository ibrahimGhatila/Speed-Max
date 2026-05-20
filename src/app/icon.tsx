import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1f1c19",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f4f1ec",
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 22,
          fontWeight: 500,
        }}
      >
        T
      </div>
    ),
    { ...size },
  );
}
