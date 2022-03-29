const CartModel = require('./Cart');

describe("Cart", () => {
    describe("getTotal", () => {
        test('Given an array with 2 items (price 5 qty 2 and price 2 qty 2) The result should be 14', () => {
            const items = [
                { price: 5, quantity: 2 },
                { price: 2, quantity: 2 }
            ];

            const total = CartModel.getTotal(items);

            expect(total).toBe(14);
        });

        test('Given an array with 1 items (price 10 qty 1) The result should be 10', () => {
            const items = [
                { price: 10, quantity: 1 }
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