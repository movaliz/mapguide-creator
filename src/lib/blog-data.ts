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
    content: `Google Maps lets you save hundreds of places — restaurants, hotels, landmarks, hidden gems. But when it comes to actually exporting or sharing that list, Google offers no built-in option. No export button. No "share my list" feature. Nothing.

This guide shows you exactly how to get your saved places out of Google Maps in 2026 — using two methods.

## Why Google Maps Doesn't Let You Export

Google Maps is designed to keep you inside its ecosystem. Your saved places live in your Google account, and there's no native way to download them as a file, share them as a link, or send them to someone who doesn't have your login.

This frustrates millions of travelers every year — especially when planning trips with friends, creating travel guides, or simply wanting a backup of years of saved spots.

## Method 1: Use the ExportMyMap Chrome Extension (Easiest)

The fastest way to export your saved places is with the ExportMyMap Chrome Extension. It works directly inside Google Maps — no downloads, no account needed.

**How it works:**

1. Install the ExportMyMap extension from the Chrome Web Store
2. Open Google Maps in Chrome and navigate to your saved places
3. Click the ExportMyMap icon in your browser toolbar
4. Choose your export format: Share Link, Download PDF, or Print List
5. Done — your list is ready in seconds

This method requires no technical knowledge and takes under a minute. You can generate a beautiful shareable link that anyone can open, even without a Google account.

👉 Try ExportMyMap free at [exportmymap.com](/)

## Method 2: Export via Google Takeout

Google Takeout is Google's official data export tool. It lets you download a copy of all your Google data — including your Maps saved places.

**Step 1: Go to Google Takeout**

Open [takeout.google.com](https://takeout.google.com) and sign in with your Google account.

**Step 2: Select only Maps data**

Click "Deselect all" first, then scroll down and check only "Maps (your places)". This keeps the export small and fast.

**Step 3: Download your archive**

Click "Next step", choose your file format (ZIP is fine), and click "Create export". Google will email you a download link — usually within a few minutes.

**Step 4: Find your Saved Places file**

Unzip the downloaded archive. Inside you'll find a folder called Maps with a file called Saved Places.json. This is your data.

**Step 5: Upload to ExportMyMap**

Go to [exportmymap.com](/), upload your Saved Places.json file, and instantly see all your places as a beautiful list. Then export as a shareable link, PDF, or print list.

## What Export Formats Are Available?

Once your places are in ExportMyMap, you can export in three formats:

- **Share Link** — generates a public URL like exportmymap.com/list/abc123 that anyone can open. Perfect for sharing with friends or embedding in a travel blog.
- **Download PDF** — creates a clean, printable PDF guide with all your places, addresses, and Google Maps links. Great for offline use or printing before a trip.
- **Print List** — opens a print-optimized page with a minimal black-and-white numbered list. Ink-saving, no images, just the essentials.

## Frequently Asked Questions

**Is my data safe?** Yes. When you upload your JSON file to ExportMyMap, it's processed entirely in your browser. Your places are never stored on our servers unless you choose to generate a Share Link.

**Do I need a Google account to use ExportMyMap?** No. You just need your Saved Places.json file from Google Takeout, or the Chrome Extension if you want to skip the file entirely.

**How many places can I export for free?** The free plan shows a preview of your first 10 places. To export your full list, you can purchase a one-time export for $5 or get unlimited exports with an annual plan for $29/year.

**Does this work on mobile?** Google Takeout works on any device. The ExportMyMap Chrome Extension requires a desktop Chrome browser.

## Summary

Google Maps doesn't make it easy to export your saved places — but it's absolutely possible. The quickest method is the ExportMyMap Chrome Extension, which works in one click directly inside Google Maps. If you prefer to use Google Takeout, upload your Saved Places.json file to ExportMyMap and export in seconds.

👉 Export your Google Maps places free at [exportmymap.com](/)`,
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
