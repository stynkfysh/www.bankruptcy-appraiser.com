// 301 the bare domain to www so Google sees one copy of the site (Search Console "Alternate page" fix, 2026-11-28)
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "bankruptcy-appraiser.com") {
    url.hostname = "www.bankruptcy-appraiser.com";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
