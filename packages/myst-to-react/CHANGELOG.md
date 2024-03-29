# myst-to-react

## 0.1.22

### Patch Changes

- b314737: Remove redux
  - @myst-theme/providers@0.1.22

## 0.1.21

### Patch Changes

- 90ffec2: Updates to myst dependencies
- Updated dependencies [90ffec2]
  - @myst-theme/providers@0.1.21

## 0.1.20

### Patch Changes

- Updates for repackaging for jupyterlab-myst
- Updated dependencies
  - @myst-theme/providers@0.1.20

## 0.1.19

### Patch Changes

- Change components to use @myst-theme
- ba0424a: Upgrade heroicons to v2
  - @myst-theme/providers@0.1.19

## 0.1.18

### Patch Changes

- 59d1788: Fix ansi-to-react overrides with react 18
- 4a8a317: Improve imports and update CI to test typescript compiling
- a19e590: Move Bibliography to @curvenote/site
- Updated dependencies [a19e590]
- Updated dependencies [4a8a317]
  - @myst-theme/providers@0.0.16

## 0.1.17

### Patch Changes

- b31b74b: Cards handle internal links
- 991b2be: Improve the definition lists to be strong in only certain cases
- Updated dependencies [7808157]
  - myst-transforms@0.0.7

## 0.1.16

### Patch Changes

- c268ff6: Footnotes in docx
- b96c7a4: Create number references for footnotes that skip reserved numbers, still look up on identifier
- 438cb2d: Images and cards improved handling including height prop
- Updated dependencies [286e24d]
- Updated dependencies [a8e68ec]
- Updated dependencies [c268ff6]
- Updated dependencies [b96c7a4]
- Updated dependencies [6c0d639]
- Updated dependencies [7f11596]
  - myst-to-docx@0.0.2
  - myst-transforms@0.0.6
  - @curvenote/blocks@1.5.15
  - @myst-theme/providers@0.0.15

## 0.1.15

### Patch Changes

- The package myst-utils was renamed to myst-common, we missed registering this by 7 hours. Super annoying, but it needs a bump across all packages.
- Updated dependencies
  - @curvenote/blocks@1.5.15
  - myst-to-tex@0.0.4
  - myst-transforms@0.0.5
  - @myst-theme/providers@0.0.14

## 0.1.14

### Patch Changes

- 327c19c: Introduce new link transforms for internal and external protocols including dois, rrids, wiki, and myst.
- abe8ac0: suppressHydrationWarning for copybutton
- de062e5: Add mermaid diagrams
- edf10cd: Introduce delete role for strikeout text
- edf10cd: Add dropdown class to admonitions
- Updated dependencies [327c19c]
- Updated dependencies [6b4c188]
- Updated dependencies [f6ad6c9]
- Updated dependencies [2f6e43a]
- Updated dependencies [f6ad6c9]
- Updated dependencies [edf10cd]
- Updated dependencies [f6ad6c9]
- Updated dependencies [631ee7c]
- Updated dependencies [5460169]
  - myst-transforms@0.0.4
  - myst-to-tex@0.0.3
  - @myst-theme/providers@0.0.13

## 0.1.13

### Patch Changes

- b63638b: Hide hash IDs for headers and equations if you are in a cross-reference.
- b63638b: Load cross-link information from local config
- b63638b: Parse frontmatter in myst demo
- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
  - myst-transforms@0.0.3
  - myst-to-tex@0.0.2
  - @myst-theme/providers@0.0.12

## 0.1.12

### Patch Changes

- 619328f: Add internal hover links with tooltips and other information
- 619328f: Improve cross-referencing of content in a book
- 619328f: Add initial version of LaTeX export to the output
- 619328f: Bring transforms into the frontend to allow for improved demo component
- 619328f: Add wikipedia hover links
- Updated dependencies [619328f]
- Updated dependencies [619328f]
- Updated dependencies [619328f]
  - myst-transforms@0.0.2

## 0.1.11

### Patch Changes

- 58adf87: Added consistent-type-imports eslint rule
- Updated dependencies [58adf87]
- Updated dependencies [9ae455e]
  - @curvenote/blocks@1.5.14
  - @myst-theme/providers@0.0.10

## 0.1.10

### Patch Changes

- b1efcf6: Export MySTRenderer as React Component
- Updated dependencies [e29e889]
  - @curvenote/blocks@1.5.13
  - @myst-theme/providers@0.0.9

## 0.1.9

### Patch Changes

- 54f2c4d: SI Units and chemical formulas as basic extensions

## 0.1.8

### Patch Changes

- 3d68483: Update to mystjs 0.0.13
  - @myst-theme/providers@0.0.8

## 0.1.7

### Patch Changes

- 92ceb9b: Export CopyIcon

## 0.1.6

### Patch Changes

- 01f73de: - `include` added as a directive
  - `tab-set` and `tab-item` added as directives
- 3f8249c: Node `abbr` is actually `abbreviation`, this was updated
- bc337d0: Added a MyST Demo Component
- Updated dependencies [01f73de]
  - @myst-theme/providers@0.0.7

## 0.1.5

### Patch Changes

- 1b23694: Update typescript and @curvenote/blocks
- Updated dependencies [0a1509c]
- Updated dependencies [1b23694]
  - @curvenote/blocks@1.5.9
  - @myst-theme/providers@0.0.5

## 0.1.4

### Patch Changes

- 3fe3e21: 👓 Improve contrast on blue text
  - @myst-theme/providers@0.0.3

## 0.1.3

### Patch Changes

- d89a0d8: `sourceUrl` has been renamed to `urlSource` for consistency with `urlOptimized`, this is backwards compatible.

## 0.1.2

### Patch Changes

- 45e7cb6: Introduce `thumbnailOptimized` using webp and create images that have a srcset in the web output.
  - @myst-theme/providers@0.0.2
