import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elenii Shepherd",
    short_name: "Elenii",
    description: "Technology, independence and opportunity for visually impaired people.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ed",
    theme_color: "#2a77aa",
    icons: [{ src: "/icon-512.png", sizes: "512x512", type: "image/png" }, { src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
