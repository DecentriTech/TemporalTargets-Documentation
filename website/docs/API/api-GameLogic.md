# group `GameLogic` 

Classes that implement core gameplay systems like spawning, replay, and game flow.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`EGhostReplayState`](#group___game_logic_1gae6f5417eda5722930c61aac107396226)            | Represents the current state of the ghost replay system.
`class `[`ATemporalGameMode`](#class_a_temporal_game_mode) | Game mode handling player respawning and ghost replay logic.

## Members

#### `enum `[`EGhostReplayState`](#group___game_logic_1gae6f5417eda5722930c61aac107396226) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UMETA            | No ghost activity is happening.
UMETA            | Actively recording the player's actions.
UMETA            | Replaying a previously recorded run.

Represents the current state of the ghost replay system.

---

---

# class `ATemporalGameMode` 

## 🔧 Inherits From

``` cpp
class ATemporalGameMode
  : public AGameModeBase
```

> Game mode handling player respawning and ghost replay logic.

---

This class manages the recording and playback of ghost replays, handles spawning and cleanup of ghost characters, and manages the player's respawn flow based on game settings.

---

## 📋 Class Members

| Kind | Declaration | Description |
|------|-------------|-------------|
| `variable` | `bPlayMode` | If true, we play with ghosts + delayed respawn. |
| `variable` | `RespawnDelay` |  |
| `variable` | `RespawnTimerHandle` |  |
| `function` | `ATemporalGameMode` |  |
| `function` | `~ATemporalGameMode` |  |
| `function` | `AddReplayData` | Stores a replay data attempt at the end of a run. |
| `function` | `SpawnGhosts` | Spawns ghost characters for each stored replay attempt. |
| `function` | `ClearGhosts` | Clears all stored ghosts and replays. |
| `function` | `RegisterGhost` | Registers a ghost character with a unique ID. |
| `function` | `GetGhostByID` | Retrieves a ghost character by its unique ID. |
| `variable` | `TemporalCharacterClass` |  |
| `variable` | `SpawnedGhosts` |  |
| `variable` | `GhostRegistry` |  |
| `function` | `PostLogin` |  |
| `function` | `RestartPlayer` |  |
| `function` | `ResolveHitGhosts` |  |

---

## 🧩 Members

### 🧠 `bPlayMode`

  If true, we play with ghosts + delayed respawn.

---
### 🧠 `RespawnDelay`

---
### 🧠 `RespawnTimerHandle`

---
### 🧠 `ATemporalGameMode`

**Parameters:**
- *(None)*

---
### 🧠 `~ATemporalGameMode`

**Parameters:**
- *(None)*

---
### 🧠 `AddReplayData`

  Stores a replay data attempt at the end of a run.

**Parameters:**
- `const TArray<  > & ReplayData` – Frame data representing the player's run.
- ` ReplayPointer` – Frame data Pointer representing the player's run.

---
### 🧠 `SpawnGhosts`

  Spawns ghost characters for each stored replay attempt.

**Parameters:**
- *(None)*

---
### 🧠 `ClearGhosts`

  Clears all stored ghosts and replays.

**Parameters:**
- *(None)*

---
### 🧠 `RegisterGhost`

  Registers a ghost character with a unique ID.

**Parameters:**
- `FName GhostID` – Unique identifier for the ghost.
- `* Ghost` – Pointer to the ghost character to register.

---
### 🧠 `GetGhostByID`

  Retrieves a ghost character by its unique ID.

**Parameters:**
- `FName GhostID` – Unique identifier for the ghost.

---
### 🧠 `TemporalCharacterClass`

---
### 🧠 `SpawnedGhosts`

---
### 🧠 `GhostRegistry`

---
### 🧠 `PostLogin`

**Parameters:**
- *(None)*

---
### 🧠 `RestartPlayer`

**Parameters:**
- *(None)*

---
### 🧠 `ResolveHitGhosts`

**Parameters:**
- *(None)*

---

---

## 🎛️ Enums

_No enum types are defined in this file._
