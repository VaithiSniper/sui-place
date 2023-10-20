 module unfold::sui_game {
    // Imports
    use sui::object::{Self, UID, new};
    use sui::tx_context::{Self, TxContext};
    use std::vector;
    use sui::transfer;

    struct Point has store { 
        x: u64,
        y: u64,
    }

    struct Plot has key, store{
        id: UID,
        units: vector<Unit>,
        standard_price: u64, // overall init price
        ownership: address, // will be @0x1 or contain address of some community 
        completion: bool, // to be removed later
        current_price: u64, // overall price
    }

    // TODO: add community object

    struct Unit has key, store{
        id: UID,
        standard_price: u64, // unit wise init price
        ownership: address, // will be @0x1 or contain address of some consumer 
        current_price: u64, // unit wise price for the unit
        community_name: address,
    }

    struct Consumer has key, store {
        id: UID,
        consumer_name: address,
        units_owned: u64,
        community_name: address,
        tokens: u64,
    }

    struct Request has key, store {
        id: UID,
        buy_or_sell: bool,
        unit_location: Point,
        price: u64,
        requested_by: Consumer,
        responded_by: Consumer,
        community_name: address,
    }

    struct OrderBook has key, store {
        id: UID,
        orders: vector<Request>,
    }

    // Init functions for Plot
    public fun initPlot(ctx: &mut TxContext): Plot {
        let _units: vector<Unit> =  vector::empty<Unit>();
        Plot {
            id: new(ctx),
            standard_price: 1000,
            ownership: @0x1,
            completion: false,
            current_price: 1000,
            units:  _units,
        }
    }

    // Init functions for Unit
    public fun initUnit(ctx: &mut TxContext): Unit {
        Unit {
            id: new(ctx),
            standard_price:10,
            ownership: @0x1,
            current_price: 10,
            community_name: @0x1,
        } 
    }

    // Init functions for Consumer
    public fun initConsumer(consumer_name: address, ctx: &mut TxContext): Consumer {
        Consumer {
            id: new(ctx),
            consumer_name: consumer_name,
            units_owned: 0,
            community_name: @0x1,
            tokens: 0, //need to take from wallet or assign a fixed number of tokens
        }
    }

    // Init functions for Request
    // need to add id
    public fun initRequest(
        _orderBook: &mut vector<Request>,
        _buy_or_sell: bool, // true is buy, false is sell
        _unit_location: Point,
        _price: u64,
        _requested_by: Consumer,
        ctx: &mut TxContext,
    ) {
        let dummyConsumer: Consumer = initConsumer(@0x1, ctx);
        let order: Request = Request {
            id: new(ctx), 
            buy_or_sell: _buy_or_sell,
            unit_location: _unit_location,
            price: _price,
            requested_by: _requested_by,
            responded_by: dummyConsumer,
            community_name: @0x1,
        };
        vector::push_back(_orderBook,  order);
    }

    public fun isComplete(plot: &Plot): bool {
        plot.completion
    }

    public fun communityName(plot: &Plot): address {
        plot.ownership
    }

    // Initialize a matrix representing 4 plots and 16 units
    public fun initMatrix(ctx: &mut TxContext): Plot {
        let plot = initPlot(ctx);
        // You need to initiliaze the child unit objects
        let _unitIndex: u16 = 0;
        while (_unitIndex < 100) {
            let unit = initUnit(ctx); // create a unit
            vector::push_back(&mut plot.units, unit); // add to plot
        };    
        plot
    }

    // Function to count units owned by a community in a plot
    public fun unitCounter(plot: Plot, community: address): u64 {
        let count: u64 = 0;
        let _unitIndex: u64 = 0;
        while (_unitIndex < 100) {
            let unit:&Unit = vector::borrow(&plot.units, _unitIndex);
            if (unit.community_name == community) {
                count = count + 1;
            }
        };
        count
    }

//     // Function to count units owned by a community in adjacent plots
//     public fun unitAdjacent(matrix: &vector<TicTacToe>, plot_row: u8, plot_col: u8, community: address): u64 {
//     let count: u64 = 0;
//     let dx: u8 = 0;
//     dx = dx.wrapping_sub(1); // Decrement and wrap around if it underflows
//     while (dx <= 1) {
//         let dy: u8 = 0;
//         dy = dy.wrapping_sub(1); // Decrement and wrap around if it underflows
//         while (dy <= 1) {
//             let adj_row = plot_row.wrapping_add(dx);
//             let adj_col = plot_col.wrapping_add(dy);

//             if (adj_row < 4 && adj_col < 4) {
//                 count = count + unitCounter(&matrix[adj_row][adj_col], community);
//             };

//             dy = dy.wrapping_add(1); // Increment and wrap around if it overflows
//         };
//         dx = dx.wrapping_add(1); // Increment and wrap around if it overflows
//     };
//     count
// }





    public fun calculateCurrentPriceForPlot(
        plot: &Plot,
        completion: bool
    ): u64 {
        if (completion) {
            (plot.standard_price*2)
        } else {
            plot.standard_price
        }
    }

    public fun getCurrentPrice(unit: &Unit): u64 {
        unit.current_price
    }

    public fun changeOwner(unit: &mut Unit, owner: address) {
        unit.ownership = owner;
    }

    public fun cu(_unit: &Unit): u64 {
        // Implement logic to calculate the percentage of units owned by the community
        _unit.current_price
    }

    public fun calculateCurrentPriceForUnit(
        _plot: Plot,
        _unit: &mut Unit,
    ) {
        let totalUnitsOwnedByCommunity: u64 = unitCounter(_plot, _unit.community_name);
        let adjacencyPercentage:u64 = cu(_unit);
        _unit.current_price = _unit.standard_price + (_unit.standard_price * adjacencyPercentage) + (_unit.standard_price * totalUnitsOwnedByCommunity);
    }

    public fun checkMaxUnits(consumer: &Consumer): bool {
        consumer.units_owned >= 10
    }

    public fun checkIfTokens(consumer: &Consumer, tokens_req: u64): bool {
        consumer.tokens >= tokens_req
    }

    // public fun transaction(
    //     request: &Request,
    //     price: u64,
    //     community_name: address
    // ) {
    //     // Buy order logic when comm exists and you're buying their land
    //     // Implement the transaction logic

    // }

    public fun newUnit(request: &mut Request) {
        // Update Request fields and call NewUnit function
        request.price = 10; // buying fresh land
    }

    public fun getUnitFromCoOrdindates(_plot: &mut Plot, x: u64, y: u64): &mut Unit {
        let _unit_index: u64 = x * 5 + y  - 1; // formula to find index
        vector::borrow_mut(&mut _plot.units, _unit_index) // return a mut unit instance from the location index
    }

    public fun updateUnit(_request: &Request, _plot: Plot) {
        let _unit:&mut Unit  = getUnitFromCoOrdindates(&mut _plot, _request.unit_location.x, _request.unit_location.y);
        calculateCurrentPriceForUnit(_plot, _unit);
    }

    // public fun getRespondent(request: &mut Request) {
    //     // Needs to be given from front-end, user clicks to respond to sell order
    // }

    public fun requestCompleted(
        request: &mut Request,
        price: u64,
        plot: Plot
    ) {
        // Implement logic for completing a request
        let tokens_req = price;
        if (request.buy_or_sell) {
            // It's a buy request
            if (checkIfTokens(&request.requested_by, tokens_req)) {
                // Deduct tokens from the buyer
                request.requested_by.tokens = request.requested_by.tokens - tokens_req;
            }
        } else {
            // It's a sell request
            if (checkIfTokens(&request.responded_by, tokens_req)) {
                // Deduct tokens from the seller
                request.responded_by.tokens = request.responded_by.tokens - tokens_req;
            }
        };
        // Change the unit's community name to the new community name from the request
        let _mut_unit_obj: &mut Unit = getUnitFromCoOrdindates(&mut plot, request.unit_location.x, request.unit_location.y);
        _mut_unit_obj.community_name = request.community_name;
        // Call UpdateUnits to update the unit's current price
        updateUnit(request, plot);
    }

    public entry fun transferUnit(_unit: Unit, _recipient: address) {
        transfer::transfer(_unit, _recipient);
    }    

    fun init(ctx: &mut TxContext) {
        
        // Let's initalize the global order book and allow for requests
        let _OrderBook: OrderBook = OrderBook {
            id: new(ctx),
            orders: vector::empty<Request>(),
        };
        // Assign the order book to the admin
        transfer::transfer(_OrderBook, tx_context::sender(ctx));

        // We create a vector of plots and assign it to the user
        let _plots: Plot = initMatrix(ctx);
        // Assign the order book to the admin
        transfer::transfer(_plots, tx_context::sender(ctx));

    }

}


