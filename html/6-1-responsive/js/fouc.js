const fouc = (F) => {
    F.className = F.className.replace(/\bno-display\b/, 'show-display');
    document.documentElement = F;
};