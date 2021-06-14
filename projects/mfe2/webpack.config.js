const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['auth-lib', 'plugin-lib']
);

module.exports = {
  output: {
    uniqueName: "mfe2",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },  
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "mfe2",
        library: { type: "var", name: "mfe2" },
        filename: "remoteEntry.js",
        exposes: {  
            './Module': './projects/mfe2/src/app/flights/flights.module.ts',
            './web-components': './projects/mfe2/src/bootstrap.ts'
        },
        shared: {
          "@angular/core": { requiredVersion: '^12.0.0', strictVersion: true },
          "@angular/common": { requiredVersion: '^12.0.0', strictVersion: false },
          "@angular/router": { requiredVersion: '^12.0.0', strictVersion: true },
          "@angular/common/http": { requiredVersion: '^12.0.0', strictVersion: true }, 

          // Uncomment for sharing lib of an Angular CLI or Nx workspace
          ...sharedMappings.getDescriptors()
        }
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
