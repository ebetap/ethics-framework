import EthicsFramework from '../src/EthicsFramework.js';

const framework = new EthicsFramework();

const trainingData = [
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
];
const trainingLabels = [[1], [0]];

(async () => {
    await framework.trainEthicalDecisionModel(trainingData, trainingLabels);

    const testData = [
        [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 0.1],
        [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 1.0]
    ];
    const predictions = framework.predictWithEthicalModel(testData);
    console.log("Predictions:", predictions);

    const biases = framework.checkForBias(testData
