import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: "export",
	distDir: "../../apps/backend/static",
};

export default nextConfig;
