# PlantAR: An Interactive AR Learning Tool

### University of North Texas — CSCE 4901 Capstone Project  
**Team:** Yogesh Ayer, Yam Karki, Diya Chataut, Abhie Koirala, Ashish Pudasaini  
**Sponsor:** Dr. Stephanie Ludi  
**Semester:** Fall 2025  

---

## Overview

PlantAR is an Augmented Reality (AR) mobile application designed to help elementary and middle school students (ages 8–14) explore plant biology in an engaging, hands-on way.  
By pointing their mobile device at a printed target image, students can view and interact with a 3D model of a plant — rotating, zooming, and tapping on individual parts (roots, stem, leaves, flowers) to reveal their names and functions.

This project combines Unity (AR Foundation) for AR functionality and React Native (Expo) for the front-end interface. The team follows an agile process to deliver incremental, testable features each sprint.

---

## Problem Statement

Traditional textbooks rely on static 2D images to explain plant structures, which often fail to engage students or foster retention.  
PlantAR transforms this experience by offering an interactive 3D AR environment, improving understanding, motivation, and long-term learning outcomes.

---

## Current Status

| Sprint | Focus | Key Deliverables |
|--------|--------|------------------|
| Sprint 0 | Planning and Setup | Requirements, architecture, GitHub repository, Trello board |
| Sprint 1 | AR Foundations | Image tracking, 3D model rendering, UI wireframes |
| Sprint 2 | Interactivity and Usability | Tap interactions, info panels, floating labels |
| Sprint 3 (Planned) | Web Viewer | Quiz mode, multi-plant support, teacher preview mode,tutorial |

---

## System Requirements

- **Mobile Platforms:**  
  - iOS (ARKit 4.0+, iPhone 8 or newer)  
  - Android (ARCore 1.0+ supported devices)  
- **Development Platform:** Unity 2021.3 LTS or later  
- **AR Framework:** AR Foundation, ARKit, ARCore  
- **3D Assets:** Educational plant models (Sunflower as MVP)  
- **Web Component:** React + Next.js + Three.js for browser preview  

---

## Core Features (MVP)

| ID | Feature | Description |
|----|----------|-------------|
| F1 | Image Tracking | Recognize printed target image using AR camera |
| F2 | 3D Model Rendering | Render and anchor a 3D plant model on tracked target |
| F3 | Model Manipulation | Rotate and zoom model via touch gestures |
| F4 | Interactive Parts | Tap on roots, stem, leaves, or flower |
| F5 | Information Display | Pop-up panel showing name and function of plant part |

**Planned Enhancements:**  
Multi-plant selection (F8), teacher preview mode (F9), quiz system, offline caching, and audio narration.

---

## Architecture Overview

**Core Modules**
- **AR Module:** Manages image tracking and spawning of plant models  
- **Data Module:** Stores plant and part data using ScriptableObjects  
- **UI Module:** Displays labels and information panels  
- **Core Services:** Managed through a lightweight Service Locator pattern  

**Design Patterns**
- Service Locator  
- Observer Pattern  
- Singleton  
- Dependency Injection  

**Technology Stack**
- Unity 2021.3 LTS (C#)  
- AR Foundation / ARKit  
- Firebase Firestore (for data storage)  
- React Native (Expo)  
- Three.js (Web 3D Viewer)  

---

## Test Plan Summary

**Objectives**
- Validate AR tracking accuracy, 3D rendering, and interactive behavior.  
- Verify usability and accessibility for children ages 8–14.  
- Ensure consistent performance (≥ 30 FPS, < 3 s model load time).  

**Test Types**
- Unit and Integration Testing (Unity Test Framework / Jest)  
- Manual Device Testing (iOS)  
- Usability Testing (target users)  
- Regression and Performance Testing (Sprint 3)  

**Environment**
- Unity 2021.3 LTS  
- iPhone 8 / iPhone 12 Pro test devices  
- Firebase Emulator Suite for local testing  

---

## Repository Structure
PlantAR/
├── Assets/
│ ├── Art/Models, Textures, Materials, UI
│ ├── Content/Plants/Sunflower/
│ ├── Prefabs/AR, UI
│ ├── Scenes/Boot, Home, ARScene
│ └── Scripts/
│ ├── AR/TrackedImageSpawner.cs
│ ├── Core/ServiceLocator.cs, ContentProvider.cs
│ ├── Data/PlantData.cs, PartData.cs
│ ├── UI/InfoPanelController.cs, LabelView.cs
│ └── Quiz/
├── plantar-ui-main/ # React Native (Expo) app
├── docs/ # Design docs, requirements, and test plans
└── README.md

---

## Setup Instructions (Unity + AR)

1. Install **Unity 2021.3 LTS** (or later).  
2. Add required packages via **Package Manager**:  
   - AR Foundation  
   - ARKit XR Plugin  
   - ARCore XR Plugin (optional for Android)  
3. Clone the repository:  
   ```bash
   git clone https://github.com/<your-username>/PlantAR.git
   cd PlantAR
Open the project in Unity and switch platform to iOS.
Build and deploy to device using Xcode.
Running the React Native (Expo) UI
cd plantar-ui-main
npm install
npx expo start --tunnel -c
To Test:
Download Expo Go from the App Store.
Scan the QR code displayed in the terminal.
The PlantAR UI will load instantly on your device.

Trello Board : https://trello.com/b/FZhfAA0v/ar-science-tool



