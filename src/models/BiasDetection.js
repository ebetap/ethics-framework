class BiasDetection {
    detectBias(data) {
        console.log("Detecting bias...");
        return data.filter(item => item.includes("bias"));
    }

    mitigateBias(data) {
        console.log("Mitigating bias...");
        return data.map(item => item.replace("bias", "mitigated"));
    }
}

export default BiasDetection;
