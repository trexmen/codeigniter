var editor; // use a global for the submit and return data rendering in the examples

// $(document).ready(function() {
//     editor = new $.fn.dataTable.Editor( {
//         "ajax": "Ajax/Staff",
//         "table": "#example",
//         "fields": [ {
//                 ""label"": "First name:",
//                 "name": "first_name"
//             }, {
//                 "label": "Last name:",
//                 "name": "last_name"
//             }, {
//                 "label": "Position:",
//                 "name": "position"
//             }, {
//                 "label": "Office:",
//                 "name": "office"
//             }, {
//                 "label": "Extension:",
//                 "name": "extn"
//             }, {
//                 "label": "Start date:",
//                 "name": "start_date",
//                 "type": "datetime"
//             }, {
//                 "label": "Salary:",
//                 "name": "salary"
//             }
//         ]
//     } );

//     $('#example').DataTable( {
//         dom: "Bfrtip",
//         ajax: {
//             url: "Ajax/Staff",
//             type: "POST"
//         },
//         serverSide: true,
//         columns: [
//             { data: "first_name" },
//             { data: "last_name" },
//             { data: "position" },
//             { data: "office" },
//             { data: "start_date" },
//             { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
//         ],
//         select: true,
//         buttons: [
//             { extend: "create", editor: editor },
//             { extend: "edit",   editor: editor },
//             { extend: "remove", editor: editor }
//         ]
//     } );
// } );

$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        "ajax": "Ajax/Staff",
        "table": "#example",
        "fields": [ {
                "label": "First name:",
                "name": "first_name"
            }, {
                "label": "Last name:",
                "name": "last_name"
            }, {
                "label": "Position:",
                "name": "position"
            }, {
                "label": "Office:",
                "name": "office"
            }, {
                "label": "Extension:",
                "name": "extn"
            }, {
                "label": "Start date:",
                "name": "start_date",
                type: "datetime"
            }, {
                "label": "Salary:",
                "name": "salary"
            }
        ]
    } );

    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    } );

    $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "Ajax/Staff",
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data: "first_name" },
            { data: "last_name" },
            { data: "position" },
            { data: "office" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );