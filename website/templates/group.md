---
id: {{{name}}}
title: {{{prettifyGroup name}}}
sidebar_label: {{{prettifyGroup name}}}
slug: /API/{{{name}}}
---

# 🧩 Group: {{{safeLink name (prettifyGroup name)}}}

{{#if briefdescription}}
> {{briefdescription}}
{{/if}}

{{#if detaileddescription}}
<!-- block -->

<details open>
<summary>📝 Detailed Description</summary>

{{{detaileddescription}}}

</details>

<!-- block -->
{{/if}}

<!-- block -->

<details open>
<summary>📦 Classes in This Group</summary>

{{#each filtered.compounds}}

<!-- block -->

<details>
<summary>🔹 {{{safeLink name type="anchor"}}}</summary>

{{#if briefdescription}}
{{briefdescription}}
{{/if}}

{{#if detaileddescription}}
<details>
<summary>📄 Description</summary>

{{{detaileddescription}}}

</details>
{{/if}}

</details>

<!-- block -->
{{/each}}

</details>

<!-- block -->