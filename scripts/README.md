# Backend / Helper Scripts

Contains Node.js / Firebase scripts:

- `firebase-init.js` → initializes Firebase project
- `webrtc-signaling.js` → lightweight WebRTC signaling server for screen/camera streaming
- `audit-logger.js` → writes all consent & activity logs to Firebase

## Usage
1. `npm install` in this folder
2. Run scripts with `node script-name.js`
3. Connect child apps to WebRTC signaling server (LAN or ngrok for external testing)
