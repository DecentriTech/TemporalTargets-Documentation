---
title: "📄 File: {{{fileName}}}"
slug: /API/{{{refid}}}
---

# 📄 File: `{{fileName}}`

{{#if briefdescription}}
> {{briefdescription}}
{{/if}}

{{#if detaileddescription}}
<details open>
<summary>📝 Detailed Description</summary>
{{{detaileddescription}}}
</details>
{{/if}}

{{#each compounds}}

<!-- block -->
<details>
<summary>
  📘 Class `{{name}}`
  {{#if briefdescription}}<span class="brief-description-pill">{{briefdescription}}</span>{{/if}}
</summary>

{{#if detaileddescription}}
> {{{detaileddescription}}}
{{/if}}

<details open>
<summary>🧍 Members</summary>

<!-- FUNCTIONS -->
<details open>
<summary>⚙️ Functions</summary>

{{#each filtered.members}}
  {{#if (eq kind "function")}}
  <details>
    <summary>
      🧠 <code>{{#if type}}{{type}} {{/if}}{{name}}{{#if argsstring}}{{argsstring}}{{/if}}</code>
      <span class="member-badge kind-{{kind}}">{{kind}}</span>
      {{#if section}}<span class="member-badge section-{{section}}">{{prettySection section}}</span>{{/if}}
      {{#if briefdescription}}<span class="brief-description-pill">{{briefdescription}}</span>{{/if}}
    </summary>

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

    {{#if (and location location.bodyfile)}}
    <hr />
    <p><strong>📄 Source:</strong> <code>{{location.bodyfile}}</code> (lines {{location.bodystart}}–{{location.bodyend}})</p>
    <ExpandableCodeBlock code={`{{{getFunctionSource location}}}`} language="cpp" previewLines={15} />
    {{/if}}

  </details>
  {{/if}}
{{/each}}

</details>

<!-- VARIABLES -->
<details open>
<summary>📦 Variables</summary>
{{#each filtered.members}}
  {{#if (eq kind "variable")}}
  <details>
    <summary>
      🧠 <code>{{#if type}}{{type}} {{/if}}{{name}}</code>
      <span class="member-badge kind-{{kind}}">{{kind}}</span>
      {{#if section}}<span class="member-badge section-{{section}}">{{prettySection section}}</span>{{/if}}
      {{#if briefdescription}}<span class="brief-description-pill">{{briefdescription}}</span>{{/if}}
    </summary>
    {{#if briefdescription}}<p>{{briefdescription}}</p>{{/if}}
  </details>
  {{/if}}
{{/each}}
</details>

</details>

</details>
<!-- block -->
{{/each}}