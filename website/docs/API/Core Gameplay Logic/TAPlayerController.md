---
title: "📄 File: TAPlayerController.h"
slug: /API/_t_a_player_controller_8h
---

# 📄 File: `TAPlayerController.h`

> Declares the custom PlayerController responsible for HUD and spectate management.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [ATAPlayerController](#class_a_t_a_player_controller) class, which handles:

* Managing player and spectator HUD widgets.

* Toggling between live and spectate modes after death or respawn.

* Spawning and possessing the Orbit Spectator pawn.

* Updating countdown timers during spectate state.

[Core Gameplay Logic](#group___game___logic)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `ATAPlayerController`
  <span class="brief-description-pill">PlayerController that manages the player's HUD and spectator flow.</span>
</summary>

> This controller spawns and owns either the live-player HUD or the spectator HUD widget, toggles between them on death/respawn, and updates any associated countdown timers.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>ATAPlayerController</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor: sets default properties.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TAPlayerController.cpp</code> (lines 16–20)</p>
    <ExpandableCodeBlock code={`ATAPlayerController::ATAPlayerController()
{
    bShowMouseCursor = false;
    HUDWidgetInstance = nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>EnterSpectate</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Enter spectate mode after death.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * KillerActor</code> – The actor that caused this player's death.</li>
        <li><code>const FVector & DeathLocation</code> – World location where the player died.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TAPlayerController.cpp</code> (lines 22–85)</p>
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
  <details>
    <summary>
      🧠 <code>ExitSpectate</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Exit spectate mode and return to live play.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TAPlayerController.cpp</code> (lines 100–122)</p>
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
  <details>
    <summary>
      🧠 <code>IsSpectating</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query whether the controller is currently in spectate mode.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TAPlayerController.h</code> (lines 74–74)</p>
    <ExpandableCodeBlock code={`	bool IsSpectating() const { return bSpectating; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Hook called when this controller possesses a Pawn.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>APawn * InPawn</code> – The Pawn being possessed.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TAPlayerController.cpp</code> (lines 124–199)</p>
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
  <details>
    <summary>
      🧠 <code>OnUnPossess</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Hook called when this controller unpossesses its Pawn.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/TAPlayerController.cpp</code> (lines 244–264)</p>
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

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>HUDWidgetClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The HUD widget class for the live player.</span>
    </summary>
    <p>The HUD widget class for the live player.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SpectatorHudClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The Spectator HUD widget class.</span>
    </summary>
    <p>The Spectator HUD widget class.</p>
  </details>
  <details>
    <summary>
      🧠 <code>OrbitSpectatorClass</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">The Spectator pawn class to spawn when entering spectate mode.</span>
    </summary>
    <p>The Spectator pawn class to spawn when entering spectate mode.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
