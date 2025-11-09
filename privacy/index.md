# Privacy Policy for Sudokan

**Last Updated: November 9, 2025**  
**Effective Date: November 9, 2025**

---

## Introduction

Thank you for choosing **Sudokan** ("we," "us," or "our"). We are committed to protecting your privacy and being transparent about how we handle your information.

This Privacy Policy explains:
- What information we collect (and what we don't)
- How we use your information
- Your rights and choices regarding your data
- How we protect your information

**Important**: Sudokan is designed with privacy in mind. Most of your data stays on your device, and all data collection that leaves your device requires your explicit consent.

**Compliance**: This Privacy Policy complies with:
- **GDPR** (General Data Protection Regulation) - European Union
- **CCPA/CPRA** (California Consumer Privacy Act) - California, USA
- **COPPA** (Children's Online Privacy Protection Act) - United States
- **LGPD** (Lei Geral de Proteção de Dados) - Brazil
- Other applicable international privacy laws

### Who We Are

**App Name**: Sudokan  
**Developer**: Bloom Byte SRL  
**Contact Email**: contact@bloombyte.dev  
**Website**: bloombyte.dev

### Scope of This Policy

This Privacy Policy applies to:
- The Sudokan mobile application (iOS and Android)
- Any updates or new features we add to the app
- Data collected through the app only (not our website, if separate)

### Your Consent

By using Sudokan, you agree to this Privacy Policy. If you do not agree, please do not use the app.

**You control what data we collect**: On first launch, we ask for your consent to collect analytics, crash reports, and show personalized ads. You can change these preferences at any time in the app's Privacy Settings.

---

## Table of Contents

1. [Information We Collect](#1-information-we-collect)
2. [How We Use Your Information](#2-how-we-use-your-information)
3. [Legal Basis for Processing (GDPR)](#3-legal-basis-for-processing-gdpr)
4. [Data Sharing and Third Parties](#4-data-sharing-and-third-parties)
5. [Data Retention](#5-data-retention)
6. [Data Security](#6-data-security)
7. [Your Rights and Choices](#7-your-rights-and-choices)
8. [Children's Privacy](#8-childrens-privacy)
9. [International Data Transfers](#9-international-data-transfers)
10. [Changes to This Policy](#10-changes-to-this-policy)
11. [Contact Us](#11-contact-us)
12. [Regional-Specific Information](#12-regional-specific-information)

---

## 1. Information We Collect

We believe in transparency. Here's exactly what information Sudokan collects, broken down by category.

### 1.1 Information Stored Locally (On Your Device Only)

The following data **never leaves your device** and is stored using secure device storage:

#### Game Data
- **Current game state**: Your in-progress puzzle, including the numbers you've entered, mistakes made, and time elapsed
- **Game history**: Records of completed games, including difficulty, completion time, mistakes, hints used, and rank points earned
- **Statistics**: Your overall performance metrics (total games played, completion rate, average time)
- **Tutorial progress**: Whether you've completed the onboarding tutorial

**Storage Method**: Hive database (encrypted local storage)  
**Retention**: Until you delete the app or clear the data manually  
**Your Control**: You can clear game history via the "Clear History" button in Game History screen

#### Settings and Preferences
- **App settings**: Theme (light/dark), language, difficulty preference, timer visibility, error highlighting, vibration, animations
- **Adaptive difficulty preference**: Whether you've enabled Dynamic Difficulty Adjustment (DDA)
- **Consent preferences**: Your choices for analytics, crash reporting, and personalized ads

**Storage Method**: SharedPreferences (secure device storage)  
**Retention**: Until you change settings or uninstall the app  
**Your Control**: Editable anytime in Settings and Privacy Settings screens

**Important**: This local data is NOT considered "data collection" under privacy laws because it never leaves your device. However, we disclose it for full transparency.

---

### 1.2 Analytics Data (Optional - Requires Your Consent)

If you consent to analytics on the Privacy Consent screen, we collect usage data to improve the app.

**Service Used**: Firebase Analytics (provided by Google LLC)

#### What We Collect Automatically (When Analytics Enabled)

**Device Information**:
- Device model (e.g., "iPhone 14", "Samsung Galaxy S23")
- Operating system and version (e.g., "iOS 17.2", "Android 14")
- App version (e.g., "1.0.0")
- Screen resolution
- Device language setting
- Country/region (derived from IP address, but IP itself is not stored)

**App Usage Information**:
- App open/close events
- Screen views (which screens you visit)
- Session duration (how long you use the app)
- First launch date
- App update date

#### Custom Events We Track (When Analytics Enabled)

We log specific gameplay and user interactions to understand how the app is used:

**Game Flow Events** (Examples):
- `game_started` (mode: freeplay/daily, difficulty)
- `game_completed` (duration, mistakes, hints used, rank points earned)
- `game_abandoned` (progress percentage, reason)
- `puzzle_hint_requested` (hints remaining)
- `notes_mode_toggled` (enabled/disabled)

**Tutorial Events**:
- `tutorial_started` (first time or replay)
- `tutorial_step_shown` (step number)
- `tutorial_completed` (duration)

**Progression Events**:
- `rank_changed` (old rank, new rank, points)
- `streak_continued` (streak days)
- `daily_challenge_completed` (difficulty, time)

**Settings Events**:
- `difficulty_changed` (from, to)
- `theme_changed` (light/dark)
- `consent_updated` (consent type, value)

**Advertising Events**:
- `ad_impression` (ad type, placement)
- `rewarded_ad_watched` (reward type: hints/mistakes)

**Total Events**: We track various event types throughout the app to understand user interactions and improve your experience.

#### User Properties We Set (When Analytics Enabled)

To segment users and understand patterns, we set the following properties:

- `user_rank` (Unranked, Novice, Solver, Strategist, Expert, Legend)
- `preferred_difficulty` (Very Easy, Easy, Medium, Hard, Expert)
- `current_streak` (daily challenge streak days)
- `games_played_total` (lifetime count)
- `dda_enabled` (true/false)
- `consent_analytics` (true/false)
- `consent_crash_reporting` (true/false)
- `consent_personalized_ads` (true/false)

**Total User Properties**: Approximately 25 properties.

#### What Analytics Does NOT Collect

❌ Your name, email, phone number, or any personal identifiers  
❌ The specific puzzle solutions you enter  
❌ Your exact geolocation (only country-level)  
❌ Your IP address (Firebase automatically strips it)  
❌ Device identifiers (IDFA/AAID) unless personalized ads are enabled  
❌ Data from other apps on your device  
❌ Your contacts, photos, or other personal files

**Your Control**: Disable analytics anytime in Privacy Settings → "Improve the Game" toggle.

---

### 1.3 Crash Reporting Data (Optional - Requires Your Consent)

If you consent to crash reporting, we collect technical data when the app crashes to help us fix bugs.

**Service Used**: Firebase Crashlytics (provided by Google LLC)

#### What We Collect When App Crashes (When Crash Reporting Enabled)

**Crash Information**:
- **Stack traces**: Technical details about what code was running when the crash occurred
- **Exception messages**: Error descriptions generated by the app
- **Thread information**: Which parts of the app were active

**Device State at Crash**:
- Free RAM (memory available)
- Free disk space
- Device orientation (portrait/landscape)
- Battery level
- Network connectivity status (WiFi/cellular/offline)

**Device Information**:
- Device model
- Operating system version
- App version

**Debug Logs** (Non-Personal):
- Recent app events (e.g., "User opened settings", "Puzzle loaded", "Tutorial step shown")
- Game state context (e.g., "Puzzle 45% complete", "User at rank: Solver")
- No personal data or puzzle solutions

**Crash Identifiers**:
- Installation UUID (random identifier generated by Firebase, not tied to you)
- Session ID (temporary identifier for crash session)

#### What Crash Reporting Does NOT Collect

❌ Your personal information  
❌ Your IP address (stripped by Firebase)  
❌ Device identifiers (IDFA/AAID)  
❌ Your precise location  
❌ User-entered data (puzzle solutions, feedback text)

**Data Retention**: Crash reports are automatically deleted after **90 days**.

**Your Control**: Disable crash reporting anytime in Privacy Settings → "Help Us Fix Issues" toggle.

---

### 1.4 Advertising Data (Collected When Ads Are Shown)

Sudokan displays advertisements to support free access to the app. Ad data collection differs based on whether you consent to personalized ads.

**Service Used**: Google AdMob (provided by Google LLC)

#### Non-Personalized Ads (Default - No Consent Required)

If you do NOT consent to personalized ads, we show **non-personalized ads** based only on:
- **Contextual information**: The current app content (e.g., showing puzzle-related ads in a puzzle app)
- **Coarse location**: Country-level location derived from IP address (not stored)
- **Limited device info**: Screen size, OS version (for ad format compatibility)

**What is NOT collected in non-personalized mode**:
❌ Advertising ID (IDFA/AAID)  
❌ Cross-app tracking  
❌ Interest-based targeting  
❌ Behavioral data

#### Personalized Ads (Optional - Requires Your Consent)

If you consent to personalized ads on the Privacy Consent screen, AdMob may collect:

**Advertising Identifiers**:
- **IDFA** (Identifier for Advertisers) on iOS
- **AAID** (Android Advertising ID) on Android

These are device-specific IDs used to show you relevant ads based on your interests.

**Cross-App Tracking**:
- Your ad interactions across different apps that use Google's ad services
- Apps you've installed or opened
- Ad clicks and conversions

**Interest-Based Data**:
- Inferred interests (e.g., "puzzle game enthusiast", "casual gamer")
- Demographics (age range, gender - estimated, not actual)

**Google Account Data** (if you're signed into Google on your device):
- Linked to your Google account activity
- May use data from other Google services (Search, YouTube, etc.)

**Location Data** (if device permissions granted):
- Precise geolocation for location-based ads

#### Ad Network Partners

Google AdMob works with **100+ third-party ad networks** to serve ads. Each partner may collect data according to their own privacy policy.

**Full list of ad partners**: [Google's Authorized Buyers List](https://support.google.com/admob/answer/9012903)

Common partners include:
- Amazon Publisher Services
- AppLovin
- Chartboost
- InMobi
- ironSource
- Unity Ads
- Vungle

**Important**: When you consent to personalized ads, these partners may also collect data.

#### Rewarded Ads

When you watch an ad to earn rewards (extra hints or mistake limit increase):
- Ad impression is logged (to your analytics, if enabled)
- Reward fulfillment is tracked (to prevent fraud)
- No additional personal data is collected beyond standard ad serving

**Your Control**: 
- Disable personalized ads in Privacy Settings → "Personalized Ads" toggle
- Opt out device-wide via system settings:
  - **iOS**: Settings → Privacy → Tracking → Deny
  - **Android**: Settings → Google → Ads → Opt out of Ads Personalization

**Learn More**:
- [How Google uses data from apps that use Google services](https://policies.google.com/technologies/partner-sites)
- [Google Ads Settings](https://adssettings.google.com/) (manage your ad preferences)

---

### 1.5 Feedback Data (Optional - Submitted Voluntarily)

When you submit feedback via the in-app feedback form, we collect:

**Service Used**: Cloud Firestore (provided by Google LLC)

#### What We Collect When You Submit Feedback

**Your Input**:
- **Feedback text**: Your message (up to 1000 characters)
- **Satisfaction rating**: Whether you selected positive or negative

**Automatically Attached Context** (to help us understand your feedback):
- App version
- Device model (e.g., "iPhone 14", "Pixel 7")
- Operating system version (e.g., "iOS 17.2", "Android 14")
- Language setting
- Timestamp of submission
- Whether analytics is enabled (boolean, not the data itself)

**What Feedback Does NOT Collect**:
❌ Your name, email, or contact information  
❌ Device identifiers (IDFA/AAID)  
❌ IP address  
❌ Precise location  
❌ Your puzzle progress or game data

**Data Storage**: 
- Stored in Cloud Firestore database (Google servers in Europe - Belgium, `europe-west1` region)
- Only accessible by us (the app developer)
- NOT shared with third parties

**Data Retention**: Feedback is retained for **12 months** unless you request deletion earlier.

**Your Control**: 
- Feedback submission is completely optional
- Once submitted, you can request deletion by emailing us (see Contact Us section)

---

### 1.6 What We Do NOT Collect (Ever)

To be absolutely clear, Sudokan **never** collects:

❌ **Personal identifiers**: Name, email, phone number, postal address  
❌ **Account credentials**: No login required, no passwords  
❌ **Social media data**: No Facebook/Google sign-in  
❌ **Contacts**: We don't access your contact list  
❌ **Photos/Videos**: We don't access your camera roll  
❌ **Microphone/Camera**: No audio or video recording  
❌ **Precise location**: Only country-level for ads (when consented)  
❌ **Biometrics**: No fingerprint, Face ID, or biometric data  
❌ **Financial information**: No payment processing (app is free)  
❌ **Health data**: We're a puzzle game, not a health app  
❌ **Browsing history**: No web tracking  
❌ **Other app data**: We only access Sudokan's data

---

## 2. How We Use Your Information

We only use your information for the purposes described below. We do not use your data for any other purposes without your consent.

### 2.1 To Provide and Improve the App (Essential Functions)

**Legal Basis**: Legitimate interest (GDPR Art. 6(1)(f))

**Locally stored data** (game state, preferences) is used to:
- Save your puzzle progress so you can continue later
- Remember your settings (theme, language, difficulty)
- Track your game history and statistics
- Calculate your rank progression
- Adjust difficulty recommendations (if DDA enabled)
- Restore your progress after app restarts

**No internet connection required** for these functions.

---

### 2.2 To Analyze Usage and Improve Features (Analytics)

**Legal Basis**: Consent (GDPR Art. 6(1)(a))  
**Requires**: Your consent on Privacy Consent screen

If you enable analytics, we use the collected data to:

**Understand User Behavior**:
- Which features are most used (e.g., hints, notes mode, daily challenges)
- Which difficulty levels are most popular
- Where users get stuck or abandon games
- Which screens have the most engagement

**Optimize Game Balance**:
- Identify if puzzles are too easy or too hard
- Adjust Dynamic Difficulty Algorithm (DDA) effectiveness
- Balance hint system usage
- Tune rank progression rates

**Fix User Experience Issues**:
- Discover confusing UI elements
- Identify slow loading screens
- Find navigation bottlenecks
- Detect tutorial completion rates

**Prioritize Development**:
- Decide which new features to build
- Determine which bugs to fix first
- Understand regional preferences (e.g., dark mode usage by country)

**Examples of Analytics Insights**:
- "60% of users enable dark mode" → Improve dark mode design
- "Users abandon Expert puzzles at 45% completion" → Make hints more accessible
- "Tutorial completion rate is 85%" → Tutorial is effective, no changes needed
- "Daily challenge engagement highest in Japan" → Consider time zone optimization

**We do NOT use analytics for**:
❌ Selling your data to third parties  
❌ Targeting you with personalized ads (that's separate consent)  
❌ Discriminating or profiling you  
❌ Making automated decisions that affect you legally

---

### 2.3 To Fix Bugs and Crashes (Crash Reporting)

**Legal Basis**: Consent (GDPR Art. 6(1)(a))  
**Requires**: Your consent on Privacy Consent screen

If you enable crash reporting, we use the collected data to:

**Identify and Fix Crashes**:
- Detect when and why the app crashes
- Prioritize fixes for most common crashes
- Test that fixes work across different devices
- Monitor crash-free user percentage

**Improve App Stability**:
- Find memory leaks
- Detect performance issues
- Identify compatibility problems with specific devices/OS versions

**Example**:
- Crash report shows "iPhone 12 users on iOS 17.1 crash when opening settings"
- We reproduce the bug, fix it, and release an update
- All iPhone 12/iOS 17.1 users benefit from the fix

**We do NOT use crash data for**:
❌ Marketing or advertising  
❌ Tracking your behavior  
❌ Identifying you personally

---

### 2.4 To Show Advertisements (Ad Serving)

**Legal Basis**: 
- Legitimate interest (GDPR Art. 6(1)(f)) for non-personalized ads
- Consent (GDPR Art. 6(1)(a)) for personalized ads

We display advertisements to support free access to Sudokan.

**Non-Personalized Ads** (default):
- Show generic puzzle/game ads to everyone
- No tracking across apps
- Based only on app context (you're using a puzzle app)

**Personalized Ads** (if you consent):
- Show ads based on your interests
- Use Advertising ID for cross-app tracking
- May show ads for products/services you've shown interest in elsewhere

**Rewarded Ads**:
- Allow you to earn in-game rewards (hints, mistake limit)
- Voluntary - you choose to watch
- Same personalization rules apply (based on your consent)

**We do NOT**:
❌ Sell your data to advertisers (Google serves the ads)  
❌ Share your personal information with ad networks  
❌ Control which specific ads are shown (Google's automated system)  
❌ Require watching ads to play (entirely optional for rewards)

---

### 2.5 To Respond to Feedback (User Support)

**Legal Basis**: Consent (GDPR Art. 6(1)(a)) - implicit by submitting feedback  
**Requires**: Voluntary feedback submission

When you submit feedback, we use it to:
- Understand user satisfaction
- Identify feature requests
- Discover bugs or issues
- Prioritize improvements
- Measure overall app quality

**We may**:
- Read your feedback internally
- Categorize feedback themes (e.g., "wants more difficulty levels")
- Track feedback trends over time

**We do NOT**:
❌ Respond to individual feedback (no contact info collected)  
❌ Share feedback publicly  
❌ Use feedback for marketing  
❌ Link feedback to your identity (it's anonymous)

**Note**: If you want a response to your feedback, please email us directly at contact@bloombyte.dev instead of using the in-app form.

---

### 2.6 To Deliver Daily Challenges (Content Delivery)

**Legal Basis**: Legitimate interest (GDPR Art. 6(1)(f))

We use a server to:
- Generate daily puzzle configurations
- Ensure all users get the same daily challenge
- Distribute puzzle data efficiently

**No tracking occurs**: Daily challenge API calls do not collect user data, analytics events, or device identifiers.

---

### 2.7 Purposes We Do NOT Use Your Data For

To be transparent, here's what we do **NOT** do with your data:

❌ **Sell your data**: We never sell user data to third parties  
❌ **Spam you**: We don't have your email, so we can't  
❌ **Share with social media**: No Facebook/Twitter/Instagram integration  
❌ **Credit scoring**: We're not a financial service  
❌ **Employment decisions**: We're not a background check service  
❌ **Insurance underwriting**: We're a puzzle game  
❌ **Discriminate**: We don't use data to discriminate based on race, religion, gender, etc.  
❌ **Automated decision-making**: No AI/ML making decisions that affect you legally  

---

## 3. Legal Basis for Processing (GDPR)

If you're in the European Union (EU) or European Economic Area (EEA), GDPR requires us to explain our legal basis for processing your data.

### 3.1 Consent (GDPR Article 6(1)(a))

**What it means**: You explicitly agree to data collection.

**We rely on consent for**:
- ✅ **Analytics data collection** (Firebase Analytics)
- ✅ **Crash reporting** (Firebase Crashlytics)
- ✅ **Personalized advertising** (AdMob with Advertising ID)
- ✅ **Feedback submission** (Cloud Firestore)

**Your rights**:
- You can withdraw consent anytime in Privacy Settings
- Withdrawal doesn't affect past processing (but stops future collection)
- You can still use the app with all consents disabled

---

### 3.2 Legitimate Interests (GDPR Article 6(1)(f))

**What it means**: Processing is necessary for our legitimate business interests, balanced against your rights.

**We rely on legitimate interests for**:
- ✅ **Local data storage** (game state, preferences) - necessary for app functionality
- ✅ **Non-personalized ads** - supports free app access without invasive tracking
- ✅ **Daily challenge delivery** - provides core game feature
- ✅ **Security measures** - protects against fraud and abuse

**Our balancing test**:
- **Our interest**: Provide a free, functional, sustainable puzzle app
- **Your rights**: Privacy, data minimization, no excessive tracking
- **Outcome**: We minimize data collection, use local storage where possible, and require consent for any data leaving your device

**Your rights**: You can object to processing based on legitimate interests (see Section 7).

---

### 3.3 Contract (GDPR Article 6(1)(b))

**What it means**: Processing is necessary to fulfill our agreement with you.

**We do NOT rely on contract** because:
- No account creation or login required
- No paid services (app is free)
- Use of the app is governed by our Terms and Conditions (separate document)

---

### 3.4 Legal Obligation (GDPR Article 6(1)(c))

**What it means**: We must process data to comply with laws.

**We may rely on legal obligation for**:
- ✅ **Responding to valid legal requests** (court orders, subpoenas)
- ✅ **Complying with tax/financial reporting** (if we monetize in the future)

**Currently not applicable**: We have no data we're legally required to collect.

---

### 3.5 Vital Interests (GDPR Article 6(1)(d))

**What it means**: Processing is necessary to protect someone's life.

**Not applicable**: Sudokan is a puzzle game, not a health/safety app.

---

### 3.6 Public Interest (GDPR Article 6(1)(e))

**What it means**: Processing is necessary for a task in the public interest.

**Not applicable**: We're a private company, not a public authority.

---

**Summary**: We primarily rely on **consent** (for analytics, crash reporting, personalized ads) and **legitimate interests** (for core app functions). You control all consent-based processing through Privacy Settings.

---

## 4. Data Sharing and Third Parties

We do not sell your personal data. However, we work with trusted third-party service providers to deliver app functionality. This section explains who we share data with and why.

### 4.1 Google LLC (Our Primary Service Provider)

We use several Google services to power Sudokan. Here's the breakdown:

#### Firebase Analytics
- **Purpose**: App usage analytics (if you consent)
- **Data Shared**: Device info, app usage events, user properties (see Section 1.2)
- **Data Processing Agreement (DPA)**: Google acts as a **data processor** under GDPR
- **Location**: Data stored on Google servers in the United States (Iowa)
- **Privacy Policy**: [Firebase Privacy](https://firebase.google.com/support/privacy)
- **Your Control**: Disable in Privacy Settings → "Improve the Game"

#### Firebase Crashlytics
- **Purpose**: Crash reporting (if you consent)
- **Data Shared**: Crash logs, stack traces, device state (see Section 1.3)
- **Data Processing Agreement (DPA)**: Google acts as a **data processor** under GDPR
- **Location**: Data stored on Google servers in the United States
- **Privacy Policy**: [Firebase Privacy](https://firebase.google.com/support/privacy)
- **Your Control**: Disable in Privacy Settings → "Help Us Fix Issues"

#### Google AdMob
- **Purpose**: Ad serving (to support free app access)
- **Data Shared**: 
  - **Non-personalized ads**: Device info, coarse location (country), ad interactions
  - **Personalized ads** (if you consent): Advertising ID (IDFA/AAID), cross-app tracking data, inferred interests
- **Data Processing Agreement (DPA)**: Google acts as a **data processor** under GDPR
- **Location**: Data stored on Google servers globally
- **Privacy Policy**: [AdMob Privacy](https://support.google.com/admob/answer/6128543)
- **Your Control**: Disable personalized ads in Privacy Settings → "Personalized Ads"

#### Cloud Firestore
- **Purpose**: Feedback storage (if you submit feedback)
- **Data Shared**: Feedback text, satisfaction rating, device context (see Section 1.5)
- **Data Processing Agreement (DPA)**: Google acts as a **data processor** under GDPR
- **Location**: Data stored on Google servers in Europe - Belgium, `europe-west1` region
- **Privacy Policy**: [Firebase Privacy](https://firebase.google.com/support/privacy)
- **Your Control**: Feedback submission is voluntary; you can request deletion anytime

**Google's Role**: Google is a **data processor**, meaning they process data on our behalf according to our instructions. We have a Data Processing Agreement (DPA) with Google that includes:
- Standard Contractual Clauses (SCCs) for international transfers (see Section 9)
- GDPR compliance obligations
- Data security requirements
- Sub-processor disclosure

**Learn More**:
- [How Google uses data from apps that use Google services](https://policies.google.com/technologies/partner-sites)
- [Google Cloud GDPR Resource Center](https://cloud.google.com/privacy/gdpr)

---

### 4.2 Ad Network Partners (100+ Third Parties)

When you consent to personalized ads, Google AdMob shares data with **100+ ad network partners** to serve targeted advertisements.

**Common Partners** (non-exhaustive list):
- Amazon Publisher Services
- AppLovin
- Chartboost
- InMobi
- ironSource
- Unity Ads
- Vungle
- Meta Audience Network
- Twitter MoPub
- TikTok For Business

**What They May Collect** (when personalized ads enabled):
- Advertising ID (IDFA/AAID)
- Device information (model, OS, screen size)
- Ad interactions (impressions, clicks, conversions)
- Inferred interests and demographics
- Cross-app tracking data

**Their Role**: These partners are **independent data controllers**, meaning they process data according to their own privacy policies, not just ours.

**Full List**: [Google's Authorized Buyers](https://support.google.com/admob/answer/9012903)

**Your Control**:
- Disable personalized ads in Privacy Settings → "Personalized Ads" (switches to non-personalized ads)
- Opt out device-wide:
  - **iOS**: Settings → Privacy → Tracking → Deny
  - **Android**: Settings → Google → Ads → Opt out of Ads Personalization

**Important**: If you disable personalized ads in Sudokan, these partners will NOT receive your Advertising ID from our app. However, other apps on your device may still share data with them.

---

### 4.3 Daily Challenge API (Minimal Data Sharing)

Our Daily Challenge feature fetches daily puzzles from a server we control.

**Data Shared**:
- App version (to ensure compatibility)
- Requested date (to fetch correct daily puzzle)
- Difficulty level (to generate appropriate puzzle)

**Data NOT Shared**:
❌ Device identifiers  
❌ User behavior or analytics  
❌ Your game progress  
❌ Personal information

**Server Location**: Hosted in the cloud (specific provider subject to change)

**Purpose**: Ensure all users worldwide get the same daily challenge puzzle.

---

### 4.4 What We Do NOT Share

To be absolutely clear, we **never** share:

❌ **Your puzzle solutions or game progress**: This stays on your device  
❌ **Your local settings or preferences**: Never leaves your device  
❌ **Your personal identifiers**: We don't collect them, so we can't share them  
❌ **Your feedback text**: Only stored in our private database, not shared with third parties  
❌ **Data for unrelated purposes**: We don't share data with unrelated third parties (e.g., data brokers, marketers)

---

### 4.5 Legal Disclosures (Rare Circumstances)

We may disclose your information if required by law:

**When We May Disclose**:
- **Court orders or subpoenas**: If legally compelled by a valid court order
- **Law enforcement requests**: If required to comply with legal processes
- **Fraud prevention**: To protect against fraudulent, abusive, or illegal activity
- **Safety threats**: To protect the safety of our users or the public
- **Business transfers**: If Sudokan is acquired or merged (data transfers to new owner)

**What We Do**:
- Review all legal requests for validity
- Notify users when legally permitted
- Only disclose the minimum data necessary
- Challenge overbroad or invalid requests

**Important**: Because we collect minimal data and most stays on your device, we have very little data to disclose even if legally required.

---

### 4.6 Data Processing Agreement (DPA) Summary

For GDPR compliance, we have Data Processing Agreements with all processors:

| Service | Processor | DPA/SCCs | Data Location |
|---------|-----------|----------|---------------|
| Firebase Analytics | Google LLC | ✅ Yes | USA (Iowa) |
| Firebase Crashlytics | Google LLC | ✅ Yes | USA |
| Google AdMob | Google LLC | ✅ Yes | Global |
| Cloud Firestore | Google LLC | ✅ Yes | Belgium (EU) |

**Standard Contractual Clauses (SCCs)**: Google uses EU-approved SCCs for international data transfers (see Section 9 for details).

---

## 5. Data Retention

We retain your data only as long as necessary for the purposes described in this policy.

### 5.1 Local Data (On Your Device)

**Game State, History, Statistics, Settings**:
- **Retention**: Until you delete the app, clear app data, or manually clear game history
- **Your Control**: 
  - Clear game history: Game History screen → "Clear History" button
  - Delete all data: Uninstall the app

**Important**: We cannot remotely delete local data because it never leaves your device.

---

### 5.2 Analytics Data (Firebase Analytics)

**Retention Period**: **2 months** (60 days) - automatically deleted by Firebase

**What This Means**:
- Event data older than 60 days is automatically purged
- User properties are updated but historical values aren't retained
- Aggregated reports may retain summaries (e.g., "10,000 users played in January") but not individual events

**Your Control**:
- Disable analytics in Privacy Settings → "Improve the Game" (stops future collection)
- Request deletion of existing data by emailing contact@bloombyte.dev (we'll delete within 30 days)

**After Deletion**:
- Analytics consent is set to false locally
- No new data is sent to Firebase
- Existing data is deleted within 60 days automatically (or immediately upon manual deletion request)

---

### 5.3 Crash Reporting Data (Firebase Crashlytics)

**Retention Period**: **90 days** - automatically deleted by Firebase

**What This Means**:
- Crash reports older than 90 days are automatically purged
- We may export critical crash data for bug fixing (stripped of device identifiers)

**Your Control**:
- Disable crash reporting in Privacy Settings → "Help Us Fix Issues" (stops future collection)
- Request deletion by emailing contact@bloombyte.dev

**After Deletion**:
- Crash reporting consent is set to false locally
- No new crash data is sent to Firebase
- Existing data is deleted within 90 days automatically

---

### 5.4 Advertising Data (Google AdMob)

**Retention Period**: Varies by ad network partner

**Google AdMob Data**:
- **Non-personalized ads**: Minimal data, retained for ~30 days
- **Personalized ads**: Advertising ID associations retained until you reset your Advertising ID or opt out

**Your Control**:
- Disable personalized ads in Privacy Settings → "Personalized Ads"
- Reset Advertising ID:
  - **iOS**: Settings → Privacy → Tracking → Reset Advertising Identifier
  - **Android**: Settings → Google → Ads → Reset advertising ID
- Request deletion from Google: [Google Ad Settings](https://adssettings.google.com/)

**After Opt-Out**:
- New ad requests use non-personalized targeting
- Existing Advertising ID associations may persist for ~30 days (Google's retention policy)

---

### 5.5 Feedback Data (Cloud Firestore)

**Retention Period**: **12 months** - automatically deleted after 1 year

**What This Means**:
- Feedback submitted today is deleted 12 months from now
- We may export anonymized feedback themes before deletion (e.g., "users want more difficulty levels")

**Your Control**:
- Request early deletion by emailing contact@bloombyte.dev with your device details and submission timestamp
- We'll delete within 30 days of request

**After Deletion**:
- Feedback text is permanently removed from Firestore
- Aggregated insights may remain (e.g., "85% positive satisfaction rating" - no individual feedback)

---

### 5.6 Inactive Users

**If you stop using Sudokan**:
- **Local data**: Remains on your device until app uninstall
- **Analytics data**: Auto-deleted after 60 days
- **Crash data**: Auto-deleted after 90 days
- **Feedback**: Auto-deleted after 12 months
- **Ad data**: Varies by network (typically 30-90 days for non-active users)

**We do NOT have a concept of "user accounts"**, so we can't detect inactivity. Automatic retention periods apply regardless of usage.

---

### 5.7 Data Deletion Summary Table

| Data Type | Retention Period | Auto-Delete? | Manual Deletion |
|-----------|------------------|--------------|-----------------|
| **Local data** (game state, settings) | Until app uninstall | ❌ No (your device) | Clear data in app or uninstall |
| **Analytics data** | 60 days | ✅ Yes | Email contact@bloombyte.dev |
| **Crash reports** | 90 days | ✅ Yes | Email contact@bloombyte.dev |
| **Ad data** (non-personalized) | ~30 days | ✅ Yes | N/A (automatic) |
| **Ad data** (personalized) | Until opt-out/ID reset | ❌ No | Reset Advertising ID + opt out |
| **Feedback** | 12 months | ✅ Yes | Email contact@bloombyte.dev |

---

## 6. Data Security

We take reasonable measures to protect your data from unauthorized access, loss, or misuse.

### 6.1 Data Stored Locally (On Your Device)

**Security Measures**:
- **Encrypted storage**: Hive database uses AES-256 encryption (Flutter's secure storage)
- **Sandboxed access**: Only Sudokan can access its own data (OS-level protection)
- **No network transmission**: Local data never sent over the internet (unless you enable analytics/crash reporting)

**Your Responsibility**:
- Keep your device secure (use screen lock, biometric authentication)
- Don't jailbreak/root your device (weakens OS-level protections)
- Keep your OS updated (security patches)

**What We Cannot Control**:
- If your device is stolen and unlocked, local data is accessible
- If you use device backup services (iCloud, Google Drive), your game data may be backed up to the cloud (controlled by Apple/Google, not us)

---

### 6.2 Data in Transit (Network Communication)

**Encryption**:
- ✅ **HTTPS/TLS encryption** for all network requests:
  - Firebase Analytics: Encrypted
  - Firebase Crashlytics: Encrypted
  - Google AdMob: Encrypted
  - Cloud Firestore: Encrypted
  - Daily Challenge API: Encrypted

**What This Means**:
- Data sent over the internet is encrypted in transit
- Third parties (ISPs, network operators) cannot intercept and read data
- Man-in-the-middle attacks are prevented

---

### 6.3 Data at Rest (Third-Party Servers)

**Google's Security** (Firebase, AdMob, Firestore):
- Data centers with physical security (guards, biometric access)
- Data encrypted at rest (AES-256)
- Regular security audits and certifications (ISO 27001, SOC 2)
- Access controls (only authorized Google personnel)

**Learn More**:
- [Google Cloud Security](https://cloud.google.com/security)
- [Firebase Security Documentation](https://firebase.google.com/support/privacy)

---

### 6.4 Our Security Practices

**As the app developer, we**:
- ✅ Use secure coding practices (avoid common vulnerabilities)
- ✅ Regularly update dependencies (security patches)
- ✅ Conduct code reviews before releases
- ✅ Monitor crash reports for security issues
- ✅ Respond to security vulnerabilities promptly

**Access Controls**:
- Only authorized personnel (app developer) can access:
  - Firebase Analytics dashboard
  - Crashlytics reports
  - Firestore feedback database
- No third parties have direct access to your data (except Google as processor)

**Incident Response**:
- If a data breach occurs, we will:
  1. Investigate and contain the breach
  2. Notify affected users (if identifiable)
  3. Report to data protection authorities (if required by law)
  4. Take corrective action to prevent recurrence

---

### 6.5 Limitations and Risks

**No System is 100% Secure**:
- Despite our efforts, no method of transmission or storage is completely secure
- Cyberattacks, hardware failures, or human errors can occur
- If a breach happens, we'll take responsibility and notify you

**Third-Party Risks**:
- We rely on Google's security (Firebase, AdMob, Firestore)
- Ad network partners (100+) have their own security practices
- We cannot guarantee third-party security, but we choose reputable partners

**Your Role**:
- Use a strong device passcode
- Avoid using Sudokan on public/shared devices
- Keep your device OS updated
- Be cautious of phishing attempts (we'll never ask for passwords or payment info)

---

### 6.6 Security Contact

**If you discover a security vulnerability**:
- **Email**: contact@bloombyte.dev
- **Subject**: "Security Vulnerability in Sudokan"
- **Response Time**: We'll respond within 7 days

**Please do NOT**:
- Publicly disclose the vulnerability before we fix it
- Exploit the vulnerability for malicious purposes

We appreciate responsible disclosure and will credit security researchers (with permission).

---

## 7. Your Rights and Choices

Depending on your location, you have rights regarding your personal data. We respect all rights, regardless of where you live.

### 7.1 Universal Rights (Everyone, Worldwide)

You can always:

#### 1. **Control Consent**
- **Where**: Privacy Settings in the app
- **What**: Enable/disable analytics, crash reporting, personalized ads
- **Effect**: Immediate (stops future data collection)

#### 2. **Clear Local Data**
- **Where**: Game History screen → "Clear History" button
- **What**: Deletes game history and statistics
- **Effect**: Immediate (cannot be undone)

#### 3. **Uninstall the App**
- **Where**: Your device settings
- **What**: Deletes all local data
- **Effect**: Immediate (game progress lost)

#### 4. **Contact Us**
- **Email**: contact@bloombyte.dev
- **For**: Questions, complaints, data requests
- **Response Time**: Within 30 days

---

### 7.2 GDPR Rights (EU/EEA/UK Residents)

If you're in the European Union, European Economic Area, or United Kingdom, you have additional rights under GDPR:

#### Right to Access (Article 15)
**What**: Request a copy of your personal data we hold

**How to Exercise**:
- Email contact@bloombyte.dev with subject "GDPR Data Access Request"
- Include: Your device model, approximate dates of app usage
- We'll provide data in a structured, machine-readable format (JSON)

**What You'll Receive**:
- Copy of analytics data (if analytics enabled)
- Copy of crash reports (if crash reporting enabled)
- Copy of feedback submissions (if you submitted any)
- Note: Local data (game state, settings) is already on your device

**Timeline**: Within **30 days** (may extend to 60 days for complex requests)

---

#### Right to Rectification (Article 16)
**What**: Correct inaccurate personal data

**How to Exercise**:
- Email contact@bloombyte.dev with subject "GDPR Data Correction Request"
- Specify what data is incorrect and the correction

**Important**: Most data we collect is technical (device model, app events), so rectification may not be applicable. If you believe data is inaccurate, we'll investigate.

**Timeline**: Within **30 days**

---

#### Right to Erasure / "Right to Be Forgotten" (Article 17)
**What**: Request deletion of your personal data

**How to Exercise**:
- Email contact@bloombyte.dev with subject "GDPR Data Deletion Request"
- Include: Device model, approximate dates of app usage

**What We'll Delete**:
- ✅ Analytics data (from Firebase, within 30 days)
- ✅ Crash reports (from Crashlytics, within 30 days)
- ✅ Feedback submissions (from Firestore, within 30 days)
- ✅ Ad data (we'll instruct Google to delete, but cannot control third-party ad networks)

**What We Cannot Delete**:
- ❌ Local data (on your device - you must clear it or uninstall)
- ❌ Data required by law to retain (e.g., financial records - currently N/A)
- ❌ Aggregated/anonymized data (not considered personal data)

**Timeline**: Within **30 days**

**After Deletion**:
- We'll confirm deletion via email
- You can continue using the app (all data collection remains disabled unless you re-consent)

---

#### Right to Restrict Processing (Article 18)
**What**: Limit how we use your data while we verify a request (e.g., accuracy dispute)

**How to Exercise**:
- Email contact@bloombyte.dev with subject "GDPR Restrict Processing Request"
- Explain the reason for restriction

**Effect**:
- We'll pause non-essential processing (e.g., analytics analysis)
- Essential functions (e.g., ad serving) may continue
- Data won't be deleted, but usage is limited

**Timeline**: Within **30 days**

---

#### Right to Data Portability (Article 20)
**What**: Receive your data in a portable format to transfer to another service

**How to Exercise**:
- Email contact@bloombyte.dev with subject "GDPR Data Portability Request"

**What You'll Receive**:
- JSON file with:
  - Analytics events (if applicable)
  - Crash reports (if applicable)
  - Feedback submissions (if applicable)
  - Game statistics (exported from local storage, if you provide a backup)

**Format**: JSON (machine-readable)

**Timeline**: Within **30 days**

---

#### Right to Object (Article 21)
**What**: Object to processing based on legitimate interests

**How to Exercise**:
- Email contact@bloombyte.dev with subject "GDPR Objection to Processing"
- Specify which processing you object to (e.g., non-personalized ads, daily challenge API)

**Effect**:
- We'll stop the processing unless we have compelling legitimate grounds to continue
- For analytics/crash reporting: Already controllable via Privacy Settings
- For ads: We rely on ads to offer a free app, but you can disable personalized ads

**Timeline**: Within **30 days**

---

#### Right to Object to Automated Decision-Making (Article 22)
**What**: Object to decisions made solely by automated systems that significantly affect you

**Sudokan's Status**: ❌ **Not applicable** - we don't make automated decisions that legally or significantly affect you. Examples of what we DON'T do:
- Credit scoring
- Employment decisions
- Insurance underwriting
- Legal judgments

**Dynamic Difficulty Adjustment (DDA)**: The DDA system adjusts puzzle difficulty recommendations, but:
- It's a gameplay feature, not a legal decision
- You can ignore recommendations
- You can disable DDA in settings
- No legal or significant impact

---

#### Right to Lodge a Complaint
**What**: File a complaint with a data protection authority

**How**:
- **EU Residents**: Contact your country's supervisory authority
  - [List of EU Data Protection Authorities](https://edpb.europa.eu/about-edpb/about-edpb/members_en)
- **UK Residents**: [Information Commissioner's Office (ICO)](https://ico.org.uk/)

**Common Authorities**:
- **Germany**: Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)
- **France**: Commission Nationale de l'Informatique et des Libertés (CNIL)
- **Italy**: Garante per la protezione dei dati personali
- **Spain**: Agencia Española de Protección de Datos (AEPD)
- **Romania**: Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)

**When to Complain**:
- If we don't respond to your request within 30 days
- If you're unsatisfied with our response
- If you believe we violated GDPR

**No Penalty**: Lodging a complaint doesn't prevent you from seeking legal remedies.

---

### 7.3 CCPA/CPRA Rights (California Residents)

If you're a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):

#### Right to Know (CCPA § 1798.100)
**What**: Request disclosure of:
- Categories of personal information collected
- Sources of personal information
- Business purpose for collection
- Third parties we share data with

**How to Exercise**:
- Email contact@bloombyte.dev with subject "CCPA Data Request"

**What You'll Receive**:
- Detailed report (see Sections 1-4 of this policy)
- Copy of specific data (same as GDPR access request)

**Timeline**: Within **45 days** (may extend to 90 days with notice)

---

#### Right to Delete (CCPA § 1798.105)
**What**: Request deletion of personal information

**How to Exercise**: Same as GDPR erasure (see Section 7.2)

**Exceptions**: We may retain data if necessary for:
- Completing transactions
- Detecting security incidents
- Complying with legal obligations
- Internal lawful uses (e.g., debugging)

**Timeline**: Within **45 days**

---

#### Right to Opt-Out of Sale (CCPA § 1798.120)
**What**: Opt out of "sale" of personal information

**Sudokan's Status**: ❌ **We do NOT sell personal information**
- We use Google AdMob for ads (data sharing, not sale)
- We don't sell data to data brokers or third parties
- No financial exchange for user data

**However**: Under CCPA's broad definition, personalized ads may be considered "sale" in some interpretations.

**Your Control**:
- Disable personalized ads in Privacy Settings → "Personalized Ads"
- Effect: Stops sharing of Advertising ID with ad networks

**No "Do Not Sell My Personal Information" Link**: We don't display this because:
- We don't sell data in the traditional sense
- You can control personalized ads directly in Privacy Settings
- Non-personalized ads are not considered "sale"

---

#### Right to Opt-Out of Sharing for Cross-Context Behavioral Advertising (CPRA § 1798.135)
**What**: Opt out of sharing data for targeted advertising across different contexts (apps, websites)

**How to Exercise**:
- Disable personalized ads in Privacy Settings → "Personalized Ads"
- Or use device-level opt-out (see Section 7.1)

**Timeline**: Immediate

---

#### Right to Correct Inaccurate Information (CPRA § 1798.106)
**What**: Request correction of inaccurate personal information

**How to Exercise**: Same as GDPR rectification (see Section 7.2)

**Timeline**: Within **45 days**

---

#### Right to Limit Use of Sensitive Personal Information (CPRA § 1798.121)
**What**: Limit use of sensitive personal information for certain purposes

**Sudokan's Status**: ❌ **We do NOT collect sensitive personal information** as defined by CCPA:
- ❌ Social Security number, driver's license, passport
- ❌ Account credentials (no login required)
- ❌ Precise geolocation (only country-level for ads)
- ❌ Race, ethnicity, religion, sexual orientation
- ❌ Biometric data (fingerprints, facial recognition)
- ❌ Health data, genetic data
- ❌ Contents of emails or messages

---

#### Right to Non-Discrimination (CCPA § 1798.125)
**What**: We cannot discriminate against you for exercising CCPA rights

**Sudokan's Commitment**:
- ✅ You can use the app fully with all consents disabled
- ✅ No price differences (app is free)
- ✅ No denial of service
- ✅ No degraded functionality

**Financial Incentive Disclosure**: ❌ We offer no financial incentives for data collection (e.g., discounts for opting in), so this is not applicable.

---

### 7.4 Other Regional Rights

#### Brazil (LGPD)
**Law**: Lei Geral de Proteção de Dados (LGPD)  
**Rights**: Similar to GDPR (access, correction, deletion, portability, consent withdrawal)  
**How to Exercise**: Email contact@bloombyte.dev with subject "LGPD Data Request"  
**Timeline**: Within **15 days**

**Supervisory Authority**: Autoridade Nacional de Proteção de Dados (ANPD)

---

#### Japan (APPI)
**Law**: Act on the Protection of Personal Information (APPI)  
**Rights**: Disclosure, correction, suspension of use, deletion  
**How to Exercise**: Email contact@bloombyte.dev with subject "APPI Data Request"  
**Timeline**: Without delay

**Supervisory Authority**: Personal Information Protection Commission (PPC)

---

#### Other Countries
**If your country has data protection laws**, we'll honor equivalent rights:
- Access to your data
- Correction of inaccurate data
- Deletion of data
- Withdrawal of consent

**How to Exercise**: Email contact@bloombyte.dev with subject "[Country] Data Protection Request"

---

### 7.5 How to Exercise Your Rights

**To make any data request**:

1. **Email us**: contact@bloombyte.dev
2. **Subject line**: Specify the type of request (e.g., "GDPR Data Deletion Request")
3. **Include**:
   - Your device model (e.g., "iPhone 14", "Samsung Galaxy S23")
   - Your country/region
   - Approximate dates of app usage (helps us locate your data)
   - Specific request details
4. **We'll respond** within the legal timeline (typically 30-45 days)

**Verification**:
- Because we don't collect personal identifiers (name, email), verification is challenging
- We may ask follow-up questions about your device/usage to confirm identity
- For deletion requests, we'll delete data matching your device characteristics

**No Cost**: Exercising your rights is **free**. We may charge a reasonable fee for excessive or repetitive requests.

---

## 8. Children's Privacy

Sudokan is designed for players **13 years of age and older**. We comply with the Children's Online Privacy Protection Act (COPPA) and other child privacy laws.

### 8.1 Age Restriction

**Minimum Age**: 13+

**Why**: Data collection (analytics, crash reporting, ads) requires parental consent for children under 13 in many jurisdictions (COPPA in the US, GDPR in EU).

**Enforcement**:
- We do NOT collect age information or verify user ages
- We rely on app store age ratings:
  - **Apple App Store**: Rated 4+ (general audience, but Privacy Policy states 13+)
  - **Google Play Store**: ESRB Everyone (E) - states "13+" in privacy notice

---

### 8.2 COPPA Compliance (United States)

**COPPA Requirements**: Websites/apps directed at children under 13 must:
1. Obtain verifiable parental consent before collecting personal information
2. Disclose data collection practices
3. Offer parents the ability to review, delete, and control data

**Sudokan's Status**: ❌ **Not directed at children under 13**
- Target audience: Teens and adults (13+)
- Content is not specifically designed for children
- No child-specific features (cartoon characters, kid-focused gameplay)

**If a Child Under 13 Uses Sudokan**:
- **Parent/Guardian Responsibility**: Parents should supervise device usage and disable analytics/ads in Privacy Settings
- **Our Commitment**: If we discover data was collected from a child under 13 without parental consent, we'll delete it immediately

**How to Report**: If you believe your child under 13 used Sudokan and consented to data collection, email contact@bloombyte.dev with subject "COPPA Data Deletion Request". We'll delete data within 30 days.

---

### 8.3 GDPR-K (EU Children's Privacy)

**EU Age of Consent for Data Processing**: Varies by country (13-16 years)
- **Germany, UK, France, Italy, Spain, Romania**: 16+
- **Netherlands, Denmark**: 13+
- **Belgium**: 13+

**Parental Consent**: If a child below the age of consent uses Sudokan:
- Parent/guardian must provide consent for analytics, crash reporting, personalized ads
- We do NOT have a parental consent mechanism (no account system)

**Recommendation**: Parents should:
- Disable all data collection in Privacy Settings
- Use device-level parental controls (Screen Time on iOS, Family Link on Android)
- Monitor app usage

---

### 8.4 Parents: How to Protect Your Child

**To ensure child safety**:

1. **Disable Data Collection**:
   - Go to Privacy Settings
   - Disable "Improve the Game" (analytics)
   - Disable "Help Us Fix Issues" (crash reporting)
   - Disable "Personalized Ads" (ad targeting)

2. **Use Device Parental Controls**:
   - **iOS**: Settings → Screen Time → Content & Privacy Restrictions
   - **Android**: Google Family Link app

3. **Monitor Usage**:
   - Check Screen Time reports
   - Review app permissions periodically

4. **Restrict In-App Purchases** (if we add them in the future):
   - **iOS**: Settings → Screen Time → Content & Privacy Restrictions → iTunes & App Store Purchases → In-App Purchases → Don't Allow
   - **Android**: Google Play Store → Settings → Require authentication for purchases

**Contact Us**: If you have concerns about your child's privacy, email contact@bloombyte.dev.

---

### 8.5 Third-Party Responsibility

**Google AdMob** and **ad network partners** have their own child privacy policies:
- [Google AdMob Families Policy](https://support.google.com/admob/answer/9283766)
- Many ad networks restrict behavioral targeting for children

**We cannot control third-party practices**, but we choose reputable partners committed to child safety.

---

## 9. International Data Transfers

Your data may be transferred to and processed in countries outside your own. This section explains how we protect your data during international transfers.

### 9.1 Where Your Data Is Processed

**Data Storage Locations**:

| Data Type | Primary Location | Processor | Legal Basis for Transfer |
|-----------|------------------|-----------|--------------------------|
| **Local data** (game state, settings) | Your device (your country) | N/A | No transfer (stays local) |
| **Analytics data** | United States (Iowa) | Google LLC (Firebase) | Standard Contractual Clauses (SCCs) |
| **Crash reports** | United States | Google LLC (Crashlytics) | Standard Contractual Clauses (SCCs) |
| **Ad data** | Global (multiple countries) | Google LLC + ad networks | Standard Contractual Clauses (SCCs) / Adequacy Decisions |
| **Feedback** | Belgium (EU) | Google LLC (Firestore) | Within EU (no transfer if you're in EU) |

**Why Data Leaves Your Country**:
- **Firebase Analytics/Crashlytics**: Google's default infrastructure is US-based
- **AdMob**: Ads served globally from nearest data center for performance
- **Firestore**: We specifically chose EU servers (Belgium) to minimize transfers for EU users

---

### 9.2 Legal Basis for International Transfers (GDPR)

If you're in the EU/EEA/UK, transferring your data outside these regions requires legal safeguards under GDPR Articles 44-50.

#### Standard Contractual Clauses (SCCs)
**What**: EU Commission-approved contract templates that legally protect data transferred outside the EU

**Our Implementation**:
- ✅ Google LLC has signed **EU Standard Contractual Clauses (2021/914)** with us
- ✅ SCCs cover Firebase Analytics, Crashlytics, AdMob, and Firestore
- ✅ Google commits to GDPR-level protections even in the US
- ✅ Includes data subject rights, security obligations, and breach notifications

**Your Rights Under SCCs**:
- Request a copy of the SCCs by emailing contact@bloombyte.dev
- Enforce SCC terms directly against Google (third-party beneficiary rights)
- Lodge complaints with EU supervisory authorities

**Learn More**:
- [Google Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum)
- [EU Standard Contractual Clauses](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)

---

#### Adequacy Decisions
**What**: EU Commission's determination that a country provides adequate data protection

**Applicable Countries**:
- ✅ **European Economic Area (EEA)**: Norway, Iceland, Liechtenstein
- ✅ **United Kingdom** (post-Brexit adequacy decision)
- ✅ **Switzerland** (partial adequacy)
- ❌ **United States**: No general adequacy decision (uses SCCs instead)

**Firestore EU Region**:
- If you're in the EU and your feedback is stored in Belgium (`europe-west1`), data stays within the EU
- No international transfer occurs (GDPR Chapter V doesn't apply)

---

#### EU-U.S. Data Privacy Framework (DPF)
**Status as of November 2025**: The EU-U.S. Data Privacy Framework provides a legal basis for transatlantic data transfers.

**Google's Certification**:
- Google LLC is certified under the EU-U.S. Data Privacy Framework
- Provides additional safeguards for US-based data processing
- Complements Standard Contractual Clauses

**Your Rights**:
- File complaints with the U.S. Department of Commerce
- Invoke binding arbitration for unresolved disputes

**Learn More**: [Data Privacy Framework List](https://www.dataprivacyframework.gov/s/)

**Important**: Even without DPF, our SCCs with Google ensure legal compliance.

---

### 9.3 Third-Party Ad Network Transfers

**Challenge**: 100+ ad networks may transfer data globally

**Our Approach**:
1. **Non-personalized ads** (default): Minimal data shared, country-level only
2. **Personalized ads** (if you consent):
   - Google AdMob uses SCCs with ad partners
   - Many ad networks are EU-U.S. DPF certified
   - Some may rely on other legal bases (e.g., adequacy decisions, local processing)

**Your Control**:
- Disable personalized ads in Privacy Settings to minimize international transfers
- Opt out device-wide (iOS Tracking settings, Android Ad Settings)

**Transparency**: We cannot guarantee all 100+ ad networks comply perfectly with GDPR. We choose reputable partners and rely on Google's vetting process.

---

### 9.4 Data Transfers to Romania (Our Location)

**Developer Location**: Bloom Byte SRL is based in Romania (EU member state)

**Transfers to Romania**:
- ❌ **No direct transfers**: We don't have our own servers; all data is processed by Google
- ✅ **Within EU**: Romania is in the EU, so EU → Romania transfers don't require additional safeguards
- ❌ **We don't access raw user data**: Analytics/crash reports viewed via Google's dashboards (data stays on Google's servers)

**Exception**: If you email us (contact@bloombyte.dev), your email is processed in Romania. This is a direct transfer you initiate voluntarily.

---

### 9.5 Government Access to Data (Surveillance Concerns)

**Concern**: U.S. government surveillance laws (FISA Section 702, Executive Order 12333) may allow access to data stored in the U.S.

**Our Position**:
- **Limited data collection**: We minimize data leaving your device
- **Google's commitments**: Google challenges overbroad government requests and publishes transparency reports
- **Anonymization**: Most data we collect is pseudonymous (no names, emails)
- **Your control**: Disable analytics/crash reporting to keep data local

**What We Do If We Receive a Legal Request**:
1. Review for legal validity
2. Challenge overbroad or unlawful requests
3. Notify affected users (if legally allowed)
4. Disclose only minimum necessary data

**Transparency Report**: Google publishes government data requests: [Google Transparency Report](https://transparencyreport.google.com/)

---

### 9.6 Your Rights Regarding International Transfers

**If you're in the EU/EEA/UK**:
- ✅ **Object to transfers**: Email contact@bloombyte.dev with subject "GDPR Objection to International Transfer"
- ✅ **Request local processing**: We can't change Google's infrastructure, but we'll disable data collection for you
- ✅ **Lodge a complaint**: Contact your national data protection authority (see Section 7.2)

**If we cannot provide adequate safeguards**, we'll stop processing your data (and you can use the app offline with all consents disabled).

---

### 9.7 Future Changes to Data Locations

**If we change service providers** or data locations:
- We'll update this Privacy Policy (see Section 10)
- Ensure new providers have adequate safeguards (SCCs, adequacy decisions, DPF)
- Notify users if the change materially affects privacy rights

**Current commitment**: Firestore will remain in EU (Belgium) for feedback storage.

---

## 10. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or app features.

### 10.1 How We Notify You of Changes

**Material Changes** (e.g., new data collection, changed purposes, new third parties):
- Update "Last Updated" date at the top of this policy
- Display an **in-app notification** on next app launch (alert dialog)
- Require **re-consent** for changes to consent-based processing (analytics, crash reporting, personalized ads)

**Non-Material Changes** (e.g., clarifications, typos, formatting, contact info updates):
- Update "Last Updated" date
- No in-app notification required
- Changes effective immediately upon posting

**Where to Find the Latest Version**:
- In-app: Settings → Privacy Policy (opens this document)
- Website: bloombyte.dev/privacy (if published online)
- App Store listings: Link in app description

---

### 10.2 Your Rights When Policy Changes

**If you disagree with changes**:
- ✅ **Withdraw consent**: Disable analytics, crash reporting, personalized ads in Privacy Settings
- ✅ **Stop using the app**: Uninstall Sudokan (all local data deleted)
- ✅ **Request data deletion**: Email contact@bloombyte.dev to delete cloud-stored data

**If we require re-consent**:
- You'll see a consent dialog on next app launch
- You can accept or decline each consent separately
- Declining doesn't prevent app usage (you can play with all consents off)

---

### 10.3 Version History

**Current Version**: November 9, 2025

**Major Updates**:
- **November 9, 2025**: Initial Privacy Policy created for v1.0.0 app launch

**Future updates** will be listed here with brief descriptions.

---

### 10.4 Review Frequency

We review this Privacy Policy:
- **Annually** (at minimum)
- **Before major app updates** (new features that affect privacy)
- **When laws change** (new privacy regulations)
- **Upon user feedback** (if policy is unclear or inaccurate)

**Last Review Date**: November 9, 2025

---

## 11. Contact Us

We're committed to transparency and answering your privacy questions.

### 11.1 Privacy Inquiries

**For privacy-related questions, requests, or complaints**:

**Email**: contact@bloombyte.dev  
**Subject Line Suggestions**:
- "Privacy Question: [Your Topic]"
- "GDPR Data Request" / "CCPA Data Request" / "LGPD Data Request"
- "Data Deletion Request"
- "Privacy Complaint"

**Response Time**: Within **30 days** (may extend to 60 days for complex requests with notice)

**What to Include**:
- Your device model (e.g., "iPhone 14", "Samsung Galaxy S23")
- Your country/region
- Approximate dates of app usage (helps us locate your data)
- Specific question or request details

---

### 11.2 Developer Information

**Company Name**: Bloom Byte SRL  
**Registered Address**: Bucharest, Romania  
**Website**: bloombyte.dev  
**Email**: contact@bloombyte.dev

**App Store Presence**:
- **Apple App Store**: Search "Sudokan" or developer "Bloom Byte SRL"
- **Google Play Store**: Search "Sudokan" or developer "Bloom Byte SRL"

---

### 11.3 Data Protection Officer (DPO)

**GDPR Requirement**: Companies processing large-scale EU personal data must appoint a DPO.

**Sudokan's Status**: ❌ **Not required**
- We're a small developer (not a public authority)
- Processing is not large-scale (minimal data collection)
- No sensitive data processing

**However**: We treat privacy inquiries with DPO-level seriousness. All privacy requests go directly to the developer/founder.

---

### 11.4 EU Representative (GDPR Article 27)

**GDPR Requirement**: Non-EU companies processing EU data must appoint an EU representative.

**Sudokan's Status**: ✅ **Not required** - Bloom Byte SRL is based in Romania (EU member state)

**If you're an EU resident**, you can contact us directly at contact@bloombyte.dev (we're already in the EU).

---

### 11.5 Supervisory Authorities (Data Protection Agencies)

If you're unsatisfied with our response, you can lodge a complaint with a data protection authority:

#### European Union (GDPR)
**Your country's supervisory authority**:
- [List of EU Data Protection Authorities](https://edpb.europa.eu/about-edpb/about-edpb/members_en)

**Developer's Authority (Romania)**:
- **Name**: Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
- **Website**: [dataprotection.ro](https://www.dataprotection.ro/)
- **Address**: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, Romania

#### United States (CCPA/CPRA)
**California Attorney General**:
- **Website**: [oag.ca.gov/privacy](https://oag.ca.gov/privacy)
- **Complaint Form**: [California Privacy Rights](https://oag.ca.gov/contact/consumer-complaint-against-business-or-company)

#### Brazil (LGPD)
**Autoridade Nacional de Proteção de Dados (ANPD)**:
- **Website**: [gov.br/anpd](https://www.gov.br/anpd/pt-br)

#### Other Countries
Search "[Your Country] data protection authority" or "privacy regulator" to find your local authority.

---

### 11.6 Security Vulnerability Reporting

**If you discover a security issue**:
- **Email**: contact@bloombyte.dev
- **Subject**: "Security Vulnerability in Sudokan"
- **Include**: Description, steps to reproduce, potential impact

**We'll respond within 7 days** and work to fix the issue promptly.

**Responsible Disclosure**: Please don't publicly disclose vulnerabilities before we fix them. We appreciate security researchers and will credit you (with permission).

---

## 12. Regional-Specific Information

This section provides additional details for users in specific regions.

### 12.1 European Union (EU) / European Economic Area (EEA)

**Applicable Law**: General Data Protection Regulation (GDPR)

**Key Points for EU Residents**:
- ✅ **Legal basis**: Consent (analytics, crash reporting, personalized ads) + Legitimate interests (core app functions)
- ✅ **Data minimization**: We collect only necessary data
- ✅ **Right to withdraw consent**: Anytime in Privacy Settings
- ✅ **Right to erasure**: Email contact@bloombyte.dev (30-day response)
- ✅ **Right to lodge complaint**: Contact your national supervisory authority
- ✅ **International transfers**: Protected by SCCs and EU-U.S. Data Privacy Framework
- ✅ **No automated decision-making**: We don't make legal/significant decisions about you

**Firestore EU Storage**: Feedback data stored in Belgium (`europe-west1`) stays within the EU.

**GDPR Rights Summary** (see Section 7.2 for full details):
1. Right to access (Article 15)
2. Right to rectification (Article 16)
3. Right to erasure (Article 17)
4. Right to restrict processing (Article 18)
5. Right to data portability (Article 20)
6. Right to object (Article 21)
7. Right not to be subject to automated decision-making (Article 22)
8. Right to lodge a complaint (Article 77)

**Supervisory Authority**: Contact your country's data protection authority or Romania's ANSPDCP (our location).

---

### 12.2 United Kingdom (UK)

**Applicable Law**: UK GDPR + Data Protection Act 2018

**Key Points for UK Residents**:
- ✅ **Same rights as EU GDPR** (UK maintained GDPR post-Brexit)
- ✅ **Adequacy decision**: EU considers UK adequate, so EU-UK transfers are unrestricted
- ✅ **ICO oversight**: UK supervisory authority is the Information Commissioner's Office

**Supervisory Authority**:
- **Name**: Information Commissioner's Office (ICO)
- **Website**: [ico.org.uk](https://ico.org.uk/)
- **Helpline**: 0303 123 1113
- **Report a Concern**: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/)

**Your Rights**: Identical to EU GDPR (see Section 7.2).

---

### 12.3 California, United States (CCPA/CPRA)

**Applicable Law**: California Consumer Privacy Act (CCPA) + California Privacy Rights Act (CPRA)

**Key Points for California Residents**:
- ✅ **Right to know**: Request disclosure of data collected (see Section 7.3)
- ✅ **Right to delete**: Request deletion (45-day response)
- ✅ **Right to opt out**: No "sale" occurs, but you can disable personalized ads
- ✅ **Right to correct**: Request correction of inaccurate data
- ✅ **Right to non-discrimination**: Using rights doesn't affect app access
- ❌ **No sensitive data collection**: We don't collect CCPA-defined sensitive data

**"Sale" of Personal Information**:
- ❌ **We do NOT sell data** in the traditional sense (no financial exchange with data brokers)
- ⚠️ **Personalized ads may qualify as "sharing"** under CCPA's broad definition
- ✅ **Your control**: Disable "Personalized Ads" in Privacy Settings → stops Advertising ID sharing

**Do Not Sell or Share My Personal Information**:
- California law requires a "Do Not Sell" link if sale/sharing occurs
- We provide equivalent control via Privacy Settings → "Personalized Ads" toggle
- Device-wide opt-out: iOS Tracking settings, Android Ad Settings

**CCPA Rights Summary** (see Section 7.3 for full details):
1. Right to Know (§ 1798.100)
2. Right to Delete (§ 1798.105)
3. Right to Opt-Out of Sale (§ 1798.120) - N/A (we don't sell)
4. Right to Opt-Out of Sharing for Cross-Context Behavioral Advertising (CPRA § 1798.135)
5. Right to Correct Inaccurate Information (CPRA § 1798.106)
6. Right to Limit Use of Sensitive Personal Information (CPRA § 1798.121) - N/A (we don't collect)
7. Right to Non-Discrimination (§ 1798.125)

**Authorized Agent**: You may designate an authorized agent to submit requests on your behalf. The agent must provide proof of authorization.

**Contact for CCPA Requests**: contact@bloombyte.dev (subject: "CCPA Data Request")

---

### 12.4 Brazil (LGPD)

**Applicable Law**: Lei Geral de Proteção de Dados (LGPD)

**Key Points for Brazilian Residents**:
- ✅ **Similar to GDPR**: LGPD is modeled on GDPR with similar rights
- ✅ **Right to access**: Request your data (15-day response)
- ✅ **Right to correction**: Fix inaccurate data
- ✅ **Right to deletion**: Request erasure
- ✅ **Right to portability**: Receive data in portable format
- ✅ **Right to withdraw consent**: Anytime in Privacy Settings

**Legal Basis** (LGPD Article 7):
- **Consent**: Analytics, crash reporting, personalized ads
- **Legitimate interests**: Core app functions, non-personalized ads

**Data Controller**: Bloom Byte SRL (contact@bloombyte.dev)

**Supervisory Authority**:
- **Name**: Autoridade Nacional de Proteção de Dados (ANPD)
- **Website**: [gov.br/anpd](https://www.gov.br/anpd/pt-br)

**Contact for LGPD Requests**: contact@bloombyte.dev (subject: "LGPD Data Request")

**Response Time**: Within **15 days** (may extend to 30 days for complex requests)

---

### 12.5 Other Regions

#### Canada (PIPEDA)
**Law**: Personal Information Protection and Electronic Documents Act  
**Rights**: Access, correction, withdrawal of consent  
**Contact**: contact@bloombyte.dev (subject: "PIPEDA Data Request")

#### Australia (Privacy Act)
**Law**: Privacy Act 1988 + Australian Privacy Principles (APPs)  
**Rights**: Access, correction, complaint to OAIC  
**Contact**: contact@bloombyte.dev (subject: "Privacy Act Request")

#### Japan (APPI)
**Law**: Act on the Protection of Personal Information  
**Rights**: Disclosure, correction, suspension of use  
**Supervisory Authority**: Personal Information Protection Commission (PPC)  
**Contact**: contact@bloombyte.dev (subject: "APPI Data Request")

#### South Korea (PIPA)
**Law**: Personal Information Protection Act  
**Rights**: Access, correction, deletion, suspension  
**Supervisory Authority**: Personal Information Protection Commission (PIPC)  
**Contact**: contact@bloombyte.dev (subject: "PIPA Data Request")

#### India (DPDPA)
**Law**: Digital Personal Data Protection Act 2023 (when enforced)  
**Rights**: Similar to GDPR (access, correction, erasure)  
**Contact**: contact@bloombyte.dev (subject: "DPDPA Data Request")

**General Policy**: If your country has data protection laws not listed here, we'll honor equivalent rights. Contact us at contact@bloombyte.dev with your country's law name.

---

## 13. Additional Information

### 13.1 California "Shine the Light" Law (Civil Code § 1798.83)

**Law**: Requires disclosure of personal information shared with third parties for direct marketing.

**Sudokan's Status**: ❌ **Not applicable**
- We do NOT share personal information with third parties for their direct marketing purposes
- Ad networks may show ads, but we don't share contact info (we don't collect it)

**If this changes**: We'll update this policy and provide opt-out mechanisms.

---

### 13.2 Nevada Privacy Rights (SB 220)

**Law**: Nevada residents can opt out of the "sale" of covered information.

**Sudokan's Status**: ❌ **We do NOT sell personal information** (no financial exchange)

**Your Control**: Disable personalized ads in Privacy Settings if concerned about data sharing with ad networks.

---

### 13.3 Do Not Track (DNT) Signals

**What**: Web browsers can send "Do Not Track" signals to websites.

**Sudokan's Status**: ❌ **Not applicable** - we're a mobile app, not a website

**Equivalent Control**: Privacy Settings → Disable "Personalized Ads" (stops cross-app tracking)

---

### 13.4 Third-Party Links

**In-app links** (e.g., to Google's privacy policies, app store listings):
- ❌ **Not under our control**: Third-party sites have their own privacy policies
- ✅ **We're not responsible**: For content or practices of linked sites
- ⚠️ **Review their policies**: Before providing personal information

**Links in this Privacy Policy**:
- Google Firebase Privacy Policy
- Google AdMob Privacy Policy
- EU Data Protection Authorities
- Google Transparency Report
- (All provided for your convenience)

---

### 13.5 Accessibility

**We're committed to making this Privacy Policy accessible**:
- ✅ Plain language (avoiding legal jargon where possible)
- ✅ Clear headings and table of contents
- ✅ Examples and explanations
- ✅ Available in-app and online (bloombyte.dev/privacy)

**If you need this policy in an alternative format** (e.g., large print, audio), email contact@bloombyte.dev.

---

### 13.6 Language and Translations

**Original Language**: English (this version is authoritative)

**Translations**: We may provide translations in the future for:
- Romanian (ro) - Developer's native language
- Other languages based on user base (es, pt-BR, de, fr, ja, ko, etc.)

**In case of conflict**: The English version prevails for legal interpretation.

---

## 14. Definitions (Glossary)

To help you understand this policy, here are definitions of key terms:

**Personal Data / Personal Information**: Information that identifies you or can be used to identify you (e.g., device identifiers, IP address). Under privacy laws, this includes pseudonymous data.

**Processing**: Any operation on personal data (collection, storage, use, sharing, deletion).

**Data Controller**: The entity that decides why and how personal data is processed. **Sudokan (Bloom Byte SRL) is the data controller**.

**Data Processor**: An entity that processes data on behalf of the controller. **Google LLC is our data processor**.

**Consent**: Your freely given, specific, informed, and unambiguous agreement to data processing.

**Legitimate Interests**: A legal basis for processing when necessary for the controller's interests, balanced against your rights.

**Pseudonymization**: Processing data so it can't identify you without additional information (e.g., replacing names with random IDs).

**Anonymization**: Irreversibly removing all identifiers so data can never identify you (not personal data anymore).

**Standard Contractual Clauses (SCCs)**: EU-approved contract terms that protect data transferred outside the EU.

**Adequacy Decision**: EU Commission's determination that a country provides adequate data protection.

**Supervisory Authority**: Government agency that enforces data protection laws (e.g., ICO in UK, ANSPDCP in Romania).

**Data Subject**: You, the individual whose data is being processed.

**Third Party**: An entity other than you and us (e.g., Google, ad networks).

**Advertising ID**: A device-specific identifier for advertising (IDFA on iOS, AAID on Android). Resettable by users.

**Cross-App Tracking**: Tracking your activity across multiple apps to build a profile.

**GDPR**: General Data Protection Regulation (EU law).

**CCPA/CPRA**: California Consumer Privacy Act / California Privacy Rights Act (California law).

**COPPA**: Children's Online Privacy Protection Act (US law for children under 13).

**LGPD**: Lei Geral de Proteção de Dados (Brazil's data protection law).

---

## 15. Acknowledgments

This Privacy Policy was drafted with care to comply with:
- GDPR (EU)
- CCPA/CPRA (California)
- COPPA (US children's privacy)
- LGPD (Brazil)
- Other international privacy laws

**Resources consulted**:
- [GDPR Full Text](https://gdpr-info.eu/)
- [CCPA/CPRA Full Text](https://oag.ca.gov/privacy/ccpa)
- [COPPA Compliance Guide](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)
- [Google's Privacy Policies](https://policies.google.com/)
- [ICO Privacy Guidance](https://ico.org.uk/)

**Legal Review**: This policy was created by the developer. We recommend users review it carefully. If you have legal concerns, consult a privacy attorney in your jurisdiction.

---

## 16. Effective Date and Acceptance

**Effective Date**: November 9, 2025

**By using Sudokan after this date**, you acknowledge that you have read, understood, and agree to this Privacy Policy.

**If you do not agree**:
- Disable all data collection in Privacy Settings
- Or uninstall the app

**Your continued use** of the app after policy updates constitutes acceptance of the revised policy.

---

## Summary

Thank you for reading Sudokan's Privacy Policy. Here's a quick recap:

### What We Collect
- **Local data** (game state, settings) - stays on your device
- **Analytics** (optional) - usage data to improve the app
- **Crash reports** (optional) - technical data to fix bugs
- **Ads data** - minimal (non-personalized) or extensive (personalized, if you consent)
- **Feedback** (optional) - when you submit feedback voluntarily

### What We DON'T Collect
- ❌ Your name, email, phone number
- ❌ Precise location
- ❌ Photos, contacts, or other personal files
- ❌ Financial or health data

### Your Control
- ✅ **Privacy Settings**: Enable/disable analytics, crash reporting, personalized ads
- ✅ **Clear data**: Delete game history anytime
- ✅ **Your rights**: Access, delete, correct, port your data
- ✅ **Contact us**: contact@bloombyte.dev for any privacy questions

### Our Commitment
- 🔒 Minimal data collection (privacy by design)
- 🔒 Transparent about every data point
- 🔒 Consent-based (you control what leaves your device)
- 🔒 Secure storage (encryption, HTTPS)
- 🔒 Automatic deletion (60-90 days for most data)
- 🔒 GDPR, CCPA, COPPA, LGPD compliant

**Questions?** Email contact@bloombyte.dev - we respond within 30 days.

**Enjoy playing Sudokan!** 🎉

---

**END OF PRIVACY POLICY**

---

**Document Information**:
- **Version**: 1.0
- **Last Updated**: November 9, 2025
- **Effective Date**: November 9, 2025
- **Developer**: Bloom Byte SRL
- **Contact**: contact@bloombyte.dev
- **Website**: bloombyte.dev
- **App**: Sudokan (iOS and Android)
