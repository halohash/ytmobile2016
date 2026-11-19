const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Max-Age": "86400",
};

export async function onRequestOptions(context) {
  
  const requestHeaders = context.request.headers.get("Access-Control-Request-Headers");

  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders,
      "Access-Control-Allow-Headers": requestHeaders || "*",
    },
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.searchParams.get("ajax") === "1" &&
    url.pathname !== "/feed" &&
    url.pathname !== "/_get_ads"
  ) {
    return Response.redirect(
      "https://mobile36.pages.dev" + url.pathname + url.search,
      302
    );
  }

  const response = await context.next();

  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
