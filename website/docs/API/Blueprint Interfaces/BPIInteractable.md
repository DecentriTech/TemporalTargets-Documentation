---
title: "📄 File: BPI_Interactable.h"
slug: /API/_b_p_i___interactable_8h
---

# 📄 File: `BPI_Interactable.h`

> Declares the interface for runtime interaction logic in Blueprints and C++.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UBPI_Interactable](#class_u_b_p_i___interactable) UInterface and the [IBPI_Interactable](#class_i_b_p_i___interactable) interface, enabling actors to support runtime interaction via Blueprint or C++. It includes methods for initiating interactions, checking interaction eligibility, and managing interactable registration.

[Blueprint Interfaces](#group___blueprint___interfaces)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UBPI_Interactable`
  <span class="brief-description-pill">Unreal UInterface type for objects that implement [IBPI_Interactable](#class_i_b_p_i___interactable).</span>
</summary>

> Provides the BlueprintType metadata so that actors can implement the interactable interface in C++ or Blueprints.

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
  📘 Class `IBPI_Interactable`
  <span class="brief-description-pill">Interface for actors that can be interacted with at runtime.</span>
</summary>

> Any actor implementing this interface must provide logic for [Interact](#class_i_b_p_i___interactable_1a7ec0a61b62ce23602812e10aaf3ddd91) and [CanInteract](#class_i_b_p_i___interactable_1a4523add71e08c3c4fb8fc17e80871228). Interaction registration functions [RegisterInteractable](#class_i_b_p_i___interactable_1a6dbcd508bbeea9c1bddae5f8ef2fa721) and [UnregisterInteractable](#class_i_b_p_i___interactable_1a54557ad43cce970953a261e90c45c3c7) are provided so that helper classes (e.g. BPI_Interactor) can manage lists of interactable targets.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>Interact</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when an actor attempts to perform an interaction.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor (player or AI) performing the interaction.</li>
    </ul>

  </details>
  <details>
    <summary>
      🧠 <code>CanInteract</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query whether the given actor is currently allowed to interact.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor requesting permission to interact.</li>
    </ul>

  </details>
  <details>
    <summary>
      🧠 <code>RegisterInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Register an interactable object with a manager or controller.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactable</code> – The actor that implements .</li>
    </ul>

  </details>
  <details>
    <summary>
      🧠 <code>UnregisterInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Unregister a previously registered interactable object.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactable</code> – The actor that was previously registered.</li>
    </ul>

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
</details>

</details>

</details>
<!-- block -->
