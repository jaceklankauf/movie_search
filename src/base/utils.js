import * as Route from 'route-parser';

export function matchUrl(pattern, path) {
  const route = new Route(pattern);
  return route.match(path);
}
