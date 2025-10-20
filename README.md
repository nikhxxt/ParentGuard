# ParentGuard

ParentGuard is a cross-platform parental control project built for students and hobbyists. It provides Android full-featured child monitoring and supervised iPhone support. The project is **legal, ethical, and zero-cost for student use**.

## Features

### Android Child App
- Notifications monitoring (redacts sensitive OTPs)
- Screen mirroring via MediaProjection
- Camera & mic streaming with consent
- App usage and control (install/uninstall, screen-time)
- Location tracking
- ML-based content detection (local, optional)
- Audit logs & consent tracking

### iPhone Child App (Supervised)
- Location tracking
- App usage within ParentGuard
- MDM policies: app restrictions, web content filtering
- Telemetry reporting to parent dashboard
- Consent stored permanently

### Parent Dashboard
- Real-time monitoring of child devices
- Multi-platform support (Android & supervised iPhone)
- Audit logs, consent records, location view
- Responsive Web App (React)

### Limitations
- iPhone child cannot provide full background notification or screen/camera mirroring like Android
- Supervised iPhone requires wiping device and using Apple Configurator
- Only works cross-platform via dashboard (Android parent + supervised iPhone child or vice versa)
- No covert camera/mic access — all features comply with Apple & Google policies

## Zero-Cost Setup
- Android Studio (free)
- Mac + Apple Configurator 2 (free)
- React / Node.js / Firebase Spark tier (free)
- STUN servers for WebRTC (free)

## Next Steps
1. Read `docs/CONSENT_FLOW.md` for child onboarding
2. Read `docs/ANDROID_SETUP.md` for Android child setup
3. Read `docs/SUPERVISED_IPHONE.md` for supervised iPhone setup
4. Clone `parent_dashboard/` and run locally for testing


ParentGuard/                             # Root repo
│
├── README.md                            # Root README: project overview, features, limitations
│
├── docs/                                # Documentation folder
│   ├── ANDROID_SETUP.md                 # Android child app setup guide
│   ├── CONSENT_FLOW.md                  # Consent & onboarding flow explanation
│   └── SUPERVISED_IPHONE.md            # iPhone supervision setup & limitations
│
├── android_child/                        # Android child app folder
│   ├── README.md                         # Android child-specific documentation
│   ├── AndroidManifest.xml               # Android manifest additions for permissions/service
│   ├── MainActivity.kt                   # Main Android activity
│   └── NotificationListener.kt           # Notification listener service
│
├── ios_child_pwa/                        # iOS PWA child app folder
│   ├── README.md                         # iOS child app-specific documentation
│   └── src/                              # Source folder
│       └── index.html                    # PWA HTML file (limited features)
│
├── parent_dashboard/                      # React parent dashboard folder
│   ├── README.md                         # Dashboard-specific documentation
│   └── src/                              # React source code
│       ├── App.js                        # Main dashboard component
│       └── firebase.js                    # Firebase configuration for React app
│
├── scripts/                              # Backend/helper scripts
│   ├── README.md                         # Scripts documentation
│   └── firebase-init.js                  # Test script to add sample data to Firebase

