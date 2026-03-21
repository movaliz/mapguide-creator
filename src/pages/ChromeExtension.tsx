import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Download, Share2, FileText, Chrome, Zap, Shield, Globe } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const ChromeExtension = () => (
  <div className="min-h-screen flex flex-col">
    <AppHeader hasPlaces={false} onExportPDF={() => {}} onPrint={() => {}} onShare={() => {}} />

    <main className="flex-1 max-w-[720px] mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>

      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
        Google Maps Chrome Extension: Export & Share Your Saved Places
      </h1>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        The easiest way to export your Google Maps saved places, starred locations, and custom lists — directly from your browser, no downloads required.
      </p>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <Chrome className="w-6 h-6 text-accent" />
          <h2 className="font-display text-xl text-foreground">Install the Extension</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Add Export My Map to Chrome and start exporting your saved places in seconds.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Add to Chrome — Free
        </a>
        <p className="text-xs text-muted-foreground mt-2">Link coming soon</p>
      </div>

      <article className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
        <h2>Why You Need a Google Maps Export Extension</h2>
        <p>
          Google Maps is the go-to tool for saving restaurants, hotels, attractions, and hidden gems while planning trips or exploring your city. But Google doesn't offer a simple way to <strong>export or share those saved places</strong> with others.
        </p>
        <p>
          That's where <strong>Export My Map</strong> comes in. Our Chrome extension works directly inside Google Maps, letting you export your entire list of saved places with a single click — no Google Takeout, no JSON files, no technical steps.
        </p>

        <h2>How It Works</h2>
        <div className="not-prose grid gap-4 my-6">
          {[
            { icon: Download, title: "1. Install the extension", desc: "Add Export My Map to Chrome from the Chrome Web Store. It's free and takes 5 seconds." },
            { icon: Globe, title: "2. Open Google Maps", desc: "Navigate to your saved places, starred locations, or any custom list in Google Maps." },
            { icon: Share2, title: "3. Click Export", desc: "Hit the export button and instantly get a shareable link, downloadable PDF, or printable list." },
          ].map((step) => (
            <div key={step.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-foreground text-sm mb-0.5">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Export Formats</h2>
        <p>Export My Map supports three flexible output formats so you can use your saved places however you need:</p>
        <ul>
          <li><strong>Shareable Link</strong> — Generate a unique URL that anyone can open to see your curated list of places, complete with names, addresses, and Google Maps links.</li>
          <li><strong>PDF Download</strong> — Get a clean, formatted PDF with all your places listed by country, perfect for printing or sharing offline.</li>
          <li><strong>Print View</strong> — A printer-friendly layout optimized for quick reference on paper.</li>
        </ul>

        <h2>What Can You Export?</h2>
        <p>The extension works with all types of saved content in Google Maps:</p>
        <ul>
          <li><strong>Starred places</strong> — Your default "Starred places" list</li>
          <li><strong>Favorites</strong> — Restaurants, cafes, and spots you've marked as favorites</li>
          <li><strong>Want to go</strong> — Your travel wishlist and planned destinations</li>
          <li><strong>Custom lists</strong> — Any lists you've created in Google Maps</li>
        </ul>

        <h2>Why Choose Export My Map?</h2>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
          {[
            { icon: Zap, title: "Instant export", desc: "No waiting for Google Takeout. Export places in seconds, not hours." },
            { icon: Shield, title: "Privacy first", desc: "All processing happens in your browser. Your data never leaves your device." },
            { icon: MapPin, title: "Smart detection", desc: "Automatically detects countries and adds flag emojis to your export." },
            { icon: FileText, title: "Multiple formats", desc: "Share via link, download as PDF, or print — whatever works for you." },
          ].map((feature) => (
            <div key={feature.title} className="p-4 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-1.5">
                <feature.icon className="w-4 h-4 text-accent" />
                <h4 className="font-body font-semibold text-foreground text-sm">{feature.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        <h2>Google Takeout vs. Export My Map Extension</h2>
        <p>
          Google offers <strong>Google Takeout</strong> as a way to export your data, but it's slow, complex, and exports in a raw JSON format that most people can't use. Here's how Export My Map compares:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 font-semibold text-foreground">Feature</th>
                <th className="text-left p-3 font-semibold text-foreground">Google Takeout</th>
                <th className="text-left p-3 font-semibold text-accent">Export My Map</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 text-muted-foreground">Speed</td><td className="p-3 text-muted-foreground">Hours to days</td><td className="p-3 text-accent font-medium">Seconds</td></tr>
              <tr><td className="p-3 text-muted-foreground">Format</td><td className="p-3 text-muted-foreground">Raw JSON</td><td className="p-3 text-accent font-medium">Link, PDF, Print</td></tr>
              <tr><td className="p-3 text-muted-foreground">Shareable</td><td className="p-3 text-muted-foreground">No</td><td className="p-3 text-accent font-medium">Yes</td></tr>
              <tr><td className="p-3 text-muted-foreground">Setup</td><td className="p-3 text-muted-foreground">Multi-step</td><td className="p-3 text-accent font-medium">One click</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Perfect For</h2>
        <ul>
          <li><strong>Trip planning</strong> — Share your curated list of restaurants, sights, and hotels with travel companions</li>
          <li><strong>Travel bloggers</strong> — Create city guides from your personal saved places</li>
          <li><strong>Relocation</strong> — Export important locations when moving to a new city</li>
          <li><strong>Food lovers</strong> — Share your restaurant recommendations with friends</li>
          <li><strong>Business</strong> — Export and share lists of business locations, client sites, or delivery points</li>
        </ul>

        <h2>Get Started</h2>
        <p>
          Install the Export My Map Chrome extension today and start sharing your Google Maps saved places in seconds. It's free to try with up to 10 places, and you can unlock unlimited exports with a one-time purchase.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          <Chrome className="w-4 h-4" />
          Add to Chrome — Free
        </a>
        <p className="text-xs text-muted-foreground mt-3">
          Or <Link to="/" className="text-accent hover:underline">upload a JSON file</Link> to try it without installing.
        </p>
      </div>
    </main>

    <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
      exportmymap.com — Share your saved places with anyone
    </footer>
  </div>
);

export default ChromeExtension;
