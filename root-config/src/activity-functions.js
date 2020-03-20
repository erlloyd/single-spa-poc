export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function navbar(location) {
  // The navbar is always active
  return true;
}

export function ships(location) {
  return prefix(location, "ships");
}
