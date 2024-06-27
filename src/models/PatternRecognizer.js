import * as tf from '@tensorflow/tfjs';

class PatternRecognizer {
    constructor() {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [10] }));
        this.model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));
        this.model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
    }

    async recognizePatterns(data) {
        console.log("Recognizing patterns...");
        const xs = tf.tensor2d(data);
        const predictions = await this.model.predict(xs).arraySync();
        const clusters = [[], []];
        predictions.forEach((pred, index) => {
            clusters[pred.indexOf(Math.max(...pred))].push(data[index]);
        });
        return clusters;
    }
}

export default PatternRecognizer;
