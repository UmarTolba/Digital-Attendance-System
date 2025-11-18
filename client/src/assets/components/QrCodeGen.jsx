import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router";

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
    <div className="button" className="flex-col" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <button onClick={showQRCode}>Show QR Code</button>
      <button onClick={hideQRCode}>Hide QR Code</button>

      <div>
        {visible && <QRCodeSVG value={QR_CONTENT} />} {/**dah inline if statment bas men 8eer el "?". fa bet2olo " is it visible? law aywa, show el right side of the code el howa : show QR code, if not visible yeb2a yshow null" **/}
      </div>

      <Link to="/Professor" className="m-auto mt-8 rounded-lg border-2 border-b-blue-300 border-solid hover:text-blue-800 w-[20%] flex justify-center
                        transition-all duration-100 hover:bg-white  font-semibold text-xl text-white items-center p-2 bg-blue-800"><i className="fa-solid fa-arrow-left mr-3"></i> Return to Dashboard</Link>
    </div>
  );
}

export default Generation;
