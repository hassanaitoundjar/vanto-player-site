export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Does Vanto Player include any channels, playlists, or content?",
    answer:
      "No. Vanto Player is strictly an independent media playback software application. It does not contain, host, bundle, or distribute any channels, playlists, streams, or media files. Users must supply their own legally accessible content (such as an M3U/M3U8 URL, Xtream Codes credentials, or local video files).",
  },
  {
    question: "Does Vanto Player support Electronic Program Guides (EPG)?",
    answer:
      "Yes. Vanto Player includes an integrated EPG parser. When your playlist source includes valid XMLTV links or Xtream API EPG metadata, Vanto Player formats the upcoming programming, air times, and descriptions directly in the TV guide interface.",
  },
  {
    question: "How do device licenses and the free trial work?",
    answer:
      "Vanto Player offers a complimentary 7-day evaluation period for new device installations, allowing you to test hardware performance and codec compatibility. Software licenses are tied to your device's unique hardware identifier (MAC address) and provide permanent software access without recurring subscriptions.",
  },
  {
    question: "Why does my playlist work on my computer but not on my Smart TV?",
    answer:
      "Smart TV operating systems (such as Samsung Tizen and LG webOS) use hardware-specific audio and video decoders that may differ from desktop operating systems. Ensure your stream uses widely supported formats such as H.264 or H.265 with AAC audio. Also ensure your local router allows UDP/TCP streaming traffic to your television.",
  },
  {
    question: "My stream freezes or buffers frequently. How can I fix this?",
    answer:
      "Buffering is typically caused by insufficient Wi-Fi bandwidth, network congestion, or upstream server throttling from your playlist provider. For Smart TVs, connecting via a wired Ethernet cable or 5 GHz Wi-Fi band substantially stabilizes high-bitrate 4K streams.",
  },
  {
    question: "What should I do if I see an 'Unable to Stream' or connection timeout error?",
    answer:
      "Verify that your playlist URL or server credentials are typed accurately without leading or trailing spaces. If the issue persists, test the stream in our Web Player or check with your content provider to verify server status and access rights.",
  },
];

