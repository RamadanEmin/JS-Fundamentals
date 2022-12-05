function furniture(input = []) {
    let totalCost = 0;
    let pattern = />>(?<furnitureName>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let line = input.shift();
    console.log('Bought furniture:');
    while (line !== 'Purchase') {
        let furniture = pattern.exec(line);
        if (furniture) {
            totalCost += furniture.groups.price * furniture.groups.quantity;
            console.log(furniture.groups.furnitureName);
        }
        line = input.shift();
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
