# shindradavid.com

## Project folder structure

```txt
/
├── cypress/                - End-to-End specs
├── src/
│   ├── lib/
│   │   ├── server/         - Server only lib files
│   │   ├── design/         - Project design system
│   │   ├── utils/          - Util functions
│   │   ├── stores/         - Svelte stores
│   └── routes/
│       └── +page.svelte
├── static/
├── mdsvex.config.ts
├── svelte.config.ts
├── vite.config.ts
├── tsconfig.ts
└── package.json
```

## Running the site locally

```bash
git clone git@github.com:shindradavid/shindradavid.com.git
cd shindradavid.com
npm install
npm run dev
# or to run it in your local network, make sure to get you local network inet
npm run local
```

## Design system

All svelte components using `<style lang="scss">` have access to these global scss namespaces

- `mixins` - contains project utility mixins ie media query mixins, page left and right padding mixins
- `layout` - contains all layout styles, consistent spacing
- `components`
