$(document).ready(function() {

    "use strict";

    $('#newItem').on('click', function(callback) {
        var input = $("#listInput").val();
        if (input == "" || null) {} else {
            $('#tasks').append('<li class="list-group-item listItem">' + '<div class="col-xs-10">' + '<p>' + input + '</p>' + '</div>' +
                '<div class="col-xs-1">' + '</div>' + '<div class="btn-group btn-group-sm col-xs-1 deleteButton">' +
                '<p>' + 'X' + '</p>' + '</div>');
            $("#listInput").val("");
        }
        callback(h());
    });

    function h() {
        $('#deleteButton').on('click', function() {
            $(this).closest('.listItem').remove();
            this.remove();
        })
    }

});
