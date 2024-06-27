import * as tf from '@tensorflow/tfjs';

class AnomalyDetector {
    constructor() {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [10] }));
        this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
        this.model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });
    }

    async detect(data) {
        console.log("Detecting anomalies...");
        const xs = tf.tensor2d(data);
        const predictions = await this.model.predict(xs).arraySync();
        return data.filter((item, index) => predictions[index][0] > 0.5);  // Example threshold for anomaly
    }
}

export default AnomalyDetector;
