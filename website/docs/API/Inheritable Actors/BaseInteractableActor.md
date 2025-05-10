---
title: "📄 File: BaseInteractableActor.h"
slug: /API/_base_interactable_actor_8h
---

# 📄 File: `BaseInteractableActor.h`

> Declares the main game mode logic for ghost replay and respawn handling.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the `[ATemporalGameMode](#class_a_temporal_game_mode)` class, which is responsible for:

* Managing ghost replays and respawn flow.

* Exposing Blueprint API for ghost logic.

* Coordinating player death and delayed respawn.

[Inheritable Actors](#group___inheritable_actors)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `ABaseInteractableActor`
  <span class="brief-description-pill">Base class for any actor that supports proximity-based interaction.</span>
</summary>

> Maintains a small overlap sphere ([InteractionSphere](#class_a_base_interactable_actor_1ad70d64534f3c93e062e14871eaa9af67)) to detect nearby actors and fires off both C++ delegates and Blueprint events when an `Interactor` enters or leaves the radius.

Designers can adjust [InteractionRadius](#class_a_base_interactable_actor_1ab0d3f1e869442fbc9672b06c4e8a2f74) to control detection range.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>ABaseInteractableActor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct and set up collision sphere and default properties.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 16–30)</p>
    <ExpandableCodeBlock code={`ABaseInteractableActor::ABaseInteractableActor()
{
    PrimaryActorTick.bCanEverTick = false;

    RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("Root"));

    InteractionSphere = CreateDefaultSubobject<USphereComponent>(TEXT("InteractionSphere"));
    InteractionSphere->SetupAttachment(RootComponent);
    InteractionSphere->SetSphereRadius(InteractionRadius);           // keep CDO + editors in sync
    InteractionSphere->SetCollisionEnabled(ECollisionEnabled::QueryOnly);
    InteractionSphere->SetCollisionObjectType(ECC_WorldDynamic);
    InteractionSphere->SetCollisionResponseToAllChannels(ECR_Ignore);
    InteractionSphere->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);
    InteractionSphere->SetGenerateOverlapEvents(true);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>Interact_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when `Interactor` performs an interaction.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor that initiated the interaction.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 50–54)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::Interact_Implementation(AActor* Interactor)
{
    UE_LOG(LogTemp, Log, TEXT("[%s] Interacted by [%s]"),
        *GetName(), Interactor ? *Interactor->GetName() : TEXT("NULL"));
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>CanInteract_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns true if `Interactor` is allowed to interact.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor attempting to interact.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 56–60)</p>
    <ExpandableCodeBlock code={`bool ABaseInteractableActor::CanInteract_Implementation(AActor* /*Interactor*/)
{
    // Override in child classes for doors, switches, etc.
    return true;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetInteractorsInRange</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the list of actors currently within [InteractionRadius](#class_a_base_interactable_actor_1ab0d3f1e869442fbc9672b06c4e8a2f74).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.h</code> (lines 78–78)</p>
    <ExpandableCodeBlock code={`    const TArray<AActor*>& GetInteractorsInRange() const { return InteractorsInRange; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>IsGhostInteractor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Check if `Interactor` carries the Ghost tag ([TAG_Ghost](#class_a_base_interactable_actor_1a669d64f5e8fa8db483d5a5311529a8db)).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor to test.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 119–122)</p>
    <ExpandableCodeBlock code={`bool ABaseInteractableActor::IsGhostInteractor(AActor* Interactor) const
{
	return Interactor && Interactor->ActorHasTag(TAG_Ghost);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>IsPlayerInteractor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Check if `Interactor` carries the Player tag ([TAG_Player](#class_a_base_interactable_actor_1aa1fccf554c3446366866a326bbe4c648)).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor to test.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 124–127)</p>
    <ExpandableCodeBlock code={`bool ABaseInteractableActor::IsPlayerInteractor(AActor* Interactor) const
{
	return Interactor && Interactor->ActorHasTag(TAG_Player);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetInteractorTypeTag</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Return the type tag for `Interactor` ("Ghost" or "Player").</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor to query.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 129–134)</p>
    <ExpandableCodeBlock code={`FName ABaseInteractableActor::GetInteractorTypeTag(AActor* Interactor) const
{
	if (IsGhostInteractor(Interactor))   return TAG_Ghost;
	if (IsPlayerInteractor(Interactor))  return TAG_Player;
	return FName("Unknown");
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorFocused</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called in Blueprint when `Interactor` is focused (UI highlight).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorUnfocused</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called in Blueprint when `Interactor` is unfocused.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorEnteredRadius</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called in Blueprint when `Interactor` enters the radius.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorLeftRadius</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called in Blueprint when `Interactor` leaves the radius.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

  </details>
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts or actor is spawned.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 32–46)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::BeginPlay()
{
    Super::BeginPlay();

    InteractionSphere->SetSphereRadius(InteractionRadius); // honour tweaked values

    InteractionSphere->OnComponentBeginOverlap.AddDynamic(this, &ABaseInteractableActor::HandleSphereBeginOverlap);
    InteractionSphere->OnComponentEndOverlap.AddDynamic(this, &ABaseInteractableActor::HandleSphereEndOverlap);

    // Route Blueprint-native events through C++ delegates so everyone gets pinged
    OnFocusedByInteractor.AddDynamic(this, &ABaseInteractableActor::OnInteractorFocused);
    OnUnfocusedByInteractor.AddDynamic(this, &ABaseInteractableActor::OnInteractorUnfocused);
    OnInteractorEnteredRadiusEvent.AddDynamic(this, &ABaseInteractableActor::OnInteractorEnteredRadius);
    OnInteractorLeftRadiusEvent.AddDynamic(this, &ABaseInteractableActor::OnInteractorLeftRadius);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleSphereBeginOverlap</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Handle when something ENTERS the overlap sphere.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 64–71)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::HandleSphereBeginOverlap(UPrimitiveComponent*, AActor* OtherActor,
    UPrimitiveComponent*, int32, bool, const FHitResult&)
{
    if (IsValidInteractor(OtherActor))
    {
        RegisterInteractor(OtherActor);
    }
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleSphereEndOverlap</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Handle when something LEAVES the overlap sphere.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 73–80)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::HandleSphereEndOverlap(UPrimitiveComponent*, AActor* OtherActor,
    UPrimitiveComponent*, int32)
{
    if (OtherActor)
    {
        UnregisterInteractor(OtherActor);
    }
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>IsValidInteractor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Return true if `Candidate` is valid (not self and is a pawn).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Candidate</code> – Actor to test.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 84–87)</p>
    <ExpandableCodeBlock code={`bool ABaseInteractableActor::IsValidInteractor(AActor* Candidate) const
{
	return Candidate && Candidate != this && Candidate->IsA(APawn::StaticClass());
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>RegisterInteractor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Add `Interactor` to [InteractorsInRange](#class_a_base_interactable_actor_1ae2b7b85c86c799242aee363bfda66514) and fire [OnInteractorEnteredRadiusEvent](#class_a_base_interactable_actor_1a88022fe2880641029ff4633f8ce7c008).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – Actor to register.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 89–102)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::RegisterInteractor(AActor* Interactor)
{
	if (!InteractorsInRange.Contains(Interactor))
	{
		InteractorsInRange.Add(Interactor);

		if (Interactor->GetClass()->ImplementsInterface(UBPI_Interactable::StaticClass()))
		{
			IBPI_Interactable::Execute_RegisterInteractable(Interactor, this);
		}

		OnInteractorEnteredRadiusEvent.Broadcast(Interactor);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>UnregisterInteractor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Remove `Interactor` from [InteractorsInRange](#class_a_base_interactable_actor_1ae2b7b85c86c799242aee363bfda66514) and fire [OnInteractorLeftRadiusEvent](#class_a_base_interactable_actor_1ab43bb877155ef27a66a6dff1aa43592f).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – Actor to unregister.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 104–115)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::UnregisterInteractor(AActor* Interactor)
{
	if (InteractorsInRange.Remove(Interactor) > 0)
	{
		if (Interactor->GetClass()->ImplementsInterface(UBPI_Interactable::StaticClass()))
		{
			IBPI_Interactable::Execute_UnregisterInteractable(Interactor, this);
		}

		OnInteractorLeftRadiusEvent.Broadcast(Interactor);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorFocused_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">C++ implementation for [OnInteractorFocused](#class_a_base_interactable_actor_1aa452ecea351e91c46a56a6720aac604a) (BlueprintNativeEvent).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 138–138)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::OnInteractorFocused_Implementation(AActor* /*Interactor*/) {}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorUnfocused_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">C++ implementation for [OnInteractorUnfocused](#class_a_base_interactable_actor_1adcbab5ca9e58789af7ffe8504b4f2a39) (BlueprintNativeEvent).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 139–139)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::OnInteractorUnfocused_Implementation(AActor* /*Interactor*/) {}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorEnteredRadius_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">C++ implementation for [OnInteractorEnteredRadius](#class_a_base_interactable_actor_1a5ba8c7d714b4f4f7ddb311c154cd3de6) (BlueprintNativeEvent).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 140–140)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::OnInteractorEnteredRadius_Implementation(AActor* /*Interactor*/) {}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorLeftRadius_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">C++ implementation for [OnInteractorLeftRadius](#class_a_base_interactable_actor_1ad0b5f103acee6b612496ab1c96682e75) (BlueprintNativeEvent).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/BaseInteractableActor.cpp</code> (lines 141–141)</p>
    <ExpandableCodeBlock code={`void ABaseInteractableActor::OnInteractorLeftRadius_Implementation(AActor* /*Interactor*/) {}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>OnInteractorEnteredRadiusEvent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when an actor enters the interaction radius.</span>
    </summary>
    <p>Broadcast when an actor enters the interaction radius.</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnInteractorLeftRadiusEvent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when an actor leaves the interaction radius.</span>
    </summary>
    <p>Broadcast when an actor leaves the interaction radius.</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnFocusedByInteractor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when an actor is focused by an interactor.</span>
    </summary>
    <p>Broadcast when an actor is focused by an interactor.</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnUnfocusedByInteractor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when an actor is unfocused by an interactor.</span>
    </summary>
    <p>Broadcast when an actor is unfocused by an interactor.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InteractionRadius</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Distance within which actors can interact.</span>
    </summary>
    <p>Distance within which actors can interact.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InteractionSphere</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Sphere component used to detect overlapping actors.</span>
    </summary>
    <p>Sphere component used to detect overlapping actors.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InteractorsInRange</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Actors currently within [InteractionRadius](#class_a_base_interactable_actor_1ab0d3f1e869442fbc9672b06c4e8a2f74).</span>
    </summary>
    <p>Actors currently within [InteractionRadius](#class_a_base_interactable_actor_1ab0d3f1e869442fbc9672b06c4e8a2f74).</p>
  </details>
</details>

</details>

</details>
<!-- block -->
