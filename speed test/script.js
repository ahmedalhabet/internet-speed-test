function startTest() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'جاري القياس...';

    const downloadTest = new Promise((resolve) => {
        const startTime = Date.now();
        fetch('https://example.com/test-file') // رابط ملف وهمي
            .then(() => {
                const duration = (Date.now() - startTime) / 1000;
                const fileSizeInBits = 5 * 1024 * 1024 * 8; // حجم ملف 5 ميجابايت بالبت
                const speedMbps = (fileSizeInBits / duration) / (1024 * 1024);
                resolve(speedMbps.toFixed(2));
            });
    });

    downloadTest.then((speed) => {
        resultDiv.innerHTML = `سرعة التنزيل: ${speed} Mbps`;
    }).catch(() => {
        resultDiv.innerHTML = 'حدث خطأ أثناء القياس.';
    });
}
