---
title: "📄 File: ReplayRecorderComponent.h"
slug: /API/_replay_recorder_component_8h
---

# 📄 File: `ReplayRecorderComponent.h`

> Declares the [UReplayRecorderComponent](#class_u_replay_recorder_component) for capturing per-frame player replay data.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UReplayRecorderComponent](#class_u_replay_recorder_component) class, which is responsible for:

* Capturing frame-by-frame player data at a specified interval.

* Logging interaction and combat events during gameplay.

* Exposing recorded replay data for later playback or analysis.

[Modular Components](#group___modular___components)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UReplayRecorderComponent`
  <span class="brief-description-pill">Component that captures and stores per-frame player state for replay.</span>
</summary>

> [UReplayRecorderComponent](#class_u_replay_recorder_component) ticks every frame and, when active, collects a stream of [FPlayerFrameData](#struct_f_player_frame_data) at intervals defined by [RecordingInterval](#class_u_replay_recorder_component_1a4841fd81b50d9458b6b2542404c676cd). It also records interaction events via [CaptureInteractionData()](#class_u_replay_recorder_component_1a4d009df22d2f236d5956cdc7931229aa) and shot events via [CaptureShotData()](#class_u_replay_recorder_component_1a95379bbc4b1adfd811455da125dffaf4). All recorded frames are exposed through [GetRecordedData()](#class_u_replay_recorder_component_1a6a4a12bbaf2bcc3f32b46aa2e5136d19).

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>UReplayRecorderComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Construct and set default component properties.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 8–15)</p>
    <ExpandableCodeBlock code={`UReplayRecorderComponent::UReplayRecorderComponent()
{
	PrimaryComponentTick.bCanEverTick = true;
	bRecording = false;
	RecordingInterval = 0.033f; // Approximately 30 FPS
	RecordingAccumulator = 0.0f;
    CurrentFrameActionFlags = EReplayActionFlags::None;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>TickComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Called each frame to advance recording logic.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float DeltaTime</code> – Time since last tick.</li>
        <li><code>ELevelTick TickType</code> – Type of tick this is.</li>
        <li><code>FActorComponentTickFunction * ThisTickFunction</code> – Internal tick function struct.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 67–132)</p>
    <ExpandableCodeBlock code={`void UReplayRecorderComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

    // Debug Log to Check if Tick is Running
    GEngine->AddOnScreenDebugMessage(9999, 1.0f, FColor::Red, TEXT("[ReplayRecorder] TickComponent is RUNNING"));

    if (bRecording)
    {
        RecordingAccumulator += DeltaTime;

        // Log accumulated time before the frame update
        FString LogMessage = FString::Printf(TEXT("[ReplayRecorder] Accumulated Time: %.3f"), RecordingAccumulator);
        GEngine->AddOnScreenDebugMessage((uint64)89, 0.05f, FColor::Cyan, LogMessage);

        if (RecordingAccumulator >= RecordingInterval)
        {
            // Reset the accumulator
            RecordingAccumulator = 0.0f;

            // Capture current state from the owner (player character)
            AActor* Owner = GetOwner();
            if (Owner)
            {
                FPlayerFrameData Frame;
                Frame.TimeStamp = Owner->GetWorld()->GetTimeSeconds();
                Frame.Position = Owner->GetActorLocation();
				Frame.Velocity = Owner->GetVelocity();
                Frame.Rotation = Owner->GetActorRotation();
                Frame.ActionFlags = CurrentFrameActionFlags;

                if (Frame.HasAction(EReplayActionFlags::Interacted))
                {
                    Frame.InteractionData = PendingInteractionData;
                }

                if (Frame.HasAction(EReplayActionFlags::FiredWeapon))
                {
                    Frame.CombatData = PendingCombatData;

                    if (Frame.CombatData.Shots.Num()) UE_LOG(LogTemp, Log, TEXT("Frame copy impact = %s"), *Frame.CombatData.Shots.Last().ImpactLocation.ToString());
                }

                RecordedFrames.Add(Frame);

                // Log the frame data
                FString FrameLog = FString::Printf(
                    TEXT("[ReplayRecorder] Frame: %d | TimeStamp: %.2f | Position: (%.2f, %.2f, %.2f) | Rotation: (%.2f, %.2f, %.2f) | Flags: %d"),
                    RecordedFrames.Num(),
                    Frame.TimeStamp,
                    Frame.Position.X, Frame.Position.Y, Frame.Position.Z,
                    Frame.Rotation.Pitch, Frame.Rotation.Yaw, Frame.Rotation.Roll,
                    (uint8)Frame.ActionFlags
                );

                // Use a static message key to avoid spam
                GEngine->AddOnScreenDebugMessage(123456, 2.0f, FColor::Green, FrameLog);
            }
            // Reset the accumulated flags after recording the frame.
            CurrentFrameActionFlags = EReplayActionFlags::None;
            PendingInteractionData = FInteractionData();
			PendingCombatData = FCombatFrameData();
        }
    }
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>StartRecording</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Begin a new recording session.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 18–24)</p>
    <ExpandableCodeBlock code={`void UReplayRecorderComponent::StartRecording()
{
    RecordedFrames.Empty();
    bRecording = true;
    RecordingAccumulator = 0.0f;
    CurrentFrameActionFlags = EReplayActionFlags::None;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>StopRecording</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">End the current recording session.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 26–29)</p>
    <ExpandableCodeBlock code={`void UReplayRecorderComponent::StopRecording()
{
    bRecording = false;
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>AddActionFlag</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Add an action flag for this frame.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code> NewFlag</code> – The  to record.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 31–35)</p>
    <ExpandableCodeBlock code={`void UReplayRecorderComponent::AddActionFlag(EReplayActionFlags NewFlag)
{
    // Blueprint callable function to add an action flag.
    CurrentFrameActionFlags = (EReplayActionFlags)((uint8)CurrentFrameActionFlags | (uint8)NewFlag);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>CaptureInteractionData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Capture interaction metadata when the player interacts with an actor.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>AActor * InteractedActor</code> – The actor being interacted with.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 37–57)</p>
    <ExpandableCodeBlock code={`void UReplayRecorderComponent::CaptureInteractionData(AActor* InteractedActor)
{
    if (!InteractedActor || !bRecording) return;

	PendingInteractionData.TargetActorPath = FSoftObjectPath(InteractedActor);
    PendingInteractionData.RelativeLocationToTarget = GetOwner()->GetActorLocation() - InteractedActor->GetActorLocation();

    // Optional: set a tag/type here
    if (InteractedActor->ActorHasTag("Pickup"))
    {
        PendingInteractionData.InteractionType = FName("Pickup");
    }
    else if (InteractedActor->ActorHasTag("Terminal"))
    {
        PendingInteractionData.InteractionType = FName("Terminal");
    }
    else
    {
        PendingInteractionData.InteractionType = FName("Generic");
    }
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>CaptureShotData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Append a recorded shot event to the pending combat data.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>const  & ShotData</code> – The  details for this shot.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.cpp</code> (lines 59–65)</p>
    <ExpandableCodeBlock code={`void UReplayRecorderComponent::CaptureShotData(const FRecordedShot& ShotData)
{
	if (!bRecording) return;
	PendingCombatData.Shots.Add(ShotData);

    UE_LOG(LogTemp, Log, TEXT("PendingCombatData last shot = %s"), *PendingCombatData.Shots.Last().ImpactLocation.ToString());
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetRecordedData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Access the array of recorded frames.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/ReplayRecorderComponent.h</code> (lines 116–116)</p>
    <ExpandableCodeBlock code={`	const TArray<FPlayerFrameData>& GetRecordedData() const { return RecordedFrames; }`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>RecordedFrames</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Storage of all frames captured since the last [StartRecording()](#class_u_replay_recorder_component_1a0ae8d215de8e486015cc161070c8e111).</span>
    </summary>
    <p>Storage of all frames captured since the last [StartRecording()](#class_u_replay_recorder_component_1a0ae8d215de8e486015cc161070c8e111).</p>
  </details>
</details>

</details>

</details>
<!-- block -->
