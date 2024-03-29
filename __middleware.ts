import { i18n } from "@/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(i18n);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
