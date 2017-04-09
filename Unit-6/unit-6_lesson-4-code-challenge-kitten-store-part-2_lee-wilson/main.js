$(function() {
    //Expand and collapse the search box
    $('.top-bar input').on('focus', function() {
        $(this).addClass('expanded');
    });

    $('.top-bar input').on('blur', function() {
        $(this).removeClass('expanded');
    });
  
$('#thumbnails').find('.column').on('focus', function() {
        $('#mainPreview').attr('src', $(this).find('img').attr('src'));
    });  
  
      //Focus event to toggle tabs
    $('.tabs li a').on('focus', function(e) {
        e.preventDefault();
        // Store the anchor link's corresponding tag
        var linkSrc = $(this).attr('href');

        // First clear out all selected tabs
        $('.tabs li').removeClass('is-active');
        $('.tabs li a').removeAttr('aria-selected');

        // Then select the current clicked element
        $(this).parent().addClass('is-active');
        $(this).attr('aria-selected', 'true');

        // Clear out other content containers is-active class and add the class to the corresponding content container
        $('.tabs-content .tabs-panel').removeClass('is-active');
        $(linkSrc).addClass('is-active');
    });
});