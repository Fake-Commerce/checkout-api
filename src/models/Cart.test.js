const CartModel = require('./Cart');

describe("Cart", () => {
    describe("getTotal", () => {
        test('Given an array with 2 items (price 5.40 and price 2.60) The result should be 8', () => {
            const items = [
                { price: 5.40 },
                { price: 2.60 }
            ];
            
            const total = CartModel.getTotal(items);

            expect(total).toBe(8);
        });

        test('Given an array with 1 items (price 10) The result should be 10', () => {
            const items = [
                { price: 10 }
            ];

            const total = CartModel.getTotal(items);

            expect(total).toBe(10);
        });

        test('Given an empty array The result should be 0', () => {
            const items = [];

            const total = CartModel.getTotal(items);

            expect(total).toBe(0);
        });
    })

})