# UEditor Plus Files

This directory should contain the UEditor Plus files.

## Required Files

Please download UEditor Plus and place the following files here:

```
public/ueditor-plus/
├── ueditor.config.js
├── ueditor.all.js
├── ueditor.all.min.js
├── themes/
├── lang/
├── dialogs/
└── ... (other UEditor files)
```

## Download UEditor Plus

You can get UEditor Plus from:
- GitHub: https://github.com/JakHuang/ueditor-plus
- Or use the official UEditor Plus npm package

## Quick Setup

If you have UEditor Plus installed via npm in the parent project, you can copy the files:

```bash
# If installed via npm
cp -r ../../node_modules/ueditor-plus/dist/* ./
```

## Note

The example will not work without these files. Make sure to add them before running `npm run dev`.
