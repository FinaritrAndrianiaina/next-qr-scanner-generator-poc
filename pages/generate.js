import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
import ReactToPdf from "react-to-pdf";

const qrList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

function Generate() {
    const ref = useRef();
    return (
        <>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref} style={{ width: '21.1cm', display: 'flex', flexWrap: 'wrap' }} >
                {qrList.map((v, index) =>
                (
                    <>
                        <div style={{ width: '50%', display: "flex", justifyContent: 'space-between', padding: 5, boxSizing: 'border-box', border: 'solid .1px' }}>
                            <span>test</span>
                            <div >
                                <QRCode size={200} key={index} value={v} />
                            </div>
                        </div>
                    </>
                )
                )
                }
            </div>
        </>
    );
}

export default Generate;
