const canConstruct = (ransomNote, magazine) => {
    const magDict = {};
    
    for (let i = 0; i < magazine.length; i++) {
        if (!magDict[magazine[i]]) magDict[magazine[i]] = 1;
        else magDict[magazine[i]] += 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (!magDict[ransomNote[i]]) return false;
        
        magDict[ransomNote[i]] -= 1;
    }
    
    return true;
};
