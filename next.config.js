/** @type {import('next').NextConfig} */

const env = {};

for (const key in process.env) {
  if (
    !key.startsWith('NEXT_') &&
    !key.startsWith('NODE_') &&
    !key.startsWith('_')
  ) {
    env[key] = process.env[key];
  }
}

const nextConfig = {
  env,
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
