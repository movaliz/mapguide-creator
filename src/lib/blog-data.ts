export interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-export-google-maps-saved-places",
    title: "How to Export Your Google Maps Saved Places (Step by Step)",
    desc: "A complete walkthrough of exporting your saved places using Google Takeout or our Chrome Extension.",
    date: "Mar 15, 2026",
    content: `Google Maps lets you save your favorite restaurants, hotels, landmarks, and more — but sharing those lists with others isn't straightforward. Here's how to export them.

## Method 1: Using the ExportMyMap Chrome Extension (Recommended)

The fastest way to export your saved places is with our free Chrome Extension:

1. **Install the extension** from the Chrome Web Store — it takes one click.
2. **Open Google Maps** and navigate to your saved places (Your places → Saved).
3. **Click the Export button** that appears in the extension toolbar.
4. Choose your format: shareable link, PDF guide, or print view.

That's it — no file downloads, no waiting for Google Takeout.

## Method 2: Using Google Takeout

If you prefer a manual approach, Google Takeout lets you download your data:

1. Go to [takeout.google.com](https://takeout.google.com).
2. Deselect all products, then scroll down and select **"Saved"** under Google Maps.
3. Click **"Next step"** and choose your export format (ZIP).
4. Wait for Google to prepare your download (this can take minutes to hours).
5. Download the ZIP and extract **Saved Places.json**.
6. Upload the JSON file to [exportmymap.com](/) to generate your guide.

## Tips for a Clean Export

- **Review your lists first.** Remove any outdated or irrelevant saves to keep your export tidy.
- **Organize by list.** Google Maps lets you create custom lists (e.g., "Tokyo 2025", "Best Coffee"). Export each list separately for cleaner results.
- **Check your addresses.** Some saved places may have incomplete address data — especially if you saved them via a quick pin drop.

## What You Get

Whether you use the Chrome Extension or Google Takeout, ExportMyMap turns your raw data into a beautifully formatted guide with place names, addresses, and direct Google Maps links.`,
  },
  {
    slug: "5-ways-to-share-travel-list-with-friends",
    title: "5 Ways to Share Your Travel List with Friends",
    desc: "From shareable links to printed guides — discover the best ways to share your favorite spots.",
    date: "Mar 8, 2026",
    content: `You've spent hours curating the perfect list of restaurants, cafés, and hidden gems. Now you want to share it. Here are five practical ways to do it.

## 1. Shareable Link

Generate a single URL that anyone can open — no app or account needed. They'll see your places on an interactive map with names, addresses, and "Open in Google Maps" buttons.

**Best for:** Sharing via WhatsApp, iMessage, email, or social media.

## 2. PDF Guide

Export a clean, professionally formatted PDF with numbered places, addresses, and categories. It looks like a mini travel guidebook.

**Best for:** Printing before a trip, sending to someone who prefers documents, or keeping an offline backup.

## 3. Print View

A minimal black-and-white layout optimized for printing. No fancy graphics — just a clean numbered list with essential info.

**Best for:** Sticking on a fridge, handing to a travel companion, or keeping in your daypack.

## 4. Google Maps Collaborative List

Google Maps has a built-in "share list" feature, but it requires everyone to have a Google account and the Maps app. It works, but it's limited.

**Best for:** When everyone in your group uses Google Maps actively.

## 5. Screenshot Collage

The old-school approach: take screenshots of each place and send them in a group chat. It works in a pinch, but quickly becomes messy with more than 5 places.

**Best for:** Sharing 1-3 places quickly. Not great for longer lists.

## The Bottom Line

For anything beyond a couple of places, a shareable link or PDF is the most practical option. It saves time, looks professional, and works for everyone — whether they use Google Maps or not.`,
  },
  {
    slug: "google-takeout-what-it-is-how-to-use-it",
    title: "Google Takeout: What It Is and How to Use It",
    desc: "Everything you need to know about downloading your Google data, including Maps saved places.",
    date: "Feb 28, 2026",
    content: `Google Takeout is a free tool that lets you download a copy of your data from Google products — Gmail, Drive, Photos, Maps, and more. Here's what you need to know.

## What Is Google Takeout?

Google Takeout (takeout.google.com) is Google's official data export tool. It was created as part of the "Data Liberation Front" — Google's initiative to ensure users can always take their data with them.

You can export data from over 50 Google products, including:
- Google Maps (saved places, reviews, timeline)
- Gmail (all emails)
- Google Photos (all photos and videos)
- Google Drive (all files)
- YouTube (watch history, playlists, comments)

## How to Export Google Maps Saved Places

1. Visit [takeout.google.com](https://takeout.google.com).
2. Click **"Deselect all"** at the top to start fresh.
3. Scroll down to **"Saved"** (under Maps) and check the box.
4. Click **"Next step"** at the bottom.
5. Choose delivery method: download link via email is the simplest option.
6. Select **".zip"** format and your preferred file size.
7. Click **"Create export"**.

Google will prepare your data and send you a download link. This usually takes a few minutes but can take up to a day for large exports.

## What's in the Export?

Your ZIP file will contain a **Saved Places.json** file with all your saved locations, including:
- Place name
- Address
- Google Maps URL
- Geographic coordinates
- The list it belongs to (Favorites, Want to go, etc.)

## What to Do with the JSON File

The raw JSON isn't very human-readable. That's where ExportMyMap comes in — upload your Saved Places.json file and instantly get a formatted, shareable guide.

## Privacy & Security

- Google Takeout exports are private — only you can access them.
- The export link expires after a set period.
- Your data is downloaded directly from Google's servers.
- ExportMyMap processes your file entirely in your browser — nothing is uploaded to any server.`,
  },
];
