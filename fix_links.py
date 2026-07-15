import re

with open('/home/lara/veloxtv/vanto-player-website/components/sections/Download.tsx', 'r') as f:
    content = f.read()

# Add import Link
if "import Link from 'next/link';" not in content:
    content = content.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport Link from 'next/link';")

# Convert buttons to Link
# Format: <button className="... " ...> ... </button>
# Replace with <Link href="#" className="..." ...> ... </Link>

# 1. Download APK
content = content.replace(
    '<button className="flex-1 bg-[#4b8df8] text-white font-bold text-[12px] py-2.5 rounded-sm hover:bg-blue-600 transition-colors shadow-sm text-center">\n                  Download APK\n                </button>',
    '<Link href="#" className="flex-1 bg-[#4b8df8] text-white font-bold text-[12px] py-2.5 rounded-sm hover:bg-blue-600 transition-colors shadow-sm text-center flex items-center justify-center">\n                  Download APK\n                </Link>'
)

# 2. Google Play
content = content.replace(
    '<button className="flex-1 bg-black text-white font-bold text-[12px] py-2.5 rounded-sm hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-1.5">\n                  <Play className="w-3.5 h-3.5 fill-white text-white" /> \n                  <div className="flex flex-col items-start leading-none text-left">\n                     <span className="text-[6px] font-normal uppercase text-gray-300">Get it on</span>\n                     <span className="text-[11px] mt-0.5">Google Play</span>\n                  </div>\n                </button>',
    '<Link href="#" className="flex-1 bg-black text-white font-bold text-[12px] py-2.5 rounded-sm hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-1.5">\n                  <Play className="w-3.5 h-3.5 fill-white text-white" /> \n                  <div className="flex flex-col items-start leading-none text-left">\n                     <span className="text-[6px] font-normal uppercase text-gray-300">Get it on</span>\n                     <span className="text-[11px] mt-0.5">Google Play</span>\n                  </div>\n                </Link>'
)

# 3. App Store
content = content.replace(
    '<button className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2.5 w-[180px]">\n                  <Apple className="w-7 h-7 fill-white" /> \n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Download on the</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">App Store</span>\n                  </div>\n                </button>',
    '<Link href="#" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2.5 w-[180px]">\n                  <Apple className="w-7 h-7 fill-white" /> \n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Download on the</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">App Store</span>\n                  </div>\n                </Link>'
)

# 4. Mac OS
content = content.replace(
    '<button className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2.5 w-[180px]">\n                  <div className="w-6 h-6 bg-[#007aff] rounded-sm flex items-center justify-center">\n                    <span className="text-white font-bold text-[8px]">Mac</span>\n                  </div>\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">MAC OS</span>\n                  </div>\n                </button>',
    '<Link href="#" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2.5 w-[180px]">\n                  <div className="w-6 h-6 bg-[#007aff] rounded-sm flex items-center justify-center">\n                    <span className="text-white font-bold text-[8px]">Mac</span>\n                  </div>\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">MAC OS</span>\n                  </div>\n                </Link>'
)

# 5. Windows
content = content.replace(
    '<button className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">\n                  <div className="grid grid-cols-2 gap-[1px] w-6 h-6">\n                     <div className="bg-[#00adef]"></div>\n                     <div className="bg-[#00adef]"></div>\n                     <div className="bg-[#00adef]"></div>\n                     <div className="bg-[#00adef]"></div>\n                  </div>\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">Window os</span>\n                  </div>\n                </button>',
    '<Link href="#" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">\n                  <div className="grid grid-cols-2 gap-[1px] w-6 h-6">\n                     <div className="bg-[#00adef]"></div>\n                     <div className="bg-[#00adef]"></div>\n                     <div className="bg-[#00adef]"></div>\n                     <div className="bg-[#00adef]"></div>\n                  </div>\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">Window os</span>\n                  </div>\n                </Link>'
)

# 6. Web Browser
content = content.replace(
    '<button className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">\n                  <Globe className="w-6 h-6 text-white" />\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">Web Browsers</span>\n                  </div>\n                </button>',
    '<Link href="#" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">\n                  <Globe className="w-6 h-6 text-white" />\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">Web Browsers</span>\n                  </div>\n                </Link>'
)

# 7. Smart TV
content = content.replace(
    '<button className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">\n                  <Monitor className="w-6 h-6 text-white" />\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">Smart TV</span>\n                  </div>\n                </button>',
    '<Link href="#" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">\n                  <Monitor className="w-6 h-6 text-white" />\n                  <div className="flex flex-col items-start text-left">\n                    <span className="text-[8px] leading-none text-gray-300">Available for</span>\n                    <span className="text-[15px] leading-none font-semibold mt-0.5">Smart TV</span>\n                  </div>\n                </Link>'
)

with open('/home/lara/veloxtv/vanto-player-website/components/sections/Download.tsx', 'w') as f:
    f.write(content)

