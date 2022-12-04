$(document).ready(function() {
    $('#eye').click(function() {
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        $(this).toggleClass('open');
        if($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        }
        else {
            $(this).prev().attr('type', 'password');
        }
    });
});