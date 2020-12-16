const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  target: "serverless",
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "client",
      library: { type: config.output.libraryTarget, name: "client" },
      filename: "static/runtime/remoteEntry.js",
      // this is where we define what and where we're going to consume our modules.
      // note that this is only for local development and is relative to where the remote
      // app is in you folder structure.
      remotes: {},
      exposes: {
        "./add": "./utils/add",
        "./double": "./utils/double",
        "./Navbar": "./components/Navbar",
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3001/_next/";
    }

    return config;
  },
};
