export async function onRequest() {
  return new Response(`)]}'{"location": "https:\/\/m.youtube.com\/user\/eaegabrielg?ajax=1\u0026layout=mobile\u0026tsp=1\u0026utcoffset=-180", "build_id": 0, "result": "redirect", "build_signature": "pt:23727873,23845930", "signed_in_username": "", "timestamp": 1572686329, "external_user_id": "", "content": {}}`, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
