// Utility function to get flag emoji from language code
export const getFlagFromLanguageCode = (languageCode: string): string => {
  const flags: { [key: string]: string } = {
    // Major European languages
    'nl': '🇳🇱', // Dutch - Netherlands
    'en': '🇬🇧', // English - United Kingdom
    'es': '🇪🇸', // Spanish - Spain
    'fr': '🇫🇷', // French - France
    'de': '🇩🇪', // German - Germany
    'it': '🇮🇹', // Italian - Italy
    'pt': '🇵🇹', // Portuguese - Portugal
    'ru': '🇷🇺', // Russian - Russia
    'pl': '🇵🇱', // Polish - Poland
    'sv': '🇸🇪', // Swedish - Sweden
    'no': '🇳🇴', // Norwegian - Norway
    'da': '🇩🇰', // Danish - Denmark
    'fi': '🇫🇮', // Finnish - Finland
    'cs': '🇨🇿', // Czech - Czech Republic
    'sk': '🇸🇰', // Slovak - Slovakia
    'hu': '🇭🇺', // Hungarian - Hungary
    'ro': '🇷🇴', // Romanian - Romania
    'bg': '🇧🇬', // Bulgarian - Bulgaria
    'hr': '🇭🇷', // Croatian - Croatia
    'sl': '🇸🇮', // Slovenian - Slovenia
    'et': '🇪🇪', // Estonian - Estonia
    'lv': '🇱🇻', // Latvian - Latvia
    'lt': '🇱🇹', // Lithuanian - Lithuania
    'el': '🇬🇷', // Greek - Greece
    'tr': '🇹🇷', // Turkish - Turkey
    
    // Asian languages
    'zh': '🇨🇳', // Chinese - China
    'ja': '🇯🇵', // Japanese - Japan
    'ko': '🇰🇷', // Korean - South Korea
    'th': '🇹🇭', // Thai - Thailand
    'vi': '🇻🇳', // Vietnamese - Vietnam
    'hi': '🇮🇳', // Hindi - India
    'bn': '🇧🇩', // Bengali - Bangladesh
    'ur': '🇵🇰', // Urdu - Pakistan
    'fa': '🇮🇷', // Persian - Iran
    'ar': '🇸🇦', // Arabic - Saudi Arabia
    'he': '🇮🇱', // Hebrew - Israel
    'id': '🇮🇩', // Indonesian - Indonesia
    'ms': '🇲🇾', // Malay - Malaysia
    'tl': '🇵🇭', // Filipino - Philippines
    
    // Americas
    'pt-br': '🇧🇷', // Portuguese - Brazil
    'es-mx': '🇲🇽', // Spanish - Mexico
    'es-ar': '🇦🇷', // Spanish - Argentina
    'en-us': '🇺🇸', // English - United States
    'en-ca': '🇨🇦', // English - Canada
    'fr-ca': '🇨🇦', // French - Canada
    
    // African languages
    'sw': '🇰🇪', // Swahili - Kenya
    'af': '🇿🇦', // Afrikaans - South Africa
    'am': '🇪🇹', // Amharic - Ethiopia
    
    // Other
    'mt': '🇲🇹', // Maltese - Malta
    'is': '🇮🇸', // Icelandic - Iceland
    'ga': '🇮🇪', // Irish - Ireland
    'cy': '🏴󠁧󠁢󠁷󠁬󠁳󠁿', // Welsh - Wales
    'eu': '🏴󠁥󠁳󠁰󠁶󠁿', // Basque - Basque Country
    'ca': '🏴󠁥󠁳󠁣󠁴󠁿', // Catalan - Catalonia
  }
  
  // First try exact match
  if (flags[languageCode.toLowerCase()]) {
    return flags[languageCode.toLowerCase()]
  }
  
  // Try base language code (e.g., 'en' from 'en-US')
  const baseCode = languageCode.toLowerCase().split('-')[0]
  if (flags[baseCode]) {
    return flags[baseCode]
  }
  
  // Default fallback - globe emoji
  return '🌐'
}