(function( window, $, undefined ) {
	$.Slideshow = function( options, element ) {
		this.$el = $( element );
		this.$preloader = $('<div class="cn-loading">Loading...</div>');
		// images
		this.$images = this.$el.find('div.cn-images > img').hide();
		// total number of images
		this.imgCount = this.$images.length;
		this.isAnimating = false;
		this._init( options );
	};
	$.Slideshow.defaults = {
		current : 0
    };
	$.Slideshow.prototype = {
		_init : function( options ) {
			this.options = $.extend( true, {}, $.Slideshow.defaults, options );
			// validate options
			this._validate();
			this.current = this.options.current;
			this.$preloader.appendTo( this.$el );
			var instance = this;
			this._preloadImages( function() {
				instance.$preloader.hide();
				instance.$images.eq( instance.current ).show();
				instance._initEvents();
			});
		},
		_preloadImages : function( callback ) {
			//console.log("Slideshow.preloadImage.");
			var loaded = 0, instance = this;
			this.$images.each( function(i) {
				var $img = $(this);
				// large image
				$('<img/>').load( function() {
					++loaded;
					if( loaded === instance.imgCount * 2 ) callback.call();
				}).attr( 'src', $img.attr('src') );
				// thumb
				$('<img/>').load( function() {
					++loaded;
					if( loaded === instance.imgCount * 2 ) callback.call();
				}).attr( 'src', $img.data('thumb') );
			});
		},
		_validate : function() {
			if( this.options.current < 0 || this.options.current >= this.imgCount )
				this.options.current = 0;
		},
		_initEvents : function() {
			this._startLoop(this);
		},
		_startLoop: function(instance) {
			instance._navigate( 'next' );
			setTimeout(function() {
					instance._startLoop(instance)
					}, 5000);
			return false;
		},
		_navigate : function( dir ) {
			if( this.isAnimating ) return false;
			this.isAnimating = true;
			var $curr = this.$images.eq( this.current ).css( 'z-index' , 998 ),
			instance = this;
			( dir === 'prev')
				? ( this.current === 0 ) ? this.current = this.imgCount - 1 : --this.current
				: ( this.current === this.imgCount - 1 ) ? this.current = 0 : ++this.current;
			this.$images.eq( this.current ).show();
			$curr.fadeOut( 400, function() {
				$(this).css( 'z-index' , 1 );
				instance.isAnimating = false;
			});
		}
	};
	var logError = function( message ) {
		if ( this.console ) {
			console.error( message );
		}
	};
	$.fn.slideshow = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'slideshow' );
				if ( !instance ) {
					logError( "cannot call methods on slideshow prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for slideshow instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				var instance = $.data( this, 'slideshow' );
				if ( !instance ) {
					$.data( this, 'slideshow', new $.Slideshow( options, this ) );
				}
			});
		}
		return this;
	};
})( window, jQuery );
