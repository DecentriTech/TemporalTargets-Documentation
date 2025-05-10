---
title: "📄 File: GridCanvasWidget.h"
slug: /API/_grid_canvas_widget_8h
---

# 📄 File: `GridCanvasWidget.h`

> Declares the interactive Slate-backed spray pattern editor widget.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UGridCanvasWidget](#class_u_grid_canvas_widget) class and related types, used in designing and visualizing 2D recoil patterns. Features include:

* An editable canvas for placing and modifying spray points.

* Multiple edit modes via [ERecoilEditMode](#group___u_i___widgets_1ga81e2f378ed72995ca43cc3deb13507cc) (Point/Freehand).

* Support for grid scaling, zooming, snapping, and panning.

* Undo/redo functionality using [FPatternSnapshot](#struct_f_pattern_snapshot) snapshots.

* Grid rendering, axis labeling, and HUD hint overlays.

Also includes editor-callable export functionality to save the current pattern into a [UWeaponDataAsset](#class_u_weapon_data_asset) instance for use in gameplay.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `FPatternSnapshot`
  <span class="brief-description-pill">Snapshot of spray-pattern points for undo/redo operations.</span>
</summary>

> Stores a copy of the designer's input so that UndoStack/RedoStack can revert to previous states via RecordUndoSnapshot().

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>FPatternSnapshot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct from a point list.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.h</code> (lines 67–69)</p>
    <ExpandableCodeBlock code={`    FPatternSnapshot(const TArray<FVector2D>& InPts)
        : Points(InPts) {
    }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>FPatternSnapshot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct from a point list plus a preview point.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.h</code> (lines 72–74)</p>
    <ExpandableCodeBlock code={`    FPatternSnapshot(const TArray<FVector2D>& InPts, FVector2D InPreviewPoint)
        : Points(InPts), PreviewPoint(InPreviewPoint) {
    }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>FPatternSnapshot</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Default constructor for UE serialization.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>Points</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Sequence of 2D points representing the spray pattern.</span>
    </summary>
    <p>Sequence of 2D points representing the spray pattern.</p>
  </details>
  <details>
    <summary>
      🧠 <code>PreviewPoint</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Preview point shown when hovering or last point added.</span>
    </summary>
    <p>Preview point shown when hovering or last point added.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `UGridCanvasWidget`
  <span class="brief-description-pill">Slate-backed widget for authoring and previewing weapon spray patterns.</span>
</summary>

> [UGridCanvasWidget](#class_u_grid_canvas_widget) lets designers:

* Zoom ([Zoom](#class_u_grid_canvas_widget_1a8b294a32e146b92ece32f6ce8c0219d6)) and pan ([PanOffset](#class_u_grid_canvas_widget_1a40c73780a82afbbe153da653d5facac7)) over a 2D grid.

* Switch edit modes via [ToggleEditMode()](#class_u_grid_canvas_widget_1ad20f17a7516276cf07f75ceb4d0b68e9) between ERecoilEditMode::Point and ERecoilEditMode::Freehand.

* Add, clear, scale ([ScaleSprayPatternUniform()](#class_u_grid_canvas_widget_1a277980892f05df5ed7fe46dc96ad3ddd), [ScaleSprayPattern()](#class_u_grid_canvas_widget_1a5a7bdf5d7870a0a87d9b45cab83526e2)) and export ([ExportSprayPattern()](#class_u_grid_canvas_widget_1a53a019ebb3c0d5ac9d8ea09e1b7fbe44)) spray points.

* Undo/redo strokes with [Undo()](#class_u_grid_canvas_widget_1a9a07dfe3f2d4ce2bb4eb46204d4ba9a3), [Redo()](#class_u_grid_canvas_widget_1a94b56c765eaf5fa15566118b52d3ecf1), backed by [UndoStack](#class_u_grid_canvas_widget_1a4846065e699258f2529fc2bd1fb830e6) / [RedoStack](#class_u_grid_canvas_widget_1aee5d312aa51f0694e52f8ed47a364c44) and helper [RecordUndoSnapshot()](#class_u_grid_canvas_widget_1a014eef438b321834225cc24ab83a8708).

Internally uses nested [FGridParams](#struct_u_grid_canvas_widget_1_1_f_grid_params) and [NativePaint()](#class_u_grid_canvas_widget_1ac57384fa5f8227744bffc1cb1ee7465d) to draw:

* Major/minor grid lines ([DrawGrid()](#class_u_grid_canvas_widget_1aea903413f50eabd54387ab5f0c85ce13)).

* Origin crosshair ([DrawOriginCrosshair()](#class_u_grid_canvas_widget_1a4107170129374db71e599de859e53942)).

* Axis labels ([DrawAxisLabels()](#class_u_grid_canvas_widget_1a96bd4b8913fb555cf3757ad3683e03f1)).

* Live preview lines and pattern points ([DrawSprayPattern()](#class_u_grid_canvas_widget_1ae32d3546ec59577d71780cf9596e063a), [DrawPreviewPoint()](#class_u_grid_canvas_widget_1ad8a1b003a01c4d0c67b840507f66b91f)).

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>UGridCanvasWidget</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructor-sets the widget to be focusable.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 110–114)</p>
    <ExpandableCodeBlock code={`UGridCanvasWidget::UGridCanvasWidget(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	SetIsFocusable(true);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetSprayPoints</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Replace the current spray points.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const TArray< FVector2D > & NewPoints</code> – The new point sequence to edit.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 142–155)</p>
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
  <details>
    <summary>
      🧠 <code>ScaleSprayPatternUniform</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Scale the pattern uniformly.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float Multiplier</code> – Uniform scale factor for X and Y.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 173–176)</p>
    <ExpandableCodeBlock code={`void UGridCanvasWidget::ScaleSprayPatternUniform(float Mul)
{
	ScaleSprayPattern(Mul, Mul);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ScaleSprayPattern</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Scale the pattern non-uniformly.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float XMultiplier</code> – Scale factor in X.</li>
        <li><code>float YMultiplier</code> – Scale factor in Y.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 157–171)</p>
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
  <details>
    <summary>
      🧠 <code>GetSprayPatternPoints</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Get a read-only reference to the current spray points.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.h</code> (lines 156–156)</p>
    <ExpandableCodeBlock code={`    const TArray<FVector2D>& GetSprayPatternPoints() const { return SprayPoints; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ExportSprayPattern</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Export the current spray pattern to a weapon asset.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>* TargetWeapon</code> – The weapon data asset to receive the pattern.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 238–262)</p>
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
  <details>
    <summary>
      🧠 <code>AddPoint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Add a point at the given world position.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 178–208)</p>
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
  <details>
    <summary>
      🧠 <code>ClearPoints</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Clear all spray points.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 210–215)</p>
    <ExpandableCodeBlock code={`void UGridCanvasWidget::ClearPoints()
{
	RecordUndoSnapshot();
	SprayPoints.Empty();
	bHasPreviewPoint = false;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetHoverPoint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Update the hover preview point.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 217–221)</p>
    <ExpandableCodeBlock code={`void UGridCanvasWidget::SetHoverPoint(const FVector2D& Point)
{
	HoverPoint = Point;
	bHasHoverPoint = true;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetPreviewPoint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieve the current preview point if any.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 228–236)</p>
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
  <details>
    <summary>
      🧠 <code>SetWeaponData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Associate this widget with a weapon data asset.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 223–226)</p>
    <ExpandableCodeBlock code={`void UGridCanvasWidget::SetWeaponData(UWeaponDataAsset* NewWeaponData)
{
	SelectedWeapon = NewWeaponData;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SetEditMode</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Set the editing mode (Point vs Freehand).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.h</code> (lines 192–192)</p>
    <ExpandableCodeBlock code={`    void SetEditMode(ERecoilEditMode NewMode) { EditMode = NewMode; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ToggleEditMode</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Toggle between Point and Freehand edit modes.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 265–277)</p>
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
  <details>
    <summary>
      🧠 <code>Undo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Undo the last pattern change, if any.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 279–288)</p>
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
  <details>
    <summary>
      🧠 <code>Redo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Redo the last undone pattern change, if any.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 290–299)</p>
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
  <details>
    <summary>
      🧠 <code>CanUndo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns true if an undo is possible.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.h</code> (lines 210–210)</p>
    <ExpandableCodeBlock code={`    bool CanUndo() const { return UndoStack.Num() > 0; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>CanRedo</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns true if a redo is possible.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.h</code> (lines 214–214)</p>
    <ExpandableCodeBlock code={`    bool CanRedo() const { return RedoStack.Num() > 0; }`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 116–120)</p>
    <ExpandableCodeBlock code={`void UGridCanvasWidget::NativeConstruct()
{
	Super::NativeConstruct();
	
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativeTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 122–135)</p>
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
  <details>
    <summary>
      🧠 <code>NativePaint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 302–344)</p>
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
  <details>
    <summary>
      🧠 <code>NativeOnMouseButtonDown</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 346–463)</p>
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
  <details>
    <summary>
      🧠 <code>NativeOnMouseButtonUp</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 465–503)</p>
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
  <details>
    <summary>
      🧠 <code>NativeOnMouseMove</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 505–611)</p>
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
  <details>
    <summary>
      🧠 <code>NativeOnMouseWheel</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 613–657)</p>
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
  <details>
    <summary>
      🧠 <code>NativeOnKeyDown</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 659–680)</p>
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
  <details>
    <summary>
      🧠 <code>NativeOnMouseEnter</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/GridCanvasWidget.cpp</code> (lines 682–694)</p>
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

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>Zoom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Overall zoom factor in world units per pixel.</span>
    </summary>
    <p>Overall zoom factor in world units per pixel.</p>
  </details>
  <details>
    <summary>
      🧠 <code>XAxisRange</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Horizontal range in world units on either side of origin.</span>
    </summary>
    <p>Horizontal range in world units on either side of origin.</p>
  </details>
  <details>
    <summary>
      🧠 <code>PanOffset</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Pixel offset for panning the grid origin.</span>
    </summary>
    <p>Pixel offset for panning the grid origin.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MinZoom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Minimum zoom when fitting to widget size.</span>
    </summary>
    <p>Minimum zoom when fitting to widget size.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MaxZoom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Maximum zoom allowed by user.</span>
    </summary>
    <p>Maximum zoom allowed by user.</p>
  </details>
  <details>
    <summary>
      🧠 <code>DefaultMagSize</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Default magazine size for pattern length if no weapon asset.</span>
    </summary>
    <p>Default magazine size for pattern length if no weapon asset.</p>
  </details>
  <details>
    <summary>
      🧠 <code>EditMode</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current edit mode (Point vs Freehand).</span>
    </summary>
    <p>Current edit mode (Point vs Freehand).</p>
  </details>
  <details>
    <summary>
      🧠 <code>SelectedWeapon</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Currently selected weapon asset for export.</span>
    </summary>
    <p>Currently selected weapon asset for export.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MajorLineColor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Color of major grid lines in world units.</span>
    </summary>
    <p>Color of major grid lines in world units.</p>
  </details>
  <details>
    <summary>
      🧠 <code>MinorLineColor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Color of minor grid lines in world units.</span>
    </summary>
    <p>Color of minor grid lines in world units.</p>
  </details>
  <details>
    <summary>
      🧠 <code>bSnapToGrid</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Snap points to a regular grid when adding.</span>
    </summary>
    <p>Snap points to a regular grid when adding.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SnapInterval</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Interval size when [bSnapToGrid](#class_u_grid_canvas_widget_1a50a898f2741dfc0314582c7bf0bd0d18) is enabled.</span>
    </summary>
    <p>Interval size when [bSnapToGrid](#class_u_grid_canvas_widget_1a50a898f2741dfc0314582c7bf0bd0d18) is enabled.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `UGridCanvasWidget::FGridParams`
  <span class="brief-description-pill">Parameters computed for grid rendering.</span>
</summary>

> Calculated in [CalcGridParams()](#class_u_grid_canvas_widget_1a11eeb7716666f2401182caf03e728ffb) and used by [NativePaint()](#class_u_grid_canvas_widget_1ac57384fa5f8227744bffc1cb1ee7465d) helpers.

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
      🧠 <code>Size</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Widget size in pixels.</span>
    </summary>
    <p>Widget size in pixels.</p>
  </details>
  <details>
    <summary>
      🧠 <code>WorldTL</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">World-space top-left corner.</span>
    </summary>
    <p>World-space top-left corner.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Step</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Major grid step.</span>
    </summary>
    <p>Major grid step.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SubStep</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Minor grid step.</span>
    </summary>
    <p>Minor grid step.</p>
  </details>
  <details>
    <summary>
      🧠 <code>StartWorldX</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">First major line X.</span>
    </summary>
    <p>First major line X.</p>
  </details>
  <details>
    <summary>
      🧠 <code>StartWorldY</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">First major line Y.</span>
    </summary>
    <p>First major line Y.</p>
  </details>
  <details>
    <summary>
      🧠 <code>StartWorldXMinor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">First minor line X.</span>
    </summary>
    <p>First minor line X.</p>
  </details>
  <details>
    <summary>
      🧠 <code>StartWorldYMinor</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">First minor line Y.</span>
    </summary>
    <p>First minor line Y.</p>
  </details>
  <details>
    <summary>
      🧠 <code>YZeroPx</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Screen Y of world Y==0.</span>
    </summary>
    <p>Screen Y of world Y==0.</p>
  </details>
  <details>
    <summary>
      🧠 <code>XZeroPx</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Screen X of world X==0.</span>
    </summary>
    <p>Screen X of world X==0.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
