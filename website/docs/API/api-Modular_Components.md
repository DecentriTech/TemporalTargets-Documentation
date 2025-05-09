---
id: Modular_Components
title: Modular Components
sidebar_label: Modular Components
slug: /API/Modular_Components
---

# 🗂️ Category: [Modular Components](/docs/API/Modular_Components)

> Reusable gameplay components providing discrete functionality.

<!-- block -->

<details open>
<summary>📦 Classes in This Category</summary>

<!-- block -->

<details>
<summary>🔹 [UDamageableComponent](#UDamageableComponent)</summary>

Component that handles health, damage, and death for an actor.

<details>
<summary>📄 Description</summary>

Manages health state, applies damage via [ApplyDamage()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1a7c4abcb86c51c1eb39511494cfbee1bc), allows healing via [Heal()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1aa66ec8aeace8315def60c8769219a172), and fires death logic in [HandleDeath()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1adf368c5991d1e03392c160c3acd35b10).

Exposes events:

* OnDamageTaken: broadcast when damage is applied.

* OnDeath: broadcast once when the actor dies.

Tracks last damage details in [LastDamageInfo](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1a2f14c8b5c8ff5f3f8d3b2e6789e754e9) for UI or replay systems.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UInteractionComponent](#UInteractionComponent)</summary>

Detects and handles player interactions with interactable actors.

<details>
<summary>📄 Description</summary>

Uses a capsule sweep (radius = [CapsuleRadius](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a984644c0b160eeb3c5155cea4d0283ee), half-height = [CapsuleHalfHeight](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a5585daeeb972b00edd15eaae9cf786ff)) out to [MaxInteractDistance](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a3b20ebc5decc62092728cdb996e8a79e) to focus on actors implementing [UBPI_Interactable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_u_b_p_i___interactable). When focus changes it fires OnFocusedByInteractor and OnUnfocusedByInteractor on [ABaseInteractableActor](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-InheritableActors.md#class_a_base_interactable_actor). Actual interaction happens via [Interact()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a0b37d2aef5c83c3c85b3eb9bd3e3d28a).

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UReplayRecorderComponent](#UReplayRecorderComponent)</summary>

Component that captures and stores per-frame player state for replay.

<details>
<summary>📄 Description</summary>

[UReplayRecorderComponent](#class_u_replay_recorder_component) ticks every frame and, when active, collects a stream of [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Replay_Data.md#struct_f_player_frame_data) at intervals defined by [RecordingInterval](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a4841fd81b50d9458b6b2542404c676cd). It also records interaction events via [CaptureInteractionData()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a4d009df22d2f236d5956cdc7931229aa) and shot events via [CaptureShotData()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a95379bbc4b1adfd811455da125dffaf4). All recorded frames are exposed through [GetRecordedData()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a6a4a12bbaf2bcc3f32b46aa2e5136d19).

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UWeaponComponent](#UWeaponComponent)</summary>

Component responsible for all weapon behavior: firing, reloading, recoil, and UI updates.

<details>
<summary>📄 Description</summary>

This component exposes:

* [FireWeapon()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1aa9f322fa843b509d339ae30970396dd3) for triggering shots (supports sub-shots via the `SubShotIndex` parameter).

* [ReloadWeapon()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a0cc8cc9981a534155199674703d6a44a) and [FinishReloading()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a8fc78ff182ea627b1f08c68642cb85b1) for handling ammo refill.

* [UpdateCrosshairSpread()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a7441dc2b5b6429fcf4e28440c926f98a) for driving the HUD crosshair based on movement and weapon state.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UWeaponInventoryComponent](#UWeaponInventoryComponent)</summary>

Manages the collection of weapons a character owns and handles switching, cycling, and initialization.

<details>
<summary>📄 Description</summary>

This component maintains an inventory of [UWeaponDataAsset](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset) entries, equips a selected weapon via the associated [UWeaponComponent](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component), and provides Blueprint-callable methods to switch or cycle weapons.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [FWeaponAmmoData](#FWeaponAmmoData)</summary>

Tracks the ammo counts in the weapon's clip and its reserve.

</details>

<!-- block -->

</details>

<!-- block -->
<!-- block -->

<details>
<summary>
  📘 Class `UDamageableComponent`
    <span class="brief-description-pill">Component that handles health, damage, and death for an actor.</span>
</summary>
<!-- block -->

# Class `UDamageableComponent` 

<!-- block -->

> Manages health state, applies damage via [ApplyDamage()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1a7c4abcb86c51c1eb39511494cfbee1bc), allows healing via [Heal()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1aa66ec8aeace8315def60c8769219a172), and fires death logic in [HandleDeath()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1adf368c5991d1e03392c160c3acd35b10).

Exposes events:

* OnDamageTaken: broadcast when damage is applied.

* OnDeath: broadcast once when the actor dies.

Tracks last damage details in [LastDamageInfo](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1a2f14c8b5c8ff5f3f8d3b2e6789e754e9) for UI or replay systems.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UDamageableComponent
  : public UActorComponent
```

</details>

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
      🧠 <code>UDamageableComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets default values and initializes health.</span>
    </summary>

    <p>Sets default values and initializes health.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 11–18)
  </p>

  <ExpandableCodeBlock code={`UDamageableComponent::UDamageableComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = false;

	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ApplyDamage</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Apply incoming damage.</span>
    </summary>

    <p>Apply incoming damage.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const  & DamageInfo</code> – Context of the damage event (see ).</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 30–57)
  </p>

  <ExpandableCodeBlock code={`void UDamageableComponent::ApplyDamage(const FDamageInfo& DamageInfo)
{
	// Early outs keep the happy path clean
	if (bIsDead || DamageInfo.DamageAmount <= 0.f) return;

	LastDamageInfo = DamageInfo;
	CurrentHealth = FMath::Clamp(CurrentHealth - DamageInfo.DamageAmount, 0.f, MaxHealth);

	// Did the hit kill the actor?
	const bool bKilled = (CurrentHealth <= 0.f) && bCanDie;
	if (bKilled)
	{
		LastDamageInfo.DamageTags.AddTag(TAG_Damage_Kill);   // mark as lethal before HUD feedback
		HandleDeath(LastDamageInfo.Instigator);
	}

	OnDamageTaken.Broadcast(CurrentHealth, LastDamageInfo.DamageAmount); // widgets, sounds, etc.

	// Let native / BP classes react generically
	if (GetOwner()->GetClass()->ImplementsInterface(UDamageableInterface::StaticClass()))
	{
		IDamageableInterface::Execute_OnDamaged(GetOwner(), CurrentHealth, DamageInfo.DamageAmount);
	}

	BroadcastHitFeedback();

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Heal</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Restore health by the specified amount, clamped to [MaxHealth](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1afc6f8e3d6c8bb8ee7856fc1dfd214b49).</span>
    </summary>

    <p>Restore health by the specified amount, clamped to [MaxHealth](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_damageable_component_1afc6f8e3d6c8bb8ee7856fc1dfd214b49).</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float HealAmount</code> – Amount of health to recover.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 96–102)
  </p>

  <ExpandableCodeBlock code={`void UDamageableComponent::Heal(float HealAmount)
{
	if (bIsDead || HealAmount <= 0.f) return;

	CurrentHealth = FMath::Clamp(CurrentHealth + HealAmount, 0.f, MaxHealth);
	OnDamageTaken.Broadcast(CurrentHealth, -HealAmount);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>IsAlive</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query whether the actor is still alive.</span>
    </summary>

    <p>Query whether the actor is still alive.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 103–106)
  </p>

  <ExpandableCodeBlock code={`bool UDamageableComponent::IsAlive() const
{
	return !bIsDead;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetHealthPercent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the current health normalized between 0.0 and 1.0.</span>
    </summary>

    <p>Get the current health normalized between 0.0 and 1.0.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 108–111)
  </p>

  <ExpandableCodeBlock code={`float UDamageableComponent::GetHealthPercent() const
{
	return (MaxHealth > 0.f) ? (CurrentHealth / MaxHealth) : 0.f;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Initialize current health to MaxHealth at play start.</span>
    </summary>

    <p>Initialize current health to MaxHealth at play start.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 22–28)
  </p>

  <ExpandableCodeBlock code={`void UDamageableComponent::BeginPlay()
{
	Super::BeginPlay();

	// Initialize health to max health at the start
	CurrentHealth = MaxHealth;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>HandleDeath</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Central death handler that ensures death logic only fires once.</span>
    </summary>

    <p>Central death handler that ensures death logic only fires once.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * InstigatorActor</code> – Actor responsible for the lethal damage.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 72–94)
  </p>

  <ExpandableCodeBlock code={`void UDamageableComponent::HandleDeath(AActor* InstigatorActor)
{
	if (bCanDie && !bIsDead)
	{

		bIsDead = true;

		// Grab the pawn's controller *right now*, before UE clears it
		AController* VictimCtrl = nullptr;
		if (APawn* P = Cast<APawn>(GetOwner()))
		{
			VictimCtrl = P->GetController();
		}

		if (GetOwner()->GetClass()->ImplementsInterface(UDamageableInterface::StaticClass()))
		{
			IDamageableInterface::Execute_OnKilled(GetOwner(), InstigatorActor);
		}

		OnDeath.Broadcast(GetOwner(), VictimCtrl, InstigatorActor);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>BroadcastHitFeedback</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">HUD feedback helper: flashes hitmarker on the shooter's HUD.</span>
    </summary>

    <p>HUD feedback helper: flashes hitmarker on the shooter's HUD.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/DamageableComponent.cpp</code>
    (lines 59–70)
  </p>

  <ExpandableCodeBlock code={`void UDamageableComponent::BroadcastHitFeedback() const
{
	if (!LastDamageInfo.Instigator) return;

	if (APlayerController* PC = Cast<APlayerController>(LastDamageInfo.Instigator->GetInstigatorController()))
	{
		if (AGameHUD* HUD = Cast<AGameHUD>(PC->GetHUD()))
		{
			HUD->ShowHitmarker(LastDamageInfo.DamageTags);
		}
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MaxHealth</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum health value (starting health and heal cap).</span>
    </summary>

    <p>Maximum health value (starting health and heal cap).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bCanDie</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether this actor can die (if false, health bottoms out at 0 but no death).</span>
    </summary>

    <p>Whether this actor can die (if false, health bottoms out at 0 but no death).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnDamageTaken</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when damage is applied; provides new health and damage amount.</span>
    </summary>

    <p>Broadcast when damage is applied; provides new health and damage amount.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnDeath</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast on death; provides victim and instigator details.</span>
    </summary>

    <p>Broadcast on death; provides victim and instigator details.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>LastDamageInfo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Details of the most recent damage event for kill-cams or scoreboards.</span>
    </summary>

    <p>Details of the most recent damage event for kill-cams or scoreboards.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CurrentHealth</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Current health value (0 to MaxHealth).</span>
    </summary>

    <p>Current health value (0 to MaxHealth).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsDead</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">True once death logic has executed; prevents multiple death broadcasts.</span>
    </summary>

    <p>True once death logic has executed; prevents multiple death broadcasts.</p>

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

<!-- block -->

<details>
<summary>
  📘 Class `UInteractionComponent`
    <span class="brief-description-pill">Detects and handles player interactions with interactable actors.</span>
</summary>
<!-- block -->

# Class `UInteractionComponent` 

<!-- block -->

> Uses a capsule sweep (radius = [CapsuleRadius](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a984644c0b160eeb3c5155cea4d0283ee), half-height = [CapsuleHalfHeight](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a5585daeeb972b00edd15eaae9cf786ff)) out to [MaxInteractDistance](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a3b20ebc5decc62092728cdb996e8a79e) to focus on actors implementing [UBPI_Interactable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_u_b_p_i___interactable). When focus changes it fires OnFocusedByInteractor and OnUnfocusedByInteractor on [ABaseInteractableActor](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-InheritableActors.md#class_a_base_interactable_actor). Actual interaction happens via [Interact()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_interaction_component_1a0b37d2aef5c83c3c85b3eb9bd3e3d28a).

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UInteractionComponent
  : public UActorComponent
```

</details>

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
      🧠 <code>UInteractionComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets default values for this component's properties.</span>
    </summary>

    <p>Sets default values for this component's properties.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 16–23)
  </p>

  <ExpandableCodeBlock code={`UInteractionComponent::UInteractionComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = true;

	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Interact</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Attempts to interact with the currently focused actor.</span>
    </summary>

    <p>Attempts to interact with the currently focused actor.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 135–163)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetFocusedActor</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Accessor for the actor currently focused.</span>
    </summary>

    <p>Accessor for the actor currently focused.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.h</code>
    (lines 93–93)
  </p>

  <ExpandableCodeBlock code={`    AActor* GetFocusedActor() const { return FocusedActor; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>AddRegisteredInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Adds an actor to the set of candidates for interaction focus.</span>
    </summary>

    <p>Adds an actor to the set of candidates for interaction focus.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * Interactable</code> – The actor to register; will enable ticking.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 165–173)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>RemoveRegisteredInteractable</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Removes an actor from interaction focus candidates and clears focus.</span>
    </summary>

    <p>Removes an actor from interaction focus candidates and clears focus.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * Interactable</code> – The actor to unregister.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 175–185)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called once when the game starts.</span>
    </summary>

    <p>Called once when the game starts.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 27–36)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>TickComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called every frame to update focus tracing.</span>
    </summary>

    <p>Called every frame to update focus tracing.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float DeltaTime</code> – Time elapsed since last frame.</li>
        <li><code>ELevelTick TickType</code> – Type of tick this frame.</li>
        <li><code>FActorComponentTickFunction * ThisTickFunction</code> – Internal tick function data.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 40–47)
  </p>

  <ExpandableCodeBlock code={`void UInteractionComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	if (bIsGhostControlled) return;

	InteractionFocusTrace();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>InteractionFocusTrace</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Performs a capsule trace to update the currently focused actor.</span>
    </summary>

    <p>Performs a capsule trace to update the currently focused actor.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/InteractionComponent.cpp</code>
    (lines 49–133)
  </p>

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
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CapsuleRadius</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Radius of the interaction capsule used in the sweep.</span>
    </summary>

    <p>Radius of the interaction capsule used in the sweep.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CapsuleHalfHeight</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Half-height of the interaction capsule used in the sweep.</span>
    </summary>

    <p>Half-height of the interaction capsule used in the sweep.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MaxInteractDistance</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Maximum distance (in world units) to trace for interactable actors.</span>
    </summary>

    <p>Maximum distance (in world units) to trace for interactable actors.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FocusedActor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The actor currently under focus, or nullptr if none.</span>
    </summary>

    <p>The actor currently under focus, or nullptr if none.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>NearbyInteractables</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">All registered actors eligible for interaction focus tracing.</span>
    </summary>

    <p>All registered actors eligible for interaction focus tracing.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bShouldTick</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Whether this component should perform focus sweeps each tick.</span>
    </summary>

    <p>Whether this component should perform focus sweeps each tick.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsGhostControlled</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">When true, skips all focus tracing (ghost control mode).</span>
    </summary>

    <p>When true, skips all focus tracing (ghost control mode).</p>

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

<!-- block -->

<details>
<summary>
  📘 Class `UReplayRecorderComponent`
    <span class="brief-description-pill">Component that captures and stores per-frame player state for replay.</span>
</summary>
<!-- block -->

# Class `UReplayRecorderComponent` 

<!-- block -->

> [UReplayRecorderComponent](#class_u_replay_recorder_component) ticks every frame and, when active, collects a stream of [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Replay_Data.md#struct_f_player_frame_data) at intervals defined by [RecordingInterval](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a4841fd81b50d9458b6b2542404c676cd). It also records interaction events via [CaptureInteractionData()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a4d009df22d2f236d5956cdc7931229aa) and shot events via [CaptureShotData()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a95379bbc4b1adfd811455da125dffaf4). All recorded frames are exposed through [GetRecordedData()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a6a4a12bbaf2bcc3f32b46aa2e5136d19).

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UReplayRecorderComponent
  : public UActorComponent
```

</details>

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
      🧠 <code>UReplayRecorderComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct and set default component properties.</span>
    </summary>

    <p>Construct and set default component properties.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 8–15)
  </p>

  <ExpandableCodeBlock code={`UReplayRecorderComponent::UReplayRecorderComponent()
{
	PrimaryComponentTick.bCanEverTick = true;
	bRecording = false;
	RecordingInterval = 0.033f; // Approximately 30 FPS
	RecordingAccumulator = 0.0f;
    CurrentFrameActionFlags = EReplayActionFlags::None;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>TickComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called each frame to advance recording logic.</span>
    </summary>

    <p>Called each frame to advance recording logic.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float DeltaTime</code> – Time since last tick.</li>
        <li><code>ELevelTick TickType</code> – Type of tick this is.</li>
        <li><code>FActorComponentTickFunction * ThisTickFunction</code> – Internal tick function struct.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 67–132)
  </p>

  <ExpandableCodeBlock code={`void UReplayRecorderComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

    // Debug Log to Check if Tick is Running
    GEngine->AddOnScreenDebugMessage(9999, 1.0f, FColor::Red, TEXT("[ReplayRecorder] TickComponent is RUNNING"));

    if (bRecording)
    {
        RecordingAccumulator += DeltaTime;

        // Log accumulated time before the frame update
        FString LogMessage = FString::Printf(TEXT("[ReplayRecorder] Accumulated Time: %.3f"), RecordingAccumulator);
        GEngine->AddOnScreenDebugMessage((uint64)89, 0.05f, FColor::Cyan, LogMessage);

        if (RecordingAccumulator >= RecordingInterval)
        {
            // Reset the accumulator
            RecordingAccumulator = 0.0f;

            // Capture current state from the owner (player character)
            AActor* Owner = GetOwner();
            if (Owner)
            {
                FPlayerFrameData Frame;
                Frame.TimeStamp = Owner->GetWorld()->GetTimeSeconds();
                Frame.Position = Owner->GetActorLocation();
				Frame.Velocity = Owner->GetVelocity();
                Frame.Rotation = Owner->GetActorRotation();
                Frame.ActionFlags = CurrentFrameActionFlags;

                if (Frame.HasAction(EReplayActionFlags::Interacted))
                {
                    Frame.InteractionData = PendingInteractionData;
                }

                if (Frame.HasAction(EReplayActionFlags::FiredWeapon))
                {
                    Frame.CombatData = PendingCombatData;

                    if (Frame.CombatData.Shots.Num()) UE_LOG(LogTemp, Log, TEXT("Frame copy impact = %s"), *Frame.CombatData.Shots.Last().ImpactLocation.ToString());
                }

                RecordedFrames.Add(Frame);

                // Log the frame data
                FString FrameLog = FString::Printf(
                    TEXT("[ReplayRecorder] Frame: %d | TimeStamp: %.2f | Position: (%.2f, %.2f, %.2f) | Rotation: (%.2f, %.2f, %.2f) | Flags: %d"),
                    RecordedFrames.Num(),
                    Frame.TimeStamp,
                    Frame.Position.X, Frame.Position.Y, Frame.Position.Z,
                    Frame.Rotation.Pitch, Frame.Rotation.Yaw, Frame.Rotation.Roll,
                    (uint8)Frame.ActionFlags
                );

                // Use a static message key to avoid spam
                GEngine->AddOnScreenDebugMessage(123456, 2.0f, FColor::Green, FrameLog);
            }
            // Reset the accumulated flags after recording the frame.
            CurrentFrameActionFlags = EReplayActionFlags::None;
            PendingInteractionData = FInteractionData();
			PendingCombatData = FCombatFrameData();
        }
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>StartRecording</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Begin a new recording session.</span>
    </summary>

    <p>Begin a new recording session.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 18–24)
  </p>

  <ExpandableCodeBlock code={`void UReplayRecorderComponent::StartRecording()
{
    RecordedFrames.Empty();
    bRecording = true;
    RecordingAccumulator = 0.0f;
    CurrentFrameActionFlags = EReplayActionFlags::None;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>StopRecording</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">End the current recording session.</span>
    </summary>

    <p>End the current recording session.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 26–29)
  </p>

  <ExpandableCodeBlock code={`void UReplayRecorderComponent::StopRecording()
{
    bRecording = false;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>AddActionFlag</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Add an action flag for this frame.</span>
    </summary>

    <p>Add an action flag for this frame.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code> NewFlag</code> – The  to record.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 31–35)
  </p>

  <ExpandableCodeBlock code={`void UReplayRecorderComponent::AddActionFlag(EReplayActionFlags NewFlag)
{
    // Blueprint callable function to add an action flag.
    CurrentFrameActionFlags = (EReplayActionFlags)((uint8)CurrentFrameActionFlags | (uint8)NewFlag);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CaptureInteractionData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Capture interaction metadata when the player interacts with an actor.</span>
    </summary>

    <p>Capture interaction metadata when the player interacts with an actor.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * InteractedActor</code> – The actor being interacted with.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 37–57)
  </p>

  <ExpandableCodeBlock code={`void UReplayRecorderComponent::CaptureInteractionData(AActor* InteractedActor)
{
    if (!InteractedActor || !bRecording) return;

	PendingInteractionData.TargetActorPath = FSoftObjectPath(InteractedActor);
    PendingInteractionData.RelativeLocationToTarget = GetOwner()->GetActorLocation() - InteractedActor->GetActorLocation();

    // Optional: set a tag/type here
    if (InteractedActor->ActorHasTag("Pickup"))
    {
        PendingInteractionData.InteractionType = FName("Pickup");
    }
    else if (InteractedActor->ActorHasTag("Terminal"))
    {
        PendingInteractionData.InteractionType = FName("Terminal");
    }
    else
    {
        PendingInteractionData.InteractionType = FName("Generic");
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CaptureShotData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Append a recorded shot event to the pending combat data.</span>
    </summary>

    <p>Append a recorded shot event to the pending combat data.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const  & ShotData</code> – The  details for this shot.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code>
    (lines 59–65)
  </p>

  <ExpandableCodeBlock code={`void UReplayRecorderComponent::CaptureShotData(const FRecordedShot& ShotData)
{
	if (!bRecording) return;
	PendingCombatData.Shots.Add(ShotData);

    UE_LOG(LogTemp, Log, TEXT("PendingCombatData last shot = %s"), *PendingCombatData.Shots.Last().ImpactLocation.ToString());
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetRecordedData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Access the array of recorded frames.</span>
    </summary>

    <p>Access the array of recorded frames.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/ReplayRecorderComponent.h</code>
    (lines 100–100)
  </p>

  <ExpandableCodeBlock code={`	const TArray<FPlayerFrameData>& GetRecordedData() const { return RecordedFrames; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RecordedFrames</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Storage of all frames captured since the last [StartRecording()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a0ae8d215de8e486015cc161070c8e111).</span>
    </summary>

    <p>Storage of all frames captured since the last [StartRecording()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_replay_recorder_component_1a0ae8d215de8e486015cc161070c8e111).</p>

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

<!-- block -->

<details>
<summary>
  📘 Class `UWeaponComponent`
    <span class="brief-description-pill">Component responsible for all weapon behavior: firing, reloading, recoil, and UI updates.</span>
</summary>
<!-- block -->

# Class `UWeaponComponent` 

<!-- block -->

> This component exposes:

* [FireWeapon()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1aa9f322fa843b509d339ae30970396dd3) for triggering shots (supports sub-shots via the `SubShotIndex` parameter).

* [ReloadWeapon()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a0cc8cc9981a534155199674703d6a44a) and [FinishReloading()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a8fc78ff182ea627b1f08c68642cb85b1) for handling ammo refill.

* [UpdateCrosshairSpread()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a7441dc2b5b6429fcf4e28440c926f98a) for driving the HUD crosshair based on movement and weapon state.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UWeaponComponent
  : public UActorComponent
```

</details>

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
      🧠 <code>UWeaponComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor that sets default values for this component's properties.</span>
    </summary>

    <p>Constructor that sets default values for this component's properties.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 23–33)
  </p>

  <ExpandableCodeBlock code={`UWeaponComponent::UWeaponComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	// 
	// Turn *off* ticking until someone sets a valid widget
	PrimaryComponentTick.bCanEverTick = true;

	PrimaryComponentTick.bStartWithTickEnabled = true;
	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>FireWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Fire a single shot or sub-shot.</span>
    </summary>

    <p>Fire a single shot or sub-shot.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>int32 SubShotIndex</code> – Index to support multi-projectile weapons (e.g. shotgun pellets).</li>
        <li><code>float SimulatedTime</code> – Used for replicated fire timing; defaults to local time.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 345–588)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::FireWeapon(int32 SubShotIndex, float SimulatedTime)
{
	if (!WeaponData)
	{
		UE_LOG(LogTemp, Warning, TEXT("FireWeapon: No WeaponData assigned!"));
		return;
	}
	if (!GetOwner())
	{
		UE_LOG(LogTemp, Warning, TEXT("FireWeapon: No owner assigned!"));
		return;
	}
	if (!WeaponData || !GetOwner()) return;

	if (!CanFire())
	{
		UE_LOG(LogTemp, Warning, TEXT("FireWeapon: Cannot fire yet!"));
		return;
	}

	if (!CachedHUD.IsValid())
	{
		UE_LOG(LogTemp, Warning, TEXT("FireWeapon: No HUD widget assigned!"));
		if (APlayerController* PC = Cast<APlayerController>(GetOwner()->GetInstigatorController()))
		{
			if (AGameHUD* GameHUD = Cast<AGameHUD>(PC->GetHUD()))
			{
				CachedHUD = GameHUD->GetHUDWidget();
				UE_LOG(LogTemp, Log, TEXT("FireWeapon: Retrieved HUD widget from GameHUD."));
			}
		}
	}

	// === Fire Rate Debug ===
	static float LastLoggedShotTime = -1.0f;

	if (SimulatedTime > 0.f)
	{
		if (LastLoggedShotTime >= 0.f)
		{
			const float Interval = SimulatedTime - LastLoggedShotTime;
			const float ActualRPM = 60.f / Interval;

			UE_LOG(LogTemp, Warning, TEXT("[Fire] Simulated Shot at %.4f"), SimulatedTime);
			UE_LOG(LogTemp, Log, TEXT("[FireRate Debug] Interval: %.4f s | Actual RPM: %.1f"), Interval, ActualRPM);

			const float ExpectedInterval = 60.f / WeaponData->FireRate;
			const float Drift = FMath::Abs(Interval - ExpectedInterval);

			if (Drift > 0.0005f) // (More precise threshold for high RPM)
			{
				UE_LOG(LogTemp, Warning, TEXT("?? RPM Drift! ? = %.4f (Expected: %.4f)"), Drift, ExpectedInterval);
			}
		}

		LastLoggedShotTime = SimulatedTime;
	}

	

	AActor* Owner = GetOwner();

	FVector ViewLocation;
	FRotator ViewRotation;

	// Get viewpoint from controller (player or AI)
	if (APawn* PawnOwner = Cast<APawn>(Owner))
	{
		AController* Controller = PawnOwner->GetController();
		if (Controller)
		{
			Controller->GetPlayerViewPoint(ViewLocation, ViewRotation);
		}
		else
		{
			ViewLocation = Owner->GetActorLocation();
			ViewRotation = Owner->GetActorRotation();
		}
	}
	else
	{
		ViewLocation = Owner->GetActorLocation();
		ViewRotation = Owner->GetActorRotation();
	}

	FVector Start = ViewLocation;
	FVector ShootDir = ViewRotation.Vector();

	const int32 PatternIndex = CurrentSprayIndex + SubShotIndex;

	// === APPLY SPRAY PATTERN TO BULLETS ===
	if (WeaponData && WeaponData->SprayPattern.IsValidIndex(PatternIndex))
	{
		const FVector2D Point = WeaponData->SprayPattern[PatternIndex];
		const FRotator PatternRot(Point.Y * WeaponData->BulletPatternMultiplier, Point.X * WeaponData->BulletPatternMultiplier, 0.f);
		FRotator BulletAim = ViewRotation + PatternRot;
		ShootDir = BulletAim.Vector();
		
	}

	// === RANDOM SPREAD ===
	if (WeaponData && CurrentSpread > 0.f)
	{
		float HalfAngle = FMath::DegreesToRadians(CurrentSpread * 0.5f);
		ShootDir = FMath::VRandCone(ShootDir, HalfAngle);

		UE_LOG(LogTemp, Log, TEXT("ShootDir with spread: %s"), *ShootDir.ToString());
	}

	FVector End = Start + ShootDir * WeaponData->TraceDistance;

	FHitResult Hit;
	FCollisionQueryParams Params;
	Params.AddIgnoredActor(Owner);

	const bool bHit = GetWorld()->LineTraceSingleByChannel(Hit, Start, End, ECC_Visibility, Params);
	const FVector ImpactPoint = bHit ? Hit.ImpactPoint : End;

	// === APPLY CAMERA RECOIL ===
	if (WeaponData && WeaponData->SprayPattern.IsValidIndex(CurrentSprayIndex))
	{
		const FVector2D Point = WeaponData->SprayPattern[CurrentSprayIndex];
		const FVector2D NextPoint = WeaponData->SprayPattern.IsValidIndex(CurrentSprayIndex + 1) ? WeaponData->SprayPattern[CurrentSprayIndex + 1] : Point;
		FVector2D PatternDelta = NextPoint - Point;

		// === FOV Punch ===
		if (WeaponData)
		{
			CurrentFOVOffset = WeaponData->FOVPunchAmount;
			FOVPunchElapsed = 0.f;
			bFOVPunchActive = true;
		}

		const float CM = WeaponData->CameraRecoilMultiplier;
		if (APawn* P = Cast<APawn>(GetOwner()))
		{
			if (APlayerController* PC = Cast<APlayerController>(P->GetController()))
			{
				PC->AddPitchInput(-PatternDelta.Y * CM);
				PC->AddYawInput(PatternDelta.X * CM);
			}
		}

		GetWorld()->GetTimerManager().ClearTimer(RecoilResetTimer);
		GetWorld()->GetTimerManager().SetTimer(
			RecoilResetTimer,
			this,
			&UWeaponComponent::ResetRecoilPattern,
			RecoilResetDelay,
			false
		);
	}

	// Visual Debug
	//const FColor LineColor = bHit ? FColor::Green : FColor::Red;
	//DrawDebugLine(GetWorld(), Start, ImpactPoint, LineColor, false, 1.0f, 0, 1.5f);

	if (bHit)
	{
		DrawDebugSphere(GetWorld(), ImpactPoint, 8.0f, 12, FColor::Yellow, false, 1.0f);
		UE_LOG(LogTemp, Log, TEXT("Hit Actor: %s at %s"), *Hit.GetActor()->GetName(), *ImpactPoint.ToString());
	}

	// Replay Recording
	if (UReplayRecorderComponent* Recorder = Owner->FindComponentByClass<UReplayRecorderComponent>())
	{
		Recorder->AddActionFlag(EReplayActionFlags::FiredWeapon);

		FRecordedShot NewShot;
		NewShot.ShotIndex = CurrentSprayIndex;
		NewShot.ViewLocation = ViewLocation;
		NewShot.ImpactLocation = ImpactPoint;
		NewShot.bHit = bHit;
		NewShot.ShotDirection = ShootDir.Rotation();
		NewShot.WeaponUsed = WeaponData;

		if (bHit && Hit.GetActor()->GetClass()->ImplementsInterface(UDamageableInterface::StaticClass()))
		{
			UE_LOG(LogTemp, Warning, TEXT("Hit Actor New Shot: %s at %s"), *Hit.GetActor()->GetName(), *ImpactPoint.ToString());

			if (ATemporalCharacter* Ghost = Cast<ATemporalCharacter>(Hit.GetActor()))
			{
				NewShot.HitGhostID = Ghost->GhostID;
			}
			NewShot.HitActor = Hit.GetActor();
			NewShot.HitBoneName = Hit.BoneName;
		}

		Recorder->CaptureShotData(NewShot);
	}

	// Apply Damage
	if (bHit && Hit.GetActor() && Hit.GetActor()->GetClass()->ImplementsInterface(UDamageableInterface::StaticClass()))
	{
		FDamageInfo DamageInfo;
		DamageInfo.DamageAmount = WeaponData->Damage;
		DamageInfo.Instigator = Owner;
		DamageInfo.HitLocation = ImpactPoint;
		DamageInfo.ShotDirection = ShootDir;
		DamageInfo.DamageType = WeaponData->DamageType;
		DamageInfo.HitBoneName = Hit.BoneName;

		if (Hit.BoneName == FName("head"))
		{
			DamageInfo.DamageTags.AddTag(TAG_Damage_Critical);
			DamageInfo.DamageTags.AddTag(TAG_Damage_Headshot);
		}

		IDamageableInterface::Execute_TakeDamage(Hit.GetActor(), DamageInfo);

	}

	// Mark that we're shooting (for visual crosshair expansion)
	bIsShooting = true;
	ShootingCooldownTimer = 0.2f;

	// Increase bloom
	if (WeaponData)
	{
		CurrentSpread += WeaponData->FireSpread;
		CurrentSpread = FMath::Clamp(CurrentSpread, WeaponData->MinSpread, WeaponData->MaxSpread);

		UE_LOG(LogTemp, Log, TEXT("Current Spread: %.2f"), CurrentSpread);
	}

	if (!WeaponData->bInfiniteMag)
	{
		CurrentMagAmmo--;
	}

	CachedHUD->UpdateAmmoDisplay(CurrentMagAmmo, CurrentReserveAmmo);

	CurrentSprayIndex++; // Advance index per shot

	// Clamp to stay within the spray pattern length (Loops back to start)
	if (WeaponData && WeaponData->SprayPattern.Num() > 0)
	{
		CurrentSprayIndex = CurrentSprayIndex % WeaponData->SprayPattern.Num();
	}

	LastFireTime = GetWorld()->GetTimeSeconds();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ResetRecoilPattern</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reset the recoil pattern to its starting index.</span>
    </summary>

    <p>Reset the recoil pattern to its starting index.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 590–596)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::ResetRecoilPattern()
{
	// Reset your current recoil index or logic here
	CurrentSprayIndex = 0;

	UE_LOG(LogTemp, Log, TEXT("Recoil pattern reset."));
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>StartFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Begin continuous fire (for automatic weapons).</span>
    </summary>

    <p>Begin continuous fire (for automatic weapons).</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 598–616)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::StartFiring()
{
	bWantsToFire = true;
	bIsFiring = true;
	ShootingCooldownTimer = 0.2f; // Reset cooldown

	if (!WeaponData) return;

	// Immediately fire once for responsiveness (especially semi-auto)
	FireWeapon();
	

	// Reset accumulator so auto-fire starts clean
	FireAccumulator = 0.0f;
	bHasFiredThisPress = true;

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>StopFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Cease continuous fire.</span>
    </summary>

    <p>Cease continuous fire.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 618–626)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::StopFiring()
{
	bWantsToFire = false;
	bIsFiring = false;
	bHasFiredThisPress = false;

	// Reset accumulator to avoid unintended carry-over
	FireAccumulator = 0.0f;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>HandleAutomaticFire</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called on each tick to handle automatic fire logic when [StartFiring()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a66deae0daed8099b90eb3c55943aa587) has been invoked.</span>
    </summary>

    <p>Called on each tick to handle automatic fire logic when [StartFiring()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component_1a66deae0daed8099b90eb3c55943aa587) has been invoked.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 628–633)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::HandleAutomaticFire()
{
	if (!bIsFiring || !WeaponData) return;

	FireWeapon();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ReloadWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reload the weapon's clip if reserve ammo is available.</span>
    </summary>

    <p>Reload the weapon's clip if reserve ammo is available.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 635–644)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::ReloadWeapon()
{
	if (bIsReloading || !WeaponData) return;

	const int32 Needed = WeaponData->MagSize - CurrentMagAmmo;
	if (Needed <= 0 || CurrentReserveAmmo <= 0) return;

	bIsReloading = true;
	GetWorld()->GetTimerManager().SetTimer(ReloadTimer, this, &UWeaponComponent::FinishReloading, WeaponData->bInstantReload ? 0.001f : WeaponData->ReloadDuration, false);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>FinishReloading</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Finalize the reload, updating clip and reserve ammo counts.</span>
    </summary>

    <p>Finalize the reload, updating clip and reserve ammo counts.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 645–665)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::FinishReloading()
{
	if (!WeaponData || !CachedHUD.IsValid()) return;

	const int32 Needed = WeaponData->MagSize - CurrentMagAmmo;
	const int32 ToReload = FMath::Min(Needed, CurrentReserveAmmo);

	CurrentMagAmmo += ToReload;

	if (!WeaponData->bInfiniteAmmo)
	{
		CurrentReserveAmmo -= ToReload;
	}

	CachedHUD->UpdateAmmoDisplay(CurrentMagAmmo, CurrentReserveAmmo);

	bIsReloading = false;

	UE_LOG(LogTemp, Log, TEXT("Reloaded %d bullets. Clip: %d / Reserve: %d"), ToReload, CurrentMagAmmo, CurrentReserveAmmo);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetCrosshairOffset</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieve the current pixel offset used by the crosshair.</span>
    </summary>

    <p>Retrieve the current pixel offset used by the crosshair.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 260–265)
  </p>

  <ExpandableCodeBlock code={`float UWeaponComponent::GetCrosshairOffset() const
{
	// Converts spread (degrees) to pixels � tune this multiplier!
	const float PixelMultiplier = 8.0f;
	return CurrentSpread * PixelMultiplier;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetGameHUDWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Assign the main HUD widget once the player controller has initialized it.</span>
    </summary>

    <p>Assign the main HUD widget once the player controller has initialized it.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>* InHUD</code> – Reference to the player's HUD widget.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 267–270)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::SetGameHUDWidget(UGameHUDWidget* InHUD)
{
	CachedHUD = InHUD;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetCrosshairWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Provide the crosshair widget for dynamic spread updates.</span>
    </summary>

    <p>Provide the crosshair widget for dynamic spread updates.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>* InWidget</code> – The crosshair UI widget instance.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 272–281)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::SetCrosshairWidget(UCrosshairWidget* InWidget)
{
	CrosshairWidgetRef = InWidget;

	// Do one immediate update to lay down the crosshair
	if (IsValid(InWidget))
	{
		UpdateCrosshairSpread(0.f);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetHitmarkerWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Provide the hitmarker widget to display impacts.</span>
    </summary>

    <p>Provide the hitmarker widget to display impacts.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>* InWidget</code> – The hitmarker UI widget instance.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 283–286)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::SetHitmarkerWidget(UHitmarkerWidget* InWidget)
{
	HitmarkerWidgetRef = InWidget;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetCurrentSpread</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns the current spread value (degrees) for UI or recoil logic.</span>
    </summary>

    <p>Returns the current spread value (degrees) for UI or recoil logic.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.h</code>
    (lines 150–150)
  </p>

  <ExpandableCodeBlock code={`	float GetCurrentSpread() const { return CurrentSpread; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetAmmoCounts</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query the current ammo counts.</span>
    </summary>

    <p>Query the current ammo counts.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>int32 & OutClip</code> – Receives the number of rounds in the clip.</li>
        <li><code>int32 & OutReserve</code> – Receives the number of rounds in reserve.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 288–292)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::GetAmmoCounts(int32& OutClip, int32& OutReserve) const
{
	OutClip = CurrentMagAmmo;
	OutReserve = CurrentReserveAmmo;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetWeaponData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Switch to a different weapon data asset at runtime.</span>
    </summary>

    <p>Switch to a different weapon data asset at runtime.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>* NewWeaponData</code> – The new weapon configuration asset.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 294–343)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::SetWeaponData(UWeaponDataAsset* NewWeaponData)
{
	if (!NewWeaponData)
	{
		UE_LOG(LogTemp, Warning, TEXT("SetWeaponData: NewWeaponData is null!"));
		return;
	}

	// Save current weapon ammo
	if (WeaponData)
	{
		AmmoMap.FindOrAdd(WeaponData) = { CurrentMagAmmo, CurrentReserveAmmo };
	}

	WeaponData = NewWeaponData;

	// Load ammo for the new weapon
	FWeaponAmmoData* Stored = AmmoMap.Find(WeaponData);
	if (Stored)
	{
		CurrentMagAmmo = Stored->CurrentAmmo;
		CurrentReserveAmmo = Stored->ReserveAmmo;
	}
	else
	{
		// First time equipping this weapon
		CurrentMagAmmo = WeaponData->MagSize;
		CurrentReserveAmmo = WeaponData->MaxReserveAmmo;
	}
	
	if (CrosshairWidgetRef.IsValid() && CachedHUD.IsValid())
	{
		CachedHUD->UpdateAmmoDisplay(CurrentMagAmmo, CurrentReserveAmmo);
	}
	else
	{
		if (!CrosshairWidgetRef.IsValid())
			UE_LOG(LogTemp, Warning, TEXT("SetWeaponData: CrosshairWidget is not valid!"));

		if (!CachedHUD.IsValid())
			UE_LOG(LogTemp, Warning, TEXT("SetWeaponData: CachedHUD is not valid!"));
	}

	CurrentSprayIndex = 0;
	UE_LOG(LogTemp, Log, TEXT("Weapon data set: %s"), *WeaponData->GetName());

	UE_LOG(LogTemp, Log, TEXT("Weapon: %s | Ammo: %d / %d"),
		*WeaponData->GetName(), CurrentMagAmmo, CurrentReserveAmmo);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts; initializes ammo and HUD references.</span>
    </summary>

    <p>Called when the game starts; initializes ammo and HUD references.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 37–82)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::BeginPlay()
{
	Super::BeginPlay();

	SetComponentTickEnabled(true);
	PrimaryComponentTick.bStartWithTickEnabled = true;

	CachedCharacter = Cast<ATACharacter>(GetOwner());
	if (!CachedCharacter)
	{
		UE_LOG(LogTemp, Error, TEXT("WeaponComponent: Could not cast owner to ATACharacter."));
	}

	if (WeaponData)
	{
		CurrentMagAmmo = WeaponData->MagSize;
		CurrentReserveAmmo = WeaponData->MaxReserveAmmo;
	}

	if (!CachedHUD.IsValid())
	{
		UE_LOG(LogTemp, Warning, TEXT("BeginPlay: No HUD widget assigned!"));
		if (APlayerController* PC = Cast<APlayerController>(Cast<APawn>(GetOwner())->GetController()))
		{
			if (AGameHUD* GameHUD = Cast<AGameHUD>(PC->GetHUD()))
			{
				CachedHUD = GameHUD->GetHUDWidget();
				UE_LOG(LogTemp, Log, TEXT("BeginPlay: Retrieved HUD widget from GameHUD."));
			}
			else
			{
				UE_LOG(LogTemp, Error, TEXT("BeginPlay: No GameHUD found for owner!"));
			}
		}
		else
		{
			UE_LOG(LogTemp, Error, TEXT("BeginPlay: No PlayerController found for owner!"));
		}
	}

	if (CachedHUD.IsValid() && WeaponData)
	{
		CachedHUD->UpdateAmmoDisplay(CurrentMagAmmo, CurrentReserveAmmo);
	}
	
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>TickComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Per-frame update.</span>
    </summary>

    <p>Per-frame update.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 84–188)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	UCrosshairWidget* Widget = CrosshairWidgetRef.Get();
	if (!IsValid(Widget) || !CachedCharacter || !WeaponData)
	{
		//SetComponentTickEnabled(false);
		return;
	}

	if (!CachedHUD.IsValid())
	{
		UE_LOG(LogTemp, Warning, TEXT("FireWeapon: No HUD widget assigned!"));
		if (APlayerController* PC = Cast<APlayerController>(GetOwner()->GetInstigatorController()))
		{
			if (AGameHUD* GameHUD = Cast<AGameHUD>(PC->GetHUD()))
			{
				CachedHUD = GameHUD->GetHUDWidget();
				UE_LOG(LogTemp, Log, TEXT("FireWeapon: Retrieved HUD widget from GameHUD."));
			}
		}
	}

	UpdateCrosshairSpread(DeltaTime);

	// === Only handle firing logic if allowed ===
	// === Only handle auto-fire logic ===
	if (WeaponData && bIsFiring && bWantsToFire && WeaponData->bIsAutomatic)
	{
		const float FireInterval = 60.0f / WeaponData->FireRate;
		const float CurrentTime = GetWorld()->GetTimeSeconds();

		float SimulatedTime = LastFireTime;
		int32 MaxShotsPerFrame = 10;
		int32 SubShotIndex = 0;

		while ((SimulatedTime + FireInterval) <= CurrentTime && SubShotIndex < MaxShotsPerFrame)
		{
			SimulatedTime += FireInterval;
			FireWeapon(SubShotIndex, SimulatedTime);
			SubShotIndex++;
		}

		LastFireTime = SimulatedTime;
	}

	if (bIsShooting)
	{
		ShootingCooldownTimer -= DeltaTime;
		if (ShootingCooldownTimer <= 0.f)
		{
			bIsShooting = false;
		}
	}

	// Recover spread
	if (!bIsFiring && WeaponData && CurrentSpread > WeaponData->MinSpread)
	{
		CurrentSpread -= WeaponData->SpreadRecoveryRate * DeltaTime;
		CurrentSpread = FMath::Max(CurrentSpread, WeaponData->MinSpread);
	}

	// Push to crosshair
	if (CrosshairWidgetRef.IsValid() && WeaponData)
	{
		const float SpreadPixelsPerDegree = 8.0f; // tweak this as needed
		float PixelOffset = CurrentSpread * SpreadPixelsPerDegree;

		CrosshairWidgetRef->SetCrosshairOffset(PixelOffset);
	}

	// === FOV PUNCH ===
	if (APawn* Pawn = Cast<APawn>(GetOwner()))
	{
		if (APlayerController* PC = Cast<APlayerController>(Pawn->GetController()))
		{
			if (PC->PlayerCameraManager)
			{
				const float DefaultFOV = PC->PlayerCameraManager->DefaultFOV;

				if (bFOVPunchActive)
				{
					FOVPunchElapsed += DeltaTime;
					const float Alpha = FMath::Clamp(FOVPunchElapsed / FOVPunchDuration, 0.f, 1.f);
					const float EaseAlpha = FMath::InterpEaseOut(1.f, 0.f, Alpha, FOVEaseExponent); // goes from 1 -> 0
					const float NewFOV = DefaultFOV + (CurrentFOVOffset * EaseAlpha);

					PC->PlayerCameraManager->SetFOV(NewFOV);

					if (Alpha >= 1.f)
					{
						// Done easing back
						bFOVPunchActive = false;
						CurrentFOVOffset = 0.f;
						FOVPunchElapsed = 0.f;
						PC->PlayerCameraManager->SetFOV(DefaultFOV);
					}
				}
			}
		}
	}

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>InitializeComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called once the component is registered; ensures any Blueprint wiring occurs.</span>
    </summary>

    <p>Called once the component is registered; ensures any Blueprint wiring occurs.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 190–211)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::InitializeComponent()
{
	Super::InitializeComponent();

	UE_LOG(LogTemp, Log, TEXT("InitializeComponent: %s"), *GetName());

	// Force C++ defaults *after* any Blueprint wiring
	PrimaryComponentTick.bCanEverTick = true;
	PrimaryComponentTick.bStartWithTickEnabled = true;
	SetComponentTickEnabled(true);

	UE_LOG(LogTemp, Log, TEXT(
		"InitializeComponent: bCanEverTick=%d  bStartWithTickEnabled=%d  IsTickEnabled=%d"
	),
		PrimaryComponentTick.bCanEverTick,
		PrimaryComponentTick.bStartWithTickEnabled,
		PrimaryComponentTick.IsTickFunctionEnabled()
	);

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CanFire</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Checks whether the weapon can currently fire.</span>
    </summary>

    <p>Checks whether the weapon can currently fire.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 213–230)
  </p>

  <ExpandableCodeBlock code={`bool UWeaponComponent::CanFire() const
{
	if (!WeaponData || !GetWorld() || bIsReloading)
		return false;

	if (CurrentMagAmmo <= 0)
	{
		if (WeaponData->bAutoReload && CurrentReserveAmmo > 0)
		{
			// Auto-reload if enabled and reserve ammo is available
			CachedCharacter->HandleReload();
			return false; // Can't fire while reloading
		}
		return false; // No ammo in mag and not reloading
	}

	return true;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>UpdateCrosshairSpread</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Adjusts the player's crosshair spread based on movement, firing, and reload state.</span>
    </summary>

    <p>Adjusts the player's crosshair spread based on movement, firing, and reload state.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float DeltaTime</code> – Time since last tick.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponComponent.cpp</code>
    (lines 232–257)
  </p>

  <ExpandableCodeBlock code={`void UWeaponComponent::UpdateCrosshairSpread(float DeltaTime)
{
	if (!CrosshairWidgetRef.IsValid() || !CachedCharacter || !WeaponData) return;

	TargetSpread = WeaponData->IdleSpread;

	if (CachedCharacter->bIsMoving)
		TargetSpread += WeaponData->WalkSpread;

	if (CachedCharacter->bIsAirborne)
		TargetSpread += WeaponData->AirborneSpread;

	if (CachedCharacter->bIsJumping)
		TargetSpread += WeaponData->JumpSpread;

	if (bIsReloading)
		TargetSpread += WeaponData->ReloadingSpread;

	if (bIsShooting)
		TargetSpread += WeaponData->FireSpread;

	CurrentSpread = FMath::FInterpTo(CurrentSpread, TargetSpread, DeltaTime, WeaponData->SpreadRecoveryRate);

	const float PixelsPerUnit = 8.0f;
	CrosshairWidgetRef->SetCrosshairOffset(CurrentSpread * PixelsPerUnit);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WeaponData</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Data asset defining weapon parameters: damage, fire rate, spread, etc.</span>
    </summary>

    <p>Data asset defining weapon parameters: damage, fire rate, spread, etc.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RecoilResetDelay</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Seconds after stopping fire before recoil pattern resets.</span>
    </summary>

    <p>Seconds after stopping fire before recoil pattern resets.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RecoilRecoverySpeed</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Speed at which recoil recovers (higher = faster).</span>
    </summary>

    <p>Speed at which recoil recovers (higher = faster).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RecoilInterpSpeed</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Interpolation speed for visual recoil easing.</span>
    </summary>

    <p>Interpolation speed for visual recoil easing.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RecoveryStrength</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Degrees/sec strength to recover back to initial aim.</span>
    </summary>

    <p>Degrees/sec strength to recover back to initial aim.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FOVPunchDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Duration of the field-of-view punch effect (seconds).</span>
    </summary>

    <p>Duration of the field-of-view punch effect (seconds).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FOVEaseExponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Exponent for easing the FOV punch (higher = snappier start).</span>
    </summary>

    <p>Exponent for easing the FOV punch (higher = snappier start).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CurrentMagAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current ammo loaded in the magazine.</span>
    </summary>

    <p>Current ammo loaded in the magazine.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CurrentReserveAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current reserve ammo count.</span>
    </summary>

    <p>Current reserve ammo count.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsReloading</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">True while a reload sequence is in progress.</span>
    </summary>

    <p>True while a reload sequence is in progress.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CrosshairWidgetRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Weak reference to the crosshair widget for UI updates.</span>
    </summary>

    <p>Weak reference to the crosshair widget for UI updates.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>HitmarkerWidgetRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Weak reference to the hitmarker widget for UI updates.</span>
    </summary>

    <p>Weak reference to the hitmarker widget for UI updates.</p>

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

<!-- block -->

<details>
<summary>
  📘 Class `UWeaponInventoryComponent`
    <span class="brief-description-pill">Manages the collection of weapons a character owns and handles switching, cycling, and initialization.</span>
</summary>
<!-- block -->

# Class `UWeaponInventoryComponent` 

<!-- block -->

> This component maintains an inventory of [UWeaponDataAsset](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Gameplay_Data_Assets.md#class_u_weapon_data_asset) entries, equips a selected weapon via the associated [UWeaponComponent](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_component), and provides Blueprint-callable methods to switch or cycle weapons.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UWeaponInventoryComponent
  : public UActorComponent
```

</details>

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
      🧠 <code>UWeaponInventoryComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructs the component and initializes default settings.</span>
    </summary>

    <p>Constructs the component and initializes default settings.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 8–15)
  </p>

  <ExpandableCodeBlock code={`UWeaponInventoryComponent::UWeaponInventoryComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = false;

	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SwitchToWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Switches to the weapon at the specified slot index.</span>
    </summary>

    <p>Switches to the weapon at the specified slot index.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>int32 Index</code> – Index into  to equip. Does nothing if Index is invalid.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 62–79)
  </p>

  <ExpandableCodeBlock code={`void UWeaponInventoryComponent::SwitchToWeapon(int32 Index)
{
	if (!WeaponComponentRef || !WeaponInventory.IsValidIndex(Index)) return;

	if (WeaponInventory.Num() == 0)
	{
		UE_LOG(LogTemp, Error, TEXT("[%s] Tried to switch weapon, but WeaponList is empty!"), *GetName());
		return;
	}

	UWeaponDataAsset* NewWeapon = WeaponInventory[Index].LoadSynchronous();
	if (!NewWeapon) return;

	AssignWeaponToComponent(NewWeapon);
	CurrentWeaponIndex = Index;

	UE_LOG(LogTemp, Log, TEXT("Switched to weapon index %d: %s"), Index, *NewWeapon->GetName());
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CycleWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Advances to the next weapon in [WeaponInventory](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e), wrapping to the start.</span>
    </summary>

    <p>Advances to the next weapon in [WeaponInventory](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e), wrapping to the start.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 81–97)
  </p>

  <ExpandableCodeBlock code={`void UWeaponInventoryComponent::CycleWeapon()
{
	if (WeaponInventory.Num() == 0)
	{
		UE_LOG(LogTemp, Error, TEXT("[WeaponInventory] Weapon list is empty! Cannot cycle weapons."));
		return;
	}

	if (WeaponComponentRef->bIsReloading)
	{
		UE_LOG(LogTemp, Warning, TEXT("[WeaponInventory] Cannot switch weapons while reloading."));
		return;
	}

	const int32 NextIndex = (CurrentWeaponIndex + 1) % WeaponInventory.Num();
	SwitchToWeapon(NextIndex);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>InitializeInventory</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Immediately loads and equips the default weapon asset.</span>
    </summary>

    <p>Immediately loads and equips the default weapon asset.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 24–39)
  </p>

  <ExpandableCodeBlock code={`void UWeaponInventoryComponent::InitializeInventory()
{
	UE_LOG(LogTemp, Log, TEXT("[%s] Initializing weapon inventory..."), *GetName());

	// Use our new getter to load the default
	UWeaponDataAsset* DefaultData = GetWeaponDataByIndex(DefaultWeaponIndex);
	if (DefaultData)
	{
		AssignWeaponToComponent(DefaultData);
		CurrentWeaponIndex = DefaultWeaponIndex;
	}
	else
	{
		UE_LOG(LogTemp, Error, TEXT("[%s] Failed to load default weapon at index %d!"), *GetName(), DefaultWeaponIndex);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>InitializeInventoryNextTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Schedules [InitializeInventory](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1a95e9914bb807c3488fa05a1283fa150e) to run on the next tick instead of immediately.</span>
    </summary>

    <p>Schedules [InitializeInventory](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1a95e9914bb807c3488fa05a1283fa150e) to run on the next tick instead of immediately.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 41–53)
  </p>

  <ExpandableCodeBlock code={`void UWeaponInventoryComponent::InitializeInventoryNextTick()
{
	if (UWorld* World = GetWorld())
	{
		// clear any previous pending call
		World->GetTimerManager().ClearTimer(DeferredInitHandle);

		// schedule InitializeInventory() for the next frame
		World->GetTimerManager().SetTimerForNextTick(
			FTimerDelegate::CreateUObject(this, &UWeaponInventoryComponent::InitializeInventory)
		);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetWeaponDataByIndex</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves the weapon data asset at the given slot.</span>
    </summary>

    <p>Retrieves the weapon data asset at the given slot.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>int32 Index</code> – Slot index in .</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 55–60)
  </p>

  <ExpandableCodeBlock code={`UWeaponDataAsset* UWeaponInventoryComponent::GetWeaponDataByIndex(int32 Index) const
{
	if (!WeaponInventory.IsValidIndex(Index)) return nullptr;
	// Load synchronously here; switch to async if you need streaming
	return WeaponInventory[Index].LoadSynchronous();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts; sets up initial state.</span>
    </summary>

    <p>Called when the game starts; sets up initial state.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code>
    (lines 19–22)
  </p>

  <ExpandableCodeBlock code={`void UWeaponInventoryComponent::BeginPlay()
{
	Super::BeginPlay();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WeaponInventory</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">All weapon assets this character owns.</span>
    </summary>

    <p>All weapon assets this character owns.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>CurrentWeaponIndex</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Index of the currently equipped weapon in [WeaponInventory](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e).</span>
    </summary>

    <p>Index of the currently equipped weapon in [WeaponInventory](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WeaponComponentRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Reference to the character's weapon component used for equipping.</span>
    </summary>

    <p>Reference to the character's weapon component used for equipping.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>DefaultWeaponIndex</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Slot index to auto-equip on initialization.</span>
    </summary>

    <p>Slot index to auto-equip on initialization.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>DeferredInitHandle</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Timer handle for deferred inventory initialization via [InitializeInventoryNextTick](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1ad8a966f1a82ce07364926fb5104af05b).</span>
    </summary>

    <p>Timer handle for deferred inventory initialization via [InitializeInventoryNextTick](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Modular_Components.md#class_u_weapon_inventory_component_1ad8a966f1a82ce07364926fb5104af05b).</p>

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

<!-- block -->

<details>
<summary>
  📘 Class `FWeaponAmmoData`
    <span class="brief-description-pill">Tracks the ammo counts in the weapon's clip and its reserve.</span>
</summary>
<!-- block -->

# Class `FWeaponAmmoData` 

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
      🧠 <code>CurrentAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current number of rounds in the clip.</span>
    </summary>

    <p>Current number of rounds in the clip.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>ReserveAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Number of rounds available in reserve.</span>
    </summary>

    <p>Number of rounds available in reserve.</p>

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
