$(document).ready(() => {
    $('#d2questions').on("click", function() {
        $('.d2').toggle();
        return false;
    });
    $('#manquestions').on("click", function() {
        $('.man').toggle();
        return false;
    });
});