// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import isEmail from "validator/lib/isEmail";
import axios from "axios";

const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/985915018317013012/_0rXy-Onf5Ca65rdHRJRA-pAVEtWTKfLMvjCD6TZuLq0dDZQ39xLPs-sGdEC-OlZQ80A";

export default async function handler(req, res) {
  if (req?.method !== "POST") {
    return res.status(501).json({
      error: `METHOD ${req?.method} NOT ALLOWED`,
      message: "POST-ONLY",
    });
  }

  const { email } = req?.body;

  if (!isEmail(email)) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Parameter Error",
      badParams: { email },
    });
  }

  try {
    await axios.post(DISCORD_WEBHOOK, {
      embeds: [
        {
          title: "Contact Request",
          fields: [
            {
              name: "Email",
              value: email,
            },
            {
              name: "Date",
              value: new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
              }),
            },
          ],
          color: Math.floor(Math.random() * 16777216),
        },
      ],
    });

    return res.status(200).json({
      message: "Contact email submitted",
    });
  } catch (error) {
    console.log(error);
    console.log(`Could not submit contact information for ${email}`);
  }

  return res
    .status(500)
    .json({ error: "Webhook Error", message: "Couldn't submit contact email" });
}
