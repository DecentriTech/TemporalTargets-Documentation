---
title: "📄 File: WeaponComponent.h"
slug: /API/_weapon_component_8h
---

# 📄 File: `WeaponComponent.h`

> Declares the [UWeaponComponent](#class_u_weapon_component) responsible for handling all weapon-related logic.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UWeaponComponent](#class_u_weapon_component) class and the [FWeaponAmmoData](#struct_f_weapon_ammo_data) struct, which together manage:

* Firing, automatic and single-shot behavior.

* Recoil management and spread dynamics.

* Reloading logic and ammo tracking.

* HUD integration for crosshairs and hitmarkers.

* Dynamic weapon switching and data asset handling.

[Modular Components](#group___modular___components)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `FWeaponAmmoData`
  <span class="brief-description-pill">Tracks the ammo counts in the weapon's clip and its reserve.</span>
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
      🧠 <code>CurrentAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current number of rounds in the clip.</span>
    </summary>
    <p>Current number of rounds in the clip.</p>
  </details>
  <details>
    <summary>
      🧠 <code>ReserveAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Number of rounds available in reserve.</span>
    </summary>
    <p>Number of rounds available in reserve.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `UWeaponComponent`
  <span class="brief-description-pill">Component responsible for all weapon behavior: firing, reloading, recoil, and UI updates.</span>
</summary>

> This component exposes:

* [FireWeapon()](#class_u_weapon_component_1aa9f322fa843b509d339ae30970396dd3) for triggering shots (supports sub-shots via the `SubShotIndex` parameter).

* [ReloadWeapon()](#class_u_weapon_component_1a0cc8cc9981a534155199674703d6a44a) and [FinishReloading()](#class_u_weapon_component_1a8fc78ff182ea627b1f08c68642cb85b1) for handling ammo refill.

* [UpdateCrosshairSpread()](#class_u_weapon_component_1a7441dc2b5b6429fcf4e28440c926f98a) for driving the HUD crosshair based on movement and weapon state.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>UWeaponComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor that sets default values for this component's properties.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 23–33)</p>
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
  <details>
    <summary>
      🧠 <code>FireWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Fire a single shot or sub-shot.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>int32 SubShotIndex</code> – Index to support multi-projectile weapons (e.g. shotgun pellets).</li>
        <li><code>float SimulatedTime</code> – Used for replicated fire timing; defaults to local time.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 345–588)</p>
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
  <details>
    <summary>
      🧠 <code>ResetRecoilPattern</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reset the recoil pattern to its starting index.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 590–596)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::ResetRecoilPattern()
{
	// Reset your current recoil index or logic here
	CurrentSprayIndex = 0;

	UE_LOG(LogTemp, Log, TEXT("Recoil pattern reset."));
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>StartFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Begin continuous fire (for automatic weapons).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 598–616)</p>
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
  <details>
    <summary>
      🧠 <code>StopFiring</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Cease continuous fire.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 618–626)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::StopFiring()
{
	bWantsToFire = false;
	bIsFiring = false;
	bHasFiredThisPress = false;

	// Reset accumulator to avoid unintended carry-over
	FireAccumulator = 0.0f;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleAutomaticFire</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called on each tick to handle automatic fire logic when [StartFiring()](#class_u_weapon_component_1a66deae0daed8099b90eb3c55943aa587) has been invoked.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 628–633)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::HandleAutomaticFire()
{
	if (!bIsFiring || !WeaponData) return;

	FireWeapon();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ReloadWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reload the weapon's clip if reserve ammo is available.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 635–644)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::ReloadWeapon()
{
	if (bIsReloading || !WeaponData) return;

	const int32 Needed = WeaponData->MagSize - CurrentMagAmmo;
	if (Needed <= 0 || CurrentReserveAmmo <= 0) return;

	bIsReloading = true;
	GetWorld()->GetTimerManager().SetTimer(ReloadTimer, this, &UWeaponComponent::FinishReloading, WeaponData->bInstantReload ? 0.001f : WeaponData->ReloadDuration, false);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>FinishReloading</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Finalize the reload, updating clip and reserve ammo counts.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 645–665)</p>
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
  <details>
    <summary>
      🧠 <code>GetCrosshairOffset</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieve the current pixel offset used by the crosshair.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 260–265)</p>
    <ExpandableCodeBlock code={`float UWeaponComponent::GetCrosshairOffset() const
{
	// Converts spread (degrees) to pixels � tune this multiplier!
	const float PixelMultiplier = 8.0f;
	return CurrentSpread * PixelMultiplier;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetGameHUDWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Assign the main HUD widget once the player controller has initialized it.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>* InHUD</code> – Reference to the player's HUD widget.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 267–270)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::SetGameHUDWidget(UGameHUDWidget* InHUD)
{
	CachedHUD = InHUD;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetCrosshairWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Provide the crosshair widget for dynamic spread updates.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>* InWidget</code> – The crosshair UI widget instance.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 272–281)</p>
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
  <details>
    <summary>
      🧠 <code>SetHitmarkerWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Provide the hitmarker widget to display impacts.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>* InWidget</code> – The hitmarker UI widget instance.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 283–286)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::SetHitmarkerWidget(UHitmarkerWidget* InWidget)
{
	HitmarkerWidgetRef = InWidget;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetCurrentSpread</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns the current spread value (degrees) for UI or recoil logic.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.h</code> (lines 169–169)</p>
    <ExpandableCodeBlock code={`	float GetCurrentSpread() const { return CurrentSpread; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetAmmoCounts</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Query the current ammo counts.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>int32 & OutClip</code> – Receives the number of rounds in the clip.</li>
        <li><code>int32 & OutReserve</code> – Receives the number of rounds in reserve.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 288–292)</p>
    <ExpandableCodeBlock code={`void UWeaponComponent::GetAmmoCounts(int32& OutClip, int32& OutReserve) const
{
	OutClip = CurrentMagAmmo;
	OutReserve = CurrentReserveAmmo;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetWeaponData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Switch to a different weapon data asset at runtime.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>* NewWeaponData</code> – The new weapon configuration asset.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 294–343)</p>
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
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts; initializes ammo and HUD references.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 37–82)</p>
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
  <details>
    <summary>
      🧠 <code>TickComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Per-frame update.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 84–188)</p>
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
  <details>
    <summary>
      🧠 <code>InitializeComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called once the component is registered; ensures any Blueprint wiring occurs.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 190–211)</p>
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
  <details>
    <summary>
      🧠 <code>CanFire</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Checks whether the weapon can currently fire.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 213–230)</p>
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
  <details>
    <summary>
      🧠 <code>UpdateCrosshairSpread</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Adjusts the player's crosshair spread based on movement, firing, and reload state.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float DeltaTime</code> – Time since last tick.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponComponent.cpp</code> (lines 232–257)</p>
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

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>WeaponData</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Data asset defining weapon parameters: damage, fire rate, spread, etc.</span>
    </summary>
    <p>Data asset defining weapon parameters: damage, fire rate, spread, etc.</p>
  </details>
  <details>
    <summary>
      🧠 <code>RecoilResetDelay</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Seconds after stopping fire before recoil pattern resets.</span>
    </summary>
    <p>Seconds after stopping fire before recoil pattern resets.</p>
  </details>
  <details>
    <summary>
      🧠 <code>RecoilRecoverySpeed</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Speed at which recoil recovers (higher = faster).</span>
    </summary>
    <p>Speed at which recoil recovers (higher = faster).</p>
  </details>
  <details>
    <summary>
      🧠 <code>RecoilInterpSpeed</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Interpolation speed for visual recoil easing.</span>
    </summary>
    <p>Interpolation speed for visual recoil easing.</p>
  </details>
  <details>
    <summary>
      🧠 <code>RecoveryStrength</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Degrees/sec strength to recover back to initial aim.</span>
    </summary>
    <p>Degrees/sec strength to recover back to initial aim.</p>
  </details>
  <details>
    <summary>
      🧠 <code>FOVPunchDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Duration of the field-of-view punch effect (seconds).</span>
    </summary>
    <p>Duration of the field-of-view punch effect (seconds).</p>
  </details>
  <details>
    <summary>
      🧠 <code>FOVEaseExponent</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Exponent for easing the FOV punch (higher = snappier start).</span>
    </summary>
    <p>Exponent for easing the FOV punch (higher = snappier start).</p>
  </details>
  <details>
    <summary>
      🧠 <code>CurrentMagAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current ammo loaded in the magazine.</span>
    </summary>
    <p>Current ammo loaded in the magazine.</p>
  </details>
  <details>
    <summary>
      🧠 <code>CurrentReserveAmmo</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current reserve ammo count.</span>
    </summary>
    <p>Current reserve ammo count.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bIsReloading</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">True while a reload sequence is in progress.</span>
    </summary>
    <p>True while a reload sequence is in progress.</p>
  </details>
  <details>
    <summary>
      🧠 <code>CrosshairWidgetRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Weak reference to the crosshair widget for UI updates.</span>
    </summary>
    <p>Weak reference to the crosshair widget for UI updates.</p>
  </details>
  <details>
    <summary>
      🧠 <code>HitmarkerWidgetRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Weak reference to the hitmarker widget for UI updates.</span>
    </summary>
    <p>Weak reference to the hitmarker widget for UI updates.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
