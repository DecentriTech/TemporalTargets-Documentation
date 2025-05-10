---
title: "📄 File: InteractionComponent.h"
slug: /API/_interaction_component_8h
---

# 📄 File: `InteractionComponent.h`

> Declares the interaction logic component for player-focused actor interaction.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UInteractionComponent](#class_u_interaction_component) class, responsible for:

* Detecting interactable actors using a capsule sweep.

* Managing focus state for nearby interactables.

* Handling the interaction trigger logic for focused actors.

The component is designed to work with actors implementing [UBPI_Interactable](#class_u_b_p_i___interactable) and integrates with ghost control systems via the bIsGhostControlled flag.

[Modular Components](#group___modular___components)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UInteractionComponent`
  <span class="brief-description-pill">Detects and handles player interactions with interactable actors.</span>
</summary>

> Uses a capsule sweep (radius = [CapsuleRadius](#class_u_interaction_component_1a984644c0b160eeb3c5155cea4d0283ee), half-height = [CapsuleHalfHeight](#class_u_interaction_component_1a5585daeeb972b00edd15eaae9cf786ff)) out to [MaxInteractDistance](#class_u_interaction_component_1a3b20ebc5decc62092728cdb996e8a79e) to focus on actors implementing [UBPI_Interactable](#class_u_b_p_i___interactable). When focus changes it fires OnFocusedByInteractor and OnUnfocusedByInteractor on [ABaseInteractableActor](#class_a_base_interactable_actor). Actual interaction happens via [Interact()](#class_u_interaction_component_1a0b37d2aef5c83c3c85b3eb9bd3e3d28a).

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>UInteractionComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets default values for this component's properties.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 16–23)</p>
    <ExpandableCodeBlock code={`UInteractionComponent::UInteractionComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = true;

	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>Interact</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Attempts to interact with the currently focused actor.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 135–163)</p>
    <ExpandableCodeBlock code={`void UInteractionComponent::Interact()
{

	if (FocusedActor && FocusedActor->GetClass()->ImplementsInterface(UBPI_Interactable::StaticClass()))
	{
		UE_LOG(LogTemp, Warning, TEXT("Actor Implements Interactable!"));

		AActor* Owner = GetOwner();
		IBPI_Interactable::Execute_Interact(FocusedActor, Owner);

		if (Owner)
		{
			if (!bIsGhostControlled)
			{
				if (UReplayRecorderComponent* Recorder = Owner->FindComponentByClass<UReplayRecorderComponent>())
				{
					Recorder->AddActionFlag(EReplayActionFlags::Interacted);
					Recorder->CaptureInteractionData(FocusedActor);
				}
			}
		}
	}
	else
	{
		UE_LOG(LogTemp, Warning, TEXT("Actor Does Not Implement Interactable!"));
	}
	
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetFocusedActor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Accessor for the actor currently focused.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.h</code> (lines 112–112)</p>
    <ExpandableCodeBlock code={`    AActor* GetFocusedActor() const { return FocusedActor; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>AddRegisteredInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Adds an actor to the set of candidates for interaction focus.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactable</code> – The actor to register; will enable ticking.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 165–173)</p>
    <ExpandableCodeBlock code={`void UInteractionComponent::AddRegisteredInteractable(AActor* Interactable)
{
	if (Interactable)
	{
		NearbyInteractables.Add(Interactable);
		UE_LOG(LogTemp, Warning, TEXT("Registered Interactable"));
		bShouldTick = true;
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>RemoveRegisteredInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Removes an actor from interaction focus candidates and clears focus.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactable</code> – The actor to unregister.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 175–185)</p>
    <ExpandableCodeBlock code={`void UInteractionComponent::RemoveRegisteredInteractable(AActor* Interactable)
{
	if (Interactable)
	{
		NearbyInteractables.Remove(Interactable);
		FocusedActor = nullptr;
		UE_LOG(LogTemp, Warning, TEXT("Unregistered Interactable"));

		bShouldTick = NearbyInteractables.Num() > 0;
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called once when the game starts.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 27–36)</p>
    <ExpandableCodeBlock code={`void UInteractionComponent::BeginPlay()
{
	Super::BeginPlay();
	
	if (bIsGhostControlled)
	{
		bShouldTick = false;
		FocusedActor = nullptr;
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>TickComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called every frame to update focus tracing.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float DeltaTime</code> – Time elapsed since last frame.</li>
        <li><code>ELevelTick TickType</code> – Type of tick this frame.</li>
        <li><code>FActorComponentTickFunction * ThisTickFunction</code> – Internal tick function data.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 40–47)</p>
    <ExpandableCodeBlock code={`void UInteractionComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	if (bIsGhostControlled) return;

	InteractionFocusTrace();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>InteractionFocusTrace</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Performs a capsule trace to update the currently focused actor.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/InteractionComponent.cpp</code> (lines 49–133)</p>
    <ExpandableCodeBlock code={`void UInteractionComponent::InteractionFocusTrace()
{
	if (bIsGhostControlled || !bShouldTick) return;

	AActor* Owner = GetOwner();
	if (!Owner) return;

	FVector Start;
	FVector End;

	// Find camera component
	FVector ViewLocation;
	FRotator ViewRotation;

	if (Owner->IsA<APawn>())
	{
		AController* Controller = Cast<APawn>(Owner)->GetController();
		if (Controller)
		{
			Controller->GetPlayerViewPoint(ViewLocation, ViewRotation);
			Start = ViewLocation;
			End = Start + ViewRotation.Vector() * MaxInteractDistance;
		}
		else
		{
			UE_LOG(LogTemp, Warning, TEXT("InteractionComponent: Owner controller is null"));
			return;
		}
	}
	else
	{
		UE_LOG(LogTemp, Warning, TEXT("InteractionComponent: Owner is not a Pawn"));
		return;
	}

	FCollisionShape Capsule = FCollisionShape::MakeCapsule(CapsuleRadius, CapsuleHalfHeight);
	FCollisionQueryParams Params;
	Params.AddIgnoredActor(Owner);

	FHitResult Hit;
	bool bHit = GetWorld()->SweepSingleByChannel(
		Hit,
		Start,
		End,
		FQuat::Identity,
		ECC_GameTraceChannel1, // Interactable channel (you'll configure this)
		Capsule,
		Params
	);

	AActor* NewFocusedActor = nullptr;

	if (bHit && Hit.GetActor() &&
		Hit.GetActor()->GetClass()->ImplementsInterface(UBPI_Interactable::StaticClass()) &&
		IBPI_Interactable::Execute_CanInteract(Hit.GetActor(), Owner))
	{
		NewFocusedActor = Hit.GetActor();
	}

	if (FocusedActor != NewFocusedActor)
	{

		if (FocusedActor && FocusedActor->GetClass()->IsChildOf(ABaseInteractableActor::StaticClass()))
		{
			Cast<ABaseInteractableActor>(FocusedActor)->OnUnfocusedByInteractor.Broadcast(GetOwner());
		}

		if (NewFocusedActor && NewFocusedActor->GetClass()->IsChildOf(ABaseInteractableActor::StaticClass()))
		{
			Cast<ABaseInteractableActor>(NewFocusedActor)->OnFocusedByInteractor.Broadcast(GetOwner());
		}

		FocusedActor = NewFocusedActor;

		if (FocusedActor)
		{
			UE_LOG(LogTemp, Log, TEXT("Focused Interactable: %s"), *FocusedActor->GetName());
		}
		else
		{
			UE_LOG(LogTemp, Log, TEXT("No interactable focused"));
		}
	}
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>CapsuleRadius</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Radius of the interaction capsule used in the sweep.</span>
    </summary>
    <p>Radius of the interaction capsule used in the sweep.</p>
  </details>
  <details>
    <summary>
      🧠 <code>CapsuleHalfHeight</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Half-height of the interaction capsule used in the sweep.</span>
    </summary>
    <p>Half-height of the interaction capsule used in the sweep.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MaxInteractDistance</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Maximum distance (in world units) to trace for interactable actors.</span>
    </summary>
    <p>Maximum distance (in world units) to trace for interactable actors.</p>
  </details>
  <details>
    <summary>
      🧠 <code>FocusedActor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The actor currently under focus, or nullptr if none.</span>
    </summary>
    <p>The actor currently under focus, or nullptr if none.</p>
  </details>
  <details>
    <summary>
      🧠 <code>NearbyInteractables</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">All registered actors eligible for interaction focus tracing.</span>
    </summary>
    <p>All registered actors eligible for interaction focus tracing.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bShouldTick</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Whether this component should perform focus sweeps each tick.</span>
    </summary>
    <p>Whether this component should perform focus sweeps each tick.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsGhostControlled</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">When true, skips all focus tracing (ghost control mode).</span>
    </summary>
    <p>When true, skips all focus tracing (ghost control mode).</p>
  </details>
</details>

</details>

</details>
<!-- block -->
