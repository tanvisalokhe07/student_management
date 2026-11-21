const nextConfig = {
  output: "export",

  basePath: process.env.GITHUB_ACTIONS
    ? "/student-management-system"
    : "",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;