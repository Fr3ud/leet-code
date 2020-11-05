const minCostToMoveChips = (position) => {
    let evenPosition = 0;
    let oddPosition = 0;

    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            evenPosition++;
        } else {
            oddPosition++;
        }
    }

    return Math.min(evenPosition, oddPosition);
};