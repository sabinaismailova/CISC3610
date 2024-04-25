const canvas = document.getElementById('bezierCanvas');
        const ctx = canvas.getContext('2d');
        const controlX1 = document.getElementById('controlX1');
        const controlY1 = document.getElementById('controlY1');
        const controlX2 = document.getElementById('controlX2');
        const controlY2 = document.getElementById('controlY2');
        const controlX1Value = document.getElementById('controlX1Value');
        const controlY1Value = document.getElementById('controlY1Value');
        const controlX2Value = document.getElementById('controlX2Value');
        const controlY2Value = document.getElementById('controlY2Value');

        controlX1.addEventListener('input', updateCurve);
        controlY1.addEventListener('input', updateCurve);
        controlX2.addEventListener('input', updateCurve);
        controlY2.addEventListener('input', updateCurve);

        function updateCurve() {
            controlX1Value.textContent = controlX1.value;
            controlY1Value.textContent = controlY1.value;
            controlX2Value.textContent = controlX2.value;
            controlY2Value.textContent = controlY2.value;

            const P0 = { x: 50, y: 250 }; // Starting point
            const P1 = { x: parseInt(controlX1.value), y: parseInt(controlY1.value) }; // Control point 1
            const P2 = { x: parseInt(controlX2.value), y: parseInt(controlY2.value) }; // Control point 2
            const P3 = { x: 450, y: 250 }; // Ending point

            const smooth = parseFloat(0.0001);

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Bézier curve
            ctx.beginPath();
            ctx.moveTo(P0.x, P0.y); // Starting point
            for (let t = 0; t <= 1; t += smooth) {
                const x = Math.pow(1 - t, 3) * P0.x + 3 * Math.pow(1 - t, 2) * t * P1.x + 3 * (1 - t) * Math.pow(t, 2) * P2.x + Math.pow(t, 3) * P3.x;
                const y = Math.pow(1 - t, 3) * P0.y + 3 * Math.pow(1 - t, 2) * t * P1.y + 3 * (1 - t) * Math.pow(t, 2) * P2.y + Math.pow(t, 3) * P3.y;
                ctx.lineTo(x, y);
            }
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Initial draw
        updateCurve();