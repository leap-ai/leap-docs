# JavaScript / TypeScript SDK

> 📘 Our SDK is currently in Alpha, different versions may include breaking changes.

To get started with our server-side SDK, simply install it using your preferred package manager.

NPM: [https://www.npmjs.com/package/@leap-ai/sdk](https://www.npmjs.com/package/@leap-ai/sdk)

## Installation

**Npm:**

```bash
npm i @leap-ai/sdk
```

**Yarn:**

```bash
yarn add @leap-ai/sdk
```

After installing the package, you can initialize it on a server-side route by initializing a new instance of `Leap`, for example:

```ts
import { Leap } from "@leap-ai/sdk"

const leap = new Leap("YOUR_API_KEY");
```

Optionally, we can also set the leap instance to default to a public model by using the `setPublicModel` method - this way you won't have to provide it on each generation request;

```ts
// Set the current model to Stable Diffusion 1.5
leap.usePublicModel("sd-1.5");
```

## Generating Your First Image

Once initialized, you can begin calling Leap methods on your API endpoints. For example, to generate an image you can simply use:

```ts
//...Inside your API handler

// Generate Image
const result = await leap.generate.generateImage({
    prompt: "A cat",
});

if (result) {
  // Print the first image's uri
  console.log(result.data.images[0].uri);
}
```