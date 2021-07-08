import { PluginOptions } from "./plugin-model";

export const PLUGINS: PluginOptions[] = [
  {
    "remoteEntry": "http://localhost:5002/remoteEntry.js",
    "remoteName": "mfe1",
    "exposedModule": "./Module",
    "ngModuleName": "FlightsModule",
    "link": "mfe1",
    "scopes": ["home"]
  },
  {
    "remoteEntry": "http://localhost:5003/remoteEntry.js",
    "remoteName": "mfe2",
    "exposedModule": "./Module",
    "ngModuleName": "FlightsModule",
    "link": "mfe2",
    "scopes": ["home"]
  },
  {
    "remoteEntry": "https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js",
    "remoteName": "react",
    "exposedModule": "./web-components",
    "elementName": "react-element",
    "link": "react",
    "scopes": ["home"]
  },
  {
    "remoteEntry": "https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js",
    "remoteName": "vue",
    "exposedModule": "./web-components",
    "elementName": "vue-element",
    "link": "vue",
    "scopes": ["menu"]
  },
  {
    "remoteEntry": "https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js",
    "remoteName": "angular1",
    "exposedModule": "./web-components",
    "elementName": "angular1-element",
    "link": "angular1",
    "scopes": ["home"]
  },
  {
    "remoteEntry": "https://gray-pond-030798810.azurestaticapps.net/remoteEntry.js",
    "remoteName": "angular2",
    "exposedModule": "./web-components",
    "elementName": "angular2-element",
    "link": "angular2",
    "scopes": ["menu"]
  },
  {
    "remoteEntry": "https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js",
    "remoteName": "angular3",
    "exposedModule": "./web-components",
    "elementName": "angular3-element",
    "link": "angular3/a",
    "scopes": ["menu"]
  },
  {
    "remoteEntry": "https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js",
    "remoteName": "angularjs",
    "exposedModule": "./web-components",
    "elementName": "angularjs-element",
    "link": "angularjs",
    "scopes": ["menu"]
  }
];
