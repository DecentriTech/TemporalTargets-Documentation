---
title: "📄 File: SpectatorHudWidget.h"
slug: /API/_spectator_hud_widget_8h
---

# 📄 File: `SpectatorHudWidget.h`

> Declares the spectator HUD widget for displaying respawn countdowns.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [USpectatorHudWidget](#class_u_spectator_hud_widget) class, which provides:

* A countdown timer interface for spectators awaiting respawn.

* Blueprint-callable methods to initialize and update the countdown.

* UMG binding support for a countdown text block.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `USpectatorHudWidget`
  <span class="brief-description-pill">UI widget that displays a respawn countdown for spectators.</span>
</summary>

> This widget manages and displays the remaining time until respawn. Use [SetRespawnTime](#class_u_spectator_hud_widget_1ab7017e2d38139da608af09a7a0233439) to initialize the countdown, and [UpdateTimeRemaining](#class_u_spectator_hud_widget_1a187aa79f6b303d75f0684e9b7a588561) to refresh the display each tick.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>SetRespawnTime</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Initialize the countdown with the total respawn delay.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float TotalSeconds</code> – The full duration (in seconds) until respawn.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SpectatorHudWidget.cpp</code> (lines 8–12)</p>
    <ExpandableCodeBlock code={`void USpectatorHudWidget::SetRespawnTime(float TotalSeconds)
{
    TotalTime = TotalSeconds;
    UpdateTimeRemaining(TotalSeconds);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>UpdateTimeRemaining</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Update the countdown display with the remaining time.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float RemainingSeconds</code> – The seconds left until respawn triggers.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SpectatorHudWidget.cpp</code> (lines 14–21)</p>
    <ExpandableCodeBlock code={`void USpectatorHudWidget::UpdateTimeRemaining(float RemainingSeconds)
{
    if (!CountdownText) return;

    // Ceil so that 2.1?3, 2.0?2, etc.
    int32 Secs = FMath::CeilToInt(RemainingSeconds);
    CountdownText->SetText(FText::AsNumber(Secs));
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>CountdownText</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-protected-attrib">Protected</span>
      <span class="brief-description-pill">Text block bound in UMG to show the countdown number.</span>
    </summary>
    <p>Text block bound in UMG to show the countdown number.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
