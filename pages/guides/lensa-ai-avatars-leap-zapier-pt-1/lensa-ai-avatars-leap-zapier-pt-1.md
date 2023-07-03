# Lensa AI Avatars: Leap No-Code Guide

## 📝 Getting Started

In this guide, we’ll build a Lensa AI Avatars clone with Leap & Zapier in less than 45 minutes.

By the end of this guide, you will have a no code workflow that takes user form submissions, generates magic AI avatars on [Leap](https://www.leapml.dev/)!

See the final results here:

![image](./images/Screen_Shot_2023-02-23_at_4.avif)

A quick overview of what you'll need to get started:

1. An account on [https://www.leapml.dev/signup](https://www.leapml.dev/signup)
2. An account on [https://zapier.com](https://zapier.com/app/dashboard)

And an overview of the steps we'll cover in this guide:

1. Creating a Google Form
2. Connecting Google Form to Leap
3. Training A Model On Leap AI
4. Saving Data To Google Sheets
5. Generating Images When Training Is Complete

## 1️⃣ Creating a Google Form

1. To begin, log in to Google and create a new form
2. Add fields to collect a users email, gender, and sample images

   ![image](./images/Screen_Shot_2023-02-24_at_8.avif)

## 2️⃣ Connecting Google Form to Leap AI

1. Log into Zapier and create your first step by connecting to the Google Form

   ![image](./images/Screen_Shot_2023-02-24_at_6.avif)

2. Now, let’s add a second step to connect to Leap AI and create a new model

   ![image](./images/Screen_Shot_2023-02-24_at_6_02.avif)

> 💡 Once connected, try to send a test Zap to create a model

## 3️⃣ Training A Model On Leap AI

1. Once your create model Zap is working, we’ll add a 3rd action to take the image samples uploaded in the Google Form and use them to queue a training on Leap AI
   1. First Add An Action To Upload Image Samples in Leap AI
      1. **Make sure you choose the “… Direct Url” url option for Images**
         1. In my case it is **“Aa 80 Bbb Direct Url”**
      2. **Make sure you set the Google Drive folder where your images are uploaded to publicly viewable**

      ![image](./images/Screen_Shot_2023-03-07_at_3.avif)

      ![image](./images/Screen_Shot_2023-03-07_at_3_02.avif)

   2. Next Train Model In Leap AI

      ![image](./images/Screen_Shot_2023-02-24_at_8_02.avif)

## 4️⃣ Saving Data To Google Sheets

Now, we’ll add a 5th action to save our data and model information to Google Sheets in order to generate images from it once it is finished training

1. First, make a new spreadsheet where you will store your data with the following headers.

   ![image](./images/4_saving_data_to_google_sheets_1.avif)

2. Next, choose the Google Sheets action and the Create New Row event (you may have to refresh for the new sheet you made to show up).

   ![image](./images/4_saving_data_to_google_sheets_2.avif)

3. Make sure the ModelID is coming from the “Create Model in Leap AI” step

   ![image](./images/4_saving_data_to_google_sheets_3.avif)

4. Make sure the TrainingJobId is coming from the “Train Model in Leap AI” step

   ![image](./images/4_saving_data_to_google_sheets_4.avif)

5. Test the Zap and you should see a similar output in your sheet. Make sure to publish your Zap once it is all working.

   ![image](./images/4_saving_data_to_google_sheets_5.avif)

## 5️⃣ Zap #2 → Generating Images When Training Is Complete

Now, we’ll need to make a second Zap to generate images when the model is finishing training.

To know when it finishes, we need to provide a Webhook Url to the **“Train A Model”** step in our previous Zap, and then catch the Webhook as the first action in our current Zap.

1. create a new Zap and “Catch Hook in Webhooks” action as the first step

   ![image](./images/5_zap_2_1.avif)

2. Copy the webhook URL and provide it as the Webhook Url in the **“Train A Model”** step in our previous Zap. This will be triggered when the model finishes training.

   ![image](./images/5_zap_2_2.avif)

3. Re-test the **“Train A Model”** action so that the new Webhook we created will be triggered. In your Leap dashboard you should see a second training version processing.

   ![image](./images/5_zap_2_3.avif)

   ![image](./images/5_zap_2_3_2.avif)

4. The training should take 15-20 minutes. Once it is finished, test that a request was found. The Webhook payload will return the model version ID.

   ![image](./images/5_zap_2_4.avif)

   ![image](./images/5_zap_2_4_2.avif)

5. Now, we’ll look up the TrainingJobID from Google Sheets in order to queue an Image Generation Job with Leap AI.

   1. First, re-test the “Create Spreadsheet Row” action so that you have a new row with the updated model version id.

      ![image](./images/5_zap_2_5_1.avif)

      ![image](./images/5_zap_2_5_1_1.avif)

   2. Now, add a “Lookup Spreadsheet Row” action where the Lookup Value is the TrainingJobID from the Webhook payload. Test to make sure the row is found.

      ![image](./images/5_zap_2_5_2.avif)

      ![image](./images/5_zap_2_5_2_2.avif)

   3. Next, Create Image Generation Job and use the ModelID value from Google Sheets lookup.
      1. Use a prompt like “a psychedelic portrait of @me, vibrant color scheme, highly detailed, in the style of romanticism, cinematic, artstation, moebius, greg rutkowski”

         ![image](./images/5_zap_2_5_3_1.avif)

   4. Test the Zap and make sure you get a response like this:

      ![image](./images/5_zap_2_5_4.avif)

6. Once we queue the Image Generation Job, we’ll set a time delay of 2 minutes, which should be plenty of time for the image to generate, before we retrieve the Image Generation Job.
   1. An alternative to setting a time delay is to provide another Webhook URL that gets triggered when the job is done.

      ![image](./images/5_zap_2_6_1.avif)

7. Retrieve the image and update Google Sheets with the resulting magic avatar image url!
   1. Use proper Model Id and Inference Id values from “Create Image Generation Job”

      ![image](./images/5_zap_2_7_1.avif)

      ![image](./images/5_zap_2_7_1b.avif)

   2. Test the Zap

      ![image](./images/5_zap_2_7_2.avif)

   3. Lookup Spreadsheet Row using email value from step 2: **“Lookup Spreadsheet Rows”**

      ![image](./images/5_zap_2_7_3.avif)

   4. Update Spreadsheet Row in Google Sheets using Row value from step 6

      ![image](./images/5_zap_2_7_4.avif)

   5. Update other row values using values from step 6. For ImageResults use Images Uri from step 5

      ![image](./images/5_zap_2_7_5.avif)

   6. Test the Zap and you should see your magic avatar image urls in your ImageResults! For multiple images, they are separated by commas.

      ![image](./images/5_zap_2_7_6.avif)

   7. Voila! 🥳

      ![image](./images/5_zap_2_7_7.avif)

## 🔑 Additional Config

Congrats! You can now test your no code workflow that takes user form submissions, generates magic AI avatars on [Leap](https://www.leapml.dev/)!

Once you have the results in Google Sheets, you can email them to users, display them on no-code websites like Webflow, and more!

To take your project to the next level try experimenting with these prompts:

1. Sci Fi → “8k detailed portrait of @me, futuristic sci-fi style, low-emission-neon, bladerunner movie scene style”
2. Psychedelic → “a psychedelic portrait of @me, vibrant color scheme, highly detailed, in the style of romanticism, cinematic, artstation, moebius, greg rutkowski”

## 🏁 Workflow Summary

Here’s what the full workflow should look like at the end:

1. **Zap #1**

   ![image](./images/workflow_summary_zap_1.avif)

2. **Zap #2**

   ![image](./images/workflow_summary_zap_2.avif)

## 🚀 Wrapping Up

That's all for this guide!

Try it out for yourself and let us know if you have any questions. For additional support please join our [discord](https://discord.com/invite/NCAKTUayPK).