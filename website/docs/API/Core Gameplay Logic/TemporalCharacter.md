---
title: "📄 File: TemporalCharacter.h"
slug: /API/_temporal_character_8h
---

# 📄 File: `TemporalCharacter.h`

> Defines the ghost character class responsible for replaying recorded gameplay.

<details open>
<summary>📝 Detailed Description</summary>
This file declares the [ATemporalCharacter](#class_a_temporal_character) class, which:

* Plays back recorded frames from a prior player session.

* Interpolates movement and rotation based on frame data.

* Binds replay action flags (e.g., Jumped, FiredWeapon) to delegate handlers.

* Provides Blueprint APIs to query and control playback.

It also defines the [FReplayHandlerEntry](#struct_f_replay_handler_entry) structure and related macros used to dispatch frame-based events efficiently.

[Core Gameplay Logic](#group___game___logic)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `FReplayHandlerEntry`
  <span class="brief-description-pill">Maps an [EReplayActionFlags](#group___replay___data_1ga634bef419b6cd1967d4f0b1e39282e91) bit to its C++ handler delegate.</span>
</summary>

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
      🧠 <code>Flag</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Which action flag to match.</span>
    </summary>
    <p>Which action flag to match.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Handler</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Delegate to call when this flag is set.</span>
    </summary>
    <p>Delegate to call when this flag is set.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `ATemporalCharacter`
  <span class="brief-description-pill">Ghost pawn that replays a player's recorded gameplay.</span>
</summary>

> [ATemporalCharacter](#class_a_temporal_character) streams back recorded [FPlayerFrameData](#struct_f_player_frame_data) frames, interpolating position, rotation, and velocity. It binds replay events (jump, fire, interact) to C++ handler methods, and exposes Blueprint-callable APIs for controlling replay (reset, query frames).

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>ATemporalCharacter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor: sets up default tick and playback variables.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 17–57)</p>
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
  <details>
    <summary>
      🧠 <code>~ATemporalCharacter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Destructor: cleans up playback state.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 59–62)</p>
    <ExpandableCodeBlock code={`ATemporalCharacter::~ATemporalCharacter()
{
    PlaybackTime = 0.0f;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>EndPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when play ends or actor is destroyed.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const EEndPlayReason::Type EndPlayReason</code> – Reason the actor is ending play.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 64–70)</p>
    <ExpandableCodeBlock code={`void ATemporalCharacter::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
	Super::EndPlay(EndPlayReason);

    ReplayEventHandlers.Reset();
	//ReplayDataPtr.Reset(); // No need to reset shared pointer, it will be cleaned up automatically.
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>Tick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called once per frame to advance playback.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float DeltaTime</code> – Time in seconds since last Tick.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 91–104)</p>
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
  <details>
    <summary>
      🧠 <code>InitializeGhostPlayback</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Initialize ghost playback with a shared pointer to frame data.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>TSharedPtr< TArray<  > > InReplayDataPtr</code> – Shared pointer to an array of .</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 106–190)</p>
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
  <details>
    <summary>
      🧠 <code>GetRecordedFrames</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieve the full list of recorded frames.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 192–195)</p>
    <ExpandableCodeBlock code={`const TArray<FPlayerFrameData>& ATemporalCharacter::GetRecordedFrames() const
{
    return ReplayData;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ResetPlayback</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reset playback timer and teleport ghost to first frame.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 197–205)</p>
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
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts or actor is spawned.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TemporalCharacter.cpp</code> (lines 72–89)</p>
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

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>GhostID</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Unique identifier for this ghost instance.</span>
    </summary>
    <p>Unique identifier for this ghost instance.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
