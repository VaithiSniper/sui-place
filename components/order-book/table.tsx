export default function OrderBook() {

    const buyClasses = "bg-emerald-500 text-white"
    const sellClasses = "bg-red text-white"

    type Point = {
        x: Number,
        y: Number
    }

    enum orderType {
        buy,
        sell
    }

    type Order = {
        unit: Point,
        price: Number,
        type: orderType
    }

    const orders: Order[] = [
        {
            unit: { x: 3, y: 2 },
            price: 23,
            type: orderType.buy
        },
        {
            unit: { x: 2, y: 4 },
            price: 19,
            type: orderType.sell
        },
        {
            unit: { x: 1, y: 0 },
            price: 21,
            type: orderType.sell
        },
        {
            unit: { x: 9, y: 5 },
            price: 18,
            type: orderType.buy
        },
    ]

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Sell/Buy
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: Order) => (
                        <tr className={"border-b dark:border-gray-700 " + (order.type === orderType.buy ? buyClasses : sellClasses)}>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {`${order.unit.x}, ${order.unit.y}`}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {`${order.price} SUI`}
                            </th>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium hover:underline">{order.type === orderType.buy ? "Buy" : "Sell"}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}