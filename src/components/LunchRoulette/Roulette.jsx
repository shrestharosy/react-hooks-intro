import React, { useState, useRef, useEffect, useContext } from 'react';
import { LunchRouletteContext } from './LunchRoulette';

const rouletteStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const rouletteContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
}

export function Roulette() {
    const options = useContext(LunchRouletteContext)

    const baseSize = 300;
    const canvasRef = useRef();
    const initialRouletteState = {
        spinAngleStart: 0,
        startAngle: 0,
        spinTime: 0,
        arc: Math.PI / (options.length / 2),
    }
    let spinTimer = null
    const spinTimeTotal = Math.random() * 3 + 4 * 1000

    const [{ spinAngleStart, startAngle, spinTime, arc }, setRouletteState] = useState(initialRouletteState)

    useEffect(() => {
        drawRouletteWheel();
    })

    const RGB2Color = (r, g, b) => {
        return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
    }

    const byte2Hex = (n) => {
        const nybHexString = '0123456789ABCDEF';
        return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
    }

    const getColor = (item, maxItem) => {
        const phase = 0;
        const center = 128;
        const width = 128;
        const frequency = Math.PI * 2 / maxItem;

        const red = Math.sin(frequency * item + 2 + phase) * width + center;
        const green = Math.sin(frequency * item + 0 + phase) * width + center;
        const blue = Math.sin(frequency * item + 4 + phase) * width + center;

        return RGB2Color(red, green, blue);
    }

    const drawRouletteWheel = () => {
        // const spinTimeout = null;
        // const spinTime = 0;
        // const spinTimeTotal = 0;

        let ctx;
        const canvas = canvasRef;
        if (canvas.current.getContext) {
            const outsideRadius = baseSize - 25;
            const textRadius = baseSize - 45;
            const insideRadius = baseSize - 55;

            ctx = canvas.current.getContext('2d');
            ctx.clearRect(0, 0, 600, 600);

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;

            ctx.font = '14px Helvetica, Arial';

            for (let i = 0; i < options.length; i++) {
                const angle = startAngle + i * arc;

                ctx.fillStyle = getColor(i, options.length);

                ctx.beginPath();
                ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
                ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
                ctx.fill();

                ctx.save();
                ctx.fillStyle = 'white';
                ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
                    baseSize + Math.sin(angle + arc / 2) * textRadius);
                ctx.rotate(angle + arc / 2 + Math.PI / 2);
                const text = options[i];
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
                ctx.restore();
            }

            //Arrow
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
            ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
            ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
            ctx.fill();
            ctx.stroke();
        }
    }

    const spin = () => {
        spinTimer = null;
        setRouletteState({ spinTime: 0 })
        rotate();
    }

    const rotate = () => {
        if (spinTime > 2800) {
            clearTimeout(spinTimer);
            stopRotateWheel();
        } else {
            const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
            setRouletteState(
                {
                    startAngle: startAngle + spinAngle * Math.PI / 180,
                    spinTime: spinTime + 30,
                }
            )
            drawRouletteWheel();
            clearTimeout(spinTimer);
            spinTimer = setTimeout(() => rotate(), 30);

        }
    }

    const stopRotateWheel = () => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const degrees = startAngle * 180 / Math.PI + 90;
        const arcd = arc * 180 / Math.PI;
        const index = Math.floor((360 - degrees % 360) / arcd);
        ctx.save();
        ctx.font = 'bold 20px Helvetica, Arial';
        const text = options[index]
        ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize / 3);
        ctx.restore();
        this.props.onComplete(text);
    }

    const easeOut = (t, b, c, d) => {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }

    const handleOnClick = () => {
        spin();
    }


    return (
        <div style={rouletteStyle}>
            <div style={rouletteContainerStyle}>
                <canvas ref={canvasRef} width={baseSize * 2} height={baseSize * 2} className="roulette-canvas"></canvas>
            </div>
            <div className="roulette-container">
                <input type="button" value="spin" onClick={handleOnClick} className="button" id="spin" />
            </div>
        </div>
    )
}
