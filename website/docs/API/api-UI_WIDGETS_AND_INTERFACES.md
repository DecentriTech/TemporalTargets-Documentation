---
id: UI_WIDGETS_AND_INTERFACES
title: UI WIDGETS AND INTERFACES
sidebar_label: UI WIDGETS AND INTERFACES
slug: /API/UI_WIDGETS_AND_INTERFACES
---

# 🗂️ Category: [UI WIDGETS AND INTERFACES](/docs/API/UI_WIDGETS_AND_INTERFACES)

> Classes providing HUD and UI components such as crosshair and hitmarker.

<!-- block -->

<details open>
<summary>📦 Classes in This Category</summary>

<!-- block -->

<details>
<summary>🔹 [AGameHUD](#AGameHUD)</summary>

Manages and displays the game's HUD, spawning the root UMG widget at BeginPlay and tearing it down at EndPlay.

<details>
<summary>📄 Description</summary>

Provides Blueprint-callable functions to access and manipulate the following child widgets:

* [UGameHUDWidget](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_game_h_u_d_widget) : The root HUD widget container.

* [UCrosshairWidget](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#class_u_crosshair_widget): Displays the player's crosshair.

* [UHitmarkerWidget](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_hitmarker_widget): Displays hit markers based on damage events.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UGameHUDWidget](#UGameHUDWidget)</summary>

Lightweight HUD container that owns UI elements like the crosshair, hit-marker, and ammo counters.

<details>
<summary>📄 Description</summary>

Manages [crosshair](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#class_u_crosshair_widget) and [hitmarker](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_hitmarker_widget) instances, and updates [MagAmmoText](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_game_h_u_d_widget_1a0a3ee833856c3eb7913ef46a274b37bd) and [ReserveAmmoText](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_game_h_u_d_widget_1a5ef66cfa087619162dbd4c7b969eca47) to display ammo.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UGridCanvasWidget](#UGridCanvasWidget)</summary>

Slate-backed widget for authoring and previewing weapon spray patterns.

<details>
<summary>📄 Description</summary>

[UGridCanvasWidget](#class_u_grid_canvas_widget) lets designers:

* Zoom ([Zoom](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a8b294a32e146b92ece32f6ce8c0219d6)) and pan ([PanOffset](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a40c73780a82afbbe153da653d5facac7)) over a 2D grid.

* Switch edit modes via [ToggleEditMode()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ad20f17a7516276cf07f75ceb4d0b68e9) between ERecoilEditMode::Point and ERecoilEditMode::Freehand.

* Add, clear, scale ([ScaleSprayPatternUniform()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a277980892f05df5ed7fe46dc96ad3ddd), [ScaleSprayPattern()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a5a7bdf5d7870a0a87d9b45cab83526e2)) and export ([ExportSprayPattern()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a53a019ebb3c0d5ac9d8ea09e1b7fbe44)) spray points.

* Undo/redo strokes with [Undo()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a9a07dfe3f2d4ce2bb4eb46204d4ba9a3), [Redo()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a94b56c765eaf5fa15566118b52d3ecf1), backed by [UndoStack](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a4846065e699258f2529fc2bd1fb830e6) / [RedoStack](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1aee5d312aa51f0694e52f8ed47a364c44) and helper [RecordUndoSnapshot()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a014eef438b321834225cc24ab83a8708).

Internally uses nested [FGridParams](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#struct_u_grid_canvas_widget_1_1_f_grid_params) and [NativePaint()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ac57384fa5f8227744bffc1cb1ee7465d) to draw:

* Major/minor grid lines ([DrawGrid()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1aea903413f50eabd54387ab5f0c85ce13)).

* Origin crosshair ([DrawOriginCrosshair()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a4107170129374db71e599de859e53942)).

* Axis labels ([DrawAxisLabels()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a96bd4b8913fb555cf3757ad3683e03f1)).

* Live preview lines and pattern points ([DrawSprayPattern()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ae32d3546ec59577d71780cf9596e063a), [DrawPreviewPoint()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ad8a1b003a01c4d0c67b840507f66b91f)).

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [UHitmarkerWidget](#UHitmarkerWidget)</summary>

Pure-Slate hit-marker widget that renders animated "X" overlays on hit events.

<details>
<summary>📄 Description</summary>

Use [PushHitMarker](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_hitmarker_widget_1ad4867a3494abc15f88b58ccae14564b5) to spawn a new marker based on a set of DamageTags.

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [FPatternSnapshot](#FPatternSnapshot)</summary>

Snapshot of spray-pattern points for undo/redo operations.

<details>
<summary>📄 Description</summary>

Stores a copy of the designer's input so that UndoStack/RedoStack can revert to previous states via RecordUndoSnapshot().

</details>

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [FHitMarkerStyle](#FHitMarkerStyle)</summary>

Struct for hit marker style parameters.

</details>

<!-- block -->

<!-- block -->

<details>
<summary>🔹 [FActiveHitMarker](#FActiveHitMarker)</summary>

Struct for storing hit marker state.

</details>

<!-- block -->

</details>

<!-- block -->
<!-- block -->

<details>
<summary>
  📘 Class `AGameHUD`
    <span class="brief-description-pill">Manages and displays the game's HUD, spawning the root UMG widget at BeginPlay and tearing it down at EndPlay.</span>
</summary>
<!-- block -->

# Class `AGameHUD` 

<!-- block -->

> Provides Blueprint-callable functions to access and manipulate the following child widgets:

* [UGameHUDWidget](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_game_h_u_d_widget) : The root HUD widget container.

* [UCrosshairWidget](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#class_u_crosshair_widget): Displays the player's crosshair.

* [UHitmarkerWidget](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_hitmarker_widget): Displays hit markers based on damage events.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class AGameHUD
  : public AHUD
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
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when the HUD is first created.</span>
    </summary>

    <p>Called when the HUD is first created.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.cpp</code>
    (lines 12–16)
  </p>

  <ExpandableCodeBlock code={`void AGameHUD::BeginPlay()
{
	Super::BeginPlay();
	EnsureHUDWidget();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>EndPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called when the HUD is destroyed or the level is unloaded.</span>
    </summary>

    <p>Called when the HUD is destroyed or the level is unloaded.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const EEndPlayReason::Type EndPlayReason</code> – Reason why EndPlay was invoked.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.cpp</code>
    (lines 18–28)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>EnsureHUDWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Ensures the HUD widget exists, creating it if necessary.</span>
    </summary>

    <p>Ensures the HUD widget exists, creating it if necessary.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.cpp</code>
    (lines 30–47)
  </p>

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
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetHUDWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns the root HUD widget instance.</span>
    </summary>

    <p>Returns the root HUD widget instance.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.h</code>
    (lines 60–60)
  </p>

  <ExpandableCodeBlock code={`	UGameHUDWidget* GetHUDWidget() const { return HUDWidget; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetCrosshairWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves the crosshair widget from the HUD.</span>
    </summary>

    <p>Retrieves the crosshair widget from the HUD.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.cpp</code>
    (lines 49–52)
  </p>

  <ExpandableCodeBlock code={`UCrosshairWidget* AGameHUD::GetCrosshairWidget() const
{
	return HUDWidget ? HUDWidget->GetCrosshairWidget() : nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetHitmarkerWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves the hitmarker widget from the HUD.</span>
    </summary>

    <p>Retrieves the hitmarker widget from the HUD.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.cpp</code>
    (lines 54–57)
  </p>

  <ExpandableCodeBlock code={`UHitmarkerWidget* AGameHUD::GetHitmarkerWidget() const
{
	return HUDWidget ? HUDWidget->GetHitmarkerWidget() : nullptr;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ShowHitmarker</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Triggers the hitmarker effect using the provided damage tags.</span>
    </summary>

    <p>Triggers the hitmarker effect using the provided damage tags.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const FGameplayTagContainer & DamageTags</code> – Gameplay tags describing the damage context.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUD.cpp</code>
    (lines 59–78)
  </p>

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
      <span class="brief-description-pill">Blueprint class for the root HUD widget.</span>
    </summary>

    <p>Blueprint class for the root HUD widget.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>HUDWidget</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Live instance of the root HUD widget (transient, not saved).</span>
    </summary>

    <p>Live instance of the root HUD widget (transient, not saved).</p>

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
  📘 Class `UGameHUDWidget`
    <span class="brief-description-pill">Lightweight HUD container that owns UI elements like the crosshair, hit-marker, and ammo counters.</span>
</summary>
<!-- block -->

# Class `UGameHUDWidget` 

<!-- block -->

> Manages [crosshair](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#class_u_crosshair_widget) and [hitmarker](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_hitmarker_widget) instances, and updates [MagAmmoText](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_game_h_u_d_widget_1a0a3ee833856c3eb7913ef46a274b37bd) and [ReserveAmmoText](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_game_h_u_d_widget_1a5ef66cfa087619162dbd4c7b969eca47) to display ammo.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UGameHUDWidget
  : public UUserWidget
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
      🧠 <code>InitializeHUD</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">One-shot call from the owning PlayerController to wire up runtime references.</span>
    </summary>

    <p>One-shot call from the owning PlayerController to wire up runtime references.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUDWidget.cpp</code>
    (lines 16–19)
  </p>

  <ExpandableCodeBlock code={`void UGameHUDWidget::InitializeHUD()
{
	// Nothing to wire up yet, but exposing this hook keeps Blueprint logic readable.
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>AddWidgetToViewport</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Add an arbitrary widget (e.g.</span>
    </summary>

    <p>Add an arbitrary widget (e.g.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>UUserWidget * WidgetToAdd</code> – Pointer to the UUserWidget to add to the viewport.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUDWidget.cpp</code>
    (lines 21–27)
  </p>

  <ExpandableCodeBlock code={`void UGameHUDWidget::AddWidgetToViewport(UUserWidget* WidgetToAdd)
{
	if (!WidgetToAdd) return;

	// Default Z-order 0 is fine for most HUD elements; caller can override later.
	WidgetToAdd->AddToViewport();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetCrosshairWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the crosshair widget instance for custom adjustments.</span>
    </summary>

    <p>Get the crosshair widget instance for custom adjustments.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUDWidget.h</code>
    (lines 49–49)
  </p>

  <ExpandableCodeBlock code={`    UCrosshairWidget* GetCrosshairWidget() const { return CrosshairWidget; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetHitmarkerWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get the hitmarker widget instance for custom adjustments.</span>
    </summary>

    <p>Get the hitmarker widget instance for custom adjustments.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUDWidget.h</code>
    (lines 56–56)
  </p>

  <ExpandableCodeBlock code={`    UHitmarkerWidget* GetHitmarkerWidget() const { return HitmarkerWidget; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>UpdateAmmoDisplay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Push updated ammo values to the on-screen counters.</span>
    </summary>

    <p>Push updated ammo values to the on-screen counters.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>int32 CurrentMag</code> – Current magazine round count.</li>
        <li><code>int32 ReserveAmmo</code> – Remaining reserve ammo count.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUDWidget.cpp</code>
    (lines 29–39)
  </p>

  <ExpandableCodeBlock code={`void UGameHUDWidget::UpdateAmmoDisplay(int32 CurrentMag, int32 ReserveAmmo)
{
	UE_LOG(LogTemp, Log, TEXT("UpdateAmmoDisplay: Mag: %d | Reserve: %d"), CurrentMag, ReserveAmmo);

	if (MagAmmoText)
		SetAmmoText(MagAmmoText, CurrentMag);

	if (ReserveAmmoText)
		SetAmmoText(ReserveAmmoText, ReserveAmmo);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Override of UUserWidget::NativeConstruct to perform post-creation setup.</span>
    </summary>

    <p>Override of UUserWidget::NativeConstruct to perform post-creation setup.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GameHUDWidget.cpp</code>
    (lines 8–14)
  </p>

  <ExpandableCodeBlock code={`void UGameHUDWidget::NativeConstruct()
{
	Super::NativeConstruct();

	// Designer widgets are already bound at this point�safe to touch them.
	InitializeHUD();
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
  📘 Class `UGridCanvasWidget`
    <span class="brief-description-pill">Slate-backed widget for authoring and previewing weapon spray patterns.</span>
</summary>
<!-- block -->

# Class `UGridCanvasWidget` 

<!-- block -->

> [UGridCanvasWidget](#class_u_grid_canvas_widget) lets designers:

* Zoom ([Zoom](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a8b294a32e146b92ece32f6ce8c0219d6)) and pan ([PanOffset](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a40c73780a82afbbe153da653d5facac7)) over a 2D grid.

* Switch edit modes via [ToggleEditMode()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ad20f17a7516276cf07f75ceb4d0b68e9) between ERecoilEditMode::Point and ERecoilEditMode::Freehand.

* Add, clear, scale ([ScaleSprayPatternUniform()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a277980892f05df5ed7fe46dc96ad3ddd), [ScaleSprayPattern()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a5a7bdf5d7870a0a87d9b45cab83526e2)) and export ([ExportSprayPattern()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a53a019ebb3c0d5ac9d8ea09e1b7fbe44)) spray points.

* Undo/redo strokes with [Undo()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a9a07dfe3f2d4ce2bb4eb46204d4ba9a3), [Redo()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a94b56c765eaf5fa15566118b52d3ecf1), backed by [UndoStack](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a4846065e699258f2529fc2bd1fb830e6) / [RedoStack](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1aee5d312aa51f0694e52f8ed47a364c44) and helper [RecordUndoSnapshot()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a014eef438b321834225cc24ab83a8708).

Internally uses nested [FGridParams](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-undefined.md#struct_u_grid_canvas_widget_1_1_f_grid_params) and [NativePaint()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ac57384fa5f8227744bffc1cb1ee7465d) to draw:

* Major/minor grid lines ([DrawGrid()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1aea903413f50eabd54387ab5f0c85ce13)).

* Origin crosshair ([DrawOriginCrosshair()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a4107170129374db71e599de859e53942)).

* Axis labels ([DrawAxisLabels()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a96bd4b8913fb555cf3757ad3683e03f1)).

* Live preview lines and pattern points ([DrawSprayPattern()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ae32d3546ec59577d71780cf9596e063a), [DrawPreviewPoint()](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1ad8a1b003a01c4d0c67b840507f66b91f)).

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UGridCanvasWidget
  : public UUserWidget
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
      🧠 <code>UGridCanvasWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor-sets the widget to be focusable.</span>
    </summary>

    <p>Constructor-sets the widget to be focusable.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 110–114)
  </p>

  <ExpandableCodeBlock code={`UGridCanvasWidget::UGridCanvasWidget(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	SetIsFocusable(true);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetSprayPoints</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Replace the current spray points.</span>
    </summary>

    <p>Replace the current spray points.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const TArray< FVector2D > & NewPoints</code> – The new point sequence to edit.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 142–155)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::SetSprayPoints(const TArray<FVector2D>& NewPoints)
{
	SprayPoints = NewPoints;
	BaselineSprayPoints = SprayPoints;

	if (SprayPoints.Num())
	{
		PreviewPoint = SprayPoints.Last();
		bHasPreviewPoint = true;
	}
	else bHasPreviewPoint = false;

	Invalidate(EInvalidateWidget::LayoutAndVolatility);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ScaleSprayPatternUniform</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Scale the pattern uniformly.</span>
    </summary>

    <p>Scale the pattern uniformly.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float Multiplier</code> – Uniform scale factor for X and Y.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 173–176)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::ScaleSprayPatternUniform(float Mul)
{
	ScaleSprayPattern(Mul, Mul);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ScaleSprayPattern</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Scale the pattern non-uniformly.</span>
    </summary>

    <p>Scale the pattern non-uniformly.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>float XMultiplier</code> – Scale factor in X.</li>
        <li><code>float YMultiplier</code> – Scale factor in Y.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 157–171)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::ScaleSprayPattern(float XMul, float YMul)
{
	if (!BaselineSprayPoints.Num()) return;

	RecordUndoSnapshot();

	SprayPoints.Empty(BaselineSprayPoints.Num());
	for (const FVector2D& Pt : BaselineSprayPoints)
		SprayPoints.Add({ Pt.X * XMul, Pt.Y * YMul });

	PreviewPoint = SprayPoints.Last();
	bHasPreviewPoint = true;

	Invalidate(EInvalidateWidget::LayoutAndVolatility);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetSprayPatternPoints</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get a read-only reference to the current spray points.</span>
    </summary>

    <p>Get a read-only reference to the current spray points.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.h</code>
    (lines 135–135)
  </p>

  <ExpandableCodeBlock code={`    const TArray<FVector2D>& GetSprayPatternPoints() const { return SprayPoints; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ExportSprayPattern</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Export the current spray pattern to a weapon asset.</span>
    </summary>

    <p>Export the current spray pattern to a weapon asset.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>* TargetWeapon</code> – The weapon data asset to receive the pattern.</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 238–262)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::ExportSprayPattern(UWeaponDataAsset* TargetWeapon)
{
	if (!TargetWeapon)
	{
		UE_LOG(LogTemp, Error, TEXT("[ExportSprayPattern] Null TargetWeapon passed in."));
		return;
	}

	UE_LOG(LogTemp, Log, TEXT("[ExportSprayPattern] Setting SprayPattern for %s. Num points: %d"),
		*TargetWeapon->GetName(), SprayPoints.Num());

	TArray<FVector2D> Ordered = SprayPoints;
	Ordered.Sort([](const FVector2D& A, const FVector2D& B)
		{
			return A.Y < B.Y;
		});

	TargetWeapon->SprayPattern = Ordered;

	TargetWeapon->Modify(); // For undo support
	TargetWeapon->MarkPackageDirty(); // Mark the asset dirty for saving

	UE_LOG(LogTemp, Log, TEXT("Exported %d spray points to weapon: %s"), Ordered.Num(), *TargetWeapon->GetName());

}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>AddPoint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Add a point at the given world position.</span>
    </summary>

    <p>Add a point at the given world position.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 178–208)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::AddPoint(const FVector2D& Point)
{
	RecordUndoSnapshot();

	if (SelectedWeapon && SprayPoints.Num() >= SelectedWeapon->MagSize) return;

	FVector2D P = Point;

	// designer wants the top of the graph clamped to Y == 0
	if (P.Y > -10.f && P.Y < 0.f)   P.Y = 0.f;
	if (P.Y < -10.f)                return;

	if (bSnapToGrid && SnapInterval > 0.f)
	{
		P.X = FMath::RoundToFloat(P.X / SnapInterval) * SnapInterval;
		P.Y = FMath::RoundToFloat(P.Y / SnapInterval) * SnapInterval;
	}

	// avoid duplicates
	for (const FVector2D& Existing : SprayPoints)
		if (FVector2D::Distance(Existing, P) <= KINDA_SMALL_NUMBER)
		{
			PreviewPoint = Existing;
			bHasPreviewPoint = true;
			return;
		}

	SprayPoints.Add(P);
	PreviewPoint = P;
	bHasPreviewPoint = true;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ClearPoints</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Clear all spray points.</span>
    </summary>

    <p>Clear all spray points.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 210–215)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::ClearPoints()
{
	RecordUndoSnapshot();
	SprayPoints.Empty();
	bHasPreviewPoint = false;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetHoverPoint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Update the hover preview point.</span>
    </summary>

    <p>Update the hover preview point.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 217–221)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::SetHoverPoint(const FVector2D& Point)
{
	HoverPoint = Point;
	bHasHoverPoint = true;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>GetPreviewPoint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieve the current preview point if any.</span>
    </summary>

    <p>Retrieve the current preview point if any.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 228–236)
  </p>

  <ExpandableCodeBlock code={`bool UGridCanvasWidget::GetPreviewPoint(FVector2D& OutPoint) const
{
	if (bHasPreviewPoint)
	{
		OutPoint = PreviewPoint;
		return true;
	}
	return false;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetWeaponData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Associate this widget with a weapon data asset.</span>
    </summary>

    <p>Associate this widget with a weapon data asset.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 223–226)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::SetWeaponData(UWeaponDataAsset* NewWeaponData)
{
	SelectedWeapon = NewWeaponData;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>SetEditMode</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Set the editing mode (Point vs Freehand).</span>
    </summary>

    <p>Set the editing mode (Point vs Freehand).</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.h</code>
    (lines 171–171)
  </p>

  <ExpandableCodeBlock code={`    void SetEditMode(ERecoilEditMode NewMode) { EditMode = NewMode; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>ToggleEditMode</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Toggle between Point and Freehand edit modes.</span>
    </summary>

    <p>Toggle between Point and Freehand edit modes.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 265–277)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::ToggleEditMode()
{
	if (EditMode == ERecoilEditMode::Point)
	{
		SetEditMode(ERecoilEditMode::Freehand);
		UE_LOG(LogTemp, Log, TEXT("Switched to Freehand Edit Mode"));
	}
	else
	{
		SetEditMode(ERecoilEditMode::Point);
		UE_LOG(LogTemp, Log, TEXT("Switched to Point Edit Mode"));
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Undo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Undo the last pattern change, if any.</span>
    </summary>

    <p>Undo the last pattern change, if any.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 279–288)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::Undo()
{
	if (!CanUndo()) return;
	RedoStack.Emplace(SprayPoints, PreviewPoint);	// Save current Redo
	SprayPoints = MoveTemp(UndoStack.Last().Points); // Grab Last Points
	PreviewPoint = UndoStack.Last().PreviewPoint; // Restore preview point
	UndoStack.Pop();
	BaselineSprayPoints = SprayPoints;
	Invalidate(EInvalidateWidget::LayoutAndVolatility);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>Redo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Redo the last undone pattern change, if any.</span>
    </summary>

    <p>Redo the last undone pattern change, if any.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 290–299)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::Redo()
{
	if (!CanRedo()) return;
	UndoStack.Emplace(SprayPoints, PreviewPoint);
	SprayPoints = MoveTemp(RedoStack.Last().Points);
	PreviewPoint = RedoStack.Last().PreviewPoint;
	RedoStack.Pop();
	BaselineSprayPoints = SprayPoints;
	Invalidate(EInvalidateWidget::LayoutAndVolatility);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CanUndo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns true if an undo is possible.</span>
    </summary>

    <p>Returns true if an undo is possible.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.h</code>
    (lines 189–189)
  </p>

  <ExpandableCodeBlock code={`    bool CanUndo() const { return UndoStack.Num() > 0; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>CanRedo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns true if a redo is possible.</span>
    </summary>

    <p>Returns true if a redo is possible.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.h</code>
    (lines 193–193)
  </p>

  <ExpandableCodeBlock code={`    bool CanRedo() const { return RedoStack.Num() > 0; }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 116–120)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::NativeConstruct()
{
	Super::NativeConstruct();
	
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 122–135)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::NativeTick(const FGeometry& MyGeometry, float InDeltaTime)
{
	Super::NativeTick(MyGeometry, InDeltaTime);

	// one-shot auto-fit when widget receives first valid size
	if (!bDidInitialSetup && MyGeometry.GetLocalSize().X > 0.f)
	{
		const FVector2D Size = MyGeometry.GetLocalSize();
		Zoom = Size.X / (XAxisRange * 2.f);
		PanOffset = { Size.X / 2.f, 30.f };   // origin centred, Y-space for labels
		AddPoint({ 0,0 });
		bDidInitialSetup = true;
	}
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativePaint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 302–344)
  </p>

  <ExpandableCodeBlock code={`int32 UGridCanvasWidget::NativePaint(const FPaintArgs& Args, const FGeometry& AllottedGeometry,
	const FSlateRect& MyCullingRect, FSlateWindowElementList& OutDrawElements,
	int32 LayerId, const FWidgetStyle& InWidgetStyle, bool bParentEnabled) const
{
	Super::NativePaint(Args, AllottedGeometry, MyCullingRect, OutDrawElements, LayerId, InWidgetStyle, bParentEnabled);

	// 1) Push one clip for the whole widget
	const FSlateRect ClipRect = AllottedGeometry.GetLayoutBoundingRect();
	const FSlateClippingZone ClippingZone(ClipRect);
	OutDrawElements.PushClip(ClippingZone);

	// 1) gather all the numbers your grid code needs
	const FGridParams P = CalcGridParams(AllottedGeometry);

	// 2) draw the grid lines (minor/major, tick at Y=0)
	DrawGrid(AllottedGeometry, OutDrawElements, LayerId, P);

	// 3) the origin crosshair (center dot + 4 ticks)
	DrawOriginCrosshair(AllottedGeometry, OutDrawElements, LayerId, P);

	// 4) axis labels (0 label, numeric Y left/right, numeric X top)
	DrawAxisLabels(AllottedGeometry, OutDrawElements, LayerId, P);

	// 5) little HUD hints ("<- LEFT" / "RIGHT ->")
	DrawHudHints(AllottedGeometry, OutDrawElements, LayerId);

	// 6) spray-pattern points + pulse + glow + index
	DrawSprayPattern(AllottedGeometry, OutDrawElements, LayerId);

	// 7) preview point rings + tooltip
	DrawPreviewPoint(AllottedGeometry, OutDrawElements, LayerId);

	// 8) live freehand ribbon if active
	if (EditMode == ERecoilEditMode::Freehand && bDrawingStroke && RawStroke.Num() > 1)
	{
		DrawFreehandPreview(OutDrawElements, LayerId, AllottedGeometry, MyCullingRect);
	}

	// 9) pop our clipping zone and return the new max layer
	OutDrawElements.PopClip();
	return LayerId + 13;
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeOnMouseButtonDown</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 346–463)
  </p>

  <ExpandableCodeBlock code={`FReply UGridCanvasWidget::NativeOnMouseButtonDown(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
{
	UE_LOG(LogTemp, Log, TEXT("UGridCanvasWidget::NativeOnMouseButtonDown"));

	// Make sure the widget can receive keyboard input
	if (TSharedPtr<SWidget> MySlate = GetCachedWidget())
	{
		if (!FSlateApplication::Get().HasFocusedDescendants(MySlate.ToSharedRef()))
		{
			FSlateApplication::Get().SetKeyboardFocus(
				MySlate.ToSharedRef(),                // convert Ptr -> Ref
				EFocusCause::SetDirectly);
		}
	}

	const FVector2D Local = InGeometry.AbsoluteToLocal(InMouseEvent.GetScreenSpacePosition());
	const FVector2D Logical = (Local - PanOffset) / Zoom;
	const float SnapRadius = 8.0f / Zoom;
	FVector2D FinalLogical = Logical;

	if (Logical.Y > -10.0f && Logical.Y < 0.0f)
	{
		FinalLogical.Y = 0.0f; // clamp to zero
	}
	else if (Logical.Y < 0 && Logical.Y < -10.0f)
	{
		return FReply::Handled(); // ignore points above Y=-10 
	}

	if (bSnapToGrid && SnapInterval > 0.0f)
	{
		FinalLogical.X = FMath::RoundToFloat(FinalLogical.X / SnapInterval) * SnapInterval;
		FinalLogical.Y = FMath::RoundToFloat(FinalLogical.Y / SnapInterval) * SnapInterval;
	}

	if (EditMode == ERecoilEditMode::Freehand && InMouseEvent.GetEffectingButton() == EKeys::LeftMouseButton)
	{
		RecordUndoSnapshot();

		RawStroke.Reset();
		RawStroke.Add(FinalLogical);
		bDrawingStroke = true;           // reuse existing flag to keep capture
		return FReply::Handled().CaptureMouse(GetCachedWidget().ToSharedRef());
	}

	if (InMouseEvent.GetEffectingButton() == EKeys::LeftMouseButton)
	{
		if (InMouseEvent.IsShiftDown())
		{
			RecordUndoSnapshot();

			for (int32 i = 0; i < SprayPoints.Num(); ++i)
			{
				if (FVector2D::Distance(SprayPoints[i], FinalLogical) <= SnapRadius)
				{
					DraggedPointIndex = i;
					PreviewPoint = SprayPoints[i];
					bDraggingPoint = true;
					return FReply::Handled().CaptureMouse(GetCachedWidget().ToSharedRef());
				}
			}
		}
		else
		{
			// Normal add behavior
			for (const FVector2D& Point : SprayPoints)
			{
				if (FVector2D::Distance(Point, Logical) <= SnapRadius)
				{
					RecordUndoSnapshot();

					PreviewPoint = Point;
					bHasPreviewPoint = true;
					return FReply::Handled();
				}
			}

			AddPoint(Logical);
			bHasPreviewPoint = true;
			return FReply::Handled();
		}
	}

	if (InMouseEvent.GetEffectingButton() == EKeys::RightMouseButton)
	{

		if (InMouseEvent.IsShiftDown())
		{
			// RMB (without SHIFT) = Delete
			for (int32 i = 0; i < SprayPoints.Num(); ++i)
			{
				if (FVector2D::Distance(SprayPoints[i], FinalLogical) <= SnapRadius)
				{
					SprayPoints.RemoveAt(i);
					bHasPreviewPoint = false;
					return FReply::Handled();
				}
			}
		}
		else
		{
			bDragging = true;
			LastMousePosition = InMouseEvent.GetScreenSpacePosition();
			return FReply::Handled().CaptureMouse(GetCachedWidget().ToSharedRef());
		}

	}

	return FReply::Unhandled();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeOnMouseButtonUp</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 465–503)
  </p>

  <ExpandableCodeBlock code={`FReply UGridCanvasWidget::NativeOnMouseButtonUp(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
{
	if (InMouseEvent.GetEffectingButton() == EKeys::LeftMouseButton && EditMode == ERecoilEditMode::Freehand && bDrawingStroke)
	{

		bDrawingStroke = false;

		const int32 DesiredCount = GetDesiredShotCount();

		SprayPoints = ResampleStroke(DesiredCount);
		BaselineSprayPoints = SprayPoints;

		if (SprayPoints.Num())
		{
			PreviewPoint = SprayPoints.Last();
			bHasPreviewPoint = true;
		}

		return FReply::Handled().ReleaseMouseCapture();
	}

	if (InMouseEvent.GetEffectingButton() == EKeys::LeftMouseButton)
	{
		if (bDraggingPoint)
		{
			bDraggingPoint = false;
			DraggedPointIndex = INDEX_NONE;
			return FReply::Handled().ReleaseMouseCapture();
		}
	}

	if (InMouseEvent.GetEffectingButton() == EKeys::RightMouseButton)
	{
		bDragging = false;
		return FReply::Handled().ReleaseMouseCapture();
	}

	return FReply::Unhandled();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeOnMouseMove</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 505–611)
  </p>

  <ExpandableCodeBlock code={`FReply UGridCanvasWidget::NativeOnMouseMove(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
{

	// Freehand drawing
	if (bDrawingStroke && EditMode == ERecoilEditMode::Freehand)
	{
		const FVector2D Local = InGeometry.AbsoluteToLocal(
			InMouseEvent.GetScreenSpacePosition());
		FVector2D Logical = (Local - PanOffset) / Zoom;

		// snap / clamp
		if (bSnapToGrid && SnapInterval > 0.0f)
		{
			Logical.X = FMath::RoundToFloat(Logical.X / SnapInterval) * SnapInterval;
			Logical.Y = FMath::RoundToFloat(Logical.Y / SnapInterval) * SnapInterval;
		}

		if (Logical.Y > -10.0f && Logical.Y < 0.0f)
		{
			Logical.Y = 0.0f;
		}
		else if (Logical.Y < -10.0f)
		{
			Logical.Y = -10.0f;
		}

		if (ShouldStorePoint(RawStroke.Last(), Logical, 0.005 /**World Units Min Distance**/))
		{
			RawStroke.Add(Logical);
			PreviewPoint = Logical;
			bHasPreviewPoint = true;
			Invalidate(EInvalidateWidget::Layout);
		}
		return FReply::Handled();
	}

	if (bDraggingPoint && DraggedPointIndex != INDEX_NONE)
	{
		const FVector2D Local = InGeometry.AbsoluteToLocal(InMouseEvent.GetScreenSpacePosition());
		FVector2D NewLogical = (Local - PanOffset) / Zoom;

		if (bSnapToGrid && SnapInterval > 0.0f)
		{
			NewLogical.X = FMath::RoundToFloat(NewLogical.X / SnapInterval) * SnapInterval;
			NewLogical.Y = FMath::RoundToFloat(NewLogical.Y / SnapInterval) * SnapInterval;
		}

		if (NewLogical.Y > -10.0f && NewLogical.Y < 0.0f)
		{
			NewLogical.Y = 0.0f;
		}
		else if (NewLogical.Y < -10.0f)
		{
			NewLogical.Y = -10.0f;
		}

		SprayPoints[DraggedPointIndex] = NewLogical;
		PreviewPoint = NewLogical;
		bHasPreviewPoint = true;

		return FReply::Handled();
	}

	if (bDragging)
	{
		// Set cursor while dragging
		if (APlayerController* PC = GetWorld()->GetFirstPlayerController())
		{
			PC->CurrentMouseCursor = EMouseCursor::GrabHand;
		}

		const FVector2D Size = GetCachedGeometry().GetLocalSize();
		FVector2D Delta = InMouseEvent.GetScreenSpacePosition() - LastMousePosition;
		PanOffset += Delta;

		PanOffset.Y = FMath::Min(PanOffset.Y, 30.0f);

		float LeftWorldX = (-PanOffset.X) / Zoom;
		float RightWorldX = (Size.X - PanOffset.X) / Zoom;

		if (LeftWorldX < -XAxisRange)
		{
			PanOffset.X = -(-XAxisRange * Zoom);
		}
		else if (RightWorldX > XAxisRange)
		{
			PanOffset.X = Size.X - (XAxisRange * Zoom);
		}

		LastMousePosition = InMouseEvent.GetScreenSpacePosition();
		return FReply::Handled();
	}
	else
	{
		// Reset cursor when done dragging
		if (APlayerController* PC = GetWorld()->GetFirstPlayerController())
		{
			PC->CurrentMouseCursor = EMouseCursor::Default;
		}

		return FReply::Handled().ReleaseMouseCapture();
	}

	return FReply::Unhandled();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeOnMouseWheel</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 613–657)
  </p>

  <ExpandableCodeBlock code={`FReply UGridCanvasWidget::NativeOnMouseWheel(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
{

	const FVector2D Size = GetCachedGeometry().GetLocalSize();

	const float ScrollDelta = InMouseEvent.GetWheelDelta();
	const float ZoomFactor = FMath::Pow(1.1f, ScrollDelta);
	const float NewUnclampedZoom = Zoom * ZoomFactor;

	const float ScreenWidth = InGeometry.GetLocalSize().X;
	const float MinAllowedZoom = ScreenWidth / (XAxisRange * 2.0f); // Don't allow zooming out past this
	const float MaxAllowedZoom = MaxZoom; // Your defined zoom-in limit (e.g., 100)

	float NewZoom = FMath::Clamp(NewUnclampedZoom, MinAllowedZoom, MaxAllowedZoom);

	// Optional: Snap to min if close
	if (FMath::IsNearlyEqual(NewZoom, MinAllowedZoom, 0.01f))
	{
		NewZoom = MinAllowedZoom;
	}

	// Adjust PanOffset to zoom around mouse location
	const FVector2D MouseLocal = InGeometry.AbsoluteToLocal(InMouseEvent.GetScreenSpacePosition());
	PanOffset = MouseLocal - ((MouseLocal - PanOffset) * (NewZoom / Zoom));
	Zoom = NewZoom;

	// Compute world space positions of left/right edges
	float LeftWorldX = (-PanOffset.X) / Zoom;
	float RightWorldX = (Size.X - PanOffset.X) / Zoom;

	// Clamp to -XAxisRange and +XAxisRange
	if (LeftWorldX < -XAxisRange)
	{
		PanOffset.X = -(-XAxisRange * Zoom);
	}
	else if (RightWorldX > XAxisRange)
	{
		PanOffset.X = Size.X - (XAxisRange * Zoom);
	}

	// Clamp vertical pan
	PanOffset.Y = FMath::Min(PanOffset.Y, 30.0f);

	return FReply::Handled();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeOnKeyDown</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 659–680)
  </p>

  <ExpandableCodeBlock code={`FReply UGridCanvasWidget::NativeOnKeyDown(const FGeometry& MyGeometry, const FKeyEvent& InKeyEvent)
{
	const bool bCtrl = InKeyEvent.IsControlDown();
	const bool bAlt = InKeyEvent.IsAltDown();

	if (bAlt)
	{
		ToggleEditMode();
	}

	if (bCtrl && InKeyEvent.GetKey() == EKeys::Z)
	{
		Undo();
		return FReply::Handled();
	}
	if (bCtrl && InKeyEvent.GetKey() == EKeys::Y)
	{
		Redo();
		return FReply::Handled();
	}
	return Super::NativeOnKeyDown(MyGeometry, InKeyEvent);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeOnMouseEnter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.cpp</code>
    (lines 682–694)
  </p>

  <ExpandableCodeBlock code={`void UGridCanvasWidget::NativeOnMouseEnter(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
{
	Super::NativeOnMouseEnter(InGeometry, InMouseEvent);

	// Force keyboard focus to this widget as soon as the mouse enters it
	if (TSharedPtr<SWidget> Slate = GetCachedWidget())
	{
		FSlateApplication::Get().SetKeyboardFocus(
			Slate.ToSharedRef(),
			EFocusCause::Mouse
		);
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
      🧠 <code>Zoom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Overall zoom factor in world units per pixel.</span>
    </summary>

    <p>Overall zoom factor in world units per pixel.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>XAxisRange</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Horizontal range in world units on either side of origin.</span>
    </summary>

    <p>Horizontal range in world units on either side of origin.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>PanOffset</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Pixel offset for panning the grid origin.</span>
    </summary>

    <p>Pixel offset for panning the grid origin.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MinZoom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Minimum zoom when fitting to widget size.</span>
    </summary>

    <p>Minimum zoom when fitting to widget size.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MaxZoom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum zoom allowed by user.</span>
    </summary>

    <p>Maximum zoom allowed by user.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>DefaultMagSize</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Default magazine size for pattern length if no weapon asset.</span>
    </summary>

    <p>Default magazine size for pattern length if no weapon asset.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>EditMode</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current edit mode (Point vs Freehand).</span>
    </summary>

    <p>Current edit mode (Point vs Freehand).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SelectedWeapon</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Currently selected weapon asset for export.</span>
    </summary>

    <p>Currently selected weapon asset for export.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MajorLineColor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Color of major grid lines in world units.</span>
    </summary>

    <p>Color of major grid lines in world units.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>MinorLineColor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Color of minor grid lines in world units.</span>
    </summary>

    <p>Color of minor grid lines in world units.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>bSnapToGrid</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Snap points to a regular grid when adding.</span>
    </summary>

    <p>Snap points to a regular grid when adding.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>SnapInterval</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Interval size when [bSnapToGrid](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a50a898f2741dfc0314582c7bf0bd0d18) is enabled.</span>
    </summary>

    <p>Interval size when [bSnapToGrid](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_grid_canvas_widget_1a50a898f2741dfc0314582c7bf0bd0d18) is enabled.</p>

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
  📘 Class `UHitmarkerWidget`
    <span class="brief-description-pill">Pure-Slate hit-marker widget that renders animated "X" overlays on hit events.</span>
</summary>
<!-- block -->

# Class `UHitmarkerWidget` 

<!-- block -->

> Use [PushHitMarker](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#class_u_hitmarker_widget_1ad4867a3494abc15f88b58ccae14564b5) to spawn a new marker based on a set of DamageTags.

<!-- block -->

<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
class UHitmarkerWidget
  : public UUserWidget
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
      🧠 <code>PushHitMarker</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Spawn a new hit marker based on the supplied `DamageTags`.</span>
    </summary>

    <p>Spawn a new hit marker based on the supplied `DamageTags`.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const FGameplayTagContainer & DamageTags</code> – Tag container used to determine marker color via .</li>
      </ul>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/HitmarkerWidget.cpp</code>
    (lines 23–28)
  </p>

  <ExpandableCodeBlock code={`void UHitmarkerWidget::PushHitMarker(const FGameplayTagContainer& DamageTags)
{
	AddMarker(DamageTags);  // Add to the list

    OnHitMarkerAdded(DamageTags);  // Call overridable hook
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnHitMarkerAdded</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Blueprint hook called after a marker is added.</span>
    </summary>

    <p>Blueprint hook called after a marker is added.</p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>const FGameplayTagContainer & DamageTags</code> – Same container passed to .</li>
      </ul>

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>OnHitMarkerAdded_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/HitmarkerWidget.cpp</code>
    (lines 6–10)
  </p>

  <ExpandableCodeBlock code={`void UHitmarkerWidget::OnHitMarkerAdded_Implementation(const FGameplayTagContainer& DamageTags)
{
	// Default implementation does nothing
	// Designers can override this to add custom behavior
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called once when the widget is constructed.</span>
    </summary>

    <p>Called once when the widget is constructed.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/HitmarkerWidget.cpp</code>
    (lines 15–18)
  </p>

  <ExpandableCodeBlock code={`void UHitmarkerWidget::NativeConstruct()
{
    Super::NativeConstruct();
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativePreConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Preview a single marker in the UMG designer for layout purposes.</span>
    </summary>

    <p>Preview a single marker in the UMG designer for layout purposes.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/HitmarkerWidget.cpp</code>
    (lines 60–76)
  </p>

  <ExpandableCodeBlock code={`void UHitmarkerWidget::NativePreConstruct()
{
    Super::NativePreConstruct();

    // Show a single, static marker in the UMG designer (so you can see it)
    if (IsDesignTime() && !HasAnyFlags(RF_ClassDefaultObject))
    {
        ActiveMarkers.Empty();
        FActiveHitMarker& Preview = ActiveMarkers.AddDefaulted_GetRef();
        Preview.Age = 0.f;
        Preview.FadeTime = Style.FadeTime;
        Preview.PopDuration = Style.PopDuration;
        Preview.Scale = 1.f;
        Preview.Color = FLinearColor::White;
        Preview.AngleJitter = 0.f;
    }
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativeTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Advance marker state and remove expired markers.</span>
    </summary>

    <p>Advance marker state and remove expired markers.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/HitmarkerWidget.cpp</code>
    (lines 80–86)
  </p>

  <ExpandableCodeBlock code={`void UHitmarkerWidget::NativeTick(const FGeometry& MyGeometry, float DeltaTime)
{
    Super::NativeTick(MyGeometry, DeltaTime);

    // Update all markers and prune any that have lived past FadeTime
    UpdateMarkers(DeltaTime);
}`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>NativePaint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Render active markers via Slate draw elements.</span>
    </summary>

    <p>Render active markers via Slate draw elements.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/HitmarkerWidget.cpp</code>
    (lines 115–122)
  </p>

  <ExpandableCodeBlock code={`int32 UHitmarkerWidget::NativePaint(const FPaintArgs& Args, const FGeometry& Geo,
    const FSlateRect& Culling, FSlateWindowElementList& Out,
    int32 Layer, const FWidgetStyle& StyleWS, bool bParentEnabled) const
{

    // Delegate to our helper so this override stays clean
    return RenderMarkers(Geo, Out, Layer);
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
      🧠 <code>Style</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Style parameters editable in the UMG designer (see [FHitMarkerStyle](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style)).</span>
    </summary>

    <p>Style parameters editable in the UMG designer (see [FHitMarkerStyle](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style)).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>KillTag</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Gameplay tag that triggers the �kill� color (defaults to TAG_Damage_Kill).</span>
    </summary>

    <p>Gameplay tag that triggers the �kill� color (defaults to TAG_Damage_Kill).</p>

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
  📘 Class `FPatternSnapshot`
    <span class="brief-description-pill">Snapshot of spray-pattern points for undo/redo operations.</span>
</summary>
<!-- block -->

# Class `FPatternSnapshot` 

<!-- block -->

> Stores a copy of the designer's input so that UndoStack/RedoStack can revert to previous states via RecordUndoSnapshot().

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
      🧠 <code>FPatternSnapshot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct from a point list.</span>
    </summary>

    <p>Construct from a point list.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.h</code>
    (lines 46–48)
  </p>

  <ExpandableCodeBlock code={`    FPatternSnapshot(const TArray<FVector2D>& InPts)
        : Points(InPts) {
    }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>FPatternSnapshot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct from a point list plus a preview point.</span>
    </summary>

    <p>Construct from a point list plus a preview point.</p>

      <p><strong>Parameters:</strong> None</p>

  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>Source/TimeAssassin/GridCanvasWidget.h</code>
    (lines 51–53)
  </p>

  <ExpandableCodeBlock code={`    FPatternSnapshot(const TArray<FVector2D>& InPts, FVector2D InPreviewPoint)
        : Points(InPts), PreviewPoint(InPreviewPoint) {
    }`} language="cpp" previewLines={15} />

  </details>
  <!-- block -->
  <!-- block -->
  <details>
    <summary>
      🧠 <code>FPatternSnapshot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor for UE serialization.</span>
    </summary>

    <p>Default constructor for UE serialization.</p>

      <p><strong>Parameters:</strong> None</p>

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
      🧠 <code>Points</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Sequence of 2D points representing the spray pattern.</span>
    </summary>

    <p>Sequence of 2D points representing the spray pattern.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>PreviewPoint</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Preview point shown when hovering or last point added.</span>
    </summary>

    <p>Preview point shown when hovering or last point added.</p>

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
  📘 Class `FHitMarkerStyle`
    <span class="brief-description-pill">Struct for hit marker style parameters.</span>
</summary>
<!-- block -->

# Class `FHitMarkerStyle` 

<details open>
<summary>🧍 Members</summary>

<!-- block -->

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>LineLength</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">How long each arm is drawn (in pixels).</span>
    </summary>

    <p>How long each arm is drawn (in pixels).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>InnerGap</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Distance from the center before each arm starts (in pixels).</span>
    </summary>

    <p>Distance from the center before each arm starts (in pixels).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>Thickness</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Thickness of the arms (in pixels).</span>
    </summary>

    <p>Thickness of the arms (in pixels).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FadeTime</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Total display time (in seconds) before the marker fades out.</span>
    </summary>

    <p>Total display time (in seconds) before the marker fades out.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>JitterRange</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Random spawn offset (in pixels) for overlapping markers.</span>
    </summary>

    <p>Random spawn offset (in pixels) for overlapping markers.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>PopScale</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Initial scale when the marker pops (1.0 = normal size).</span>
    </summary>

    <p>Initial scale when the marker pops (1.0 = normal size).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>PopDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Duration (in seconds) of the pop animation ([PopScale](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90) -> 1.0).</span>
    </summary>

    <p>Duration (in seconds) of the pop animation ([PopScale](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90) -> 1.0).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>KillPopScale</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Scale override when the hit was a kill (overrides [PopScale](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90)).</span>
    </summary>

    <p>Scale override when the hit was a kill (overrides [PopScale](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90)).</p>

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
  📘 Class `FActiveHitMarker`
    <span class="brief-description-pill">Struct for storing hit marker state.</span>
</summary>
<!-- block -->

# Class `FActiveHitMarker` 

<details open>
<summary>🧍 Members</summary>

<!-- block -->

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

  <!-- block -->
  <details>
    <summary>
      🧠 <code>Age</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Time since this marker was spawned (in seconds).</span>
    </summary>

    <p>Time since this marker was spawned (in seconds).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>FadeTime</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Lifetime before full fade-out (copied from [FHitMarkerStyle::FadeTime](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1a4958e397562e2280a6092518928ce26e)).</span>
    </summary>

    <p>Lifetime before full fade-out (copied from [FHitMarkerStyle::FadeTime](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1a4958e397562e2280a6092518928ce26e)).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>PopDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Duration of the pop animation (copied from [FHitMarkerStyle::PopDuration](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1aa993953115dc027cfa6d741f4f0cdc37)).</span>
    </summary>

    <p>Duration of the pop animation (copied from [FHitMarkerStyle::PopDuration](F:\Projects\Documentation\TemporalTargets-Documentation\generated_md/api-UI_WIDGETS_AND_INTERFACES.md#struct_f_hit_marker_style_1aa993953115dc027cfa6d741f4f0cdc37)).</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>Scale</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current scale factor for easing animation.</span>
    </summary>

    <p>Current scale factor for easing animation.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>Color</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Color tint for this marker instance.</span>
    </summary>

    <p>Color tint for this marker instance.</p>

  </details>
  <!-- block -->

  <!-- block -->
  <details>
    <summary>
      🧠 <code>AngleJitter</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Random rotation offset so overlapping markers differ visually.</span>
    </summary>

    <p>Random rotation offset so overlapping markers differ visually.</p>

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
