import * as tf from '@tensorflow/tfjs';

class EthicalDecisionModel {
    constructor() {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [10] }));
        this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
        this.model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });
    }

    async train(data, labels) {
        const xs = tf.tensor2d(data);
        const ys = tf.tensor2d(labels);
        await this.model.fit(xs, ys, { epochs: 10 });
    }

    predict(data) {
        const xs = tf.tensor2d(data);
        return this.model.predict(xs).arraySync();
    }
}

export default EthicalDecisionModel;
