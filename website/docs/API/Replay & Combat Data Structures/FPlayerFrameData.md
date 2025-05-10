---
title: "📄 File: FPlayerFrameData.h"
slug: /API/_f_player_frame_data_8h
---

# 📄 File: `FPlayerFrameData.h`

> Defines data structures for capturing and replaying player frame states, interactions, and combat events.

<details open>
<summary>📝 Detailed Description</summary>
This file contains core replay-related types used to:

* Record per-frame player state including movement, rotation, and actions.

* Log weapon shot events and interactions for deterministic playback.

* Manage grouped frame data for ghost replays.

Key types include:

* [EReplayActionFlags](#group___replay___data_1ga634bef419b6cd1967d4f0b1e39282e91): Bitmask for player actions per frame.

* [FRecordedShot](#struct_f_recorded_shot): Captures shot metadata during a frame.

* [FPlayerFrameData](#struct_f_player_frame_data): Encapsulates complete per-frame player state.

* [FReplayAttempt](#struct_f_replay_attempt): Manages ownership of replay data with unique IDs.

[Replay & Combat Data Structures](#group___replay___data)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `FRecordedShot`
  <span class="brief-description-pill">A single recorded shot event within a replay frame.</span>
</summary>

> Captures the index of the shot, view and impact locations, whether it hit something, the direction, and the weapon used.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>FRecordedShot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor initializes indices and vectors to zero.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 99–106)</p>
    <ExpandableCodeBlock code={`    FRecordedShot()
        : ShotIndex(0)
        , ViewLocation(FVector::ZeroVector)
        , ImpactLocation(FVector::ZeroVector)
        , bHit(false)
        , ShotDirection(FRotator::ZeroRotator)
    {
    }`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>ShotIndex</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Sequence index of this shot within the frame.</span>
    </summary>
    <p>Sequence index of this shot within the frame.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ViewLocation</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Camera location when the shot was fired.</span>
    </summary>
    <p>Camera location when the shot was fired.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ImpactLocation</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">World location where the shot impacted.</span>
    </summary>
    <p>World location where the shot impacted.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bHit</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">True if the shot hit an actor.</span>
    </summary>
    <p>True if the shot hit an actor.</p>
  </details>
  <details>
    <summary>
      🧠 <code>TimeSinceFrameStart</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Offset (in seconds) from frame start.</span>
    </summary>
    <p>Offset (in seconds) from frame start.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ShotDirection</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Aim direction of the shot.</span>
    </summary>
    <p>Aim direction of the shot.</p>
  </details>
  <details>
    <summary>
      🧠 <code>HitGhostID</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Identifier for ghost actor hit (if any).</span>
    </summary>
    <p>Identifier for ghost actor hit (if any).</p>
  </details>
  <details>
    <summary>
      🧠 <code>HitActor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Actor instance hit by this shot (if any).</span>
    </summary>
    <p>Actor instance hit by this shot (if any).</p>
  </details>
  <details>
    <summary>
      🧠 <code>HitBoneName</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Bone name on the hit actor (if any).</span>
    </summary>
    <p>Bone name on the hit actor (if any).</p>
  </details>
  <details>
    <summary>
      🧠 <code>WeaponUsed</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Reference to the weapon asset used in this single shot.</span>
    </summary>
    <p>Reference to the weapon asset used in this single shot.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `FCombatFrameData`
  <span class="brief-description-pill">Container for all shots fired within a single frame.</span>
</summary>

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>FCombatFrameData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor initializes an empty shot array.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 124–127)</p>
    <ExpandableCodeBlock code={`    FCombatFrameData()
    {
        Shots = TArray<FRecordedShot>();
    }`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>Shots</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">List of shots recorded this frame.</span>
    </summary>
    <p>List of shots recorded this frame.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `FInteractionData`
  <span class="brief-description-pill">Data for a single interaction event within a frame.</span>
</summary>

> Includes the target actor, interaction type, and relative position.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>FInteractionData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor sets type to None and location to zero.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 153–157)</p>
    <ExpandableCodeBlock code={`    FInteractionData()
        : InteractionType(NAME_None)
        , RelativeLocationToTarget(FVector::ZeroVector)
    {
    }`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>TargetActorPath</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Path to the target actor asset.</span>
    </summary>
    <p>Path to the target actor asset.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InteractionType</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Contextual interaction tag (e.g., �Open�, �Pickup�).</span>
    </summary>
    <p>Contextual interaction tag (e.g., �Open�, �Pickup�).</p>
  </details>
  <details>
    <summary>
      🧠 <code>RelativeLocationToTarget</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Player location relative to the target at interaction.</span>
    </summary>
    <p>Player location relative to the target at interaction.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `FPlayerFrameData`
  <span class="brief-description-pill">Complete state of the player at a single replay frame.</span>
</summary>

> Records position, velocity, rotation, and actions (bitmask of [EReplayActionFlags](#group___replay___data_1ga634bef419b6cd1967d4f0b1e39282e91)). Also holds optional sub-structures for interactions and combat.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>HasAction</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Checks whether this frame includes the given action flag.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code> Flag</code> – The action to test (e.g., ).</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 203–206)</p>
    <ExpandableCodeBlock code={`    FORCEINLINE bool HasAction(EReplayActionFlags Flag) const
    {
        return EnumHasAnyFlags(ActionFlags, Flag);
    }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>AddAction</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets a given action flag on this frame.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code> Flag</code> – The action to add (e.g., ).</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 212–215)</p>
    <ExpandableCodeBlock code={`    FORCEINLINE void AddAction(EReplayActionFlags Flag)
    {
        EnumAddFlags(ActionFlags, Flag);
    }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>RemoveAction</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Clears a given action flag on this frame.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code> Flag</code> – The action to remove (e.g., ).</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 221–224)</p>
    <ExpandableCodeBlock code={`    FORCEINLINE void RemoveAction(EReplayActionFlags Flag)
    {
        EnumRemoveFlags(ActionFlags, Flag);
    }`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>TimeStamp</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Seconds since replay start.</span>
    </summary>
    <p>Seconds since replay start.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Position</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Player world position this frame.</span>
    </summary>
    <p>Player world position this frame.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Velocity</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Player velocity vector this frame.</span>
    </summary>
    <p>Player velocity vector this frame.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Rotation</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Player rotation this frame.</span>
    </summary>
    <p>Player rotation this frame.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ActionFlags</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Bitmask of actions�use [HasAction](#struct_f_player_frame_data_1a30e7484c45b24583da3d19decfd62db6) to query.</span>
    </summary>
    <p>Bitmask of actions�use [HasAction](#struct_f_player_frame_data_1a30e7484c45b24583da3d19decfd62db6) to query.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InteractionData</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Interaction details if HasAction(Interacted).</span>
    </summary>
    <p>Interaction details if HasAction(Interacted).</p>
  </details>
  <details>
    <summary>
      🧠 <code>CombatData</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Combat details if HasAction(FiredWeapon).</span>
    </summary>
    <p>Combat details if HasAction(FiredWeapon).</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `FReplayAttempt`
  <span class="brief-description-pill">Represents an attempt to replay recorded frames.</span>
</summary>

> Manages shared ownership of a frame array and assigns a unique ghost ID.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>FReplayAttempt</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor creates an empty frame array and a new GUID-based GhostID.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 244–248)</p>
    <ExpandableCodeBlock code={`    FReplayAttempt()
    {
        ReplayDataPtr = MakeShared<TArray<FPlayerFrameData>>();
        AssignedGhostID = FName(*FGuid::NewGuid().ToString());
    }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>FReplayAttempt</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructs from an existing data array without copying.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const TArray<  > & InReplayData</code> – Array of frame data to take ownership of.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/FPlayerFrameData.h</code> (lines 254–258)</p>
    <ExpandableCodeBlock code={`    explicit FReplayAttempt(const TArray<FPlayerFrameData>& InReplayData)
    {
        ReplayDataPtr = MakeShared<TArray<FPlayerFrameData>>(InReplayData);
        AssignedGhostID = FName(*FGuid::NewGuid().ToString());
    }`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>ReplayDataPtr</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Shared frame data container.</span>
    </summary>
    <p>Shared frame data container.</p>
  </details>
  <details>
    <summary>
      🧠 <code>AssignedGhostID</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Unique identifier for this replay.</span>
    </summary>
    <p>Unique identifier for this replay.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
