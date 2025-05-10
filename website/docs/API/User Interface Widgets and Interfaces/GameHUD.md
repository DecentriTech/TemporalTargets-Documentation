---
title: "📄 File: GameHUD.h"
slug: /API/_game_h_u_d_8h
---

# 📄 File: `GameHUD.h`

> Declares the HUD controller class for spawning and managing UMG-based HUD widgets.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [AGameHUD](#class_a_game_h_u_d) class, which handles:

* Initializing the main HUD widget at runtime.

* Access to key sub-widgets like crosshair and hitmarker.

* Blueprint-exposed utilities for UI interaction.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `AGameHUD`
  <span class="brief-description-pill">Manages and displays the game's HUD, spawning the root UMG widget at BeginPlay and tearing it down at EndPlay.</span>
</summary>

> Provides Blueprint-callable functions to access and manipulate the following child widgets:

* [UGameHUDWidget](#class_u_game_h_u_d_widget) : The root HUD widget container.

* [UCrosshairWidget](#class_u_crosshair_widget): Displays the player's crosshair.

* [UHitmarkerWidget](#class_u_hitmarker_widget): Displays hit markers based on damage events.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when the HUD is first created.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.cpp</code> (lines 12–16)</p>
    <ExpandableCodeBlock code={`void AGameHUD::BeginPlay()
{
	Super::BeginPlay();
	EnsureHUDWidget();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>EndPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when the HUD is destroyed or the level is unloaded.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const EEndPlayReason::Type EndPlayReason</code> – Reason why EndPlay was invoked.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.cpp</code> (lines 18–28)</p>
    <ExpandableCodeBlock code={`void AGameHUD::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
	// Tear down the widget when the HUD is destroyed/level unloaded
	if (HUDWidget)
	{
		HUDWidget->RemoveFromParent();
		HUDWidget = nullptr;
	}

	Super::EndPlay(EndPlayReason);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>EnsureHUDWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Ensures the HUD widget exists, creating it if necessary.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.cpp</code> (lines 30–47)</p>
    <ExpandableCodeBlock code={`void AGameHUD::EnsureHUDWidget()
{
	if (HUDWidget || !HUDWidgetClass) return;

	HUDWidget = CreateWidget<UGameHUDWidget>(GetOwningPlayerController(), HUDWidgetClass);
	if (HUDWidget)
	{
		HUDWidget->AddToViewport();
		HUDWidget->InitializeHUD();
		UE_LOG(LogTemp, Log, TEXT("AGameHUD: Created HUDWidget from class '%s'."), *GetNameSafe(HUDWidgetClass));
	}
	else
	{
		UE_LOG(LogTemp, Error,
			TEXT("AGameHUD: Failed to create HUDWidget from class '%s'."),
			*GetNameSafe(HUDWidgetClass));
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetHUDWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns the root HUD widget instance.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.h</code> (lines 76–76)</p>
    <ExpandableCodeBlock code={`	UGameHUDWidget* GetHUDWidget() const { return HUDWidget; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetCrosshairWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves the crosshair widget from the HUD.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.cpp</code> (lines 49–52)</p>
    <ExpandableCodeBlock code={`UCrosshairWidget* AGameHUD::GetCrosshairWidget() const
{
	return HUDWidget ? HUDWidget->GetCrosshairWidget() : nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetHitmarkerWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves the hitmarker widget from the HUD.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.cpp</code> (lines 54–57)</p>
    <ExpandableCodeBlock code={`UHitmarkerWidget* AGameHUD::GetHitmarkerWidget() const
{
	return HUDWidget ? HUDWidget->GetHitmarkerWidget() : nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ShowHitmarker</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Triggers the hitmarker effect using the provided damage tags.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const FGameplayTagContainer & DamageTags</code> – Gameplay tags describing the damage context.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUD.cpp</code> (lines 59–78)</p>
    <ExpandableCodeBlock code={`void AGameHUD::ShowHitmarker(const FGameplayTagContainer& DamageTags)
{
	if (!HUDWidget)
	{
		UE_LOG(LogTemp, Warning,
			TEXT("AGameHUD::ShowHitmarker called before HUDWidget was initialised."));
		return;
	}

	if (UHitmarkerWidget* HitWidget = HUDWidget->GetHitmarkerWidget())
	{
		HitWidget->PushHitMarker(DamageTags);
		HitWidget->OnHitMarkerAdded(DamageTags);
	}
	else
	{
		UE_LOG(LogTemp, Warning,
			TEXT("AGameHUD::ShowHitmarker - HitmarkerWidget missing on HUDWidget."));
	}
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
      <span class="brief-description-pill">Blueprint class for the root HUD widget.</span>
    </summary>
    <p>Blueprint class for the root HUD widget.</p>
  </details>
  <details>
    <summary>
      🧠 <code>HUDWidget</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Live instance of the root HUD widget (transient, not saved).</span>
    </summary>
    <p>Live instance of the root HUD widget (transient, not saved).</p>
  </details>
</details>

</details>

</details>
<!-- block -->
