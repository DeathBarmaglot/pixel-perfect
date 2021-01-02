/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'w',
                type: 'image',
                rect: ['0px', '-6px','120px','678px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"w.jpg",'0px','0px']
            },
            {
                id: '__mt',
                type: 'image',
                rect: ['-138px', '-1289px','640px','2828px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"__mt.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'b2',
                type: 'image',
                rect: ['-22px', '-678px','410px','2340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'b1',
                type: 'image',
                rect: ['40px', '-688px','410px','2340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-336px', '-1875px','790px','4200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-355px', '166px','830px','650px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'log2',
                type: 'image',
                rect: ['7px', '76px','105px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px']
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-140px', '-244px','640px','640px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'ma',
                type: 'image',
                rect: ['111px', '534px','325px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ma.png",'0px','0px']
            },
            {
                id: 'wh',
                type: 'image',
                rect: ['-84px', '630px','30px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wh.png",'0px','0px']
            },
            {
                id: 'whCopy',
                type: 'image',
                rect: ['130px', '630px','30px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wh.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_whCopy}": [
                ["style", "top", '630px'],
                ["style", "left", '129px'],
                ["transform", "rotateZ", '360deg']
            ],
            "${_b2}": [
                ["style", "left", '-339px'],
                ["style", "top", '-678px']
            ],
            "${_wh}": [
                ["style", "top", '630px'],
                ["style", "left", '153px'],
                ["transform", "rotateZ", '360deg']
            ],
            "${_log2}": [
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '105px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '8px'],
                ["style", "width", '105px']
            ],
            "${_a1}": [
                ["style", "top", '-1875px'],
                ["style", "opacity", '0'],
                ["style", "left", '-336px']
            ],
            "${_b1}": [
                ["style", "left", '-277px'],
                ["style", "top", '-688px']
            ],
            "${_w}": [
                ["style", "top", '-6px'],
                ["style", "height", '678px'],
                ["style", "left", '0px']
            ],
            "${_ma}": [
                ["style", "top", '534px'],
                ["style", "height", '150px'],
                ["style", "left", '111px'],
                ["style", "width", '325px']
            ],
            "${_a2}": [
                ["style", "top", '166px'],
                ["style", "opacity", '0'],
                ["style", "left", '-355px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_l}": [
                ["style", "left", '-138px'],
                ["style", "top", '-186px']
            ],
            "${___mt}": [
                ["style", "top", '-1227px'],
                ["style", "height", '2828px'],
                ["style", "opacity", '1'],
                ["style", "left", '-137px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "transform", "${_log2}", "scaleY", '0.8', { fromValue: '0'}], position: 9476, duration: 762 },
                { id: "eid58", tween: [ "transform", "${_log2}", "scaleY", '0', { fromValue: '0.8'}], position: 13000, duration: 1360 },
                { id: "eid21", tween: [ "style", "${___mt}", "left", '-258px', { fromValue: '-137px'}], position: 8476, duration: 1762 },
                { id: "eid69", tween: [ "style", "${___mt}", "left", '-378px', { fromValue: '-258px'}], position: 13640, duration: 1360 },
                { id: "eid66", tween: [ "style", "${_log2}", "left", '7px', { fromValue: '8px'}], position: 13000, duration: 1360 },
                { id: "eid85", tween: [ "transform", "${_whCopy}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 2403, duration: 1135 },
                { id: "eid83", tween: [ "transform", "${_whCopy}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 12718, duration: 1282 },
                { id: "eid68", tween: [ "style", "${_log2}", "top", '76px', { fromValue: '72px'}], position: 13000, duration: 1360 },
                { id: "eid88", tween: [ "style", "${_whCopy}", "left", '-35px', { fromValue: '129px'}], position: 2345, duration: 668 },
                { id: "eid82", tween: [ "style", "${_whCopy}", "left", '-270px', { fromValue: '130px'}], position: 12718, duration: 1282 },
                { id: "eid87", tween: [ "transform", "${_wh}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 3013, duration: 987 },
                { id: "eid72", tween: [ "transform", "${_wh}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 13179, duration: 821 },
                { id: "eid86", tween: [ "style", "${_wh}", "left", '-84px', { fromValue: '153px'}], position: 3013, duration: 987 },
                { id: "eid74", tween: [ "style", "${_wh}", "left", '-84px', { fromValue: '172px'}], position: 13179, duration: 821 },
                { id: "eid34", tween: [ "style", "${_ma}", "left", '-325px', { fromValue: '111px'}], position: 2167, duration: 1833 },
                { id: "eid46", tween: [ "style", "${_ma}", "left", '-325px', { fromValue: '150px'}], position: 12476, duration: 1524 },
                { id: "eid20", tween: [ "style", "${___mt}", "top", '-1237px', { fromValue: '-1227px'}], position: 8476, duration: 1762 },
                { id: "eid15", tween: [ "style", "${_a1}", "left", '-450px', { fromValue: '-336px'}], position: 8476, duration: 1762 },
                { id: "eid16", tween: [ "style", "${_b2}", "left", '-119px', { fromValue: '-339px'}], position: 8476, duration: 1762 },
                { id: "eid53", tween: [ "style", "${_b2}", "left", '-263px', { fromValue: '-119px'}], position: 13000, duration: 1000 },
                { id: "eid42", tween: [ "transform", "${_log2}", "scaleX", '0.8', { fromValue: '0'}], position: 9476, duration: 762 },
                { id: "eid57", tween: [ "transform", "${_log2}", "scaleX", '0', { fromValue: '0.8'}], position: 13000, duration: 1360 },
                { id: "eid2", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1167 },
                { id: "eid13", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 881 },
                { id: "eid6", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1167 },
                { id: "eid64", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 8476, duration: 762, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${_b1}", "left", '-172px', { fromValue: '-277px'}], position: 8476, duration: 1762 },
                { id: "eid51", tween: [ "style", "${_b1}", "left", '-316px', { fromValue: '-172px'}], position: 13000, duration: 1000 },
                { id: "eid63", tween: [ "style", "${___mt}", "opacity", '0', { fromValue: '1'}], position: 13640, duration: 1360 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8716862");
