---
title: "📄 File: HitmarkerWidget.h"
slug: /API/_hitmarker_widget_8h
---

# 📄 File: `HitmarkerWidget.h`

> Declares the hit marker widget and associated visual logic.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UHitmarkerWidget](#class_u_hitmarker_widget) class and its supporting structs:

* [FHitMarkerStyle](#struct_f_hit_marker_style): Defines visual and animation parameters for the marker.

* [FActiveHitMarker](#struct_f_active_hit_marker): Represents runtime state of active markers.

* [UHitmarkerWidget](#class_u_hitmarker_widget): A UUserWidget subclass that spawns and renders animated hit markers.

The widget uses Slate to draw "X"-shaped indicators with dynamic styles and colors, optionally highlighting kills using configurable gameplay tags.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `FHitMarkerStyle`
  <span class="brief-description-pill">Struct for hit marker style parameters.</span>
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
      🧠 <code>LineLength</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">How long each arm is drawn (in pixels).</span>
    </summary>
    <p>How long each arm is drawn (in pixels).</p>
  </details>
  <details>
    <summary>
      🧠 <code>InnerGap</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Distance from the center before each arm starts (in pixels).</span>
    </summary>
    <p>Distance from the center before each arm starts (in pixels).</p>
  </details>
  <details>
    <summary>
      🧠 <code>Thickness</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Thickness of the arms (in pixels).</span>
    </summary>
    <p>Thickness of the arms (in pixels).</p>
  </details>
  <details>
    <summary>
      🧠 <code>FadeTime</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Total display time (in seconds) before the marker fades out.</span>
    </summary>
    <p>Total display time (in seconds) before the marker fades out.</p>
  </details>
  <details>
    <summary>
      🧠 <code>JitterRange</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Random spawn offset (in pixels) for overlapping markers.</span>
    </summary>
    <p>Random spawn offset (in pixels) for overlapping markers.</p>
  </details>
  <details>
    <summary>
      🧠 <code>PopScale</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Initial scale when the marker pops (1.0 = normal size).</span>
    </summary>
    <p>Initial scale when the marker pops (1.0 = normal size).</p>
  </details>
  <details>
    <summary>
      🧠 <code>PopDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Duration (in seconds) of the pop animation ([PopScale](#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90) -> 1.0).</span>
    </summary>
    <p>Duration (in seconds) of the pop animation ([PopScale](#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90) -> 1.0).</p>
  </details>
  <details>
    <summary>
      🧠 <code>KillPopScale</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Scale override when the hit was a kill (overrides [PopScale](#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90)).</span>
    </summary>
    <p>Scale override when the hit was a kill (overrides [PopScale](#struct_f_hit_marker_style_1a7f6873ec5b9db4926a10c782c2d4ae90)).</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `FActiveHitMarker`
  <span class="brief-description-pill">Struct for storing hit marker state.</span>
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
      🧠 <code>Age</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Time since this marker was spawned (in seconds).</span>
    </summary>
    <p>Time since this marker was spawned (in seconds).</p>
  </details>
  <details>
    <summary>
      🧠 <code>FadeTime</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Lifetime before full fade-out (copied from [FHitMarkerStyle::FadeTime](#struct_f_hit_marker_style_1a4958e397562e2280a6092518928ce26e)).</span>
    </summary>
    <p>Lifetime before full fade-out (copied from [FHitMarkerStyle::FadeTime](#struct_f_hit_marker_style_1a4958e397562e2280a6092518928ce26e)).</p>
  </details>
  <details>
    <summary>
      🧠 <code>PopDuration</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Duration of the pop animation (copied from [FHitMarkerStyle::PopDuration](#struct_f_hit_marker_style_1aa993953115dc027cfa6d741f4f0cdc37)).</span>
    </summary>
    <p>Duration of the pop animation (copied from [FHitMarkerStyle::PopDuration](#struct_f_hit_marker_style_1aa993953115dc027cfa6d741f4f0cdc37)).</p>
  </details>
  <details>
    <summary>
      🧠 <code>Scale</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current scale factor for easing animation.</span>
    </summary>
    <p>Current scale factor for easing animation.</p>
  </details>
  <details>
    <summary>
      🧠 <code>Color</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Color tint for this marker instance.</span>
    </summary>
    <p>Color tint for this marker instance.</p>
  </details>
  <details>
    <summary>
      🧠 <code>AngleJitter</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Random rotation offset so overlapping markers differ visually.</span>
    </summary>
    <p>Random rotation offset so overlapping markers differ visually.</p>
  </details>
</details>

</details>

</details>
<!-- block -->

<!-- block -->
<details>
<summary>
  📘 Class `UHitmarkerWidget`
  <span class="brief-description-pill">Pure-Slate hit-marker widget that renders animated "X" overlays on hit events.</span>
</summary>

> Use [PushHitMarker](#class_u_hitmarker_widget_1ad4867a3494abc15f88b58ccae14564b5) to spawn a new marker based on a set of DamageTags.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>PushHitMarker</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Spawn a new hit marker based on the supplied `DamageTags`.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const FGameplayTagContainer & DamageTags</code> – Tag container used to determine marker color via .</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/HitmarkerWidget.cpp</code> (lines 23–28)</p>
    <ExpandableCodeBlock code={`void UHitmarkerWidget::PushHitMarker(const FGameplayTagContainer& DamageTags)
{
	AddMarker(DamageTags);  // Add to the list

    OnHitMarkerAdded(DamageTags);  // Call overridable hook
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnHitMarkerAdded</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Blueprint hook called after a marker is added.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const FGameplayTagContainer & DamageTags</code> – Same container passed to PushHitMarker.</li>
    </ul>

  </details>
  <details>
    <summary>
      🧠 <code>OnHitMarkerAdded_Implementation</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/HitmarkerWidget.cpp</code> (lines 6–10)</p>
    <ExpandableCodeBlock code={`void UHitmarkerWidget::OnHitMarkerAdded_Implementation(const FGameplayTagContainer& DamageTags)
{
	// Default implementation does nothing
	// Designers can override this to add custom behavior
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called once when the widget is constructed.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/HitmarkerWidget.cpp</code> (lines 15–18)</p>
    <ExpandableCodeBlock code={`void UHitmarkerWidget::NativeConstruct()
{
    Super::NativeConstruct();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativePreConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Preview a single marker in the UMG designer for layout purposes.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/HitmarkerWidget.cpp</code> (lines 60–76)</p>
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
  <details>
    <summary>
      🧠 <code>NativeTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Advance marker state and remove expired markers.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/HitmarkerWidget.cpp</code> (lines 80–86)</p>
    <ExpandableCodeBlock code={`void UHitmarkerWidget::NativeTick(const FGeometry& MyGeometry, float DeltaTime)
{
    Super::NativeTick(MyGeometry, DeltaTime);

    // Update all markers and prune any that have lived past FadeTime
    UpdateMarkers(DeltaTime);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativePaint</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Render active markers via Slate draw elements.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/HitmarkerWidget.cpp</code> (lines 115–122)</p>
    <ExpandableCodeBlock code={`int32 UHitmarkerWidget::NativePaint(const FPaintArgs& Args, const FGeometry& Geo,
    const FSlateRect& Culling, FSlateWindowElementList& Out,
    int32 Layer, const FWidgetStyle& StyleWS, bool bParentEnabled) const
{

    // Delegate to our helper so this override stays clean
    return RenderMarkers(Geo, Out, Layer);
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>Style</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Style parameters editable in the UMG designer (see [FHitMarkerStyle](#struct_f_hit_marker_style)).</span>
    </summary>
    <p>Style parameters editable in the UMG designer (see [FHitMarkerStyle](#struct_f_hit_marker_style)).</p>
  </details>
  <details>
    <summary>
      🧠 <code>KillTag</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Gameplay tag that triggers the "kill" color (defaults to TAG_Damage_Kill).</span>
    </summary>
    <p>Gameplay tag that triggers the "kill" color (defaults to TAG_Damage_Kill).</p>
  </details>
</details>

</details>

</details>
<!-- block -->
