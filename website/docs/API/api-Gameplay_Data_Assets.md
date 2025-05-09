---
id: Gameplay_Data_Assets
title: Gameplay Data Assets
sidebar_label: Gameplay Data Assets
slug: /API/Gameplay_Data_Assets
---

# 🗂️ Category: [Gameplay Data Assets](/docs/API/Gameplay_Data_Assets)

> Data asset definitions for weapons, encapsulating damage, ammo, spread, and recoil parameters.

<!-- block -->

<details open>
<summary>📦 Classes in This Category</summary>

<!-- block -->

<details>
<summary>🔹 [UWeaponDataAsset](#UWeaponDataAsset)</summary>

A data asset that centralizes all configurable weapon parameters.

<details>
<summary>📄 Description</summary>

This asset drives the weapon behavior in code by exposing:

* [WeaponName ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1af0fad7e2acc7e7dec753afe756389107) for UI and logging.

* [Damage ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a38b2bafe40070d8ca22b70c32e890598) and [DamageType ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1af2ab9a2a8bc0e30d38d9102945980ad3) for hit resolution.

* [FireRate ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a35775ae112e145cf4e3f5b2eaf592437) controlling rounds per minute.

* Ammo management via [MagSize ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a8fa2e08afe94c02b8472936365c0bc66) and [MaxReserveAmmo ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a181dd289575982d4a2019e96e2678885).

* [ReloadDuration ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1ae1cbb12562476b6b3c383d430f2e9f6e) timing and [Auto-Reload ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a97ed4b16844a9211f1083ff2de152cf6) behavior.

* Spread parameters such as [MinSpread ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a8760e2a77910f4201414a69fecc37d91), [MaxSpread ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a048329e1971b43aac080578c75517533), and recovery via [SpreadRecoveryRate ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a2dd483442044fc465d4b4fabb58522c9).

* Recoil scaling with [BulletPatternMultiplier ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a0586b3ec1d60dff3703d78c0c921521a) and [CameraRecoilMultiplier ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a34cefc5b64c4870aa91449b23259fbd3).

* Visual recoil effect through [FOVPunchAmount ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a9bc9febbb0a0727ab7c15db6f7c79947).

* Custom spray pattern via [SprayPattern ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a39af4b368edb68fcc72abe2e94506208) array.

</details>

</details>

<!-- block -->

</details>

<!-- block -->
<!-- block -->

<details>
<summary>
  📘 Class `UWeaponDataAsset`
    <span class="brief-description-pill">A data asset that centralizes all configurable weapon parameters.</span>
</summary>
<!-- block -->

# Class `UWeaponDataAsset` 

<!-- block -->

> This asset drives the weapon behavior in code by exposing:

* [WeaponName ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1af0fad7e2acc7e7dec753afe756389107) for UI and logging.

* [Damage ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a38b2bafe40070d8ca22b70c32e890598) and [DamageType ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1af2ab9a2a8bc0e30d38d9102945980ad3) for hit resolution.

* [FireRate ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a35775ae112e145cf4e3f5b2eaf592437) controlling rounds per minute.

* Ammo management via [MagSize ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a8fa2e08afe94c02b8472936365c0bc66) and [MaxReserveAmmo ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a181dd289575982d4a2019e96e2678885).

* [ReloadDuration ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1ae1cbb12562476b6b3c383d430f2e9f6e) timing and [Auto-Reload ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a97ed4b16844a9211f1083ff2de152cf6) behavior.

* Spread parameters such as [MinSpread ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a8760e2a77910f4201414a69fecc37d91), [MaxSpread ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a048329e1971b43aac080578c75517533), and recovery via [SpreadRecoveryRate ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a2dd483442044fc465d4b4fabb58522c9).

* Recoil scaling with [BulletPatternMultiplier ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a0586b3ec1d60dff3703d78c0c921521a) and [CameraRecoilMultiplier ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a34cefc5b64c4870aa91449b23259fbd3).

* Visual recoil effect through [FOVPunchAmount ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a9bc9febbb0a0727ab7c15db6f7c79947).

* Custom spray pattern via [SprayPattern ](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset_1a39af4b368edb68fcc72abe2e94506208) array.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UWeaponDataAsset
  : public UDataAsset
```

</details>

<!-- block -->

<details open>
<summary>🧍 Members</summary>

<!-- block -->

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WeaponName</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">The display name of the weapon.</span>
    </summary>

    <p>The display name of the weapon.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>Damage</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Base damage per shot.</span>
    </summary>

    <p>Base damage per shot.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FireRate</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Rounds fired per minute.</span>
    </summary>

    <p>Rounds fired per minute.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>TraceDistance</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum trace distance for hitscan weapons.</span>
    </summary>

    <p>Maximum trace distance for hitscan weapons.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsAutomatic</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">True if the weapon fires continuously while the trigger is held.</span>
    </summary>

    <p>True if the weapon fires continuously while the trigger is held.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MagSize</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Bullets per magazine.</span>
    </summary>

    <p>Bullets per magazine.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MaxReserveAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Total reserve ammo outside of the current magazine.</span>
    </summary>

    <p>Total reserve ammo outside of the current magazine.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>ReloadDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Time in seconds required to reload.</span>
    </summary>

    <p>Time in seconds required to reload.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bInfiniteAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Infinite reserve ammo when true.</span>
    </summary>

    <p>Infinite reserve ammo when true.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bInfiniteMag</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Infinite magazine capacity when true.</span>
    </summary>

    <p>Infinite magazine capacity when true.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bAutoReload</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Automatically reload when ammo depletes.</span>
    </summary>

    <p>Automatically reload when ammo depletes.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bInstantReload</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Instantly refill magazine when true.</span>
    </summary>

    <p>Instantly refill magazine when true.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MinSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Minimum aiming spread in degrees.</span>
    </summary>

    <p>Minimum aiming spread in degrees.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MaxSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum aiming spread in degrees.</span>
    </summary>

    <p>Maximum aiming spread in degrees.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SpreadRecoveryRate</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Degrees per second to recover from MaxSpread back to MinSpread.</span>
    </summary>

    <p>Degrees per second to recover from MaxSpread back to MinSpread.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FireSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Instant spread applied on each shot.</span>
    </summary>

    <p>Instant spread applied on each shot.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>IdleSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread when idle (not moving).</span>
    </summary>

    <p>Spread when idle (not moving).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>ReloadingSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while reloading.</span>
    </summary>

    <p>Spread while reloading.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WalkSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while walking.</span>
    </summary>

    <p>Spread while walking.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>AirborneSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while airborne.</span>
    </summary>

    <p>Spread while airborne.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>JumpSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while jumping.</span>
    </summary>

    <p>Spread while jumping.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>BulletPatternMultiplier</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Multiplier applied to the spray pattern for bullet direction.</span>
    </summary>

    <p>Multiplier applied to the spray pattern for bullet direction.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CameraRecoilMultiplier</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Multiplier applied to camera kick when firing.</span>
    </summary>

    <p>Multiplier applied to camera kick when firing.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FOVPunchAmount</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Field-of-view punch amount for visual recoil effect.</span>
    </summary>

    <p>Field-of-view punch amount for visual recoil effect.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SprayPattern</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Ordered list of X,Y offsets defining the spray pattern.</span>
    </summary>

    <p>Ordered list of X,Y offsets defining the spray pattern.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>DamageType</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Damage type to use when applying hits.</span>
    </summary>

    <p>Damage type to use when applying hits.</p>

  </details>
  <!-- block -->

</details>
<!-- block -->

</details>
<!-- block -->

_No enum types are defined in this file._

<!-- block -->

</details>

<!-- block -->
