"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);

// src/data/podcasts-repository.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var pathData = path.join(__dirname, "../data/podcasts.json");
var repositoryPodcast = (podcastName) => __async(null, null, function* () {
  const language = "utf-8";
  const rawdata = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawdata);
  if (podcastName) {
    jsonFile = jsonFile.filter((podcast) => podcast.podcastName === podcastName);
  }
  return jsonFile;
});

// src/services/list-episodes-service.ts
var serviceListEpisodes = () => __async(null, null, function* () {
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  const data = yield repositoryPodcast();
  responseFormat = {
    statusCode: data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */,
    body: data
  };
  return responseFormat;
});

// src/services/filter-episodes-services.ts
var serviceFilterEpisodes = (podcastName) => __async(null, null, function* () {
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  const queryString = (podcastName == null ? void 0 : podcastName.split("?p=")[1]) || "";
  const data = yield repositoryPodcast(queryString);
  responseFormat = {
    statusCode: data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */,
    body: data
  };
  return responseFormat;
});

// src/controllers/podcasts-controller.ts
var getListEpisodes = (req, res) => __async(null, null, function* () {
  const content = yield serviceListEpisodes();
  res.writeHead(content.statusCode, { "Content-Type": "application/json" /* JSON */ });
  res.end(JSON.stringify(content.body));
});
var getFilterEpisodes = (req, res) => __async(null, null, function* () {
  const content = yield serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { "Content-Type": "application/json" /* JSON */ });
  res.end(JSON.stringify(content.body));
});

// src/app.ts
var app = (request, response) => __async(null, null, function* () {
  var _a, _b;
  const [baseUrl, queryString] = (_b = (_a = request.url) == null ? void 0 : _a.split("?")) != null ? _b : ["", ""];
  if (request.method === "GET" /* GET */ && baseUrl === "/api/list" /* LIST */) {
    yield getListEpisodes(request, response);
  }
  if (request.method === "GET" /* GET */ && baseUrl === "/api/podcasts" /* EPISODE */) {
    yield getFilterEpisodes(request, response);
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
