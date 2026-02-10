document.getElementById('copy').addEventListener('click', async () => {
  await copyPath();
  window.close();
});

document.getElementById('paste').addEventListener('click', async () => {
  await pastePath();
  window.close();
});
