let validateManifest = (manifest) => {
  const returnObject = {};

  if (manifest.containerId === undefined || manifest.containerId === null) {
    returnObject.containerId = "Missing";
  } else if (
    !isFinite(manifest.containerId) ||
    manifest.containerId <= 0 ||
    !Number.isInteger(manifest.containerId)
  ) {
    returnObject.containerId = "Invalid";
  }

  if (manifest.weight === undefined || manifest.weight === null) {
    returnObject.weight = "Missing";
  } else if (!isFinite(manifest.weight) || manifest.weight <= 0) {
    returnObject.weight = "Invalid";
  }

  if (
    manifest.destination === undefined ||
    manifest.destination === null ||
    (typeof manifest.destination === "string" &&
      manifest.destination.trim() === "")
  ) {
    returnObject.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    returnObject.destination = "Invalid";
  }

  if (
    manifest.unit === undefined ||
    manifest.unit === null ||
    (typeof manifest.unit === "string" && manifest.unit.trim() === "")
  ) {
    returnObject.unit = "Missing";
  } else if (typeof manifest.unit !== "string") {
    returnObject.unit = "Invalid";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    returnObject.unit = "Invalid";
  }

  if (manifest.hazmat === undefined || manifest.hazmat === null) {
    returnObject.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    returnObject.hazmat = "Invalid";
  }

  return returnObject;
};
