{
    "schema": {
        "schemaType": 1
    },
    "dataNodes": {
        "0": {
            "type": 1
        },
        "1": {
            "type": 0,
            "value": "This is true!"
        },
        "2": {
            "type": 0,
            "value": "This is false!"
        },
        "3": {
            "type": 0,
            "value": true
        }
    },
    "codeNodes": {
        "0": {
            "type": 0,
            "target": "Main",
            "execution": 4,
            "outputs": [
                0
            ]
        },
        "1": {
            "type": 3,
            "reference": "System.Console",
            "target": "WriteLine",
            "execution": 3,
            "inputs": [
                1
            ]
        },
        "2": {
            "type": 2,
            "dataReference": 1
        },
        "3": {
            "type": 100
        },
        "4": {
            "type": 6,
            "execution": 3,
            "inputs": [
                3
            ],
            "outputs": [
                1,
                6
            ]
        },
        "5": {
            "type": 2,
            "dataReference": 3
        },
        "6": {
            "type": 3,
            "reference": "System.Console",
            "target": "WriteLine",
            "execution": 3,
            "inputs": [
                2
            ]
        },
        "7": {
            "type": 2,
            "dataReference": 2
        }
    }
}