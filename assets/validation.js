Validator = {
    constructor: function(form, config) {
      this._elForm = form;
      this._els = config.fields || {};
    },
    
    validate: function(e) {
        var err = 0;
        var elFields = this._els;
      
        for ( var field in elFields ) {
          
            var el = $(field),
                elVal = el.val();
          
          
            if ( elFields[field].require || elVal === '' || elVal.length > elFields[field].maxlength || elVal.length < elFields[field].minlength ) {
                el.addClass('inputInvalid');
                err += 1;
            }
        }
        if (err == 0) {
          return true;
        }
        return false;
    }
}

