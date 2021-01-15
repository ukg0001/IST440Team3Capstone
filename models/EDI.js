const mongoose = require('mongoose');
const ediSchema = new mongoose.Schema({
        transactionHeader: {
        ST01: Number, // Transaction type (850 = Purchase Order)
        ST02: Number // Transaction Control Number
        },
        beginningSegment: {
        BEG01: Number, // New purchase order
        BEG02: String, // Order type (SA = Stand Alone Order)
        BEG03: String, // Purchase Order (PO) Number
        BEG05: Date // PO Date YYYYMMDD
        },
        referenceIdentification: {
        REF01: String, // Qualifier Vendor ID #
        REF02: Number // Element ID Number
        },
        dateTimeQualifier: {
        DTM01: Number, // //Qualifier Delivery Requested (106 = “Required By” | (063 = “Do Not Deliver After”))
        DTM02: Date // Received Date
        },
        vendorInformation: {
        N101: String, // Entity identifier code (BT = Bill To | BY = Buying Group | ST = Ship To)
        N102: String, // Party name
        N103: Number, // Assigned by seller number
        N104: String // Vendor customer number
        },
        addressInformation: {
        N301: String, // Address information
        N401: String, // City
        N402: String, // State
        N403: Number // Zip
        },
        lineItems: [  // Item being added to the Purchase Order
            {
                PO101: Number, // Line item number
                PO102: Number, // Item quantity
                PO103: String, // Unit of Measure (USD = US Dollars)
                PO104: Number, // Item price
                PO106: String, // Item number qualifier (BC = Buyers catalog | IN = Item Number)
                PO107: Number, // Item code
                PO108: String, // Item code qualifier (BC = Buyers catalog)
                PO109: Number, // Catalog Number
                PO10: String, // Serial number qualifier
                PO11: Number, // Serial Number
                PID01: String, // Qualifier free (F = Free form)
                PID05: String // Product description
            }
        ],
        transactionTotal: {
        CTT01: Number, // Total line items
        CTT02: Number // Total units purchased
        },
        transactionSetTrailer: {
        SE01: Number, // Total segments between ST and SE (Transaction header and Transaction trailer)
        SE02: Number // Transaction Control Number
        }
})
const EDI = mongoose.model('EDI', ediSchema);
module.exports = EDI;