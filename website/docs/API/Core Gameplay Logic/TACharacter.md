---
title: "📄 File: TACharacter.h"
slug: /API/_t_a_character_8h
---

# 📄 File: `TACharacter.h`

> Declares the primary player character class for Temporal Targets.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [ATACharacter](#class_a_t_a_character) class, which is the main player-controlled character. It implements core gameplay interfaces and systems:

* Interaction via [IBPI_Interactable](#class_i_b_p_i___interactable)

* Damage handling via [IDamageableInterface](#class_i_damageable_interface)

* Input binding for combat and interaction using the Enhanced Input System

* Weapon handling and inventory management via dedicated components

* Ghost replay recording with [UReplayRecorderComponent](#class_u_replay_recorder_component)

* Real-time combat behavior with [UWeaponComponent](#class_u_weapon_component)

[Core Gameplay Logic](#group___game___logic)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `ATACharacter`
  <span class="brief-description-pill">The main Player-controlled character for Temporal Targets.</span>
</summary>

> [ATACharacter](#class_a_t_a_character) implements core gameplay behavior:

* Interactable interface ([IBPI_Interactable](#class_i_b_p_i___interactable))

* Damageable interface ([IDamageableInterface](#class_i_damageable_interface))

* Weapon Input handling ([StartFiring](#class_a_t_a_character_1a9a11c73ee847ca8b9044b743f8546eaa), [HandleSwitchWeapon](#class_a_t_a_character_1a2e0c752c342bae3c9440ee782c5a41b4), [HandleReload](#class_a_t_a_character_1a5f3a7acaee16dd379c919c2e90beef42))

* Replay recording ([ReplayRecorder](#class_a_t_a_character_1ae55321ef89f0bcf840071cd5d06ca0ee))

* Custom input bindings for interaction, shooting, reloading, and weapon cycling.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>ATACharacter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets default values for this character's properties.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 17–30)</p>
    <ExpandableCodeBlock code={`ATACharacter::ATACharacter()
{
 	// Set this character to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

	InteractionComponent = CreateDefaultSubobject<UInteractionComponent>(TEXT("InteractionComponent"));
	ReplayRecorder = CreateDefaultSubobject<UReplayRecorderComponent>(TEXT("ReplayRecorder"));
	WeaponComponent = CreateDefaultSubobject<UWeaponComponent>(TEXT("WeaponComponent"));
	WeaponInventoryComponent = CreateDefaultSubobject<UWeaponInventoryComponent>(TEXT("WeaponInventoryComponent"));
	DamageComponent = CreateDefaultSubobject<UDamageableComponent>(TEXT("DamageComponent"));

}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>RegisterInteractable_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactable</code> – The actor to register for interaction.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 154–160)</p>
    <ExpandableCodeBlock code={`void ATACharacter::RegisterInteractable_Implementation(AActor* Interactable)
{
	if (InteractionComponent && Interactable)
	{
		InteractionComponent->AddRegisteredInteractable(Interactable);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>UnregisterInteractable_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactable</code> – The actor to unregister.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 162–168)</p>
    <ExpandableCodeBlock code={`void ATACharacter::UnregisterInteractable_Implementation(AActor* Interactable)
{
	if (InteractionComponent && Interactable)
	{
		InteractionComponent->RemoveRegisteredInteractable(Interactable);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>Interact_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor initiating the interaction.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 170–172)</p>
    <ExpandableCodeBlock code={`void ATACharacter::Interact_Implementation(AActor* Interactor)
{
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>CanInteract_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * Interactor</code> – The actor requesting permission.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 174–177)</p>
    <ExpandableCodeBlock code={`bool ATACharacter::CanInteract_Implementation(AActor* Interactor)
{
	return false;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>TakeDamage_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const  & DamageInfo</code> – Struct containing damage amount and instigator.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 179–189)</p>
    <ExpandableCodeBlock code={`void ATACharacter::TakeDamage_Implementation(const FDamageInfo& DamageInfo)
{
	if (UDamageableComponent* Damageable = FindComponentByClass<UDamageableComponent>())
	{
		Damageable->ApplyDamage(DamageInfo);
	}
	else
	{
		UE_LOG(LogTemp, Warning, TEXT("TACharacter: No DamageableComponent found."));
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnDamaged_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float NewHealth</code> – The character's health after damage applied.</li>
        <li><code>float DamageAmount</code> – The amount of health lost.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 191–196)</p>
    <ExpandableCodeBlock code={`void ATACharacter::OnDamaged_Implementation(float NewHealth, float DamageAmount)
{
	UE_LOG(LogTemp, Log, TEXT("[%s] Took %.1f damage. New Health: %.1f"), *GetNameSafe(this), DamageAmount, NewHealth);

	// TODO: Add damage flash, hit reaction, sound, etc.
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnKilled_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * DamageInstigator</code> – The actor responsible for the kill.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 198–240)</p>
    <ExpandableCodeBlock code={`void ATACharacter::OnKilled_Implementation(AActor* DamageInstigator)
{
	UE_LOG(LogTemp, Warning, TEXT("[%s] Killed by %s"), *GetNameSafe(this) , *GetNameSafe(DamageInstigator));

	if (ReplayRecorder)
	{
		// 1) Stop recording so no more frames get tacked on
		ReplayRecorder->StopRecording();

		// 2) Copy the recorded frames into a local variable
		const TArray<FPlayerFrameData> RecordedFrames = ReplayRecorder->GetRecordedData();

		// 3) Give that copy to the GameMode
		if (auto* GM = GetWorld()->GetAuthGameMode<ATemporalGameMode>())
		{
			GM->AddReplayData(RecordedFrames);
		}
	}

	// 1) Unpossess so the controller can spawn a new pawn
	if (AController* C = GetController())
	{
		C->UnPossess();
	}

	// 2) Play a ragdoll or death animation on the *mesh*, then detach it
	if (USkeletalMeshComponent* Skel = GetMesh())
	{
		Skel->SetCollisionProfileName(TEXT("Ragdoll"));
		Skel->SetSimulatePhysics(true);

		// Detach from the capsule so the actor can be destroyed
		Skel->DetachFromComponent(FDetachmentTransformRules::KeepWorldTransform);
	}

	// 3) Disable capsule so it doesn't block the respawn
	GetCapsuleComponent()->SetCollisionEnabled(ECollisionEnabled::NoCollision);
	GetCharacterMovement()->DisableMovement();

	// 4) *Immediately* destroy this actor so RestartPlayer will spawn a fresh one
	Destroy();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>Tick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called every frame.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float DeltaTime</code> – Time elapsed since last frame.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 66–79)</p>
    <ExpandableCodeBlock code={`void ATACharacter::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	// Update movement state booleans
	const FVector Velocity2D = GetVelocity();
	const bool bOnGround = GetCharacterMovement()->IsMovingOnGround();

	bIsAirborne = !bOnGround;

	bIsMoving = bOnGround && Velocity2D.SizeSquared2D() > 10.0f; // only counts as moving if grounded

	bIsJumping = !bOnGround && Velocity2D.Z > 0.0f; // optional: simple jump detection
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetupPlayerInputComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Binds functionality to input.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>class UInputComponent * PlayerInputComponent</code> – The input component to bind to.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 82–109)</p>
    <ExpandableCodeBlock code={`void ATACharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);

	if (UEnhancedInputComponent* EnhancedInput = Cast<UEnhancedInputComponent>(PlayerInputComponent))
	{
		if (InteractAction)
		{
			EnhancedInput->BindAction(InteractAction, ETriggerEvent::Started, this, &ATACharacter::HandleInteract);
		}

		if (ShootAction)
		{
			EnhancedInput->BindAction(ShootAction, ETriggerEvent::Started, this, &ATACharacter::StartFiring);
			EnhancedInput->BindAction(ShootAction, ETriggerEvent::Completed, this, &ATACharacter::StopFiring);
		}

		if (SwitchWeaponAction)
		{
			EnhancedInput->BindAction(SwitchWeaponAction, ETriggerEvent::Started, this, &ATACharacter::HandleSwitchWeapon);
		}
		if (ReloadAction)
		{
			EnhancedInput->BindAction(ReloadAction, ETriggerEvent::Started, this, &ATACharacter::HandleReload);
		}
	}

}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleInteract</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Input handler for interaction action.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const FInputActionInstance & Instance</code> – The input action instance data.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 111–120)</p>
    <ExpandableCodeBlock code={`void ATACharacter::HandleInteract(const FInputActionInstance& Instance)
{
	UE_LOG(LogTemp, Warning, TEXT("Interacting!"));

	if (InteractionComponent)
	{
		InteractionComponent->Interact();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>StartFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Begin firing the equipped weapon.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 122–128)</p>
    <ExpandableCodeBlock code={`void ATACharacter::StartFiring()
{
	if (WeaponComponent)
	{
		WeaponComponent->StartFiring();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>StopFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Stop firing the weapon.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 130–136)</p>
    <ExpandableCodeBlock code={`void ATACharacter::StopFiring()
{
	if (WeaponComponent)
	{
		WeaponComponent->StopFiring();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleSwitchWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Switch to the next weapon in inventory.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 138–144)</p>
    <ExpandableCodeBlock code={`void ATACharacter::HandleSwitchWeapon()
{
	if (WeaponInventoryComponent)
	{
		WeaponInventoryComponent->CycleWeapon();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleReload</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reload the currently equipped weapon.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 146–152)</p>
    <ExpandableCodeBlock code={`void ATACharacter::HandleReload()
{
	if (WeaponComponent)
	{
		WeaponComponent->ReloadWeapon();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts or when spawned.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 33–44)</p>
    <ExpandableCodeBlock code={`void ATACharacter::BeginPlay()
{
	Super::BeginPlay();

	if (APlayerController* PC = Cast<APlayerController>(Controller))
	{
		if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PC->GetLocalPlayer()))
		{
			Subsystem->AddMappingContext(InputMappingContext, 0); // Priority 0 = default
		}
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>FellOutOfWorld</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Handle falling out of world (kill-zone).</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const UDamageType & dmgType</code> – The damage type inflicted by falling out of world.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TACharacter.cpp</code> (lines 46–63)</p>
    <ExpandableCodeBlock code={`void ATACharacter::FellOutOfWorld(const UDamageType& dmgType)
{

    // 1) If we're still "alive" in our component, apply fatal damage
    if (DamageComponent && DamageComponent->IsAlive())
    {
        FDamageInfo Info;
        Info.DamageAmount = DamageComponent->GetHealthPercent() * DamageComponent->MaxHealth;
        Info.DamageType   = dmgType.GetClass();
        Info.Instigator   = nullptr;

        DamageComponent->ApplyDamage(Info);
    }

	// 2) Now let the engine destroy this actor (ragdoll, cleanup, etc.)
	Super::FellOutOfWorld(dmgType);

}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>InteractAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for interacting with world objects.</span>
    </summary>
    <p>Input action for interacting with world objects.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ShootAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for shooting/fire.</span>
    </summary>
    <p>Input action for shooting/fire.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SwitchWeaponAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for cycling weapons.</span>
    </summary>
    <p>Input action for cycling weapons.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ReloadAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for reloading.</span>
    </summary>
    <p>Input action for reloading.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InputMappingContext</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Context mapping for enhanced input system.</span>
    </summary>
    <p>Context mapping for enhanced input system.</p>
  </details>
  <details>
    <summary>
      🧠 <code>InteractionComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component handling interactable detection and management.</span>
    </summary>
    <p>Component handling interactable detection and management.</p>
  </details>
  <details>
    <summary>
      🧠 <code>WeaponComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component responsible for weapon firing logic.</span>
    </summary>
    <p>Component responsible for weapon firing logic.</p>
  </details>
  <details>
    <summary>
      🧠 <code>WeaponInventoryComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component managing the player's weapon inventory.</span>
    </summary>
    <p>Component managing the player's weapon inventory.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ReplayRecorder</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component that records and replays player actions.</span>
    </summary>
    <p>Component that records and replays player actions.</p>
  </details>
  <details>
    <summary>
      🧠 <code>DamageComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component implementing damage tracking and health.</span>
    </summary>
    <p>Component implementing damage tracking and health.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsMoving</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether the character is currently moving on ground.</span>
    </summary>
    <p>Whether the character is currently moving on ground.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsAirborne</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether the character is in the air.</span>
    </summary>
    <p>Whether the character is in the air.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsJumping</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether the character is currently jumping.</span>
    </summary>
    <p>Whether the character is currently jumping.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
