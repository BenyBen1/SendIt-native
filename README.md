# SendIt Mobile App

SendIt is a React Native courier service app that allows users to send packages, track shipments, and manage deliveries. The app supports user authentication, package sending, shipment tracking, and admin management features.

## Features

- User registration and login (Firebase Auth)
- Send packages with delivery and payment options
- Track current shipments
- Admin dashboard for managing orders
- Shipping cost calculator
- Splash screen and onboarding

## Folder Structure

- `App.js` - Main app entry point
- `navigation/AuthNavigator.jsx` - Navigation stack
- `screens/` - All app screens (Login, Register, Home, Admin, SendPackage, etc.)
- `components/` - Redux slices and shared components
- `firebase/` - Firebase configuration
- `redux/` - Redux store setup
- `assets/` - Images and static assets

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the Metro bundler:**
   ```sh
   npx expo start
   ```

3. **Run on device/emulator:**
   - For iOS: `npx expo run:ios`
   - For Android: `npx expo run:android`

## Firebase Setup

Update the Firebase config in [`firebase/firebaseConfig.jsx`](firebase/firebaseConfig.jsx) with your own credentials if needed.

## Development

- Uses [React Navigation](https://reactnavigation.org/) for navigation.
- Uses [Redux](https://redux.js.org/) for state management.
- UI built with React Native components and Expo.

## License

MIT

---

*This is a student project for learning purposes.*

