export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.searchParams.get("ajax") === "1" &&
    url.pathname !== "/feed" &&
    url.pathname !== "/_get_ads"
  ) {
    return Response.redirect(
      "https://mobile36.pages.dev/" + url.pathname + url.search,
      302
    );
  }

  return context.next();
}
