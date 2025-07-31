(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[872,746,836,349],[991,395,1042,349],[0,0,989,457],[0,1691,891,291],[0,459,870,382],[0,843,838,332],[514,1177,881,281],[893,1460,762,320],[991,0,937,393],[0,1177,512,512]]},
		{name:"index_atlas_2", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_3", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_4", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_5", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_6", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_7", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_8", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_9", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_10", frames: [[0,322,847,266],[0,590,536,123],[0,0,762,320]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Comp1_00000 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Comp2_00000 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Comp3_00000 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Comp4_00000 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Comp5_00000 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Comp6_00000 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.DesignSumberinformasi = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.home_5542748 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.PScoverVideo2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.my_youtube = function(options) {
	this.initialize();
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.TI_BTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AzcIiIAAxDMAm5AAAIAARDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("A13JmIAAzLMArvAAAIAATLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AuPGQIAAsfIcfAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-61.4,280,122.8);


(lib.TekIn_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-129.95,-41.95,0.2862,0.2862);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-124.45,-54.55,0.2862,0.2862);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(-149,-49.85,0.2862,0.2862);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(-136.8,-72.65,0.2862,0.2862);

	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(-124.95,-38.4,0.2862,0.2862);

	this.instance_5 = new lib.CachedBmp_11();
	this.instance_5.setTransform(-119.65,-49.95,0.2862,0.2862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-72.6,298.2,130.8);


(lib.sk_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-127.05,-40.2,0.2862,0.2862);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-119.9,-47.9,0.2862,0.2862);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-83.4,-17.65,0.2862,0.2862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0000FF","#070080"],[0,1],-124.5,0,124.5,0).s().p("AzcIiIAAxDMAm5AAAIAARDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("A13JmIAAzLMArvAAAIAATLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("AuPGQIAAsfIcfAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-61.3,280,122.69999999999999);


(lib.next_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADiAAInDEFIAAoJg");
	this.shape.setTransform(0.0216,0.0318,0.4883,1.0004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjhkEIHDEEInDEFg");
	this.shape_1.setTransform(0.0216,0.0318,0.4883,1.0004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-27.1,24.1,54.3);


(lib.Home_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.home_5542748();
	this.instance.setTransform(-76,-76,0.2969,0.2969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3515,scaleY:0.3515,x:-90,y:-90},0).wait(1).to({scaleX:0.1953,scaleY:0.1953,x:-50,y:-50},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.back_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADiAAInDEFIAAoJg");
	this.shape.setTransform(0.0284,0.0318,0.4883,1.0004,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjhkEIHDEEInDEFg");
	this.shape_1.setTransform(0.0284,0.0318,0.4883,1.0004,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-27.1,24.1,54.3);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.m5_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			exportRoot.gotoAndStop("Beranda");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.backm4_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			exportRoot.gotoAndStop("M4");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.backm4_button = new lib.back_btn();
	this.backm4_button.name = "backm4_button";
	this.backm4_button.setTransform(-344.15,-930.75,2.3492,2.3483);
	new cjs.ButtonHelper(this.backm4_button, 0, 1, 1);

	this.m5_kembali_btn = new lib.Home_btn();
	this.m5_kembali_btn.name = "m5_kembali_btn";
	this.m5_kembali_btn.setTransform(420.45,306.55,1,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.m5_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m5_kembali_btn},{t:this.backm4_button}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-371,-993,881.4,1389.6), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.m4_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			exportRoot.gotoAndStop("Beranda");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.nextm5_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			exportRoot.gotoAndStop("M5");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.backm3_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			exportRoot.gotoAndStop("M3");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.backm3_button = new lib.back_btn();
	this.backm3_button.name = "backm3_button";
	this.backm3_button.setTransform(-343.85,-930.1,2.3492,2.3483);
	new cjs.ButtonHelper(this.backm3_button, 0, 1, 1);

	this.nextm5_button = new lib.next_btn();
	this.nextm5_button.name = "nextm5_button";
	this.nextm5_button.setTransform(394.4,-930.55,2.3492,2.3483);
	new cjs.ButtonHelper(this.nextm5_button, 0, 1, 1);

	this.m4_kembali_btn = new lib.Home_btn();
	this.m4_kembali_btn.name = "m4_kembali_btn";
	this.m4_kembali_btn.setTransform(420.55,306.8,1,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.m4_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m4_kembali_btn},{t:this.nextm5_button},{t:this.backm3_button}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-370.7,-992.8,881.2,1389.6), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.m3_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			exportRoot.gotoAndStop("Beranda");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.nextm4_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			exportRoot.gotoAndStop("M4");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.backm2_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			exportRoot.gotoAndStop("M2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.backm2_button = new lib.back_btn();
	this.backm2_button.name = "backm2_button";
	this.backm2_button.setTransform(-339.1,-929.95,2.3493,2.3483);
	new cjs.ButtonHelper(this.backm2_button, 0, 1, 1);

	this.nextm4_button = new lib.next_btn();
	this.nextm4_button.name = "nextm4_button";
	this.nextm4_button.setTransform(399.55,-929.95,2.347,2.3483);
	new cjs.ButtonHelper(this.nextm4_button, 0, 1, 1);

	this.m3_kembali_btn = new lib.Home_btn();
	this.m3_kembali_btn.name = "m3_kembali_btn";
	this.m3_kembali_btn.setTransform(425.95,307.3,1,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.m3_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m3_kembali_btn},{t:this.nextm4_button},{t:this.backm2_button}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-366,-992.2,881.9,1389.5), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.m2_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			exportRoot.gotoAndStop("Beranda");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.nextm3_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			exportRoot.gotoAndStop("M3");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.backm1_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			exportRoot.gotoAndStop("SK");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.backm1_button = new lib.back_btn();
	this.backm1_button.name = "backm1_button";
	this.backm1_button.setTransform(-337.95,-935.1,2.3492,2.3483);
	new cjs.ButtonHelper(this.backm1_button, 0, 1, 1);

	this.nextm3_button = new lib.next_btn();
	this.nextm3_button.name = "nextm3_button";
	this.nextm3_button.setTransform(396.6,-935.1,2.3492,2.3483);
	new cjs.ButtonHelper(this.nextm3_button, 0, 1, 1);

	this.m2_kembali_btn = new lib.Home_btn();
	this.m2_kembali_btn.name = "m2_kembali_btn";
	this.m2_kembali_btn.setTransform(424.6,302.2);
	new cjs.ButtonHelper(this.m2_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m2_kembali_btn},{t:this.nextm3_button},{t:this.backm1_button}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-364.8,-997.4,879.4000000000001,1389.6), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.m1_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			exportRoot.gotoAndStop("Beranda");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.back_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			exportRoot.gotoAndStop("SI");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.next_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			exportRoot.gotoAndStop("M2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.back_btn = new lib.back_btn();
	this.back_btn.name = "back_btn";
	this.back_btn.setTransform(-341.15,-927.35,2.347,2.3483);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 1);

	this.next_btn = new lib.next_btn();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(397,-929.95,2.3508,2.2784,0,0,0,0,-0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 1);

	this.m1_kembali_btn = new lib.Home_btn();
	this.m1_kembali_btn.name = "m1_kembali_btn";
	this.m1_kembali_btn.setTransform(422.5,307.05);
	new cjs.ButtonHelper(this.m1_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1_kembali_btn},{t:this.next_btn},{t:this.back_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-368,-990.1,880.5,1387.2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.sk_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			exportRoot.gotoAndStop("Beranda");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.next_button.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			exportRoot.gotoAndStop("M2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.next_button = new lib.next_btn();
	this.next_button.name = "next_button";
	this.next_button.setTransform(-30.15,-936.9,2.3487,2.3487);
	new cjs.ButtonHelper(this.next_button, 0, 1, 1);

	this.sk_kembali_btn = new lib.Home_btn();
	this.sk_kembali_btn.name = "sk_kembali_btn";
	this.sk_kembali_btn.setTransform(-3.5,300.3);
	new cjs.ButtonHelper(this.sk_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sk_kembali_btn},{t:this.next_button}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-93.5,-999.2,180,1389.5), null);


(lib.SI_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-106.95,-45.35,0.2862,0.2862);

	this.instance_1 = new lib.TI_BTN();
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-142,-63,284,127);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(-131.9,-55.8,0.2862,0.2862);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(-106.95,-45.35,0.2862,0.2862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regY:0,scaleX:1,scaleY:1,y:0}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regY:-0.1,scaleX:1.0924,scaleY:1.092,y:-0.3}},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{regY:-0.2,scaleX:0.9518,scaleY:0.9515,y:-0.2}},{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,0,102,255,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-142, y:-63, w:284, h:127});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-142, y:-63, w:284, h:127});
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-142, y:-63, w:284, h:127});
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:3, x:-142, y:-63, w:284, h:127});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.9,-67.2,305.9,134.10000000000002);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.sk_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			exportRoot.gotoAndStop("SK");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.ti_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			exportRoot.gotoAndStop("TI");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.si_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			exportRoot.gotoAndStop("SUMBER");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ti_btn = new lib.TekIn_btn();
	this.ti_btn.name = "ti_btn";
	this.ti_btn.setTransform(4.4,0,1.7472,1.7472);
	new cjs.ButtonHelper(this.ti_btn, 0, 1, 2);

	this.si_btn = new lib.SI_btn();
	this.si_btn.name = "si_btn";
	this.si_btn.setTransform(4.4,244.6,1.7472,1.7472);
	new cjs.ButtonHelper(this.si_btn, 0, 1, 2);

	this.sk_btn = new lib.sk_btn();
	this.sk_btn.name = "sk_btn";
	this.sk_btn.setTransform(4.4,-244.6,1.7472,1.7472);
	new cjs.ButtonHelper(this.sk_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sk_btn},{t:this.si_btn},{t:this.ti_btn}]}).wait(1));
	this.si_btn.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-262.8,-351.8,534.4000000000001,713.2), null);


