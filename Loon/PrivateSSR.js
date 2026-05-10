/*
PrivateSSR.js for Loon

Purpose:
- Intercept http://private.ssr/sub
- Fetch node lines from Loon/PrivateSSR.list in this repo
- Return them as a fake subscription response

Only lines beginning with supported proxy URI schemes are returned.
*/

const RAW_LIST_URL = "https://raw.githubusercontent.com/Sukewarm/private-rule/main/Loon/PrivateSSR.list";
const ALLOWED_SCHEMES = /^(ssr|ss|vmess|vless|trojan|hysteria2|hy2):\/\//i;

function makeResponse(status, body) {
  $done({
    response: {
      status: status,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store"
      },
      body: body || ""
    }
  });
}

function normalize(raw) {
  if (!raw) return "";

  return String(raw)
    .replace(/\r/g, "\n")
    .split("\n")
    .map(function (line) { return line.trim(); })
    .filter(function (line) {
      if (!line) return false;
      if (/^#/.test(line)) return false;
      return ALLOWED_SCHEMES.test(line);
    })
    .join("\n");
}

$httpClient.get({
  url: RAW_LIST_URL + "?t=" + Date.now(),
  timeout: 10000,
  headers: {
    "User-Agent": "Loon PrivateSSR"
  }
}, function (error, response, data) {
  if (error) {
    makeResponse(200, "# PrivateSSR fetch failed: " + error);
    return;
  }

  const body = normalize(data);
  if (!body) {
    makeResponse(200, "# PrivateSSR.list is empty. Put one ssr:// node per line in the repo file.");
    return;
  }

  makeResponse(200, body + "\n");
});
