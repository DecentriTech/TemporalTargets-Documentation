---
title: "📄 File: WeaponDataAsset.h"
slug: /API/_weapon_data_asset_8h
---

# 📄 File: `WeaponDataAsset.h`

> Defines the weapon data asset used to configure gameplay parameters.

<details open>
<summary>📝 Detailed Description</summary>
This file declares the [UWeaponDataAsset](#class_u_weapon_data_asset) class, a configurable Unreal Engine DataAsset that drives weapon behavior by exposing tunable properties for:

* Base weapon metadata such as name, damage, and fire rate.

* Hitscan configuration like maximum trace distance.

* Ammo handling, including magazine size, reserve capacity, reload rules, and infinite ammo flags.

* Spread system including minimum/maximum spread and movement-specific modifiers.

* Recoil tuning for bullet direction and visual effects (camera kick, FOV punch).

* Pattern-based recoil behavior via a 2D spray array.

* Blueprint integration via `BlueprintReadOnly` and `BlueprintReadWrite` attributes.

This asset is designed to support both visual feedback systems and gameplay balance tuning.

[Gameplay Data Assets](#group___gameplay___data___assets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UWeaponDataAsset`
  <span class="brief-description-pill">A data asset that centralizes all configurable weapon parameters.</span>
</summary>

> This asset drives the weapon behavior in code by exposing:

* [WeaponName ](#class_u_weapon_data_asset_1af0fad7e2acc7e7dec753afe756389107) for UI and logging.

* [Damage ](#class_u_weapon_data_asset_1a38b2bafe40070d8ca22b70c32e890598) and [DamageType ](#class_u_weapon_data_asset_1af2ab9a2a8bc0e30d38d9102945980ad3) for hit resolution.

* [FireRate ](#class_u_weapon_data_asset_1a35775ae112e145cf4e3f5b2eaf592437) controlling rounds per minute.

* Ammo management via [MagSize ](#class_u_weapon_data_asset_1a8fa2e08afe94c02b8472936365c0bc66) and [MaxReserveAmmo ](#class_u_weapon_data_asset_1a181dd289575982d4a2019e96e2678885).

* [ReloadDuration ](#class_u_weapon_data_asset_1ae1cbb12562476b6b3c383d430f2e9f6e) timing and [Auto-Reload ](#class_u_weapon_data_asset_1a97ed4b16844a9211f1083ff2de152cf6) behavior.

* Spread parameters such as [MinSpread ](#class_u_weapon_data_asset_1a8760e2a77910f4201414a69fecc37d91), [MaxSpread ](#class_u_weapon_data_asset_1a048329e1971b43aac080578c75517533), and recovery via [SpreadRecoveryRate ](#class_u_weapon_data_asset_1a2dd483442044fc465d4b4fabb58522c9).

* Recoil scaling with [BulletPatternMultiplier ](#class_u_weapon_data_asset_1a0586b3ec1d60dff3703d78c0c921521a) and [CameraRecoilMultiplier ](#class_u_weapon_data_asset_1a34cefc5b64c4870aa91449b23259fbd3).

* Visual recoil effect through [FOVPunchAmount ](#class_u_weapon_data_asset_1a9bc9febbb0a0727ab7c15db6f7c79947).

* Custom spray pattern via [SprayPattern ](#class_u_weapon_data_asset_1a39af4b368edb68fcc72abe2e94506208) array.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>WeaponName</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">The display name of the weapon.</span>
    </summary>
    <p>The display name of the weapon.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Damage</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Base damage per shot.</span>
    </summary>
    <p>Base damage per shot.</p>
  </details>
  <details>
    <summary>
      🧠 <code>FireRate</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Rounds fired per minute.</span>
    </summary>
    <p>Rounds fired per minute.</p>
  </details>
  <details>
    <summary>
      🧠 <code>TraceDistance</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum trace distance for hitscan weapons.</span>
    </summary>
    <p>Maximum trace distance for hitscan weapons.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsAutomatic</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">True if the weapon fires continuously while the trigger is held.</span>
    </summary>
    <p>True if the weapon fires continuously while the trigger is held.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MagSize</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Bullets per magazine.</span>
    </summary>
    <p>Bullets per magazine.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MaxReserveAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Total reserve ammo outside of the current magazine.</span>
    </summary>
    <p>Total reserve ammo outside of the current magazine.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ReloadDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Time in seconds required to reload.</span>
    </summary>
    <p>Time in seconds required to reload.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bInfiniteAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Infinite reserve ammo when true.</span>
    </summary>
    <p>Infinite reserve ammo when true.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bInfiniteMag</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Infinite magazine capacity when true.</span>
    </summary>
    <p>Infinite magazine capacity when true.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bAutoReload</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Automatically reload when ammo depletes.</span>
    </summary>
    <p>Automatically reload when ammo depletes.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bInstantReload</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Instantly refill magazine when true.</span>
    </summary>
    <p>Instantly refill magazine when true.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MinSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Minimum aiming spread in degrees.</span>
    </summary>
    <p>Minimum aiming spread in degrees.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MaxSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum aiming spread in degrees.</span>
    </summary>
    <p>Maximum aiming spread in degrees.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SpreadRecoveryRate</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Degrees per second to recover from MaxSpread back to MinSpread.</span>
    </summary>
    <p>Degrees per second to recover from MaxSpread back to MinSpread.</p>
  </details>
  <details>
    <summary>
      🧠 <code>FireSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Instant spread applied on each shot.</span>
    </summary>
    <p>Instant spread applied on each shot.</p>
  </details>
  <details>
    <summary>
      🧠 <code>IdleSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread when idle (not moving).</span>
    </summary>
    <p>Spread when idle (not moving).</p>
  </details>
  <details>
    <summary>
      🧠 <code>ReloadingSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while reloading.</span>
    </summary>
    <p>Spread while reloading.</p>
  </details>
  <details>
    <summary>
      🧠 <code>WalkSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while walking.</span>
    </summary>
    <p>Spread while walking.</p>
  </details>
  <details>
    <summary>
      🧠 <code>AirborneSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while airborne.</span>
    </summary>
    <p>Spread while airborne.</p>
  </details>
  <details>
    <summary>
      🧠 <code>JumpSpread</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Spread while jumping.</span>
    </summary>
    <p>Spread while jumping.</p>
  </details>
  <details>
    <summary>
      🧠 <code>BulletPatternMultiplier</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Multiplier applied to the spray pattern for bullet direction.</span>
    </summary>
    <p>Multiplier applied to the spray pattern for bullet direction.</p>
  </details>
  <details>
    <summary>
      🧠 <code>CameraRecoilMultiplier</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Multiplier applied to camera kick when firing.</span>
    </summary>
    <p>Multiplier applied to camera kick when firing.</p>
  </details>
  <details>
    <summary>
      🧠 <code>FOVPunchAmount</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Field-of-view punch amount for visual recoil effect.</span>
    </summary>
    <p>Field-of-view punch amount for visual recoil effect.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SprayPattern</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Ordered list of X,Y offsets defining the spray pattern.</span>
    </summary>
    <p>Ordered list of X,Y offsets defining the spray pattern.</p>
  </details>
  <details>
    <summary>
      🧠 <code>DamageType</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Damage type to use when applying hits.</span>
    </summary>
    <p>Damage type to use when applying hits.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
