$(document).ready(function() {

    $('.change-devoured').on('click', function(event) {
        var id = $(this).data('id');
        var newDevoured = $(this).data('newdevoured');
        var newDevouredState = {
            devoured: newDevoured
        };
        $.ajax(`api/burgers/${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then(function() {
            console.log(`Changed devoured to: ${newDevoured}`);
            location.reload();
        });
    });

    $('.add-burger').on('submit', function(event) {
        event.preventDefault();
        var newBurger = {
            name: $('#burger-name').val().trim()
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('Created new burger');
            location.reload();
        });
    });

});