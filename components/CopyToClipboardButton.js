import { useState } from 'react';

export default function CopyToClipboardButton({ text, language }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Reset copied state after 1.5 seconds
      })
      .catch(error => {
        console.error('Error copying to clipboard: ', error);
      });
  };

  return (
    <span className="copyclick">
      <img src="/copyclick.png" alt="copy link" onClick={copyToClipboard} style={{ cursor: 'pointer' }} />
      {copied && <span>{(language === "fr") ? "Copié!" : "Copied!"}</span>}
    </span>
  );
};