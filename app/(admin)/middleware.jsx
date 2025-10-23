// middleware.js
export function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;
  if (!token && request.nextUrl.pathname.startsWith("/admin")) {
    return Response.redirect(new URL("/login", request.url));
  }
}
