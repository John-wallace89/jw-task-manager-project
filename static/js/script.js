$(document).ready(function(){
  // Side nav JQuery
    $('.sidenav').sidenav();
  // Accordion JQuery
    $('.collapsible').collapsible();
  //Tooltip
    $('.tooltipped').tooltip();
  // Selector
    $('select').formSelect();
  //datepicker
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
        done: "Select"
      }
    });
  });

  