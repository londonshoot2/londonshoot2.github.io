var APP_DATA = {
  "scenes": [
    {
      "id": "0-1main-entrance-security--barrier",
      "name": "1.MAIN ENTRANCE SECURITY & BARRIER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0659934046796078,
        "pitch": 0.020027866772689862,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -1.520467160236553,
          "pitch": 0.06561753831184625,
          "rotation": 0,
          "target": "1-2path"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7200606475555915,
          "pitch": -0.04286253599034495,
          "title": "MAIN SECURITY",
          "text": "ASK PERMISSION TO OPEN BARRIER TO ENTER APARTMENT PARKING<div><br></div>"
        }
      ]
    },
    {
      "id": "1-2path",
      "name": "2.PATH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4506632601477953,
        "pitch": -0.08547640052854,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 1.681998045481179,
          "pitch": 0.0861380977647066,
          "rotation": 0,
          "target": "0-1main-entrance-security--barrier"
        },
        {
          "yaw": -1.8892599998345112,
          "pitch": 0.09981136822428383,
          "rotation": 0,
          "target": "2-3path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3path",
      "name": "3.PATH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6710582621176062,
        "pitch": -0.06341611872816166,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 1.0760440848566724,
          "pitch": 0.1382810209797789,
          "rotation": 0,
          "target": "1-2path"
        },
        {
          "yaw": -1.7661222299808834,
          "pitch": 0.025714873826190754,
          "rotation": 0,
          "target": "3-4apartment-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4apartment-parking",
      "name": "4.APARTMENT PARKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.881207280314067,
        "pitch": -0.10215310205024686,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -0.295291307194967,
          "pitch": 0.07209337779372582,
          "rotation": 0,
          "target": "2-3path"
        },
        {
          "yaw": 1.480906624153624,
          "pitch": 0.10782260698752921,
          "rotation": 0,
          "target": "4-5concierge-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8862319640673029,
          "pitch": 0.09685554858647372,
          "title": "APARTMENT",
          "text": "RESIDENTS PARKING SPACE"
        },
        {
          "yaw": 1.5024237573432062,
          "pitch": -0.08572144842395168,
          "title": "APARTMENT CONCIERGE",
          "text": "ENTRANCE"
        }
      ]
    },
    {
      "id": "4-5concierge-entrance",
      "name": "5.CONCIERGE ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8968307233324833,
        "pitch": -0.027310727417299674,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 2.120852726750826,
          "pitch": 0.10566313946409345,
          "rotation": 0,
          "target": "3-4apartment-parking"
        },
        {
          "yaw": -1.239071405345662,
          "pitch": 0.283767102143365,
          "rotation": 0,
          "target": "5-6apartment-entrance--concierge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.44778883387389357,
          "pitch": 0.05083716092504709,
          "title": "CONCIERGE",
          "text": "SECURITY"
        }
      ]
    },
    {
      "id": "5-6apartment-entrance--concierge",
      "name": "6.APARTMENT ENTRANCE & CONCIERGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9787269420799092,
        "pitch": 0.02549001225615477,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -0.15246572363208521,
          "pitch": 0.1748097788682621,
          "rotation": 0,
          "target": "6-7river-side"
        },
        {
          "yaw": -1.742388967780256,
          "pitch": 0.31655141510112905,
          "rotation": 0,
          "target": "7-83rd-floor-corridor"
        },
        {
          "yaw": 2.9673554727378626,
          "pitch": 0.23755808264818512,
          "rotation": 0,
          "target": "4-5concierge-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7334907633361887,
          "pitch": 0.019565049366875087,
          "title": "STAIRS &amp; LIFT",
          "text": "&nbsp;TO 3RD FLOOR"
        },
        {
          "yaw": -2.2768550709635598,
          "pitch": 0.008866453350652392,
          "title": "FOB KEY",
          "text": "USE FOB KEY TO OPEN DOOR"
        }
      ]
    },
    {
      "id": "6-7river-side",
      "name": "7.RIVER SIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.28165444538353057,
        "pitch": 0.09963049006258373,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -2.768618742935356,
          "pitch": 0.11361265994114689,
          "rotation": 0,
          "target": "5-6apartment-entrance--concierge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-83rd-floor-corridor",
      "name": "8.3RD FLOOR CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7077823687784122,
        "pitch": 0.02731072741728191,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 1.6854802914573668,
          "pitch": 0.17713468045078073,
          "rotation": 0,
          "target": "8-9apartment-131-door"
        },
        {
          "yaw": -0.42075464701049015,
          "pitch": 0.41477514533660553,
          "rotation": 0,
          "target": "5-6apartment-entrance--concierge"
        },
        {
          "yaw": 2.164642559803326,
          "pitch": 0.3283700060730652,
          "rotation": 0,
          "target": "5-6apartment-entrance--concierge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4376607956392409,
          "pitch": -0.03395079945167012,
          "title": "LIFT TO ALL FLOORS",
          "text": ""
        },
        {
          "yaw": 2.1607299829356883,
          "pitch": 0.03853674177488742,
          "title": "STAIRS",
          "text": ""
        }
      ]
    },
    {
      "id": "8-9apartment-131-door",
      "name": "9.APARTMENT 131 DOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.018795853483020153,
        "pitch": 0.03277287290076458,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -1.67801411752753,
          "pitch": 0.1475756560389243,
          "rotation": 0,
          "target": "7-83rd-floor-corridor"
        },
        {
          "yaw": -0.021797570730509364,
          "pitch": 0.46836533811908154,
          "rotation": 0,
          "target": "9-10entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10entrance",
      "name": "10.ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.448623279155294,
        "pitch": 0.029131442578451683,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 1.6159236261887893,
          "pitch": 0.5178492118546423,
          "rotation": 0,
          "target": "8-9apartment-131-door"
        },
        {
          "yaw": 0.406589605647822,
          "pitch": 0.35339356574046654,
          "rotation": 0,
          "target": "10-10main-showertoilet"
        },
        {
          "yaw": -1.6536753270017854,
          "pitch": 0.5382207757917126,
          "rotation": 0,
          "target": "11-11entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.856929509358487,
          "pitch": 0.00026879659183620674,
          "title": "STORAGE",
          "text": "BOILER &amp; WASHING MACHINE"
        },
        {
          "yaw": 2.983192024405332,
          "pitch": -0.06565043545376348,
          "title": "STORAGE",
          "text": "ELECTRIC BOARD"
        }
      ]
    },
    {
      "id": "10-10main-showertoilet",
      "name": "10.MAIN SHOWER:TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2953651019033021,
        "pitch": 0.032772872900753924,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -2.9432392033064225,
          "pitch": 0.31510548156842333,
          "rotation": 0,
          "target": "9-10entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-11entrance",
      "name": "11.ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1280089430979565,
        "pitch": 0.054403351286385515,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -0.4218766928237905,
          "pitch": 0.4409571763407101,
          "rotation": 0,
          "target": "15-152nd-bedroom"
        },
        {
          "yaw": 1.2754289453255652,
          "pitch": 0.36996037710202323,
          "rotation": 0,
          "target": "12-12dining-area"
        },
        {
          "yaw": 2.8260035390093323,
          "pitch": 0.2166212520895705,
          "rotation": 0,
          "target": "9-10entrance"
        },
        {
          "yaw": -1.3662755822656933,
          "pitch": 0.38932283446602334,
          "rotation": 0,
          "target": "20-20master-bedroom-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-12dining-area",
      "name": "12.DINING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5759586531581409,
        "pitch": 0.09467718837998795,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -0.16635033233847452,
          "pitch": 0.3544505599937846,
          "rotation": 0,
          "target": "14-14sitting-area"
        },
        {
          "yaw": 1.9793526712204823,
          "pitch": 0.4048960309574774,
          "rotation": 0,
          "target": "13-13kitchen-area"
        },
        {
          "yaw": -1.995857561512537,
          "pitch": 0.4562521853633079,
          "rotation": 0,
          "target": "11-11entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8229278869425096,
          "pitch": -0.12235249684681904,
          "title": "APPLIENCES",
          "text": "COFFEE MAKER &amp; MICROWAVE"
        }
      ]
    },
    {
      "id": "13-13kitchen-area",
      "name": "13.KITCHEN AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9042662127451457,
        "pitch": -0.01674702797065386,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 0.9449192532521966,
          "pitch": 0.4892588542085168,
          "rotation": 0,
          "target": "12-12dining-area"
        },
        {
          "yaw": 1.3606389884906598,
          "pitch": 0.3114589856059453,
          "rotation": 0,
          "target": "14-14sitting-area"
        },
        {
          "yaw": 0.3555765736144316,
          "pitch": 0.39628194358590285,
          "rotation": 0,
          "target": "11-11entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1289868728996204,
          "pitch": 0.023683000780673424,
          "title": "REFRIGERATOR",
          "text": ""
        }
      ]
    },
    {
      "id": "14-14sitting-area",
      "name": "14.SITTING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4119048572003425,
          "pitch": 0.3946080587438132,
          "rotation": 0,
          "target": "14-14sitting-area"
        },
        {
          "yaw": -1.6825183440965716,
          "pitch": 0.18647944738031796,
          "rotation": 0,
          "target": "13-13kitchen-area"
        },
        {
          "yaw": 0.3714877313017304,
          "pitch": 0.45001591086770176,
          "rotation": 0,
          "target": "16-162nd-bedroom"
        },
        {
          "yaw": -0.4468253078236213,
          "pitch": 0.32156264293242387,
          "rotation": 0,
          "target": "15-152nd-bedroom"
        },
        {
          "yaw": 1.3478408611387032,
          "pitch": 0.37922462298014636,
          "rotation": 0,
          "target": "17-17balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-152nd-bedroom",
      "name": "15.2ND BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3853149964018332,
        "pitch": 0.10560147934691422,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 0.19391178729840064,
          "pitch": 0.3923365073125531,
          "rotation": 0,
          "target": "16-162nd-bedroom"
        },
        {
          "yaw": 0.9063335169295694,
          "pitch": 0.3741680808978405,
          "rotation": 0,
          "target": "14-14sitting-area"
        },
        {
          "yaw": -0.12047829089098983,
          "pitch": 0.22654544193672166,
          "rotation": 0,
          "target": "18-18balcony-left"
        },
        {
          "yaw": -2.9532791421271316,
          "pitch": 0.4714949744827912,
          "rotation": 0,
          "target": "11-11entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-162nd-bedroom",
      "name": "16.2ND BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6390361491622851,
        "pitch": 0.08738626010236672,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -0.927135642936852,
          "pitch": 0.4202485368956559,
          "rotation": 0,
          "target": "18-18balcony-left"
        },
        {
          "yaw": 2.074477367330351,
          "pitch": 0.29547192999852534,
          "rotation": 0,
          "target": "12-12dining-area"
        },
        {
          "yaw": 2.9201075876504134,
          "pitch": 0.3156392177598555,
          "rotation": 0,
          "target": "15-152nd-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-17balcony",
      "name": "17.BALCONY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6694699431170843,
        "pitch": 0.17550315942235173,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -0.04517662347333129,
          "pitch": 0.40219084995823273,
          "rotation": 0,
          "target": "14-14sitting-area"
        },
        {
          "yaw": 1.868973007505586,
          "pitch": 0.41786945521585395,
          "rotation": 0,
          "target": "18-18balcony-left"
        },
        {
          "yaw": -1.2904557562682868,
          "pitch": 0.36677697434876677,
          "rotation": 0,
          "target": "19-19balcony-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-18balcony-left",
      "name": "18.BALCONY LEFT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.130436330907111,
        "pitch": 0.05280073967343846,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -1.1939810353794833,
          "pitch": 0.43800587703862526,
          "rotation": 0,
          "target": "17-17balcony"
        },
        {
          "yaw": -1.112461869776233,
          "pitch": 0.24787927240052632,
          "rotation": 0,
          "target": "19-19balcony-right"
        },
        {
          "yaw": -0.2759616142751007,
          "pitch": 0.40821255784651456,
          "rotation": 0,
          "target": "16-162nd-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-19balcony-right",
      "name": "19.BALCONY RIGHT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0897195587392368,
        "pitch": 0.04032899638969312,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 2.2536479437897814,
          "pitch": 0.46855060811940774,
          "rotation": 0,
          "target": "17-17balcony"
        },
        {
          "yaw": 2.2968968404830328,
          "pitch": 0.22172529792154982,
          "rotation": 0,
          "target": "18-18balcony-left"
        },
        {
          "yaw": 1.1896368964486612,
          "pitch": 0.3608790501341499,
          "rotation": 0,
          "target": "14-14sitting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-20master-bedroom-left",
      "name": "20.MASTER BEDROOM LEFT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3998686679879135,
        "pitch": 0.06378828088307742,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -1.7142639907415216,
          "pitch": 0.2976287386907366,
          "rotation": 0,
          "target": "21-21master-bedroom-right"
        },
        {
          "yaw": 1.766962982305917,
          "pitch": 0.3137003086070749,
          "rotation": 0,
          "target": "22-22ensuite-bathroomtoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-21master-bedroom-right",
      "name": "21.MASTER BEDROOM RIGHT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3567255362447384,
        "pitch": 0.014981686042954578,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": 2.896380188085221,
          "pitch": 0.36160430975845514,
          "rotation": 0,
          "target": "20-20master-bedroom-left"
        },
        {
          "yaw": 3.031971415091374,
          "pitch": 0.17479149094105395,
          "rotation": 0,
          "target": "22-22ensuite-bathroomtoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-22ensuite-bathroomtoilet",
      "name": "22.ENSUITE BATHROOM:TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5360235633795192,
        "pitch": 0.36381179254970064,
        "fov": 1.4438271227947086
      },
      "linkHotspots": [
        {
          "yaw": -1.395764330748566,
          "pitch": 0.4421586652314957,
          "rotation": 0,
          "target": "20-20master-bedroom-left"
        },
        {
          "yaw": -0.9223701820755323,
          "pitch": 0.2759434436128121,
          "rotation": 0,
          "target": "0-1main-entrance-security--barrier"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
