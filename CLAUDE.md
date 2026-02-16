# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fastpath is a Firefox browser extension (Manifest v2) that copies and pastes URL paths between tabs with different origins. It lets users transfer `pathname + search + hash` from one tab's URL to another tab's origin.

## Build

```bash
make                  # Packages src/ into dist/extension.zip
```

There is no transpilation, bundling, or dependency installation. The source is plain ES6+ JavaScript served directly to the browser.

## Testing

There are no automated tests. Testing requires manually loading `src/manifest.json` as a temporary add-on via `about:debugging` in Firefox. Do not attempt to run tests yourself — instead, describe the manual test steps the user should perform to verify changes.

## Architecture

The source files live in `src/`:

- **manifest.json** - Extension manifest (Manifest v2) declaring permissions, `commands` (keyboard shortcuts), a `browser_action` popup, and a background script.
- **actions.js** - Shared business logic: `copyPath()` extracts `pathname + search + hash` and writes it to the clipboard; `pastePath()` reads the clipboard and navigates the active tab to `origin + clipboardText`. Loaded by both the popup and the background script.
- **popup.html** - Popup UI with two buttons ("Copy Path" and "Paste Path") and inline CSS. Loads `actions.js` and `popup.js`.
- **popup.js** - Button click handlers that call `copyPath()`/`pastePath()` and close the popup.
- **background.js** - Listens for `browser.commands.onCommand` and dispatches to `copyPath()`/`pastePath()`.

The extension uses the `browser.*` WebExtensions API (Firefox-specific, not Chrome's `chrome.*`).

## Code Review

If the user makes a critical comment about the code, do not immediately change it. Instead, explain why the code is written that way and ask if they still want the change.
