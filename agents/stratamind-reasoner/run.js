const svc = require('./services/geminiService');

(async () => {
  try {
    const res = await svc.executeQuickScan('VS Code run');
    console.log('StrataMind run result:');
    console.log(res);
  } catch (e) {
    console.error('StrataMind run error:', e);
    process.exitCode = 1;
  }
})();
