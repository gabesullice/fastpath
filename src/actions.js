async function copyPath() {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const pathWithQueryAndFragment = url.pathname + url.search + url.hash;
  await navigator.clipboard.writeText(pathWithQueryAndFragment);
}

async function pastePath() {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const clipboardText = await navigator.clipboard.readText();
  const newUrl = url.origin + clipboardText;
  await browser.tabs.update(tab.id, { url: newUrl });
}
