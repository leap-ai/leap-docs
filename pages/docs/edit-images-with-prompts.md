# Edit Images With Prompts

> 🛠 You can find all the mentioned API-Docs here: [https://docs.leapml.dev/reference/editcontroller\_create](https://docs.leapml.dev/reference/editcontroller_create)

## 1. Intro

In this guide I’ll be focusing on how to use the Edit endpoint API (you can also try it in the Leap dashboard via their easy UI). I’ll also show some good examples of how to use their NPM package.

Most people have already tried generating images using Stable Diffusion on LeapML, but another amazing feature on Leap is an image editing endpoint.

It’s easy to use and allows you to add image filters, change backgrounds, add props like sunglasses, and more!

> 💡 Alex made a working Replit that you can run to try it yourself here

[Leap Edit - API Call - Next.ts](https://replit.com/@AlexSchachne/Leap-Edit-API-Call-Nextts)

## 2. Editing your first image

> ❗ For security NEVER expose these API-calls to your front end. Bad actors could access your API-Key. The best way to do this is inside the API route of NextJS.

### 2.1 Uploading the image data

The image and prompt are sent to the API with a FormData. These can be obtained from an input form. Here’s an example:

```html
<input type="file" id="image" onChange={handleImageChange} />
```

… with the function:

```ts
const [image, setImage] = useState(null);

const handleImageChange = (event) => {
    setImage(event.target.files ? event.target.files[0] : null);
};
```

That’s the hardest part. After that we just need to add it to our form data. This is a really basic approach:

```ts
const formData = new FormData();
formData.append("files", image);
```

And that’s all we need for the image uploading. Let’s go to the next step.

### 2.2 Preparing the request

First of all, we need to add a prompt. It gives basic instructions to the API on what to change on the image. A good example is: “Remove the background”. In this case, I will hardcode the prompt, but in production, you’ll also probably use an event handler and useState.

```ts
formData.append("body", JSON.stringify({
	prompt: "Add a red solid background to the image"
}));
```

#### 2.2.1 Adding some more spice

We will have to set some other properties, such as the textGuidanceScale**.** Most of them are handled automatically but can be overwritten. I will cover that in another guide.

One that should be mentioned here is “webhook Url”. If it’s defined you’ll receive an update to the webhook once the image was edited (the status changes). That can be useful when tracking.

### 2.3 Sending the request

To edit our image we need to send a POST request to Leap’s API route. This is the needed URL:

```ts
POST https://api.leapml.dev/api/v1/images/edit
```

With the following “options”:

```ts
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer YOUR-API-KEY'
  },
	body: formData
};
```

… as you can see, we send the formData and that’s it. Here is the full code used (until now)

```ts
const formData = new FormData();
formData.append("files", file);
formData.append("body", JSON.stringify({ prompt: prompt }));

const response = await fetch("https://api.leapml.dev/api/v1/images/edit", options);
```

### 2.4 Getting the result (edited image)

All we now need to do is get the image back. You can get it (asynchronously) from the

```ts
const data = await request.json()
```

request. It includes different parameters, such as editedImageUri. This is a link to the edited image, which can be downloaded using a GET request.

## 3. Outro

This is everything you’ll need to build something with the editing API. What’s something you’d like to build with it?

Feel free to join the LeapML community. There are many builders that ship cool stuff. I am also going to answer questions there if you encounter problems.

✌️Written by [Lennard](https://twitter.com/lennardeth)

[Join the Leap Discord Server!](https://discord.gg/XwJVSZ35Wq)