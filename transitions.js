const TRANSITION_MS = 220;

function shouldHandleLink(link) {
  if (!link) return false;
  if (link.target && link.target !== "_self") return false;
  if (link.hasAttribute("download")) return false;

  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return false;

  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return false;

  return url.pathname !== window.location.pathname || url.search !== window.location.search;
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented) return;
  if (event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest("a");
  if (!shouldHandleLink(link)) return;

  event.preventDefault();
  document.body.classList.add("is-leaving");

  window.setTimeout(() => {
    window.location.href = link.href;
  }, TRANSITION_MS);
});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("is-leaving");
});
