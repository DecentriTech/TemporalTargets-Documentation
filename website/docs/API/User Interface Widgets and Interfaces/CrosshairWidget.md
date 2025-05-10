---
title: "📄 File: CrosshairWidget.h"
slug: /API/_crosshair_widget_8h
---

# 📄 File: `CrosshairWidget.h`

> Declares the [UCrosshairWidget](#class_u_crosshair_widget) class responsible for rendering and controlling the dynamic crosshair UI.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UCrosshairWidget](#class_u_crosshair_widget) class, a UUserWidget used to:

* Display crosshair elements using four directional line segments.

* Dynamically update crosshair spread at runtime with SetCrosshairOffset.

* Bind UMG elements via LineTop, LineBottom, LineLeft, and LineRight.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UCrosshairWidget`
  <span class="brief-description-pill">Widget responsible for rendering and updating the on-screen crosshair.</span>
</summary>

> This widget binds four images�[LineTop](#class_u_crosshair_widget_1a6491a6afac78a362f5dd83eca73919d9), [LineBottom](#class_u_crosshair_widget_1a68c8ef8bea2ec2789bcc126cd615d593), [LineLeft](#class_u_crosshair_widget_1ac35a9d307542e3416339376358d53e77), and LineRight�to the UMG designer. Call [SetCrosshairOffset()](#class_u_crosshair_widget_1adde65dfafb16c94ca45f871eea345c7d) to adjust the spread of these lines at runtime.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>SetCrosshairOffset</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Adjusts the distance of each crosshair line from center.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float SpreadOffset</code> – New offset in pixels to apply to each line.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/CrosshairWidget.cpp</code> (lines 7–20)</p>
    <ExpandableCodeBlock code={`void UCrosshairWidget::SetCrosshairOffset(float SpreadOffset)
{
	if (LineTop)
		LineTop->SetRenderTranslation(FVector2D(0.0f, -SpreadOffset));

	if (LineBottom)
		LineBottom->SetRenderTranslation(FVector2D(0.0f, SpreadOffset));

	if (LineLeft)
		LineLeft->SetRenderTranslation(FVector2D(-SpreadOffset, 0.0f));

	if (LineRight)
		LineRight->SetRenderTranslation(FVector2D(SpreadOffset, 0.0f));
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>LineTop</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Top segment of the crosshair graphic, bound via UMG.</span>
    </summary>
    <p>Top segment of the crosshair graphic, bound via UMG.</p>
  </details>
  <details>
    <summary>
      🧠 <code>LineBottom</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Bottom segment of the crosshair graphic, bound via UMG.</span>
    </summary>
    <p>Bottom segment of the crosshair graphic, bound via UMG.</p>
  </details>
  <details>
    <summary>
      🧠 <code>LineLeft</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Left segment of the crosshair graphic, bound via UMG.</span>
    </summary>
    <p>Left segment of the crosshair graphic, bound via UMG.</p>
  </details>
  <details>
    <summary>
      🧠 <code>LineRight</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Right segment of the crosshair graphic, bound via UMG.</span>
    </summary>
    <p>Right segment of the crosshair graphic, bound via UMG.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
