export const APP_URLS = {
  web: "#",
  playStore: "#",
  appStore: "#",
} as const;

export const APP_STORE_SETTINGS = {
  android: false,
  appleStore: false,
} as const;

export function isAndroid(): boolean {
  if (typeof navigator === "undefined") return false;
  return /android/i.test(navigator.userAgent);
}

export function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

export function handleLogin(): void {
  if (isAndroid() && APP_STORE_SETTINGS.android) {
    window.location.href = APP_URLS.playStore;
  } else if (isIOS() && APP_STORE_SETTINGS.appleStore) {
    window.location.href = APP_URLS.appStore;
  } else {
    window.location.href = APP_URLS.web;
  }
}

export function showToast(message: string): void {
  const existing = document.getElementById("kk-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "kk-toast";
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%) translateY(12px)",
    background: "#2D1B0E",
    color: "#F3E9E4",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontFamily: "var(--ff-body)",
    fontWeight: "500",
    zIndex: "9999",
    boxShadow: "0 8px 24px rgba(0,0,0,.25)",
    opacity: "0",
    transition: "opacity .25s, transform .25s",
    maxWidth: "90vw",
    textAlign: "center",
    whiteSpace: "nowrap",
  } as Partial<CSSStyleDeclaration>);

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(8px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
