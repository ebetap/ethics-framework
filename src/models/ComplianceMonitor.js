class ComplianceMonitor {
    constructor(rules) {
        this.rules = rules;
    }

    checkCompliance(data) {
        console.log("Checking compliance...");
        return this.rules.every(rule => rule.check(data));
    }
}

export default ComplianceMonitor;
