---
id: GAME_LOGIC
title: GAME LOGIC
sidebar_label: GAME LOGIC
slug: /API/GAME_LOGIC
---

# 🧩 Group: [GAME LOGIC](/docs/API/GAME_LOGIC)

> Classes that implement core gameplay systems like spawning, replay, and game flow.

<!-- block -->

<details open>
<summary>📦 Classes in This Group</summary>

<!-- block -->

<details>
<summary>🔹 [ATemporalGameMode](#ATemporalGameMode)</summary>

Game mode handling player respawning and ghost replay logic.

<details>
<summary>📄 Description</summary>

This class manages the recording and playback of ghost replays, handles spawning and cleanup of ghost characters, and manages the player's respawn flow based on game settings.

</details>

</details>

<!-- block -->

</details>

<!-- block -->
<!-- block -->

<details>
<summary>📘 Class `ATemporalGameMode`</summary>

<!-- block -->

# Class `ATemporalGameMode` 

<!-- block -->

<details>
<summary>🔧 Inherits From</summary>

```cpp
class ATemporalGameMode
  : public AGameModeBase
```

</details>

<!-- block -->

> Game mode handling player respawning and ghost replay logic.

<!-- block -->

This class manages the recording and playback of ghost replays, handles spawning and cleanup of ghost characters, and manages the player's respawn flow based on game settings.

<!-- block -->

<!-- block -->

<details open>
<summary>📋 Class Members</summary>

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

</details>

<!-- block -->

<details open>
<summary>🧩 Members</summary>

<!-- block -->

<details>
<summary>🧠 `bPlayMode`</summary>

If true, we play with ghosts + delayed respawn.

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `RespawnDelay`</summary>

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `RespawnTimerHandle`</summary>

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `ATemporalGameMode`</summary>

**Parameters:**
- *(None)*

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `~ATemporalGameMode`</summary>

**Parameters:**
- *(None)*

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `AddReplayData`</summary>

Stores a replay data attempt at the end of a run.

**Parameters:**
- `const TArray<  > & ReplayData` – Frame data representing the player's run.
- ` ReplayPointer` – Frame data Pointer representing the player's run.

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `SpawnGhosts`</summary>

Spawns ghost characters for each stored replay attempt.

**Parameters:**
- *(None)*

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `ClearGhosts`</summary>

Clears all stored ghosts and replays.

**Parameters:**
- *(None)*

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `RegisterGhost`</summary>

Registers a ghost character with a unique ID.

**Parameters:**
- `FName GhostID` – Unique identifier for the ghost.
- `* Ghost` – Pointer to the ghost character to register.

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `GetGhostByID`</summary>

Retrieves a ghost character by its unique ID.

**Parameters:**
- `FName GhostID` – Unique identifier for the ghost.

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `TemporalCharacterClass`</summary>

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `SpawnedGhosts`</summary>

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `GhostRegistry`</summary>

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `PostLogin`</summary>

**Parameters:**
- *(None)*

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `RestartPlayer`</summary>

**Parameters:**
- *(None)*

</details>

<!-- block -->
<!-- block -->

<details>
<summary>🧠 `ResolveHitGhosts`</summary>

**Parameters:**
- *(None)*

</details>

<!-- block -->

</details>

<!-- block -->

_No enum types are defined in this file._

<!-- block -->

</details>

<!-- block -->
