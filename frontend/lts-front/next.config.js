/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
      locales: ["en"],
      defaultLocale: "en",
  },
  
      webpack: (config, {dev, isServer}) => {

         if(!dev && !isServer){
           config.optimization.minimize = true
           config.optimization.minimizer = [new TerserPlugin(
               {
                   parallel: true,
                   extractComments: true,
                   terserOptions: {
                       compress: {
                           ecma: 2020,
                           toplevel: true,
                           keep_infinity: true,
                           drop_console: false,
                           passes: 2
                       }
                   }
                   
                   
                   
               })]
           
          }
          
          return config;
      }
}

module.exports = nextConfig