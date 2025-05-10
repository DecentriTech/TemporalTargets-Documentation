---
title: "📄 File: DamageableInterface.h"
slug: /API/_damageable_interface_8h
---

# 📄 File: `DamageableInterface.h`

> Declares an interface for objects that can receive and respond to damage.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [IDamageableInterface](#class_i_damageable_interface) interface and its associated Unreal UInterface, [UDamageableInterface](#class_u_damageable_interface). Implementing this interface allows actors or components to handle damage via Blueprint or C++.

Key responsibilities:

* Receiving damage payloads through TakeDamage.

* Reacting to damage events with OnDamaged.

* Executing death logic via OnKilled.

[Blueprint Interfaces](#group___blueprint___interfaces)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UDamageableInterface`
  <span class="brief-description-pill">Marks an Unreal UObject class as supporting damage operations.</span>
</summary>

> Implement this interface on any Actor or Component to receive damage events.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `IDamageableInterface`
  <span class="brief-description-pill">Provides callbacks for applying damage, responding to damage, and handling death.</span>
</summary>

> Use [TakeDamage](#group___blueprint___interfaces_1ga1f6318dd8d764d86d152bafcceeaf950) to apply an [FDamageInfo](#struct_f_damage_info) payload to this object and then override [OnDamaged](#group___blueprint___interfaces_1gaa2527dc978acb578318f79c3704b6679) and [OnKilled](#group___blueprint___interfaces_1ga9f9b8a6fb04274b8b2418423c31b823c) to react.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
</details>

</details>

</details>
<!-- block -->
