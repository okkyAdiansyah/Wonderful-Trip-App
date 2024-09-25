/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-wonderful-indonesia-travel-guide.pantheonsite.io',
                port: '',
                pathname: '/wp-content/**'
            }
        ]
    }
};

export default nextConfig;
