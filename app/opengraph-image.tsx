import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Wioletta Gluza - Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (weight: 400 | 700) =>
  readFile(
    join(
      process.cwd(),
      "node_modules/@fontsource/plus-jakarta-sans/files",
      `plus-jakarta-sans-latin-${weight}-normal.woff`,
    ),
  );

export default async function OpenGraphImage() {
  const [regular, bold] = await Promise.all([fontFile(400), fontFile(700)]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        color: "#222222",
        fontFamily: "Plus Jakarta Sans",
      }}
    >
      <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -1.5 }}>
        Wioletta Gluza
      </div>
      <div style={{ fontSize: 40, marginTop: 16 }}>
        Senior Frontend Engineer - building AI products
      </div>
      <div
        style={{
          width: 880,
          height: 4,
          marginTop: 48,
          backgroundColor: "#222222",
        }}
      />
      <div style={{ fontSize: 28, marginTop: 40, color: "#666666" }}>
        www.wiola.dev
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: regular, weight: 400 },
        { name: "Plus Jakarta Sans", data: bold, weight: 700 },
      ],
    },
  );
}
