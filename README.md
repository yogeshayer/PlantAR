# PlantAR

An augmented reality plant education app for iOS. Students scan physical plant reference cards with their iPhone camera to trigger interactive 3D AR models. Each model supports part-level tapping (Stem, Root, Leaves, Flowers) to display educational information. A teacher dashboard tracks student engagement and scan analytics across the class.

Built as a University of North Texas CSSE 4901 Capstone project by Team Tier1X.

---

## Requirements

- iPhone running **iOS 26.2 or later**
- Mac with **Xcode 16+**
- Free Apple ID (no paid developer account needed)
- USB cable to connect iPhone to Mac
- **Developer Mode** enabled on iPhone: Settings → Privacy & Security → Developer Mode → ON
- Internet connection on first launch (Firebase Auth + Firestore sync)
- Printed plant reference cards (10 cm × 14 cm) for AR scanning

---

## Dependencies

| Dependency | Version | Source |
|---|---|---|
| Swift | 5.0 | Built-in |
| RealityKit | iOS 26.2+ | Built-in |
| ARKit | iOS 26.2+ | Built-in |
| SwiftUI | iOS 26.2+ | Built-in |
| firebase-ios-sdk (FirebaseAuth + FirebaseFirestore) | 11.6.0 | Swift Package Manager — resolved automatically by Xcode |
| Perenual Plant API | v2 | External — API key in `Info.plist` |

---

## Getting Started

### 1. Clone and open

```bash
git clone https://github.com/yogeshayer/PlantAR.git
```

Open `PlantAR/PlantAR.xcodeproj` in Xcode. Wait for Xcode to finish downloading the Firebase Swift Package dependencies (1–2 minutes).

### 2. Connect your iPhone

Connect your iPhone via USB. When prompted **"Trust This Computer?"**, tap **Trust** and enter your passcode. Select your iPhone as the target device in the Xcode toolbar.

### 3. Sign with your Apple ID

In Xcode: select the **PlantAR** project → **Signing & Capabilities** → set **Team** to your personal Apple ID.

### 4. Run

Press **▶ Run**. Xcode compiles and installs the app. If prompted on the iPhone, go to **Settings → General → VPN & Device Management** and trust the developer certificate.

### 5. Re-signing (every 7 days)

Free Apple ID provisioning profiles expire every 7 days. Reconnect the iPhone and press **▶ Run** again — app data is fully preserved.
