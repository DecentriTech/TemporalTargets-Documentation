---
title: "📄 File: GameHUDWidget.h"
slug: /API/_game_h_u_d_widget_8h
---

# 📄 File: `GameHUDWidget.h`

> Declares the HUD widget that owns core UI elements like the crosshair, hitmarker, and ammo display.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UGameHUDWidget](#class_u_game_h_u_d_widget) class, responsible for:

* Managing HUD elements such as [UCrosshairWidget](#class_u_crosshair_widget) and [UHitmarkerWidget](#class_u_hitmarker_widget).

* Providing runtime access to UI widgets through BlueprintCallable and BlueprintPure functions.

* Updating ammo display with magazine and reserve counts.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UGameHUDWidget`
  <span class="brief-description-pill">Lightweight HUD container that owns UI elements like the crosshair, hit-marker, and ammo counters.</span>
</summary>

> Manages [crosshair](#class_u_crosshair_widget) and [hitmarker](#class_u_hitmarker_widget) instances, and updates [MagAmmoText](#class_u_game_h_u_d_widget_1a0a3ee833856c3eb7913ef46a274b37bd) and [ReserveAmmoText](#class_u_game_h_u_d_widget_1a5ef66cfa087619162dbd4c7b969eca47) to display ammo.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>InitializeHUD</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">One-shot call from the owning PlayerController to wire up runtime references.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUDWidget.cpp</code> (lines 16–19)</p>
    <ExpandableCodeBlock code={`void UGameHUDWidget::InitializeHUD()
{
	// Nothing to wire up yet, but exposing this hook keeps Blueprint logic readable.
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>AddWidgetToViewport</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Add an arbitrary widget (e.g.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>UUserWidget * WidgetToAdd</code> – Pointer to the UUserWidget to add to the viewport.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUDWidget.cpp</code> (lines 21–27)</p>
    <ExpandableCodeBlock code={`void UGameHUDWidget::AddWidgetToViewport(UUserWidget* WidgetToAdd)
{
	if (!WidgetToAdd) return;

	// Default Z-order 0 is fine for most HUD elements; caller can override later.
	WidgetToAdd->AddToViewport();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetCrosshairWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the crosshair widget instance for custom adjustments.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUDWidget.h</code> (lines 65–65)</p>
    <ExpandableCodeBlock code={`    UCrosshairWidget* GetCrosshairWidget() const { return CrosshairWidget; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetHitmarkerWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the hitmarker widget instance for custom adjustments.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUDWidget.h</code> (lines 72–72)</p>
    <ExpandableCodeBlock code={`    UHitmarkerWidget* GetHitmarkerWidget() const { return HitmarkerWidget; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>UpdateAmmoDisplay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Push updated ammo values to the on-screen counters.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>int32 CurrentMag</code> – Current magazine round count.</li>
        <li><code>int32 ReserveAmmo</code> – Remaining reserve ammo count.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUDWidget.cpp</code> (lines 29–39)</p>
    <ExpandableCodeBlock code={`void UGameHUDWidget::UpdateAmmoDisplay(int32 CurrentMag, int32 ReserveAmmo)
{
	UE_LOG(LogTemp, Log, TEXT("UpdateAmmoDisplay: Mag: %d | Reserve: %d"), CurrentMag, ReserveAmmo);

	if (MagAmmoText)
		SetAmmoText(MagAmmoText, CurrentMag);

	if (ReserveAmmoText)
		SetAmmoText(ReserveAmmoText, ReserveAmmo);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Override of UUserWidget::NativeConstruct to perform post-creation setup.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GameHUDWidget.cpp</code> (lines 8–14)</p>
    <ExpandableCodeBlock code={`void UGameHUDWidget::NativeConstruct()
{
	Super::NativeConstruct();

	// Designer widgets are already bound at this point�safe to touch them.
	InitializeHUD();
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
