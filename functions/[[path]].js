export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.searchParams.get("ajax") === "1" &&
    url.pathname !== "/feed" &&
    url.pathname !== "/_get_ads"
  ) {
    url.searchParams.delete("ajax");

    return Response.redirect(
      url.origin + "/api" + url.pathname + url.search,
      302
    );
  }

  return context.next();
}
