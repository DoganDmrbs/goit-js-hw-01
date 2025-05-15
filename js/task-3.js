function getElementWidth(content, padding, border) {
    
    const newContent = content.split("px")[0]
    const newPadding = padding.split('px')[0];
    const newBorder = border.split('px')[0];
    
    return Number.parseFloat(newContent) + Number.parseFloat(newPadding) * 2 + Number.parseFloat(newBorder) * 2
}
document.write(getElementWidth("50px", "8px", "4px")+ "<br>"); // 74
document.write(getElementWidth("60px", "12px", "8.5px")+ "<br>"); // 101
document.write(getElementWidth("200px", "0px", "0px")+ "<br>"); // 200

