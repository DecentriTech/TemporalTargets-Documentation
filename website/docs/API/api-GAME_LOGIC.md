---
id: Game_Logic
title: Game Logic
sidebar_label: Game Logic
slug: /API/Game_Logic
---

# 🗂️ Category: [Game Logic](/docs/API/Game_Logic)

> Classes that implement core gameplay systems like spawning, replay, and game flow.

<!-- block -->

<details open>
<summary>📦 Classes in This Category</summary>

<!-- block -->

<details>
<summary>🔹 [AOrbitSpectatorPawn](#AOrbitSpectatorPawn)</summary>

Pawn that smoothly orbits around the actor that killed the player.

<details>
<summary>📄 Description</summary>

On spawn, this pawn is initialized via [InitializeSpectator()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a042f83ca27a30c6510b1905153132a6b) with the [TargetActor](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a24c5e1186db9f8e8e7bf60993ea45405) (the killer) and [StartLocation](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a553f1235c13d69a4dcdd5309e76c9b01) (death spot). It then blends over [BlendTime](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a693da49425407f0e913d7e094cbaddba) seconds from the death spot toward the killer's location plus [TargetOffset](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1ab3ef177c965bc7ce3b40b92805eb2ab3). While blending finishes, it will automatically look at the killer unless free-look is engaged via [/OnRightClickReleased](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a6aca1b24b25674e136932f6f6e0893c7)().

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [ATACharacter](#ATACharacter)</summary>

The main Player-controlled character for Temporal Targets.

<details>
<summary>📄 Description</summary>

[ATACharacter](#class_a_t_a_character) implements core gameplay behavior:

* Interactable interface ([IBPI_Interactable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable))

* Damageable interface ([IDamageableInterface](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_damageable_interface))

* Weapon Input handling ([StartFiring](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1a9a11c73ee847ca8b9044b743f8546eaa), [HandleSwitchWeapon](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1a2e0c752c342bae3c9440ee782c5a41b4), [HandleReload](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1a5f3a7acaee16dd379c919c2e90beef42))

* Replay recording ([ReplayRecorder](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1ae55321ef89f0bcf840071cd5d06ca0ee))

* Custom input bindings for interaction, shooting, reloading, and weapon cycling.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [ATAPlayerController](#ATAPlayerController)</summary>

PlayerController that manages the player's HUD and spectator flow.

<details>
<summary>📄 Description</summary>

This controller spawns and owns either the live-player HUD or the spectator HUD widget, toggles between them on death/respawn, and updates any associated countdown timers.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [ATemporalAIController](#ATemporalAIController)</summary>

AIController for "ghost" TemporalCharacters during replay.

<details>
<summary>📄 Description</summary>

Inherits from AAIController. Overrides possession callbacks to log debug messages whenever it possesses or unpossesses a pawn.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [ATemporalCharacter](#ATemporalCharacter)</summary>

Ghost pawn that replays a player's recorded gameplay.

<details>
<summary>📄 Description</summary>

[ATemporalCharacter](#class_a_temporal_character) streams back recorded [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Replay_Data.md#struct_f_player_frame_data) frames, interpolating position, rotation, and velocity. It binds replay events (jump, fire, interact) to C++ handler methods, and exposes Blueprint-callable APIs for controlling replay (reset, query frames).

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [ATemporalGameMode](#ATemporalGameMode)</summary>

Game mode handling player respawning and ghost replay logic.

<details>
<summary>📄 Description</summary>

* Records the player's run into an array of [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Replay_Data.md#struct_f_player_frame_data) frames.

* Spawns ghost actors that reproduce previous runs ("replays").

* Exposes Blueprint utilities for clearing, registering and querying ghosts.

* Owns the respawn timer logic (instant vs delayed respawn controlled by [bPlayMode](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_temporal_game_mode_1a196e99b79778bd0d825457c33a27988c)).

</details>

</details>

<!-- block -->

</details>

<!-- block -->
<!-- block -->

<details>
<summary>
  📘 Class `AOrbitSpectatorPawn`
    <span class="brief-description-pill">Pawn that smoothly orbits around the actor that killed the player.</span>
</summary>
<!-- block -->

# Class `AOrbitSpectatorPawn` 

<!-- block -->

> On spawn, this pawn is initialized via [InitializeSpectator()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a042f83ca27a30c6510b1905153132a6b) with the [TargetActor](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a24c5e1186db9f8e8e7bf60993ea45405) (the killer) and [StartLocation](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a553f1235c13d69a4dcdd5309e76c9b01) (death spot). It then blends over [BlendTime](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a693da49425407f0e913d7e094cbaddba) seconds from the death spot toward the killer's location plus [TargetOffset](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1ab3ef177c965bc7ce3b40b92805eb2ab3). While blending finishes, it will automatically look at the killer unless free-look is engaged via [/OnRightClickReleased](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_orbit_spectator_pawn_1a6aca1b24b25674e136932f6f6e0893c7)().

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class AOrbitSpectatorPawn
  : public ASpectatorPawn
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
      🧠 <code>AOrbitSpectatorPawn</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor.</span>
    </summary>

    <p>Constructor.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code>
    (lines 10–22)
  </p>

  <ExpandableCodeBlock code={`AOrbitSpectatorPawn::AOrbitSpectatorPawn()
{
 	// Set this pawn to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

    SpringArm = CreateDefaultSubobject<USpringArmComponent>("SpringArm");
    SpringArm->SetupAttachment(RootComponent);
    SpringArm->TargetArmLength = 0.f;
    SpringArm->bEnableCameraLag = false;

    Camera = CreateDefaultSubobject<UCameraComponent>("Camera");
    Camera->SetupAttachment(SpringArm);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>InitializeSpectator</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets up the pawn after spawn.</span>
    </summary>

    <p>Sets up the pawn after spawn.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * KillerActor</code> – Actor that killed the player (stored in ).</li>
        <li><code>FVector DeathLocation</code> – World position where the player died (stored in ).</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code>
    (lines 24–30)
  </p>

  <ExpandableCodeBlock code={`void AOrbitSpectatorPawn::InitializeSpectator(AActor* KillerActor, FVector DeathLocation)
{
    TargetActor = KillerActor;
    StartLocation = DeathLocation;
    ElapsedTime = 0.f;
    SetActorLocation(StartLocation);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Tick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called each frame to update blend and look-at logic.</span>
    </summary>

    <p>Called each frame to update blend and look-at logic.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float DeltaSeconds</code> – Time (in seconds) since the last  call.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code>
    (lines 33–55)
  </p>

  <ExpandableCodeBlock code={`void AOrbitSpectatorPawn::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
    if (!TargetActor) return;

    // 1) Blend from death spot -> killer + offset
    if (ElapsedTime < BlendTime)
    {
        ElapsedTime += DeltaTime;
        float Alpha = FMath::Clamp(ElapsedTime / BlendTime, 0.f, 1.f);
        FVector Desired = TargetActor->GetActorLocation() + TargetOffset;
        SetActorLocation(FMath::Lerp(StartLocation, Desired, Alpha));
    }

    // 2) Auto-look at killer unless free-looking
    if (!bRightClickDown)
    {
        FVector Dir = TargetActor->GetActorLocation() - GetActorLocation();
        if (!Dir.IsNearlyZero())
            SetActorRotation(Dir.Rotation());
    }

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetupPlayerInputComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Binds input for free-look controls.</span>
    </summary>

    <p>Binds input for free-look controls.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>UInputComponent * PlayerInputComponent</code> – Input component to populate with axis/actions.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code>
    (lines 57–65)
  </p>

  <ExpandableCodeBlock code={`void AOrbitSpectatorPawn::SetupPlayerInputComponent(UInputComponent* IC)
{
    Super::SetupPlayerInputComponent(IC);

    IC->BindAction("RightClick", IE_Pressed, this, &AOrbitSpectatorPawn::OnRightClickPressed);
    IC->BindAction("RightClick", IE_Released, this, &AOrbitSpectatorPawn::OnRightClickReleased);
    IC->BindAxis("Turn", this, &AOrbitSpectatorPawn::Turn);
    IC->BindAxis("LookUp", this, &AOrbitSpectatorPawn::LookUp);
}`} language="cpp" previewLines={15} />

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
  📘 Class `ATACharacter`
    <span class="brief-description-pill">The main Player-controlled character for Temporal Targets.</span>
</summary>
<!-- block -->

# Class `ATACharacter` 

<!-- block -->

> [ATACharacter](#class_a_t_a_character) implements core gameplay behavior:

* Interactable interface ([IBPI_Interactable](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_b_p_i___interactable))

* Damageable interface ([IDamageableInterface](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Blueprint_Interfaces.md#class_i_damageable_interface))

* Weapon Input handling ([StartFiring](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1a9a11c73ee847ca8b9044b743f8546eaa), [HandleSwitchWeapon](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1a2e0c752c342bae3c9440ee782c5a41b4), [HandleReload](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1a5f3a7acaee16dd379c919c2e90beef42))

* Replay recording ([ReplayRecorder](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_t_a_character_1ae55321ef89f0bcf840071cd5d06ca0ee))

* Custom input bindings for interaction, shooting, reloading, and weapon cycling.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class ATACharacter
  : public ACharacter
  : public IBPI_Interactable
  : public IDamageableInterface
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
      🧠 <code>ATACharacter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets default values for this character's properties.</span>
    </summary>

    <p>Sets default values for this character's properties.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 17–30)
  </p>

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
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 154–160)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::RegisterInteractable_Implementation(AActor* Interactable)
{
	if (InteractionComponent && Interactable)
	{
		InteractionComponent->AddRegisteredInteractable(Interactable);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 162–168)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::UnregisterInteractable_Implementation(AActor* Interactable)
{
	if (InteractionComponent && Interactable)
	{
		InteractionComponent->RemoveRegisteredInteractable(Interactable);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 170–172)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::Interact_Implementation(AActor* Interactor)
{
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 174–177)
  </p>

  <ExpandableCodeBlock code={`bool ATACharacter::CanInteract_Implementation(AActor* Interactor)
{
	return false;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 179–189)
  </p>

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
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 191–196)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::OnDamaged_Implementation(float NewHealth, float DamageAmount)
{
	UE_LOG(LogTemp, Log, TEXT("[%s] Took %.1f damage. New Health: %.1f"), *GetNameSafe(this), DamageAmount, NewHealth);

	// TODO: Add damage flash, hit reaction, sound, etc.
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
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
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 198–240)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Tick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called every frame.</span>
    </summary>

    <p>Called every frame.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float DeltaTime</code> – Time elapsed since last frame.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 66–79)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetupPlayerInputComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Binds functionality to input.</span>
    </summary>

    <p>Binds functionality to input.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>class UInputComponent * PlayerInputComponent</code> – The input component to bind to.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 82–109)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>HandleInteract</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Input handler for interaction action.</span>
    </summary>

    <p>Input handler for interaction action.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const FInputActionInstance & Instance</code> – The input action instance data.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 111–120)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::HandleInteract(const FInputActionInstance& Instance)
{
	UE_LOG(LogTemp, Warning, TEXT("Interacting!"));

	if (InteractionComponent)
	{
		InteractionComponent->Interact();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>StartFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Begin firing the equipped weapon.</span>
    </summary>

    <p>Begin firing the equipped weapon.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 122–128)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::StartFiring()
{
	if (WeaponComponent)
	{
		WeaponComponent->StartFiring();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>StopFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Stop firing the weapon.</span>
    </summary>

    <p>Stop firing the weapon.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 130–136)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::StopFiring()
{
	if (WeaponComponent)
	{
		WeaponComponent->StopFiring();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>HandleSwitchWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Switch to the next weapon in inventory.</span>
    </summary>

    <p>Switch to the next weapon in inventory.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 138–144)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::HandleSwitchWeapon()
{
	if (WeaponInventoryComponent)
	{
		WeaponInventoryComponent->CycleWeapon();
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>HandleReload</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reload the currently equipped weapon.</span>
    </summary>

    <p>Reload the currently equipped weapon.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 146–152)
  </p>

  <ExpandableCodeBlock code={`void ATACharacter::HandleReload()
{
	if (WeaponComponent)
	{
		WeaponComponent->ReloadWeapon();
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
      <span class="brief-description-pill">Called when the game starts or when spawned.</span>
    </summary>

    <p>Called when the game starts or when spawned.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 33–44)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>FellOutOfWorld</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Handle falling out of world (kill-zone).</span>
    </summary>

    <p>Handle falling out of world (kill-zone).</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const UDamageType & dmgType</code> – The damage type inflicted by falling out of world.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TACharacter.cpp</code>
    (lines 46–63)
  </p>

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
  <!-- block -->

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>InteractAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for interacting with world objects.</span>
    </summary>

    <p>Input action for interacting with world objects.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>ShootAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for shooting/fire.</span>
    </summary>

    <p>Input action for shooting/fire.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SwitchWeaponAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for cycling weapons.</span>
    </summary>

    <p>Input action for cycling weapons.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>ReloadAction</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Input action for reloading.</span>
    </summary>

    <p>Input action for reloading.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>InputMappingContext</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Context mapping for enhanced input system.</span>
    </summary>

    <p>Context mapping for enhanced input system.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>InteractionComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component handling interactable detection and management.</span>
    </summary>

    <p>Component handling interactable detection and management.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WeaponComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component responsible for weapon firing logic.</span>
    </summary>

    <p>Component responsible for weapon firing logic.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>WeaponInventoryComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component managing the player's weapon inventory.</span>
    </summary>

    <p>Component managing the player's weapon inventory.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>ReplayRecorder</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component that records and replays player actions.</span>
    </summary>

    <p>Component that records and replays player actions.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>DamageComponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Component implementing damage tracking and health.</span>
    </summary>

    <p>Component implementing damage tracking and health.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsMoving</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether the character is currently moving on ground.</span>
    </summary>

    <p>Whether the character is currently moving on ground.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsAirborne</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether the character is in the air.</span>
    </summary>

    <p>Whether the character is in the air.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bIsJumping</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Whether the character is currently jumping.</span>
    </summary>

    <p>Whether the character is currently jumping.</p>

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
  📘 Class `ATAPlayerController`
    <span class="brief-description-pill">PlayerController that manages the player's HUD and spectator flow.</span>
</summary>
<!-- block -->

# Class `ATAPlayerController` 

<!-- block -->

> This controller spawns and owns either the live-player HUD or the spectator HUD widget, toggles between them on death/respawn, and updates any associated countdown timers.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class ATAPlayerController
  : public APlayerController
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
      🧠 <code>ATAPlayerController</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor: sets default properties.</span>
    </summary>

    <p>Constructor: sets default properties.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TAPlayerController.cpp</code>
    (lines 16–20)
  </p>

  <ExpandableCodeBlock code={`ATAPlayerController::ATAPlayerController()
{
    bShowMouseCursor = false;
    HUDWidgetInstance = nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>EnterSpectate</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Enter spectate mode after death.</span>
    </summary>

    <p>Enter spectate mode after death.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>AActor * KillerActor</code> – The actor that caused this player's death.</li>
        <li><code>const FVector & DeathLocation</code> – World location where the player died.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TAPlayerController.cpp</code>
    (lines 22–85)
  </p>

  <ExpandableCodeBlock code={`void ATAPlayerController::EnterSpectate(AActor* KillerActor, const FVector& DeathLocation)
{
    if (!OrbitSpectatorClass)
    {
        UE_LOG(LogTemp, Warning, TEXT("EnterSpectate: OrbitSpectatorClass is null"));
        return;
    }

    // 1) Spawn & possess our custom spectate pawn AT the death location
    CurrentSpectatorPawn = GetWorld()->SpawnActor<AOrbitSpectatorPawn>(
        OrbitSpectatorClass, DeathLocation, FRotator::ZeroRotator
    );

    if (!CurrentSpectatorPawn)
    {
        UE_LOG(LogTemp, Warning, TEXT("EnterSpectate: failed to spawn OrbitSpectatorPawn"));
        return;
    }

    CurrentSpectatorPawn->InitializeSpectator(KillerActor, DeathLocation);
    Possess(CurrentSpectatorPawn);

    UE_LOG(LogTemp, Warning, TEXT("Spectate: Possessed OrbitSpectatorPawn for killer %s"),
        *GetNameSafe(KillerActor));

    // --- hide the normal gameplay HUD ---
    if (HUDWidgetInstance)
    {
        HUDWidgetInstance->RemoveFromParent();
		HUDWidgetInstance = nullptr;
    }

    // 2) Create & show Spectator HUD
    if (SpectatorHudClass)
    {
        SpectatorHudInstance = CreateWidget<USpectatorHudWidget>(this, SpectatorHudClass);
        if (SpectatorHudInstance)
        {
            SpectatorHudInstance->AddToViewport();

            // Pull respawn delay from GameMode
            float Delay = 5.f;
            if (auto* GM = GetWorld()->GetAuthGameMode<ATemporalGameMode>())
            {
                Delay = GM->RespawnDelay;
            }
            SpectatorHudInstance->SetRespawnTime(Delay);

            bSpectating = true;

            // start repeating countdown updates
            GetWorldTimerManager().SetTimer(
                SpectatorCountdownHandle,
                this,
                &ATAPlayerController::UpdateSpectatorCountdown,
                0.1f,
                true
            );
        }
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ExitSpectate</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Exit spectate mode and return to live play.</span>
    </summary>

    <p>Exit spectate mode and return to live play.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TAPlayerController.cpp</code>
    (lines 100–122)
  </p>

  <ExpandableCodeBlock code={`void ATAPlayerController::ExitSpectate()
{
	bSpectating = false;

    // stop updates
    GetWorldTimerManager().ClearTimer(SpectatorCountdownHandle);

    // remove HUD
    if (SpectatorHudInstance)
    {
        SpectatorHudInstance->RemoveFromParent();
        SpectatorHudInstance = nullptr;
    }

    if (CurrentSpectatorPawn)
    {
        CurrentSpectatorPawn->Destroy();
        CurrentSpectatorPawn = nullptr;
    }

	// 3) Exit spectate mode
    UnPossess();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>IsSpectating</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query whether the controller is currently in spectate mode.</span>
    </summary>

    <p>Query whether the controller is currently in spectate mode.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TAPlayerController.h</code>
    (lines 58–58)
  </p>

  <ExpandableCodeBlock code={`	bool IsSpectating() const { return bSpectating; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Hook called when this controller possesses a Pawn.</span>
    </summary>

    <p>Hook called when this controller possesses a Pawn.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>APawn * InPawn</code> – The Pawn being possessed.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TAPlayerController.cpp</code>
    (lines 124–199)
  </p>

  <ExpandableCodeBlock code={`void ATAPlayerController::OnPossess(APawn* InPawn)
{
    Super::OnPossess(InPawn);

	UE_LOG(LogTemp, Warning, TEXT("ATAPlayerController::OnPossess() called."));

    // 1) Grab the HUDWidget that AGameHUD already made
    if (!HUDWidgetInstance)
    {
        if (AGameHUD* GH = Cast<AGameHUD>(GetHUD()))
        {
			UE_LOG(LogTemp, Warning, TEXT("ATAPlayerController::OnPossess: HUD is AGameHUD."));

            GH->EnsureHUDWidget();
            HUDWidgetInstance = GH->GetHUDWidget();

            if (!HUDWidgetInstance)
            {
                UE_LOG(LogTemp, Warning, TEXT("AGameHUD::GetHUDWidget() returned null."));
            }

            if (!HUDWidgetInstance->IsInViewport())
            {
				// Add the HUDWidget to the viewport
				HUDWidgetInstance->AddToViewport();
				HUDWidgetInstance->InitializeHUD();
            }

        }
        else
        {
            UE_LOG(LogTemp, Warning, TEXT("PlayerController::GetHUD() is not an AGameHUD."));
        }
    }
    else
    {
		UE_LOG(LogTemp, Warning, TEXT("ATAPlayerController::OnPossess: HUDWidgetInstance already exists."));
		HUDWidgetInstance->AddToViewport();
    }

    if (ATACharacter* Char = Cast<ATACharacter>(InPawn))
    {
        if (Char->WeaponComponent)
        {
            Char->WeaponComponent->SetGameHUDWidget(HUDWidgetInstance);
        }
    }

    // 2) Defer the actual wiring by a tiny delay so UMG has time to finish constructing
    if (GetWorld())
    {
        // Clear any old pending call
        GetWorldTimerManager().ClearTimer(DeferredWidgetHandle);

        // Schedule DeferredWidgetSetup() to run in ~0.01s (effectively next frame)
        GetWorldTimerManager().SetTimer(
            DeferredWidgetHandle,
            this,
            &ATAPlayerController::DeferredWidgetSetup,
            .01f,
            false
        );
    }
    // 3) Kick off recording if in PlayMode
    if (ATACharacter* Char = Cast<ATACharacter>(InPawn))
    {
        if (ATemporalGameMode* GM = GetWorld()->GetAuthGameMode<ATemporalGameMode>())
        {
            if (GM->bPlayMode && Char->ReplayRecorder)
            {
                // Needs synced with blueprint Start Recording input currently.
                //Char->ReplayRecorder->StartRecording();
            }
        }
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnUnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Hook called when this controller unpossesses its Pawn.</span>
    </summary>

    <p>Hook called when this controller unpossesses its Pawn.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TAPlayerController.cpp</code>
    (lines 244–264)
  </p>

  <ExpandableCodeBlock code={`void ATAPlayerController::OnUnPossess()
{
    // Cancel any pending deferred setup
    if (GetWorld())
    {
        GetWorld()->GetTimerManager().ClearTimer(DeferredWidgetHandle);
    }

    HUDWidgetInstance = nullptr;
    
    if (ATACharacter* Char = Cast<ATACharacter>(GetPawn()))
    {
		if (Char->WeaponComponent)
		{
			Char->WeaponComponent->SetCrosshairWidget(nullptr);
			Char->WeaponComponent->SetHitmarkerWidget(nullptr);
		}
    }

    Super::OnUnPossess();
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
      🧠 <code>HUDWidgetClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The HUD widget class for the live player.</span>
    </summary>

    <p>The HUD widget class for the live player.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SpectatorHudClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The Spectator HUD widget class.</span>
    </summary>

    <p>The Spectator HUD widget class.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>OrbitSpectatorClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The Spectator pawn class to spawn when entering spectate mode.</span>
    </summary>

    <p>The Spectator pawn class to spawn when entering spectate mode.</p>

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
  📘 Class `ATemporalAIController`
    <span class="brief-description-pill">AIController for "ghost" TemporalCharacters during replay.</span>
</summary>
<!-- block -->

# Class `ATemporalAIController` 

<!-- block -->

> Inherits from AAIController. Overrides possession callbacks to log debug messages whenever it possesses or unpossesses a pawn.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class ATemporalAIController
  : public AAIController
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
      🧠 <code>OnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called by the engine when this controller takes possession of a pawn.</span>
    </summary>

    <p>Called by the engine when this controller takes possession of a pawn.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>APawn * InPawn</code> – The pawn being possessed (expected to be a TemporalCharacter).</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalAIController.cpp</code>
    (lines 5–19)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnUnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called by the engine when this controller releases its possessed pawn.</span>
    </summary>

    <p>Called by the engine when this controller releases its possessed pawn.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalAIController.cpp</code>
    (lines 21–25)
  </p>

  <ExpandableCodeBlock code={`void ATemporalAIController::OnUnPossess()
{
	Super::OnUnPossess();
	UE_LOG(LogTemp, Log, TEXT("AIController has unpossessed the pawn"));
}`} language="cpp" previewLines={15} />

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
  📘 Class `ATemporalCharacter`
    <span class="brief-description-pill">Ghost pawn that replays a player's recorded gameplay.</span>
</summary>
<!-- block -->

# Class `ATemporalCharacter` 

<!-- block -->

> [ATemporalCharacter](#class_a_temporal_character) streams back recorded [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Replay_Data.md#struct_f_player_frame_data) frames, interpolating position, rotation, and velocity. It binds replay events (jump, fire, interact) to C++ handler methods, and exposes Blueprint-callable APIs for controlling replay (reset, query frames).

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class ATemporalCharacter
  : public ATACharacter
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
      🧠 <code>ATemporalCharacter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor: sets up default tick and playback variables.</span>
    </summary>

    <p>Constructor: sets up default tick and playback variables.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 17–57)
  </p>

  <ExpandableCodeBlock code={`ATemporalCharacter::ATemporalCharacter()
{
	PrimaryActorTick.bCanEverTick = true;
	PlaybackTime = 0.0f;

	// Initialize shared pointer to nullptr
	ReplayDataPtr = nullptr;

	// Set up the event handlers map.
	// For each replay action flag, bind the default C++ function.
	// You can override these by implementing the Blueprint events (OnGhostJump, OnGhostShoot) if needed.
	//ReplayEventHandlers.Add(EReplayActionFlags::Jumped, FReplayEventDelegate::CreateUObject(this, &ATemporalCharacter::ProcessJumpEvent));
	//ReplayEventHandlers.Add(EReplayActionFlags::FiredWeapon, FReplayEventDelegate::CreateUObject(this, &ATemporalCharacter::ProcessShootEvent));

	// Automatically bind replay events using the macro list.
    #define X(Flag, Func) \\
        ReplayEventHandlers.Add(FReplayHandlerEntry{ EReplayActionFlags::Flag, FReplayEventDelegate::CreateUObject(this, &ATemporalCharacter::Func) });
    REPLAY_EVENT_LIST
    #undef X

    UCharacterMovementComponent* Movement = GetCharacterMovement();
    if (Movement)
    {
        // Set these to high values so that the velocity change is nearly instantaneous.
        Movement->bUseControllerDesiredRotation = false;
        Movement->MaxAcceleration = BIG_NUMBER;
        Movement->BrakingDecelerationWalking = 0.f;
        Movement->GroundFriction = 0.f;

        // Optionally, ensure the ghost is in the walking mode.
        Movement->SetMovementMode(MOVE_Falling);

        // You may also want to set MaxWalkSpeed to a sufficiently high value.
        Movement->MaxWalkSpeed = 10000.f;
		Movement->MaxFlySpeed = 10000.f;
    }

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>~ATemporalCharacter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Destructor: cleans up playback state.</span>
    </summary>

    <p>Destructor: cleans up playback state.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 59–62)
  </p>

  <ExpandableCodeBlock code={`ATemporalCharacter::~ATemporalCharacter()
{
    PlaybackTime = 0.0f;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>EndPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when play ends or actor is destroyed.</span>
    </summary>

    <p>Called when play ends or actor is destroyed.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const EEndPlayReason::Type EndPlayReason</code> – Reason the actor is ending play.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 64–70)
  </p>

  <ExpandableCodeBlock code={`void ATemporalCharacter::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
	Super::EndPlay(EndPlayReason);

    ReplayEventHandlers.Reset();
	//ReplayDataPtr.Reset(); // No need to reset shared pointer, it will be cleaned up automatically.
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Tick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called once per frame to advance playback.</span>
    </summary>

    <p>Called once per frame to advance playback.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float DeltaTime</code> – Time in seconds since last Tick.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 91–104)
  </p>

  <ExpandableCodeBlock code={`void ATemporalCharacter::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	// **Ensure replay data is valid before processing**
	if (!ReplayDataPtr.IsValid() || ReplayDataPtr->Num() == 0)
	{
		UE_LOG(LogTemp, Warning, TEXT("%s - ReplayDataPtr is invalid!"), *GetName());
		return;
	}

	PlaybackTime += DeltaTime;
	UpdatePlayback(DeltaTime); 
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>InitializeGhostPlayback</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Initialize ghost playback with a shared pointer to frame data.</span>
    </summary>

    <p>Initialize ghost playback with a shared pointer to frame data.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>TSharedPtr< TArray<  > > InReplayDataPtr</code> – Shared pointer to an array of .</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 106–190)
  </p>

  <ExpandableCodeBlock code={`void ATemporalCharacter::InitializeGhostPlayback(TSharedPtr<TArray<FPlayerFrameData>> InReplayDataPtr)
{
	if (!InReplayDataPtr.IsValid() || InReplayDataPtr->Num() == 0)
	{
		UE_LOG(LogTemp, Warning, TEXT("%s - Received invalid or empty replay data!"), *GetName());
		return;
	}

	// Assign new shared pointer (NO COPY)
	ReplayDataPtr = InReplayDataPtr;
	PlaybackTime = 0.0f;

    // ---------------------------------------------------------------
    //  Walk every frame & shot once, load unique WeaponUsed
    // ---------------------------------------------------------------
    CachedWeapons.Empty();

    for (const FPlayerFrameData& Frame : *ReplayDataPtr)
    {
        for (const FRecordedShot& Shot : Frame.CombatData.Shots)
        {
            if (!Shot.WeaponUsed.IsNull())
            {
                const FSoftObjectPath Path = Shot.WeaponUsed.ToSoftObjectPath();
                if (!CachedWeapons.Contains(Path))               // load only once
                {
                    UWeaponDataAsset* Loaded = Shot.WeaponUsed.LoadSynchronous();
                    if (Loaded)
                    {
                        CachedWeapons.Add(Path, Loaded);
                    }
                    else
                    {
                        UE_LOG(LogTemp, Warning,
                            TEXT("%s – failed to stream weapon asset %s"),
                            *GetName(), *Path.ToString());
                    }
                }
            }
        }
    }

    UE_LOG(LogTemp, Log, TEXT("%s – Weapon cache built with %d unique assets"),
        *GetName(), CachedWeapons.Num());

	// Log memory details for this ghost
	UE_LOG(LogTemp, Warning, TEXT("%s - Ghost initialized with %d frames. Memory Address: %p"),
		*GetName(), ReplayDataPtr->Num(), ReplayDataPtr.Get());

	// Ensure timestamps are normalized
	float FirstFrameTime = (*ReplayDataPtr)[0].TimeStamp;
	for (FPlayerFrameData& Frame : *ReplayDataPtr)
	{
		Frame.TimeStamp -= FirstFrameTime;
	}

	// Set initial position and rotation
	SetActorLocation((*ReplayDataPtr)[0].Position);
	SetActorRotation((*ReplayDataPtr)[0].Rotation);

	UE_LOG(LogTemp, Log, TEXT("%s - Initialized with %d frames."), *GetName(), ReplayDataPtr->Num());

    // --- NEW: turn off all the inherited player components ---

    if (InteractionComponent)
    {
        InteractionComponent->Deactivate();
        InteractionComponent->SetComponentTickEnabled(false);
    }
    if (ReplayRecorder)
    {
        ReplayRecorder->Deactivate();
        ReplayRecorder->SetComponentTickEnabled(false);
    }
    if (WeaponComponent)
    {
        WeaponComponent->Deactivate();
        WeaponComponent->SetComponentTickEnabled(false);
    }
    if (WeaponInventoryComponent)
    {
        WeaponInventoryComponent->Deactivate();
        WeaponInventoryComponent->SetComponentTickEnabled(false);
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetRecordedFrames</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieve the full list of recorded frames.</span>
    </summary>

    <p>Retrieve the full list of recorded frames.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 192–195)
  </p>

  <ExpandableCodeBlock code={`const TArray<FPlayerFrameData>& ATemporalCharacter::GetRecordedFrames() const
{
    return ReplayData;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ResetPlayback</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reset playback timer and teleport ghost to first frame.</span>
    </summary>

    <p>Reset playback timer and teleport ghost to first frame.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 197–205)
  </p>

  <ExpandableCodeBlock code={`void ATemporalCharacter::ResetPlayback()
{
	PlaybackTime = 0.0f;
	if (ReplayDataPtr.IsValid() && ReplayDataPtr->Num() > 0)
	{
		SetActorLocation((*ReplayDataPtr)[0].Position);
		SetActorRotation((*ReplayDataPtr)[0].Rotation);
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
      <span class="brief-description-pill">Called when the game starts or actor is spawned.</span>
    </summary>

    <p>Called when the game starts or actor is spawned.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalCharacter.cpp</code>
    (lines 72–89)
  </p>

  <ExpandableCodeBlock code={`void ATemporalCharacter::BeginPlay()
{
	Super::BeginPlay();

    Tags.AddUnique("Ghost");

    LastGhostPosition = GetActorLocation();
    // Optionally clear or precompute CumulativeDistances here.
    CumulativeDistances.Empty();

    if (ATemporalGameMode* GM = Cast<ATemporalGameMode>(UGameplayStatics::GetGameMode(this)))
    {
        if (!GhostID.IsNone())
        {
            GM->RegisterGhost(GhostID, this);
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
      🧠 <code>GhostID</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Unique identifier for this ghost instance.</span>
    </summary>

    <p>Unique identifier for this ghost instance.</p>

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
  📘 Class `ATemporalGameMode`
    <span class="brief-description-pill">Game mode handling player respawning and ghost replay logic.</span>
</summary>
<!-- block -->

# Class `ATemporalGameMode` 

<!-- block -->

> * Records the player's run into an array of [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Replay_Data.md#struct_f_player_frame_data) frames.

* Spawns ghost actors that reproduce previous runs ("replays").

* Exposes Blueprint utilities for clearing, registering and querying ghosts.

* Owns the respawn timer logic (instant vs delayed respawn controlled by [bPlayMode](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_temporal_game_mode_1a196e99b79778bd0d825457c33a27988c)).

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class ATemporalGameMode
  : public AGameModeBase
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
      🧠 <code>ATemporalGameMode</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor.</span>
    </summary>

    <p>Default constructor.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 21–30)
  </p>

  <ExpandableCodeBlock code={`ATemporalGameMode::ATemporalGameMode()
{
    UE_LOG(LogTemp, Warning, TEXT("Emptied Stored Replays!"));

	StoredReplays.Empty();

	HUDClass = AGameHUD::StaticClass(); // Set the HUD class to your custom HUD

    PlayerControllerClass = ATAPlayerController::StaticClass();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>~ATemporalGameMode</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Virtual destructor - cleans up timers & weak ptr maps.</span>
    </summary>

    <p>Virtual destructor - cleans up timers & weak ptr maps.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 32–38)
  </p>

  <ExpandableCodeBlock code={`ATemporalGameMode::~ATemporalGameMode()
{
	// Clear any remaining ghosts
	ClearGhosts();

    StoredReplays.Empty(); // TSharedPtr automatically handles cleanup
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>AddReplayData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Stores a replay attempt at the end of a run.</span>
    </summary>

    <p>Stores a replay attempt at the end of a run.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const TArray<  > & ReplayData</code> – Array of  containing the entire run.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 161–209)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::AddReplayData(const TArray<FPlayerFrameData>& ReplayData)
{
    if (ReplayData.Num() == 0)
    {
        UE_LOG(LogTemp, Warning, TEXT("Attempted to store an empty replay!"));
        return;
    }

    // Limit the maximum number of stored replays
    const int32 MaxStoredReplays = 50;
    if (StoredReplays.Num() >= MaxStoredReplays)
    {
        UE_LOG(LogTemp, Warning, TEXT("Exceeded max stored replays (%d), removing oldest."), MaxStoredReplays);
        StoredReplays.RemoveAt(0); // TSharedPtr auto-cleans memory
    }

    // Store replay using shared pointer to prevent copies
    TSharedPtr<FReplayAttempt> NewAttempt = MakeShared<FReplayAttempt>(ReplayData);
    StoredReplays.Add(NewAttempt);

    // 3) Clear out the player's recorder buffer so it starts fresh next life
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        if (ATACharacter* PlayerChar = Cast<ATACharacter>(PC->GetPawn()))
        {
            if (UReplayRecorderComponent* Recorder = PlayerChar->FindComponentByClass<UReplayRecorderComponent>())
            {
                Recorder->RecordedFrames.Empty();
                UE_LOG(LogTemp, Log, TEXT("Cleared RecordedFrames on player's ReplayRecorder"));
            }
            else
            {
                UE_LOG(LogTemp, Warning,
                    TEXT("AddReplayData: Player pawn has no ReplayRecorderComponent!")
                );
            }
        }
        else
        {
            UE_LOG(LogTemp, Warning,
                TEXT("AddReplayData: Could not cast PlayerController->GetPawn() to ATACharacter")
            );
        }
    }
    else
    {
        UE_LOG(LogTemp, Warning, TEXT("AddReplayData: No local PlayerController found"));
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SpawnGhosts</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Spawns ghost pawns for every stored replay attempt.</span>
    </summary>

    <p>Spawns ghost pawns for every stored replay attempt.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 211–281)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::SpawnGhosts()
{
    // Log memory before spawning ghosts
    FPlatformMemoryStats MemStatsBefore = FPlatformMemory::GetStats();
    UE_LOG(LogTemp, Warning, TEXT("Memory BEFORE spawning ghosts: Used: %.2f MB | Peak: %.2f MB | Allocated: %.2f MB"),
        MemStatsBefore.UsedPhysical / 1048576.0f, // Convert bytes to MB
        MemStatsBefore.PeakUsedPhysical / 1048576.0f,
        MemStatsBefore.TotalPhysical / 1048576.0f);

    // Clear any previous ghosts.
    ClearGhosts();

    if (!TemporalCharacterClass)
    {
        UE_LOG(LogTemp, Warning, TEXT("TemporalCharacterClass not set in GameMode."));
        return;
    }

    UWorld* World = GetWorld();
    if (!World)
    {
        return;
    }

    // Loop through stored replays and spawn a ghost for each attempt.
    for (const TSharedPtr<FReplayAttempt>& ReplayAttempt : StoredReplays)
    {
        if (!ReplayAttempt.IsValid() || !ReplayAttempt->ReplayDataPtr || ReplayAttempt->ReplayDataPtr->Num() == 0)
        {
            continue;
        }

        TArray<FPlayerFrameData>* SafeReplayData = ReplayAttempt->ReplayDataPtr.Get();
        if (!SafeReplayData || SafeReplayData->Num() == 0)
        {
            continue;
        }

        // Spawn at the initial recorded location.
        FVector SpawnLocation = (*SafeReplayData)[0].Position;
        FRotator SpawnRotation = (*SafeReplayData)[0].Rotation;
        FActorSpawnParameters SpawnParams;

        ATemporalCharacter* NewGhost = World->SpawnActor<ATemporalCharacter>(TemporalCharacterClass, SpawnLocation, SpawnRotation, SpawnParams);
        ATemporalAIController* GhostController = GetWorld()->SpawnActor<ATemporalAIController>();
        

        if (NewGhost && GhostController)
        {
            GhostController->Possess(NewGhost);
            SpawnedControllers.Add(GhostController);

            NewGhost->GhostID = ReplayAttempt->AssignedGhostID;

            RegisterGhost(ReplayAttempt->AssignedGhostID, NewGhost);

            NewGhost->InitializeGhostPlayback(ReplayAttempt->ReplayDataPtr);
            SpawnedGhosts.Add(NewGhost);
        }
    }

    ResolveHitGhosts();

    // Log memory after spawning ghosts
    FPlatformMemoryStats MemStatsAfter = FPlatformMemory::GetStats();
    UE_LOG(LogTemp, Warning, TEXT("Memory AFTER spawning ghosts: Used: %.2f MB | Peak: %.2f MB | Allocated: %.2f MB"),
        MemStatsAfter.UsedPhysical / 1048576.0f,
        MemStatsAfter.PeakUsedPhysical / 1048576.0f,
        MemStatsAfter.TotalPhysical / 1048576.0f);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ClearGhosts</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Clears all spawned ghost actors and any stored replay attempts.</span>
    </summary>

    <p>Clears all spawned ghost actors and any stored replay attempts.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 283–353)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::ClearGhosts()
{
    UE_LOG(LogTemp, Warning, TEXT("Clearing %d ghosts"), SpawnedGhosts.Num());

    for (ATemporalAIController* Controller : SpawnedControllers)
    {
        if (IsValid(Controller))
        {
            Controller->UnPossess();
            Controller->Destroy();
        }
    }
    SpawnedControllers.Empty();
    SpawnedControllers.Shrink();

    GhostRegistry.Empty();
    GhostRegistry.Shrink();

    // Destroy any spawned ghost actors
    for (ATemporalCharacter* Ghost : SpawnedGhosts)
    {
        if (IsValid(Ghost))
        {
            // Unpossess the ghost if it has a controller
            if (AController* Controller = Ghost->GetController())
            {
                Controller->UnPossess();
            }

            Ghost->Destroy();
        }
    }
    SpawnedGhosts.Empty();
	SpawnedGhosts.Shrink();

    if (StoredReplays.Num() > 52)
    {
        // Explicitly clear stored replay pointers
        for (TSharedPtr<FReplayAttempt>& Replay : StoredReplays)
        {
            Replay.Reset();  // Clear shared pointer references
        }

        StoredReplays.Empty();
        StoredReplays.Shrink();
    }

    // **Only force GC if memory usage is too high**
    float MemoryUsedMB = FPlatformMemory::GetStats().UsedPhysical / 1048576.0f; // Convert bytes to MB
    if (!IsGarbageCollecting())
    { 
        if (MemoryUsedMB > 5000.0f)  // Example: If used memory > 5000MB
        {
            UE_LOG(LogTemp, Warning, TEXT("Memory exceeds threshold (%.2f MB). Forcing Garbage Collection..."), MemoryUsedMB);
            CollectGarbage(GARBAGE_COLLECTION_KEEPFLAGS, true);
        }
	    else if (GEngine)
        {
            UE_LOG(LogTemp, Warning, TEXT("Performing normal Unreal GC."));
            GEngine->ForceGarbageCollection(true);
        }
    }

    // Check memory stats after clearing
    FPlatformMemoryStats MemStatsAfterClear = FPlatformMemory::GetStats();
    UE_LOG(LogTemp, Warning, TEXT("Memory AFTER clearing ghosts: Used: %.2f MB | Peak: %.2f MB | Allocated: %.2f MB"),
        MemStatsAfterClear.UsedPhysical / 1048576.0f,
        MemStatsAfterClear.PeakUsedPhysical / 1048576.0f,
        MemStatsAfterClear.TotalPhysical / 1048576.0f);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>RegisterGhost</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Registers a ghost character instance so it can be retrieved later.</span>
    </summary>

    <p>Registers a ghost character instance so it can be retrieved later.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>FName GhostID</code> – Unique identifier (usually run index or GUID).</li>
        <li><code>* Ghost</code> – Instantiated ghost character to track.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 355–362)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::RegisterGhost(FName GhostID, ATemporalCharacter* Ghost)
{
    if (!GhostID.IsNone() && IsValid(Ghost))
    {
        GhostRegistry.FindOrAdd(GhostID) = Ghost;
        UE_LOG(LogTemp, Log, TEXT("Registered GhostID: %s"), *GhostID.ToString());
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetGhostByID</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves a ghost character by its identifier.</span>
    </summary>

    <p>Retrieves a ghost character by its identifier.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>FName GhostID</code> – Unique identifier used in .</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 364–374)
  </p>

  <ExpandableCodeBlock code={`ATemporalCharacter* ATemporalGameMode::GetGhostByID(FName GhostID) const
{

	// Check if the GhostID is valid and exists in the registry
    if (const TWeakObjectPtr<ATemporalCharacter>* Found = GhostRegistry.Find(GhostID))
    {
        return Found->IsValid() ? Found->Get() : nullptr;
    }

    return nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>PostLogin</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Binds death events when a new player joins.</span>
    </summary>

    <p>Binds death events when a new player joins.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 40–51)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::PostLogin(APlayerController* NewPlayer)
{
    Super::PostLogin(NewPlayer);

    if (APawn* Pawn = NewPlayer->GetPawn())
    {
        if (UDamageableComponent* Dmg = Pawn->FindComponentByClass<UDamageableComponent>())
        {
            Dmg->OnDeath.AddUniqueDynamic(this, &ATemporalGameMode::HandlePlayerDeath);
        }
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>RestartPlayer</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Restarts player with ghost-aware logic.</span>
    </summary>

    <p>Restarts player with ghost-aware logic.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 53–74)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::RestartPlayer(AController* NewPlayer)
{
    Super::RestartPlayer(NewPlayer);

    if (APawn* Pawn = NewPlayer->GetPawn())
    {
        if (UDamageableComponent* DamageComp = Pawn->FindComponentByClass<UDamageableComponent>())
        {
            // Make sure we don't bind twice
            DamageComp->OnDeath.RemoveDynamic(this, &ATemporalGameMode::HandlePlayerDeath);
            DamageComp->OnDeath.AddUniqueDynamic(this, &ATemporalGameMode::HandlePlayerDeath);
        }
        else
        {
            UE_LOG(LogTemp, Error, TEXT("ATemporalGameMode: pawn %s has no UDamageableComponent!"), *Pawn->GetName());
        }
    }
    else
    {
        UE_LOG(LogTemp, Error, TEXT("ATemporalGameMode: RestartPlayer spawned no pawn for %s"), *NewPlayer->GetName());
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ResolveHitGhosts</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Checks recent hits against active ghosts and resolves collisions.</span>
    </summary>

    <p>Checks recent hits against active ghosts and resolves collisions.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/TemporalGameMode.cpp</code>
    (lines 376–404)
  </p>

  <ExpandableCodeBlock code={`void ATemporalGameMode::ResolveHitGhosts()
{
    for (const TSharedPtr<FReplayAttempt>& Attempt : StoredReplays)
    {
        if (!Attempt.IsValid() || !Attempt->ReplayDataPtr) continue;

        for (FPlayerFrameData& Frame : *Attempt->ReplayDataPtr)
        {
            if (!Frame.HasAction(EReplayActionFlags::FiredWeapon)) continue;

            for (FRecordedShot& Shot : Frame.CombatData.Shots)
            {
                if (!Shot.HitGhostID.IsNone() && !Shot.HitActor.IsValid())
                {
                    if (ATemporalCharacter* Ghost = GetGhostByID(Shot.HitGhostID))
                    {
                        Shot.HitActor = Ghost;

                        UE_LOG(LogTemp, Log, TEXT("Resolved Shot [%d]: HitGhostID %s to actor %s from instigator %s"), Shot.ShotIndex, *Shot.HitGhostID.ToString(), *GetNameSafe(Ghost), *GetNameSafe(GetGhostByID(Attempt->AssignedGhostID)));
                    }
                    else
                    {
                        UE_LOG(LogTemp, Error, TEXT("Failed to resolve HitGhostID %s"), *Shot.HitGhostID.ToString());
                    }
                }
            }
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
      🧠 <code>bPlayMode</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">If true, we play with ghosts + delayed respawn.</span>
    </summary>

    <p>If true, we play with ghosts + delayed respawn.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RespawnDelay</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Amount of time (seconds) after death before we respawn the player.</span>
    </summary>

    <p>Amount of time (seconds) after death before we respawn the player.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>RespawnTimerHandle</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Handle used by [RespawnTimerHandle](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_temporal_game_mode_1a2f20687efa9847159c5e8b6504a1d1c9) to track the delayed respawn timer.</span>
    </summary>

    <p>Handle used by [RespawnTimerHandle](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-Game_Logic.md#class_a_temporal_game_mode_1a2f20687efa9847159c5e8b6504a1d1c9) to track the delayed respawn timer.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>TemporalCharacterClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Blueprint class used when spawning ghost characters.</span>
    </summary>

    <p>Blueprint class used when spawning ghost characters.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SpawnedGhosts</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Array storing spawned ghost actors so they can be managed & cleared.</span>
    </summary>

    <p>Array storing spawned ghost actors so they can be managed & cleared.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>GhostRegistry</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Map of GhostID -> Ghost weak pointer for quick lookup without preventing GC.</span>
    </summary>

    <p>Map of GhostID -> Ghost weak pointer for quick lookup without preventing GC.</p>

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
