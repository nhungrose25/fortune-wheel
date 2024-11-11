const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Rotate,
		C3.Plugins.Keyboard,
		C3.Plugins.Arr,
		C3.Plugins.AJAX,
		C3.Plugins.Text,
		C3.Behaviors.Tween,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Behaviors.Rotate.Acts.SetSpeed,
		C3.Plugins.Audio.Acts.Play,
		C3.ScriptsInEvents.Main_Event1_Act4,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.System.Exps.rgbex255,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Text.Acts.SetAngle,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Text.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Behaviors.Rotate.Acts.SetAcceleration,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Exps.float,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetX,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Rotate.Exps.Speed,
		C3.Plugins.Sprite.Cnds.IsBetweenAngles,
		C3.Plugins.Sprite.Cnds.IsOnLayer,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Audio.Acts.SetSilent
	];
};
self.C3_JsPropNameTable = [
	{Rotate: 0},
	{wheel: 0},
	{Keyboard: 0},
	{base: 0},
	{wheel2: 0},
	{light: 0},
	{award: 0},
	{AJAX: 0},
	{awardtext: 0},
	{background: 0},
	{shawdo: 0},
	{moneytext: 0},
	{enable: 0},
	{Tween: 0},
	{spin: 0},
	{sound: 0},
	{home: 0},
	{restart: 0},
	{token: 0},
	{banner: 0},
	{Touch: 0},
	{winfx: 0},
	{spinfx: 0},
	{firefx: 0},
	{black: 0},
	{winfx2: 0},
	{winfx3: 0},
	{textwin: 0},
	{winfx4: 0},
	{Audio: 0},
	{Browser: 0},
	{tutor: 0},
	{Sprite: 0},
	{total: 0},
	{total2: 0},
	{w_acceleration: 0},
	{w_speed: 0},
	{w_navigation: 0},
	{w_angle: 0},
	{theend: 0},
	{stop: 0},
	{turn: 0},
	{get: 0},
	{winJackpot: 0},
	{totalwin: 0},
	{win: 0}
];

self.InstanceType = {
	wheel: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	base: class extends self.ISpriteInstance {},
	wheel2: class extends self.ISpriteInstance {},
	light: class extends self.ISpriteInstance {},
	award: class extends self.IArrayInstance {},
	AJAX: class extends self.IInstance {},
	awardtext: class extends self.ITextInstance {},
	background: class extends self.ISpriteInstance {},
	shawdo: class extends self.ISpriteInstance {},
	moneytext: class extends self.ITextInstance {},
	spin: class extends self.ISpriteInstance {},
	sound: class extends self.ISpriteInstance {},
	home: class extends self.ISpriteInstance {},
	restart: class extends self.ISpriteInstance {},
	token: class extends self.ISpriteInstance {},
	banner: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	winfx: class extends self.ISpriteInstance {},
	spinfx: class extends self.ISpriteInstance {},
	firefx: class extends self.ISpriteInstance {},
	black: class extends self.ISpriteInstance {},
	winfx2: class extends self.ISpriteInstance {},
	winfx3: class extends self.ISpriteInstance {},
	textwin: class extends self.ISpriteInstance {},
	winfx4: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	tutor: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	total: class extends self.ITextInstance {},
	total2: class extends self.ITextInstance {}
}