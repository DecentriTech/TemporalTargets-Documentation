---
id: {{{name}}}
title: {{{prettifyGroup name}}}
sidebar_label: {{{prettifyGroup name}}}
slug: /API/{{{name}}}
---

# 🗂️ Categodry: {{{safeLink name (prettifyGroup name)}}}

{{#if briefdescription}}
> {{briefdescription}}
{{/if}}

{{#if detaileddescription}}
<details open>
<summary>📝 Detailed Description</summary>
{{{detaileddescription}}}
</details>
{{/if}}

{{#if innerfiles}}

 {{#each innerfiles}}
  <FileCard
    filename="{{fileName}}"
    url="/docs/API/{{{refid}}}"
    description="{{briefdescription}}"
  />
  {{/each}}

{{/if}}