// stage content:
(lib.webaneurismaanimate619 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Beranda:0,SK:29,TI:89,M1:200,M2:219,M3:239,M4:259,M5:279,SUMBER:289};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,29,89,219,239,259,279,289];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // Stop on the first frame
	}
	this.frame_29 = function() {
		/* sk_kembali_btn.addEventListener(MouseEvent.CLICK, sk_beranda);
		function sk_beranda(evt: MouseEvent): void {  
			gotoAndStop("Beranda");
		}
		
		next_button.addEventListener(MouseEvent.CLICK, sk_m2);
		function sk_m2(evt: MouseEvent): void {  
			gotoAndStop("M2");
		}*/
	}
	this.frame_89 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.ti_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop("Beranda");
		}
		/* 
		ti_kembali_btn.addEventListener(MouseEvent.CLICK, ti_beranda);
		function ti_beranda(evt:MouseEvent):void {
		  gotoAndStop("Beranda");
		}*/
	}
	this.frame_219 = function() {
		/* m2_kembali_btn.addEventListener(MouseEvent.CLICK, m2_beranda);
		function m2_beranda(evt: MouseEvent): void {  
			gotoAndStop("Beranda");
		}
		
		backm1_button.addEventListener(MouseEvent.CLICK, m2_sk);
		function m2_sk(evt: MouseEvent): void {  
			gotoAndStop("SK");
		}
		
		nextm3_button.addEventListener(MouseEvent.CLICK, m2_m3);
		function m2_m3(evt: MouseEvent): void {  
			gotoAndStop("M3");
		}*/
	}
	this.frame_239 = function() {
		/* m3_kembali_btn.addEventListener(MouseEvent.CLICK, m3_beranda);
		function m3_beranda(evt: MouseEvent): void {  
			gotoAndStop("Beranda");
		}
		
		backm2_button.addEventListener(MouseEvent.CLICK, m3_m2);
		function m3_m2(evt: MouseEvent): void {  
			gotoAndStop("M2");
		}
		
		nextm4_button.addEventListener(MouseEvent.CLICK, m3_m4);
		function m3_m4(evt: MouseEvent): void {  
			gotoAndStop("M4");
		}*/
	}
	this.frame_259 = function() {
		/* m4_kembali_btn.addEventListener(MouseEvent.CLICK, m4_beranda);
		function m4_beranda(evt: MouseEvent): void {  
			gotoAndStop("Beranda");
		}
		
		backm3_button.addEventListener(MouseEvent.CLICK, m4_m3);
		function m4_m3(evt: MouseEvent): void {  
			gotoAndStop("M3");
		}
		
		nextm5_button.addEventListener(MouseEvent.CLICK, m4_m5);
		function m4_m5(evt: MouseEvent): void {  
			gotoAndStop("M5");
		}*/
	}
	this.frame_279 = function() {
		/* m5_kembali_btn.addEventListener(MouseEvent.CLICK, m5_beranda);
		function m5_beranda(evt: MouseEvent): void {  
			gotoAndStop("Beranda");
		}
		
		backm4_button.addEventListener(MouseEvent.CLICK, m5_m4);
		function m5_m4(evt: MouseEvent): void {  
			gotoAndStop("M4");
		}
		
		*/
	}
	this.frame_289 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.SI_kembali_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(60).call(this.frame_89).wait(130).call(this.frame_219).wait(20).call(this.frame_239).wait(20).call(this.frame_259).wait(20).call(this.frame_279).wait(10).call(this.frame_289).wait(11));

	// Button
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(611.95,1074.75,1,1,0,0,0,4.4,4.8);

	this.movieClip_1_1 = new lib.Symbol2();
	this.movieClip_1_1.name = "movieClip_1_1";
	this.movieClip_1_1.setTransform(965,1276.7,1,1,0,0,0,-5,7);

	this.ti_kembali_btn = new lib.Home_btn();
	this.ti_kembali_btn.name = "ti_kembali_btn";
	this.ti_kembali_btn.setTransform(990,1570);
	new cjs.ButtonHelper(this.ti_kembali_btn, 0, 1, 2);

	this.movieClip_2 = new lib.Symbol3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(549.25,1268.75,1,1,0,0,0,5.7,5.8);

	this.movieClip_3 = new lib.Symbol4();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(545.7,1274,1,1,0,0,0,4.2,5.8);

	this.movieClip_4 = new lib.Symbol5();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(546.8,1268.5,1,1,0,0,0,5.8,5.8);

	this.movieClip_5 = new lib.Symbol6();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.setTransform(551.75,1269,1,1,0,0,0,5.8,5.8);

	this.movieClip_6 = new lib.Symbol7();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(551.75,1269.25,1,1,0,0,0,5.8,5.8);

	this.SI_kembali_btn = new lib.Home_btn();
	this.SI_kembali_btn.name = "SI_kembali_btn";
	this.SI_kembali_btn.setTransform(999.95,1761,0.8289,0.8289);
	new cjs.ButtonHelper(this.SI_kembali_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.movieClip_1_1}]},29).to({state:[{t:this.ti_kembali_btn}]},60).to({state:[{t:this.movieClip_2}]},111).to({state:[{t:this.movieClip_3}]},19).to({state:[{t:this.movieClip_4}]},20).to({state:[{t:this.movieClip_5}]},20).to({state:[{t:this.movieClip_6}]},20).to({state:[{t:this.SI_kembali_btn,p:{scaleX:0.8289,scaleY:0.8289,x:999.95,y:1761}}]},10).to({state:[{t:this.SI_kembali_btn,p:{scaleX:1,scaleY:1,x:966.4,y:256.6}}]},1).wait(10));

	// object
	this.YTB = new lib.my_youtube({'id': 'YTB', 'src':'https://www.youtube.com/embed/wHv7D_PwIk8?si=SArSAeRC-w0yruYR', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.YTB.name = "YTB";
	this.YTB.setTransform(552.25,750.5,7.6464,4.2532,0,0,0,51.6,53.1);
	this.YTB._off = true;

	this.timeline.addTween(cjs.Tween.get(this.YTB).wait(89).to({_off:false},0).to({_off:true},111).wait(100));

	// Latar_belakang
	this.instance = new lib.Comp1_00000();
	this.instance.setTransform(3,6,0.9973,0.9973);

	this.instance_1 = new lib.Comp2_00000();

	this.instance_2 = new lib.PScoverVideo2();

	this.instance_3 = new lib.Comp3_00000();

	this.instance_4 = new lib.Comp4_00000();

	this.instance_5 = new lib.Comp5_00000();

	this.instance_6 = new lib.Comp6_00000();

	this.instance_7 = new lib.DesignSumberinformasi();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},60).to({state:[{t:this.instance_3}]},111).to({state:[{t:this.instance_4},{t:this.instance_3}]},19).to({state:[{t:this.instance_5},{t:this.instance_4}]},20).to({state:[{t:this.instance_6},{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_7}]},10).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,540.2,960.9000000000001);
// library properties:
lib.properties = {
	id: '0D41FCF923110B4EB3BEC7D382C28BD4',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png", id:"index_atlas_6"},
		{src:"images/index_atlas_7.png", id:"index_atlas_7"},
		{src:"images/index_atlas_8.png", id:"index_atlas_8"},
		{src:"images/index_atlas_9.png", id:"index_atlas_9"},
		{src:"images/index_atlas_10.png", id:"index_atlas_10"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/mycomponents/src/myyoutube.js", id:"my.youtube"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0D41FCF923110B4EB3BEC7D382C28BD4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;