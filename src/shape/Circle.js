// Class ----------------------------------------------------------------------

/**
  * Shape describing a Circle
  *
  * @constructor
  * @param {Vector2} position - The center position of the AAAB
  * @param {Vector2} extend - Extends of the AABB around its center position. The full dimensions of the AABB are twice the extends.
  * @param {float} mass - The mass of the AABB. Can be any positive value greater than zero. Zero is special and gives the AABB infinite mass.
  * @augments Body
  *
  * @api public
  */
function Circle(position, radius, mass, inertia) {
    this.radius = radius;
    Body.call(this, Circle, position, mass, inertia);
}

// Statics --------------------------------------------------------------------
Circle.ShapeID = 1;


// Methods --------------------------------------------------------------------
extend(Circle, Body, {

    computeMass: function(density) {

        var m = Math.PI * this.radius * this.radius * density,
            i = m * this.radius * this.radius;

        this.im = m ? 1.0 / m : 0.0;
        this.iI = i ? 1.0 / i : 0.0;

    }

});


// Public Exports -------------------------------------------------------------
Box.Circle = Circle;
