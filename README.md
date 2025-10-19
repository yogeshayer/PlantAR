# PlantAR: An Interactive Learning Tool  

## Overview  
PlantAR is an Augmented Reality (AR) mobile application designed to help **elementary and middle school students (ages 8–14)** learn plant biology in an engaging, hands-on way. By pointing their mobile device at a target image, students can view and interact with a **3D model of a plant** — rotating, zooming, and tapping on different parts (roots, stem, leaves, flowers) to reveal names and functions.  

##  Team  
- Yogesh Ayer  
- Yam Karki  
- Diya Chataut  
- Abhie Koirala  
- Ashish Pudasaini  

##  Problem Statement  
Traditional textbooks often use static images to teach complex biological structures, which can fail to engage students. PlantAR solves this by offering a **3D interactive AR experience**, making learning more **memorable, intuitive, and effective**.  

##  Current Status  
- **Sprint 0**: Completed (requirements gathered, project environment setup, repo initialized).  
- **Sprint 1**: Starting (focus: basic image tracking and initial 3D model rendering).
  
##  System Requirements  
- **Mobile Device**: iOS (ARKit 4.0+, iPhone 8+) or Android (ARCore 1.0+ supported devices).  
- **Development Platform**: Unity 2021.3 LTS or later.  
- **AR Framework**: AR Foundation, ARKit, ARCore.  
- **Assets**: 3D plant models and target images for tracking.  

---

##  Features (MVP)  
- **F1**: Image Tracking (recognize physical target image).  
- **F2**: 3D Model Rendering (plant model locked to target).  
- **F3**: Model Manipulation (rotate/zoom).  
- **F4**: Interactive Parts (tap on plant parts).  
- **F5**: Information Display (popup with names & functions).  

Future features include multiple plant models (F8) and teacher preview mode (F9).  

##  Setup Instructions  
1. Install **Unity 2021.3 LTS** (or later).  
2. Add **AR Foundation**, **ARKit XR Plugin**, and **ARCore XR Plugin** via Unity Package Manager.  
3. Clone the repository:  
   ```bash
   git clone <repo-url>
   cd PlantAR

## How to Run and Test the App Using Expo Go  

> 💡 *This guide is for running the PlantAR React Native (UI) portion using Expo Go for fast mobile testing.*

### Install Requirements  
Make sure you have:  
- **Node.js** (version 18 or 20 recommended)  
- **npm** (comes with Node.js)  
- **Expo CLI tools** (no global install needed — runs via `npx`)  

### Open the Project Folder  
Open a terminal or command prompt in the project’s root directory:  
```bash
cd plantar-ui-main
```

### Install Dependencies  
Install all required project packages:  
```bash
npm install
```

### Start the Expo Development Server  
Launch the project using a **tunnel** (works anywhere, even across networks):  
```bash
npx expo start --tunnel -c
```
This starts the **Metro bundler**. The terminal will display a **QR code** and may also open the **Expo Dev Tools** in your browser.  

### Open the App on Your Phone  
1. Download **Expo Go** from the App Store or Google Play.  
2. Scan the QR code displayed in the terminal:  
   - **Android:** Open Expo Go → tap **“Scan QR Code”**.  
   - **iOS:** Open your **Camera app** → tap the Expo link when prompted.  
3. The app will automatically load and run on your phone within Expo Go.  



### 💡 Tips  
- Press **r** in the terminal to reload the app.  
- Press **c** to toggle the QR code view.  
- Press **Ctrl + C** to stop the development server.  

## Trello Link
https://trello.com/c/MJc6xDBm/16-readme-file
