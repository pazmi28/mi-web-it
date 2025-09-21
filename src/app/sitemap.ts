import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://TU-DOMINIO.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/servicios`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
  ];
}
