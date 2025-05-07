
<!-- block -->

<details>
<summary>📘 Class `{{name}}`</summary>

<!-- block -->

# Class `{{name}}` {{anchor refid}}

{{#if basecompoundref}}
<!-- block -->

<details>
<summary>🔧 Inherits From</summary>

```cpp
{{kind}} {{name}}
  {{#each basecompoundref}}
  : {{prot}} {{name}}
  {{/each}}
```

</details>

<!-- block -->
{{/if}}

{{#if briefdescription}}
> {{briefdescription}}
{{/if}}

{{#if detaileddescription}}
<!-- block -->

{{detaileddescription}}

<!-- block -->
{{/if}}

<!-- block -->

<details open>
<summary>📋 Class Members</summary>

| Kind | Declaration | Description |
|------|-------------|-------------|
{{#each filtered.members}}
| `{{kind}}` | `{{#if type}}{{type}} {{/if}}{{name}}{{#if argsstring}}{{argsstring}}{{/if}}` | {{briefdescription}} |
{{/each}}

</details>

<!-- block -->

<details open>
<summary>🧩 Members</summary>

{{#each filtered.members}}
<!-- block -->

<details>
<summary>🧠 `{{#if type}}{{type}} {{/if}}{{name}}{{#if argsstring}}{{argsstring}}{{/if}}`</summary>

{{#if briefdescription}}
{{briefdescription}}
{{/if}}

{{#if (isFunction kind)}}
{{#if (hasParams param)}}
**Parameters:**
{{#each param}}
- `{{type}} {{declname}}` – {{briefdescription}}
{{/each}}
{{else}}
**Parameters:**
- *(None)*
{{/if}}
{{/if}}

</details>

<!-- block -->
{{/each}}

</details>

<!-- block -->

{{#if (anyEnum filtered.members)}}
<details open>
<summary>🎛️ Enums</summary>

{{#each filtered.members}}
  {{#if enumvalue}}
<!-- block -->

<details>
<summary>🔢 `{{name}}`</summary>

{{#if briefdescription}}
{{briefdescription}}
{{/if}}

{{#if detaileddescription}}
{{detaileddescription}}
{{/if}}

#### 🎚 Enum Values

| Value | Description |
|-------|-------------|
{{#each enumvalue}}
| `{{cell name}}` | {{cell summary}} |
{{/each}}

</details>

<!-- block -->
  {{/if}}
{{/each}}

</details>
{{else}}
_No enum types are defined in this file._
{{/if}}

<!-- block -->

</details>

<!-- block -->
