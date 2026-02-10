browser.commands.onCommand.addListener(async (command) => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);

  if (command === "copy-path") {
    const pathWithQueryAndFragment = url.pathname + url.search + url.hash;
    await navigator.clipboard.writeText(pathWithQueryAndFragment);
  }

  if (command === "paste-path") {
    const clipboardText = await navigator.clipboard.readText();
    const newUrl = url.origin + clipboardText;
    await browser.tabs.update(tab.id, { url: newUrl });
  }
});
