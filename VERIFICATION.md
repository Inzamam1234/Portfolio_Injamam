# Portfolio verification

## Passed

- Strict TypeScript check (`tsc --noEmit`).
- Sites production build (`build-site.mjs`, Vinext/Vite Worker).
- Standard Next.js production build (`pnpm build:vercel`), including static prerendering and TypeScript.
- Production HTML checks: all section anchors resolve, local asset links exist, external tabs use safe relationship attributes, exactly one H1, three project cards, and labeled required contact fields.
- Downloadable resume is byte-for-byte identical to the supplied PDF.
- All three local font files and the favicon are present.
- Font-metric headline width checks at 320, 375, 440, 600, 760, 768, 900, 1024, 1280, and 1440px fit within the computed layout widths.
- Source review of mobile menu opening/closing, Escape handling, active-section tracking, native required/email validation, encoded email drafts, reduced-motion styles, and keyboard focus styles.
- Unused starter UI components, examples, sample assets, database code, and associated dependencies removed.

## Limitations

- Browser automation is unavailable in this execution environment. Visual layout, actual scrolling, mobile menu clicks, screen-reader behavior, and email-client launch were not browser-tested. The width checks and code review do not replace visual QA.
- Repository and certificate URLs were copied from the PDF annotations. The network intrusion repository was retrievable through web lookup; the InterviewIQ and cyberbullying URLs returned a lookup-tool DisabledError, which does not establish that the links are broken. LinkedIn, certificate access, and those two repositories require a normal-browser check.
- Contact composes an email draft, not a server-submitted message. Delivery depends on a configured email app and the visitor sending it.

## Suggested visual review

Use 375px, 768px, and 1440px viewports. Check menu/section navigation, resume download, all external links, empty and invalid contact fields, a valid email draft, keyboard navigation, and reduced-motion preference. No API keys or environment variables are required.
