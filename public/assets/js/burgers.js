$(document).ready(function() {

    $('.change-devoured').on('click', function(event) {
        var id = $(this).data('id');
        $.ajax(`api/burgers/${id}`, {
            type: 'PUT',
        }).then(function() {
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