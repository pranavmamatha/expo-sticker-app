# StickerSmash 🎉

A fun React Native app built with [Expo](https://expo.dev) that lets you pick photos and slap emoji stickers on them. Built by following the official [Expo tutorial](https://docs.expo.dev/tutorial/introduction).

## Features

- 📷 Pick any image from your device's photo library
- 🎨 Add emoji stickers on top of your image
- 👆 Drag, resize, and position stickers with gestures
- 📸 Take a screenshot and save your creation
- 📱 Runs on Android, iOS, and Web

## Tech Stack

- [Expo](https://expo.dev) — framework and tooling
- [React Native](https://reactnative.dev) — cross-platform UI
- [Expo Router](https://expo.github.io/router) — file-based navigation
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) — photo library access
- [Expo Media Library](https://docs.expo.dev/versions/latest/sdk/media-library/) — saving screenshots
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) — touch gestures
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) — smooth animations
- TypeScript

## Getting Started

### Prerequisites

- [Node.js (LTS)](https://nodejs.org/en)
- [Expo Go](https://expo.dev/go) installed on your physical device

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/StickerSmash.git
cd StickerSmash

# Install dependencies
npm install
```

### Running the App

```bash
npx expo start
```

After the development server starts:

- **Android** — Open Expo Go and scan the QR code
- **iOS** — Scan the QR code with your default Camera app
- **Web** — Press `w` in the terminal

## Project Structure

```
StickerSmash/
├── app/                  # App screens (file-based routing)
│   ├── _layout.tsx       # Root layout
│   └── index.tsx         # Home screen
├── assets/
│   └── images/           # App images and stickers
├── components/           # Reusable components
└── ...
```

## Tutorial Reference

This project was built following the official Expo tutorial:
👉 https://docs.expo.dev/tutorial/introduction

## License

This project is for learning purposes. Feel free to fork and extend it!
