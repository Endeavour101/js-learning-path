const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let listRawData = [];
  let seenSkus = [];

  for (let i = 0; i < rawData.length; i++) {
    const convertedRecordToObject = convertRecordToObject(rawData[i]);
    const sku = convertedRecordToObject.sku;

    if (seenSkus.includes(sku)) {
      continue;
    }
    seenSkus.push(sku);
    listRawData.push(convertedRecordToObject);
  }
  return listRawData;
}

function convertRecordToObject(recordRawData) {
  let elements = recordRawData.split("|");
  const sku = elements[0];
  const name = elements[1];
  const qty = parseInt(elements[2]);
  const expires = elements[3];
  const zone = elements[4] || "general";

  return { sku, name, qty, expires, zone };
}

function planRestock(pantry, shipment) {
  let actionsList = [];
  for (let i = 0; i < shipment.length; i++) {
    const recordShipment = shipment[i];
    if (recordShipment.qty <= 0) {
      actionsList.push({ type: "discard", item: recordShipment });
      continue;
    }
    let skuExistsIn = false;
    for (let j = 0; j < pantry.length; j++) {
      const recordPantry = pantry[j];
      if (recordPantry.sku === recordShipment.sku) {
        actionsList.push({ type: "restock", item: recordShipment });
        skuExistsIn = true;
        break;
      }
    }
    if (!skuExistsIn) {
      actionsList.push({ type: "donate", item: recordShipment });
    }
  }
  return actionsList;
}

function groupByZone(actions) {
  let groupedZones = {};
  for (let i = 0; i < actions.length; i++) {
    let currentAction = actions[i];

    if (Object.hasOwn(groupedZones, currentAction.item.zone)) {
      groupedZones[currentAction.item.zone].push(currentAction);
    } else {
      groupedZones[currentAction.item.zone] = [currentAction];
    }
  }
  return groupedZones;
}

console.log(groupByZone(planRestock(pantry, parseShipment(rawData))));
//console.log(planRestock(pantry, parseShipment(rawData)));

function clonePantry(pantry) {
  return structuredClone(pantry);
}
