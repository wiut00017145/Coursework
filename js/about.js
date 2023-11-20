document.addEventListener("DOMContentLoaded", function() {
    var WhereToBuydata = [
        { Shop: "Farhod Bozori", 
            Age: "Chilonzor tumani 10-kvartal, 4-uy. Mo'ljal: \"Oxu\" restorani",
            Area : "Chilanzar",
            Region: "Tashkent",
            Phone_number :"+998 (97) 778 99 66"
         },
         { shop: "Sergeli", 
            age: "Sergeli mashina bozor, dokon 1/3/12",
            area : "Sergili",
            region: "Tashkent",
            phone_number :"+998 (99) 084 05 05"
         },
         { shop: "Sergeli", 
            age: "Sergeli mashina bozor, dokon 3/3/1",
            area : "Sergili",
            region: "Tashkent",
            phone_number :"+998 (99) 865 66 66"
         },
    ];
    var WhereToBuy = document.getElementById("table-container");
    var table = document.createElement("table");

    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    Object.keys(WhereToBuydata[0]).forEach(function(key) {
        var th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    var tableBody = document.createElement("tbody");
    WhereToBuydata.forEach(function(rowData) {
        var row = document.createElement("tr");
        Object.values(rowData).forEach(function(value) {
            var td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    WhereToBuy.appendChild(table);
});
