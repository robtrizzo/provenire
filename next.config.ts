import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mz3l6y8ywafu109t.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "provenire.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "provenire.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        // Match any /game/* except /game/arc-one, /game/arc-two, /game/blog, or /game/crucible
        // and redirect to /game/arc-one/:path
        source: "/game/:path((?!arc-one|arc-two|blog|crucible).+)",
        destination: "/game/arc-one/:path",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias["@abilities"] = path.join(
      __dirname,
      "components/abilities"
    );
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
