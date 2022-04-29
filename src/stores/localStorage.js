import { browser } from "$app/env";


export function saveLocal(key, value) {
  if (!browser) return;

  localStorage.setItem(key, JSON.stringify(value));
}

export function loadLocal(key, fallback) {
  if (!browser) return fallback;
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
