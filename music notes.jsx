var notes = {
    cZero: 16.35,
    cSharpZero: 17.32,
    dZero: 18.35,
    dSharpZero: 19.45,
    eZero: 20.60,
    fZero: 21.83,
    fSharpZero: 23.12,
    gZero: 24.50,
    gSharpZero: 25.96,
    aZero: 27.50,
    aSharpZero: 29.14,
    bZero: 30.87,
    cOne: 32.70,
    cSharpOne: 34.65,
    dOne: 36.71,
    dSharpOne: 38.89,
    eOne: 41.20,
    fOne: 43.65,
    fSharpZero: 46.25,
    gOne: 49.00,
    gSharpOne: 51.91,
    aOne: 55.00,
    aSharpOne: 58.27,
    bOne: 61.74,
    cTwo: 65.41,
    cSharpTwo: 69.30,
    dTwo: 73.42,
    dSharpTwo: 77.78,
    eTwo: 82.41,
    fTwo: 87.31,
    fSharpTwo: 92.50,
    gTwo: 98.00,
    gSharpTwo: 103.83,
    aTwo: 110.00,
    aSharpTwo: 116.54,
    bTwo: 123.47,
    cThree: 130.81,
    cSharpThree: 138.59,
    dThree: 146.83,
    dSharpThree: 155.56,
    eThree: 164.81,
    fThree: 174.61,
    fSharpThree: 185.00,
    gThree: 196.00,
    gSharpThree: 207.65,
    aThree: 220.00,
    aSharpThree: 233.08,
    bThree: 246.94,
    cFour: 261.63,
    cSharpFour: 277.18,
    dFour: 293.66,
    dSharpFour: 311.13,
    eFour: 329.63,
    fFour: 349.23,
    fSharpFour: 369.99,
    gFour: 392.00,
    gSharpFour: 415.30,
    aFour: 440.00,
    aSharpFour: 466.16,
    bFour: 493.88,
    cFive: 523.25,
    cSharpFive: 554.37,
    dFive: 587.33,
    dSharpFive: 622.25,
    eFive: 659.25,
    fFive: 698.46,
    fSharpFive: 739.99,
    gFive: 783.99,
    gSharpFive: 830.61,
    aFive: 880.00,
    aSharpFive: 932.33,
    bFive: 987.77,
    cSix: 1046.50,
    cSharpSix: 1108.73,
    dSix: 1174.66,
    dSharpSix: 1244.51,
    eSix: 1318.51,
    fSix: 1396.91,
    fSharpSix: 1479.98,
    gSix: 1567.98,
    gSharpSix: 1661.22,
    aSix: 1760.00,
    aSharpSix: 1864.66,
    bSix: 1975.53,
    cSeven: 2093.00,
    cSharpSeven: 2217.46,
    dSeven: 2349.32,
    dSharpSeven: 2489.02,
    eSeven: 2637.02,
    fSeven: 2793.83,
    fSharpSeven: 2959.96,
    gSeven: 3135.96,
    gSharpSeven: 3322.44,
    aSeven: 3520.00,
    aSharpSeven: 3729.31,
    bSeven: 3951.07,
    cEight: 4186.01,
    cSharpEight: 4434.92,
    dEight: 4698.63,
    dSharpEight: 4978.03,
    eEight: 5274.04,
    fEight: 5587.65,
    fSharpEight: 5919.91,
    gEight: 6271.93,
    gSharpEight: 6644.88,
    aEight: 7040.00,
    aSharpEight: 7458.62,
    bEight: 7902.13,
    empty: 0
    };
app.beginUndoGroup("Music Gen");
var layerArray = [];
var songComp = app.project.items.addComp("Song TEST", 1920, 1080, 1, 20, 30);
songComp.openInViewer();

var compSeconds = songComp.duration;
var framerate = 1 / songComp.frameDuration; 
var bpm = 128;
var millisecondsPerBeat = 60 / bpm * 1000;
var framesPerBeat = millisecondsPerBeat / framerate;
var secondsPerBeat = millisecondsPerBeat / 1000;

for(var i = 1; i <= 20; i++) {
    layerArray.push(songComp.layers.addSolid([0, 0, 0], i.toString(), 1920, 1080, 1, 1));
    layerArray[i-1].startTime = i-1;
    layerArray[i-1].Effects.addProperty("ADBE Aud Tone");
    changeTone(layerArray[i-1], 1, notes[pickRandomProperty(notes)], 0, 0, 0, 0);
    }

//var toneLayer = app.project.activeItem.selectedLayers[0];
//changeTone(toneLayer);
app.endUndoGroup();

function changeTone(layer, tone, freqOne, freqTwo, freqThree, freqFour, freqFive, level) {
    var toneEffect = layer.effect(1);
    toneEffect.property(1).setValue(tone);
    toneEffect.property(2).setValue(freqOne);
    toneEffect.property(3).setValue(freqTwo);
    toneEffect.property(4).setValue(freqThree);
    toneEffect.property(5).setValue(freqFour);
    toneEffect.property(6).setValue(freqFive);
    toneEffect.property(7).setValue(10);
    }

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}