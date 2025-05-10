---
title: "📄 File: DamageableComponent.h"
slug: /API/_damageable_component_8h
---

# 📄 File: `DamageableComponent.h`

> Declares a modular health and damage component for actors.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UDamageableComponent](#class_u_damageable_component) class and related types used to manage health, apply damage, and handle death events in a reusable way.

Key declarations:

* FDamageInfo: encapsulates context for damage events.

* UDamageableComponent: actor component for managing health and broadcasting damage/death.

* FOnDamageTakenSignature: delegate for notifying damage.

* FOnDeathSignature: delegate for notifying death.

[Modular Components](#group___modular___components)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `FDamageInfo`
  <span class="brief-description-pill">Context for a single damage event.</span>
</summary>

> @ ingroup Modular_Components

Carries details of a damage application: amount applied ([DamageAmount](#struct_f_damage_info_1a69348cf6516dc442d5a19748b19da88a)), instigator actor ([Instigator](#struct_f_damage_info_1ac535336844d61222eff607949d15bbf3)), impact location ([HitLocation](#struct_f_damage_info_1ac1ca2da67c66980c6e84d0e2b17503db)), shot direction ([ShotDirection](#struct_f_damage_info_1af650a9a95ddd715cc637dda7986e42d3)), damage type ([DamageType](#struct_f_damage_info_1a5b9dfd76d34f2f49ee518a06b2c2d66c)), hit bone ([HitBoneName](#struct_f_damage_info_1a732a2ce7f76045a4c908517e287505b9)), and any gameplay tags ([DamageTags](#struct_f_damage_info_1a7065ae4757d2317c59b998d4ec2afa1f)).

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
      🧠 <code>DamageAmount</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Amount of health to subtract.</span>
    </summary>
    <p>Amount of health to subtract.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Instigator</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Actor responsible for this damage.</span>
    </summary>
    <p>Actor responsible for this damage.</p>
  </details>
  <details>
    <summary>
      🧠 <code>HitLocation</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">World position where the hit occurred.</span>
    </summary>
    <p>World position where the hit occurred.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ShotDirection</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Direction of the incoming shot or attack.</span>
    </summary>
    <p>Direction of the incoming shot or attack.</p>
  </details>
  <details>
    <summary>
      🧠 <code>DamageType</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Class of damage inflicted (e.g.</span>
    </summary>
    <p>Class of damage inflicted (e.g.</p>
  </details>
  <details>
    <summary>
      🧠 <code>HitBoneName</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Name of the bone that was hit (if skeletal).</span>
    </summary>
    <p>Name of the bone that was hit (if skeletal).</p>
  </details>
  <details>
    <summary>
      🧠 <code>DamageTags</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Applied gameplay tags (for special effects or rules).</span>
    </summary>
    <p>Applied gameplay tags (for special effects or rules).</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `UDamageableComponent`
  <span class="brief-description-pill">Component that handles health, damage, and death for an actor.</span>
</summary>

> Manages health state, applies damage via [ApplyDamage()](#class_u_damageable_component_1a7c4abcb86c51c1eb39511494cfbee1bc), allows healing via [Heal()](#class_u_damageable_component_1aa66ec8aeace8315def60c8769219a172), and fires death logic in [HandleDeath()](#class_u_damageable_component_1adf368c5991d1e03392c160c3acd35b10).

Exposes events:

* OnDamageTaken: broadcast when damage is applied.

* OnDeath: broadcast once when the actor dies.

Tracks last damage details in [LastDamageInfo](#class_u_damageable_component_1a2f14c8b5c8ff5f3f8d3b2e6789e754e9) for UI or replay systems.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>UDamageableComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets default values and initializes health.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 11–18)</p>
    <ExpandableCodeBlock code={`UDamageableComponent::UDamageableComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = false;

	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ApplyDamage</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Apply incoming damage.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const  & DamageInfo</code> – Context of the damage event (see ).</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 30–57)</p>
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
  <details>
    <summary>
      🧠 <code>Heal</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Restore health by the specified amount, clamped to [MaxHealth](#class_u_damageable_component_1afc6f8e3d6c8bb8ee7856fc1dfd214b49).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float HealAmount</code> – Amount of health to recover.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 96–102)</p>
    <ExpandableCodeBlock code={`void UDamageableComponent::Heal(float HealAmount)
{
	if (bIsDead || HealAmount <= 0.f) return;

	CurrentHealth = FMath::Clamp(CurrentHealth + HealAmount, 0.f, MaxHealth);
	OnDamageTaken.Broadcast(CurrentHealth, -HealAmount);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>IsAlive</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query whether the actor is still alive.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 103–106)</p>
    <ExpandableCodeBlock code={`bool UDamageableComponent::IsAlive() const
{
	return !bIsDead;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetHealthPercent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the current health normalized between 0.0 and 1.0.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 108–111)</p>
    <ExpandableCodeBlock code={`float UDamageableComponent::GetHealthPercent() const
{
	return (MaxHealth > 0.f) ? (CurrentHealth / MaxHealth) : 0.f;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Initialize current health to MaxHealth at play start.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 22–28)</p>
    <ExpandableCodeBlock code={`void UDamageableComponent::BeginPlay()
{
	Super::BeginPlay();

	// Initialize health to max health at the start
	CurrentHealth = MaxHealth;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleDeath</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Central death handler that ensures death logic only fires once.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * InstigatorActor</code> – Actor responsible for the lethal damage.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 72–94)</p>
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
  <details>
    <summary>
      🧠 <code>BroadcastHitFeedback</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">HUD feedback helper: flashes hitmarker on the shooter's HUD.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/DamageableComponent.cpp</code> (lines 59–70)</p>
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

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>MaxHealth</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum health value (starting health and heal cap).</span>
    </summary>
    <p>Maximum health value (starting health and heal cap).</p>
  </details>
  <details>
    <summary>
      🧠 <code>bCanDie</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether this actor can die (if false, health bottoms out at 0 but no death).</span>
    </summary>
    <p>Whether this actor can die (if false, health bottoms out at 0 but no death).</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnDamageTaken</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when damage is applied; provides new health and damage amount.</span>
    </summary>
    <p>Broadcast when damage is applied; provides new health and damage amount.</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnDeath</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast on death; provides victim and instigator details.</span>
    </summary>
    <p>Broadcast on death; provides victim and instigator details.</p>
  </details>
  <details>
    <summary>
      🧠 <code>LastDamageInfo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Details of the most recent damage event for kill-cams or scoreboards.</span>
    </summary>
    <p>Details of the most recent damage event for kill-cams or scoreboards.</p>
  </details>
  <details>
    <summary>
      🧠 <code>CurrentHealth</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Current health value (0 to MaxHealth).</span>
    </summary>
    <p>Current health value (0 to MaxHealth).</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsDead</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">True once death logic has executed; prevents multiple death broadcasts.</span>
    </summary>
    <p>True once death logic has executed; prevents multiple death broadcasts.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
