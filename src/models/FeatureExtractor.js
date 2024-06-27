import * as tf from '@tensorflow/tfjs';

class FeatureExtractor {
    constructor() {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [10] }));
        this.model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
        this.model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
        this.model.add(tf.layers.dense({ units: 10, activation: 'sigmoid' }));
        this.model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
    }

    async extractFeatures(data) {
        const xs = tf.tensor2d(data);
        const features = await this.model.predict(xs).arraySync();
        return features;
    }
}

export default FeatureExtractor;
