// security.js - Add security features to Jekyll site
document.addEventListener('DOMContentLoaded', function() {
    // 1. Disable image dragging
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('draggable', 'false');
        img.style.userSelect = 'none';
        img.style.webkitUserDrag = 'none';
        
        // Add watermark to images
        // Only apply to images that aren't icons or logos (optional filtering)
        if (img.width > 100 && img.height > 250) {
            // Create a container for the image if it doesn't have one
            if (img.parentElement.className !== 'image-container') {
                const container = document.createElement('div');
                container.className = 'image-container';
                img.parentNode.insertBefore(container, img);
                container.appendChild(img);
                container.classList.add('watermarked');
            }
        }
    });

    // 2. Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        
        // Create and show tooltip with animation
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Right-click is disabled for this site';
        tooltip.className = 'security-tooltip';
        tooltip.style.position = 'fixed';
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.zIndex = '9999';
        tooltip.style.fontSize = '14px';
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
        tooltip.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        document.body.appendChild(tooltip);
        
        // Trigger animation (needs to be in a separate tick to work)
        setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove tooltip with fade out animation
        setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(-10px)';
            
            // Remove from DOM after animation completes
            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 300);
        }, 2000);
        
        return false;
    });
    
    // 3. Disable keyboard shortcuts that might be used to view source/inspect
    document.addEventListener('keydown', function(e) {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect elements)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+U (View source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
    });
    
    // 4. Disable text selection on specific elements (optional)
    // Uncomment if you want to disable text selection on specific elements
    /*
    const nonSelectableElements = document.querySelectorAll('.bio-content, .section-title');
    nonSelectableElements.forEach(element => {
        element.style.userSelect = 'none';
    });
    */
    
    // 5. Add dynamic watermark text based on page
    const watermarkedElements = document.querySelectorAll('.watermarked');
    watermarkedElements.forEach(element => {
        // You can customize the watermark text based on page or other conditions
        const pageTitle = document.title;
        const authorName = 'GLOBAL-PRADA'; // Change to your name or dynamically get it
        element.setAttribute('data-watermark', `© ${authorName} - ${pageTitle}`);
    });
});

// 6. Add CSS for watermark if it doesn't exist in your stylesheet
function addWatermarkStyles() {
    if (!document.getElementById('watermark-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'watermark-styles';
        styleSheet.textContent = `
            .image-container {
                position: relative;
                display: inline-block;
            }
            
            .watermarked::after {
                content: attr(data-watermark, "© GLOBAL-PRADA");
                position: absolute;
                bottom: 10px;
                right: 10px;
                color: rgba(255, 255, 255, 0.26);
                font-size: 7px;
                font-weight: bold;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                pointer-events: none;
                z-index: 100;
            }
            
            .security-tooltip {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                z-index: 9999;
                font-size: 14px;
                pointer-events: none;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Call the function to add styles
addWatermarkStyles();