export const mockUserState = {
  isAuthenticated: false,
  userRoles: ["user"],
};

export const isPublicRoute = (to) => {
  return !to.meta.requiresAuth && to.meta.allowedRoles.length === 0;
};

export const isAllowedRole = (to) => {
  if (to.meta.allowedRoles.length === 0) {
    return true;
  }
  return to.meta.allowedRoles.some((role) => mockUserState.userRoles.includes(role));
};
