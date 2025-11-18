import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QR_CONTENT = "https://selfservice.eslsca.edu.eg/PowerCampusSelfService/";

function Generation() {
  const [visible, setVisible] = useState(false);

  
  function showQRCode() {
    setVisible(true);
  }

  function hideQRCode() {
    setVisible(false);
  }

  return (
    <div className="button" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <button onClick={showQRCode}>Show QR Code</button>
      <button onClick={hideQRCode}>Hide QR Code</button>

      <div style={{ marginLeft: "20px" }}>
        {visible && <QRCodeSVG value={QR_CONTENT} />} {/**dah inline if statment bas men 8eer el "?". fa bet2olo " is it visible? law aywa, show el right side of the code el howa : show QR code, if not visible yeb2a yshow null" **/}
      </div>
    </div>
  );
}

export default Generation;
