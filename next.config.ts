import type { NextConfig } from "next";
import { config } from "process";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Adiciona uma regra para ignorar todos os arquivos dentro de uma pasta 'codigos_descartados'
    // config.module.rules.push({
    //   test: /codigos_descartados\//,
    //   loader: 'ignore-loader',
    // });

    return config;
  },
};


export default nextConfig;
