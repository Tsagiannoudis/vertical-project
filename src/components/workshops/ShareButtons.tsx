'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLink, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: 'facebook' | 'copy') => {
    const shareUrl = window.location.href;

    if (platform === 'facebook') {
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
      window.open(facebookShareUrl, '_blank', 'noopener,noreferrer');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500); // Reset after 2.5 seconds
      });
    }
  };

  return (
    <div className="flex items-center mt-8">
      <span className="text-lg font-semibold text-gray-800 mr-4">Κοινοποίηση:</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleShare('facebook')}
          aria-label="Κοινοποίηση στο Facebook"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3b5998] text-white transition-transform duration-200 hover:scale-110 hover:bg-[#2d4373]"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <div className="relative">
          <button
            onClick={() => handleShare('copy')}
            aria-label="Αντιγραφή συνδέσμου"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800 transition-transform duration-200 hover:scale-110 hover:bg-gray-300"
          >
            <FontAwesomeIcon icon={faLink} />
          </button>
          {copied && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 flex items-center whitespace-nowrap">
              <FontAwesomeIcon icon={faCheck} className="mr-1 text-green-400" />
              Αντιγράφηκε!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
