---
title: "📄 File: WeaponInventoryComponent.h"
slug: /API/_weapon_inventory_component_8h
---

# 📄 File: `WeaponInventoryComponent.h`

> Declares the weapon inventory component used for managing a character's owned weapons and handling weapon switching.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [UWeaponInventoryComponent](#class_u_weapon_inventory_component) class, which:

* Stores and manages a collection of soft references to weapon data assets.

* Provides methods for switching, cycling, and initializing weapons.

* Bridges weapon data to an active weapon component reference.

[Modular Components](#group___modular___components)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `UWeaponInventoryComponent`
  <span class="brief-description-pill">Manages the collection of weapons a character owns and handles switching, cycling, and initialization.</span>
</summary>

> This component maintains an inventory of [UWeaponDataAsset](#class_u_weapon_data_asset) entries, equips a selected weapon via the associated [UWeaponComponent](#class_u_weapon_component), and provides Blueprint-callable methods to switch or cycle weapons.

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>UWeaponInventoryComponent</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Constructs the component and initializes default settings.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 8–15)</p>
    <ExpandableCodeBlock code={`UWeaponInventoryComponent::UWeaponInventoryComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = false;

	// ...
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>SwitchToWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Switches to the weapon at the specified slot index.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>int32 Index</code> – Index into  to equip. Does nothing if Index is invalid.</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 62–79)</p>
    <ExpandableCodeBlock code={`void UWeaponInventoryComponent::SwitchToWeapon(int32 Index)
{
	if (!WeaponComponentRef || !WeaponInventory.IsValidIndex(Index)) return;

	if (WeaponInventory.Num() == 0)
	{
		UE_LOG(LogTemp, Error, TEXT("[%s] Tried to switch weapon, but WeaponList is empty!"), *GetName());
		return;
	}

	UWeaponDataAsset* NewWeapon = WeaponInventory[Index].LoadSynchronous();
	if (!NewWeapon) return;

	AssignWeaponToComponent(NewWeapon);
	CurrentWeaponIndex = Index;

	UE_LOG(LogTemp, Log, TEXT("Switched to weapon index %d: %s"), Index, *NewWeapon->GetName());
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>CycleWeapon</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Advances to the next weapon in [WeaponInventory](#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e), wrapping to the start.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 81–97)</p>
    <ExpandableCodeBlock code={`void UWeaponInventoryComponent::CycleWeapon()
{
	if (WeaponInventory.Num() == 0)
	{
		UE_LOG(LogTemp, Error, TEXT("[WeaponInventory] Weapon list is empty! Cannot cycle weapons."));
		return;
	}

	if (WeaponComponentRef->bIsReloading)
	{
		UE_LOG(LogTemp, Warning, TEXT("[WeaponInventory] Cannot switch weapons while reloading."));
		return;
	}

	const int32 NextIndex = (CurrentWeaponIndex + 1) % WeaponInventory.Num();
	SwitchToWeapon(NextIndex);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>InitializeInventory</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Immediately loads and equips the default weapon asset.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 24–39)</p>
    <ExpandableCodeBlock code={`void UWeaponInventoryComponent::InitializeInventory()
{
	UE_LOG(LogTemp, Log, TEXT("[%s] Initializing weapon inventory..."), *GetName());

	// Use our new getter to load the default
	UWeaponDataAsset* DefaultData = GetWeaponDataByIndex(DefaultWeaponIndex);
	if (DefaultData)
	{
		AssignWeaponToComponent(DefaultData);
		CurrentWeaponIndex = DefaultWeaponIndex;
	}
	else
	{
		UE_LOG(LogTemp, Error, TEXT("[%s] Failed to load default weapon at index %d!"), *GetName(), DefaultWeaponIndex);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>InitializeInventoryNextTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Schedules [InitializeInventory](#class_u_weapon_inventory_component_1a95e9914bb807c3488fa05a1283fa150e) to run on the next tick instead of immediately.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 41–53)</p>
    <ExpandableCodeBlock code={`void UWeaponInventoryComponent::InitializeInventoryNextTick()
{
	if (UWorld* World = GetWorld())
	{
		// clear any previous pending call
		World->GetTimerManager().ClearTimer(DeferredInitHandle);

		// schedule InitializeInventory() for the next frame
		World->GetTimerManager().SetTimerForNextTick(
			FTimerDelegate::CreateUObject(this, &UWeaponInventoryComponent::InitializeInventory)
		);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>GetWeaponDataByIndex</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Retrieves the weapon data asset at the given slot.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>int32 Index</code> – Slot index in .</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 55–60)</p>
    <ExpandableCodeBlock code={`UWeaponDataAsset* UWeaponInventoryComponent::GetWeaponDataByIndex(int32 Index) const
{
	if (!WeaponInventory.IsValidIndex(Index)) return nullptr;
	// Load synchronously here; switch to async if you need streaming
	return WeaponInventory[Index].LoadSynchronous();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>BeginPlay</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Called when the game starts; sets up initial state.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/WeaponInventoryComponent.cpp</code> (lines 19–22)</p>
    <ExpandableCodeBlock code={`void UWeaponInventoryComponent::BeginPlay()
{
	Super::BeginPlay();
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>WeaponInventory</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">All weapon assets this character owns.</span>
    </summary>
    <p>All weapon assets this character owns.</p>
  </details>
  <details>
    <summary>
      🧠 <code>CurrentWeaponIndex</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Index of the currently equipped weapon in [WeaponInventory](#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e).</span>
    </summary>
    <p>Index of the currently equipped weapon in [WeaponInventory](#class_u_weapon_inventory_component_1a9a6f240a38b8c6fa99d139bfabf9af1e).</p>
  </details>
  <details>
    <summary>
      🧠 <code>WeaponComponentRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Reference to the character's weapon component used for equipping.</span>
    </summary>
    <p>Reference to the character's weapon component used for equipping.</p>
  </details>
  <details>
    <summary>
      🧠 <code>DefaultWeaponIndex</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Slot index to auto-equip on initialization.</span>
    </summary>
    <p>Slot index to auto-equip on initialization.</p>
  </details>
  <details>
    <summary>
      🧠 <code>DeferredInitHandle</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Timer handle for deferred inventory initialization via [InitializeInventoryNextTick](#class_u_weapon_inventory_component_1ad8a966f1a82ce07364926fb5104af05b).</span>
    </summary>
    <p>Timer handle for deferred inventory initialization via [InitializeInventoryNextTick](#class_u_weapon_inventory_component_1ad8a966f1a82ce07364926fb5104af05b).</p>
  </details>
</details>

</details>

</details>
<!-- block -->
