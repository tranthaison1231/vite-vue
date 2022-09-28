import router from "#/router/index";
import { getToken } from "#/shared/utils/token";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const whiteList = ["/login"];

router.beforeEach(async (to, _from, next) => {
  NProgress.start();
  const isAuthenticated = getToken();
  if (isAuthenticated) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
