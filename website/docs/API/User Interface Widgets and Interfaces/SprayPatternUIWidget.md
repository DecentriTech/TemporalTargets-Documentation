---
title: "📄 File: SprayPatternUIWidget.h"
slug: /API/_spray_pattern_u_i_widget_8h
---

# 📄 File: `SprayPatternUIWidget.h`

> Declares the user-facing widget for editing weapon spray patterns.

<details open>
<summary>📝 Detailed Description</summary>
This file defines the [USprayPatternUIWidget](#class_u_spray_pattern_u_i_widget) class, which provides:

* A weapon selection dropdown connected to data assets.

* A grid canvas to visualize and edit spray patterns.

* Controls for adjusting spray pattern scale and exporting changes.

* Blueprint-exposed methods for loading, clearing, and resetting patterns.

Designed for use in design-time tools, this widget enables real-time authoring and previewing of weapon spray behavior via the editor UI.

[User Interface Widgets and Interfaces](#group___u_i___widgets)
</details>

<!-- block -->
<details>
<summary>
  📘 Class `USprayPatternUIWidget`
  <span class="brief-description-pill">User-facing widget that lets designers pick a weapon, view its spray pattern on a grid, adjust its scale, and export or reload patterns.</span>
</summary>

> This widget wraps:

* a [WeaponDropdown](#class_u_spray_pattern_u_i_widget_1a694936078f02a97cf23d44e0ad00eb27) to choose a weapon

* a [GridCanvasRef](#class_u_spray_pattern_u_i_widget_1adc3a89a423fd06b1c04abbe516817ae1) on which the spray points are drawn

* sliders ([SL_ScaleX](#class_u_spray_pattern_u_i_widget_1aa369d4e690b54c3493381966fea2a55e), [SL_ScaleY](#class_u_spray_pattern_u_i_widget_1a8cb88001e2f8eec3d9419546f4fa6d75)) to control pattern scale

* buttons bound to [HandleExport](#class_u_spray_pattern_u_i_widget_1a339d0de1c488b6f518b58a6886e55a4d), [HandleLoad](#class_u_spray_pattern_u_i_widget_1ac70790e59efb34bc46fb106844fccc41), [HandleClear](#class_u_spray_pattern_u_i_widget_1aaf2315fe50a243dc0f6f3363bebe0c7a), and [ResetScale](#class_u_spray_pattern_u_i_widget_1aeefb54015e96f6c0fe41352c88f40cb3)

On each selection change, it calls [OnWeaponSelectionChanged](#class_u_spray_pattern_u_i_widget_1a2d8d82b242636bb4a8fb57f140904173) which in turn invokes [HandleLoad](#class_u_spray_pattern_u_i_widget_1ac70790e59efb34bc46fb106844fccc41).

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

  <details>
    <summary>
      🧠 <code>GetSelectedWeaponData</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Returns the [UWeaponDataAsset](#class_u_weapon_data_asset) currently selected by the user.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 38–45)</p>
    <ExpandableCodeBlock code={`UWeaponDataAsset* USprayPatternUIWidget::GetSelectedWeaponData() const
{
	if (!WeaponDropdown || !WeaponAssetMap.Contains(WeaponDropdown->GetSelectedOption()))
		return nullptr;

	FString AssetPath = WeaponAssetMap[WeaponDropdown->GetSelectedOption()];
	return Cast<UWeaponDataAsset>(StaticLoadObject(UWeaponDataAsset::StaticClass(), nullptr, *AssetPath));
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>PopulateWeaponDropdown</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Populate [WeaponDropdown](#class_u_spray_pattern_u_i_widget_1a694936078f02a97cf23d44e0ad00eb27) via the Asset Registry.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 47–69)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::PopulateWeaponDropdown()
{
	if (!WeaponDropdown) return;

	WeaponDropdown->ClearOptions();
	WeaponAssetMap.Empty();

	FAssetRegistryModule& AssetRegistry = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
	TArray<FAssetData> AssetDataList;
	FTopLevelAssetPath ClassPath = UWeaponDataAsset::StaticClass()->GetClassPathName();
	AssetRegistry.Get().GetAssetsByClass(ClassPath, AssetDataList);

	WeaponDropdown->AddOption(TEXT("Select Weapon")); // Add a default option

	for (const FAssetData& Asset : AssetDataList)
	{
		FString Name = Asset.AssetName.ToString();
		FString Path = Asset.ObjectPath.ToString();
		WeaponDropdown->AddOption(Name);
		WeaponAssetMap.Add(Name, Path);
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleExport</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Export the current pattern off the grid via GridCanvasRef->ExportSprayPattern.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 71–103)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::HandleExport()
{
	if (!GridCanvasRef || !WeaponDropdown)
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleExport] GridCanvasRef or WeaponDropdown is null!"));
		return;
	}

	FString SelectedName = WeaponDropdown->GetSelectedOption();
	if (!WeaponAssetMap.Contains(SelectedName))
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleExport] Selected weapon '%s' not found in map!"), *SelectedName);
		return;
	}

	FString AssetPath = WeaponAssetMap[SelectedName];
	UE_LOG(LogTemp, Log, TEXT("[HandleExport] SelectedName: %s | AssetPath: %s"), *SelectedName, *AssetPath);

	UWeaponDataAsset* WeaponAsset = Cast<UWeaponDataAsset>(
		StaticLoadObject(UWeaponDataAsset::StaticClass(), nullptr, *AssetPath)
	);

	if (!WeaponAsset)
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleExport] Failed to load asset at path: %s"), *AssetPath);
		return;
	}

	UE_LOG(LogTemp, Log, TEXT("[HandleExport] Successfully loaded weapon asset: %s"), *WeaponAsset->GetName());

	GridCanvasRef->ExportSprayPattern(WeaponAsset);
	OnPatternExported.Broadcast();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleLoad</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Load and display the pattern for the selected weapon via GridCanvasRef->SetSprayPoints.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 105–141)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::HandleLoad()
{
	if (!GridCanvasRef || !WeaponDropdown)
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleLoad] GridCanvasRef or WeaponDropdown is null!"));
		return;
	}

	const FString SelectedName = WeaponDropdown->GetSelectedOption();
	if (!WeaponAssetMap.Contains(SelectedName))
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleLoad] Weapon '%s' not found in map!"), *SelectedName);
		return;
	}

	const FString AssetPath = WeaponAssetMap[SelectedName];

	UWeaponDataAsset* WeaponAsset = Cast<UWeaponDataAsset>(
		StaticLoadObject(UWeaponDataAsset::StaticClass(), nullptr, *AssetPath)
	);

	if (!WeaponAsset)
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleLoad] Failed to load weapon asset at %s"), *AssetPath);
		return;
	}

	UE_LOG(LogTemp, Log, TEXT("[HandleLoad] Loaded pattern from %s with %d points"), *WeaponAsset->GetName(), WeaponAsset->SprayPattern.Num());

	GridCanvasRef->SetSprayPoints(WeaponAsset->SprayPattern); // Make sure this function exists in your GridCanvasWidget
	GridCanvasRef->SetWeaponData(WeaponAsset); // Set the weapon data for context

	// Only apply scale *once*

	ResetScale(); // Reset to default scale before applying
	OnPatternLoaded.Broadcast();
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleClear</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Clear all points from the grid by calling GridCanvasRef->ClearPoints.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 143–150)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::HandleClear()
{
	if (GridCanvasRef)
	{
		GridCanvasRef->ClearPoints();
		UE_LOG(LogTemp, Log, TEXT("[HandleClear] Cleared spray points"));
	}
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>ResetScale</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Reset both sliders and grid scale to 1.0 via [ResetScale](#class_u_spray_pattern_u_i_widget_1aeefb54015e96f6c0fe41352c88f40cb3).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 152–162)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::ResetScale()
{
	UE_LOG(LogTemp, Log, TEXT("[ResetScale] Resetting spray pattern scale to 1.0"));
	SprayPatternScaleX = 1.0f;
	SprayPatternScaleY = 1.0f;

	SL_ScaleY->SetValue(1.0f);
	SL_ScaleX->SetValue(1.0f);

	HandleSetSprayPatternScale(SprayPatternScaleX, SprayPatternScaleY);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>HandleSetSprayPatternScale</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-public-func">Public</span>
      <span class="brief-description-pill">Apply new scale factors to the grid.</span>
    </summary>

    <p><strong>Parameters:</strong></p>
    <ul>
        <li><code>float ScaleX</code> – horizontal multiplier (bound from )</li>
        <li><code>float ScaleY</code> – vertical multiplier (bound from )</li>
    </ul>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 164–175)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::HandleSetSprayPatternScale(float ScaleX, float ScaleY)
{
	if (!GridCanvasRef)
	{
		UE_LOG(LogTemp, Error, TEXT("[HandleSetSprayPatternScale] GridCanvasRef is null!"));
		return;
	}

	UE_LOG(LogTemp, Log, TEXT("[HandleSetSprayPatternScale] Applying ScaleX = %.2f, ScaleY = %.2f"), ScaleX, ScaleY);

	GridCanvasRef->ScaleSprayPattern(ScaleX, ScaleY); // Make sure this function exists and does the scaling
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativeConstruct</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Initialize widget: bind selection delegate and populate dropdown.</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 10–22)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::NativeConstruct()
{
	Super::NativeConstruct();

	if (WeaponDropdown)
	{
		WeaponDropdown->OnSelectionChanged.AddDynamic(this, &USprayPatternUIWidget::OnWeaponSelectionChanged);
	}

	PopulateWeaponDropdown();

	HandleSetSprayPatternScale(SprayPatternScaleX, SprayPatternScaleY);
}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>NativeTick</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Per-frame tick (unused currently but available for future animation).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 24–28)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::NativeTick(const FGeometry& MyGeometry, float InDeltaTime)
{
	Super::NativeTick(MyGeometry, InDeltaTime);

}`} language="cpp" previewLines={15} />

  </details>
  <details>
    <summary>
      🧠 <code>OnWeaponSelectionChanged</code>
      <span class="member-badge kind-function">function</span>
      <span class="member-badge section-protected-func">Protected</span>
      <span class="brief-description-pill">Internal handler when the user picks a new weapon in [WeaponDropdown](#class_u_spray_pattern_u_i_widget_1a694936078f02a97cf23d44e0ad00eb27).</span>
    </summary>

    <p><strong>Parameters:</strong> None</p>

    <hr />
    <p><strong>📄 Source:</strong> <code>Source/TimeAssassin/SprayPatternUIWidget.cpp</code> (lines 30–36)</p>
    <ExpandableCodeBlock code={`void USprayPatternUIWidget::OnWeaponSelectionChanged(FString SelectedItem, ESelectInfo::Type SelectionType)
{
	UE_LOG(LogTemp, Log, TEXT("[UI] Weapon selection changed to: %s"), *SelectedItem);

	// Automatically load the spray pattern on selection change
	HandleLoad();
}`} language="cpp" previewLines={15} />

  </details>

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
  <details>
    <summary>
      🧠 <code>WeaponDropdown</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Dropdown listing available weapons; its OnSelectionChanged is bound to [OnWeaponSelectionChanged](#class_u_spray_pattern_u_i_widget_1a2d8d82b242636bb4a8fb57f140904173).</span>
    </summary>
    <p>Dropdown listing available weapons; its OnSelectionChanged is bound to [OnWeaponSelectionChanged](#class_u_spray_pattern_u_i_widget_1a2d8d82b242636bb4a8fb57f140904173).</p>
  </details>
  <details>
    <summary>
      🧠 <code>GridCanvasRef</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Grid on which the spray pattern points (from [UWeaponDataAsset::SprayPattern](#class_u_weapon_data_asset_1a39af4b368edb68fcc72abe2e94506208)) are rendered.</span>
    </summary>
    <p>Grid on which the spray pattern points (from [UWeaponDataAsset::SprayPattern](#class_u_weapon_data_asset_1a39af4b368edb68fcc72abe2e94506208)) are rendered.</p>
  </details>
  <details>
    <summary>
      🧠 <code>SL_ScaleX</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Horizontal scale slider for the pattern; reset by [ResetScale](#class_u_spray_pattern_u_i_widget_1aeefb54015e96f6c0fe41352c88f40cb3).</span>
    </summary>
    <p>Horizontal scale slider for the pattern; reset by [ResetScale](#class_u_spray_pattern_u_i_widget_1aeefb54015e96f6c0fe41352c88f40cb3).</p>
  </details>
  <details>
    <summary>
      🧠 <code>SL_ScaleY</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Vertical scale slider for the pattern; reset by [ResetScale](#class_u_spray_pattern_u_i_widget_1aeefb54015e96f6c0fe41352c88f40cb3).</span>
    </summary>
    <p>Vertical scale slider for the pattern; reset by [ResetScale](#class_u_spray_pattern_u_i_widget_1aeefb54015e96f6c0fe41352c88f40cb3).</p>
  </details>
  <details>
    <summary>
      🧠 <code>SprayPatternScaleX</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current horizontal scale factor sent to the grid via [HandleSetSprayPatternScale](#class_u_spray_pattern_u_i_widget_1a3bf79fac440d0f0d5536947fb7f56a8a).</span>
    </summary>
    <p>Current horizontal scale factor sent to the grid via [HandleSetSprayPatternScale](#class_u_spray_pattern_u_i_widget_1a3bf79fac440d0f0d5536947fb7f56a8a).</p>
  </details>
  <details>
    <summary>
      🧠 <code>SprayPatternScaleY</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Current vertical scale factor sent to the grid via [HandleSetSprayPatternScale](#class_u_spray_pattern_u_i_widget_1a3bf79fac440d0f0d5536947fb7f56a8a).</span>
    </summary>
    <p>Current vertical scale factor sent to the grid via [HandleSetSprayPatternScale](#class_u_spray_pattern_u_i_widget_1a3bf79fac440d0f0d5536947fb7f56a8a).</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnPatternLoaded</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when a pattern has finished loading�useful for binding UI feedback.</span>
    </summary>
    <p>Broadcast when a pattern has finished loading�useful for binding UI feedback.</p>
  </details>
  <details>
    <summary>
      🧠 <code>OnPatternExported</code>
      <span class="member-badge kind-variable">variable</span>
      <span class="member-badge section-public-attrib">Public</span>
      <span class="brief-description-pill">Broadcast when a pattern has been successfully exported.</span>
    </summary>
    <p>Broadcast when a pattern has been successfully exported.</p>
  </details>
</details>

</details>

</details>
<!-- block -->
