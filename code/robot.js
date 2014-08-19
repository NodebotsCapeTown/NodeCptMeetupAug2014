module.exports = function(left_wheel, right_wheel){

    var self = this;
    
    this.forward = function(){
      console.log('Forward');
      left_wheel.ccw();
      right_wheel.cw();
    }

    this.reverse = function(){
      console.log('Backward');
      left_wheel.cw();
      right_wheel.ccw(); 
    }

    this.left = function(){
      console.log('Left');   
      left_wheel.cw();
      right_wheel.cw(); 
    }

    this.right = function(){
      console.log('Right');
      left_wheel.ccw();
      right_wheel.ccw(); 
    }

    this.stop = function(){
      console.log('Stopping');
      left_wheel.stop();
      right_wheel.stop();
    }

    this.move = function(direction, duration){
      var self = this;
      this[direction]();

      setTimeout(function() {
        self.stop();
      }, duration);

    }

  };