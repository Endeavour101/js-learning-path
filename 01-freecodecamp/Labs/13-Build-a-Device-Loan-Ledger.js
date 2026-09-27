const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function checkoutDevice(ledger, assetTag, borrower) {
  if (!Object.hasOwn(ledger, assetTag)) {
    let message = `asset tag: ${assetTag} was not found`;
    return { ledger, message };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    let message = `asset tag: ${assetTag}, the device is already checked out`;
    return { ledger, message };
  }

  let updatedLedger = structuredClone(ledger);
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";
  let message = `asset tag: ${assetTag}, borrower name: ${borrower.name}`;
  return { ledger: updatedLedger, message };
}

function checkinDevice(ledger, assetTag) {
  if (!Object.hasOwn(ledger, assetTag)) {
    let message = `asset tag ${assetTag} was not found`;
    return { ledger, message };
  }

  let updatedLedger = structuredClone(ledger);
  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";
  let message = `asset tag: ${assetTag} checked in`;
  return { ledger: updatedLedger, message: message };
}

function listOverdueDevices(ledger, today) {
  const normalizeDateToYYYYMMDD = (dateString) => {
    const [month, day, year] = dateString.split("/");
    const addedPadToDay = day.padStart(2, "0");
    const addedPadToMonth = month.padStart(2, "0");
    return `${year}${addedPadToMonth}${addedPadToDay}`;
  };

  const todayDate = normalizeDateToYYYYMMDD(today);

  const overduedDevices = Object.values(ledger).filter((hardware) => {
    if (hardware.status !== "CheckedOut") {
      return false;
    } else {
      const hardwareDueDate = normalizeDateToYYYYMMDD(hardware.dueDate);
      if (hardwareDueDate < todayDate) {
        return true;
      }
    }
  });

  return overduedDevices.sort((x, y) => {
    const dateX = normalizeDateToYYYYMMDD(x.dueDate);
    const dateY = normalizeDateToYYYYMMDD(y.dueDate);
    return dateX - dateY;
  });
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

console.log(
  checkoutDevice(equipmentLedger, 1, { name: "AA", email: "A@a.org" }),
);
