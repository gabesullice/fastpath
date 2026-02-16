browser.commands.onCommand.addListener(async (command) => {
  if (command === "copy-path") {
    await copyPath();
  }

  if (command === "paste-path") {
    await pastePath();
  }
});
