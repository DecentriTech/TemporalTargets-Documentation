
<!-- block -->

<details>
<summary>
  📘 Class `{{name}}`
  {{#if briefdescription}}
    <span class="brief-description-pill">{{briefdescription}}</span>
  {{/if}}
</summary>
<!-- block -->

# Class `{{name}}` {{anchor refid}}

{{#if detaileddescription}}
<!-- block -->

> {{detaileddescription}}

<!-- block -->
{{/if}}

{{#if basecompoundref}}
<!-- block -->

<details open>
<summary>🧬 Inherits From</summary>

```cpp
{{kind}} {{name}}
  {{#each basecompoundref}}
  : {{prot}} {{name}}
  {{/each}}
```

</details>

<!-- block -->
{{/if}}


<details open>
<summary>🧍 Members</summary>

<!-- block -->

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

{{#each filtered.members}}
  {{#if (eq kind "function")}}
  <!-- block -->
  <details>
    <summary>
      🧠 <code>{{#if type}}{{type}} {{/if}}{{name}}{{#if argsstring}}{{argsstring}}{{/if}}</code>
      <span class="member-badge kind-{{kind}}">{{kind}}</span>
      {{#if section}}<span class="member-badge section-{{section}}">{{prettySection section}}</span>{{/if}}
      {{#if briefdescription}}<span class="brief-description-pill">{{briefdescription}}</span>{{/if}}
    </summary>

    {{#if briefdescription}}
    <p>{{briefdescription}}</p>
    {{/if}}

    {{#if (isFunction kind)}}
      {{#if (hasParams param)}}
      <p><strong>Parameters:</strong></p>
      <ul>
        {{#each param}}
        <li><code>{{type}} {{declname}}</code> – {{briefdescription}}</li>
        {{/each}}
      </ul>
      {{else}}
      <p><strong>Parameters:</strong> None</p>
      {{/if}}
    {{/if}}

{{#if (and location location.bodyfile)}}
  <hr />
  <p>
    <strong>📄 Source:</strong>
    <code>{{location.bodyfile}}</code>
    (lines {{location.bodystart}}–{{location.bodyend}})
  </p>

  <ExpandableCodeBlock code={`{{{getFunctionSource location}}}`} language="cpp" previewLines={15} />
{{/if}}

  </details>
  <!-- block -->
  {{/if}}
{{/each}}

</details>
<!-- block -->

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>

{{#each filtered.members}}

  {{#if (eq kind "variable")}}
  <!-- block -->
  <details>
    <summary>
      🧠 <code>{{#if type}}{{type}} {{/if}}{{name}}</code>
      <span class="member-badge kind-{{kind}}">{{kind}}</span>
      {{#if section}}<span class="member-badge section-{{section}}">{{prettySection section}}</span>{{/if}}
      {{#if briefdescription}}<span class="brief-description-pill">{{briefdescription}}</span>{{/if}}
    </summary>

    {{#if briefdescription}}
    <p>{{briefdescription}}</p>
    {{/if}}

  </details>
  <!-- block -->
  {{/if}}
{{/each}}

</details>
<!-- block -->

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
