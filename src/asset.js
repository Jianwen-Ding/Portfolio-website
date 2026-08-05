// Everything under `public/` is served from the deployment base, so resource
// paths stored in the data file are resolved through here.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

// Data links are either an in-repo resource or an absolute external URL.
export const resolveHref = (href) =>
  /^(https?:|mailto:|#|\/)/.test(href) ? href : asset(href);
