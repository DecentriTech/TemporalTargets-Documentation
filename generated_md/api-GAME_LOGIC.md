---
id: GAME_LOGIC
title: GAME LOGIC
sidebar_label: GAME LOGIC
slug: /API/GAME_LOGIC
---

# 🗂️ Category: [GAME LOGIC](/docs/API/GAME_LOGIC)

> Classes that implement core gameplay systems like spawning, replay, and game flow.

<!-- block -->

<details open>
<summary>📦 Classes in This Category</summary>

<!-- block -->

<details>
<summary>🔹 [ATemporalGameMode](#ATemporalGameMode)</summary>

Game mode handling player respawning and ghost replay logic.

<details>
<summary>📄 Description</summary>

* Records the player's run into an array of [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#struct_f_player_frame_data) frames.

* Spawns ghost actors that reproduce previous runs ("replays").

* Exposes Blueprint utilities for clearing, registering and querying ghosts.

* Owns the respawn timer logic (instant vs delayed respawn controlled by [bPlayMode](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-GAME_LOGIC.md#class_a_temporal_game_mode_1a196e99b79778bd0d825457c33a27988c)).

</details>

</details>

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

> * Records the player's run into an array of [FPlayerFrameData](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#struct_f_player_frame_data) frames.

* Spawns ghost actors that reproduce previous runs ("replays").

* Exposes Blueprint utilities for clearing, registering and querying ghosts.

* Owns the respawn timer logic (instant vs delayed respawn controlled by [bPlayMode](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-GAME_LOGIC.md#class_a_temporal_game_mode_1a196e99b79778bd0d825457c33a27988c)).

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
}`} language="cpp" previewLines={6} />

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
}`} language="cpp" previewLines={6} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>AddReplayData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Stores a replay attempt at the end of a run and black people!</span>
    </summary>

    <p>Stores a replay attempt at the end of a run and black people!</p>

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

    // 3) Clear out the player�s recorder buffer so it starts fresh next life
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        if (ATACharacter* PlayerChar = Cast<ATACharacter>(PC->GetPawn()))
        {
            if (UReplayRecorderComponent* Recorder = PlayerChar->FindComponentByClass<UReplayRecorderComponent>())
            {
                Recorder->RecordedFrames.Empty();
                UE_LOG(LogTemp, Log, TEXT("Cleared RecordedFrames on player�s ReplayRecorder"));
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
}`} language="cpp" previewLines={6} />

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
}`} language="cpp" previewLines={6} />

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
}`} language="cpp" previewLines={6} />

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
}`} language="cpp" previewLines={6} />

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
    (lines 364–372)
  </p>

  <ExpandableCodeBlock code={`ATemporalCharacter* ATemporalGameMode::GetGhostByID(FName GhostID) const
{
    if (const TWeakObjectPtr<ATemporalCharacter>* Found = GhostRegistry.Find(GhostID))
    {
        return Found->IsValid() ? Found->Get() : nullptr;
    }

    return nullptr;
}`} language="cpp" previewLines={6} />

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
}`} language="cpp" previewLines={6} />

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
}`} language="cpp" previewLines={6} />

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
    (lines 374–402)
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
}`} language="cpp" previewLines={6} />

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
      <span class="brief-description-pill">Handle used by [RespawnTimerHandle](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-GAME_LOGIC.md#class_a_temporal_game_mode_1a2f20687efa9847159c5e8b6504a1d1c9) to track the delayed respawn timer.</span>
    </summary>

    <p>Handle used by [RespawnTimerHandle](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-GAME_LOGIC.md#class_a_temporal_game_mode_1a2f20687efa9847159c5e8b6504a1d1c9) to track the delayed respawn timer.</p>

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
