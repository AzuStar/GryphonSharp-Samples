{
    "schema": {
        "schemaType": 1,
        "nodeCount": 4,
        "dataCount": 2,
        "bgSizes": [
            100,
            20
        ],
        "stagePos": [
            782,
            533
        ],
        "bgPos": [
            711,
            482
        ]
    },
    "dataNodes": {
        "0": {
            "type": 1
        },
        "1": {
            "type": 0,
            "value": "Hello World from G#!"
        },
        "2": {
            "type": 1
        },
        "3": {
            "type": 0,
            "value": 2
        },
        "4": {
            "type": 1
        }
    },
    "codeNodes": {
        "0": {
            "type": 0,
            "target": "Main",
            "execution": 1,
            "outputs": [
                0
            ],
            "x": 184.15533980582524,
            "y": -79.79611650485435
        },
        "1": {
            "type": 3,
            "reference": "System.Console",
            "target": "WriteLine",
            "execution": 3,
            "inputs": [
                1
            ],
            "x": 177.25163280874574,
            "y": 140.22128055042037
        },
        "2": {
            "type": 2,
            "dataReference": 1,
            "x": 768.4757281553399,
            "y": 71.07766990291259
        },
        "3": {
            "type": 100,
            "x": 123,
            "y": 357
        },
        "4": {
            "type": 0,
            "target": "MultiplyByTwo",
            "execution": 5,
            "outputs": [
                2
            ]
        },
        "5": {
            "type": 4,
            "target": "*",
            "execution": 6,
            "inputs": [
                2,
                3
            ],
            "outputs": [
                4
            ]
        },
        "6": {
            "type": 100,
            "inputs": [
                4
            ]
        }
    }
}