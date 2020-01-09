function getIspin(sipnId){
    var spinner = new ISpin(document.getElementById(sipnId), {
      // options with defaults
      wrapperClass: 'ispin-wrapper',
      buttonsClass: 'ispin-button',
      step: 1,
      pageStep: 10,
      disabled: false,
      repeatInterval: 200,
      wrapOverflow: false,
      parse: Number,
      format: String,
      min:0
})};

document.addEventListener("DOMContentLoaded", function () {    
    // getIspin('number-input');
    // getIspin("second-input");
    // getIspin("compare-input");
  });

  