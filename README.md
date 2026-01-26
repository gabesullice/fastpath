<p align="center">
  <img src="logo.png" alt="Fastpath logo">
</p>

# Fastpath: URL Path Copier

A simple Firefox add-on that copies and pastes URL paths between tabs, ignoring or preserving the tab's origin (i.e., its scheme, host, and port).

## Use Case

When you need to visit the same path on different domains or ports. For example:

1. You're on `https://staging.example.com/products/123?view=details`
2. Click **Copy Path** to copy `/products/123?view=details`
3. Navigate to `https://production.example.com`
4. Click **Paste Path** to go to `https://production.example.com/products/123?view=details`

## Installation

### Temporary Installation (for development)

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on..."
4. Select the `manifest.json` file from this directory

### Permanent Installation

Install from [Firefox Add-ons](https://addons.mozilla.org/) (coming soon).

## Usage

Click the extension icon in your toolbar to reveal two buttons:

- **Copy Path** — Copies the current tab's path, query string, and fragment (everything after the host)
- **Paste Path** — Reads the clipboard and navigates to that path on the current tab's origin

## Permissions

- `activeTab` — Access the current tab's URL
- `clipboardWrite` — Copy the path to clipboard
- `clipboardRead` — Read the path from clipboard
