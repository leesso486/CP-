const fs = require('fs');
const path = require('path');

function extractAndInject(htmlFile, tsxFile) {
    const htmlPath = path.join(__dirname, '..', htmlFile);
    const tsxPath = path.join(__dirname, tsxFile);
    
    if (!fs.existsSync(htmlPath)) {
        console.log('Missing', htmlPath);
        return;
    }
    
    const html = fs.readFileSync(htmlPath, 'utf8');
    const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
    if (!scriptMatch) {
         console.log('No script found in', htmlPath);
         return;
    }
    
    let jsCode = scriptMatch[1];
    // Special handling for DOMContentLoaded wrapper in the original script
    // E.g. document.addEventListener('DOMContentLoaded', () => { ... });
    jsCode = jsCode.replace(/document\.addEventListener\('DOMContentLoaded',\s*(?:function\(\)|\(\)|e\s*=>)\s*\{([\s\S]*?)\}\);(?=\s*$|\s*<\/script>|\s*function|\s*let|\s*const)/g, '$1');
    
    // Another attempt for general DOMContentLoaded replace to extract its body using a simple hack.
    // If the regex above misses it due to nested brackets, we can just remove the starting line and ending line
    jsCode = jsCode.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, '');
    // remove the last });
    const lastIndex = jsCode.lastIndexOf('});');
    if (lastIndex !== -1) {
        jsCode = jsCode.substring(0, lastIndex) + jsCode.substring(lastIndex + 3);
    }

    let tsx = fs.readFileSync(tsxPath, 'utf8');
    
    const useEffectEmptyRegex = /useEffect\(\(\)\s*=>\s*\{\s*\},\s*\[\]\);/;
    if (tsx.match(useEffectEmptyRegex)) {
        tsx = tsx.replace(useEffectEmptyRegex, `useEffect(() => {\n${jsCode}\n  }, []);`);
        
        // Also ensure there is no leftover "use client" bugs and it correctly handles line numbers if needed
        fs.writeFileSync(tsxPath, tsx, 'utf8');
        console.log('Successfully injected script into', tsxFile);
    } else {
        console.log('Could not find empty useEffect in', tsxFile, 'maybe already injected?');
    }
}

extractAndInject('sudanbi.html', 'app/sudanbi/page.tsx');
extractAndInject('anthology.html', 'app/anthology/page.tsx');
