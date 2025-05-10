---
title: "📄 File: OrbitSpectatorPawn.h"
slug: /API/_orbit_spectator_pawn_8h
---

# 📄 File: `OrbitSpectatorPawn.h`

> Declares a pawn that smoothly orbits the killer after player death.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [AOrbitSpectatorPawn](#class_a_orbit_spectator_pawn) class, which is responsible for:

* Transitioning the camera from the death location to an orbiting position around the killer.

* Allowing free-look mode using right-click input.

* Managing SpringArm and CameraComponent setup for smooth third-person orbiting.

[Core Gameplay Logic](#group___game___logic)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `AOrbitSpectatorPawn`
  <span class="brief-description-pill">Pawn that smoothly orbits around the actor that killed the player.</span>
</summary>

> On spawn, this pawn is initialized via [InitializeSpectator()](#class_a_orbit_spectator_pawn_1a042f83ca27a30c6510b1905153132a6b) with the [TargetActor](#class_a_orbit_spectator_pawn_1a24c5e1186db9f8e8e7bf60993ea45405) (the killer) and [StartLocation](#class_a_orbit_spectator_pawn_1a553f1235c13d69a4dcdd5309e76c9b01) (death spot). It then blends over [BlendTime](#class_a_orbit_spectator_pawn_1a693da49425407f0e913d7e094cbaddba) seconds from the death spot toward the killer's location plus [TargetOffset](#class_a_orbit_spectator_pawn_1ab3ef177c965bc7ce3b40b92805eb2ab3). While blending finishes, it will automatically look at the killer unless free-look is engaged via [/OnRightClickReleased](#class_a_orbit_spectator_pawn_1a6aca1b24b25674e136932f6f6e0893c7)().

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>AOrbitSpectatorPawn</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code> (lines 10–22)</p>
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
  <details>
    <summary>
      🧠 <code>InitializeSpectator</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Sets up the pawn after spawn.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * KillerActor</code> – Actor that killed the player (stored in ).</li>
        <li><code>FVector DeathLocation</code> – World position where the player died (stored in ).</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code> (lines 24–30)</p>
    <ExpandableCodeBlock code={`void AOrbitSpectatorPawn::InitializeSpectator(AActor* KillerActor, FVector DeathLocation)
{
    TargetActor = KillerActor;
    StartLocation = DeathLocation;
    ElapsedTime = 0.f;
    SetActorLocation(StartLocation);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>Tick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called each frame to update blend and look-at logic.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float DeltaSeconds</code> – Time (in seconds) since the last  call.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code> (lines 33–55)</p>
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
  <details>
    <summary>
      🧠 <code>SetupPlayerInputComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Binds input for free-look controls.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>UInputComponent * PlayerInputComponent</code> – Input component to populate with axis/actions.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/OrbitSpectatorPawn.cpp</code> (lines 57–65)</p>
    <ExpandableCodeBlock code={`void AOrbitSpectatorPawn::SetupPlayerInputComponent(UInputComponent* IC)
{
    Super::SetupPlayerInputComponent(IC);

    IC->BindAction("RightClick", IE_Pressed, this, &AOrbitSpectatorPawn::OnRightClickPressed);
    IC->BindAction("RightClick", IE_Released, this, &AOrbitSpectatorPawn::OnRightClickReleased);
    IC->BindAxis("Turn", this, &AOrbitSpectatorPawn::Turn);
    IC->BindAxis("LookUp", this, &AOrbitSpectatorPawn::LookUp);
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
