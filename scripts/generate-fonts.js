import fs from "fs";
import path from "path";

const FONTS_DIR = path.join(
  process.cwd(),
  "node_modules",
  "@expo-google-fonts",
);

// Maps weights to Tailwind-friendly suffixes
const weightMap = {
  100: "-thin",
  200: "-extralight",
  300: "-light",
  400: "", // 400 is the base, so no suffix (e.g., --font-sans)
  500: "-medium",
  600: "-semibold",
  700: "-bold",
  800: "-extrabold",
  900: "-black",
};

// Maps specific font packages to CSS variable base names
const categoryMap = {
  inter: "sans",
  "playfair-display": "serif",
  "jetbrains-mono": "mono",
};

function findFontsRecursively(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFontsRecursively(filePath, fileList);
    } else if (file.endsWith(".ttf")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function generateConfig() {
  if (!fs.existsSync(FONTS_DIR)) {
    console.error(
      "❌ Could not find node_modules/@expo-google-fonts. Have you installed any fonts?",
    );
    return;
  }

  const allFontFiles = findFontsRecursively(FONTS_DIR);
  const groupedFonts = {};

  // Parse files and group them
  allFontFiles.forEach((absolutePath) => {
    const relativePath = absolutePath.split(process.cwd() + "/")[1];
    const fileName = path.basename(absolutePath, ".ttf");

    // Expo fonts format: FamilyName_WeightVariant (e.g., Inter_400Regular or Inter_400Regular_Italic)
    const match = fileName.match(
      /^([A-Za-z0-9]+)_(\d{3})([A-Za-z]+)(_Italic)?$/,
    );

    if (match) {
      const [_, familyRaw, weight, variant, isItalic] = match;

      // Extract the package folder name (e.g., 'inter') from the path to map to categories
      const packageDir = relativePath
        .split("@expo-google-fonts/")[1]
        .split("/")[0];
      const category = categoryMap[packageDir] || packageDir; // Fallback to package name if not in map

      const groupKey = packageDir + (isItalic ? "-italic" : "");

      if (!groupedFonts[groupKey]) {
        groupedFonts[groupKey] = {
          displayName: familyRaw + (isItalic ? " Italic" : ""),
          category: category,
          isItalic: !!isItalic,
          fonts: [],
        };
      }

      groupedFonts[groupKey].fonts.push({
        weight,
        fileName,
        relativePath,
        cssVar: `--font-${category}${weightMap[weight] || ""}${isItalic ? "-italic" : ""}`,
      });
    }
  });

  // Sort fonts within groups by weight
  Object.keys(groupedFonts).forEach((key) => {
    groupedFonts[key].fonts.sort(
      (a, b) => parseInt(a.weight) - parseInt(b.weight),
    );
  });

  // --- 1. GENERATE ASSET ARRAY ---
  let arrayOutput = `fonts: [\n`;
  Object.values(groupedFonts).forEach((group) => {
    arrayOutput += `  // ${group.displayName}\n`;
    group.fonts.forEach((font) => {
      // Format to use forward slashes regardless of OS
      const cleanPath = font.relativePath.replace(/\\/g, "/");
      arrayOutput += `  "${cleanPath}",\n`;
    });
  });
  arrayOutput += `],`;

  // --- 2. GENERATE CSS @THEME ---
  let cssOutput = `@theme {\n`;
  Object.values(groupedFonts).forEach((group) => {
    cssOutput += `  /* ${group.displayName} */\n`;
    group.fonts.forEach((font) => {
      cssOutput += `  ${font.cssVar}: ${font.fileName};\n`;
    });
  });
  cssOutput += `}`;

  console.log("\n✅ === FONT ASSETS ARRAY ===\n");
  console.log(arrayOutput);
  console.log("\n✅ === TAILWIND CSS @THEME ===\n");
  console.log(cssOutput);
  console.log("\n");
}

generateConfig();
