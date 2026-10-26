/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Old multi-page project URLs now live as cards on the single page.
    return [{ source: "/projects/:id", destination: "/#work", permanent: true }]
  },
}

export default nextConfig
