---
title: "📄 File: TemporalAIController.h"
slug: /API/_temporal_a_i_controller_8h
---

# 📄 File: `TemporalAIController.h`

> Declares the AI controller for ghost replay characters.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [ATemporalAIController](#class_a_temporal_a_i_controller) class, which:

* Inherits from Unreal�s AAIController.

* Handles AI control for replayed "ghost" characters.

* Overrides possession lifecycle methods to aid debugging and logging.

[Core Gameplay Logic](#group___game___logic)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `ATemporalAIController`
  <span class="brief-description-pill">AIController for "ghost" TemporalCharacters during replay.</span>
</summary>

> Inherits from AAIController. Overrides possession callbacks to log debug messages whenever it possesses or unpossesses a pawn.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>OnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called by the engine when this controller takes possession of a pawn.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>APawn * InPawn</code> – The pawn being possessed (expected to be a TemporalCharacter).</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalAIController.cpp</code> (lines 5–19)</p>
    <ExpandableCodeBlock code={`void ATemporalAIController::OnPossess(APawn* InPawn)
{
    Super::OnPossess(InPawn);

    // Get the possessed pawn
    APawn* PossessedPawn = GetPawn();
    if (PossessedPawn)
    {
        UE_LOG(LogTemp, Log, TEXT("AIController has possessed: %s"), *PossessedPawn->GetName());
	}
	else
	{
		UE_LOG(LogTemp, Log, TEXT("AIController failed to possess pawn."));
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnUnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called by the engine when this controller releases its possessed pawn.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalAIController.cpp</code> (lines 21–25)</p>
    <ExpandableCodeBlock code={`void ATemporalAIController::OnUnPossess()
{
	Super::OnUnPossess();
	UE_LOG(LogTemp, Log, TEXT("AIController has unpossessed the pawn"));
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
</details>

</details>

</details>
<!-- block -->
