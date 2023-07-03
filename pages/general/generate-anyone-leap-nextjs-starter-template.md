# Generate Anyone: Leap & Next.js Starter Template

## 📝 Getting Started

In this guide, we’ll fork [this starter repo](https://github.com/aleemrehmtulla/leap-template) to use Leap in a Next.js project and generate ai avatars of your favorite characters or of yourself.

By the end of this guide, you will have a fine-tuned model on [Leap](https://www.leapml.dev/) that you can use to generate images from in your Next.js app.

See the final result here! [https://generatepotter.com](https://generatepotter.com/)

![https://generatepotter.com](./images/Screen_Shot_2023-02-20_at_4.avif)

A quick overview of what you'll need to get started:

1. A Github account
2. An account on [https://www.leapml.dev/signup](https://www.leapml.dev/signup)
3. Image samples to train your model on

And an overview of the steps we'll cover in this guide:

1. Forking The Repo
2. Running The Next.js App Locally
3. Creating A Model For Your Character On Leap
4. Generating Images In Your Next.js App

## 1️⃣ Forking The Repo

1. To begin, log in or sign up for [Github](https://github.com/) and fork this repo: [https://github.com/aleemrehmtulla/generatepotter](https://github.com/aleemrehmtulla/generatepotter)

![image](./images/Screen_Shot_2023-02-21_at_11.avif)

2. Next, name the new repository and click “Create Fork”

![image](./images/Screen_Shot_2023-02-21_at_11_02.avif)

## 2️⃣ Running The Next.js App Locally

1. Clone the repository (follow the steps [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))

![image](./images/Screen_Shot_2023-02-21_at_11_2_01.avif)

Navigate into to the directory you cloned into. For me this is:

```bash
cd ~/code/leap-generate-nextjs
```

2. Once you are in the correct directory, open the readme and follow the steps listed under **Run it locally**:

![image](./images/Screen_Shot_2023-02-21_at_11_2_02.avif)

In your terminal run:

```bash
npm install
npm run dev
```

You should now see your project up and running at [http://localhost:3000](http://localhost:3000/) 🥳

## 3️⃣ Creating A Model For Your Character On Leap

1. Now, configure Leap by copying the model ID of the character you want to generate images from.

   1. If you’ve already trained a model, you can copy it from your dashboard and move on to **Step 4**

      ![image](./images/Screen_Shot_2023-02-21_at_12.avif)

   2. If you need to train a new custom model of yourself or of a character, follow the steps here:
      [Train Your Own Custom Models Using Leap Dashboard](/guides/train-your-own-fine-tuned-model)

> 💡You can also copy a model ID from one of our [Pre-trained Models](https://docs.leapml.dev/reference/pre-trained-models) to try out regular image generation

![image](./images/Screen_Shot_2023-02-21_at_12_01.avif)

## 4️⃣ Generating Images In Your Next.js App

Once you have your model ID, we’ll follow the **Setup** steps listed in the README:

1. First, go to `/pages/api/generate` and replace the model ID there with the model ID you got from **Step 3**

   ![image](./images/Screen_Shot_2023-02-21_at_1.avif)

2. Next, rename the `.envExample` file to `.env` and add your Leap API Key that you can copy from your Leap dashboard

   ![image](./images/Screen_Shot_2023-02-21_at_1_02.avif)

3. Finally, get your model keyword (for example. @me) from the dashboard and replace @harry with it in `helpers/prompts.ts`

   ![image](./images/Screen_Shot_2023-02-21_at_1_03.avif)

   ![image](./images/Screen_Shot_2023-02-21_at_1_03_02.avif)

## 🔑 Additional Config

Congrats! You can now try generating ai avatars of your favorite characters or of yourself from your Next.js project 🚀

Add additional configuration to take your project to the next level:

1. Head to `pages/index.tsx` for editing text, prompts, and colors to match your theme
2. Add new prompts in `helpers/prompts.ts`
3. Adjust the number of images generated w/ the numberOfImages parameter in `/pages/api/generate`

## 🚀 Wrapping Up

That's all for this guide!

Try it out for yourself and let us know if you have any questions. For additional support please join our [discord](https://discord.com/invite/NCAKTUayPK).
