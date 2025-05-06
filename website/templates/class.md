---

---

# {{kind}} `{{name}}` {{anchor refid}}

{{#if basecompoundref}}
## 🔧 Inherits From

``` cpp
{{kind}} {{name}}
  {{#each basecompoundref}}
  : {{prot}} {{name}}
  {{/each}}
```
{{/if}}

{{#if briefdescription}}
> {{briefdescription}}
{{/if}}

{{#if detaileddescription}}
---

{{detaileddescription}}
{{/if}}

---

## 📋 Class Members

| Kind | Declaration | Description |
|------|-------------|-------------|
{{#each filtered.members}}
| `{{kind}}` | `{{#if type}}{{type}} {{/if}}{{name}}{{#if argsstring}}{{argsstring}}{{/if}}` | {{briefdescription}} |
{{/each}}

---

## 🧩 Members

{{#each filtered.members}}
### 🧠 `{{#if type}}{{type}} {{/if}}{{name}}{{#if argsstring}}{{argsstring}}{{/if}}`

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

---
{{/each}}


---


## 🎛️ Enums

{{#if (anyEnum filtered.members)}}
{{#each filtered.members}}
  {{#if enumvalue}}
### 🔢 `{{name}}` {{anchor refid}}

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

---
  {{/if}}
{{/each}}
{{else}}
_No enum types are defined in this file._
{{/if}}