"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/status-code.ts
var status_code_exports = {};
__export(status_code_exports, {
  StatusCode: () => StatusCode
});
module.exports = __toCommonJS(status_code_exports);
var StatusCode = /* @__PURE__ */ ((StatusCode2) => {
  StatusCode2[StatusCode2["CONTINUE"] = 100] = "CONTINUE";
  StatusCode2[StatusCode2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  StatusCode2[StatusCode2["PROCESSING"] = 102] = "PROCESSING";
  StatusCode2[StatusCode2["EARLY_HINTS"] = 103] = "EARLY_HINTS";
  StatusCode2[StatusCode2["OK"] = 200] = "OK";
  StatusCode2[StatusCode2["CREATED"] = 201] = "CREATED";
  StatusCode2[StatusCode2["ACCEPTED"] = 202] = "ACCEPTED";
  StatusCode2[StatusCode2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  StatusCode2[StatusCode2["NO_CONTENT"] = 204] = "NO_CONTENT";
  StatusCode2[StatusCode2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  StatusCode2[StatusCode2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  StatusCode2[StatusCode2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
  StatusCode2[StatusCode2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
  StatusCode2[StatusCode2["IM_USED"] = 226] = "IM_USED";
  StatusCode2[StatusCode2["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
  StatusCode2[StatusCode2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  StatusCode2[StatusCode2["FOUND"] = 302] = "FOUND";
  StatusCode2[StatusCode2["SEE_OTHER"] = 303] = "SEE_OTHER";
  StatusCode2[StatusCode2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  StatusCode2[StatusCode2["USE_PROXY"] = 305] = "USE_PROXY";
  StatusCode2[StatusCode2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  StatusCode2[StatusCode2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  StatusCode2[StatusCode2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  StatusCode2[StatusCode2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  StatusCode2[StatusCode2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  StatusCode2[StatusCode2["FORBIDDEN"] = 403] = "FORBIDDEN";
  StatusCode2[StatusCode2["NOT_FOUND"] = 404] = "NOT_FOUND";
  StatusCode2[StatusCode2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  StatusCode2[StatusCode2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  StatusCode2[StatusCode2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  StatusCode2[StatusCode2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  StatusCode2[StatusCode2["CONFLICT"] = 409] = "CONFLICT";
  StatusCode2[StatusCode2["GONE"] = 410] = "GONE";
  StatusCode2[StatusCode2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  StatusCode2[StatusCode2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  StatusCode2[StatusCode2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  StatusCode2[StatusCode2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  StatusCode2[StatusCode2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  StatusCode2[StatusCode2["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
  StatusCode2[StatusCode2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  StatusCode2[StatusCode2["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
  StatusCode2[StatusCode2["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
  StatusCode2[StatusCode2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  StatusCode2[StatusCode2["LOCKED"] = 423] = "LOCKED";
  StatusCode2[StatusCode2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  StatusCode2[StatusCode2["TOO_EARLY"] = 425] = "TOO_EARLY";
  StatusCode2[StatusCode2["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
  StatusCode2[StatusCode2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  StatusCode2[StatusCode2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  StatusCode2[StatusCode2["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
  StatusCode2[StatusCode2["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
  StatusCode2[StatusCode2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  StatusCode2[StatusCode2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  StatusCode2[StatusCode2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  StatusCode2[StatusCode2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  StatusCode2[StatusCode2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  StatusCode2[StatusCode2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  StatusCode2[StatusCode2["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
  StatusCode2[StatusCode2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
  StatusCode2[StatusCode2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  StatusCode2[StatusCode2["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
  StatusCode2[StatusCode2["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  return StatusCode2;
})(StatusCode || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StatusCode
});
