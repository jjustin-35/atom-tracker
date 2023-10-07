/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
        ENV: process.env.ENV,
    },
    webpack: (config) => {
        config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
    },
}

module.exports = nextConfig
