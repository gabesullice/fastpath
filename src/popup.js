document.getElementById('copy').addEventListener('click', async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const pathWithQueryAndFragment = url.pathname + url.search + url.hash;
  await navigator.clipboard.writeText(pathWithQueryAndFragment);
  window.close();
});

document.getElementById('paste').addEventListener('click', async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const currentUrl = new URL(tab.url);
  const clipboardText = await navigator.clipboard.readText();
  const newUrl = currentUrl.origin + clipboardText;
  await browser.tabs.update(tab.id, { url: newUrl });
  window.close();
});
