
export async function checkSynthetixStatus(req, res) {
  try {  
    console.log("[api/system/checkSynthetixStatus] Requested");
    res.status(200).json({
      data: {
        "SystemStatus.isSystemUpgrading": false,
        "DappMaintenance.isPausedSX": false
      }
    });
  } catch(e) {
    console.error("[api/system/checkSynthetixStatus] Error:", e);
    res.status(500).json({ error: e });
  }
}

export async function fetchKwentaStatus(req, res) {
  try {  
    console.log("[api/system/fetchKwentaStatus] Requested");
    res.status(200).json({data: {
        status: 0,
        message: "All systems operational",
        lastUpdatedAt: 1690994888
      }
    });
  } catch(e) {
    console.error("[api/system/fetchKwentaStatus] Error:", e);
    res.status(500).json({ error: e });
  }
}