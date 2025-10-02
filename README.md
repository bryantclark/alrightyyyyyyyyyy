# 2D Extraction Shooter

A real-time multiplayer 2D extraction shooter built with Svelte 5, SvelteKit, and Firebase/Firestore.

## Game Overview

An intense survival game where players enter timed raids to loot valuable items, engage in combat with other players, and extract safely before time runs out. Death means losing everything you brought in and everything you looted.

## Core Gameplay Loop

### Entering a Raid
- Players start in the **Lobby** between raids
- Access the **Market** to buy/sell items and manage your **Stash**
- Enter a raid with limited equipment (choose wisely!)
- Each raid has a **12-minute timer**

### During the Raid
1. **Loot** - Scavenge the map for valuable items
2. **Fight** - Engage other players for their loot
3. **Survive** - Manage your health, energy, and hydration
4. **Extract** - Reach an extraction point before time expires

### Success or Failure
- **Success**: Reach extraction → Keep everything you looted + what you brought in
- **Failure**: Die or run out of time → Lose everything

## Game Systems

### 🎒 Loot System

Players can find various items scattered throughout the map:

**Resources & Materials**
- Paracord
- PCUs (Processing Units)
- Keys (unlock special rooms)
- Coins

**Consumables**
- Food (restores energy)
- Drinks (restores hydration)
- Meds (heals normal wounds)
- Surgical Kits (heals broken bones)

**Equipment**
- Armor (Level 1, 2, 3, 3-Light)
- Ammo (4 types)
- Guns (rare drops - most guns come from kills or market)

### ⚔️ Combat System

#### Weapons
- **1-2 Sniper Rifles** (Large Ammo)
- **3-4 Assault Rifles** (Medium Ammo)
- **1 Pistol** (Small Ammo)
- **2 SMGs** (Small Ammo)
- **2 Shotguns** (Shells)

#### Ammo Types
- **Small Ammo** - Pistols & SMGs
- **Medium Ammo** - Assault Rifles (e.g., AK-47)
- **Large Ammo** - Snipers & high-caliber weapons
- **Shells** - Shotguns

#### Armor System
Armor reduces incoming damage by a percentage:

- **Level 1** - 20% damage reduction
- **Level 2** - 40% damage reduction
- **Level 3** - 60% damage reduction
- **Level 3 Light** - 60% damage reduction (lighter weight)

**Example**: If you have 100 HP and Level 1 armor, taking 100 damage will reduce your HP to 20 (80 damage after 20% reduction).

### 🏥 Health System

#### Wound Types
1. **Normal Wounds**
   - Healed with standard meds
   - Result from most combat damage

2. **Broken Bones**
   - Require surgical kits to heal
   - Caused by high-caliber guns or close grenade explosions
   - Severely impact mobility until treated

### 🍖 Survival Mechanics

#### Energy & Hydration
- Both start at **100%**
- Gradually decrease over time during raids
- Affects **stamina** when low

**Effects of Low Stats**:
- Low energy → Reduced stamina
- Low hydration → Reduced stamina & health deterioration
- Combined low stats → Severe performance penalties

### 💰 Market System

The market is only accessible **between raids** (not during active gameplay).

**Market Features**:
- Buy weapons, ammo, and supplies
- Sell looted items for coins
- Manage your persistent stash
- Prepare loadouts for raids

**Economy Balance**: Guns are intentionally rare as loot to maintain "skin in the game" - players must risk valuable equipment each raid, primarily obtaining weapons through:
1. Killing other players
2. Purchasing from the market
3. Rare map spawns

## Technology Stack

- **Frontend**: Svelte 5 + SvelteKit
- **Styling**: Tailwind CSS
- **Backend**: Firebase/Firestore
- **Authentication**: Firebase Auth
- **Real-time Sync**: Firestore real-time listeners
- **Graphics**: HTML5 Canvas API

## Development Phases

### ✅ Phase 1: Project Setup & Foundations (Complete)
- SvelteKit project initialization
- Firebase configuration
- User authentication
- Basic lobby system

### 🚧 Phase 2: Game World & Player Movement (Next)
- Canvas rendering
- Map design
- Player controls (WASD)
- Game loop implementation

### 📋 Phase 3: Real-Time Multiplayer
- Firestore data structure for raids
- Real-time player position sync
- Multiplayer collision detection

### 📋 Phase 4: Combat System
- Shooting mechanics
- Hit detection
- Health management
- Death & respawn

### 📋 Phase 5: Loot & Extraction
- Item spawning system
- Inventory management
- Extraction points
- Raid timer
- Win/loss conditions

### 📋 Phase 6: Advanced Features
- Wound types & healing
- Armor system
- Stamina & survival stats
- Full weapon variety
- Market UI

## Getting Started

### Prerequisites
- Node.js (v18+)
- Firebase account
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone git@github.com:bryantclark/alrightyyyyyyyyyy.git
cd alrightyyyyyyyyyy

# Install dependencies
npm install

# Configure Firebase
# Add your Firebase config to src/lib/firebase.ts

# Run development server
npm run dev
```

### Firebase Setup

1. Create a Firebase project
2. Enable Authentication (Email/Password)
3. Create Firestore database (test mode)
4. Copy config to `src/lib/firebase.ts`

## Project Structure

```
src/
├── lib/
│   ├── firebase.ts          # Firebase configuration
│   └── stores/
│       └── auth.svelte.js   # Authentication state
├── routes/
│   ├── +layout.svelte       # Root layout
│   ├── +page.svelte         # Login/Signup page
│   └── lobby/
│       └── +page.svelte     # Lobby page
└── app.css                  # Tailwind directives
```

## Contributing

This is a learning project following a structured development plan. Each phase builds upon the previous one, introducing new concepts and game mechanics.

## License

MIT

## Acknowledgments

Built as an educational project to learn game development, real-time multiplayer systems, and modern web technologies.
