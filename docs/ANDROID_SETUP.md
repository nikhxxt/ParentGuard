# Android Child App Setup

## Requirements
- Android Studio (latest)
- Samsung test device (or any Android)
- USB Debugging enabled
- Firebase account (Spark free tier)

## Steps
1. Clone `android_child/` project
2. Open in Android Studio
3. Configure Firebase (Firestore + Auth)
4. Enable NotificationListenerService:
   - Add permission in `AndroidManifest.xml`:
     ```xml
     <service
         android:name=".NotificationListener"
         android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE">
         <intent-filter>
             <action android:name="android.service.notification.NotificationListenerService" />
         </intent-filter>
     </service>
     ```
5. Build APK → Install on test device
6. Pair with parent dashboard using one-time code
7. Test notifications, camera/mic streaming, and screen mirroring
