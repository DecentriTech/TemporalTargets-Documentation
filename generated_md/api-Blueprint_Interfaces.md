---
id: Blueprint_Interfaces
title: Blueprint Interfaces
sidebar_label: Blueprint Interfaces
slug: /API/Blueprint_Interfaces
---

# 🗂️ Category: [Blueprint Interfaces](/docs/API/Blueprint_Interfaces)

> Interfaces for use in Blueprints.

<!-- block -->

<details open>
<summary>📦 Classes in This Category</summary>

<!-- block -->

<details>
<summary>🔹 [UBPI_Interactable](#UBPI_Interactable)</summary>

Unreal UInterface type for objects that implement [IBPI_Interactable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable).

<details>
<summary>📄 Description</summary>

Provides the BlueprintType metadata so that actors can implement the interactable interface in C++ or Blueprints.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [IBPI_Interactable](#IBPI_Interactable)</summary>

Interface for actors that can be interacted with at runtime.

<details>
<summary>📄 Description</summary>

Any actor implementing this interface must provide logic for [Interact](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a7ec0a61b62ce23602812e10aaf3ddd91) and [CanInteract](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a4523add71e08c3c4fb8fc17e80871228). Interaction registration functions [RegisterInteractable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a6dbcd508bbeea9c1bddae5f8ef2fa721) and [UnregisterInteractable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a54557ad43cce970953a261e90c45c3c7) are provided so that helper classes (e.g. BPI_Interactor) can manage lists of interactable targets.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UDamageableInterface](#UDamageableInterface)</summary>

Marks an Unreal UObject class as supporting damage operations.

<details>
<summary>📄 Description</summary>

Implement this interface on any Actor or Component to receive damage events.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [IDamageableInterface](#IDamageableInterface)</summary>

Provides callbacks for applying damage, responding to damage, and handling death.

<details>
<summary>📄 Description</summary>

Use [TakeDamage](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#group___blueprint___interfaces_1ga1f6318dd8d764d86d152bafcceeaf950) to apply an [FDamageInfo](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#struct_f_damage_info) payload to this object and then override [OnDamaged](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#group___blueprint___interfaces_1gaa2527dc978acb578318f79c3704b6679) and [OnKilled](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#group___blueprint___interfaces_1ga9f9b8a6fb04274b8b2418423c31b823c) to react.

</details>

</details>

<!-- block -->

</details>

<!-- block -->
<!-- block -->

<details>
<summary>
  📘 Class `UBPI_Interactable`
    <span class="brief-description-pill">Unreal UInterface type for objects that implement [IBPI_Interactable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable).</span>
</summary>
<!-- block -->

# Class `UBPI_Interactable` 

<!-- block -->

> Provides the BlueprintType metadata so that actors can implement the interactable interface in C++ or Blueprints.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UBPI_Interactable
  : public UInterface
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

</details>
<!-- block -->

</details>
<!-- block -->

_No enum types are defined in this file._

<!-- block -->

</details>

<!-- block -->

<!-- block -->

<details>
<summary>
  📘 Class `IBPI_Interactable`
    <span class="brief-description-pill">Interface for actors that can be interacted with at runtime.</span>
</summary>
<!-- block -->

# Class `IBPI_Interactable` 

<!-- block -->

> Any actor implementing this interface must provide logic for [Interact](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a7ec0a61b62ce23602812e10aaf3ddd91) and [CanInteract](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a4523add71e08c3c4fb8fc17e80871228). Interaction registration functions [RegisterInteractable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a6dbcd508bbeea9c1bddae5f8ef2fa721) and [UnregisterInteractable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable_1a54557ad43cce970953a261e90c45c3c7) are provided so that helper classes (e.g. BPI_Interactor) can manage lists of interactable targets.

<!-- block -->

<details open>
<summary>🧍 Members</summary>

<!-- block -->

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>Interact</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when an actor attempts to perform an interaction.</span>
    </summary>

    <p>Called when an actor attempts to perform an interaction.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * Interactor</code> – The actor (player or AI) performing the interaction.</li>
      </ul>

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CanInteract</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query whether the given actor is currently allowed to interact.</span>
    </summary>

    <p>Query whether the given actor is currently allowed to interact.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * Interactor</code> – The actor requesting permission to interact.</li>
      </ul>

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>RegisterInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Register an interactable object with a manager or controller.</span>
    </summary>

    <p>Register an interactable object with a manager or controller.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * Interactable</code> – The actor that implements .</li>
      </ul>

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>UnregisterInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Unregister a previously registered interactable object.</span>
    </summary>

    <p>Unregister a previously registered interactable object.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * Interactable</code> – The actor that was previously registered.</li>
      </ul>

  </details>
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

</details>
<!-- block -->

</details>
<!-- block -->

_No enum types are defined in this file._

<!-- block -->

</details>

<!-- block -->

<!-- block -->

<details>
<summary>
  📘 Class `UDamageableInterface`
    <span class="brief-description-pill">Marks an Unreal UObject class as supporting damage operations.</span>
</summary>
<!-- block -->

# Class `UDamageableInterface` 

<!-- block -->

> Implement this interface on any Actor or Component to receive damage events.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UDamageableInterface
  : public UInterface
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

</details>
<!-- block -->

</details>
<!-- block -->

_No enum types are defined in this file._

<!-- block -->

</details>

<!-- block -->

<!-- block -->

<details>
<summary>
  📘 Class `IDamageableInterface`
    <span class="brief-description-pill">Provides callbacks for applying damage, responding to damage, and handling death.</span>
</summary>
<!-- block -->

# Class `IDamageableInterface` 

<!-- block -->

> Use [TakeDamage](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#group___blueprint___interfaces_1ga1f6318dd8d764d86d152bafcceeaf950) to apply an [FDamageInfo](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#struct_f_damage_info) payload to this object and then override [OnDamaged](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#group___blueprint___interfaces_1gaa2527dc978acb578318f79c3704b6679) and [OnKilled](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#group___blueprint___interfaces_1ga9f9b8a6fb04274b8b2418423c31b823c) to react.

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

</details>
<!-- block -->

</details>
<!-- block -->

_No enum types are defined in this file._

<!-- block -->

</details>

<!-- block -->
